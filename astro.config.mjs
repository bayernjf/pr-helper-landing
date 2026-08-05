// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages 默认域名：<project-name>.pages.dev
// 绑定自定义域名后需同步修改此字段与 consts.ts
const SITE = 'https://pr-helper-landing.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'zh',
      locales: { zh: 'zh-CN', en: 'en-US' },
    },
  })],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
