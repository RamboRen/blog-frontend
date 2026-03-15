interface DashboardProps {
  // 可以在此添加 props 类型定义
}

export default function Dashboard({}: DashboardProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">仪表盘</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: '文章总数', value: '24', change: '+12%', color: 'blue' },
          { title: '总访问量', value: '10,234', change: '+8.2%', color: 'green' },
          { title: '标签数量', value: '18', change: '+3', color: 'purple' },
          { title: '分类数量', value: '5', change: '不变', color: 'orange' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{stat.title}</h3>
            <div className="flex items-baseline justify-between">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <span className={`text-sm font-medium text-${stat.color}-600 dark:text-${stat.color}-400`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">最近活动</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">发布了新文章</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2 小时前</p>
              </div>
              <span className="text-sm text-primary-600 dark:text-primary-400">查看详情</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
