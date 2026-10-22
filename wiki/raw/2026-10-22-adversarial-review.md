---
title: Second adversarial review of the site, and the fixes that needed no new facts
date: 2026-10-22
kind: document
---

Mathias asked in a Claude Code session on 2026-10-22: "Your job now is to do an adversarial review of the site. Harsh." After the review: "Good. Now fix what you can, test it and get it into main." Work item #37.

Reviewed: the English copy in `content/en.ts` and `content/site.ts`, the live site over HTTP (every page answers 200), the three published English blog posts, the Vercel environment variable names, the database migrations, the public repository, one web search for the domain and one for Mathias's name, and the rendered pages in an emulated 390-pixel phone (no page scrolls sideways). Not reviewed: the Danish copy line by line, accessibility and contrast, the live database (enquiry and visit counts), the admin area, and the two draft posts on the branch for issue 99.

## Findings, most damaging first

1. **Client permission.** A finding about the two client cases was given to Mathias in the session and is not written here, since the repository is public. What it needs is in open item 18.
2. **The reply promise is still not backed.** `RESEND_API_KEY` is not set in Vercel (checked 2026-10-22), 11 days after the first review put it first. The main button, every closing contact section, the contact page and the message after sending all promise a reply within one working day.
3. **The results band has no measured after-state.** The 72% is a test on past data that the final blend was tuned on; the case's own simulation gives about 16% once fixed commitments are counted, and the model does not decide anything yet. The −98.5% is 683,000 divided by 46 million; the rows have not been counted since the fix, and the figure is rows, not time or money. The 2–4.5× is a diagnosis; the client kept the retry path, and the lookup time after the fix has not been measured since 16 September.
4. **The data platform case still leaves its obvious question open** (open item 33): what Mathias's relation to the platform was.
5. **Signals in Mathias's voice with no source**, while the agent case quotes the no-invented-facts rule as its proof: "Often both" in the home hero; "When companies call me" over the AI coding signs, with no AI coding client shown; Hours as "the most common way companies work with me"; the availability badge (open item 4); product durations that are estimates, shown as fact; "fixed price" next to "Ask for a quote".
6. **AI coding proof is one person's website.** Its figures are activity (11 pull requests, 13 wiki articles, a 28-minute outage). The hero's terminal ended with "opened pull request for review", while the case says there is no review before the merge. The restructuring sentence is still the last FAQ answer (open item 12).
7. **Nothing a stranger can verify, and little that brings strangers.** No photo, reference or quote. A web search for the domain returned nothing from the site, and one for Mathias's name returned only LinkedIn (one search engine, so not conclusive); Search Console is not set up (open item 20). LinkedIn blocks automated checks, so open item 21 could not be checked.
8. **The blog repeated a case.** "Correct output says nothing about cost" closed the data platform case and is the takeaway of the nightly-job post. The blog list still promised to show each idea "in practice", which the theory-only decision of 2026-10-11 ended. The Danish blog has no posts but is in the menu and the sitemap.
9. **The enquiry table took direct inserts.** Migration 001's policy let anyone with the publishable key, which every browser has, insert into `kontakt_henvendelser` directly, skipping the spam trap, the length limits and the email check in `/api/kontakt`.
10. **Minor:** no English privacy policy (open item 35); the form's topics mix offers and ways to buy.

## As the two buyers

- Head of Data: might shortlist the review for its method; stops at the test-on-past-data caveat, the missing price, the missing reference and the open question in item 4.
- CTO: probably would not shortlist; a website run by one person is not evidence for a team with a release process.

## Fixed in work item #37 (no new facts needed)

- Removed "Often both", "the most common way companies work with me", and the "When companies call me" heading on the AI coding page (now "Signs the setup is missing"), in both languages.
- Product durations now read "Estimated …"; the products label reads "Fixed scope, price agreed up front".
- The hero terminal now ends "merged, then verified the live site", as the agent case describes.
- The data platform case's closing lesson keeps only "compare what was asked for with what was done, job by job"; the cost sentence stays in the blog post.
- The blog list's title, description and lead describe the shape the posts have: what it means for the business first, then the theory.
- A blog list with no posts in its language is left out of the sitemap and marked `noindex` until its first post.
- `/api/kontakt` inserts with the secret key, and migration 009 drops the public insert policy.

## Needs Mathias

Lead emails (open item 1), the client question (item 18), measured after-figures (item 10), the platform relation (item 33), references and photo (items 7 and 11), prices (item 13), Search Console (item 20), and whether the Danish blog gets posts or leaves the menu (item 36).
