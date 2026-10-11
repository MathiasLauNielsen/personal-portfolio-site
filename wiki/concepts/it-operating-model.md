---
title: IT operating model
type: concept
summary: How Claude acts as the company's IT department from this repo, what it may do on its own, and what needs Mathias
confidence: high
sources: [raw/2026-09-30-decisions.md, raw/2026-09-30-pr-ownership.md, raw/2026-10-02-cases-section.md, raw/2026-10-11-work-items.md]
updated: 2026-10-11
---

# IT operating model

Mathias runs a one-person company and wants this repository to manage and automate the company's IT, with Claude as the IT department. This covers his own systems only; client work happens in other repositories under other rules.

## What Claude does on its own

- Keeps the website, database, hosting and this wiki in order, and proposes automation.
- Runs database migrations and Vercel domain, environment and deploy commands.
- Owns the pull request lifecycle: branch, PR, checks, merge to `main`, then verify production. Mathias does not review before merging (decided 2026-09-30). A PR stops short of `main` only when Mathias has to do something specific first.
- Checks the result of every change against the live system and records it here.
- Tracks each piece of work as a GitHub issue with a work-item folder in `WI/`: the request word for word, Mathias's decisions, notes and a session log, so work can be picked up without repeating context (adopted 2026-10-11, [source](../raw/2026-10-11-work-items.md); rules in `WI/README.md`). Knowledge that outlives the issue moves here when it closes.

## What needs Mathias

- Anything in accounts Claude cannot reach: Namecheap, Google Workspace, Resend sign-up, payment details.
- Secrets: Mathias adds them to Vercel himself.
- Destructive changes (wiping data, deleting services or accounts), each time.
- Decisions about money, clients or what the company sells.

## Permissions

Claude Code runs with an automatic safety check. It blocks, among other things, reading credentials, editing Claude's own permissions and some production actions, even when asked in chat. Repo-only allow rules go in `.claude/settings.local.json`, which is personal and git-ignored; Mathias edits that file himself. Global settings stay untouched because they also govern client work.

## Open question: public repository

The repository is public, so this wiki must stay free of secrets, personal data, client matters and finances ([schema](../schema.md)). Making the repository private would let the wiki hold more of the company's knowledge; Vercel deploys private repositories as well. Since 2026-10-02 the site publishes this operating model as a case ("My company's IT is run by a coding agent") and tells readers to check the repository, so it stays public for as long as that case is published. Tracked in [Open items](../topics/open-items.md).

The case quotes this article's division of work. When the division changes here, change the case in `content/en.ts` and `content/da.ts` too.

## Related

- [Company facts](../references/company.md)
- [Services and accounts](../references/services.md)
