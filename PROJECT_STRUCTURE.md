# 博客项目结构说明

本文档说明项目的目录结构和文件组织方式。

---

## 📁 完整项目结构

```
blog-frontend/
├── docs/                           # 📚 技术文档目录（所有文档已整理到这里）
│   ├── README.md                  # 文档中心索引
│   ├── 01-项目概述/
│   │   ├── PROJECT_OVERVIEW.md
│   │   └── PROJECT_COMPLETION_REPORT.md
│   ├── 02-功能实现/
│   │   ├── ABOUT_PAGE_SUMMARY.md
│   │   ├── SETTINGS_SUMMARY.md
│   │   ├── TAGS_CATEGORIES_SUMMARY.md
│   │   ├── API_MOCK_SUMMARY.md
│   │   └── CATEGORIES_TAGS_DETAIL_PAGES.md
│   ├── 03-问题修复/
│   │   ├── FIX_CODE_HIGHLIGHT.md
│   │   ├── FIX_POSTS_PAGE.md
│   │   ├── FIX_FRONTEND_DARK_MODE.md
│   │   ├── DARK_MODE_IMPLEMENTATION.md
│   │   ├── DARK_THEME_COMPLETE.md
│   │   ├── DARK_THEME_FIX_COMPLETE.md
│   │   ├── DARK_THEME_DEBUG.md
│   │   └── REMOVE_DARK_MODE_SUMMARY.md
│   ├── 04-测试指南/
│   │   ├── DARK_MODE_DEBUG_STEPS.md
│   │   └── QUICK_DARK_MODE_TEST.md
│   └── 05-快速开始/
│       ├── QUICKSTART.md
│       ├── QUICK_ACCESS.md
│       └── FINAL_SUMMARY.md
│
├── frontend/                       # 🌐 Next.js 前台项目
│   ├── app/                       # Next.js App Router 页面
│   │   ├── page.tsx              # 首页
│   │   ├── about/                # 关于页面
│   │   ├── posts/                # 文章列表和详情页
│   │   ├── categories/           # 分类详情页
│   │   └── tags/                 # 标签详情页
│   ├── components/                # React 组件
│   │   ├── Header.tsx            # 头部组件
│   │   ├── Footer.tsx            # 页脚组件
│   │   ├── PostCard.tsx          # 文章卡片组件
│   │   ├── ArticleContent.tsx    # 文章内容组件（含代码高亮）
│   │   ├── TableOfContents.tsx   # 目录导航组件
│   │   └── ReadingProgress.tsx   # 阅读进度条组件
│   ├── public/                    # 静态资源
│   ├── styles/                    # 全局样式
│   ├── types/                     # TypeScript 类型定义
│   ├── tailwind.config.js        # Tailwind CSS 配置
│   ├── postcss.config.mjs        # PostCSS 配置
│   ├── next.config.js            # Next.js 配置
│   └── package.json              # 依赖配置
│
├── admin/                          # ⚙️ React + Vite 后台管理
│   ├── src/
│   │   ├── pages/                # 页面组件
│   │   │   ├── Dashboard.tsx     # 仪表盘
│   │   │   ├── Posts.tsx         # 文章管理
│   │   │   ├── EditPost.tsx      # 编辑文章
│   │   │   ├── Tags.tsx          # 标签管理
│   │   │   ├── Categories.tsx    # 分类管理
│   │   │   ├── Settings.tsx      # 设置页面
│   │   │   └── Login.tsx         # 登录页面
│   │   ├── components/           # 通用组件
│   │   │   ├── Layout.tsx        # 布局组件
│   │   │   ├── ProtectedRoute.tsx # 路由保护组件
│   │   │   ├── Toast.tsx         # 提示组件
│   │   │   └── TipTapEditor.tsx  # TipTap 编辑器组件
│   │   ├── services/             # API 服务
│   │   │   └── api.ts            # API 接口定义
│   │   ├── data/                 # Mock 数据
│   │   │   └── mockData.ts       # Mock 数据定义
│   │   ├── App.tsx               # 应用入口
│   │   └── main.tsx              # 入口文件
│   ├── index.html                # HTML 模板
│   ├── tailwind.config.js        # Tailwind 配置
│   ├── postcss.config.js         # PostCSS 配置
│   ├── vite.config.js            # Vite 配置
│   └── package.json              # 依赖配置
│
├── .gitignore                     # Git 忽略文件
├── package-lock.json              # 项目依赖锁定文件
├── DOCS_INDEX.md                  # 文档索引导航（根目录）
└── README.md                      # 项目主 README
```

---

## 📂 核心目录说明

### `docs/` - 技术文档中心
**位置**：项目根目录  
**用途**：存放所有技术文档、实现方案、问题修复记录等  
**特点**：
- 按类别分为 5 个子目录
- 每个子目录有数字前缀便于排序
- 包含完整的 README 索引

**访问**：[docs/README.md](docs/README.md)

