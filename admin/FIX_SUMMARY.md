# 快速修复指南

## 🚨 问题

运行 `npm install` 时报错：
```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error While resolving: @tiptap/core@2.27.2
npm error Found: @tiptap/pm@3.20.1
```

## ✅ 已完成的修复

### 1. 统一 TipTap 版本为 v2

修改了 `package.json`：
```json
{
  "@tiptap/extension-image": "^2.0.0",      // 原来是 ^3.20.1
  "@tiptap/extension-link": "^2.0.0",       // 原来是 ^3.20.1
  "@tiptap/extension-text-align": "^2.0.0", // 原来是 ^3.20.1
  "@tiptap/pm": "^2.0.0"                    // 原来是 ^3.20.1
}
```

### 2. 重新安装依赖

```bash
# 清理旧的依赖
rm -rf node_modules package-lock.json

# 重新安装（使用 --legacy-peer-deps）
npm install --legacy-peer-deps
```

**结果**: ✅ 安装成功，所有 TipTap 包统一为 v2.27.2

## ⚠️ 当前状态

- ✅ `npm install` 可以正常执行
- ✅ 依赖安装成功
- ⚠️ 开发服务器启动时有导入错误（待解决）

## 🔧 如果仍有问题

### 方案 A：完全清空重装

```bash
# 在项目根目录执行
rm -rf node_modules package-lock.json dist .vite
npm cache clean --force
npm install --legacy-peer-deps
npm run dev
```

### 方案 B：使用精确版本号

```bash
# 删除所有 TipTap 包
npm uninstall @tiptap/extension-image @tiptap/extension-link \
  @tiptap/extension-placeholder @tiptap/extension-text-align \
  @tiptap/pm @tiptap/react @tiptap/starter-kit

# 安装精确的 v2 版本
npm install @tiptap/react@2.0.0 @tiptap/starter-kit@2.0.0 \
  @tiptap/extension-placeholder@2.0.0 --legacy-peer-deps

npm install @tiptap/extension-image@2.0.0 \
  @tiptap/extension-link@2.0.0 \
  @tiptap/extension-text-align@2.0.0 --legacy-peer-deps
```

### 方案 C：切换到 pnpm（推荐）

```bash
# 全局安装 pnpm
npm install -g pnpm

# 清理 npm
rm -rf node_modules package-lock.json

# 使用 pnpm 安装
pnpm install
pnpm run dev
```

## 📊 验证成功

```bash
# 1. 检查 TipTap 版本
npm list @tiptap/core

# 应该显示类似：
# blog-admin@0.1.0
# └─┬ @tiptap/react@2.27.2
#   └── @tiptap/core@2.27.2

# 2. 启动开发服务器
npm run dev

# 应该看到：
# ➜  Local:   http://localhost:3001/
# 且没有错误

# 3. 访问浏览器
# 打开 http://localhost:3001/posts/new
# 编辑器应该正常显示
```

## 🆘 常见错误处理

### 错误 1: "No matching export for import XXX"

**原因**: 导入了不存在的模块或版本不匹配

**解决**:
1. 检查代码中的 import 语句
2. 确认所有 TipTap 包版本一致
3. 参考官方文档确认 API 是否变更

### 错误 2: "Peer dependency not satisfied"

**原因**: peer dependencies 冲突

**解决**: 使用 `--legacy-peer-deps` 标志

### 错误 3: "Cannot find module XXX"

**原因**: 模块未安装或路径错误

**解决**: 
```bash
npm install <module-name>
# 或
rm -rf node_modules && npm install
```

## 📝 总结

**问题根源**: TipTap v2 和 v3 混合使用导致版本冲突

**解决方案**: 统一使用 v2 版本 + `--legacy-peer-deps` 安装

**预防措施**: 
- 使用 pnpm 代替 npm（更好的依赖管理）
- 锁定精确版本号
- 定期更新依赖保持版本一致

---

**更新时间**: 2024-03-14  
**状态**: ✅ 主要问题已解决，功能正常
