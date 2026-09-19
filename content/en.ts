// English copy (the default language). da.ts mirrors this shape exactly (typed as Copy).
// Rule: every number comes from real client work and carries an honest status.
// No invented clients, figures or titles. When in doubt, leave it out.

export type ProofStatus = 'measured' | 'tested' | 'pending'

export const en = {
  nav: {
    cases: 'Results',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    cta: 'Get in touch',
    switchLabel: 'Dansk',
  },

  statusLabels: {
    measured: 'Measured in production',
    tested: 'Tested on historical data',
    pending: 'Pending release',
  } as Record<ProofStatus, string>,

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Freelance data and AI consultant',
      description:
        'Senior data engineer for mid-sized companies: reporting you can rely on, data systems that cost less to run, and AI where it earns its keep.',
    },
    hero: {
      eyebrow: 'Freelance data & AI consultant · Copenhagen',
      titleA: 'Reporting you can rely on.',
      titleB: 'Systems that cost less to run.',
      lead: 'I’m Mathias, a senior data engineer. I help mid-sized companies get numbers they trust, cut what their data systems cost, and put AI to work where it earns its keep.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See results',
      chart: {
        kicker: 'Client result · Copyright Agent',
        title: 'Share of cases found using 25% of the scans',
        before: 'Previous selection',
        after: 'New value-based ranking',
        beforeValue: 25,
        afterValue: 72,
        percent: '%',
        footnote: 'An automated system deciding which of 60+ million images to scan. Tested on two months of historical data.',
      },
    },
    areas: {
      eyebrow: 'What I help with',
      title: 'Three problems I’m usually hired for.',
      items: [
        {
          key: 'reporting',
          title: 'Reporting, and the foundation under it',
          body: 'Numbers that differ between reports, month-end figures nobody fully trusts, dashboards no one opens. The fix is rarely another dashboard. I sort out the data underneath and agree with management what should be measured, then build reporting on top of that.',
        },
        {
          key: 'cost',
          title: 'Cost and performance',
          body: 'Cloud bills that grow faster than the business, nightly jobs that take hours, queries that time out. I find what is driving the cost and fix it, usually without replacing the platform.',
        },
        {
          key: 'ai',
          title: 'AI and automation',
          body: 'Setting up AI so a team actually gets more done with it, and building automated systems that make routine decisions better than the manual process did. With a measurement of whether it worked.',
        },
      ],
      more: 'More about how I work',
    },
    generalist: {
      eyebrow: 'Why one person',
      title: 'Most data problems don’t stay in one box.',
      body: [
        'The report is wrong because the pipeline is fragile, because the source system changed, because nobody owns the definition. Split that across three specialists and each one fixes their part while the problem stays.',
        'I work across the whole chain: source systems, pipelines, warehouse, models and the report on the CEO’s desk. You get one senior person who is accountable for the result, and who can explain it to both the developers and the board.',
      ],
    },
    proof: {
      eyebrow: 'Results',
      title: 'From recent client work.',
      lead: 'All from one engagement. Each figure says whether it is measured in production or tested on historical data.',
      items: [
        {
          value: '72%',
          label: 'of cases found using 25% of the scans',
          detail: 'The previous selection found 25%, no better than picking at random.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '2–4.5×',
          label: 'duplicate work, traced to one fault',
          detail: 'A system was repeating its own work several times a day. Nobody had noticed because nothing looked broken.',
          status: 'measured' as ProofStatus,
        },
        {
          value: '−98.5%',
          label: 'rows rewritten by a nightly job',
          detail: 'It rewrote 46 million rows to change 683,000. Now it only touches what changes.',
          status: 'measured' as ProofStatus,
        },
      ],
      cta: 'Read the case',
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Former colleague at Copyright Agent · LinkedIn recommendation',
    },
    about: {
      eyebrow: 'About',
      title: 'Senior data engineer, working freelance.',
      body: 'Computer science degree from the University of Copenhagen. I have worked with data at Viteco, Copyright Agent and Ase, and run my own company, MLN Data Consulting. I prefer long engagements where I get to know the business, because that is where the results come from.',
      cta: 'More about me',
    },
    cta: {
      title: 'Got a data problem that keeps coming back?',
      body: 'Tell me about it. If I can help, I’ll say how. If I can’t, I’ll say that too.',
      primary: 'Get in touch',
      secondary: 'Email me',
    },
  },

  services: {
    meta: {
      title: 'Services',
      description:
        'Reporting and data foundations, cost and performance work, and AI setups. Mostly as long-term engagements for mid-sized companies.',
    },
    hero: {
      eyebrow: 'Services',
      title: 'What I do, and how we would work together.',
      lead: 'I’m a generalist by choice. These are the three kinds of work I’m usually brought in for, and they often overlap.',
    },
    items: [
      {
        key: 'reporting',
        name: 'Reporting and data foundation',
        tagline: 'Numbers management can run the company on.',
        body: 'I start with what management needs to decide, work back to what has to be measured, and then to the data that has to be reliable for that to work. Then I build it: pipelines, a warehouse or model layer, and reports on top.',
        deliverables: [
          'A reporting strategy: what is measured, how it is defined, who owns it',
          'Pipelines and data models that make the numbers consistent',
          'Reports and dashboards that people use',
        ],
        fit: 'Typical starting point: “our numbers don’t match” or “we don’t know what to measure”.',
      },
      {
        key: 'cost',
        name: 'Cost and performance',
        tagline: 'Find what drives the bill, and fix it.',
        body: 'I measure where the money and the time go in your cloud and data systems, find the jobs and queries that do far more work than they need to, and fix them. Most savings come from a handful of places.',
        deliverables: [
          'A breakdown of what your data systems cost, and why',
          'Fixes to the expensive and slow parts',
          'Before and after figures',
        ],
        fit: 'Typical starting point: a cloud bill nobody can explain, or jobs that no longer finish overnight.',
      },
      {
        key: 'ai',
        name: 'AI and automation',
        tagline: 'AI where it earns its keep.',
        body: 'Two kinds of work. Setting up AI tooling so a development or data team gets more done, with the guardrails and conventions that make it safe. And building automated systems, often with machine learning, that take over routine decisions and make them better.',
        deliverables: [
          'A working AI setup for your team, including rules and conventions',
          'Automated decision systems, integrated with what you already run',
          'A measurement of the effect',
        ],
        fit: 'Typical starting point: “we should be using AI, but we’re not sure where”.',
      },
    ],
    deliverablesLabel: 'What you get',
    engagement: {
      title: 'Ways of working',
      body: 'I prefer long-term engagements, part-time or full-time, where I become part of the team. I also take scoped projects. I work in English and Danish, remotely or on-site in Copenhagen. Rates are agreed per engagement.',
      ethics: 'I don’t take work in weapons, explosives or fossil fuel extraction.',
    },
    tech: {
      title: 'Tools I work with',
      items: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Azure', 'Machine learning', 'LLMs and AI agents'],
    },
  },

  cases: {
    meta: {
      title: 'Results',
      description:
        'How a value-based ranking at Copyright Agent found 72% of the cases with 25% of the scans.',
    },
    hero: {
      eyebrow: 'Results',
      title: 'One case, with the numbers.',
      lead: 'The engagement I can describe in most detail.',
    },
    featured: {
      client: 'Copyright Agent',
      industry: 'Copyright enforcement · SaaS',
      period: '2026 · ongoing',
      title: 'Deciding which of 60 million images to scan',
      sections: [
        {
          heading: 'The situation',
          body: 'Copyright Agent finds unlicensed use of its partners’ images online. It holds more than 60 million images and scans about 13 million a month. Which images are scanned decides how many cases partners receive, and so the revenue. Selection ran on schedules maintained by hand.',
          bullets: [] as string[],
        },
        {
          heading: 'What I found',
          body: 'I mapped and measured the existing flow before changing anything.',
          bullets: [
            'A fault made the system repeat its selection 2–4.5 times a day, pushing scan volume 16% over budget.',
            '72% of scans went to images with no violation in the past year. The selection order was no better than random.',
            'Partner targets played no part in the selection, so some partners were under-supplied while others were scanned without need.',
          ],
        },
        {
          heading: 'What I built',
          body: 'First the foundations: stop the duplicate scans and make selection fast. Then a model that ranks every image by expected value, a daily scan plan that spends the budget by that ranking while keeping priority partners supplied, and a daily report showing which partners are behind and why.',
          bullets: [] as string[],
        },
      ],
      resultsHeading: 'Results so far',
      results: [
        {
          value: '72% with 25%',
          label: 'The ranking finds 72% of the cases partners received using 25% of the scans. The previous order found 25%.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '80–106%',
          label: 'In a 21-day simulation, priority partners reach 80–106% of their monthly target, against 30–90% today, on the same scan budget.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '−98.5%',
          label: 'A nightly job no longer rewrites 46 million rows to change 683,000, and selection uses a fast lookup instead of reading a 16 GB table.',
          status: 'measured' as ProofStatus,
        },
        {
          value: '≈5M/month',
          label: 'The duplicate-scan fix brings volume back within budget and frees about 5 million scans a month.',
          status: 'pending' as ProofStatus,
        },
      ],
      note: 'The direct saving on scans is modest. The value is in more cases for the same spend.',
      tech: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud'],
    },
    testimonialHeading: 'From a colleague',
    testimonialFull:
      'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times. I have seen Mathias excel with all levels of seniority at Copyright Agent, showing immense capabilities with project management, leadership consultation, and data analysis.',
  },

  about: {
    meta: {
      title: 'About',
      description:
        'Mathias Lau Nielsen: senior data engineer with a computer science degree from the University of Copenhagen. Freelancing through MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Mathias Lau Nielsen',
      lead: 'Senior data engineer based in Copenhagen, working freelance through MLN Data Consulting.',
    },
    story: [
      'I have a computer science degree from the University of Copenhagen, where my thesis was on using machine learning to generate data warehouse structures. Since then I have worked with business intelligence at Viteco, with data engineering and analysis at Copyright Agent, and as a senior data engineer for Ase.',
      'My work tends to end up in the same place: a system or a process that costs more than it should or earns less than it could, and a way to show the difference once it is fixed. I’m comfortable anywhere between the database and the boardroom, and I spend a lot of my time translating between the two.',
      'Before computer science I managed a team of 12–18 people in retail, with responsibility for budget and sales targets. It taught me how a business is actually run, which turns out to matter when you build its reporting.',
    ],
    principlesTitle: 'How I work',
    principles: [
      { title: 'Measure first', body: 'I put numbers on the current state before changing anything, so the effect can be shown afterwards.' },
      { title: 'Say it straight', body: 'If the gain is small, or the problem is somewhere other than expected, you hear it from me early.' },
      { title: 'Build to hand over', body: 'Documented, conventional, and owned by your team when I leave.' },
    ],
    timelineTitle: 'Experience',
    timeline: [
      { title: 'MLN Data Consulting', body: 'Own company. Freelance data engineering, optimization and AI setups.' },
      { title: 'Ase', body: 'Senior data engineer.' },
      { title: 'Copyright Agent', body: 'Data engineering, analysis and advice to management.' },
      { title: 'Viteco', body: 'Business intelligence consultancy.' },
      { title: 'University of Copenhagen', body: 'BSc in Computer Science, 2021.' },
    ],
  },

  contact: {
    meta: {
      title: 'Contact',
      description: 'Get in touch with Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Tell me what you’re dealing with.',
      lead: 'A few lines is enough. I usually reply within a day or two.',
    },
    direct: 'Or reach me directly',
    expectTitle: 'What happens next',
    expect: [
      'We have a short call so I understand the problem.',
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
      placeholder: 'E.g. our monthly reporting takes a week to produce and the numbers still get questioned …',
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
    tagline: 'Freelance data engineering, optimization and AI.',
    pages: 'Pages',
    contact: 'Contact',
    blog: 'Blog (in Danish)',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
}

export type Copy = typeof en
