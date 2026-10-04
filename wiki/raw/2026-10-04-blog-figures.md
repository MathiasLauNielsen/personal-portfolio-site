---
title: Blog posts must be visual first, with a figure for every point
date: 2026-10-04
kind: decision
---

Claude Code session on 2026-10-04, after the three draft posts were written.

## What Mathias said

"Every single blog post should be clearly visualized. That matters far more than text. We need rules and you need every one of those blog posts to be visualized for a non-technical person so they understand why it's important. Text is there for patient technical people."

## What was built (PR "Blog: figures that carry the argument")

- A figure frame and registry in the code: each figure has a title that states the takeaway, a caption in plain words, a basis line ("Measured in production", "Tested on past data" or "Illustration, not data") and a drawing built from the site's design tokens. Markdown places a figure with `![one-line summary](figure:key)` on its own line; the same renderer serves the public page and the admin preview, and the admin editor lists the available keys.
- Fourteen figures for the three draft posts: four for the nightly report post, five for the forecast post, five for the bandits post. Only two draw real numbers (46 million / 683,000 rows, measured in production; 72% / 25%, tested on two months of past data), and both were already stated in the posts. The rest are labelled illustrations with small round numbers.
- The rules are recorded in `CLAUDE.md` under "Blog posts are visual first".

## What is still owed

- The three drafts in the database do not yet contain the figure lines: the automated write to the production table was not permitted in the session. The updated Markdown for each post was generated (figure lines inserted at fixed sentences) and handed to Mathias for upload through the admin form's "Upload .md" button, or for Claude to write with explicit permission.

## Decisions

- A post without figures is not finished. The figures must let a non-technical reader get the argument without the text.
- Figures live in the repository, not in the database, so they follow the design system and the honesty rules; the Markdown only refers to them.
