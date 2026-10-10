// English copy (the default language). da.ts mirrors this shape exactly (typed as Copy).
//
// The reader is a company that does not know Mathias or his clients, and wants to buy
// one of two things: data platform expertise or AI coding expertise. Client names only
// appear as supporting experience. Every number is from real work; none are invented.

import { site } from './site'
import type { CaseStudy, ProofItem } from './types'

// The three measured results. Each chart redraws the numbers already stated in the label, nothing more.
const proofItems: ProofItem[] = [
  {
    value: '72% from 25%',
    label: 'A ranking model found 72% of the valuable cases using a quarter of the processing budget. The old selection found 25%.',
    note: 'Tested on two months of historical data',
    study: 'ranking',
    chart: {
      caption: 'Valuable cases found with a quarter of the budget',
      max: 100,
      rows: [
        { label: 'Old selection', display: '25%', value: 25 },
        { label: 'Ranking model', display: '72%', value: 72, highlight: true },
      ],
    },
  },
  {
    value: '−98.5%',
    label: 'A nightly job rewrote 46 million rows to change 683,000. Now it touches only what changed.',
    note: 'Measured in production',
    study: 'hidden-work',
    chart: {
      caption: 'Rows written per night',
      max: 46_000_000,
      rows: [
        { label: 'Before', display: '46 million', value: 46_000_000 },
        { label: 'Now, only what changed', display: '683,000', value: 683_000, highlight: true },
      ],
    },
  },
  {
    value: '2–4.5×',
    label: 'The platform did 2–4.5× the work it was scheduled for. A slow lookup made it redo jobs that had already run, and every run reported success.',
    note: 'Measured in production',
    study: 'hidden-work',
    chart: {
      caption: 'Work done compared with work scheduled',
      max: 4.5,
      rows: [
        { label: 'Scheduled', display: '1×', value: 1, highlight: true },
        { label: 'Actually done', display: '2–4.5×', value: 2, upTo: 4.5 },
      ],
    },
  },
]

