'use client'

import { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default function ArticleContent({ content }: { content: string }) {
  useEffect(() => {
    // 渲染完成后应用代码高亮
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement)
    })
  }, [content])

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
        prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 dark:prose-strong:text-white
        prose-blockquote:border-l-4 prose-blockquote:border-primary-500 
        prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800
        prose-blockquote:py-2 prose-blockquote:px-4
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800
        prose-code:text-primary-600 dark:prose-code:text-primary-400
        prose-code:px-2 prose-code:py-1 prose-code:rounded
        prose-pre:!bg-gray-900 prose-pre:!text-gray-100 prose-pre:rounded-lg prose-pre:shadow-lg
        prose-ul:list-disc prose-ol:list-decimal
        prose-li:text-gray-700 dark:prose-li:text-gray-300"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
