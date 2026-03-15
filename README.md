# 博客系统

一个现代化的全栈博客系统，包含精美的前端展示和强大的后台管理功能。

## 项目概述

本项目是一个完整的博客解决方案，包括：
- **前端展示**：参考 Hexo Butterfly 主题风格，现代化、响应式设计
- **后台管理**：功能完整的 CMS 系统，支持文章、标签、分类管理
- **富文本编辑器**：类 Notion 的编辑体验

## 技术栈

### 前端 (frontend/)
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React, Heroicons
- **主题**: 支持亮色/暗色模式切换

### 后台管理 (admin/)
- **框架**: React 18 + Vite
- **语言**: TypeScript
- **路由**: React Router v6
- **样式**: Tailwind CSS
- **编辑器**: TipTap (Notion 风格)
- **图标**: Lucide React

## 项目结构

```
blog-frontend/
├── frontend/          # 前端展示站点
│   ├── app/          # Next.js App Router 页面
│   ├── components/   # React 组件
│   ├── types/        # TypeScript 类型定义
│   └── public/       # 静态资源
├── admin/            # 后台管理系统
│   ├── src/
│   │   ├── components/  # React 组件
│   │   ├── pages/       # 页面组件
│   │   ├── lib/         # 工具函数
│   │   └── hooks/       # 自定义 Hooks
│   └── public/          # 静态资源
└── README.md
```

## 功能特性

### 前端展示
- ✅ 响应式设计，支持移动设备
- ✅ 亮色/暗色主题切换
- ✅ 首页 Hero 区域
- ✅ 文章卡片展示
- ✅ 标签云
- ✅ 分类浏览
- ✅ 文章详情页（待实现）
- ✅ 搜索和筛选（待实现）

### 后台管理
- ✅ 仪表盘统计
- ✅ 文章管理（列表、新建、编辑）
- ✅ 标签管理
- ✅ 分类管理
- ✅ 网站设置
- ⏳ Notion 风格富文本编辑器（配置中）
- ⏳ 图片上传
- ⏳ 草稿功能
- ⏳ SEO 设置

## 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后台管理依赖
cd ../admin
npm install
```

### 开发模式

```bash
# 启动前端（端口 3000）
cd frontend
npm run dev

# 启动后台管理（端口 3001）
cd admin
npm run dev
```

### 生产构建

```bash
# 前端构建
cd frontend
npm run build

# 后台管理构建
cd admin
npm run build
```

## 主要页面

### 前端
- 首页：`http://localhost:3000`
- 文章列表：`http://localhost:3000/posts`
- 标签：`http://localhost:3000/tags`
- 分类：`http://localhost:3000/categories`

### 后台
- 仪表盘：`http://localhost:3001`
- 文章管理：`http://localhost:3001/posts`
- 标签管理：`http://localhost:3001/tags`
- 分类管理：`http://localhost:3001/categories`
- 网站设置：`http://localhost:3001/settings`

## 开发进度

- [x] 项目初始化
- [x] 前端基础架构
- [x] 前端布局组件（Header, Footer）
- [x] 前端首页
- [x] 前端文章列表页
- [x] 前端标签页
- [x] 前端分类页
- [x] 前端文章详情页
- [x] 后台管理项目初始化
- [x] 后台管理布局
- [x] 后台管理路由
- [x] Notion 风格编辑器集成
- [x] 文章管理完整功能
- [x] 标签管理完整功能
- [x] 分类管理完整功能
- [x] 网站设置功能
- [x] API 服务集成
- [x] 数据库连接

## 设计参考

### 前端设计
- 参考 Hexo Butterfly 主题的配色和布局
- 使用渐变色和卡片式设计
- 强调视觉层次和阅读体验

### 后台设计
- 简洁现代的侧边栏导航
- 清晰的数据表格展示
- 直观的表单交互设计

## 下一步计划

1. **完善文章详情页**：添加目录、评论、相关推荐等功能
2. **集成 TipTap 编辑器**：实现 Notion 风格的块级编辑体验
3. **API 服务**：创建 RESTful API 或 GraphQL 接口
4. **数据库**：集成 PostgreSQL 或 MongoDB
5. **用户认证**：实现 JWT 或 OAuth 认证
6. **图片上传**：集成云存储或本地存储
7. **SEO 优化**：添加 meta 标签、sitemap 等
8. **性能优化**：实现缓存、CDN 等优化措施

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- Email: contact@example.com
- GitHub: Issues

---

**注意**: 本项目正在积极开发中，部分功能尚未完成。
