document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav)
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document
    .querySelectorAll(".chip")
    .forEach((c) =>
      c.addEventListener("click", () => c.classList.toggle("active")),
    );
  document.querySelectorAll("[data-favorite]").forEach((b) =>
    b.addEventListener("click", () => {
      b.classList.toggle("active");
      b.textContent = b.classList.contains("active") ? "♥ 已收藏" : "♡ 收藏";
    }),
  );
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    group.setAttribute("role", "tablist");
    const buttons = group.querySelectorAll(".tab");
    const target = group.dataset.tabs;
    const panels = document.querySelectorAll(`[data-tab-panel="${target}"]`);
    buttons.forEach((b, i) => {
      b.setAttribute("role", "tab");
      b.setAttribute(
        "aria-selected",
        b.classList.contains("active") ? "true" : "false",
      );
      b.addEventListener("click", () => {
        buttons.forEach((x) => {
          x.classList.remove("active");
          x.setAttribute("aria-selected", "false");
        });
        b.classList.add("active");
        b.setAttribute("aria-selected", "true");
        panels.forEach((p, j) => p.classList.toggle("active", j === i));
      });
      b.addEventListener("keydown", (e) => {
        let n = null;
        if (e.key === "ArrowRight") n = buttons[(i + 1) % buttons.length];
        if (e.key === "ArrowLeft")
          n = buttons[(i - 1 + buttons.length) % buttons.length];
        if (n) {
          e.preventDefault();
          n.focus();
          n.click();
        }
      });
    });
  });
  document.querySelectorAll("[data-copy]").forEach((btn) =>
    btn.addEventListener("click", async () => {
      const sel = btn.dataset.copy;
      const el = document.querySelector(sel);
      const text = el?.textContent || el?.value || "";
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {}
      const old = btn.textContent;
      btn.textContent = "已复制";
      setTimeout(() => (btn.textContent = old), 1200);
    }),
  );
  document.querySelectorAll("[data-demo]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("这是静态原型，此操作将在正式版接入后启用。");
    }),
  );
  document.querySelectorAll("[data-remove-compare]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const col = btn.dataset.removeCompare;
      document
        .querySelectorAll(`[data-compare-col="${col}"]`)
        .forEach((el) => (el.style.opacity = ".22"));
      btn.disabled = true;
    }),
  );
  const apply = document.querySelector("[data-apply-filter]");
  const count = document.querySelector("[data-result-count]");
  if (apply && count)
    apply.addEventListener("click", () => {
      let active = document.querySelectorAll(".chip.active").length;
      count.textContent = String(Math.max(42, 318 - active * 23));
      window.scrollTo({
        top:
          apply.closest(".card").offsetTop +
          apply.closest(".card").offsetHeight -
          70,
        behavior: "smooth",
      });
    });
  const toolSearch = document.querySelector("[data-tool-search]");
  if (toolSearch)
    toolSearch.addEventListener("input", () => {
      const q = toolSearch.value.toLowerCase();
      document
        .querySelectorAll("[data-tool]")
        .forEach(
          (t) =>
            (t.style.display = t.textContent.toLowerCase().includes(q)
              ? "flex"
              : "none"),
        );
    });
  const ipForm = document.querySelector("[data-ip-form]");
  if (ipForm)
    ipForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = ipForm.querySelector("input");
      const val = input.value.trim() || "8.8.8.8";
      document
        .querySelectorAll("[data-ip-value]")
        .forEach((x) => (x.textContent = val));
      document.querySelector("[data-ip-result]").hidden = false;
    });

  // 1. 浮动对比栏逻辑
  let compareSet = new Set();
  const compareBar = document.getElementById("compare-bar");
  const compareCount = document.getElementById("compare-count");
  const clearCompareBtn = document.getElementById("clear-compare-btn");

  document.querySelectorAll("[data-compare-btn]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const planId =
        btn.dataset.compareBtn ||
        btn.closest("tr")?.innerText.split("\n")[0] ||
        Math.random();
      if (compareSet.has(planId)) {
        compareSet.delete(planId);
        btn.textContent = "对比";
        btn.classList.remove("btn-primary");
      } else {
        if (compareSet.size >= 4) {
          alert("最多同时支持对比 4 款套餐");
          return;
        }
        compareSet.add(planId);
        btn.textContent = "✓ 已选";
        btn.classList.add("btn-primary");
      }
      if (compareCount) compareCount.textContent = compareSet.size;
      if (compareBar) {
        compareBar.style.display = compareSet.size > 0 ? "flex" : "none";
      }
    });
  });

  if (clearCompareBtn) {
    clearCompareBtn.addEventListener("click", () => {
      compareSet.clear();
      document.querySelectorAll("[data-compare-btn]").forEach((btn) => {
        btn.textContent = "对比";
        btn.classList.remove("btn-primary");
      });
      if (compareCount) compareCount.textContent = "0";
      if (compareBar) compareBar.style.display = "none";
    });
  }

  // 2. 对比页高亮差异项
  const toggleDiff = document.getElementById("toggle-diff");
  if (toggleDiff) {
    toggleDiff.addEventListener("change", () => {
      const isDiffOnly = toggleDiff.checked;
      const grid = document.querySelector(".compare-grid");
      if (!grid) return;
      const rows = grid.children;
      // 每 5 个元素为一行（1 个 label + 4 个对比列）
      for (let i = 5; i < rows.length; i += 5) {
        const label = rows[i];
        const c0 = rows[i + 1]?.textContent.trim();
        const c1 = rows[i + 2]?.textContent.trim();
        const c2 = rows[i + 3]?.textContent.trim();
        const c3 = rows[i + 4]?.textContent.trim();
        const isSame = c0 === c1 && c1 === c2 && c2 === c3;
        for (let j = 0; j < 5; j++) {
          const cell = rows[i + j];
          if (!cell) continue;
          if (isDiffOnly) {
            if (isSame) {
              cell.classList.add("row-same");
              cell.classList.remove("row-diff");
            } else {
              cell.classList.add("row-diff");
              cell.classList.remove("row-same");
            }
          } else {
            cell.classList.remove("row-same", "row-diff");
          }
        }
      }
    });
  }

  // 3. FAQ 手风琴展开折叠
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      if (item) item.classList.toggle("open");
    });
  });

  // 4. 有用点赞交互
  document.querySelectorAll("[data-like-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      const match = btn.textContent.match(/\d+/);
      const count = match ? parseInt(match[0], 10) + 1 : 1;
      btn.textContent = `👍 觉得有用 (${count})`;
      btn.disabled = true;
      btn.style.color = "var(--blue)";
    });
  });

  // 5. 踩反馈交互（与点赞对称）
  document.querySelectorAll("[data-dislike-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      const match = btn.textContent.match(/\d+/);
      const count = match ? parseInt(match[0], 10) + 1 : 1;
      btn.textContent = `👎 已反馈 (${count})`;
      btn.disabled = true;
      btn.style.color = "var(--muted)";
    });
  });

  // 6. 指南页前端过滤（搜索 + 分类 chip）
  const guideSearch = document.querySelector("[data-guide-search]");
  const guideCards = document.querySelectorAll("[data-guide-card]");
  if (guideCards.length) {
    const applyGuideFilter = () => {
      const q = (guideSearch?.value || "").toLowerCase();
      const cat =
        document.querySelector("[data-guide-filter].active")?.dataset
          .guideFilter || "all";
      guideCards.forEach((c) => {
        const matchQ = !q || c.textContent.toLowerCase().includes(q);
        const matchC = cat === "all" || c.dataset.guideCard.includes(cat);
        c.style.display = matchQ && matchC ? "" : "none";
      });
    };
    guideSearch?.addEventListener("input", applyGuideFilter);
    document
      .querySelector("[data-guide-search-btn]")
      ?.addEventListener("click", applyGuideFilter);
    document.querySelectorAll("[data-guide-filter]").forEach((chip) =>
      chip.addEventListener("click", () => {
        document
          .querySelectorAll("[data-guide-filter]")
          .forEach((x) => x.classList.remove("active"));
        chip.classList.add("active");
        applyGuideFilter();
      }),
    );
  }

  // 7. 文章页阅读进度条
  const article = document.querySelector(".article");
  const progress = document.querySelector("[data-reading-progress]");
  if (article && progress) {
    const onScroll = () => {
      const total = article.offsetHeight - window.innerHeight;
      const read = Math.min(
        Math.max(-article.getBoundingClientRect().top, 0),
        total,
      );
      progress.style.width = (total > 0 ? (read / total) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 8. 文章目录 scrollspy 高亮
  const tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length) {
    const sections = [...tocLinks]
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    const spy = () => {
      let current = 0;
      sections.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= 120) current = i;
      });
      tocLinks.forEach((a, i) => a.classList.toggle("active", i === current));
    };
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }
});
