# xuanzhuji.com Design System & 页面规范

版本：v1.0  
目标：统一 Stitch、Codex、Antigravity 生成的所有页面，使 xuanzhuji.com 保持一致的视觉语言、信息架构与数据可信度。

---

## 1. 产品定位

xuanzhuji.com 不是传统 VPS 评测博客，而是：

> 基于价格、套餐、真实测速、线路、在线率、流媒体与历史数据的 VPS 数据决策平台。

核心价值排序：

1. 真实数据
2. 可比较
3. 可筛选
4. 可追溯
5. 可解释
6. 最后才是推荐与 Affiliate

页面设计必须优先服务“做决策”，而不是服务“展示品牌”。

---

## 2. 设计关键词

- 数据优先
- 简洁
- 专业
- 克制
- 可信
- 工程感
- Dashboard 风格
- Mac / SaaS 风格
- 轻量科技感

避免：

- 大面积渐变
- 3D 服务器插画
- 夸张营销 Banner
- 过多动画
- 霓虹风
- 过度玻璃拟态
- 密集广告感
- 优惠券站视觉

---

## 3. 全局视觉语言

### 3.1 页面背景

主背景：
- #F8FAFC / #F9FAFB 一类轻灰白

卡片背景：
- #FFFFFF

分割线 / 边框：
- #E5E7EB / #E6EAF0

正文：
- #111827 / #0F172A

辅助文字：
- #64748B / #6B7280

品牌主色：
- 蓝色系
- 推荐：#2563EB / #1D4ED8 / #3B82F6

成功：
- #16A34A

警告：
- #F59E0B

危险 / 降价：
- #EF4444

信息标签：
- 淡蓝底 + 深蓝字

---

## 4. 字体规范

首选：
- system-ui
- -apple-system
- BlinkMacSystemFont
- "PingFang SC"
- "Microsoft YaHei"
- sans-serif

不要依赖 Google Fonts。

字号建议：

| 场景 | 字号 |
|---|---:|
| H1 | 32–40px |
| H2 | 22–28px |
| H3 | 18–20px |
| 正文 | 14–16px |
| 表格 | 13–14px |
| 辅助文字 | 12–13px |
| 标签 | 12px |

规则：
- 正文最低 14px
- 表格最低 13px
- 不为了“更像 Dashboard”把正文压到 11px

---

## 5. 圆角与阴影

卡片圆角：
- 10–14px

按钮圆角：
- 8–10px

Tag：
- 6–8px

阴影：
- 极轻
- 仅用于卡片层级、浮层、Drawer
- 不使用重阴影

推荐：
box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04)

---

## 6. 页面宽度

桌面：
- max-width: 1180–1280px
- 居中

超宽屏：
- 不无限拉伸

移动端：
- 16px 左右安全边距

---

## 7. Header 统一规范

固定一级导航：

- 找 VPS
- 商家库
- 优惠
- 实测
- 工具箱
- 指南

右侧：

- 搜索
- 登录
- 加入共建

移动端：
- 汉堡菜单
- 保留“找 VPS”作为强入口

不允许不同页面随意变更导航名称。

---

## 8. Footer 统一规范

必须包含：

- Logo + 一句话定位
- 关于
- 数据来源
- 评分方法
- 免责声明
- 隐私政策
- 联系我们

Affiliate 声明：

> 部分购买链接可能包含推广关系，但不会增加用户购买成本。

---

## 9. 按钮体系

主按钮：
- 蓝底白字

次按钮：
- 白底蓝字 + 边框

危险 / 强转化按钮：
- 仅购买操作可使用橙红色
- 不允许整页大量红色 CTA

示例：
- 查看详情
- 查看实测
- 加入对比
- 查看价格历史
- 立即购买

购买按钮和数据按钮必须视觉区分。

---

## 10. 标签体系

### 网络线路

- CN2 GIA
- CMI
- 9929
- SoftBank
- BGP
- 普通国际线路

### IP

