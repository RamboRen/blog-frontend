import { Post, Tag, Category, SiteSettings, mockPosts, mockTags, mockCategories, mockSettings } from '../data/mockData'

// API 响应类型
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// 模拟网络延迟
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms))

// 文章 API
export const postApi = {
  // 获取文章列表
  async getPosts(params?: { 
    page?: number
    limit?: number
    search?: string
    status?: 'all' | 'published' | 'draft'
    tagId?: string
    categoryId?: string
  }): Promise<ApiResponse<{ posts: Post[]; total: number }>> {
    try {
      await delay()
      
      let filtered = [...mockPosts]
      
      // 搜索过滤
      if (params?.search) {
        filtered = filtered.filter(post =>
          post.title.toLowerCase().includes(params.search!.toLowerCase()) ||
          post.summary.toLowerCase().includes(params.search!.toLowerCase())
        )
      }
      
      // 状态过滤
      if (params?.status && params.status !== 'all') {
        filtered = filtered.filter(post => post.status === params.status)
      }
      
      // 分页
      const page = params?.page || 1
      const limit = params?.limit || 10
      const start = (page - 1) * limit
      const end = start + limit
      
      return {
        success: true,
        data: {
          posts: filtered.slice(start, end),
          total: filtered.length
        }
      }
    } catch (error) {
      return {
        success: false,
        error: '获取文章列表失败'
      }
    }
  },

  // 获取单篇文章
  async getPost(id: string): Promise<ApiResponse<Post>> {
    try {
      await delay()
      const post = mockPosts.find(p => p.id === id)
      
      if (!post) {
        return {
          success: false,
          error: '文章不存在'
        }
      }
      
      return {
        success: true,
        data: post
      }
    } catch (error) {
      return {
        success: false,
        error: '获取文章失败'
      }
    }
  },

  // 创建文章
  async createPost(post: Partial<Post>): Promise<ApiResponse<Post>> {
    try {
      await delay(1000)
      
      const newPost: Post = {
        id: Date.now().toString(),
        title: post.title || '',
        slug: post.slug || '',
        summary: post.summary || '',
        content: post.content || '',
        coverImage: post.coverImage || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: post.tags || [],
        categories: post.categories || [],
        readingTime: post.readingTime || 5,
        viewCount: 0,
        status: post.status || 'draft',
        author: post.author || 'Admin'
      }
      
      mockPosts.unshift(newPost)
      
      return {
        success: true,
        data: newPost,
        message: '文章创建成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '创建文章失败'
      }
    }
  },

  // 更新文章
  async updatePost(id: string, updates: Partial<Post>): Promise<ApiResponse<Post>> {
    try {
      await delay(800)
      
      const index = mockPosts.findIndex(p => p.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '文章不存在'
        }
      }
      
      mockPosts[index] = {
        ...mockPosts[index],
        ...updates,
        updatedAt: new Date().toISOString()
      }
      
      return {
        success: true,
        data: mockPosts[index],
        message: '文章更新成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '更新文章失败'
      }
    }
  },

  // 删除文章
  async deletePost(id: string): Promise<ApiResponse<void>> {
    try {
      await delay(500)
      
      const index = mockPosts.findIndex(p => p.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '文章不存在'
        }
      }
      
      mockPosts.splice(index, 1)
      
      return {
        success: true,
        message: '文章已删除'
      }
    } catch (error) {
      return {
        success: false,
        error: '删除文章失败'
      }
    }
  }
}

