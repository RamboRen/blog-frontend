import PostCard from '@/components/PostCard'
import { Post } from '@/types'

// Mock data for demonstration
const mockPosts: Post[] = [
  {
    id: '1',
    title: '深入理解 React Hooks 的最佳实践',
    slug: 'understanding-react-hooks',
    summary: '探索 React Hooks 的强大功能，学习如何使用 useState、useEffect 等 Hook 编写更简洁、更可维护的代码。本文将通过实际例子带你掌握 Hooks 的精髓。',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: [
      { id: '1', name: 'React', slug: 'react', color: '#61DAFB' },
      { id: '2', name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend' }
    ],
    readingTime: 8,
    viewCount: 1234
  },
  {
    id: '2',
    title: 'TypeScript 高级类型技巧指南',
    slug: 'typescript-advanced-types',
    summary: '掌握 TypeScript 的高级类型系统，包括泛型、条件类型、映射类型等。让你的代码更加类型安全且易于维护。',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e69fbedbe9?w=800&h=400&fit=crop',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: [
      { id: '3', name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
      { id: '2', name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend' }
    ],
    readingTime: 12,
    viewCount: 987
  },
  {
    id: '3',
    title: 'Next.js 14 新特性完全解析',
    slug: 'nextjs-14-features',
    summary: '深入了解 Next.js 14 带来的革命性更新，包括 Server Actions、Partial Prerendering 等新特性，提升你的应用性能。',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: [
      { id: '4', name: 'Next.js', slug: 'nextjs', color: '#000000' },
      { id: '1', name: 'React', slug: 'react', color: '#61DAFB' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend' }
    ],
    readingTime: 10,
    viewCount: 2156
  },
  {
    id: '4',
    title: 'Tailwind CSS 实战：快速构建现代化 UI',
    slug: 'tailwind-css-practical-guide',
    summary: '学习如何使用 Tailwind CSS 原子化 CSS 框架快速构建美观、响应式的用户界面。包含大量实用案例和最佳实践。',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop',
    createdAt: '2024-01-01T16:45:00Z',
    updatedAt: '2024-01-01T16:45:00Z',
    tags: [
      { id: '5', name: 'CSS', slug: 'css', color: '#1572B6' },
      { id: '6', name: 'Design', slug: 'design', color: '#FF6B6B' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend' }
    ],
    readingTime: 6,
    viewCount: 1543
  },
  {
    id: '5',
    title: 'Node.js 性能优化实战',
    slug: 'nodejs-performance-optimization',
    summary: '从多个维度优化 Node.js 应用性能，包括内存管理、异步处理、数据库查询等。让你的应用跑得更快！',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=400&fit=crop',
    createdAt: '2023-12-28T11:20:00Z',
    updatedAt: '2023-12-28T11:20:00Z',
    tags: [
      { id: '7', name: 'Node.js', slug: 'nodejs', color: '#339933' },
      { id: '8', name: 'Performance', slug: 'performance', color: '#FFA500' }
    ],
    categories: [
      { id: '2', name: '后端开发', slug: 'backend' }
    ],
    readingTime: 15,
    viewCount: 876
  },
  {
    id: '6',
    title: '我的 2023 年技术成长之路',
    slug: 'my-2023-tech-journey',
    summary: '回顾过去一年的技术学习历程，分享学习心得、踩坑经验和未来规划。希望能给同样在学习路上的你一些启发。',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1456324504439-367cee10a23b?w=800&h=400&fit=crop',
    createdAt: '2023-12-25T20:00:00Z',
    updatedAt: '2023-12-25T20:00:00Z',
    tags: [
      { id: '9', name: 'Life', slug: 'life', color: '#9333EA' },
      { id: '10', name: 'Learning', slug: 'learning', color: '#10B981' }
    ],
    categories: [
      { id: '3', name: '生活随笔', slug: 'lifestyle' }
    ],
    readingTime: 5,
    viewCount: 2341
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-800 dark:to-accent-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              记录技术，分享生活
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              欢迎来到我的个人博客，这里记录着我的学习笔记、技术感悟和生活点滴
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#posts"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-600 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                开始阅读
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
              >
                了解更多
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="posts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            最新文章
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            探索最新的技术文章和分享
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/posts"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-full hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            查看更多
          </a>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              浏览分类
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              按主题探索文章内容
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '前端开发', count: 15, color: 'from-blue-500 to-cyan-500' },
              { name: '后端开发', count: 8, color: 'from-green-500 to-emerald-500' },
              { name: '生活随笔', count: 5, color: 'from-purple-500 to-pink-500' },
            ].map((category) => (
              <a
                key={category.name}
                href={`/categories/${category.name}`}
                className={`group p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80">{category.count} 篇文章</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