- 原生 IP
- 广播 IP
- IPv6
- 住宅属性（仅有可靠数据时）

### 用途

- 建站
- ChatGPT
- 流媒体
- 开发测试
- 大流量
- 大存储
- 中国优化

### 商业标签

- 性价比
- 新用户
- 年付优惠
- 长期优惠

规则：
- 标签必须来源于真实字段或规则
- 不允许为了 UI 好看自动添加标签

---

# 11. 数据可信度规范

这是全站最高优先级规则。

## 11.1 无数据

错误：

> 在线率 100%

实际：

> 监控节点：0

正确：

> 暂无监控数据

---

## 11.2 数据积累状态

0 节点：
> 暂无数据

1+ 节点，少于 7 天：
> 数据积累中

7 天以上：
> 7 日在线率

30 天以上：
> 30 日在线率

---

## 11.3 每组关键数据尽量展示

- 样本数量
- 监控节点数
- 测试时间
- 最后更新时间
- 数据来源

示例：

> 30 日在线率 99.93%  
> 2 个监控节点 · 17,280 次采样 · 3 分钟前更新

---

## 11.4 排名资格

稳定榜至少满足：

- 监控节点 ≥ 1
- 数据周期 ≥ 30 天
- 采样量达到最低阈值

没有资格：
> 不参与排名

绝不能拿“暂无数据”参与排行榜。

---

# 12. 首页规范

首页任务：

> 让用户在 10 秒内开始筛选 VPS。

## 第一屏

标题：

> 找到真正适合你的 VPS

副标题：

> 基于价格、配置、线路与真实测试数据，帮你更快做决定。

筛选：

- 地区
- 预算
- 内存
- 用途

按钮：

> 查找 VPS

热门快捷入口：

- $5 以下
- 香港
- 日本
- 洛杉矶
- CN2
- 原生 IP
- ChatGPT
- 流媒体
- 大流量

---

## 首页模块顺序

1. Hero + 快速筛选
2. 数据规模
3. 当前值得买
4. 今日网络情况
5. 数据榜单
6. 最近降价
7. 最新真实测速
8. 用途推荐
9. 工具箱
10. Footer

数据为空时：
- 自动隐藏该模块
- 或显示明确的“数据积累中”

不要展示四个“暂无数据”卡片占据首页核心区域。

---

# 13. 找 VPS 页面

推荐采用 Stitch 版核心结构。

桌面：

左侧 / 顶部筛选：
- 地区
- 预算
- CPU
- RAM
- SSD
- 带宽
- 线路
- IPv4
- 商家
- 用途
- 流媒体
- 支付周期

主区域：
- 套餐列表 / 表格

排序：
- 推荐
- 最低价
- 性价比
- 网络
- 实测
- 最近更新

移动端：
- 筛选项折叠为 Drawer
- 顶部固定“筛选 / 排序”

套餐行必须显示：

- 商家
- 地区
- CPU
- RAM
- SSD
- 流量
- 带宽
- 线路
- 当前价格
- 实测状态
- 详情
- 收藏 / 对比

---

# 14. VPS 套餐详情页

URL 示例：

/vps/racknerd-2gb-los-angeles-dc02

页面重点：

1. 套餐名称
2. 当前价格
3. 历史最低
4. 优惠状态
5. 基础配置
6. 数据中心
7. 网络线路
8. 库存
9. 价格历史
10. 最新实测
11. 在线率
12. 流媒体能力
13. 类似套餐
14. 购买 CTA

不要把完整 Benchmark 报告塞进套餐详情。

详情页负责：

> “这个套餐值不值得买？”

---

# 15. 测速报告详情页

URL：

/benchmarks/{id}

这是 xuanzhuji.com 核心数据资产。

必须包含：

- 测试时间
- 测试脚本版本
- 商家
- 套餐
- 数据中心
- OS
- CPU
- RAM
- SSD
- IPv4 / IPv6

性能：

- Geekbench
- FIO
- 网络上下行

网络：