---

### `frontend/` - 前台博客系统
**位置**：项目根目录  
**框架**：Next.js 14 (App Router) + React 18  
**用途**：面向用户的博客展示系统  

**关键特性**：
- ✅ 响应式设计
- ✅ SEO 友好
- ✅ 代码语法高亮
- ✅ 阅读进度条
- ✅ 目录导航
- ✅ 暗色模式支持（已移除切换功能，固定日间模式）

**启动命令**：
```bash
cd frontend
npm run dev
# 访问 http://localhost:3000
```

---

### `admin/` - 后台管理系统
**位置**：项目根目录  
**框架**：React 18 + Vite  
**用途**：博客内容管理系统  

**关键特性**：
- ✅ 文章管理（CRUD）
- ✅ 标签管理
- ✅ 分类管理
- ✅ Notion 风格富文本编辑器
- ✅ 路由保护
- ✅ 统一的浅色主题

**启动命令**：
```bash
cd admin
npm run dev
# 访问 http://localhost:3001
```

---

## 🎯 常用文件定位

### 前端相关

| 需求 | 文件路径 |
|-----|---------|
| 修改首页 | `frontend/app/page.tsx` |
| 修改关于页 | `frontend/app/about/page.tsx` |
| 修改文章详情 | `frontend/app/posts/[slug]/page.tsx` |
| 修改 Header | `frontend/components/Header.tsx` |
| 修改 Footer | `frontend/components/Footer.tsx` |
| 修改文章卡片 | `frontend/components/PostCard.tsx` |
| 添加新页面 | `frontend/app/新页面名/page.tsx` |

### 后台相关

| 需求 | 文件路径 |
|-----|---------|
| 修改仪表盘 | `admin/src/pages/Dashboard.tsx` |
| 修改文章管理 | `admin/src/pages/Posts.tsx` |
| 修改编辑器 | `admin/src/components/TipTapEditor.tsx` |
| 修改布局 | `admin/src/components/Layout.tsx` |
| 修改登录页 | `admin/src/pages/Login.tsx` |
| 修改 API 定义 | `admin/src/services/api.ts` |
| 修改 Mock 数据 | `admin/src/data/mockData.ts` |

### 文档相关

| 需求 | 文件路径 |
|-----|---------|
| 查看项目概述 | `docs/01-项目概述/PROJECT_OVERVIEW.md` |
| 查看功能实现 | `docs/02-功能实现/` |
| 查找问题修复 | `docs/03-问题修复/` |
| 查看测试指南 | `docs/04-测试指南/` |
| 快速入门 | `docs/05-快速开始/QUICKSTART.md` |

---

## 📊 项目统计

### 代码规模

- **前台代码行数**：约 3,000+ 行
- **后台代码行数**：约 4,000+ 行
- **文档总字数**：约 10 万 + 字
- **技术文档数**：21 篇

### 技术栈

**前台**：
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- highlight.js (代码高亮)

**后台**：
- React 18
- Vite
- TypeScript
- Tailwind CSS
- TipTap (富文本编辑器)
- React Router v6

---

## 🔧 开发环境配置

### 前置要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

```bash
# 1. 克隆项目
git clone <repo-url>
cd blog-frontend

# 2. 安装前端依赖
cd frontend
npm install

# 3. 安装后台依赖
cd ../admin
npm install

# 4. 启动前端
cd frontend
npm run dev
# 访问 http://localhost:3000

# 5. 启动后台（新终端窗口）
cd admin
npm run dev
# 访问 http://localhost:3001
```

---

## 📝 命名规范

### 目录命名
- 使用小写字母
- 多个单词用连字符分隔：`my-directory`
- 中文目录用于文档分类：`01-项目概述`

### 文件命名

**代码文件**：
- PascalCase：组件文件 `Header.tsx`
- camelCase：工具文件 `apiService.ts`
- kebab-case：配置文件 `tailwind.config.js`

**文档文件**：
- 全大写 + 下划线：`PROJECT_OVERVIEW.md`
- 统一放在 `docs/` 目录下

---

## 🎨 项目特色

### 1. 前后端分离
- 前台：Next.js SSR/SSG
- 后台：React SPA
- 独立部署，灵活扩展

### 2. 完整的文档体系
- 21 篇技术文档
- 5 大分类清晰
- 持续更新维护

### 3. 现代化 UI
- Tailwind CSS 实用类
- 响应式设计
- 一致的视觉体验

### 4. 优秀的开发体验
- TypeScript 类型安全
- Hot Reload 热更新
- 清晰的错误提示

---

## 📞 快速链接

- **文档中心**：[docs/README.md](docs/README.md)
- **前台入口**：[frontend/](frontend/)
- **后台入口**：[admin/](admin/)
- **文档索引**：[DOCS_INDEX.md](DOCS_INDEX.md)

---

**最后更新**：2024 年 3 月 15 日  
**维护状态**：🟢 活跃维护中
