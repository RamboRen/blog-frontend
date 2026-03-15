import Link from 'next/link'
import { Tag } from 'lucide-react'

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

export default function TagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            标签云
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            浏览所有标签，发现感兴趣的主题
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockTags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tags/${tag.slug}`}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: tag.color }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Tag className="w-6 h-6" style={{ color: tag.color }} />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {tag.count} 篇
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {tag.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
