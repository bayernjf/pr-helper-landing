---
title: "Lane 工作流：跨仓库 PR 与发布的编排链路"
description: "PR Helper 用 Lane 编排真实的 GitHub PR、闸门决策、阶段推进、部署追踪与确认回滚。本文拆解一条 feature/* + fix/* → dev → main 的完整链路。"
pubDate: 2026-08-05
lang: "zh"
tags: ["lane", "workflow", "架构"]
---

## 为什么需要 Lane

跨仓库发布的核心痛点不是单条 PR 能否合并，而是多个 PR、多个分支、多个环境之间的顺序与依赖。手写电子表格和 IM 通知会失真，纯合并队列只解决"谁先合"而不解决"谁等谁"。

PR Helper 的 Lane 把这件事显式化：一个 Lane 包含线性阶段、独立合并路由、动态源规则与汇聚闸门。

## 一条典型链路

```text
feature/* + fix/* → dev → main
```

- 源规则：`feature/*` 与 `fix/*` 都流入 `dev` 阶段
- 线性阶段：`dev` 合并后才能进 `main`
- 独立路由：hotfix 可直接进 `main`，无需等 `dev`
- 汇聚闸门：`dev` 与 `main` 都需后置检查/部署闸门成功

## 闸门决策的依据

闸门不是 PR Helper 自述，而是来自 GitHub 的事实链：Checks、Reviews、Mergeability、部署记录、健康检查。`src/lib/domain.ts` 是闸门决策的真相源，不允许在 DOM 处理里临时重算。

## 阶段推进规则

依赖阶段必须等所有前置阶段合并且后置检查/部署闸门成功后才能推进。独立路由无需等待更早的线性阶段。这条规则保证了"dev 没合就不能进 main"，同时不阻塞"hotfix 直进 main"。

## 生产与回滚

生产合并与回滚都是显式用户操作。没有单独获批的产品与安全设计前，不会自动合并或自动回滚。回滚调度只在用户明确确认后执行，并写入完整审计事件。
