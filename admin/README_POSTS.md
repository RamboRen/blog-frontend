# 文章管理功能说明

## 功能概述

已完成后台管理系统的文章管理功能，包含以下特性：

### ✅ 已实现功能

1. **TipTap Notion 风格编辑器**
   - 富文本编辑（粗体、斜体、删除线、代码）
   - 标题层级（H1、H2、H3）
   - 列表（有序、无序）
   - 对齐方式（左、中、右）
   - 引用块
   - 代码块
   - 图片插入
   - 链接插入
   - 分割线
   - 撤销/重做

2. **文章列表管理**
   - 文章表格展示
   - 搜索功能
   - 状态筛选（全部、已发布、草稿）
   - 快速操作（编辑、删除）
   - 统计信息（总数、已发布、草稿）

3. **文章编辑页面**
   - 标题和 URL 别名设置
   - Notion 风格富文本编辑器
   - 文章摘要
   - 封面图片上传预览
   - 标签管理
   - 分类选择
   - 文章设置（作者、发布时间）
   - 保存为草稿或立即发布

## 使用指南

### 1. 查看文章列表

访问 `/posts` 页面，可以看到：
- 所有文章的列表展示
- 搜索框可以按标题搜索
- 状态筛选器可以切换显示的文章
- 统计卡片显示文章数量信息

### 2. 创建新文章

1. 点击"新建文章"按钮
2. 填写文章标题
3. 设置 URL 别名（自动生成或手动输入）
4. 使用 TipTap 编辑器编写内容
5. 填写文章摘要
6. 添加封面图片 URL
7. 添加标签（输入后按回车）
8. 选择分类（勾选）
9. 选择"存为草稿"或"立即发布"
10. 点击"保存"按钮

### 3. 编辑现有文章

1. 在文章列表中找到要编辑的文章
2. 点击编辑按钮（铅笔图标）
3. 修改相关内容
4. 点击"保存"更新

### 4. 使用 TipTap 编辑器

#### 工具栏功能

**文字格式化：**
- `B` - 加粗 (Ctrl+B)
- `I` - 斜体 (Ctrl+I)
- `S` - 删除线
- `</>` - 行内代码

**标题：**
- `H1` - 一级标题
- `H2` - 二级标题
- `H3` - 三级标题

**列表：**
- 列表图标 - 无序列表
- 编号列表 - 有序列表

**对齐：**
- 左对齐、居中、右对齐

**块级元素：**
- 引用 - 块引用
- 代码块 - 多行代码
- 分割线 - 水平分隔线

**插入：**
- 图片 - 输入图片 URL
- 链接 - 输入链接 URL

**历史：**
- 撤销 (Ctrl+Z)
- 重做 (Ctrl+Y)

#### 快捷键提示

虽然当前版本未实现快捷键，但 TipTap 支持自定义快捷键。常用快捷键：
- `Ctrl/Cmd + B` - 加粗
- `Ctrl/Cmd + I` - 斜体
- `Ctrl/Cmd + Z` - 撤销
- `Ctrl/Cmd + Y` - 重做

## 技术实现

### 使用的库

- **@tiptap/react** - React 集成
- **@tiptap/starter-kit** - 基础扩展包
- **@tiptap/extension-placeholder** - 占位符
- **@tiptap/extension-image** - 图片支持
- **@tiptap/extension-link** - 链接支持
- **@tiptap/extension-text-align** - 对齐支持
- **Lucide React** - 图标库

### 组件结构

```
admin/src/
├── components/
│   └── TipTapEditor.tsx      # TipTap 编辑器组件
└── pages/
    ├── Posts.tsx             # 文章列表页
    └── EditPost.tsx          # 文章编辑页
```

### 数据结构

```typescript
interface Post {
  id: number
  title: string
  slug: string
  status: 'published' | 'draft'
  createdAt: string
  updatedAt: string
  viewCount: number
  tags: string[]
  content: string
  summary: string
  coverImage?: string
  categories: string[]
}
```

## Mock 数据

当前使用 Mock 数据进行演示：
- 文章列表显示 3 篇示例文章
- 编辑功能不会实际保存（需要在控制台查看输出）

## 下一步计划

### 待实现功能

1. **API 集成**
   - 连接后端 API
   - 实现真实的 CRUD 操作
   - 添加加载状态和错误处理

2. **图片上传**
   - 拖拽上传图片
   - 剪贴板粘贴图片
   - 图片压缩和优化

3. **自动保存**
   - 定时自动保存草稿
   - 本地缓存防止丢失

4. **Markdown 支持**
   - Markdown 语法解析
   - Markdown 快捷键
   - 导入/导出 Markdown

5. **SEO 优化**
   - Meta 标签设置
   - Open Graph 图片
   - SEO 描述

6. **批量操作**
   - 批量删除文章
   - 批量更改状态
   - 批量移动分类

7. **版本历史**
   - 保存修订历史
   - 版本对比
   - 恢复到旧版本

## 常见问题

### Q: 编辑器不显示？
A: 检查是否安装了所有 TipTap 依赖，并确保 postcss.config.js 存在。

### Q: 样式不正确？
A: 确保 Tailwind CSS 正确配置，并检查 index.css 中的 ProseMirror 样式。

### Q: 如何添加更多扩展？
A: 
1. 安装扩展：`npm install @tiptap/extension-xxx`
2. 在 TipTapEditor.tsx 中导入并配置
3. 在 extensions 数组中添加

### Q: 如何自定义主题？
A: 修改 tailwind.config.js 中的颜色配置，或直接在组件中使用自定义类名。

## 相关文件

- [TipTapEditor.tsx](./src/components/TipTapEditor.tsx) - 编辑器组件
- [Posts.tsx](./src/pages/Posts.tsx) - 文章列表
- [EditPost.tsx](./src/pages/EditPost.tsx) - 文章编辑
- [index.css](./src/index.css) - 全局样式

---

**提示**: 目前数据保存在内存中，刷新页面会丢失。需要连接后端 API 才能持久化数据。
