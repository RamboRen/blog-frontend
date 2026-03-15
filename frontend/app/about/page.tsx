'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { Github, Twitter, Mail, Heart, Code, Book, Coffee, MapPin, Link as LinkIcon, Award, Star } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'timeline'>('about')

  const skills = [
    { name: 'React / Next.js', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'PostgreSQL', level: 78, category: 'backend' },
    { name: 'Docker', level: 75, category: 'devops' },
    { name: 'AWS', level: 70, category: 'devops' },
  ]

  const timeline = [
    {
      year: '2024',
      title: '高级前端工程师',
      company: '某科技公司',
      description: '负责前端架构设计和技术选型，带领团队完成多个重要项目。'
    },
    {
      year: '2022',
      title: '前端开发工程师',
      company: '互联网公司',
      description: '专注于 React 生态系统的开发，优化网站性能和用户体验。'
    },
    {
      year: '2020',
      title: '全栈开发工程师',
      company: '创业公司',
      description: '从 0 到 1 搭建产品，负责前后端开发和技术决策。'
    },
    {
      year: '2018',
      title: '初级开发工程师',
      company: '软件公司',
      description: '开始职业生涯，学习并实践现代 Web 开发技术。'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:hello@example.com', color: 'hover:text-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-primary-400 to-accent-400 text-white">
                A
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full"></div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent">
            Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            高级前端工程师 / 技术博主 / 开源爱好者
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8">
            <MapPin className="w-5 h-5" />
            <span>中国 · 北京</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all ${link.color} text-gray-600 dark:text-gray-400`}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">年经验</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">项目</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">文章</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg">
              {[
                { id: 'about', label: '关于我', icon: Heart },
                { id: 'skills', label: '技能栈', icon: Code },
                { id: 'timeline', label: '经历', icon: Award },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            {activeTab === 'about' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  👋 你好，我是 Alex
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    我是一名充满热情的<strong className="text-primary-600 dark:text-primary-400">高级前端工程师</strong>，
                    拥有超过 8 年的 Web 开发经验。目前在北京的一家科技公司工作，专注于构建优秀的用户界面和开发者工具。
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    🎯 我的专注领域
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>现代前端架构</strong> - React、Next.js、TypeScript 生态系统
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>性能优化</strong> - 提升网站加载速度和用户体验
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>开发者体验</strong> - 构建高效的开发工具和组件库
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>技术分享</strong> - 通过博客和开源项目回馈社区
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    💡 技术理念
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    我相信<strong className="text-primary-600 dark:text-primary-400">简洁优于复杂</strong>，
                    <strong className="text-purple-600 dark:text-purple-400">可读性胜过聪明</strong>。
                    在编写代码时，我始终遵循最佳实践，注重代码质量、可维护性和可扩展性。
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-4 rounded-lg border-l-4 border-primary-500">
                    "代码是写给人看的，只是恰好能被机器执行。" —— 这是我一直秉承的理念。
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                    🌟 工作之余
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    除了编程，我还热爱<strong className="text-accent-600 dark:text-accent-400">摄影</strong>、
                    <strong className="text-green-600 dark:text-green-400">旅行</strong>和
                    <strong className="text-blue-600 dark:text-blue-400">阅读</strong>。
                    我相信多元的兴趣爱好能够激发创造力，带来不同的视角和思考方式。
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  🛠️ 技术栈
                </h2>

                {/* Frontend */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    前端技术
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === 'frontend').map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-green-500" />
                    后端技术
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === 'backend').map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-orange-500" />
                    DevOps
                  </h3>
                  <div className="space-y-4">
                    {skills.filter(s => s.category === 'devops').map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  📜 职业经历
                </h2>

                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-500"></div>

                  {/* Timeline Items */}
                  <div className="space-y-8 ml-8">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 border-4 border-white dark:border-gray-800 shadow-lg"></div>
                        
                        {/* Content */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                            <LinkIcon className="w-4 h-4" />
                            <span>{item.company}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-[22px] p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                📬 联系我
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                有合作机会或想交个朋友？欢迎随时联系我！
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5" />
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
