# 快速开始指南

## 项目结构

本项目包含两个主要部分：

1. **frontend/** - 博客前端展示站点（Next.js）
2. **admin/** - 后台管理系统（React + Vite）

## 启动开发服务器

### 方式一：分别启动（推荐）

打开两个终端窗口：

**终端 1 - 启动前端：**
```bash
cd frontend
npm run dev
```
前端将在 http://localhost:3000 启动

**终端 2 - 启动后台：**
```bash
cd admin
npm run dev
```
后台将在 http://localhost:3001 启动

### 方式二：使用根目录脚本

```bash
# 在根目录创建启动脚本（待添加）
npm run dev:all
```

## 访问地址

### 前端展示站点
- 首页：http://localhost:3000
- 文章列表：http://localhost:3000/posts
- 标签：http://localhost:3000/tags
- 分类：http://localhost:3000/categories

### 后台管理系统
- 仪表盘：http://localhost:3001
- 文章管理：http://localhost:3001/posts
- 标签管理：http://localhost:3001/tags
- 分类管理：http://localhost:3001/categories
- 网站设置：http://localhost:3001/settings

## 功能演示

### 前端特性
- ✅ 响应式设计（手机、平板、桌面）
- ✅ 亮色/暗色主题切换（点击右上角太阳/月亮图标）
- ✅ 渐变 Hero 区域
- ✅ 文章卡片展示
- ✅ 标签云和分类浏览

### 后台特性
- ✅ 侧边栏导航（移动端可折叠）
- ✅ 仪表盘统计卡片
- ⏳ Notion 风格编辑器（配置中）
- ⏳ 完整的 CRUD 操作

## 常见问题

### Q: 端口被占用怎么办？
A: 修改对应目录下的配置文件：
- 前端：`frontend/next.config.js`
- 后台：`admin/vite.config.ts`

### Q: 样式没有生效？
A: 确保 Tailwind CSS 已正确配置，清除缓存后重启开发服务器。

### Q: 如何构建生产版本？
A: 
```bash
# 前端
cd frontend
npm run build

# 后台
cd admin
npm run build
```

## 下一步开发建议

1. **完善文章详情页** - 创建动态路由 `posts/[slug]`
2. **集成 TipTap 编辑器** - 在后台添加富文本编辑功能
3. **添加 Mock 数据** - 用于演示和测试
4. **连接后端 API** - 实现真实的数据存储和读取

## 技术文档

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TipTap 文档](https://tiptap.dev/docs)
- [React Router 文档](https://reactrouter.com/)

---

祝你开发顺利！🚀
