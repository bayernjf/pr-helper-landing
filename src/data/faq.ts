// FAQ 数据：中英双语，同时供 FAQ 组件渲染与 SEO JSON-LD schema 使用
// 保证 AI 搜索能直接抓取为答案（GEO 关键）

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<'zh' | 'en', FaqItem[]> = {
  zh: [
    {
      question: 'PR Helper 是什么？',
      answer:
        'PR Helper 是 GitHub 优先的 PR / Release 控制塔，跨仓库协调真实的 Pull Request 与部署工作流。一个 Lane 可包含线性阶段、独立合并路由、动态源规则与汇聚闸门，例如 feature/* + fix/* → dev → main。它不是看板，也不是合并队列，管理的最小单位是发布工作流。',
    },
    {
      question: 'PR Helper 会绕过 GitHub 分支保护吗？',
      answer:
        '不会。GitHub 始终是分支保护、评审、检查、可合并性、Actions 与环境保护的权威。PR Helper 永远不在 UI 状态中绕过 GitHub 的拒绝。闸门决策基于真实的 GitHub Checks、Reviews 与 Mergeability，而非自述。',
    },
    {
      question: '生产合并与回滚是自动的吗？',
      answer:
        '不是。生产合并与回滚都是显式用户操作。在没有单独获批的产品与安全设计之前，不会添加自动生产合并或自动回滚。回滚调度只在用户明确确认后执行，并记录完整审计事件。',
    },
    {
      question: 'GitHub 凭据与安装令牌存在哪里？',
      answer:
        'GitHub App 密钥与短期安装令牌保留在服务端模块 api/_lib/ 下，永不暴露给浏览器代码。AI API 密钥仅存于会话，在显式设计加密与密钥管理之前不会持久化到服务端。',
    },
    {
      question: '工作流与监控状态如何持久化？',
      answer:
        '工作流与监控状态持久化到 Supabase Postgres（通过 DATABASE_URL），有序迁移位于 db/migrations/，是数据库 schema 的唯一事实来源。Webhook 加上定时对账保证实时性与正确性；Web Push 需要 Service Worker、VAPID、订阅与服务端对账同时就绪。',
    },
    {
      question: '什么是 Lane？独立路由可以不等前面的阶段吗？',
      answer:
        'Lane 是一个项目编排单元，包含线性阶段、独立合并路由、动态源规则与汇聚闸门。依赖阶段必须等所有前置阶段合并且其后置检查/部署闸门成功后才能推进；独立路由无需等待更早的线性阶段即可推进。',
    },
    {
      question: 'PR Helper 与 GitHub Projects / MergeQueue / Vercel 有什么区别？',
      answer:
        'GitHub Projects 管任务，MergeQueue 管 PR 合并顺序，Vercel 管部署托管。PR Helper 管理跨仓库的完整发布工作流：用 Lane 编排 PR 流入、闸门决策、阶段推进、部署追踪、健康检查与确认回滚，并以 GitHub 事实为唯一依据。',
    },
  ],
  en: [
    {
      question: 'What is PR Helper?',
      answer:
        'PR Helper is a GitHub-first PR / Release Control Tower that coordinates real pull-request and deployment workflows across repositories. A Lane can contain linear stages, independent merge routes, dynamic source rules, and convergence gates, e.g. feature/* + fix/* → dev → main. It is not a board or a merge queue; its minimum unit is the release workflow.',
    },
    {
      question: 'Does PR Helper bypass GitHub branch protection?',
      answer:
        'No. GitHub remains the authority for branch protection, reviews, checks, mergeability, Actions, and Environment protection. PR Helper never bypasses a GitHub rejection in UI state. Gate decisions are grounded in real GitHub Checks, Reviews, and Mergeability, not self-report.',
    },
    {
      question: 'Are production merge and rollback automatic?',
      answer:
        'No. Both production merge and rollback are explicit user actions. No automatic production merge or rollback is added without a separately approved product and safety design. Rollback dispatch executes only after explicit user confirmation, with full audit events recorded.',
    },
    {
      question: 'Where are GitHub credentials and installation tokens stored?',
      answer:
        'GitHub App secrets and short-lived installation tokens stay behind server modules under api/_lib/, never exposed to browser code. AI API keys are session-only and are not persisted server-side until encryption and key management are explicitly designed.',
    },
    {
      question: 'How are workflow and monitoring state persisted?',
      answer:
        'Workflows and monitoring state persist in Supabase Postgres via DATABASE_URL; ordered migrations live in db/migrations/ as the single source of truth for schema. Webhooks plus scheduled reconciliation ensure real-time speed and correctness; Web Push requires Service Worker, VAPID, subscription, and server reconciliation to all be in place.',
    },
    {
      question: 'What is a Lane? Can independent routes proceed without earlier stages?',
      answer:
        'A Lane is a project orchestration unit containing linear stages, independent merge routes, dynamic source rules, and convergence gates. A dependent stage advances only after all predecessor stages merge and their post-merge check/deployment gates succeed; independent routes may proceed without an earlier linear stage.',
    },
    {
      question: 'How is PR Helper different from GitHub Projects, MergeQueue, or Vercel?',
      answer:
        'GitHub Projects manages tasks, MergeQueue manages PR merge ordering, and Vercel manages deploy hosting. PR Helper manages the full cross-repo release workflow: Lanes orchestrate PR intake, gate decisions, stage advance, deployment tracking, health checks, and confirmed rollback, grounded in GitHub facts.',
    },
  ],
};
