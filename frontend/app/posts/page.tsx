import PostCard from '@/components/PostCard'
import { Post } from '@/types'

// Mock data
const mockPosts: Post[] = [
  {
    id: '1',
    title: '深入理解 React Hooks 的最佳实践',
    slug: 'understanding-react-hooks',
    summary: '探索 React Hooks 的强大功能，学习如何使用 useState、useEffect 等 Hook 编写更简洁、更可维护的代码。',
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
    summary: '掌握 TypeScript 的高级类型系统，包括泛型、条件类型、映射类型等。',
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
    summary: '深入了解 Next.js 14 带来的革命性更新，包括 Server Actions、Partial Prerendering 等。',
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
]

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            所有文章
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            探索所有的技术分享与生活感悟
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="搜索文章..."
              className="w-full px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>
          <select className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
            <option value="">全部分类</option>
            <option value="frontend">前端开发</option>
            <option value="backend">后端开发</option>
            <option value="lifestyle">生活随笔</option>
          </select>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              上一页
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  page === 1
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              下一页
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