- Ping
- 丢包
- 三网延迟
- 路由
- MTR / NextTrace

流媒体：

- Netflix
- YouTube
- Disney+
- ChatGPT
- TikTok
- 其他

底部：

- 原始 JSON
- 原始 TXT
- 测试方法
- 数据更新时间

测速报告负责：

> “这台 VPS 实际表现怎么样？”

---

# 16. 套餐对比页

最多：
- 4 款

对比维度：

基础配置：
- CPU
- RAM
- SSD
- 流量
- 带宽
- IPv4

价格：
- 月付
- 年付
- 历史最低

网络：
- 电信
- 联通
- 移动
- 丢包

实测：
- Geekbench
- FIO
- 下载速度

功能：
- Netflix
- YouTube
- Disney+
- ChatGPT

最终：

- 综合评分
- 适合谁
- 主要短板

---

# 17. 商家库

列表页负责“找商家”。

筛选：

- 国家 / 地区
- 成立年份
- 支付方式
- 退款
- 是否有实测
- 是否有监控
- 评分

卡片：

- Logo
- 名称
- 国家
- 成立年份
- 在售套餐数
- 主要地区
- 支付方式
- 评分
- 是否有实测

---

# 18. 商家详情页

推荐采用 Stitch DMIT 页面结构。

包含：

1. 商家基础信息
2. 一句话结论
3. 适合 / 不适合
4. 数据中心
5. 在售套餐
6. 最新实测
7. 在线率
8. 价格特点
9. 流媒体
10. IP 属性
11. Looking Glass
12. 退款政策
13. 用户评分
14. 类似商家

商家简介禁止大段 AI 套话。

必须尽量结构化：

> 适合：  
> 不适合：  
> 价格特点：  
> 主要地区：  
> 本站实测：  
> 本站监控：  
> 最后核验：

---

# 19. 优惠中心

定位：

> 价格数据平台，不是优惠券站。

页面模块：

1. 当前优惠
2. 今日新增
3. 最近降价
4. 补货监控
5. 历史低价
6. 价格历史

每个优惠必须展示：

- 商家
- 套餐
- 原价
- 当前价
- 降幅
- 活动期限
- 历史最低
- 是否接近历史低价

优惠红色只用于价格变化。

---

# 20. 价格历史

必须有：

- 当前价
- 历史最低
- 历史最高
- 90 天均价
- 365 天均价
- 首次记录
- 最近变化

图表尽量简洁。

允许用户快速回答：

> 现在买贵不贵？

---

# 21. 测速大厅

采用 Stitch + 原规划融合。

顶部：

- 测试数量
- 今日新增
- 覆盖地区
- 活跃商家

提交测试：

- 一键脚本
- 查看提交指南

筛选：

- 商家
- 地区
- CPU
- 时间
- 价格区间

列表：

- 商家
- 节点
- CPU
- SSD
- 网络
- 解锁
- 时间
- 查看报告

---

# 22. Looking Glass 页面

采用 Stitch 结构。

功能 Tab：

- Ping
- TCP Ping
- MTR
- Traceroute
- Looking Glass
- 下载测试文件

显示：

- Source
- Target
- Hop
- IP
- ASN
- Location
- Loss
- Avg
- Worst

必须明确：

> 测试节点、测试时间、数据来源

---

# 23. 工具箱

分类：

## 网络工具
- 路由测试
- TCP Ping
- Looking Glass
- MTR
- 端口检测
- DNS 查询

## 查询工具
- IP 查询
- ASN 查询
- IP 段查询
- SSL 查询

## 价格工具
- VPS 价格计算器
- 汇率换算
- 成本对比
- 预算估算

## 决策工具
- 节点对比
- 配置推荐
- VPS 选择器

工具页必须：
- 首屏直接可操作
- 不要让用户先读 1000 字文章

---

# 24. 工具详情页

模板：

1. H1
2. 一句话用途
3. 工具输入区
4. 结果区
5. 结果解释
6. 相关工具
7. FAQ / 使用说明

