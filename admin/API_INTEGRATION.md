# API 服务和数据 Mock 配置指南

## 📋 概述

已完成 API 服务层和 Toast 通知系统的集成，实现了完整的数据交互流程。

### ✅ 已实现功能

1. **Mock 数据系统** - 完整的类型定义和模拟数据
2. **API 服务层** - 统一的 API 接口和错误处理
3. **Toast 通知系统** - 优雅的用户反馈机制
4. **加载状态管理** - 完善的加载和错误状态

---

## 📁 文件结构

### 新增文件

```
admin/src/
├── data/
│   └── mockData.ts              # Mock 数据和类型定义 ⭐ NEW
├── services/
│   └── api.ts                   # API 服务层 ⭐ NEW
├── components/
│   └── Toast.tsx                # Toast 通知组件 ⭐ NEW
└── main.tsx                     # 应用入口（已更新）
```

### 核心组件

#### 1. Mock 数据 ([`mockData.ts`](file:///Users/renbo/workspace/blog-frontend/admin/src/data/mockData.ts))

**类型定义：**
```typescript
interface Post {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  coverImage: string
  createdAt: string
  updatedAt: string
  tags: Tag[]
  categories: Category[]
  readingTime: number
  viewCount: number
  status: 'published' | 'draft'
  author: string
}

interface Tag {
  id: string
  name: string
  slug: string
  color: string
  description: string
  postCount: number
  createdAt: string
}

interface Category {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
  parentId: string | null
  sortOrder: number
  createdAt: string
}

interface SiteSettings {
  // ... 完整的设置字段
}
```

**Mock 数据：**
- `mockPosts` - 3 篇示例文章
- `mockTags` - 5 个标签
- `mockCategories` - 7 个分类
- `mockSettings` - 默认网站设置

---

#### 2. API 服务层 ([`api.ts`](file:///Users/renbo/workspace/blog-frontend/admin/src/services/api.ts))

**API 响应格式：**
```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

**文章 API (`postApi`)：**
```typescript
// 获取文章列表
getPosts(params?: { 
  page?: number
  limit?: number
  search?: string
  status?: 'all' | 'published' | 'draft'
}): Promise<ApiResponse<{ posts: Post[]; total: number }>>

// 获取单篇文章
getPost(id: string): Promise<ApiResponse<Post>>

// 创建文章
createPost(post: Partial<Post>): Promise<ApiResponse<Post>>

// 更新文章
updatePost(id: string, updates: Partial<Post>): Promise<ApiResponse<Post>>

// 删除文章
deletePost(id: string): Promise<ApiResponse<void>>
```

**标签 API (`tagApi`)：**
```typescript
getTags(): Promise<ApiResponse<Tag[]>>
createTag(tag: Partial<Tag>): Promise<ApiResponse<Tag>>
updateTag(id: string, updates: Partial<Tag>): Promise<ApiResponse<Tag>>
deleteTag(id: string): Promise<ApiResponse<void>>
```

**分类 API (`categoryApi`)：**
```typescript
getCategories(): Promise<ApiResponse<Category[]>>
createCategory(category: Partial<Category>): Promise<ApiResponse<Category>>
updateCategory(id: string, updates: Partial<Category>): Promise<ApiResponse<Category>>
deleteCategory(id: string): Promise<ApiResponse<void>>
```

**设置 API (`settingsApi`)：**
```typescript
getSettings(): Promise<ApiResponse<SiteSettings>>
updateSettings(settings: Partial<SiteSettings>): Promise<ApiResponse<SiteSettings>>
```

---

#### 3. Toast 通知组件 ([`Toast.tsx`](file:///Users/renbo/workspace/blog-frontend/admin/src/components/Toast.tsx))

**使用方式：**
```typescript
import { useToast } from './components/Toast'

function MyComponent() {
  const toast = useToast()
  
  const handleSave = async () => {
    try {
      await api.save()
      toast.success('保存成功', '数据已成功保存')
    } catch (error) {
      toast.error('保存失败', '请稍后重试')
    }
  }
}
```

**通知类型：**
- ✅ `success` - 成功（绿色）
- ❌ `error` - 错误（红色）
- ℹ️ `info` - 信息（蓝色）
- ⚠️ `warning` - 警告（黄色）

**特性：**
- 自动消失（3 秒默认）
- 手动关闭按钮
- 堆叠显示
- 动画效果

---

## 🚀 使用方法

### 1. 在组件中使用 API

**示例：文章列表页**
```typescript
import { useState, useEffect } from 'react'
import { useToast } from '../components/Toast'
import { postApi } from '../services/api'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      setLoading(true)
      const response = await postApi.getPosts()
      if (response.success && response.data) {
        setPosts(response.data.posts)
      }
    } catch (error) {
      toast.error('加载失败', '无法加载文章列表')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除吗？')) return
    
    const response = await postApi.deletePost(id)
    if (response.success) {
      toast.success('删除成功')
      loadPosts()
    } else {
      toast.error('删除失败', response.error)
    }
  }
}
```

### 2. 在表单中使用 API

**示例：保存文章**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = isEdit
      ? await postApi.updatePost(id, formData)
      : await postApi.createPost(formData)
    
    if (response.success) {
      toast.success(response.message!)
      navigate('/posts')
    } else {
      toast.error(response.error || '保存失败')
    }
  } catch (error) {
    toast.error('网络错误，请重试')
  }
}
```

---

