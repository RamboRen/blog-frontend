'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Eye, Folder } from 'lucide-react'
import PostCard from '@/components/PostCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Mock 数据 - 实际项目中应该从 API 获取
const mockCategories = [
  { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端技术分享，包括 React、Vue、TypeScript 等', color: 'from-blue-500 to-cyan-500' },
  { id: '2', name: '后端开发', slug: 'backend', description: '服务器端开发技术，涵盖 Node.js、Python、Go 等', color: 'from-green-500 to-emerald-500' },
  { id: '3', name: '生活随笔', slug: 'lifestyle', description: '记录生活点滴、学习感悟和成长历程', color: 'from-purple-500 to-pink-500' },
  { id: '4', name: '工具教程', slug: 'tools', description: '开发工具和效率提升技巧分享', color: 'from-orange-500 to-red-500' },
  { id: '5', name: '项目实战', slug: 'projects', description: '实际项目开发经验和技术方案总结', color: 'from-indigo-500 to-blue-500' },
]

const mockPosts = [
  {
    id: '1',
    title: '深入理解 React Hooks 的最佳实践',
    slug: 'understanding-react-hooks',
    summary: '探索 React Hooks 的强大功能，学习如何写出更优雅、更高效的代码',
    content: '<h1>内容</h1>',
    coverImage: '',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: [{ id: '1', name: 'React', slug: 'react', color: '#61DAFB' }],
    categories: [{ id: '1', name: '前端开发', slug: 'frontend' }],
    readingTime: 8,
    viewCount: 1234,
    status: 'published' as const,
    author: 'Admin',
  },
  {
    id: '2',
    title: 'TypeScript 高级类型技巧指南',
    slug: 'typescript-advanced-types',
    summary: '掌握 TypeScript 的高级类型系统，提升代码质量和开发效率',
    content: '<h1>内容</h1>',
    coverImage: '',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: [{ id: '3', name: 'TypeScript', slug: 'typescript', color: '#3178C6' }],
    categories: [{ id: '1', name: '前端开发', slug: 'frontend' }],
    readingTime: 12,
    viewCount: 987,
    status: 'published' as const,
    author: 'Admin',
  },
  {
    id: '3',
    title: 'Next.js 14 App Router 完全指南',
    slug: 'nextjs-14-app-router-guide',
    summary: '全面了解 Next.js 14 的 App Router 架构，构建现代化 Web 应用',
    content: '<h1>内容</h1>',
    coverImage: '',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: [{ id: '4', name: 'Next.js', slug: 'nextjs', color: '#000000' }],
    categories: [{ id: '1', name: '前端开发', slug: 'frontend' }],
    readingTime: 15,
    viewCount: 1567,
    status: 'published' as const,
    author: 'Admin',
  },
]

export default function CategoryDetail() {
  const params = useParams()
  const slug = params.slug as string
  
  // 查找当前分类
  const category = mockCategories.find(c => c.slug === slug)
  
  // 筛选出该分类下的文章
  const posts = mockPosts.filter(post => 
    post.categories.some(cat => cat.slug === slug)
  )

  if (!category) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              分类不存在
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              抱歉，您访问的分类不存在
            </p>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              返回分类列表
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className={`relative overflow-hidden bg-gradient-to-r ${category.color}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <Folder className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
                {category.description}
              </p>
              <div className="flex items-center justify-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {posts.length} 篇文章
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back link */}
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回分类列表
          </Link>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                <Folder className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                暂无文章
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                这个分类下还没有文章，敬请期待！
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
