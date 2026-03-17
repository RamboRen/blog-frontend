# 📘 博客系统完整教程

## 📖 目录

1. [项目介绍](#项目介绍)
2. [技术栈详解](#技术栈详解)
3. [环境搭建](#环境搭建)
4. [快速开始](#快速开始)
5. [前台开发教程](#前台开发教程)
6. [后台开发教程](#后台开发教程)
7. [API 集成指南](#API 集成指南)
8. [部署上线](#部署上线)

---

## 🎯 项目介绍

### 项目概述

这是一个现代化的全栈博客系统，包含精美的前端展示和强大的后台管理功能。

**核心特点：**
- 🎨 **现代化设计** - 参考 Hexo Butterfly 主题，响应式布局
- 📝 **Notion 风格编辑器** - 流畅的富文本编辑体验
- 🌙 **暗色模式** - 完整的主题切换支持
- 📱 **移动优先** - 完美适配各种设备
- 🔧 **功能完整** - 文章、标签、分类全功能管理

### 项目结构

```
blog-frontend/
├── frontend/          # 前端展示站点 (Next.js 16)
│   ├── app/          # App Router 页面
│   ├── components/   # React 组件
│   ├── types/        # TypeScript 类型定义
│   └── public/       # 静态资源
├── admin/            # 后台管理系统 (React + Vite)
│   ├── src/
│   │   ├── components/  # React 组件
│   │   ├── pages/       # 页面组件
│   │   ├── services/    # API 服务
│   │   └── data/        # Mock 数据
│   └── public/          # 静态资源
└── docs/             # 项目文档
```

### 功能模块

#### 前台展示（已完成）
- ✅ 首页 - Hero 区域 + 最新文章
- ✅ 文章列表页 - 卡片展示 + 分页
- ✅ 文章详情页 - 完整阅读体验 + 目录导航
- ✅ 标签云页面 - 按标签浏览
- ✅ 分类浏览页 - 按分类浏览
- ✅ 关于页面 - 站点介绍

#### 后台管理（已完成）
- ✅ 仪表盘 - 数据统计展示
- ✅ 文章管理 - CRUD 完整功能
- ✅ 标签管理 - 颜色 + 排序
- ✅ 分类管理 - 层级关系管理
- ✅ 网站设置 - SEO + 社交配置
- ✅ Notion 编辑器 - 富文本编辑

---

## 💻 技术栈详解

### 前端技术栈

#### Next.js 16 (App Router)
```bash
版本：16.1.6
特点：
- 服务端组件 (Server Components)
- 流式渲染 (Streaming)
- 内置路由系统
- 自动代码分割
```

#### React 19
```bash
版本：19.2.3
特性：
- Hooks 全面支持
- 并发渲染模式
- 自动批处理更新
```

#### Tailwind CSS v4
```bash
版本：4.x
优势：
- 原子化 CSS
- 响应式设计
- 暗色模式支持
- 即时编译 (JIT)
```

#### TypeScript 5
```bash
版本：5.x
作用：
- 静态类型检查
- 智能提示
- 重构安全性
```

### 后台技术栈

#### React 18 + Vite
```bash
React: 18.x
Vite: 5.x
优势：
- 极速热更新
- 按需编译
- 开箱即用
```

#### TipTap v2
```bash
类型：富文本编辑器
特点：
- 无头编辑器
- 基于 ProseMirror
- 高度可定制
- Notion 风格体验
```

#### React Router v6
```bash
功能：客户端路由
特性：
- 嵌套路由
- 懒加载
- 路由守卫
```

---

## 🛠️ 环境搭建

### 系统要求

**最低配置：**
- Node.js >= 18.0.0
- npm >= 9.0.0
- 内存 >= 4GB
- 硬盘空间 >= 1GB

**推荐配置：**
- Node.js >= 20.x
- npm >= 10.x
- 内存 >= 8GB
- SSD 硬盘

### 安装步骤

#### 1. 克隆项目

```bash
git clone <repository-url>
cd blog-frontend
```

#### 2. 安装前端依赖

```bash
cd frontend
npm install
```

**依赖包说明：**
```json
{
  "next": "16.1.6",           // Next.js 框架
  "react": "19.2.3",          // React 核心
  "react-dom": "19.2.3",      // React DOM
  "tailwindcss": "^4",        // Tailwind CSS
  "@tailwindcss/postcss": "^4", // PostCSS 插件
  "@tailwindcss/typography": "^0.5.19", // 排版插件
  "typescript": "^5"          // TypeScript
}
```

#### 3. 安装后台依赖

```bash
cd ../admin
npm install
```

**依赖包说明：**
```json
{
  "react": "^18.x",           // React 核心
  "react-dom": "^18.x",       // React DOM
  "react-router-dom": "^6.x", // 路由库
  "vite": "^5.x",             // 构建工具
  "tailwindcss": "^3.x",      // Tailwind CSS
  "tipTap": "^2.x",           // 富文本编辑器
  "typescript": "^5.x"        // TypeScript
}
```

### 常见问题

#### 问题 1：npm install 失败

**错误信息：**
```
npm error code EPERM
npm error syscall open
```

**解决方案：**
```bash
# 清理缓存
npm cache clean --force

# 使用 legacy-peer-deps
npm install --legacy-peer-deps
```

#### 问题 2：Node 版本不兼容

**错误信息：**
```
Unsupported engine
```

**解决方案：**
```bash
# 使用 nvm 切换 Node 版本
nvm install 20
nvm use 20
```

---

## 🚀 快速开始

### 启动开发服务器

#### 启动前台

```bash
cd frontend
npm run dev
```

**访问地址：** http://localhost:3000

#### 启动后台

```bash
cd admin
npm run dev
```

**访问地址：** http://localhost:3001

### 生产构建

#### 前台构建

```bash
cd frontend
npm run build
npm start
```

#### 后台构建

```bash
cd admin
npm run build
npm preview
```

### 常用命令

```bash
# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit

# 格式化代码
npx prettier --write .
```

---

## 📄 前台开发教程

### 1. 创建新页面

#### 使用 App Router

在 `app/` 目录下创建文件夹：

```
app/
└── about/
    └── page.tsx
```

**示例代码：**

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        关于我们
      </h1>
    </div>
  )
}
```

#### 动态路由

```
app/
└── posts/
    └── [slug]/
        └── page.tsx
```

**获取路由参数：**

```tsx
export default async function PostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug)
  
  return (
    <article>{/* 文章内容 */}</article>
  )
}
```

### 2. 创建组件

#### 基础组件示例

```tsx
// components/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ 
  variant = 'primary',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-medium
        ${variant === 'primary' 
          ? 'bg-primary-600 text-white hover:bg-primary-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 3. 使用 Tailwind CSS

#### 响应式设计

```tsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3
  gap-4
">
  {/* 内容 */}
</div>
```

#### 暗色模式

```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
">
  支持主题切换的内容
</div>
```

### 4. 数据获取

#### 服务端组件（推荐）

```tsx
// app/posts/page.tsx
import { getPosts } from '@/lib/api'

export default async function PostsPage() {
  const posts = await getPosts()
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
```

#### 客户端组件

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function PostsList() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  
  return (/* JSX */)
}
```

---

## 🎛️ 后台开发教程

### 1. 创建页面

#### 页面文件结构

```
src/pages/
├── Dashboard.tsx      # 仪表盘
├── Posts.tsx          # 文章管理
├── EditPost.tsx       # 编辑文章
├── Tags.tsx           # 标签管理
└── Categories.tsx     # 分类管理
```

#### 示例：创建新页面

```tsx
// src/pages/Comments.tsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Comments() {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    // 获取评论数据
  }, [])
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">评论管理</h1>
      {/* 页面内容 */}
    </div>
  )
}
```

### 2. 添加路由

在 `App.tsx` 中添加路由配置：

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Comments from './pages/Comments'

function App() {
  return (
    <Routes>
      <Route path="/comments" element={<Comments />} />
    </Routes>
  )
}
```

