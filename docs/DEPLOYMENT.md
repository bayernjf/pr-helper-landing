# 部署 — pr-helper-landing（PR Helper 落地页）

更新时间：2026-09-09

## 站点信息
- 默认域名：`https://pr-helper.bayjf.com`
- 技术栈：Astro 7（纯静态，无前端框架）+ Tailwind CSS 4（`@tailwindcss/vite`）+ `@astrojs/sitemap` + `@astrojs/rss`
- i18n：中英双语（默认 `en` 无前缀，`zh` 走 `/zh/`）
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## Cloudflare Pages（推荐：平台原生 Git 集成）
1. Dashboard → Workers & Pages → Create → Pages → Connect to Git → 选本仓库。
2. 构建配置：

| 配置项 | 值 |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22` |

3. 保存并部署，之后 push 即发，PR 自动生成预览链接。

### CLI 部署（可选）
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=pr-helper-landing
```
`wrangler.toml` 已配置 `pages_build_output_dir = "dist"`。

## 发布后验证
1. 中英双语首页与语言切换正常。
2. `robots.txt`、`sitemap.xml` 可访问且域名一致。
3. OG 图（构建时截出）可访问。

## 改域名时的同步点
- `astro.config.mjs` 的 `site`
- `public/robots.txt` 的 Sitemap 行
- 页面 / 组件里引用站点 URL 的常量
