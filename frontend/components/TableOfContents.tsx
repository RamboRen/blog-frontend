'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 提取所有标题
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map((heading) => ({
        id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1]),
      }))
      .filter(item => item.text)

    // 如果没有 ID，生成一个
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`
        const element = document.querySelector(`h${heading.level}:nth-of-type(${index + 1})`)
        if (element) {
          element.id = heading.id
        }
      }
    })

    setToc(headings)

    // 监听滚动高亮当前标题
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const heading of headings) {
        const element = document.getElementById(heading.id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(heading.id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (toc.length === 0) return null

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <List className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-32 right-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
          目录
        </h3>
        <nav className="space-y-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                activeId === item.id
                  ? 'text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">目录</h3>
            <nav className="space-y-3">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                    activeId === item.id
                      ? 'text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
