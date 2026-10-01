// English copy (the default language). da.ts mirrors this shape exactly (typed as Copy).
//
// The reader is a company that does not know Mathias or his clients, and wants to buy
// one of two things: data platform expertise or AI coding expertise. Client names only
// appear as supporting experience. Every number is from real work; none are invented.

import type { CaseStudy, ProofItem } from './types'

// The three measured results. Each chart redraws the numbers already stated in the label, nothing more.
const proofItems: ProofItem[] = [
  {
    value: '72% from 25%',
    label: 'A ranking model found 72% of the valuable cases using a quarter of the processing budget. The old selection found 25%.',
    note: 'Tested on two months of historical data',
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
    label: 'Duplicate workload traced to a single fault that had gone unnoticed because nothing looked broken.',
    note: 'Measured in production',
    chart: {
      caption: 'Work done compared with work needed',
      max: 4.5,
      rows: [
        { label: 'Needed', display: '1×', value: 1, highlight: true },
        { label: 'Actually done', display: '2–4.5×', value: 2, upTo: 4.5 },
      ],
    },
  },
]

// Written cases. Every statement in the agent case can be checked in the public repository (site.repo):
// the pull requests, CLAUDE.md and the wiki. Times are Copenhagen time.
const studies: CaseStudy[] = [
  {
    key: 'agent',
    offer: 'ai',
    topic: 'setup',
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
    data: 'Data platform',
    ai: 'AI coding',
    cases: 'Cases',
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
          body: 'AI coding agents set up properly in your codebase, with the conventions, guardrails and connections that turn a demo into daily output, and a team that knows how to use them.',
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
          body: 'Coding agents set up in one team or codebase: conventions, guardrails, connections to your systems, and hands-on training so your developers keep using it.',
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
      title: 'What that looks like in numbers.',
      lead: 'From recent client work on a platform handling more than 60 million records.',
      more: 'See the cases',
      items: proofItems,
    },
    why: {
      eyebrow: 'Why me',
      title: 'Both halves of the job.',
      items: [
        { title: 'I’ve owned the whole platform', body: 'Technical responsibility for the data platform at two companies: architecture, pipelines, warehouse and reporting. Not one corner of it.' },
        { title: 'I build it myself', body: 'Hands-on, not a slide deck. I have built every layer: pipelines, warehouse, machine learning models, reports and forecasts.' },
        { title: 'I measure before and after', body: 'A baseline first, so the effect of the work can be shown rather than claimed.' },
        { title: 'I can explain it', body: 'To developers in their terms and to management in theirs. Forecasts I built have gone into company budgets, and I have been a manager myself.' },
        { title: 'AI coding is how I work', body: 'I do most of my own engineering with coding agents, and I have restructured a production data platform so agents can work in it.' },
        { title: 'I build to hand over', body: 'Conventional, documented, and owned by your team when I leave.' },
      ],
    },
    experience: {
      label: 'Experience from',
      items: ['Ase', 'Copyright Agent', 'Viteco'],
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Former colleague · LinkedIn recommendation',
    },
    cta: {
      title: 'Tell me what you need built or fixed.',
      body: 'A few lines is enough. If I’m the right person, I’ll say how I’d approach it. If not, I’ll say that.',
      primary: 'Get in touch',
      secondary: 'Email me',
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
    note: '',
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
    note: 'I have restructured a production data platform so coding agents can work in it, and I do most of my own engineering this way. This website was built with the setup described here.',
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
      results: {
        eyebrow: 'Data platform',
        title: 'Three results from one data platform',
        body: 'A ranking model, a nightly job and a hidden fault, each shown as before and after.',
        cta: 'See the results',
      },
    },
    storyTitle: 'Background',
    factsTitle: 'In short',
    facts: [
      { label: 'Based in', value: 'Copenhagen. Remote or on-site.' },
      { label: 'Languages', value: 'English and Danish' },
      { label: 'Covers', value: 'Data engineering, machine learning, reporting and AI coding' },
      { label: 'Education', value: 'BSc Computer Science, University of Copenhagen' },
      { label: 'Prefers', value: 'Long engagements, part-time or full-time' },
      { label: 'Does not work with', value: 'Weapons, explosives, fossil fuel extraction' },
    ],
  },

  cases: {
    meta: {
      title: 'Cases: data platform results and AI coding',
      description:
        'Data platform results shown as before and after, and a full case of a company whose IT is run by a coding agent in a public repository.',
    },
    hero: {
      eyebrow: 'Cases',
      title: 'What the work looks like.',
      lead: 'Results from a client’s data platform, shown as before and after, and one case you can inspect down to the commit: my own company.',
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

  footer: {
    tagline: 'Data platform and AI coding expertise.',
    pages: 'Pages',
    contact: 'Contact',
    blog: 'Blog (in Danish)',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
}

export type Copy = typeof en
