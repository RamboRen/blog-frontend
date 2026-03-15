# NPM 依赖冲突问题解决方案

## 问题描述

执行 `npm install` 时出现以下错误：

```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error While resolving: @tiptap/core@2.27.2
npm error Found: @tiptap/pm@3.20.1
```

## 根本原因

TipTap 依赖包版本不兼容：
- `@tiptap/starter-kit`、`@tiptap/react` 等核心包使用 **v2 版本**
- `@tiptap/extension-link`、`@tiptap/extension-image` 等扩展包被安装为 **v3 版本**
- v2 和 v3 之间存在破坏性变更，无法共存

## 解决方案

### 方案 1：统一使用 TipTap v2（已采用）✅

修改 `package.json`，将所有 TipTap 包统一为 v2 版本：

```json
{
  "dependencies": {
    "@tiptap/extension-image": "^2.0.0",
    "@tiptap/extension-link": "^2.0.0",
    "@tiptap/extension-placeholder": "^2.0.0",
    "@tiptap/extension-text-align": "^2.0.0",
    "@tiptap/pm": "^2.0.0",
    "@tiptap/react": "^2.0.0",
    "@tiptap/starter-kit": "^2.0.0"
  }
}
```

然后执行：

```bash
# 删除旧的 node_modules 和锁文件
rm -rf node_modules package-lock.json

# 重新安装（使用 --legacy-peer-deps 避免 peer dependencies 警告）
npm install --legacy-peer-deps
```

### 方案 2：升级到 TipTap v3（不推荐）

将所有 TipTap 包升级到 v3：

```bash
npm install @tiptap/core@^3 @tiptap/react@^3 @tiptap/starter-kit@^3 \
  @tiptap/extension-image@^3 @tiptap/extension-link@^3 \
  @tiptap/extension-placeholder@^3 @tiptap/extension-text-align@^3
```

**注意**：v3 有破坏性变更，需要修改代码适配。

### 方案 3：使用 --force 或 --legacy-peer-deps（临时方案）

```bash
npm install --force
# 或
npm install --legacy-peer-deps
```

**缺点**：可能导致运行时错误，仅作为临时解决方案。

## 为什么选择方案 1

1. **稳定性**：v2 已经过充分测试，功能完善
2. **兼容性**：现有代码基于 v2 编写，无需修改
3. **文档齐全**：v2 的文档和社区资源更丰富
4. **风险低**：避免升级带来的未知问题

## 验证修复

执行以下命令确认安装成功：

```bash
# 检查安装的版本
npm list @tiptap/core @tiptap/react @tiptap/starter-kit

# 应该都显示 v2.x.x 版本
```

启动开发服务器测试：

```bash
npm run dev
```

访问 http://localhost:3001/posts/new 测试编辑器是否正常工作。

## 预防措施

为避免将来再次出现类似问题：

1. **锁定版本号**：在 package.json 中使用精确版本号
   ```json
   "@tiptap/react": "2.0.0"  // 不使用 ^
   ```

2. **使用 pnpm**：pnpm 更严格地处理依赖版本
   ```bash
   pnpm install
   ```

3. **定期更新依赖**：保持所有 TipTap 包版本一致
   ```bash
   npm outdated  # 查看过期的包
   npm update    # 更新包
   ```

## 相关资源

- [TipTap v2 文档](https://tiptap.dev/v2/docs/installation)
- [TipTap v3 升级指南](https://tiptap.dev/docs/upgrade-guide)
- [NPM 依赖冲突解决](https://docs.npmjs.com/resolving-dependency-conflicts)

## 常见问题

### Q: 为什么要用 --legacy-peer-deps？

A: TipTap 的一些包声明了严格的 peer dependencies，使用此标志可以绕过这些检查。这在开发阶段是安全的。

### Q: 可以使用 yarn 或 pnpm 吗？

A: 可以！yarn 和 pnpm 处理依赖冲突的方式更好。推荐使用 pnpm：
```bash
pnpm install
```

### Q: 安装后仍有 vulnerabilities 警告怎么办？

A: 
```bash
# 运行自动修复（安全的方式）
npm audit fix

# 如果有破坏性变更，谨慎使用强制修复
npm audit fix --force
```

---

**最后更新时间**: 2024-03-14  
**状态**: ✅ 已解决
