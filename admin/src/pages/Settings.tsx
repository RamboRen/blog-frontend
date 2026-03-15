import { useState } from 'react'
import { Save, Globe, Palette, User, Code } from 'lucide-react'

interface SiteSettings {
  // 基本信息
  siteTitle: string
  siteDescription: string
  siteKeywords: string[]
  siteLogo: string
  siteFavicon: string
  siteUrl: string
  
  // SEO 设置
  metaDescription: string
  googleAnalyticsId: string
  baiduAnalyticsId: string
  
  // 社交链接
  github: string
  twitter: string
  weibo: string
  zhihu: string
  email: string
  
  // 评论设置
  enableComments: boolean
  commentSystem: 'giscus' | 'disqus' | 'utterances' | 'waline'
  giscusRepo: string
  giscusRepoId: string
  giscusCategoryId: string
  
  // 自定义代码
  customHead: string
  customFooter: string
  customCss: string
  
  // 其他设置
  postsPerPage: number
  enableDarkMode: boolean
  enableReadingTime: boolean
  enableWordCount: boolean
}

const defaultSettings: SiteSettings = {
  // 基本信息
  siteTitle: '我的博客',
  siteDescription: '分享技术文章和学习笔记',
  siteKeywords: ['技术', '编程', '前端', '后端'],
  siteLogo: '/logo.png',
  siteFavicon: '/favicon.ico',
  siteUrl: 'https://yourblog.com',
  
  // SEO 设置
  metaDescription: '专注于分享高质量的技术文章',
  googleAnalyticsId: '',
  baiduAnalyticsId: '',
  
  // 社交链接
  github: 'https://github.com/yourname',
  twitter: 'https://twitter.com/yourname',
  weibo: '',
  zhihu: '',
  email: 'your@email.com',
  
  // 评论设置
  enableComments: true,
  commentSystem: 'giscus',
  giscusRepo: 'yourname/your-repo',
  giscusRepoId: '',
  giscusCategoryId: '',
  
  // 自定义代码
  customHead: '',
  customFooter: '',
  customCss: '',
  
  // 其他设置
  postsPerPage: 10,
  enableDarkMode: true,
  enableReadingTime: true,
  enableWordCount: true
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState<'basic' | 'seo' | 'social' | 'comments' | 'custom' | 'other'>('basic')
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings)
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const updateSetting = <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    // TODO: 调用 API 保存设置
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('保存设置:', settings)
    setIsSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const tabs = [
    { id: 'basic', label: '基本信息', icon: Globe },
    { id: 'seo', label: 'SEO 设置', icon: Code },
    { id: 'social', label: '社交链接', icon: User },
    { id: 'comments', label: '评论设置', icon: MessageSquare },
    { id: 'custom', label: '自定义代码', icon: Code },
    { id: 'other', label: '其他设置', icon: Palette },
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              网站设置
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              配置网站的基本信息、SEO、评论等功能
            </p>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 dark:text-green-400 text-sm">
                ✓ 已保存
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5 mr-2" />
              {isSaving ? '保存中...' : '保存设置'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'basic' && (
            <BasicSettingsTab settings={settings} updateSetting={updateSetting} />
          )}
          {activeTab === 'seo' && (
            <SeoSettingsTab settings={settings} updateSetting={updateSetting} />
          )}
          {activeTab === 'social' && (
            <SocialSettingsTab settings={settings} updateSetting={updateSetting} />
          )}
          {activeTab === 'comments' && (
            <CommentsSettingsTab settings={settings} updateSetting={updateSetting} />
          )}
          {activeTab === 'custom' && (
            <CustomCodeTab settings={settings} updateSetting={updateSetting} />
          )}
          {activeTab === 'other' && (
            <OtherSettingsTab settings={settings} updateSetting={updateSetting} />
          )}
        </div>
      </div>
    </div>
  )
}

