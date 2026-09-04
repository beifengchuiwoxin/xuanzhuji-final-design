# xuanzhuji.com 最终统一设计原型

这套静态原型将 Stitch 的高密度 VPS Dashboard 视觉与 `xuanzhuji.com Design System v1.0` 合并，用作后续 Laravel/Codex 实现的最终视觉基准。

## 页面

1. `index.html` — 首页
2. `vps.html` — 找 VPS / 高级筛选
3. `plan.html` — VPS 套餐详情
4. `compare.html` — 套餐对比
5. `providers.html` — 商家库
6. `provider.html` — 商家详情
7. `deals.html` — 优惠与价格历史
8. `benchmarks.html` — 测速大厅
9. `benchmark.html` — 测试报告详情
10. `looking-glass.html` — Looking Glass / MTR
11. `toolbox.html` — 工具箱
12. `ip.html` — IP 查询工具
13. `region.html` — 地区 VPS 数据页
14. `guides.html` — 指南首页
15. `guide.html` — 指南文章详情

## 设计原则

- 视觉：Stitch 高密度 SaaS / Developer Tools 风格
- 页面架构：选主机数据决策平台
- 纯 HTML/CSS/JS，无 Tailwind CDN、Google Fonts 或外部字体依赖
- 全站共用 CSS / JS / Logo 资源
- 响应式桌面、平板与手机布局
- 测速、在线率、价格等关键数据必须显示时间、样本或来源语义
- 正式上线时所有演示数据必须替换为数据库真实数据

## 文档

- `docs/Design-System-v1.md` — 最终设计规范
- `docs/Stitch-reference-design.md` — Stitch 视觉参考设计系统
