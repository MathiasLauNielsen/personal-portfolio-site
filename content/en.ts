// English copy (the default language). da.ts mirrors this shape exactly (typed as Copy).
//
// The reader is a company that does not know Mathias or his clients, and wants to buy
// one of two things: data platform expertise or AI coding expertise. Client names only
// appear as supporting experience. Every number is from real work; none are invented.

export const en = {
  nav: {
    data: 'Data platform',
    ai: 'AI coding',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in touch',
    switchLabel: 'Dansk',
  },

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Data platform and AI coding expertise',
      description:
        'Freelance senior data engineer. I build and fix data platforms, and I set up AI-assisted software development so teams ship more with it.',
    },
    hero: {
      eyebrow: 'Freelance senior data engineer · Copenhagen',
      title: 'Data platforms that hold up.',
      title2: 'AI coding that actually ships.',
      lead: 'I’m Mathias. Companies bring me in for one of two things: to build or fix their data platform, or to get real output from AI-assisted development. Often both.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'About me',
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
          body: 'Pipelines, warehouse, data models and reporting: designed, built, or untangled. For companies whose data has outgrown its setup, or never had a proper one.',
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
    proof: {
      eyebrow: 'Results',
      title: 'What that looks like in numbers.',
      lead: 'From recent client work on a platform handling more than 60 million records.',
      items: [
        {
          value: '72% from 25%',
          label: 'A ranking model found 72% of the valuable cases using a quarter of the processing budget. The old selection found 25%.',
          note: 'Tested on two months of historical data',
        },
        {
          value: '−98.5%',
          label: 'A nightly job rewrote 46 million rows to change 683,000. Now it touches only what changed.',
          note: 'Measured in production',
        },
        {
          value: '2–4.5×',
          label: 'Duplicate workload traced to a single fault that had gone unnoticed because nothing looked broken.',
          note: 'Measured in production',
        },
      ],
    },
    why: {
      eyebrow: 'Why me',
      title: 'Both halves of the job.',
      items: [
        { title: 'I build it myself', body: 'Senior hands-on engineer, not a slide deck. From database internals to the report on the CEO’s desk.' },
        { title: 'I measure before and after', body: 'A baseline first, so the effect of the work can be shown rather than claimed.' },
        { title: 'I can explain it', body: 'To developers in their terms and to management in theirs. I have been a manager myself.' },
        { title: 'I build to hand over', body: 'Conventional, documented, and owned by your team when I leave.' },
      ],
    },
    experience: {
      label: 'Experience from',
      items: ['Ase', 'Copyright Agent', 'Viteco', 'University of Copenhagen (BSc Computer Science)'],
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
      title: 'Data platform expertise',
      description:
        'Data platform design, build and repair: pipelines, warehouse, data models, reporting, cost and performance. Freelance senior data engineer.',
    },
    hero: {
      eyebrow: 'Data platform expertise',
      title: 'A data platform people trust, at a cost that makes sense.',
      lead: 'I design and build data platforms, and I fix the ones that have become slow, expensive or unreliable.',
    },
    signsTitle: 'When companies call me',
    signs: [
      'Numbers differ depending on which report you open.',
      'The cloud bill grows faster than the business.',
      'Nightly jobs no longer finish overnight.',
      'Everything depends on one person and a set of scripts.',
      'There is data everywhere, and no agreed way to measure anything.',
    ],
    whatTitle: 'What I do',
    what: [
      { title: 'Architecture and build', body: 'Ingestion, pipelines, warehouse and data models, set up so the platform can grow without being rebuilt.' },
      { title: 'Cost and performance', body: 'I find the queries and jobs that do far more work than needed and fix them. Most of the waste usually sits in a handful of places.' },
      { title: 'Reporting foundation', body: 'Agreed definitions, consistent numbers and a reporting layer management can run the company on.' },
      { title: 'Reliability', body: 'Tests, monitoring and data quality checks, so problems are found by the platform and not by the CFO.' },
    ],
    engagementsTitle: 'How we can work',
    engagements: [
      { title: 'Review', body: 'A short assessment of your platform: what it costs, where it is fragile, what to fix first.' },
      { title: 'Project', body: 'A defined build or fix with an agreed outcome.' },
      { title: 'Embedded', body: 'I join your team part-time or full-time for a longer period. This is what I prefer, and where the best results come from.' },
    ],
    stackTitle: 'Technology',
    stack: ['SQL', 'Python', 'BigQuery', 'Google Cloud', 'Azure', 'PostgreSQL', 'Data modelling', 'Orchestration', 'BI and reporting'],
    note: '',
    otherOffer: { label: 'Also', text: 'AI coding expertise' },
  },

  ai: {
    meta: {
      title: 'AI coding expertise',
      description:
        'AI coding agents set up properly in your codebase: conventions, guardrails, connections to your systems and a trained team. Freelance senior engineer.',
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
      { title: 'Setup', body: 'I configure agentic coding in one team or codebase and hand over a working way of doing things.' },
      { title: 'Rollout', body: 'The same across several teams, with shared conventions and measurement of the effect.' },
      { title: 'Delivery', body: 'I build your project myself using this setup, and leave both the result and the setup behind.' },
    ],
    stackTitle: 'Technology',
    stack: ['Claude Code', 'AI coding agents', 'MCP integrations', 'Project conventions', 'Git and pull request workflows', 'Python', 'TypeScript', 'SQL'],
    note: 'This website was built with the setup described here.',
    otherOffer: { label: 'Also', text: 'Data platform expertise' },
  },

  about: {
    meta: {
      title: 'About',
      description:
        'Mathias Lau Nielsen: freelance senior data engineer in Copenhagen, with a computer science degree from the University of Copenhagen.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Mathias Lau Nielsen',
      lead: 'Freelance senior data engineer in Copenhagen. I work through my own company, MLN Data Consulting.',
    },
    story: [
      'I have a computer science degree from the University of Copenhagen and have spent my career in data: business intelligence at the consultancy Viteco, data engineering and analysis at the software company Copyright Agent, and senior data engineering for Ase, a large Danish membership organisation.',
      'Alongside the platform work I have gone deep on AI-assisted development. I do most of my own engineering with coding agents and have built the conventions and guardrails that make that reliable. Setting this up for others has become the second half of what I do.',
      'Before computer science I managed a team of 12–18 people in retail with responsibility for budget and sales targets, so I know what it is like to run something on numbers you need to trust.',
    ],
    factsTitle: 'In short',
    facts: [
      { label: 'Based in', value: 'Copenhagen. Remote or on-site.' },
      { label: 'Languages', value: 'English and Danish' },
      { label: 'Prefers', value: 'Long engagements, part-time or full-time' },
      { label: 'Does not work with', value: 'Weapons, explosives, fossil fuel extraction' },
    ],
  },

  contact: {
    meta: {
      title: 'Contact',
      description: 'Get in touch with Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Tell me what you need.',
      lead: 'A few lines is enough. I usually reply within a day or two.',
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
      message: 'Message',
      optional: 'optional',
      placeholder: 'What do you need built, fixed or set up?',
      submit: 'Send',
      sending: 'Sending …',
      successTitle: 'Thanks',
      successBody: 'I’ll get back to you shortly.',
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
