# 暗色模式调试步骤

## 🔍 问题诊断

请按以下步骤检查暗色模式为什么不工作：

### 步骤 1：打开浏览器开发者工具

1. 访问 http://localhost:3000
2. 按 F12 或右键点击"检查"打开开发者工具

### 步骤 2：检查 Console 是否有错误

查看 Console 标签，应该看到：
- ✅ 没有红色错误
- ❌ 如果有错误，请记录下来

### 步骤 3：手动测试 .dark 类是否生效

在 Console 中执行以下代码：

```javascript
// 添加 dark 类
document.documentElement.classList.add('dark')

// 检查 body 的背景色
getComputedStyle(document.body).backgroundColor
```

**预期结果**：
- ✅ 应该返回 `rgb(17, 24, 39)` (gray-900)
- ❌ 如果返回 `rgb(255, 255, 255)`，说明 CSS 变量没有更新

### 步骤 4：检查 CSS 变量

在 Console 中执行：

```javascript
// 检查当前的 CSS 变量值
getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
```

**日间模式**：应该返回 `#ffffff` 或 `rgb(255, 255, 255)`
**暗色模式**：应该返回 `#111827` 或 `rgb(17, 24, 39)`

### 步骤 5：检查 Header 组件

在 Elements 标签中找到 Header 的切换按钮，然后点击它。同时观察：

1. **Console** - 执行 `toggleDarkMode` 函数
2. **Elements** - `<html>` 标签的 class 属性
3. **Styles** - body 的 background-color

### 步骤 6：测试 LocalStorage

在 Console 中执行：

```javascript
// 检查当前存储的主题
localStorage.getItem('theme')

// 手动设置为 dark
localStorage.setItem('theme', 'dark')

// 刷新页面
location.reload()
```

---

## 🐛 可能的问题

### 问题 1：CSS 变量优先级不够

**症状**：添加了 `.dark` 类，但背景色不变

**原因**：可能有其他样式覆盖了 CSS 变量

**解决方案**：
```css
/* 尝试增加优先级 */
html.dark {
  --background: #111827;
  --foreground: #f9fafb;
}
```

### 问题 2：Tailwind CSS v4 配置问题

**症状**：Tailwind 的 `dark:` 样式工作，但 CSS 变量不工作

**原因**：Next.js 16 使用 Tailwind CSS v4，配置方式不同

**解决方案**：检查 `tailwind.config.js` 是否正确

### 问题 3：React 状态没有同步

**症状**：点击按钮后图标变了，但页面颜色不变

**原因**：React 状态更新了，但 DOM 操作没有执行

**解决方案**：检查 Console 是否有错误

---

## 🔧 快速修复方案

### 方案 1：直接在 Console 测试

```javascript
// 1. 添加 dark 类
document.documentElement.classList.add('dark')

// 2. 检查颜色变化
// 观察页面是否变暗

// 3. 如果变暗，说明 CSS 正常，是切换逻辑有问题
// 如果不变暗，说明 CSS 配置有问题
```

### 方案 2：修改 globals.css 增加优先级

编辑 `/frontend/app/globals.css`：

```css
@import "tailwindcss";

/* 日间模式（默认） */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

/* 暗色模式 - 增加优先级 */
html.dark {
  --background: #111827;
  --foreground: #f9fafb;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

### 方案 3：使用 !important（最后手段）

```css
.dark {
  --background: #111827 !important;
  --foreground: #f9fafb !important;
}
```

---

## 📊 验证清单

请在浏览器中按顺序检查：

- [ ] 打开 http://localhost:3000
- [ ] 按 F12 打开开发者工具
- [ ] 在 Console 执行 `document.documentElement.classList.add('dark')`
- [ ] 观察页面是否变暗
- [ ] 执行 `getComputedStyle(document.body).backgroundColor`
- [ ] 检查结果是否为 `rgb(17, 24, 39)`
- [ ] 点击 Header 的切换按钮
- [ ] 观察 Console 是否有错误
- [ ] 检查 `<html>` 标签是否有 `dark` 类
- [ ] 检查 LocalStorage 是否有 `theme` 键

---

## 💡 关键信息

### Tailwind CSS v4 的变化

Next.js 16 使用了 Tailwind CSS v4，主要变化：

1. **PostCSS 插件**：使用 `@tailwindcss/postcss` 而不是 `postcss.config.js`
2. **CSS 导入**：使用 `@import "tailwindcss"` 而不是 `@tailwind` 指令
3. **内联主题**：使用 `@theme inline` 定义设计令牌

### CSS 变量与 Tailwind 协同工作

```css
/* globals.css - CSS 变量控制整体背景 */
.dark {
  --background: #111827;
}

body {
  background: var(--background);
}

/* 组件中 - Tailwind utility 控制局部 */
<div className="bg-white dark:bg-gray-800">
  <!-- 
    bg-white = rgb(255, 255, 255)
    dark:bg-gray-800 = rgb(31, 41, 55)
  -->
</div>
```

---

## 🎯 下一步

请执行上述步骤，并告诉我：

1. **Console 是否有错误？**
2. **手动添加 `.dark` 类后，页面是否变暗？**
3. **`getComputedStyle(document.body).backgroundColor` 返回什么值？**
4. **点击切换按钮后，`<html>` 标签的 class 是否改变？**

根据这些信息，我可以准确定位问题所在！
