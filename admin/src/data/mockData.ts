// Mock 数据类型定义
export interface Post {
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

export interface Tag {
  id: string
  name: string
  slug: string
  color: string
  description: string
  postCount: number
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  postCount: number
  parentId: string | null
  sortOrder: number
  createdAt: string
}

export interface SiteSettings {
  siteTitle: string
  siteDescription: string
  siteKeywords: string[]
  siteLogo: string
  siteFavicon: string
  siteUrl: string
  metaDescription: string
  googleAnalyticsId: string
  baiduAnalyticsId: string
  github: string
  twitter: string
  weibo: string
  zhihu: string
  email: string
  enableComments: boolean
  commentSystem: 'giscus' | 'disqus' | 'utterances' | 'waline'
  giscusRepo: string
  giscusRepoId: string
  giscusCategoryId: string
  customHead: string
  customFooter: string
  customCss: string
  postsPerPage: number
  enableDarkMode: boolean
  enableReadingTime: boolean
  enableWordCount: boolean
}

// Mock 文章数据
export const mockPosts: Post[] = [
  {
    id: '1',
    title: '深入理解 React Hooks 的最佳实践',
    slug: 'understanding-react-hooks',
    summary: '探索 React Hooks 的强大功能，学习如何使用 useState、useEffect 等 Hook 编写更简洁、更可维护的代码。',
    content: `
      <h1>深入理解 React Hooks 的最佳实践</h1>
      <p>React Hooks 是 React 16.8 引入的新特性，它让你在不编写 class 的情况下使用 state 和其他 React 特性。</p>
      <h2>为什么使用 Hooks？</h2>
      <p>在 Hooks 出现之前，组件之间的逻辑复用通常使用高阶组件（HOC）或者 render props。</p>
      <blockquote>Hooks 让代码更加简洁，逻辑复用更加直观。</blockquote>
      <h2>常用 Hooks 详解</h2>
      <h3>1. useState - 状态管理</h3>
      <pre><code class="language-javascript">const [count, setCount] = useState(0);</code></pre>
      <h3>2. useEffect - 副作用处理</h3>
      <p>useEffect 让你可以在函数组件中执行副作用操作。</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    tags: [
      { id: '1', name: 'React', slug: 'react', color: '#61DAFB', description: '用于构建用户界面的 JavaScript 库', postCount: 15, createdAt: '2024-01-01T10:00:00Z' },
      { id: '2', name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', description: '一种脚本语言', postCount: 20, createdAt: '2024-01-01T10:00:00Z' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端开发相关文章', postCount: 25, parentId: null, sortOrder: 1, createdAt: '2024-01-01T10:00:00Z' }
    ],
    readingTime: 8,
    viewCount: 1234,
    status: 'published',
    author: 'Admin'
  },
  {
    id: '2',
    title: 'TypeScript 高级类型技巧指南',
    slug: 'typescript-advanced-types',
    summary: '掌握 TypeScript 的高级类型系统，包括泛型、条件类型、映射类型等。',
    content: '<h1>TypeScript 高级类型技巧</h1><p>内容待完善...</p>',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e69fbedbe9?w=800&h=400&fit=crop',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: [
      { id: '3', name: 'TypeScript', slug: 'typescript', color: '#3178C6', description: 'JavaScript 的超集', postCount: 12, createdAt: '2024-01-01T10:00:00Z' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端开发相关文章', postCount: 25, parentId: null, sortOrder: 1, createdAt: '2024-01-01T10:00:00Z' }
    ],
    readingTime: 12,
    viewCount: 987,
    status: 'published',
    author: 'Admin'
  },
  {
    id: '3',
    title: 'Next.js 14 新特性完全解析',
    slug: 'nextjs-14-features',
    summary: '深入了解 Next.js 14 带来的革命性更新。',
    content: '<h1>Next.js 14 新特性</h1><p>内容待完善...</p>',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: [
      { id: '4', name: 'Next.js', slug: 'nextjs', color: '#000000', description: '基于 React 的全栈框架', postCount: 8, createdAt: '2024-01-01T10:00:00Z' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端开发相关文章', postCount: 25, parentId: null, sortOrder: 1, createdAt: '2024-01-01T10:00:00Z' }
    ],
    readingTime: 10,
    viewCount: 2156,
    status: 'published',
    author: 'Admin'
  }
]

// Mock 标签数据
export const mockTags: Tag[] = [
  { id: '1', name: 'React', slug: 'react', color: '#61DAFB', description: '用于构建用户界面的 JavaScript 库', postCount: 15, createdAt: '2024-01-01T10:00:00Z' },
  { id: '2', name: 'TypeScript', slug: 'typescript', color: '#3178C6', description: 'JavaScript 的超集，添加了类型系统', postCount: 12, createdAt: '2024-01-02T10:00:00Z' },
  { id: '3', name: 'Next.js', slug: 'nextjs', color: '#000000', description: '基于 React 的全栈框架', postCount: 8, createdAt: '2024-01-03T10:00:00Z' },
  { id: '4', name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4', description: '实用优先的 CSS 框架', postCount: 10, createdAt: '2024-01-04T10:00:00Z' },
  { id: '5', name: 'Node.js', slug: 'nodejs', color: '#339933', description: 'JavaScript 运行时环境', postCount: 6, createdAt: '2024-01-05T10:00:00Z' }
]

// Mock 分类数据
export const mockCategories: Category[] = [
  { id: '1', name: '前端开发', slug: 'frontend', description: 'Web 前端开发相关文章，包括 HTML、CSS、JavaScript 等', postCount: 25, parentId: null, sortOrder: 1, createdAt: '2024-01-01T10:00:00Z' },
  { id: '2', name: 'React', slug: 'react-framework', description: 'React 框架相关技术和最佳实践', postCount: 15, parentId: '1', sortOrder: 1, createdAt: '2024-01-02T10:00:00Z' },
  { id: '3', name: 'Vue', slug: 'vue', description: 'Vue.js 框架相关内容', postCount: 8, parentId: '1', sortOrder: 2, createdAt: '2024-01-03T10:00:00Z' },
  { id: '4', name: '后端开发', slug: 'backend', description: '服务器端开发技术，包括 Node.js、Python、Go 等', postCount: 18, parentId: null, sortOrder: 2, createdAt: '2024-01-04T10:00:00Z' },
  { id: '5', name: '数据库', slug: 'database', description: '关系型和非关系型数据库技术', postCount: 12, parentId: null, sortOrder: 3, createdAt: '2024-01-05T10:00:00Z' },
  { id: '6', name: 'MySQL', slug: 'mysql', description: 'MySQL 数据库使用和优化', postCount: 7, parentId: '5', sortOrder: 1, createdAt: '2024-01-06T10:00:00Z' },
  { id: '7', name: 'MongoDB', slug: 'mongodb', description: 'NoSQL 文档数据库 MongoDB', postCount: 5, parentId: '5', sortOrder: 2, createdAt: '2024-01-07T10:00:00Z' }
]

// Mock 网站设置
export const mockSettings: SiteSettings = {
  siteTitle: '我的博客',
  siteDescription: '分享技术文章和学习笔记',
  siteKeywords: ['技术', '编程', '前端', '后端'],
  siteLogo: '/logo.png',
  siteFavicon: '/favicon.ico',
  siteUrl: 'https://yourblog.com',
  metaDescription: '专注于分享高质量的技术文章',
  googleAnalyticsId: '',
  baiduAnalyticsId: '',
  github: 'https://github.com/yourname',
  twitter: 'https://twitter.com/yourname',
  weibo: '',
  zhihu: '',
  email: 'your@email.com',
  enableComments: true,
  commentSystem: 'giscus',
  giscusRepo: 'yourname/your-repo',
  giscusRepoId: '',
  giscusCategoryId: '',
  customHead: '',
  customFooter: '',
  customCss: '',
  postsPerPage: 10,
  enableDarkMode: true,
  enableReadingTime: true,
  enableWordCount: true
}