IP 查询结果：

- IP
- 国家
- 城市
- ISP
- ASN
- 经纬度
- IP 类型
- 地图（有可靠数据时）

---

# 25. 地区 VPS SEO 页面

URL：

/vps/los-angeles/
/vps/hong-kong/
/vps/japan/

页面必须具备独有数据，不允许只是筛选结果。

顶部统计：

- 套餐数
- 商家数
- 最低价
- 中位价格
- 实测数

正文模块：

- 当前最便宜
- 最稳定
- 中国大陆表现
- 网络线路分布
- 最近降价
- 套餐列表
- 最近实测

---

# 26. 线路 SEO 页面

例如：

/vps/cn2-gia/

模块：

- 什么是该线路（简短）
- 收录套餐数
- 主要地区
- 价格分布
- 实测延迟
- 商家分布
- 套餐列表

不要自动生成无数据线路页。

---

# 27. 用途 SEO 页面

例如：

/vps/chatgpt/
/vps/wordpress/
/vps/streaming/
/vps/large-storage/

页面必须有真实筛选逻辑。

例如 ChatGPT：

- IP 质量
- 是否可访问
- 地区
- 延迟
- 套餐
- 实测

不是普通“推荐 10 家 VPS”文章。

---

# 28. 指南首页

分类：

- 新手入门
- VPS 选购
- 网络线路
- 商家
- 建站
- 流媒体
- 运维

首页强调：

- 热门指南
- 最新更新
- 数据型指南
- 工具关联

---

# 29. 指南文章页

文章模板：

1. 标题
2. 更新时间
3. 作者 / 数据来源
4. 结论摘要
5. 正文
6. 表格 / 数据
7. 相关套餐
8. 相关工具
9. FAQ
10. 相关文章

文章尽量引用站内实时数据。

避免：

> 单纯 AI 扩写百科。

---

# 30. 排行榜

榜单：

- 性价比
- 稳定
- 网络
- 流媒体
- 中国优化

必须公开：

- 评分规则
- 最低样本要求
- 数据周期

无资格套餐不参与。

---

# 31. AdSense 规范

广告不能破坏“数据平台”视觉。

推荐位置：

- 首屏筛选后
- 表格 8–12 条后
- 内容正文自然段之间
- 文章结束附近

避免：

- CTA 旁边紧贴广告
- 数据卡片内部夹广告
- 页面顶部巨大广告抢第一屏
- 让广告看起来像“购买按钮”

---

# 32. Affiliate 规范

购买链接必须：

- 清晰
- 不伪装
- 不影响评分

页面显示：

> 此链接可能包含推广关系，不会增加你的购买成本。

商家评分不能因为 Affiliate 提高。

---

# 33. SEO 页面生成原则

允许：

- 有搜索需求
- 有真实数据
- 有足够套餐
- 页面统计能形成差异

不允许：

自动生成：

> 美国 + 2GB + $5 + NVMe + Netflix + CN2

数千组合页。

低价值组合：
- noindex
- 或不生成独立 URL

---

# 34. 页面组件库

必须统一组件：

- Header
- Footer
- Breadcrumb
- Page Title
- Stat Card
- Provider Card
- Plan Row
- Price Badge
- Route Badge
- Status Badge
- Data Source Badge
- Score Badge
- Filter Bar
- Table
- Tabs
- Chart Card
- Empty State
- Pagination
- CTA
- Disclosure
- Tool Form
- Result Panel

Stitch 继续生成页面时，必须复用这些视觉规则。

---

# 35. Empty State 规范

不要写：

> No data

推荐：

### 监控
> 暂无足够监控数据  
> 当前节点仍在积累样本。

### 实测
> 暂无真实测试报告  
> 你可以提交一台 VPS 参与测试。

### 价格
> 暂无足够价格历史  
> 已开始记录后续价格变化。

---

# 36. 图表规范

图表用途：

- 价格趋势
- 在线率
- 延迟
- 丢包
- 网络速度

