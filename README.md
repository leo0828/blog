# 🚀 L-App Blog

基于 **Vue 3** + **Vite** + **Tailwind CSS 4.0** 构建的现代化个人博客系统。

[![Deploy to GitHub Pages](https://github.com/leo0828/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/leo0828/blog/actions/workflows/deploy.yml)

## 🌟 项目亮点

- **⚡ 极致开发体验**: 采用 Vite 驱动，配合最新的 **Tailwind CSS 4.0** (@tailwindcss/vite)，样式编译更迅速。
- **🛡️ 严格代码规范**: 深度集成 **Oxlint** (Rust 编写的高性能 Linter) 与 **ESLint**，确保代码质量与运行效率。
- **📝 专业内容呈现**:
  - 使用 **Marked** 高效解析 Markdown 博客内容。
  - 集成 **Shiki** 实现媲美 VS Code 的语法高亮。
  - 使用 `@tailwindcss/typography` 插件，提供极致的阅读排版。
- **🤖 自动化运维**: 零配置 GitHub Actions，实现代码推送即自动构建并发布至 GitHub Pages。

## 🛠️ 技术栈

- **核心**: [Vue 3](https://vuejs.org/) (Composition API)
- **路由**: [Vue Router 5](https://router.vuejs.org/)
- **样式**: [Tailwind CSS v4](https://tailwindcss.com/)
- **构建**: [Vite](https://vitejs.dev/)
- **检查**: [Oxlint](https://oxlint.dev/), [ESLint 10](https://eslint.org/)
- **其他**: Axios, Marked, Shiki, Prettier

## 📦 快速开始

### 环境要求

- **Node.js**: `^20.19.0` 或 `>=22.12.0`
- **包管理器**: [pnpm](https://pnpm.io/) (强烈推荐)

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm run dev

```

### 3. 代码质量检查

项目采用了双层检查机制：Oxlint 负责速度，ESLint 负责深度。

```bash
# 执行完整检查与自动修复
pnpm run lint

# 仅格式化样式
pnpm run format

```

### 4. 项目打包

```bash
pnpm run build

```

## 🚀 部署

本仓库已通过 GitHub Actions 配置自动化部署。

- **目标地址**: [https://leo0828.github.io/blog/](https://leo0828.github.io/blog/)
- **发布分支**: 每次对 `main` 分支的 `push` 操作都会触发构建。
- **注意**: 由于部署在子路径 `/blog/` 下，请确保 `vite.config.ts` 中的 `base` 配置为 `'/blog/'`。
