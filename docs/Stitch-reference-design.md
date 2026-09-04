---
name: Cloud Benchmark Platform
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#ab0b1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#cf2c30'
  on-tertiary-container: '#ffecea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
  body-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  metric-lg:
    fontFamily: inter
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 28px
    letterSpacing: -0.02em
  metric-md:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 2.5rem
  grid-gutter: 1rem
  card-p-sm: 0.75rem
  card-p-md: 1rem
  card-p-lg: 1.25rem
  element-gap-xs: 0.25rem
  element-gap-sm: 0.5rem
  element-gap-md: 0.75rem
---

## Brand & Style

This design system powers a high-density, professional benchmark, network monitoring, and price comparison platform tailored for VPS developers, sysadmins, and tech hobbyists. The visual atmosphere conveys utmost objectivity, technical transparency, speed, and real-time reliability.

The core aesthetic combines **Corporate / Modern SaaS** with high-clarity **Developer Tools Data Density**:
- **Utilitarian & Objective**: Pure white modular surfaces on ultra-soft cool-slate backgrounds eliminate visual noise, letting ping charts, hardware metrics, and price fluctuations command focus.
- **Micro-Metric Precision**: Small, legible typography paired with micro-badges, sparklines, and status chips enables scanning massive amounts of structured data effortlessly.
- **Authoritative Accents**: Engineering-grade royal blue anchors search queries and primary navigational workflows, while emerald green confirms optimal latency/uptime and vibrant red-orange highlights price drops and network alerts.

## Colors

The palette is engineered for analytical readability, sharp contrast, and instantaneous status comprehension across dense monitoring dashboards.

### Surface & Neutral Tiers
- **Canvas Base (`#F8FAFC`)**: A cool slate-tinted canvas that reduces eye fatigue under extended terminal and dashboard monitoring.
- **Card Surface (`#FFFFFF`)**: Crisp, pure white container cards providing maximum luminance contrast for small metrics and sparkline charts.
- **Subtle Surface (`#F1F5F9`)**: Used for table headers, inactive filter buttons, and search container backgrounds.
- **Border Subtle (`#E2E8F0`)**: Minimalist, hairline borders giving distinct modular boundaries without visually dividing the screen harshly.
- **Border Focus / Active (`#CBD5E1`)**: Subtle reinforcement for hovered cards and interactive fields.
- **Text Primary (`#0F172A`)**: Near-black slate for maximum contrast in typography and headline metrics.
- **Text Secondary (`#475569`)**: Medium-contrast neutral for subheaders, labels, and table metadata.
- **Text Muted (`#94A3B8`)**: Low-contrast neutral for timestamps, secondary metric tags, and unit labels (`/月起`, `ms`).

### Functional Brand & Semantic Accents
- **Primary Brand (`#2563EB`) / Hover (`#1D4ED8`)**: The definitive technological anchor used for the main search trigger, primary action links, active state tabs, and core platform branding.
- **Network Optimal / Score Green (`#10B981` & `#059669`)**: Used for low latency, 0% packet loss metrics, optimal routes, and high-rating score badges (`9.4`, `8.9`).
- **Promotional / Alert Coral Red (`#EF4444` & `#EA580C`)**: High-salience indicator reserved for price drops (`↓ 25%`), budget highlights (`$4.49 /月`), and critical packet loss warnings.
- **Soft Semantic Badges**:
  - *Green Pill*: Background `#ECFDF5`, text `#059669`, border `#A7F3D0`.
  - *Red/Orange Pill*: Background `#FEF2F2`, text `#DC2626`, border `#FECACA`.
  - *Blue Pill*: Background `#EFF6FF`, text `#2563EB`, border `#BFDBFE`.
  - *Gray Filter Pill*: Background `#F1F5F9`, text `#475569`, hover `#E2E8F0`.

## Typography

The type system relies on `Inter` with fallback to native CJK grotesque typefaces (`PingFang SC`, `Microsoft YaHei`, `Noto Sans SC`) to guarantee clean letterforms across Chinese technical terms and alphanumeric benchmark stats.

- **Display & Headings**: Tightly tracked (`-0.025em`), bold letterforms for the main page header and section banners (`当前值得买`, `今日网络情况`).
- **Metric Numbers**: Dedicated sizing weights (`metric-lg`, `metric-md`) paired with tabular figures (`font-variant-numeric: tabular-nums`) so that real-time speeds (`1.02 Gbps`), response times (`152 ms`), and prices (`$4.49`) line up vertically in tables without shifting.
- **Micro-labels**: High-contrast, clean x-height labels (`label-sm`, `11px/12px`) with semi-bold weights ensure status pills and benchmark spec chips remain sharp even on mobile screens.

## Layout & Spacing

The layout is built around a centralized, fixed-width 12-column grid capped at a maximum width of `1200px` (`max-w-7xl` centered with dynamic inline page gutters of `16px` on mobile and `24px` on desktop).

### Responsive Grid Adaptations
- **Desktop (≥ 1024px)**:
  - Metric counters: 5-column row (`repeat(5, minmax(0, 1fr))`).
  - Featured deal cards: 4-column row (`repeat(4, minmax(0, 1fr))`).
  - Network status widgets: 4-column row with inline sparkline telemetry.
  - Split content sections: 8 columns for rank table vs 4 columns for price drops / category matrix.
