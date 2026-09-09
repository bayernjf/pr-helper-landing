# AGENTS.md — pr-helper-landing（PR Helper 落地页）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
PR Helper 落地页：GitHub 优先的 PR / Release 控制塔官网。Astro + Tailwind，纯静态，
部署在 Cloudflare Pages（默认域名 `pr-helper.bayjf.com`）。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（纯静态输出，无前端框架） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite`） |
| SEO | `@astrojs/sitemap` + `@astrojs/rss` |
| i18n | 中英双语（默认 `en` 无前缀，`zh` 走 `/zh/`） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 约定
- 可选 CLI 部署：`wrangler pages deploy dist --project-name=pr-helper-landing`
  （`wrangler.toml` 已配 `pages_build_output_dir = "dist"`）；主推 Pages 原生 Git 集成。
- 改域名要同步：`astro.config.mjs` 的 `site`、`public/robots.txt` 的 Sitemap 行、页面里的站点 URL 常量。
- 文案新增必须同时补中英两版。
- 部署细节见 `docs/DEPLOYMENT.md`。

## 不要做的事
- 不要改用 pnpm/yarn（仓库用 npm + `package-lock.json`）。
- 不要只改一个语言的文案。
- 不要提交构建产物与 `.env`。
- 不要跳过 `git pull --rebase` 直接 push。
