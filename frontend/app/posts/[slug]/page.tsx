'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, Eye, Tag, ArrowLeft, Share2, MessageSquare, Heart } from 'lucide-react'
import PostCard from '@/components/PostCard'
import TableOfContents from '@/components/TableOfContents'
import ReadingProgress from '@/components/ReadingProgress'
import ArticleContent from '@/components/ArticleContent'
import { Post } from '@/types'

// Mock data - 实际项目中应该从 API 获取
const mockPosts: Post[] = [
  {
    id: '1',
    title: '深入理解 React Hooks 的最佳实践',
    slug: 'understanding-react-hooks',
    summary: '探索 React Hooks 的强大功能，学习如何使用 useState、useEffect 等 Hook 编写更简洁、更可维护的代码。本文将通过实际例子带你掌握 Hooks 的精髓。',
    content: `
      <h1>深入理解 React Hooks 的最佳实践</h1>
      
      <p>React Hooks 是 React 16.8 引入的新特性，它让你在不编写 class 的情况下使用 state 和其他 React 特性。</p>
      
      <h2>为什么使用 Hooks？</h2>
      
      <p>在 Hooks 出现之前，组件之间的逻辑复用通常使用高阶组件（HOC）或者 render props。但是这些方案往往会导致组件嵌套过深，代码难以理解。</p>
      
      <blockquote>
        Hooks 让代码更加简洁，逻辑复用更加直观。
      </blockquote>
      
      <h2>常用 Hooks 详解</h2>
      
      <h3>1. useState - 状态管理</h3>
      
      <pre><code class="language-javascript">import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h3>2. useEffect - 副作用处理</h3>
      
      <p>useEffect 让你可以在函数组件中执行副作用操作，比如数据获取、订阅或者手动修改 DOM。</p>
      
      <pre><code class="language-javascript">import { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(result => {
      setData(result);
    });
  }, []);

  return &lt;div&gt;{data}&lt;/div&gt;;
}</code></pre>
      
      <h3>3. useContext - 上下文访问</h3>
      
      <p>useContext 让你可以订阅 React context，从而避免 prop drilling。</p>
      
      <h2>最佳实践</h2>
      
      <ul>
        <li><strong>只在顶层使用 Hooks</strong> - 不要在循环、条件语句或者嵌套函数中调用 Hooks</li>
        <li><strong>只在 React 函数中调用 Hooks</strong> - 不要在普通 JavaScript 函数中调用 Hooks</li>
        <li><strong>使用 ESLint 插件</strong> - eslint-plugin-react-hooks 可以帮你发现违反规则的地方</li>
        <li><strong>自定义 Hooks</strong> - 将组件逻辑提取到自定义 Hooks 中以便复用</li>
      </ul>
      
      <h2>自定义 Hooks 示例</h2>
      
      <pre><code class="language-javascript">function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}</code></pre>
      
      <p>通过这个自定义 Hook，你可以轻松地在多个组件中使用 localStorage。</p>
      
      <h2>总结</h2>
      
      <p>React Hooks 是一个强大的工具，正确使用它可以让你的代码更加清晰、简洁和易于维护。记住要遵循最佳实践，并在适当的时候使用它们。</p>
    `,
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
    content: '<h1>TypeScript 高级类型技巧</h1><p>内容待完善...</p>',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e69fbedbe9?w=800&h=400&fit=crop',
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    tags: [
      { id: '3', name: 'TypeScript', slug: 'typescript', color: '#3178C6' }
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
    summary: '深入了解 Next.js 14 带来的革命性更新。',
    content: '<h1>Next.js 14 新特性</h1><p>内容待完善...</p>',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    tags: [
      { id: '4', name: 'Next.js', slug: 'nextjs', color: '#000000' }
    ],
    categories: [
      { id: '1', name: '前端开发', slug: 'frontend' }
    ],
    readingTime: 10,
    viewCount: 2156
  },
]

export default function PostDetail() {
  const params = useParams()
  const slug = params.slug as string

  // 查找对应的文章
  const post = mockPosts.find(p => p.slug === slug) || mockPosts[0]

  // 推荐文章（排除当前文章）
  const relatedPosts = mockPosts.filter(p => p.id !== post.id).slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      {/* Table of Contents */}
      <TableOfContents />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回首页
        </Link>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>阅读时间：{post.readingTime} 分钟</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{post.viewCount} 次阅读</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 dark:text-primary-300 hover:from-primary-200 hover:to-accent-200 transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="mb-12">
          <ArticleContent content={post.content} />
        </div>

        {/* Share & Interact */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                <Heart className="w-5 h-5" />
                <span>喜欢</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>评论</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>分享</span>
            </button>
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              A
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                关于作者
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                热爱技术分享，专注于前端开发和用户体验设计。致力于创造高质量的技术内容和实用的解决方案。
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  个人网站
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            推荐阅读
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
