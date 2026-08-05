// Lane 工作流步骤数据：中英双语，供组件渲染与 HowTo schema 复用
// 单一数据源，避免组件文案与结构化数据不一致

export interface PathStep {
  label: string;
  desc: string;
}

export const workflowSteps: Record<'zh' | 'en', PathStep[]> = {
  zh: [
    { label: '配置 Lane', desc: '定义阶段、源规则（feature/*、fix/*）、合并路由与汇聚闸门' },
    { label: 'GitHub App 安装', desc: '按仓库授权，颁发短期安装令牌' },
    { label: 'PR 流入', desc: 'Webhook 实时更新 Lane 看板' },
    { label: '闸门决策', desc: 'domain.ts 按 GitHub 事实评估评审/检查/可合并性' },
    { label: '阶段推进', desc: '依赖阶段需前置合并与后置闸门全部成功' },
    { label: '部署追踪', desc: '部署记录、环境状态与健康检查' },
    { label: 'AI PR 草稿', desc: '24 小时草稿与流式生成，密钥仅会话' },
    { label: 'Web Push', desc: '关闭标签页也能收到状态送达' },
    { label: '确认回滚', desc: '显式用户操作，调度并记录审计事件' },
  ],
  en: [
    { label: 'Configure Lane', desc: 'Define stages, source rules (feature/*, fix/*), merge routes, convergence gates' },
    { label: 'GitHub App install', desc: 'Authorize per-repo, issue short-lived installation tokens' },
    { label: 'PR intake', desc: 'Webhooks update the Lane board in real time' },
    { label: 'Gate decisions', desc: 'domain.ts evaluates reviews/checks/mergeability from GitHub facts' },
    { label: 'Stage advance', desc: 'Dependent stages wait for predecessor merge + post-merge gates' },
    { label: 'Deploy tracking', desc: 'Deployment records, environment state, health checks' },
    { label: 'AI PR drafts', desc: '24-hour drafts and streaming, session-only keys' },
    { label: 'Web Push', desc: 'Closed-tab delivery when SW + VAPID + reconciliation are ready' },
    { label: 'Confirmed rollback', desc: 'Explicit user action; dispatch with full audit events' },
  ],
};

// 生成 HowTo schema：帮助 AI 搜索在"如何做 X"类查询中命中
export function buildHowToSchema(lang: 'zh' | 'en', siteUrl: string) {
  const steps = workflowSteps[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'zh' ? 'PR Helper Lane 工作流：从 PR 到回滚' : 'PR Helper Lane workflow: from PR to rollback',
    description:
      lang === 'zh'
        ? '跨仓库协调真实 GitHub PR、闸门决策、阶段推进、部署追踪与确认回滚的完整链路。'
        : 'The complete pipeline coordinating real GitHub PRs, gate decisions, stage advance, deployment tracking, and confirmed rollback across repos.',
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en-US',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.label,
      text: s.desc,
    })),
  };
}
