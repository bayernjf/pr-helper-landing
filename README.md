# PR Helper Landing

PR Helper 落地页 — GitHub 优先的 PR / Release 控制塔。Astro + Tailwind，纯静态，部署到 Cloudflare Pages。

## 技术栈

- Astro 7（纯静态输出，无前端框架）
- Tailwind CSS 4（via `@tailwindcss/vite`）
- `@astrojs/sitemap` + `@astrojs/rss`
- 中英双语 i18n（默认 en 无前缀，zh 走 `/zh/`）

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建产物
```

## 部署到 Cloudflare Pages（推荐：平台原生）

1. 把本目录推送到 GitHub 仓库（建议单独仓库，如 `pr-helper-landing`）。
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → 选仓库。
3. 构建配置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22`（环境变量 `NODE_VERSION=22`）
4. 保存并部署。默认域名：`https://pr-helper.bayjf.com`。

### CLI 部署（可选）

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=pr-helper-landing
```

`wrangler.toml` 已配置 `pages_build_output_dir = "dist"`。

## 绑定自定义域名后

同步修改两处：
- `astro.config.mjs` 的 `site`
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 的 Sitemap
- `public/llms.txt` / `llms-full.txt` / `llms-en.txt` / `llms-en-full.txt` 内的链接

## SEO / GEO

- `src/components/SEO.astro` 统一注入 meta、canonical、hreflang、OG、Twitter、JSON-LD（Organization + WebSite + SoftwareApplication + FAQPage）
- 首页注入 HowTo schema（`src/data/workflow.ts` 的 `buildHowToSchema`）
- 文章页注入 TechArticle + BreadcrumbList schema
- `public/llms.txt` 系列：供 AI 爬虫友好抓取的核心与完整文档
- `public/robots.txt` + 自动生成的 `sitemap-index.xml`

## 目录结构

```
src/
  components/   SEO, Nav, Hero, Workflow, FeatureGrid, ComparisonTable, Boundary, Principles, FAQ, CTA, Footer
  data/         faq.ts, workflow.ts（单一数据源，供组件与 schema 复用）
  i18n/         ui.ts（字典）, index.ts（工具）
  layouts/      BaseLayout.astro, PostLayout.astro
  pages/        index, zh/index, blog, zh/blog, rss.xml, 404
  content/blog/ zh/, en/（MDX/MD 文章）
  consts.ts     站点常量
  styles/global.css
public/         llms.txt 系列, robots.txt, favicon.svg
astro.config.mjs
wrangler.toml
```