- **Tablet (768px – 1023px)**:
  - Deal cards collapse to a 2x2 grid.
  - Network status widgets collapse to 2 columns.
  - Metric counters reflow into a 3/2 split.
- **Mobile (< 768px)**:
  - Grids collapse strictly into single-column vertical stacks.
  - Quick filter pills and sub-navigation switch to an edge-to-edge horizontally scrollable overflow container (`overflow-x-auto` with `-mx-4 px-4`).
  - Complex tables provide inline horizontal touch-scrolling with sticky first columns (Provider name).

### Spacing Rhythm
Vertical section spacing follows an orderly cadence of `2.5rem` (40px) between disparate content domains, with tight intra-card spacing (`0.5rem` to `0.75rem`) maintaining unified data groupings.

## Elevation & Depth

This design system minimizes atmospheric blur in favor of a crisp, functional hierarchy using low-contrast outlines and razor-thin ambient drop shadows:

- **Level 0 (Flat / Canvas)**: `#F8FAFC` base surface with no shadow.
- **Level 1 (Card & Module Default)**: `#FFFFFF` surface enclosed by a 1px solid border `#E2E8F0` with an ultra-subtle ambient shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Interactive Hover / Focus State)**: Triggered when hovering over deal cards, quick-tool links, and selector dropdowns: shifts border to `#CBD5E1` and elevates shadow to `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Overlays & Dropdowns)**: Active selector menus and popovers use `#FFFFFF` on `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)` with a crisp `#E2E8F0` perimeter border.

## Shapes

The interface employs a balanced modern curvature:
- **Default Elements (`0.5rem` / 8px)**: Standard input fields, search filters, modal buttons, and internal tool micro-cards.
- **Containers & Big Cards (`0.75rem` / 12px)**: Used for primary deal cards, data-rank sections, and hero search modules.
- **Badges & Quick Filters (`9999px` / Pill-shape)**: Quick filter chips (`$5以下`, `CN2`, `原生IP`) and inline tags adopt full pill geometry, providing strong shape contrast against the square architecture of cards and tables.
- **Score Badges (`0.375rem` / 6px)**: High-density rating badges (`9.3`, `8.7`) use compact rounded corners with a 1px emerald border.

## Components

### Buttons
- **Primary Search Button**: Solid `#2563EB` fill, white text, bold font, `0.5rem` radius, subtle hover transition to `#1D4ED8`. Includes clean search icon prefix.
- **Secondary Action Button**: Hairline border `#E2E8F0`, background `#FFFFFF`, text `#0F172A`. On hover: border `#CBD5E1`, background `#F8FAFC`.
- **Ghost Action / Text Link (`查看详情`, `更多推荐 >`)**: Borderless, text `#475569`, hover `#2563EB` with smooth color transition.

### Chips & Quick Filters
- **Interactive Quick Filter Chip**: Light gray `#FFFFFF` base, 1px border `#E2E8F0`, text `#475569`, pill radius (`rounded-full`), padding `0.25rem 0.75rem`. Hover state introduces `#F1F5F9` background and `#2563EB` text.
- **Active Pill Filter**: Solid `#2563EB` or light-tint `#EFF6FF` with text `#2563EB` and border `#BFDBFE`.

### Input & Select Fields
- **Filter Dropdown Bars**: Multi-segment grouped controls inside a white container `#FFFFFF`. Hairline borders `#E2E8F0`, icons anchored to the left in `#94A3B8`, chevron to the right. On active/focus: ring `2px #2563EB` with `0.1` opacity.

### Featured Deal Cards
- White `#FFFFFF` card, 12px radius, 1px `#E2E8F0` border.
- Header row with national flag SVG, bold merchant title, subtitle, and top-right emerald rating badge (`border: 1px solid #10B981`, text `#059669`).
- Spec grid: 2-column or 4-column compact micro-labels (vCPU, RAM, NVMe storage, IPv4).
- Inline feature chips: soft red promo tag (`$5.24/月`), network line tag (`CN2 GIA`), and IP category (`原生IP`).
- Bottom row: big bold price (`$4.49 /月起` in `#EF4444`) aligned against a neutral detail button.

### Network Monitoring Widgets
- Dedicated mini-dashboards for ping and packet loss.
- Header row: location flag + city name, large metric stats (`Ping 152 ms` in red if degraded, or green `#10B981` if optimal, `丢包 0%`).
- Sparkline chart: 40px height SVG vector line, stroke `#10B981` (normal) or `#F97316` / `#EF4444` (unstable), zero-fill or delicate linear-gradient bottom bleed.
- Sub-row: delta indicator comparing with previous day (`较昨日 ↓ 8ms`).

### Data Tables & Benchmark Ranking
- **Table Container**: Encapsulated within a white card with header tabs (`性价比`, `稳定`, `网络`, `流媒体`).
- **Headers**: Slate `#64748B`, font-size `12px`, uppercase, medium weight, border-b `#F1F5F9`.
- **Rank Indicators**: Distinctive circular badges for podium positions (Gold #1, Silver #2, Bronze #3).
- **Rows**: Alternating subtle hover state `#F8FAFC`, compact cell height (48px) to maximize data density.

### Tool Navigation Grid
- Modular 2x3 or 1x5 grid of utility cards (`IP 查询`, `路由测试`, `TCP Ping`, `Looking Glass`, `价格计算器`).
- Icon housing with soft blue background (`#EFF6FF`), icon stroke `#2563EB`, right-aligned subtle disclosure chevron (`#CBD5E1`).