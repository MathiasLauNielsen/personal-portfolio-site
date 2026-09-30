# Wiki schema

The company wiki for MLN Data Consulting: what exists, how it is set up, what was decided and why. It follows the llm-wiki pattern (https://llm-wiki.net): immutable sources, compiled articles on top, an index derived from frontmatter, and an append-only log. Claude maintains it; Mathias owns these rules.

## This repository is public

Everything here is readable by anyone. Never write:

- secrets, API keys, tokens, passwords or recovery codes (name the variable and where it is stored, never the value);
- personal data about anyone other than Mathias's published business contact details;
- client-confidential material, contract terms, rates, prices, invoices or finances;
- enquiry contents or anything read from the production database.

If knowledge of that kind needs a home, say so to Mathias instead of writing it down here.

## Layout

| Path | What it holds | Who edits |
|---|---|---|
| `raw/` | Immutable sources: observations, decisions Mathias stated, command output, vendor facts. Named `YYYY-MM-DD-short-name.md`. | Added once, never changed |
| `concepts/` | Ideas and models that explain the company (offers, how IT is run). | Claude |
| `topics/` | Concrete systems and areas (website, domain and email, database, hosting). | Claude |
| `references/` | Lookup material: company facts, services map, runbooks. | Claude |
| `_index.md` | Generated index of every article and source. | `npm run wiki` only |
| `log.md` | Append-only history of wiki operations. | Claude, append only |
| `schema.md` | These rules. | Mathias (Claude proposes) |

Names are lowercase with hyphens. One subject per article; split an article when it passes about a screen and a half.

## Frontmatter

Articles:

```yaml
---
title: Domain and email
type: topic                 # concept | topic | reference, matching the folder
summary: One line, shown in the index
confidence: high            # high = verified first-hand; medium = one source or inferred; low = assumed
sources: [raw/2026-09-30-dns-observations.md]
updated: 2026-09-30
---
```

Raw sources:

```yaml
---
title: DNS observations when moving nameservers to Vercel
date: 2026-09-30
kind: observation           # observation | decision | document
---
```

## Writing articles

- Lead with the current state, then how it works, then history. Mark anything time-sensitive with its date ("as of 2026-09-30").
- Every fact traces to a source in `raw/` or to a file in the repo. When a fact changes, update the article and add a new raw source; never edit the old one.
- Say what is unknown instead of guessing ("cost: unknown").
- Link related articles with relative markdown links, e.g. `[Database](../topics/database.md)`. Every article needs at least one inbound link.
- Code architecture lives in `CLAUDE.md` and the code; link to it instead of repeating it.

## Operations

- **Ingest:** save the source to `raw/` (a snippet of output, a decision in Mathias's words, a vendor fact with its URL), then update or create the articles it affects, then append to `log.md`, then run `npm run wiki`.
- **Query:** read `_index.md` first, then the articles it points to. Cite the article paths in the answer.
- **Lint:** `npm run wiki` rebuilds the index and reports missing frontmatter, broken links, missing sources and orphans. It must end with 0 problems before a commit. `npm run wiki:check` does the same without writing.

## Log format

One line per operation under a date heading, newest date last:

```markdown
## 2026-09-30
- ingest: DNS observations → domain-and-email, services (raw/2026-09-30-dns-observations.md)
- update: database → rebuilt from migrations
- lint: 0 problems
```