// 基本信息标签页
function BasicSettingsTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          网站基本信息
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              网站标题 *
            </label>
            <input
              type="text"
              value={settings.siteTitle}
              onChange={(e) => updateSetting('siteTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              网站描述
            </label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => updateSetting('siteDescription', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              网站关键词（用逗号分隔）
            </label>
            <input
              type="text"
              value={settings.siteKeywords.join(', ')}
              onChange={(e) => updateSetting('siteKeywords', e.target.value.split(',').map(k => k.trim()))}
              placeholder="技术，编程，前端"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Logo URL
              </label>
              <input
                type="text"
                value={settings.siteLogo}
                onChange={(e) => updateSetting('siteLogo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Favicon URL
              </label>
              <input
                type="text"
                value={settings.siteFavicon}
                onChange={(e) => updateSetting('siteFavicon', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              网站 URL
            </label>
            <input
              type="url"
              value={settings.siteUrl}
              onChange={(e) => updateSetting('siteUrl', e.target.value)}
              placeholder="https://yourblog.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// SEO 设置标签页
function SeoSettingsTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          SEO 优化设置
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Meta 描述
            </label>
            <textarea
              value={settings.metaDescription}
              onChange={(e) => updateSetting('metaDescription', e.target.value)}
              rows={3}
              maxLength={160}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              建议长度：50-160 个字符，当前长度：{settings.metaDescription.length}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Google Analytics ID
              </label>
              <input
                type="text"
                value={settings.googleAnalyticsId}
                onChange={(e) => updateSetting('googleAnalyticsId', e.target.value)}
                placeholder="G-XXXXXXXXXX"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                百度统计 ID
              </label>
              <input
                type="text"
                value={settings.baiduAnalyticsId}
                onChange={(e) => updateSetting('baiduAnalyticsId', e.target.value)}
                placeholder="xxxxxxxxxxxxxxxx"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 社交链接标签页
function SocialSettingsTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          社交媒体链接
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              GitHub
            </label>
            <input
              type="url"
              value={settings.github}
              onChange={(e) => updateSetting('github', e.target.value)}
              placeholder="https://github.com/yourname"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Twitter
            </label>
            <input
              type="url"
              value={settings.twitter}
              onChange={(e) => updateSetting('twitter', e.target.value)}
              placeholder="https://twitter.com/yourname"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              微博
            </label>
            <input
              type="url"
              value={settings.weibo}
              onChange={(e) => updateSetting('weibo', e.target.value)}
              placeholder="https://weibo.com/yourname"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              知乎
            </label>
            <input
              type="url"
              value={settings.zhihu}
              onChange={(e) => updateSetting('zhihu', e.target.value)}
              placeholder="https://www.zhihu.com/people/yourname"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              邮箱
            </label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => updateSetting('email', e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// 评论设置标签页
function CommentsSettingsTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          评论系统设置
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                启用评论功能
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                开启后文章详情页将显示评论区
              </p>
            </div>
            <button
              onClick={() => updateSetting('enableComments', !settings.enableComments)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.enableComments ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.enableComments ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {settings.enableComments && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  评论系统
                </label>
                <select
                  value={settings.commentSystem}
                  onChange={(e) => updateSetting('commentSystem', e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="giscus">Giscus（推荐）</option>
                  <option value="disqus">Disqus</option>
                  <option value="utterances">Utterances</option>
                  <option value="waline">Waline</option>
                </select>
              </div>

              {settings.commentSystem === 'giscus' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GitHub 仓库
                    </label>
                    <input
                      type="text"
                      value={settings.giscusRepo}
                      onChange={(e) => updateSetting('giscusRepo', e.target.value)}
                      placeholder="yourname/your-repo"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      格式：用户名/仓库名
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        仓库 ID
                      </label>
                      <input
                        type="text"
                        value={settings.giscusRepoId}
                        onChange={(e) => updateSetting('giscusRepoId', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        分类 ID
                      </label>
                      <input
                        type="text"
                        value={settings.giscusCategoryId}
                        onChange={(e) => updateSetting('giscusCategoryId', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// 自定义代码标签页
function CustomCodeTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          自定义代码注入
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              自定义 Head 代码
            </label>
            <textarea
              value={settings.customHead}
              onChange={(e) => updateSetting('customHead', e.target.value)}
              rows={5}
              placeholder="<script>/* 你的代码 */</script>"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              这些代码会被添加到每个页面的 &lt;head&gt; 标签内
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              自定义 Footer 代码
            </label>
            <textarea
              value={settings.customFooter}
              onChange={(e) => updateSetting('customFooter', e.target.value)}
              rows={5}
              placeholder="<script>/* 你的代码 */</script>"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              这些代码会被添加到每个页面的底部
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              自定义 CSS
            </label>
            <textarea
              value={settings.customCss}
              onChange={(e) => updateSetting('customCss', e.target.value)}
              rows={5}
              placeholder="/* 你的 CSS 样式 */"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              这些 CSS 会被添加到全局样式中
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 其他设置标签页
function OtherSettingsTab({ settings, updateSetting }: { 
  settings: SiteSettings
  updateSetting: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void
}) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          功能开关
        </h3>
        <div className="space-y-4">
          <ToggleOption
            label="暗色模式"
            description="允许用户切换亮色和暗色主题"
            checked={settings.enableDarkMode}
            onChange={(checked) => updateSetting('enableDarkMode', checked)}
          />

          <ToggleOption
            label="阅读时间估算"
            description="在文章详情页显示预计阅读时间"
            checked={settings.enableReadingTime}
            onChange={(checked) => updateSetting('enableReadingTime', checked)}
          />

          <ToggleOption
            label="字数统计"
            description="显示文章的字数统计"
            checked={settings.enableWordCount}
            onChange={(checked) => updateSetting('enableWordCount', checked)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          列表设置
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              每页显示文章数
            </label>
            <input
              type="number"
              value={settings.postsPerPage}
              onChange={(e) => updateSetting('postsPerPage', parseInt(e.target.value) || 10)}
              min="5"
              max="50"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              首页和文章列表页每页显示的文章数量
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 开关选项组件
function ToggleOption({
  label,
  description,
  checked,
  onChange
}: {
  label: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          checked ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

// 需要导入 MessageSquare 图标
import { MessageSquare } from 'lucide-react'
