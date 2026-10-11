---
title: Work-item folders adopted for tracked work
date: 2026-10-11
kind: decision
---

On 2026-10-11 Mathias asked for a work-item ("WI") convention to be implemented "in the most appropriate form for this repo". The convention he supplied: every piece of tracked work has an issue in a tracker and a folder `WI/<id>-<slug>/` with the request word for word, definitions and decisions, notes, an append-only session log and git-ignored raw command output; branches are `<type>/<id>-<slug>`; commit messages end with `Work item: #<id>`; one script with the commands start, path, log, run, index and check, the last run in CI; when the issue closes, what later work needs moves into the wiki.

How it was fitted to this repository (choices made by Claude, 2026-10-11):

- **Tracker:** the repository's GitHub issues, so the id is the issue number and `#<id>` in a commit links to it.
- **Script:** Node (`scripts/wi.mjs`, `npm run wi`), like the wiki script, because the repository has no Python and CI already runs Node.
- **CI:** a separate `WI` workflow runs `check` when `WI/`, the script or `.gitignore` change.
- **Public repository:** the folders and issue comments are public, so the wiki's rules on secrets, personal data, client matters and finances apply to them as well.
- **Branch types:** the ones already in use (`feat`, `fix`, `docs`, `chore`, `copy`).
