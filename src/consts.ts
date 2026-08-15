// 站点级常量，集中管理便于跨页面/组件复用
// 绑定自定义域名后，需同步修改 astro.config.mjs 的 site 字段

// Cloudflare Pages 默认域名：<project-name>.pages.dev
export const SITE_URL = 'https://pr-helper.bayjf.com';
export const SITE_NAME = 'PR Helper';
export const SITE_TITLE = 'PR Helper | GitHub PR / Release Control Tower';
export const SITE_DESCRIPTION =
  'PR Helper 是 GitHub 优先的 PR / Release 控制塔，跨仓库协调真实的 Pull Request 与部署工作流。一个 Lane 可包含线性阶段、独立合并路由、动态源规则与汇聚闸门，例如 feature/* + fix/* → dev → main。';
export const SITE_DESCRIPTION_EN =
  'PR Helper is a GitHub-first PR / Release Control Tower that coordinates real pull-request and deployment workflows across repositories. A Lane can contain linear stages, independent merge routes, dynamic source rules, and convergence gates, e.g. feature/* + fix/* → dev → main.';
// 产品本体（Web 应用）的线上地址
export const APP_URL = 'https://pr-helper.pages.dev';

export const AUTHOR = 'PR Helper';
export const LOCALES = ['zh', 'en'] as const;
export const DEFAULT_LOCALE = 'en';

// 社交与外部链接（仓库地址部署后替换为真实地址）
export const SOCIAL = {
  github: 'https://github.com/bayernjf/pr-helper',
  docs: 'https://github.com/bayernjf/pr-helper/tree/main/docs',
  email: 'b4yernjf@gmail.com',
};

// 默认 OG 图片
export const OG_IMAGE = {
  zh: '/og/og-zh.png',
  en: '/og/og-en.png',
};
