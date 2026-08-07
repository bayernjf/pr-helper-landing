# Handoff — pr-helper-landing

更新时间：2026-08-08

## 项目概况
PRHelper 产品落地页。Astro 7 静态站点，中英双语，部署于 Cloudflare Pages
（站点：https://pr-helper-landing.pages.dev）。
通过页头/页脚链接回 hub 站 bayjf.com，不与其他落地页直接互链。

## 已完成（本地未推送，分支 dev）
- `5492c2f` feat(legal): add privacy, terms and 404 pages
- `3ad9662` feat(seo): add bilingual OG social share images

## 注意点
- robots.txt、sitemap、双语 OG 图（public/og/og-zh.png、og-en.png，1200×630 PNG）均已就位。
- 构建已验证通过；所有提交仅在本地，尚未 push。

## 下一步
1. `git push`（dev 分支，推送前可先 `git pull --rebase`）。
2. 部署后验证 og:image、robots.txt、sitemap 可访问。
3. 确认 Cloudflare Pages 自动部署正常触发。