// 标签 API
export const tagApi = {
  async getTags(): Promise<ApiResponse<Tag[]>> {
    try {
      await delay()
      return {
        success: true,
        data: mockTags
      }
    } catch (error) {
      return {
        success: false,
        error: '获取标签失败'
      }
    }
  },

  async createTag(tag: Partial<Tag>): Promise<ApiResponse<Tag>> {
    try {
      await delay(500)
      
      const newTag: Tag = {
        id: Date.now().toString(),
        name: tag.name || '',
        slug: tag.slug || '',
        color: tag.color || '#61DAFB',
        description: tag.description || '',
        postCount: 0,
        createdAt: new Date().toISOString()
      }
      
      mockTags.push(newTag)
      
      return {
        success: true,
        data: newTag,
        message: '标签创建成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '创建标签失败'
      }
    }
  },

  async updateTag(id: string, updates: Partial<Tag>): Promise<ApiResponse<Tag>> {
    try {
      await delay(500)
      
      const index = mockTags.findIndex(t => t.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '标签不存在'
        }
      }
      
      mockTags[index] = {
        ...mockTags[index],
        ...updates
      }
      
      return {
        success: true,
        data: mockTags[index],
        message: '标签更新成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '更新标签失败'
      }
    }
  },

  async deleteTag(id: string): Promise<ApiResponse<void>> {
    try {
      await delay(500)
      
      const index = mockTags.findIndex(t => t.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '标签不存在'
        }
      }
      
      mockTags.splice(index, 1)
      
      return {
        success: true,
        message: '标签已删除'
      }
    } catch (error) {
      return {
        success: false,
        error: '删除标签失败'
      }
    }
  }
}

// 分类 API
export const categoryApi = {
  async getCategories(): Promise<ApiResponse<Category[]>> {
    try {
      await delay()
      return {
        success: true,
        data: mockCategories
      }
    } catch (error) {
      return {
        success: false,
        error: '获取分类失败'
      }
    }
  },

  async createCategory(category: Partial<Category>): Promise<ApiResponse<Category>> {
    try {
      await delay(500)
      
      const newCategory: Category = {
        id: Date.now().toString(),
        name: category.name || '',
        slug: category.slug || '',
        description: category.description || '',
        postCount: 0,
        parentId: category.parentId || null,
        sortOrder: category.sortOrder || mockCategories.length + 1,
        createdAt: new Date().toISOString()
      }
      
      mockCategories.push(newCategory)
      
      return {
        success: true,
        data: newCategory,
        message: '分类创建成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '创建分类失败'
      }
    }
  },

  async updateCategory(id: string, updates: Partial<Category>): Promise<ApiResponse<Category>> {
    try {
      await delay(500)
      
      const index = mockCategories.findIndex(c => c.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '分类不存在'
        }
      }
      
      mockCategories[index] = {
        ...mockCategories[index],
        ...updates
      }
      
      return {
        success: true,
        data: mockCategories[index],
        message: '分类更新成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '更新分类失败'
      }
    }
  },

  async deleteCategory(id: string): Promise<ApiResponse<void>> {
    try {
      await delay(500)
      
      // 检查是否有子分类
      const hasChildren = mockCategories.some(c => c.parentId === id)
      if (hasChildren) {
        return {
          success: false,
          error: '该分类下有子分类，无法删除'
        }
      }
      
      const index = mockCategories.findIndex(c => c.id === id)
      if (index === -1) {
        return {
          success: false,
          error: '分类不存在'
        }
      }
      
      mockCategories.splice(index, 1)
      
      return {
        success: true,
        message: '分类已删除'
      }
    } catch (error) {
      return {
        success: false,
        error: '删除分类失败'
      }
    }
  }
}

// 设置 API
export const settingsApi = {
  async getSettings(): Promise<ApiResponse<SiteSettings>> {
    try {
      await delay()
      return {
        success: true,
        data: mockSettings
      }
    } catch (error) {
      return {
        success: false,
        error: '获取设置失败'
      }
    }
  },

  async updateSettings(settings: Partial<SiteSettings>): Promise<ApiResponse<SiteSettings>> {
    try {
      await delay(800)
      
      Object.assign(mockSettings, settings)
      
      return {
        success: true,
        data: mockSettings,
        message: '设置保存成功'
      }
    } catch (error) {
      return {
        success: false,
        error: '保存设置失败'
      }
    }
  }
}
