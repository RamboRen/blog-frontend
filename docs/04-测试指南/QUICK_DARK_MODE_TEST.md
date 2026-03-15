# 暗色模式快速测试指南

## 🚀 立即测试（30 秒）

### 第一步：打开浏览器控制台

1. 访问 http://localhost:3000
2. 按 **F12** (Windows) 或 **Cmd+Option+I** (Mac)
3. 点击 **Console** 标签

### 第二步：手动添加暗色模式

在 Console 中输入以下代码并按回车：

```javascript
document.documentElement.classList.add('dark')
```

**观察页面变化**：
- ✅ **如果页面变暗** → CSS 正常，问题在切换按钮
- ❌ **如果页面不变** → CSS 配置有问题

### 第三步：检查背景色

继续在 Console 中输入：

```javascript
getComputedStyle(document.body).backgroundColor
```

**预期结果**：
- ✅ 应该返回 `rgb(17, 24, 39)` （暗色模式的 gray-900）
- ❌ 如果返回 `rgb(255, 255, 255)` → CSS 变量没有生效

### 第四步：切换回日间模式

```javascript
document.documentElement.classList.remove('dark')
```

**预期结果**：页面恢复为白色背景

---

## 🔍 如果手动添加 .dark 类有效

说明 CSS 配置正确，问题在 **Header 组件的切换逻辑**。

### 检查切换按钮

1. 在 Elements 标签中找到切换按钮
2. 右键点击 → "Store as global variable"
3. 在 Console 中输入：`temp0.click()`
4. 观察是否有任何反应

**如果没有反应**，可能是：
- onClick 事件没有绑定
- JavaScript 有错误

### 检查 JavaScript 错误

查看 Console 是否有红色错误信息，特别是：
- `toggleDarkMode is not defined`
- `Cannot read property 'classList' of null`
- 任何其他错误

---

## 🔧 如果手动添加 .dark 类无效

说明 CSS 配置有问题。

### 方案 1：检查 globals.css 是否被加载

在 Console 中执行：

```javascript
// 检查所有样式表
Array.from(document.styleSheets).forEach((sheet, i) => {
  console.log(`Stylesheet ${i}:`, sheet.href);
});
```

**应该看到** globals.css 相关的样式

### 方案 2：强制应用 CSS 变量

在 Console 中执行：

```javascript
// 直接设置 body 样式
document.body.style.backgroundColor = 'rgb(17, 24, 39)'
document.body.style.color = 'rgb(249, 250, 251)'
```

**如果颜色改变了**，说明内联样式覆盖了 CSS 变量

### 方案 3：使用 !important

编辑 `/frontend/app/globals.css`，临时添加 `!important`：

```css
html.dark {
  --background: #111827 !important;
  --foreground: #f9fafb !important;
}
```

然后刷新页面，再次测试。

---

## 📊 完整诊断流程

```
1. 打开 Console
   ↓
2. 执行：document.documentElement.classList.add('dark')
   ↓
3. 页面变暗了吗？
   ├─ ✅ 是 → CSS 正常，检查切换按钮
   │   ├─ 检查 onClick 事件
   │   ├─ 检查 Console 错误
   │   └─ 检查 Header 组件
   │
   └─ ❌ 否 → CSS 有问题
       ├─ 检查 globals.css 是否加载
       ├─ 检查 CSS 优先级
       └─ 尝试 !important
```

---

## 💻 一键测试脚本

复制以下代码到 Console 运行：

```javascript
(function testDarkMode() {
  console.log('=== 暗色模式测试 ===');
  
  // 测试 1: 添加 dark 类
  document.documentElement.classList.add('dark');
  console.log('✓ 已添加 .dark 类');
  
  // 测试 2: 检查背景色
  const bgColor = getComputedStyle(document.body).backgroundColor;
  console.log('当前背景色:', bgColor);
  
  // 测试 3: 检查文字色
  const textColor = getComputedStyle(document.body).color;
  console.log('当前文字色:', textColor);
  
  // 测试 4: 检查 HTML class
  console.log('HTML class:', document.documentElement.className);
  
  // 测试 5: 检查 LocalStorage
  console.log('LocalStorage theme:', localStorage.getItem('theme'));
  
  // 判断结果
  if (bgColor === 'rgb(17, 24, 39)' || bgColor.includes('17')) {
    console.log('✅ 暗色模式正常工作！');
  } else {
    console.log('❌ 暗色模式未生效，CSS 配置可能有问题');
  }
  
  console.log('===================');
})();
```

**输出示例**：
```
=== 暗色模式测试 ===
✓ 已添加 .dark 类
当前背景色：rgb(17, 24, 39)
当前文字色：rgb(249, 250, 251)
HTML class: dark
LocalStorage theme: dark
✅ 暗色模式正常工作！
===================
```

---

## 🎯 常见解决方案

### 症状：图标会切换，但颜色不变

**原因**：React 状态更新了，但 DOM 操作失败

**解决**：
```javascript
// 在 Header 组件中检查 toggleDarkMode 函数
console.log('isDarkMode:', isDarkMode);
console.log('Click event fired');
```

### 症状：什么都没有发生

**原因**：JavaScript 可能有错误

**解决**：
1. 检查 Console 的红色错误
2. 刷新页面清除缓存
3. 检查 Network 标签看 globals.css 是否加载成功

### 症状：只有部分元素变色

**原因**：某些组件有自己的背景色定义

**解决**：确保所有组件都使用了正确的 `dark:` 前缀

---

## 📝 请告诉我

测试完成后，请告诉我以下信息：

1. **手动添加 `.dark` 类后，页面是否变暗？**
2. **Console 是否显示任何错误信息？**
3. **`getComputedStyle(document.body).backgroundColor` 返回什么值？**
4. **点击切换按钮时，Console 有什么输出？**

有了这些信息，我就能准确定位并解决问题！💪
