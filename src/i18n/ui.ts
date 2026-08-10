// UI 字符串字典：中英双语
// 新增页面文案时，在对应 locale 下追加 key，保持两边同步

export const languages = {
  zh: '简体中文',
  en: 'English',
} as const;

export const defaultLang = 'en';

export const ui = {
  zh: {
    'nav.workflow': '工作流',
    'nav.features': '核心能力',
    'nav.comparison': '对比',
    'nav.principles': '产品宪法',
    'nav.faq': '常见问题',
    'nav.blog': '博客',
    'nav.docs': '文档',
    'nav.langSwitch': 'English',

    'hero.badge': 'GitHub PR / Release Control Tower',
    'hero.title': '跨仓库的 PR 与发布，一个控制塔搞定',
    'hero.subtitle': 'PR Helper 用 Lane 编排真实的 GitHub PR 与部署工作流。线性阶段、独立合并路由、动态源规则与汇聚闸门，例如 feature/* + fix/* → dev → main。GitHub 始终是分支保护、评审、检查与部署的权威。',
    'hero.cta.primary': '查看工作流',
    'hero.cta.secondary': '阅读文档',

    'path.title': 'Lane 工作流',
    'path.subtitle': '从 PR 进入到生产回滚的完整链路',

    'diff.title': '为什么是 PR Helper',
    'diff.subtitle': '不是看板，不是合并队列，而是对完整发布流程负责',

    'compare.title': '与相邻产品对比',
    'compare.subtitle': 'PR Helper 不与任务看板工具比任务管理，也不与部署托管平台比部署速度',

    'boundary.title': '责任边界',
    'boundary.subtitle': '透明划分 GitHub 权威与编排层职责，建立信任',

    'principles.title': '产品宪法摘录',
    'principles.subtitle': '约束平台行为的核心原则',

    'faq.title': '常见问题',
    'faq.subtitle': '关于 GitHub 权威、回滚安全与自动化边界的关键问题',

    'cta.title': '把跨仓库发布从混乱变成可控',
    'cta.subtitle': '用 Lane 编排真实的 GitHub PR、检查、部署与回滚',
    'cta.button': '了解工作流',

    'footer.tagline': 'GitHub PR / Release Control Tower',
    'footer.rights': '保留所有权利。',
  },

  en: {
    'nav.workflow': 'Workflow',
    'nav.features': 'Features',
    'nav.comparison': 'Comparison',
    'nav.principles': 'Principles',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.docs': 'Docs',
    'nav.langSwitch': '简体中文',

    'hero.badge': 'GitHub PR / Release Control Tower',
    'hero.title': 'Cross-repo PR and release, from one control tower',
    'hero.subtitle': 'PR Helper orchestrates real GitHub PR and deployment workflows with Lanes. Linear stages, independent merge routes, dynamic source rules, and convergence gates, e.g. feature/* + fix/* → dev → main. GitHub remains the authority for branch protection, reviews, checks, and deployments.',
    'hero.cta.primary': 'View the workflow',
    'hero.cta.secondary': 'Read the docs',

    'path.title': 'Lane workflow',
    'path.subtitle': 'The complete pipeline from PR intake to production rollback',

    'diff.title': 'Why PR Helper',
    'diff.subtitle': 'Not a board, not a merge queue: accountability for the full release flow',

    'compare.title': 'Compared to adjacent products',
    'compare.subtitle': "PR Helper doesn't compete with task board tools on tasks or deploy platforms on deploy speed",

    'boundary.title': 'Responsibility Boundary',
    'boundary.subtitle': 'Transparent split between GitHub authority and the orchestration layer',

    'principles.title': 'Product Constitution Excerpts',
    'principles.subtitle': 'Core principles that constrain platform behavior',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Key questions about GitHub authority, rollback safety, and automation limits',

    'cta.title': 'Turn cross-repo releases from chaos into control',
    'cta.subtitle': 'Orchestrate real GitHub PRs, checks, deployments, and rollbacks with Lanes',
    'cta.button': 'Explore the workflow',

    'footer.tagline': 'GitHub PR / Release Control Tower',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
