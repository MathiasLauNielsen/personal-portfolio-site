---
title: Site improvement plan
type: concept
summary: What the research on solo consultancy sites says the site should change to win enquiries, in priority order, and the status of each item
confidence: medium
sources: [raw/2026-09-30-site-research.md, raw/2026-09-30-brand-and-quick-wins.md, raw/2026-09-30-positioning.md, raw/2026-10-02-cases-section.md, raw/2026-10-04-blog-theory-to-business.md, raw/2026-10-11-site-pass-and-client-cases.md, raw/2026-10-11-pages-filled-out.md, raw/2026-10-11-buyer-review.md, raw/2026-10-11-blog-review.md]
updated: 2026-10-11
---

# Site improvement plan

Based on research into about 30 solo data and AI coding consultancies plus B2B buyer and conversion studies (full report: [raw/2026-09-30-site-research.md](../raw/2026-09-30-site-research.md)). Evidence for most items is weak to moderate, so each change is a bet to measure with the `enquiry_sent` event, see [Lead handling](../topics/lead-handling.md).

## The finding in one paragraph

The site has the right structure (problem-framed offer pages, hours plus two fixed-scope products, labelled figures, a short form). What it lacks is what makes strangers trust a one-person firm: a price or price floor on the entry offers, proof attached to each offer, a real photo, and a reply promise that is actually kept. Most visitors come from referrals, LinkedIn and brokers to check him out; half of referred buyers rule a firm out without calling, mostly because they cannot tell what it does. In Denmark no solo data engineer with a selling website was found, and the Danish sellers of AI coding setup show no prices or no proof.

## Code and copy changes that need no new facts

Status as of 2026-09-30, evening: 1–7, 9 and 10 done (PR "Site quick wins"); 8 held back because it would put new claims about his methods in Mathias's voice. Item 8 was done on 2026-10-11, written from the published agent case ([source](../raw/2026-10-11-pages-filled-out.md)).

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

## Cases: show the work (2026-10-02)

Outside feedback on 2026-10-02 said the same as the research, more bluntly: the technology list is what every provider offers, the site reads as a CV, and the cases have to be shown, not told ([source](../raw/2026-10-02-cases-section.md)). The positioning stays; the evidence was missing.

Shipped the same day (PR "Cases: the work shown, not described"):

- A Cases section (`/cases`, `/da/cases`) in the navigation.
- A before/after chart for each of the three data platform results, on the cases page and the data platform page.
- A written case about this repository, "My company's IT is run by a coding agent", as the proof the AI coding offer lacked. It is linked from the home page, the AI coding page and the About page.
- The About page starts with the work and puts the career story below it; the technology lists on the offer pages are one line of small text.

Still needed, all with Mathias, see [Open items](../topics/open-items.md): full write-ups of the client results (answers to [the case questions](../references/case-questions.md) and the client's agreement), a second AI coding case from a real team, a photo, buyer testimonials, and first-hand articles.

More pages are not expected to bring enquiries from search within 6–12 months ([search audit](../raw/2026-09-30-seo-audit.md)); the cases are for the visitor who already has the link. No paid ads for now.

## Site pass and client cases (2026-10-11)

Mathias asked for a pass that cuts repetition, makes every section sell, treats search as a major factor, and publishes the cases Claude is confident in ([source](../raw/2026-10-11-site-pass-and-client-cases.md)).

- **Shipped:**
  - two anonymised client cases;
  - the 2–4.5× label corrected (a chain of causes, not a single fault);
  - each home page figure linked to its case;
  - the duplicated chart sections and repeated "why me" points removed;
  - the testimonial removed;
  - Article, Service and breadcrumb markup.
- **Still needed:**
  - client permission to name the client or publish money;
  - a second AI coding case from a real team;
  - testimonials with permission;
  - a photo.

## Buyer review (2026-10-11)

An adversarial pass and a read as each of the two buyers ([source](../raw/2026-10-11-buyer-review.md)); the method is now a checklist to run after every content change, see [Reviewing the site as a buyer](../references/buyer-review.md). The finding: the structure and the honesty hold up, but a stranger can verify nothing, every figure comes from one platform, and the reply promise rests on a database table nobody is emailed about.

- **Shipped the same day:** the "Experience from" line says what each company is; the hero mock-up mirrors the real agent flow; the checklist.
- **With Mathias, in order of expected enquiries:** lead emails on (item 1); a quote or reference from each company (11, 18); a photo and a matching LinkedIn profile (7, 21); one sentence on his relation to the platform in the data platform case (33); a price floor or a decision against one (13); a measured figure from the second company (19); the production restructuring as the lead of the AI coding page, with a case (12), and a duration for "Rollout" or its removal (34); an English privacy policy (35). All in [Open items](../topics/open-items.md).

## Larger decisions

- **Prices:** recommended middle ground is "from €X" on the two fixed-scope products with the review fee credited toward follow-on work. Public anchors are in the report; his own rates are not written here ([schema](../schema.md)). Separate pricing research was done on 2026-09-30 and is kept outside the repository; it advises against crediting the fee for a review sold on independence.
- **Calendar booking** as an option after the form, not instead of it.
- **Blog** refocused on the two offers, English first, starting with first-hand write-ups. Done on 2026-10-04: the blog is English first with the site's design, and posts are written buyer first: three are published since a review on 2026-10-11 ([source](../raw/2026-10-04-blog-theory-to-business.md), [review](../raw/2026-10-11-blog-review.md)).
- **Self-check checklist** as a secondary call to action, later.
- **One-page CV** for brokers.
- **Names:** mlnanalytics.com, MLN Data Consulting and Mathias Lau Nielsen are three identities; a conscious choice at some point.

## Related

- [Offers](offers.md)
- [Website](../topics/website.md)