### 3. 使用 API 服务

```tsx
import { postApi } from '../services/api'

async function loadPosts() {
  const response = await postApi.getPosts({
    page: 1,
    limit: 10
  })
  
  if (response.success) {
    console.log(response.data)
  }
}
```

---

## 🔌 API 集成指南

### 当前 API 状态

项目目前使用 **Mock API**，位于：
- 文件：`admin/src/services/api.ts`
- 数据：`admin/src/data/mockData.ts`

### API 接口规范

#### 统一响应格式

```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

#### 现有 API 端点

**文章 API：**
```typescript
GET    /api/posts          # 获取文章列表
GET    /api/posts/:id      # 获取单篇文章
POST   /api/posts          # 创建文章
PUT    /api/posts/:id      # 更新文章
DELETE /api/posts/:id      # 删除文章
```

**标签 API：**
```typescript
GET    /api/tags           # 获取标签列表
POST   /api/tags           # 创建标签
PUT    /api/tags/:id       # 更新标签
DELETE /api/tags/:id       # 删除标签
```

**分类 API：**
```typescript
GET    /api/categories     # 获取分类列表
POST   /api/categories     # 创建分类
PUT    /api/categories/:id # 更新分类
DELETE /api/categories/:id # 删除分类
```

### 连接真实后端

#### 1. 修改 API 服务

```typescript
// admin/src/services/api.ts
const API_BASE_URL = 'https://your-api.com'

export const postApi = {
  async getPosts(params) {
    const response = await fetch(
      `${API_BASE_URL}/posts?${new URLSearchParams(params)}`
    )
    return response.json()
  }
}
```

#### 2. 添加认证

```typescript
const getToken = () => localStorage.getItem('token')

async function fetchWithAuth(url, options = {}) {
  const token = getToken()
  
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}
```

---

## 🚀 部署上线

### 前端部署

#### Vercel 部署（推荐）

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 部署：
```bash
cd frontend
vercel
```

3. 生产环境：
```bash
vercel --prod
```

#### Netlify 部署

1. 构建命令：
```bash
npm run build
```

2. 输出目录：
```
.frontend/.next
```

3. 配置文件 `netlify.toml`：
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

### 后台部署

#### Vercel 部署

```bash
cd admin
vercel
```

**注意：** 需要配置 SPA 路由支持

#### 静态托管

1. 构建：
```bash
npm run build
```

2. 上传 `dist/` 目录到服务器

3. 配置 Nginx：
```nginx
server {
  listen 80;
  server_name admin.yourdomain.com;
  root /var/www/admin/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### 环境变量配置

#### 前台环境变量

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

#### 后台环境变量

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_TITLE=博客管理后台
```

---

## 📚 学习资源

### 官方文档

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

### 项目文档

- [项目概述](./01-项目概述/PROJECT_OVERVIEW.md)
- [功能实现详情](./02-功能实现/)
- [问题修复记录](./03-问题修复/)

---

## 🤝 下一步

完成本教程后，您可以：

1. ✅ 运行项目进行实践
2. ✅ 修改样式自定义外观
3. ✅ 添加新功能模块
4. ✅ 连接真实后端 API
5. ✅ 部署到生产环境

祝您学习愉快！🎉
