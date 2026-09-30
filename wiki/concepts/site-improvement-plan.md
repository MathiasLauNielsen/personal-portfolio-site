---
title: Site improvement plan
type: concept
summary: What the research on solo consultancy sites says the site should change to win enquiries, in priority order, and the status of each item
confidence: medium
sources: [raw/2026-09-30-site-research.md, raw/2026-09-30-brand-and-quick-wins.md, raw/2026-09-30-positioning.md]
updated: 2026-09-30
---

# Site improvement plan

Based on research into about 30 solo data and AI coding consultancies plus B2B buyer and conversion studies (full report: [raw/2026-09-30-site-research.md](../raw/2026-09-30-site-research.md)). Evidence for most items is weak to moderate, so each change is a bet to measure with the `enquiry_sent` event, see [Lead handling](../topics/lead-handling.md).

## The finding in one paragraph

The site has the right structure (problem-framed offer pages, hours plus two fixed-scope products, labelled figures, a short form). What it lacks is what makes strangers trust a one-person firm: a price or price floor on the entry offers, proof attached to each offer, a real photo, and a reply promise that is actually kept. Most visitors come from referrals, LinkedIn and brokers to check him out; half of referred buyers rule a firm out without calling, mostly because they cannot tell what it does. In Denmark no solo data engineer with a selling website was found, and the Danish sellers of AI coding setup show no prices or no proof.

## Code and copy changes that need no new facts

Status as of 2026-09-30, evening: 1–7, 9 and 10 done (PR "Site quick wins"); 8 held back because it would put new claims about his methods in Mathias's voice.

1. Show the role line and the proof context sentence, both written but not rendered. The role line became "Freelance data and AI engineer · Copenhagen" later the same evening, see [Company facts](../references/company.md).
2. Put matching proof on each offer page.
3. Product cards on the offer pages, and one name per offer everywhere: Hours, Data platform review, AI coding setup.
4. Per-page link previews (Open Graph title and description).
5. Hide the footer blog link until posts exist.
6. Make the privacy policy match the form (no phone field; lead emails only once Resend is on); Danish back-link to `/da`.
7. Favicon.
8. AI coding FAQ: safety controls and what to measure, no promised percentages.
9. "What happens next" after sending the form; mobile "Get in touch" jumps to the form on the same page.
10. Structured data for the FAQ and the two products, `x-default` hreflang, permanent redirects for old URLs.

## Changes that need Mathias

Tracked in [Open items](../topics/open-items.md): lead emails and DKIM (the only item with strong evidence), a portrait photo, approval of anonymised case cards for the three figures, two or three buyer testimonials, proof for the AI coding offer (possibly this public repository as a worked example), confirmed durations and deliverables, an honest availability line, a named first call with a promised output, and dated career history.

Done on 2026-09-30 (PR "Positioning: scope instead of a seniority title"): the career history. The About page now tells the story from 2020 to today and says who was an employer and who is a client; the home page and the data platform page state the scope of what he has been responsible for. Exact years per role are still missing. What this opened is in [Open items](../topics/open-items.md): client permission for money figures, references who can confirm the scope, and a written case for the AI coding offer.

## Larger decisions

- **Prices:** recommended middle ground is "from €X" on the two fixed-scope products with the review fee credited toward follow-on work. Public anchors are in the report; his own rates are not written here ([schema](../schema.md)). Separate pricing research was done on 2026-09-30 and is kept outside the repository; it advises against crediting the fee for a review sold on independence.
- **Calendar booking** as an option after the form, not instead of it.
- **Blog** refocused on the two offers, English first, starting with first-hand write-ups.
- **Self-check checklist** as a secondary call to action, later.
- **One-page CV** for brokers.
- **Names:** mlnanalytics.com, MLN Data Consulting and Mathias Lau Nielsen are three identities; a conscious choice at some point.

## Related

- [Offers](offers.md)
- [Website](../topics/website.md)
