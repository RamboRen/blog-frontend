export interface SiteConfig {
  title: string
  subtitle: string
  description: string
  author: string
  avatar: string
  socialLinks: SocialLink[]
  enableDarkMode: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Post {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  coverImage?: string
  createdAt: string
  updatedAt: string
  tags: Tag[]
  categories: Category[]
  readingTime: number
  viewCount: number
}

export interface Tag {
  id: string
  name: string
  slug: string
  color: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export const defaultConfig: SiteConfig = {
  title: '我的博客',
  subtitle: '记录技术与生活',
  description: '一个专注于技术分享的博客',
  author: 'Author',
  avatar: '/avatar.png',
  socialLinks: [
    { platform: 'github', url: 'https://github.com', icon: 'github' },
    { platform: 'twitter', url: 'https://twitter.com', icon: 'twitter' },
  ],
  enableDarkMode: true,
}