// Written cases. The two data platform cases are client work, anonymised: no client name, no money and
// nothing about the business beyond what the engineering needs. Every number comes from the client's own records.
// Every statement in the agent case can be checked in the public repository (site.repo):
// the pull requests, CLAUDE.md and the wiki. Times are Copenhagen time.
const studies: CaseStudy[] = [
  {
    key: 'hidden-work',
    offer: 'data',
    topic: 'review',
    published: '2026-10-11',
    meta: {
      title: 'Case: a data platform doing 4.5× its scheduled work',
      description:
        'A slow lookup made a data platform redo finished jobs, and a nightly job rewrote 46 million rows to change 683,000. How both were found and fixed.',
    },
    hero: {
      eyebrow: 'Case · Data platform',
      title: 'The platform did up to 4.5× the work it was scheduled for. Every run reported success.',
      lead: 'A client’s data platform, with more than 60 million records, processed far more than its schedules asked for, and a nightly job rewrote most of a large table to change a small part of it. Nothing had failed, so nobody had looked. How it was found, what changed, and what is still open.',
      contactCta: 'Ask about a platform review',
    },
    card: {
      body: 'A client’s platform processed up to 4.5× what its schedules asked for, and a nightly job rewrote 46 million rows to change 683,000. Nothing had failed, so nobody had looked.',
      points: [
        '2–4.5× the scheduled work, traced to one slow lookup',
        '46 million rows rewritten every night to change 683,000',
        'Fixed in production the same week',
      ],
    },
    figures: [
      { value: '2–4.5×', label: 'the work the schedules asked for, measured in production over the first two weeks of September 2026.' },
      { value: '8 min', label: 'for the slowest single lookup, where the whole job was allowed 10 minutes before it was handed out again.' },
      { value: '−98.5%', label: 'rows written by a nightly job: 46 million rewritten every night to change 683,000.' },
    ],
    blocks: [
      {
        kind: 'text',
        title: 'What was wrong',
        paragraphs: [
          'Several times a day, per customer, the platform picks a batch of records and sends it through a paid processing step. The schedules added up to about 250,000 records a day. In the first two weeks of September 2026 it processed about 540,000 a day, and for single customers up to 4.5 times their limit.',
          'Nothing looked broken. Jobs finished, the data was correct and no alert fired. The only signs were the processing bill and a comparison nobody had made: what the schedules asked for against what was actually done.',
        ],
      },
      {
        kind: 'steps',
        title: 'How it was found',
        lead: 'In one day, from the platform’s own logs and settings. No new tooling.',
        steps: [
          { title: 'Compare', body: 'What the schedules requested against the processing actually logged, per customer and per day.' },
          { title: 'Follow one job', body: 'Jobs took between 100 and 835 seconds. The queue gave each one 600 seconds before handing it out again.' },
          { title: 'Find the slow part', body: 'The lookup that picks the next batch read the whole 64-million-row table every time, because the table had no index for the filter it used. It took up to 503 seconds on its own.' },
          { title: 'Explain the multiplying', body: 'A job that ran past the limit was handed out again, and the new attempt picked a fresh batch, because the first one was already reserved. Every slow job was done twice or more, and each attempt reported success.' },
          { title: 'Check the rest', body: 'A manual run across all customers took 20 to 26 minutes and was handed out again until it had run 74 times on three days, sending about 3 million records.' },
        ],
      },
      {
        kind: 'items',
        title: 'What was changed',
        lead: 'Three changes, in production on 16 and 18 September 2026. None of them changed what the platform produces.',
        items: [
          {
            title: 'An index for the lookup',
            body: 'A partial index that matches the lookup’s filter, and the query rewritten so it can use it. The lookup no longer reads the whole table.',
          },
          {
            title: 'A sort order that did nothing',
            body: 'Each batch was sorted by values frozen months earlier. The only real effect was to put records never processed before at the back, and it forced the database to sort every candidate before taking the batch. It was removed. Tested on past data, it had been no better than picking at random.',
          },
          {
            title: 'A nightly job that rewrote everything',
            body: 'Found in the same investigation: a nightly job marked records as available again without checking whether they already were. It rewrote 46.2 million rows each night to change 683,000, and the table had taken 10.7 billion updates. One extra condition fixed it; the end state and the change log stayed the same.',
          },
        ],
      },
      {
        kind: 'results',
        title: 'Before and after',
        lead: 'Both numbers were measured in production.',
      },
      {
        kind: 'text',
        title: 'What happened next',
        paragraphs: [
          'With the cause known, the extra volume became a decision instead of an accident. The client chose to keep processing above the schedules on purpose, to cover more records, and set a working ceiling for it.',
          'Still open: how long the lookup takes now has not been measured since the change. The next step is a service that plans each day’s work in one place and has no retry path at all. It is being built.',
          'The lesson I take to every platform: correct output says nothing about cost. Compare what was asked for with what was done, job by job, before anything else.',
        ],
      },
    ],
    closing: {
      title: 'The same check, on your platform',
      body: 'This is what a Data platform review looks for: work nobody asked for, jobs that rewrite far more than they change, and costs that grow without anyone noticing. You get a written, prioritised list of what to fix first.',
    },
  },
  {
    key: 'ranking',
    offer: 'data',
    topic: 'hours',
    published: '2026-10-11',
    meta: {
      title: 'Case: machine learning ranking on a quarter of the budget',
      description:
        'A ranking model found 72% of the valuable cases with a quarter of the processing budget. The old order found 25%, no better than random.',
    },
    hero: {
      eyebrow: 'Case · Machine learning',
      title: '72% of the valuable cases, with a quarter of the budget.',
      lead: 'A client pays for every record it sends through an external processing step, and only a small share leads to anything of value. Which records to send is the main lever, and the old order turned out to be no better than chance. The model built to replace it, how it was tested, and why it does not decide anything yet.',
      contactCta: 'Ask about machine learning work',
    },
    card: {
      body: 'Which records to pay to process: the old order was no better than chance. A ranking model tested on two months of past data found 72% of the valuable cases with a quarter of the budget.',
      points: [
        '72% of the valuable cases at 25% of the budget, up from 25%',
        'Tested on past data, with the caveats written down',
        'Why fixed commitments shrink the gain',
      ],
    },
    figures: [
      { value: '72%', label: 'of the later valuable cases, had only the top quarter of records been processed. The old order caught 25%.' },
      { value: '88%', label: 'at half the budget, where the old order caught 51%.' },
      { value: '0.1%', label: 'of automated results reached the stage where they can earn money, in one measured week. Choosing well is the lever.' },
    ],
    blocks: [
      {
        kind: 'text',
        title: 'The problem',
        paragraphs: [
          'The client sends records through a paid external processing step. Most of what comes back is filtered out or rejected: in one measured week, about 0.1% of the automated results reached the point where they can earn money. With a fixed budget, choosing which records to send is worth more than making each step cheaper.',
          'The records were picked in an order based on values that had not been updated for months. Tested against what actually happened later, that order was no better than chance: processing the top quarter would have caught 24.6% of the valuable cases, and picking at random caught 25.6%.',
        ],
      },
      {
        kind: 'steps',
        title: 'How it was tested',
        lead: 'On past data, so every version could be compared on the same records before anything changed in production.',
        steps: [
          { title: 'Freeze time', body: 'Use only what was known before 1 July 2026.' },
          { title: 'Rank', body: 'Score every record processed in July and August with that knowledge, best first.' },
          { title: 'Cut', body: 'If only the top 10%, 25%, 50% or 75% had been processed, how many of the later valuable cases would have been caught?' },
          { title: 'Compare', body: 'The old order, picking at random, and each model, on the same records.' },
        ],
      },
      {
        kind: 'items',
        title: 'What was tried',
        lead: 'Each version on the same test: the share of valuable cases caught with a quarter of the budget.',
        items: [
          { title: 'The old order: 25%', body: 'Values frozen months earlier. No better than picking at random.' },
          { title: 'The customer’s average: 37%', body: 'Every record scored by how well its customer’s records do on average.' },
          { title: 'Each record’s own rate: 54%', body: 'How often this record has led to something before, pulled toward its customer’s average when it has little history. Not yet tuned.' },
          { title: 'The final blend: 72%', body: 'Two rates combined: the rare valuable outcome with a long memory and all outcomes with a shorter one, weighted by how often the customer’s results become valuable. 88% at half the budget.' },
          { title: 'Did not help: time since last processed', body: 'It looked like a strong signal, but the old order had decided when records were processed, so it mostly measured the old order.' },
        ],
      },
      {
        kind: 'results',
        title: 'Before and after',
        lead: 'Tested on past data, not measured in production.',
      },
      {
        kind: 'text',
        title: 'What it does not show yet',
        paragraphs: [
          'This is a test on past data, and the final blend was tuned against this same test. The data also holds only the records the old order chose to process, and some outcomes were still coming in when it was measured. A check on a later, separate period is under way.',
          'The scores have been computed every day since 17 September 2026, but they do not decide what is processed yet. That needs a new service that plans each day’s work, and it is being built. Until it runs there is no production figure, and this page will say so.',
        ],
      },
      {
        kind: 'text',
        title: 'The catch: most of the budget was already spoken for',
        paragraphs: [
          'A three-week simulation at the budget of the time showed it. Fixed commitments to individual customers took about 95% of the processing, so the model only decided the rest. There the gain shrank to about 16% more expected valuable cases per record, not the nearly threefold the test suggests.',
          'That turned a modelling question into a business one: how much of the budget is tied to commitments, and how much goes where it earns the most. The budget has since been raised, which leaves the model more room. A model is worth only as much as the share of decisions it is allowed to make.',
        ],
      },
    ],
    closing: {
      title: 'Models that earn their place',
      body: 'This is how I work with machine learning on a data platform: a baseline first, a test against what actually happened, the caveats written down, and a plain answer to how much of the decision the model will really make. Usually as part of a longer engagement, inside your team.',
    },
  },
  {
    key: 'agent',
    offer: 'ai',
    topic: 'setup',
    published: '2026-10-02',
    meta: {
      title: 'Case: a company’s IT run by a coding agent',
      description:
        'How a coding agent runs a company’s website, database and hosting: the rules, who decides what, what went wrong, and a public repository to check it in.',
    },
    hero: {
      eyebrow: 'Case · AI coding',
      title: 'My company’s IT is run by a coding agent.',
      lead: 'This website, its database, its hosting and the company’s documentation are run by a coding agent working inside rules I wrote. The repository is public, so what this page says can be checked there.',
      repoCta: 'Open the repository',
      contactCta: 'Ask about AI coding setup',
    },
    card: {
      body: 'The site you are reading, its database, hosting and documentation are run by a coding agent inside rules I wrote. The repository is public, so it can be checked.',
      points: [
        '11 pull requests to production on launch day',
        'What the agent may do alone, and what needs me',
        'What went wrong, and the rule it led to',
      ],
    },
    figures: [
      { value: '11', label: 'pull requests merged to production on launch day, 30 September 2026. Each had a passing preview build first.' },
      { value: '13', label: 'wiki articles written the same day, alongside the code: what exists, what was decided and why.' },
      { value: '28 min', label: 'when the domain did not resolve that day, after a DNS move failed. Described below, with the rule it led to.' },
    ],
    blocks: [
      {
        kind: 'items',
        title: 'What the agent is given',
        lead: 'Nothing here depends on a special model. It depends on four things in the repository.',
        items: [
          {
            title: 'Project instructions',
            body: 'One file the agent reads at the start of every session: how the code is organised, where the copy lives, the fixed names of the offers and how I write. It includes the rule that no fact, number or title may be invented.',
          },
          {
            title: 'A company wiki',
            body: 'What exists, how it is set up, what was decided and why, and what is still open. Sources are saved first and never edited; the articles are compiled from them. The agent reads the wiki before acting and updates it in the same piece of work.',
          },
          {
            title: 'Connections',
            body: 'Command-line access to the code host, the hosting provider and the database, linked to this project only. The permissions that govern my client work are kept apart and stay untouched.',
          },
          {
            title: 'Checks that can fail',
            body: 'Every pull request gets a production build and a preview deployment. A script checks the wiki and fails the pull request on a broken link, a missing source or a stale index.',
          },
        ],
      },
      {
        kind: 'split',
        title: 'Who decides what',
        lead: 'The line is written down in the repository, and I am the only one who moves it.',
        columns: [
          {
            title: 'The agent, on its own',
            items: [
              'Code, copy and design changes to the site',
              'Database migrations',
              'Domain, environment and deploy commands at the hosting provider',
              'The whole pull request: branch, checks, merge, and verifying production afterwards',
              'Keeping the wiki current',
            ],
          },
          {
            title: 'Needs me',
            items: [
              'Accounts the agent cannot reach: domain registrar, email, payment',
              'Secrets. I add them myself; the agent knows their names, never their values',
              'Anything destructive, such as wiping data or deleting a service, every time',
              'Decisions about money, clients and what the company sells',
              'Any new fact about me or my clients on the site',
            ],
          },
        ],
        notes: [
          'An automatic safety check blocks the agent from reading credentials and from editing its own permissions, even when asked to in chat.',
          'I do not review before the merge here. It is my own company and the risk is mine. In a team that line belongs somewhere else, and deciding where is part of the setup.',
        ],
      },
      {
        kind: 'steps',
        title: 'How a change reaches production',
        lead: 'The same six steps every time, whether the change is one sentence or a new part of the site.',
        steps: [
          { title: 'I ask', body: 'In plain language, the way I would ask a colleague.' },
          { title: 'It reads', body: 'The project instructions and the wiki pages for the area it is about to touch.' },
          { title: 'It builds', body: 'On a branch, then opens a pull request that says what changed and why.' },
          { title: 'Checks run', body: 'Production build, preview deployment and the wiki check. The agent merges only when they pass.' },
          { title: 'It merges', body: 'Production deploys in about a minute.' },
          { title: 'It verifies', body: 'It checks the live site, then records what changed in the wiki.' },
        ],
      },
      {
        kind: 'timeline',
        title: 'Launch day, 30 September 2026',
        lead: 'Every pull request merged that day, in Copenhagen time. Each line links to the change itself.',
        entries: [
          { time: '15:52', pr: 4, text: 'The redesigned site goes live in English and Danish, with the admin area limited to an allow-list' },
          { time: '16:18', pr: 5, text: 'Database rebuilt from its migration files, and the workflow documented' },
          { time: '16:43', pr: 6, text: 'Company wiki set up; www forwards to the bare domain' },
          { time: '16:50', pr: 7, text: 'Wiki updated once the www redirect was confirmed live' },
          { time: '17:11', pr: 8, text: 'Research on solo consultancy sites turned into an improvement plan' },
          { time: '17:18', pr: 9, text: 'Incident note: why the site looked down from one network only' },
          { time: '17:47', pr: 10, text: 'Logo, results on the offer pages, one link preview per page' },
          { time: '19:00', pr: 11, text: 'Positioning rewritten: scope of responsibility instead of a seniority title' },
          { time: '19:32', pr: 12, text: 'Machine learning named as a strength; search visibility pass' },
          { time: '20:10', pr: 13, text: 'Visit statistics without cookies, in the admin area' },
          { time: '20:32', pr: 14, text: 'About page: the degree as a fact, not the frame of the story' },
        ],
      },
      {
        kind: 'text',
        title: 'What went wrong',
        paragraphs: [
          'On launch day we moved the domain’s name servers to the hosting provider. The provider never created a zone for the domain, so from 15:59 to 16:27 nothing resolved for anyone without a cached answer. That included incoming email, which was delayed, not lost. We switched back.',
          'The agent had logged what each name server answered while it happened. The same day that log became a runbook, with one step that would have caught the problem: ask the new provider’s name servers directly before switching, and stop if the answer is empty or refused.',
          'Later that afternoon the site looked down from my own network while it was fine everywhere else. A resolver had cached an empty answer during the repair. That became a second entry: check from outside before changing anything.',
          'Things go wrong with or without an agent. What this setup adds is that the lesson is written down the same day and read before the next change.',
        ],
      },
      {
        kind: 'excerpts',
        title: 'Four lines from the repository',
        lead: 'Copied as written.',
        items: [
          {
            source: 'CLAUDE.md',
            text: 'No hype and no invented facts, clients, numbers or job titles; leave things out rather than guess. Every figure comes from real work and says whether it was measured in production or tested on historical data.',
            note: 'The rule for everything written on this site.',
          },
          {
            source: 'wiki/raw/2026-09-30-brand-and-quick-wins.md',
            text: 'Held back: an AI coding FAQ about safety and payoff, because it would state new claims about Mathias\'s methods in his voice.',
            note: 'What that rule did on launch day: the agent left a planned item out instead of writing claims for me.',
          },
          {
            source: 'CLAUDE.md',
            text: 'Stop before `main` only when Mathias has to do something specific first, and say what.',
            note: 'How far the agent goes alone, and when it has to stop.',
          },
          {
            source: 'wiki/references/runbook-dns-changes.md',
            text: 'Query the new provider\'s nameserver directly and compare with the old one, record by record. A "refused" answer or an empty answer means stop.',
            note: 'The step added after the DNS failure.',
          },
        ],
      },
    ],
    closing: {
      title: 'The same parts, in your codebase',
      body: 'This is what I set up for a development team: instructions the agent reads every time, a written line between what it may do alone and what needs a person, checks that can fail a pull request, and a place where decisions and incidents are recorded. Where the line sits depends on your systems and your risk.',
    },
  },
]

