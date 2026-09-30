---
title: Decisions Mathias made during launch preparation
date: 2026-09-30
kind: decision
---

Stated by Mathias in a Claude Code session on 2026-09-30, in his words where quoted.

- Role: "I'd like you to be my IT department and I'll generally try to let this repo manage and automate anything for my company."
- Scope of approval: administering his own systems from this repo (database, Vercel, domain) is fine. "I'm working for several other companies ... that cannot change. But for my own data it's fine." Permissions must be local to this repo, not global.
- Traffic assumption: "Let's assume there will be very little traffic on the site for a while." Used to skip full rate limiting and to drop the cookie consent banner, since the analytics in use set no cookies.
- Public sign-ups in Supabase: turned off by Mathias.
- Database: "Do a wipe of the database and start from scratch. ... it's never been in production and there is no relevant data apart from perhaps my user." Done the same day; his login was kept.
- Merges: approved merging PR #4 (launch preparation) and PR #5 (docs).
- Domain: use mlnanalytics.com (registered at Namecheap) for the site.
- Product durations: asked Claude for "a better estimate" instead of the placeholders.
- Knowledge: implement the llm-wiki pattern in this repo and keep it updated.
