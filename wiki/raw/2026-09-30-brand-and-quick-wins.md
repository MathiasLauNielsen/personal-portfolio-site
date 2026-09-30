---
title: Logo received and first site improvements shipped
date: 2026-09-30
kind: observation
---

- Mathias shared the company logo in chat on 2026-09-30 (1024×1024 PNG, navy on white): "MLN" with "DATA CONSULTING" below. He asked to "fix what you can obviously fix" from the site improvement plan and to surface simple decisions; no large decisions that evening.
- Logo colour measured as the per-channel median of solid letter pixels: `#00398D`. Transparent full logo, mark-only and white versions, a 512 px icon, a 180 px Apple icon and a 16/32/48 px favicon were generated from it without editing the artwork.
- Shipped in the "Site quick wins" PR:
  - logo in the header, footer (white), structured data and link previews;
  - role line above the home headline and the proof context sentence;
  - the three figures on the data platform page;
  - one name per offer on every page and in the form, and product and hours cards on the offer pages with duration and enquiry link;
  - per-page titles, descriptions and link-preview images;
  - `x-default` hreflang, sitemap `lastmod`, permanent legacy redirects;
  - FAQ structured data;
  - the footer blog link hidden while the blog is empty;
  - privacy policy corrected: no phone field, Resend removed until lead emails are on, the Danish back-link fixed;
  - after sending the form, the next steps are shown; the mobile bar jumps to the form on the same page.
- Verified on a local production build before merging: icons served, per-page `og:title` and `og:image`, FAQ and organisation JSON-LD with the logo, sitemap `x-default`, `/om-mig` answering 308.
- Held back: an AI coding FAQ about safety and payoff, because it would state new claims about Mathias's methods in his voice.