export const en = {
  nav: {
    home: 'Home',
    data: 'Data platform',
    ai: 'AI coding',
    cases: 'Cases',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in touch',
    call: 'Call',
    switchLabel: 'Dansk',
  },

  home: {
    meta: {
      title: 'Freelance data engineer in Copenhagen | Mathias Lau Nielsen',
      description:
        'Freelance data and AI engineer in Copenhagen, responsible for the whole data platform at two companies. I build and fix data platforms and set up AI coding.',
    },
    hero: {
      eyebrow: 'Freelance data and AI engineer · Copenhagen',
      title: 'Data platforms that hold up.',
      title2: 'AI coding that actually ships.',
      lead: 'I’m Mathias. At two companies I’ve had technical responsibility for the whole data platform, from raw data to the reports the business runs on. Companies bring me in to build or fix theirs, or to get real output from AI-assisted development. Often both.',
      ctaPrimary: 'Get a reply within a day',
      ctaSecondary: 'See how to hire me',
      availability: 'Taking on new engagements',
      visual: {
        platformLabel: 'Data platform',
        flow: ['Sources', 'Pipelines', 'Warehouse', 'Reports'],
        aiLabel: 'AI coding',
        terminal: [
          { kind: 'cmd', text: 'agent "add incremental load for orders"' },
          { kind: 'ok', text: 'read team conventions' },
          { kind: 'ok', text: 'wrote pipeline and tests' },
          { kind: 'ok', text: 'opened pull request for review' },
        ],
      },
    },
    offers: {
      eyebrow: 'Two things I’m hired for',
      items: [
        {
          key: 'data',
          name: 'Data platform expertise',
          body: 'Pipelines, warehouse, data models, reporting and the machine learning on top: designed, built, or untangled. For companies whose data has outgrown its setup, or never had a proper one.',
          points: ['New platforms built from scratch', 'Slow, costly or fragile platforms fixed', 'A senior engineer embedded in your team'],
          cta: 'Data platform work',
        },
        {
          key: 'ai',
          name: 'AI coding expertise',
          body: 'For teams that have AI coding tools and little to show for them. The difference is the setup: agents that follow your conventions, stay inside limits you decide, and are used the same way by the whole team.',
          points: ['Agent setup in your repositories', 'Guardrails, permissions and review flow', 'Hands-on training for your developers'],
          cta: 'AI coding work',
        },
      ],
    },
    buy: {
      eyebrow: 'How to hire me',
      title: 'Buy hours, or buy a result.',
      hours: {
        name: 'Hours',
        body: 'A senior engineer in your team, part-time or full-time, for as long as you need. The most common way companies work with me.',
        points: ['Hourly rate, agreed up front', 'Start small and scale up', 'No lock-in: stop when the work is done'],
        cta: 'Ask about availability',
        topic: 'hours',
      },
      productsLabel: 'Fixed scope, fixed price',
      products: [
        {
          name: 'Data platform review',
          body: 'I go through your platform and tell you what it costs, where it is fragile, and what to fix first. You get a written, prioritised report and a walkthrough.',
          meta: '5–8 days of work, over 2–3 weeks',
          cta: 'Ask for a quote',
          topic: 'review',
        },
        {
          name: 'AI coding setup',
          body: 'One team or codebase: instructions the agent reads every time, a written line between what it may do alone and what needs a person, connections to your systems, and training on your own backlog.',
          meta: '6–10 days of work, over 3–4 weeks',
          cta: 'Ask for a quote',
          topic: 'setup',
        },
      ],
    },
    faq: {
      title: 'Before you write',
      items: [
        { q: 'What does it cost?', a: 'Hours are billed at an hourly rate, products at a fixed price. Both are agreed before any work starts. You get a number after a short first call.' },
        { q: 'How soon can you start?', a: 'It depends on what I have running. Ask, and I’ll tell you my current availability straight away.' },
        { q: 'Where do you work?', a: 'On-site in Copenhagen, remotely everywhere else. In English or Danish.' },
        { q: 'How is it contracted?', a: 'Through my company, MLN Data Consulting (CVR 45700577). Your standard consultancy contract and NDA are fine.' },
        { q: 'What if you’re not the right fit?', a: 'Then I say so on the first call, before it has cost you anything.' },
      ],
    },
    contactSection: {
      title: 'Tell me what you need.',
      body: 'Three lines is enough. I reply within one working day with how I’d approach it and what it would take.',
      points: ['No cost and no obligation', 'A straight answer on whether I can help', 'A price before any work starts'],
    },
    proof: {
      eyebrow: 'Results',
      lead: 'From recent client work on a platform handling more than 60 million records.',
      more: 'See the cases',
      items: proofItems,
    },
    why: {
      eyebrow: 'Why me',
      title: 'How I work.',
      items: [
        { title: 'I build it myself', body: 'Hands-on, not a slide deck. I have built every layer: pipelines, warehouse, machine learning models, reports and forecasts.' },
        { title: 'I measure before and after', body: 'A baseline first, so the effect of the work can be shown rather than claimed. The cases show what that looks like.' },
        { title: 'I can explain it', body: 'To developers in their terms and to management in theirs. Forecasts I built have gone into company budgets, and I have been a manager myself.' },
        { title: 'I build to hand over', body: 'Conventional, documented, and owned by your team when I leave.' },
      ],
    },
    experience: {
      label: 'Experience from',
      items: ['Ase', 'Copyright Agent', 'Viteco'],
    },
  },

  data: {
    meta: {
      title: 'Data platform consultant in Copenhagen',
      description:
        'Freelance data platform engineer: pipelines, warehouse, reporting, machine learning, BigQuery, Microsoft Fabric. Build, fix or review, hourly or fixed price.',
    },
    hero: {
      eyebrow: 'Data platform expertise',
      title: 'A data platform people trust, at a cost that makes sense.',
      lead: 'I design and build data platforms, and I fix the ones that have become slow, expensive or unreliable. I have had technical responsibility for the whole platform at two companies.',
    },
    signsTitle: 'When companies call me',
    signs: [
      'Numbers differ depending on which report you open.',
      'The cloud bill grows faster than the business.',
      'Nightly jobs no longer finish overnight.',
      'Everything depends on one person and a set of scripts.',
      'There is data everywhere, and no agreed way to measure anything.',
      'You know what you want to predict, and nobody has built it.',
    ],
    whatTitle: 'What I do',
    what: [
      { title: 'Architecture and build', body: 'Ingestion, pipelines, warehouse and data models, set up so the platform can grow without being rebuilt.' },
      { title: 'Cost and performance', body: 'I find the queries and jobs that do far more work than needed and fix them. Most of the waste usually sits in a handful of places.' },
      { title: 'Reporting foundation', body: 'Agreed definitions, consistent numbers and a reporting layer management can run the company on.' },
      { title: 'Reliability', body: 'Tests, monitoring and data quality checks, so problems are found by the platform and not by the CFO.' },
      { title: 'Machine learning in production', body: 'Models that run inside the platform and are measured against what they replaced. I have put models into production that predict revenue, incoming calls, membership movements, churn, unemployment, and which records are worth processing.' },
      { title: 'Forecasting', body: 'Revenue forecasts that combine several models and are detailed enough to budget from, both top-down and bottom-up.' },
    ],
    engagementsTitle: 'How we can work',
    engagements: [
      { title: 'Data platform review', body: 'A short assessment of your platform: what it costs, where it is fragile, what to fix first.', topic: 'review' },
      { title: 'Project', body: 'A defined build, fix or first prediction model, with an agreed outcome.' },
      { title: 'Hours', body: 'I join your team part-time or full-time for a longer period. This is what I prefer, and where the best results come from.', topic: 'hours' },
    ],
    stackTitle: 'Technology',
    stack: ['SQL', 'Python', 'BigQuery', 'Google Cloud', 'Microsoft Fabric', 'Azure', 'SQL Server', 'PostgreSQL', 'Data modelling', 'Orchestration', 'Machine learning', 'Forecasting', 'BI and reporting'],
    product: {
      eyebrow: 'Data platform review',
      title: 'What the review covers, and what you get.',
      lead: 'A fixed-scope look at your platform, for when you need to know where you stand before you decide what to spend on it.',
      steps: [
        { title: 'Talk to the people', body: 'Short conversations with the people who build the platform and the people who depend on it: what they trust, and what they work around.' },
        { title: 'Follow the cost', body: 'Where the money actually goes: the queries, jobs and storage that do most of the work, and whether anyone asked for that work.' },
        { title: 'Find what breaks', body: 'What depends on one person or one script, what fails without anyone noticing, and which numbers disagree between reports.' },
        { title: 'Write it down', body: 'A written report in order of priority: what to fix first and why, and what can wait.' },
        { title: 'Walk through it', body: 'A session with your team and management, so the report turns into decisions.' },
      ],
      getTitle: 'You get',
      get: ['A written, prioritised report', 'A walkthrough with your team and management', 'A list your own team can act on, with or without me'],
    },
    faq: {
      title: 'Questions about data platform work',
      items: [
        { q: 'Which platforms do you work with?', a: 'I have been responsible for platforms on BigQuery and Google Cloud, and on SQL Server moving to Microsoft Fabric, with PostgreSQL as the operational database. If yours is built on something else, ask: most of the work is the same.' },
        { q: 'Do you replace our data team?', a: 'No. I work inside it, part-time or full-time, and build so your team owns the result when I leave. At one client I also mentored the data and analytics team, including its technical priorities.' },
        { q: 'Do you build it, or only advise?', a: 'I build it. I write the pipelines, models and reports myself. The review is the exception: there you get the list of what to fix, and who fixes it is up to you.' },
        { q: 'We want machine learning. Where do we start?', a: 'Usually with the data underneath. A model is only as good as the platform that feeds it, and it should be measured against what it replaces. The ranking model case shows what that looks like.' },
      ],
    },
    otherOffer: { label: 'Also', text: 'AI coding expertise' },
  },

  ai: {
    meta: {
      title: 'AI coding setup for development teams',
      description:
        'Claude Code and other coding agents set up in your codebase: conventions, guardrails, connections to your systems and hands-on training for your developers.',
    },
    hero: {
      eyebrow: 'AI coding expertise',
      title: 'From “we tried Copilot” to AI that ships real work.',
      lead: 'Most teams have the tools and little to show for it. The difference is in the setup, and that is what I do.',
    },
    signsTitle: 'When companies call me',
    signs: [
      'Developers have AI tools, but output has not really changed.',
      'The agent writes code that ignores how your codebase works.',
      'Nobody is sure what the agent is allowed to touch.',
      'Results vary wildly from one developer to the next.',
      'Management wants to know whether it is paying off.',
    ],
    whatTitle: 'What I do',
    what: [
      { title: 'Setup in your repositories', body: 'Project instructions and conventions the agent reads every time, so it writes code the way your team does.' },
      { title: 'Guardrails', body: 'Permissions, review flow and rules for what an agent may do on its own, and what needs a human.' },
      { title: 'Connections to your systems', body: 'Secure access to the things real work depends on: databases, issue trackers, documentation, deployment.' },
      { title: 'Training', body: 'Hands-on sessions with your developers on real tasks from your backlog, until it is part of how they work.' },
    ],
    engagementsTitle: 'How we can work',
    engagements: [
      { title: 'AI coding setup', body: 'I configure agentic coding in one team or codebase and hand over a working way of doing things.', topic: 'setup' },
      { title: 'Rollout', body: 'The same across several teams, with shared conventions and measurement of the effect.' },
      { title: 'Delivery', body: 'I build your project myself using this setup, and leave both the result and the setup behind.' },
    ],
    stackTitle: 'Technology',
    stack: ['Claude Code', 'AI coding agents', 'MCP integrations', 'Project conventions', 'Git and pull request workflows', 'Python', 'TypeScript', 'SQL'],
    product: {
      eyebrow: 'AI coding setup',
      title: 'What the setup leaves behind.',
      lead: 'A working way of doing things in your own repository, not a slide deck. The same parts this company runs on, fitted to your systems and your risk.',
      steps: [
        { title: 'Look at how you work', body: 'Your codebase, your review flow, the systems an agent would need, and where your team already uses AI.' },
        { title: 'Set up the repository', body: 'Instructions the agent reads every time: how the code is organised, your conventions, and the rules that must not be broken.' },
        { title: 'Draw the line', body: 'In writing: what the agent may do on its own, what needs a person, and the checks that can fail a pull request.' },
        { title: 'Connect your systems', body: 'Secure access to what real work depends on: databases, issue trackers, documentation, deployment.' },
        { title: 'Train on your backlog', body: 'Hands-on sessions on real tasks, until your developers work this way without me.' },
      ],
      getTitle: 'Left in your repository',
      get: [
        'Instructions the agent reads every session',
        'A written line between what it may do alone and what needs a person',
        'Checks that can fail a pull request',
        'Connections to your systems',
        'A place where decisions and incidents are recorded',
        'Developers trained on your own backlog',
      ],
    },
    faq: {
      title: 'Questions about AI coding',
      items: [
        { q: 'Is it safe to let an agent change our code?', a: 'As safe as the line you draw. The agent works inside written rules, a person decides what it may do alone, and checks run before anything is merged. In my own company an automatic safety check also blocks it from reading credentials. The case shows the whole setup.' },
        { q: 'Will the agent see our secrets?', a: 'It does not need to. In the setup I use, the agent knows the names of secrets, never their values, and people add them.' },
        { q: 'How do we know it pays off?', a: 'Agree on what to measure before the start, and measure it before and after. I do not promise a percentage; your own numbers will show it.' },
        { q: 'Which tools do you use?', a: 'I do most of my own engineering with Claude Code. What makes it work, the instructions, the permissions and the checks, is not tied to one tool.' },
        { q: 'Does it work on an old or messy codebase?', a: 'It can, but the code may need restructuring first. I have restructured a production data platform into Python packages so coding agents can work in it.' },
      ],
    },
    otherOffer: { label: 'Also', text: 'Data platform expertise' },
  },

  about: {
    meta: {
      title: 'About: freelance data and AI engineer',
      description:
        'Mathias Lau Nielsen, freelance data and AI engineer in Copenhagen. In data since 2020, responsible for the whole data platform at two companies.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Mathias Lau Nielsen',
      lead: 'Freelance data and AI engineer in Copenhagen. I build and fix data platforms (BigQuery, Google Cloud, Microsoft Fabric) and set up AI coding agents such as Claude Code for development teams. I work through my own company, MLN Data Consulting.',
    },
    story: [
      'I have worked in data since 2020, and at two companies I have had technical responsibility for the whole data platform: from the raw data coming in to the reports the business runs on.',
      'I started at the consultancy Viteco in 2020. There I built software that automated data warehouse work: it read the structure of the source systems, loaded and transformed the data, and handled master data. A project I wrote with Viteco used machine learning to work out how source data is structured and derive the warehouse model from it.',
      'At the software company Copyright Agent I designed and built the data platform: the warehouse, the pipelines from the main source systems and all the reporting. On top of it I put machine learning models into production and built the revenue forecasts used in the company’s budgeting. I started there as an employee and still work with them as a consultant.',
      'At Ase, a large Danish membership organisation, I took on technical responsibility for the data platform and its architecture. I planned its move from SQL Server to Microsoft Fabric, restructured the code into Python packages that AI coding agents can work in, and put models into production that predict incoming calls, membership movements, churn and unemployment. I also mentored the data and analytics team, including its technical priorities.',
      'Alongside the platform work I have gone deep on AI-assisted development. I do most of my own engineering with coding agents and have built the conventions and guardrails that make that reliable. At both Ase and Copyright Agent I have used AI to design and improve reporting. Setting this up for others has become the second half of what I do.',
      'Before data, I managed a team of 12–18 people in retail with responsibility for budget and sales targets, so I know what it is like to run something on numbers you need to trust.',
    ],
    work: {
      eyebrow: 'Work',
      title: 'What I can show.',
    },
    storyTitle: 'Background',
    factsTitle: 'In short',
    facts: [
      { label: 'Based in', value: 'Copenhagen. Remote or on-site.' },
      { label: 'Languages', value: 'English and Danish' },
      { label: 'Covers', value: 'Data engineering, machine learning, reporting and AI coding' },
      { label: 'Education', value: 'BSc Computer Science, University of Copenhagen' },
      { label: 'Company', value: `${site.company}, CVR ${site.cvr}` },
      { label: 'Prefers', value: 'Long engagements, part-time or full-time' },
      { label: 'Does not work with', value: 'Weapons, explosives, fossil fuel extraction' },
    ],
  },

  cases: {
    meta: {
      title: 'Cases: data platform, machine learning and AI coding',
      description:
        'A data platform doing 4.5× the scheduled work, a ranking model that does more on a quarter of the budget, and a company whose IT is run by a coding agent.',
    },
    hero: {
      eyebrow: 'Cases',
      title: 'What the work looks like.',
      lead: 'Two cases from a client’s data platform, anonymised, with the numbers shown as before and after. And one you can check down to the commit: my own company.',
    },
    note: 'Client cases name no client and no money. Every number says whether it was measured in production or tested on past data.',
    data: {
      eyebrow: 'Data platform',
      title: 'Two results, written out.',
    },
    ai: {
      eyebrow: 'AI coding',
      title: 'A case you can check yourself.',
    },
    read: 'Read the case',
    all: 'All cases',
    studies,
  },

  contact: {
    meta: {
      title: 'Contact',
      description: 'Three lines about what you need built, fixed or set up. I reply within one working day. On-site in Copenhagen, remote elsewhere, in English or Danish.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Tell me what you need.',
      lead: 'Three lines is enough. I reply within one working day.',
    },
    prompts: {
      title: 'What helps in the first message',
      items: ['What you run today, roughly', 'What is going wrong, or what you want built', 'When you would like to start'],
    },
    direct: 'Or reach me directly',
    expectTitle: 'What happens next',
    expect: [
      'A short call so I understand the problem.',
      'I tell you whether and how I can help.',
      'If it makes sense, we agree on scope and terms.',
    ],
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      phone: 'Phone',
      message: 'What do you need?',
      optional: 'optional',
      placeholder: 'What do you need built, fixed or set up?',
      topicLabel: 'I’m interested in',
      topics: [
        { value: 'data', label: 'Data platform' },
        { value: 'ai', label: 'AI coding' },
        { value: 'hours', label: 'Hours' },
        { value: 'review', label: 'Data platform review' },
        { value: 'setup', label: 'AI coding setup' },
        { value: 'other', label: 'Not sure yet' },
      ],
      submit: 'Send enquiry',
      sending: 'Sending …',
      successTitle: 'Thanks',
      successBody: 'I’ll reply within one working day.',
      again: 'Send another message',
      error: 'The message could not be sent. Please try again, or email me directly.',
      consent: 'By sending, you accept that I store your details in order to reply.',
      privacy: 'Privacy policy (in Danish)',
    },
  },

  blog: {
    meta: {
      title: 'Blog: theory, practice and what it means for the business',
      description:
        'Short pieces that take one idea behind data platforms, forecasting or machine learning, show it in practice, and say what it means for the business.',
    },
    hero: {
      eyebrow: 'Blog',
      title: 'From theory to practice to the business.',
      lead: 'One idea per piece. Where it comes from, what it looks like in real data work, and what it changes for the people who decide.',
    },
    empty: 'No posts yet.',
    emptyCta: 'Meanwhile, the cases show the work',
    readMore: 'Read',
    back: 'All posts',
    author: {
      role: 'Freelance data and AI engineer',
      body: 'I build and fix data platforms and set up AI coding agents for development teams. Technical responsibility for the whole data platform at two companies.',
      cta: 'Get in touch',
    },
  },

  footer: {
    tagline: 'Data platform and AI coding expertise.',
    pages: 'Pages',
    contact: 'Contact',
    blog: 'Blog',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
}

export type Copy = typeof en
