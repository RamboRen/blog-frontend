'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Tag as TagIcon } from 'lucide-react'
import PostCard from '@/components/PostCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Mock 数据 - 实际项目中应该从 API 获取
const mockTags = [
  { id: '1', name: 'React', slug: 'react', color: '#61DAFB', count: 12 },
  { id: '2', name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', count: 18 },
  { id: '3', name: 'TypeScript', slug: 'typescript', color: '#3178C6', count: 10 },
  { id: '4', name: 'Next.js', slug: 'nextjs', color: '#000000', count: 8 },
  { id: '5', name: 'CSS', slug: 'css', color: '#1572B6', count: 15 },
  { id: '6', name: 'Design', slug: 'design', color: '#FF6B6B', count: 6 },
  { id: '7', name: 'Node.js', slug: 'nodejs', color: '#339933', count: 9 },
  { id: '8', name: 'Performance', slug: 'performance', color: '#FFA500', count: 5 },
  { id: '9', name: 'Life', slug: 'life', color: '#9333EA', count: 7 },
  { id: '10', name: 'Learning', slug: 'learning', color: '#10B981', count: 11 },
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
    title: 'React 性能优化实战',
    slug: 'react-performance-optimization',
    summary: '通过实际案例学习 React 性能优化的各种技巧',
    content: '<h1>内容</h1>',
    coverImage: '',
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z',
    tags: [{ id: '1', name: 'React', slug: 'react', color: '#61DAFB' }],
    categories: [{ id: '1', name: '前端开发', slug: 'frontend' }],
    readingTime: 10,
    viewCount: 892,
    status: 'published' as const,
    author: 'Admin',
  },
  {
    id: '3',
    title: 'React Server Components 完全指南',
    slug: 'react-server-components-guide',
    summary: '深入了解 React Server Components 的概念和应用场景',
    content: '<h1>内容</h1>',
    coverImage: '',
    createdAt: '2024-01-08T14:30:00Z',
    updatedAt: '2024-01-08T14:30:00Z',
    tags: [{ id: '1', name: 'React', slug: 'react', color: '#61DAFB' }],
    categories: [{ id: '1', name: '前端开发', slug: 'frontend' }],
    readingTime: 12,
    viewCount: 1156,
    status: 'published' as const,
    author: 'Admin',
  },
]

export default function TagDetail() {
  const params = useParams()
  const slug = params.slug as string
  
  // 查找当前标签
  const tag = mockTags.find(t => t.slug === slug)
  
  // 筛选出该标签下的文章
  const posts = mockPosts.filter(post => 
    post.tags.some(t => t.slug === slug)
  )

  if (!tag) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              标签不存在
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              抱歉，您访问的标签不存在
            </p>
            <Link
              href="/tags"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              返回标签列表
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
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ backgroundColor: tag.color }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg"
                style={{ backgroundColor: `${tag.color}20` }}
              >
                <TagIcon className="w-10 h-10" style={{ color: tag.color }} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {tag.name}
              </h1>
              <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <TagIcon className="w-5 h-5" style={{ color: tag.color }} />
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
            href="/tags"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回标签列表
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
                <TagIcon className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                暂无文章
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                这个标签下还没有文章，敬请期待！
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
