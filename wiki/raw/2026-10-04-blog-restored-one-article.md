---
title: The blog is restored, the three quick posts are withdrawn, and one researched article replaces them
date: 2026-10-04
kind: decision
---

Claude Code session on 2026-10-04, after the blog had been removed earlier the same evening.

## What Mathias said

- "I got scared. Because it seemed... random and wrong. Fine to keep all those things. Can you make a single high quality article that's primarily relevant for me? Technical and business oriented."
- When Claude started an article built around his own measured results: "Not about my work. That never matters. About the concepts."
- Asked which concept, he chose exploration under a budget (bandits, Lai–Robbins, Thompson sampling, off-policy evaluation).

## What was done (PR "Blog back, one article on exploration under a budget")

- The removal (PR #23) was reverted, so the blog, the figures and the admin section are back as they were.
- The three quick posts stay in the database, all unpublished. The nightly report post, which had been live for a few hours, was unpublished.
- One article was researched and written: "What it costs to find out: exploration under a budget". Sources were checked against the literature before writing (Thompson 1933, Robbins 1952, Gittins and Whittle 1979, Lai and Robbins 1985, Auer et al. 2002, Scott 2010, Chapelle and Li 2011, Agrawal and Goyal 2012, Kaufmann et al. 2012, Badanidiyuru et al. 2013, Horvitz and Thompson 1952, Li et al. 2011, Dudík et al. 2011, Bottou et al. 2013, Swaminathan and Joachims 2015, Lakkaraju et al. 2017, Chaney et al. 2018, Chapelle 2014, Joulani et al. 2013, Kandasamy et al. 2018, Karbasi et al. 2021, Garivier and Moulines 2011, Audibert and Bubeck 2010, Russo 2016, Bartlett et al. 1985, Ware 1989, Optimizely 2015, Johari et al. 2017, Netflix 2017, McInerney et al. 2018, Stitch Fix 2020). The article lists them.
- Five new figures, including three that redraw published numbers (Criteo conversion delays, Optimizely's A/A peeking rates, the 1985 ECMO trial), with a new basis label "Published data, source in the caption". Four figures from the earlier bandits post are reused.
- The article is a draft in the database. It goes live only when Mathias has read it.

## Decisions

- Articles are about concepts, never about Mathias's own work. One researched article at a time.
- A new figure basis exists for numbers taken from a published source; the source goes in the caption.
