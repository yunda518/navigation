# 🌴 海南导航站 (Hainan Directory)

> 发现海南，从这里开始。一个专为海南省量身定制的现代化、轻量级网址导航平台。

![React](https://img.shields.io/badge/React-18-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)
![Vercel](https://img.shields.io/badge/Vercel-Ready-000000.svg)

## 📖 项目简介

海南导航站（Hainan Directory）致力于提供一个精选的、分类清晰的海南本地互联网入口。网站汇集了海南省内的政务服务、旅游景区、新闻媒体、教育文化、交通出行、本地企业与生活服务的官方网站与权威资源。

本项目采用现代前端技术栈构建，拥有极佳的性能、美观的响应式 UI 设计，并且原生支持无缝部署至 Vercel。

## ✨ 核心特性

- **分类精选**：覆盖政务、旅游、新闻、教育、交通、企业、生活服务、物流 8 大核心板块。
- **现代化 UI**：基于 Tailwind CSS 打造的响应式界面，适配桌面端与移动端，视觉体验清新现代。
- **极速搜索**：内置全局搜索功能，帮助用户快速直达目标站点。
- **SEO 优化**：内置完整的 Meta 标签与 OpenGraph 支持，有利于搜索引擎抓取与社交媒体分享。
- **极速体验**：基于 React 18 + Vite 构建，秒级启动，极致的页面加载速度。
- **一键部署**：内置 `vercel.json`，支持零配置直接部署到 Vercel 平台。

## 🛠️ 技术栈

- **核心框架**: [React 18](https://react.dev/)
- **开发语言**: [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **路由管理**: [React Router v7](https://reactrouter.com/)
- **状态管理**: [Zustand](https://zustand-demo.pmnd.rs/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
- **图标库**: [Lucide React](https://lucide.dev/)

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/你的用户名/你的仓库名.git
cd hainan-directory
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务器
```bash
npm run dev
```
启动后，浏览器访问 `http://localhost:5173` 即可预览项目。

### 4. 构建生产版本
```bash
npm run build
```

## 📦 部署指南

本项目已配置好 `vercel.json`，强烈推荐使用 Vercel 进行免费部署：

1. 将项目推送到你的 GitHub 仓库。
2. 登录 [Vercel](https://vercel.com/)，选择 "Add New Project"。
3. 导入你的 GitHub 仓库。
4. 保持所有默认设置，点击 "Deploy" 即可完成部署。

## 📁 目录结构

```text
├── src/
│   ├── components/    # 可复用的 UI 组件 (Header, Footer, 搜索栏, 卡片等)
│   ├── data/          # 静态数据源 (网址分类与具体站点数据)
│   ├── pages/         # 页面级组件 (首页, 分类页, 搜索页等)
│   ├── utils/         # 工具函数 (SEO配置等)
│   ├── App.tsx        # 路由与应用入口
│   ├── index.css      # 全局样式与 Tailwind 指令
│   └── main.tsx       # React 挂载入口
├── public/            # 静态资源 (favicon 等)
├── vercel.json        # Vercel 部署配置文件
└── tailwind.config.js # Tailwind CSS 配置文件
```

## 🤝 贡献指南

如果你发现有优质的海南本地网站没有被收录，或者现有链接失效，欢迎提交 Pull Request 或者在 Issue 中留言反馈。

1. Fork 本仓库
2. 在 `src/data/sites.ts` 中添加或修改站点数据
3. 提交你的更改 (`git commit -m 'feat: 新增 xx 网站'`)
4. 推送到你的分支 (`git push origin main`)
5. 创建一个 Pull Request

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。