## 📊 API 响应示例

### 成功响应
```json
{
  "success": true,
  "data": {
    "id": "1",
    "title": "React Hooks 最佳实践",
    // ... 其他字段
  },
  "message": "操作成功"
}
```

### 错误响应
```json
{
  "success": false,
  "error": "文章不存在",
  "message": "未找到指定的资源"
}
```

---

## 🎯 特性说明

### 1. 模拟网络延迟
所有 API 调用都包含模拟延迟，更接近真实环境：
```typescript
const delay = (ms: number = 500) => 
  new Promise(resolve => setTimeout(resolve, ms))
```

**延迟时间：**
- 普通查询：500ms
- 创建操作：800-1000ms
- 更新操作：800ms
- 删除操作：500ms

### 2. 数据验证
API 层包含基础的数据验证：
```typescript
if (!post) {
  return {
    success: false,
    error: '文章不存在'
  }
}
```

### 3. 错误处理
统一的错误处理机制：
```typescript
try {
  const response = await api.someOperation()
  if (!response.success) {
    toast.error(response.error || '操作失败')
  }
} catch (error) {
  toast.error('网络错误，请重试')
}
```

---

## 🔄 迁移到真实 API

当需要连接真实后端时，只需修改 `api.ts` 文件：

### 当前 Mock API
```typescript
async getPosts() {
  await delay()
  return {
    success: true,
    data: mockPosts
  }
}
```

### 真实 API
```typescript
async getPosts() {
  try {
    const response = await fetch('/api/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    
    if (!response.ok) throw new Error('Network error')
    
    const data = await response.json()
    return {
      success: true,
      data: data.posts
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
```

---

## 📝 最佳实践

### 1. 统一错误处理
```typescript
// 推荐：统一的错误处理
const handleError = (error: any) => {
  if (error.response?.status === 404) {
    toast.error('资源不存在')
  } else if (error.response?.status === 401) {
    toast.error('未授权访问')
  } else {
    toast.error('网络错误，请重试')
  }
}
```

### 2. 加载状态管理
```typescript
const [loading, setLoading] = useState(false)

const loadData = async () => {
  setLoading(true)
  try {
    // API 调用
  } finally {
    setLoading(false)
  }
}
```

### 3. 乐观更新
```typescript
// 先更新 UI，再发送请求
const handleDelete = async (id: string) => {
  const oldPosts = [...posts]
  setPosts(posts.filter(p => p.id !== id))
  
  try {
    await postApi.deletePost(id)
    toast.success('删除成功')
  } catch (error) {
    setPosts(oldPosts) // 回滚
    toast.error('删除失败')
  }
}
```

---

## 🎨 Toast 自定义

### 自定义持续时间
```typescript
toast.success('操作成功', '数据将在 5 秒后刷新', { duration: 5000 })
```

### 不自动消失
```typescript
const toastId = toast.info('处理中...', { duration: 0 })

// 手动关闭
setTimeout(() => {
  removeToast(toastId)
}, 5000)
```

---

## ⚠️ 注意事项

### 当前限制

1. **内存存储**
   - Mock 数据存储在内存中
   - 刷新页面会重置
   - 仅用于演示和测试

2. **无持久化**
   - 数据不会保存到 localStorage
   - 每次刷新都是初始数据
   - 需要后端支持真实持久化

3. **简单验证**
   - 只有基础字段验证
   - 缺少复杂业务规则
   - 需要后端完善验证

### 生产环境建议

1. **添加认证**
   ```typescript
   const headers = {
     'Authorization': `Bearer ${token}`,
     'Content-Type': 'application/json'
   }
   ```

2. **请求重试**
   ```typescript
   async function retryRequest(fn: () => Promise<any>, retries = 3) {
     for (let i = 0; i < retries; i++) {
       try {
         return await fn()
       } catch (error) {
         if (i === retries - 1) throw error
       }
     }
   }
   ```

3. **请求取消**
   ```typescript
   const controller = new AbortController()
   
   fetch('/api/posts', { signal: controller.signal })
   
   // 组件卸载时取消
   return () => controller.abort()
   ```

---

## 📈 下一步计划

### 短期优化

1. **LocalStorage 持久化**
   - 保存数据到浏览器
   - 减少刷新影响
   - 离线支持

2. **React Query 集成**
   - 自动缓存
   - 背景更新
   - 无限加载

3. **请求拦截器**
   - 统一添加 token
   - 错误统一处理
   - 请求日志

### 中期规划

1. **WebSocket 支持**
   - 实时更新
   - 推送通知
   - 协同编辑

2. **文件上传**
   - 图片上传
   - 进度显示
   - 压缩优化

3. **批量操作**
   - 批量删除
   - 批量更新
   - 导入导出

---

## 🐛 故障排除

### 问题 1：Toast 不显示

**检查：**
```typescript
// 确保在 main.tsx 中包裹了 ToastProvider
<ToastProvider>
  <App />
</ToastProvider>
```

### 问题 2：API 返回 undefined

**检查：**
```typescript
// 确保检查 success 字段
if (response.success && response.data) {
  // 使用数据
}
```

### 问题 3：类型错误

**解决：**
```typescript
// 导入正确的类型
import type { Post, Tag, Category } from '../data/mockData'
```

---

**状态**: ✅ 完成  
**最后更新**: 2024-03-14  
**测试状态**: 通过  
**下一步**: 集成 React Query 优化数据管理
