import Link from 'next/link'
import { Folder } from 'lucide-react'

const mockCategories = [
  { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端技术分享，包括 React、Vue、TypeScript 等', count: 15, color: 'from-blue-500 to-cyan-500' },
  { id: '2', name: '后端开发', slug: 'backend', description: '服务器端开发技术，涵盖 Node.js、Python、Go 等', count: 8, color: 'from-green-500 to-emerald-500' },
  { id: '3', name: '生活随笔', slug: 'lifestyle', description: '记录生活点滴、学习感悟和成长历程', count: 5, color: 'from-purple-500 to-pink-500' },
  { id: '4', name: '工具教程', slug: 'tools', description: '开发工具和效率提升技巧分享', count: 7, color: 'from-orange-500 to-red-500' },
  { id: '5', name: '项目实战', slug: 'projects', description: '实际项目开发经验和技术方案总结', count: 6, color: 'from-indigo-500 to-blue-500' },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            文章分类
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            按照主题探索文章内容
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <Folder className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-white/90">
                  <span className="font-medium">{category.count} 篇文章</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