规则：

- 不堆叠过多颜色
- 不做装饰图表
- Tooltip 必须有时间与值
- 允许 7 天 / 30 天 / 90 天 / 1 年切换

---

# 37. 移动端规则

桌面数据表格不得简单缩小。

移动端：

- 表格 → 卡片
- 筛选 → Drawer
- Tabs → 横向滑动
- 图表 → 100% 宽
- 购买 CTA 可吸底
- 次要字段折叠

移动端优先显示：

1. 名称
2. 价格
3. 配置
4. 地区
5. 网络
6. 评分
7. 查看详情

---

# 38. Stitch 提示词统一前缀

以后每次生成新页面，提示词开头统一加入：

> Design a production-ready page for xuanzhuji.com, a Chinese VPS data decision platform. Follow a clean Mac/SaaS dashboard visual language: white and very light gray backgrounds, subtle borders, blue as the primary brand color, restrained green/red status colors, 10–14px card radius, minimal shadow, high data density but readable typography. The page must feel like a professional cloud infrastructure analytics product, not a coupon website or marketing landing page. Prioritize real data, comparison, filtering, transparency, timestamps, sample counts and data-source clarity. Do not invent perfect metrics when data is unavailable; show explicit empty/data-collecting states. Use Chinese UI copy.

然后附当前页面具体要求。

---

# 39. Codex / Antigravity 实现规范

不要直接复制 Stitch 输出的整页 HTML。

生产实现必须组件化。

推荐 Laravel：

resources/views/
├── layouts/
│   └── app.blade.php
├── components/
│   ├── header.blade.php
│   ├── footer.blade.php
│   ├── stat-card.blade.php
│   ├── plan-row.blade.php
│   ├── provider-card.blade.php
│   ├── score-badge.blade.php
│   ├── status-badge.blade.php
│   ├── filter-bar.blade.php
│   └── chart-card.blade.php
├── vps/
├── providers/
├── deals/
├── benchmarks/
├── tools/
└── guides/

CSS / JS：
- 统一入口
- 不允许每页单独复制设计系统
- 不依赖 Tailwind CDN
- 不依赖 Google Fonts
- 图标本地化或使用项目统一图标库

---

# 40. 最终视觉来源规则

当前项目统一采用：

### 视觉语言
Stitch 约 70%

### 信息架构 / 页面体系
当前 xuanzhuji.com 产品规划约 80%

### 代码架构
组件化生产实现 100%

保留 Stitch 优势：

- Dashboard 专业感
- VPS 筛选密度
- 商家详情
- 测速报告
- Looking Glass

修正 Stitch 问题：

- 字号过小
- 信息过密
- 优惠站气质
- 完美假数据
- 每页重复代码
- Tailwind CDN
- Google Fonts

---

# 41. 页面开发优先级

## P0

1. 首页
2. 找 VPS
3. VPS 套餐详情
4. 商家库
5. 商家详情
6. 测速大厅
7. 测速报告
8. 套餐对比

## P1

9. 优惠中心
10. 价格历史
11. Looking Glass
12. 工具箱
13. 工具详情
14. 地区 VPS

## P2

15. 线路 VPS
16. 用途 VPS
17. 指南首页
18. 指南文章
19. 排行榜
20. 用户中心

---

# 42. 最终判断标准

一个新页面只有同时满足以下条件，才算符合 xuanzhuji.com：

- 看起来属于同一个网站
- 用户能快速理解页面用途
- 重要数据有来源
- 数据有时间信息
- 缺失数据不会伪造
- 可以帮助用户做 VPS 决策
- 不像纯 Affiliate 内容页
- 不像优惠券站
- 不像普通博客
- 移动端可实际使用
- 可以组件化实现
- 能形成长期 SEO 数据资产

最终目标：

> 让用户认为 xuanzhuji.com 是“查 VPS 数据和做选择的地方”，而不是“某个人写 VPS 推荐文章的网站”。
