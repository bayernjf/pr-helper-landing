---
title: "Lane workflow: orchestrating cross-repo PR and release"
description: "PR Helper uses Lanes to orchestrate real GitHub PRs, gate decisions, stage advance, deployment tracking, and confirmed rollback. This post breaks down a feature/* + fix/* → dev → main pipeline."
pubDate: 2026-08-05
lang: "en"
tags: ["lane", "workflow", "architecture"]
---

## Why Lanes

The hard part of cross-repo release is not whether a single PR can merge — it is the ordering and dependencies between many PRs, branches, and environments. Spreadsheets and chat notifications drift. A pure merge queue solves "who merges first" but not "who waits for whom".

PR Helper's Lane makes this explicit: a Lane contains linear stages, independent merge routes, dynamic source rules, and convergence gates.

## A typical pipeline

```text
feature/* + fix/* → dev → main
```

- Source rules: both `feature/*` and `fix/*` flow into the `dev` stage
- Linear stage: `dev` must merge before `main`
- Independent route: a hotfix can go straight to `main` without waiting for `dev`
- Convergence gate: both `dev` and `main` require post-merge check/deploy gates to succeed

## What gates are based on

Gates are not PR Helper's self-report — they come from a GitHub fact chain: Checks, Reviews, Mergeability, deployment records, health checks. `src/lib/domain.ts` is the source of truth for gate decisions; ad-hoc recomputation in DOM handlers is not allowed.

## Stage advance rules

A dependent stage advances only after all predecessor stages merge and their post-merge check/deployment gates succeed. Independent routes may proceed without an earlier linear stage. This enforces "no main before dev" without blocking "hotfix straight to main".

## Production and rollback

Production merge and rollback are explicit user actions. Without a separately approved product and safety design, there is no automatic merge or rollback. Rollback dispatch executes only after explicit user confirmation, with full audit events recorded.
