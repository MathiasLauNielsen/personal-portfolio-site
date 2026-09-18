import type { Copy } from './da'

export const en: Copy = {
  nav: {
    cases: 'Results',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a call',
    switchLabel: 'Dansk',
  },

  statusLabels: {
    measured: 'Measured in production',
    tested: 'Tested on historical data',
    pending: 'Pending release',
  },

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Optimization with data and AI, proven in numbers',
      description:
        'Freelance data engineer specialized in optimization. I find the waste in your systems and processes, fix it with data engineering and AI, and prove the effect in numbers you can verify yourself.',
    },
    hero: {
      eyebrow: 'MLN Data Consulting · Copenhagen',
      titleA: 'Your data already knows',
      titleB: 'where the money goes.',
      lead: 'I’m Mathias, a data engineer specialized in optimization. I find the waste in your systems and processes, fix it with data engineering and AI, and prove the effect in numbers you can verify yourself.',
      ctaPrimary: 'Book a free intro call',
      ctaSecondary: 'See the results',
      chart: {
        kicker: 'Case · Copyright Agent',
        title: 'Share of partner cases found using 25% of the scans',
        before: 'Previous selection',
        after: 'New value-based ranking',
        beforeValue: 25,
        afterValue: 72,
        percent: '%',
        footnote: 'Tested on July–August 2026 data. Almost 3× the cases from the same scan.',
      },
    },
    proof: {
      eyebrow: 'Documented results',
      title: 'Numbers over adjectives.',
      lead: 'Every number below comes from one ongoing optimization engagement, and each carries a status, so you can see what is measured, what is tested and what is awaiting release.',
      items: [
        {
          value: '72%',
          label: 'of cases found using only 25% of the scans',
          detail: 'The previous order found 25%, no better than picking at random.',
          status: 'tested',
        },
        {
          value: '2–4.5×',
          label: 'duplicate work found and traced to a single technical fault',
          detail: 'The system selected ≈540,000 images a day against ≈250,000 scheduled. Nobody had asked for it.',
          status: 'measured',
        },
        {
          value: '−98.5%',
          label: 'fewer rows rewritten every night',
          detail: 'A nightly job rewrote 46 million rows to change 683,000. Now it only touches what changes.',
          status: 'measured',
        },
        {
          value: '≈5M',
          label: 'scans a month freed up for what pays off',
          detail: 'Fixing the duplicate scans brings volume back within budget.',
          status: 'pending',
        },
      ],
    },
    method: {
      eyebrow: 'How I work',
      title: 'No claims without a baseline.',
      lead: 'Optimization without measurement is just change. So every engagement starts by measuring and ends by proving.',
      steps: [
        {
          title: 'Measure the baseline',
          body: 'Before anything changes, I map the current flow and put numbers on it: cost, volume, waiting time and errors. That is the baseline everything is later measured against.',
        },
        {
          title: 'Find the waste',
          body: 'I look for what nobody asked for: duplicate work, resources spent where they rarely pay off, manual routines that don’t scale. Every finding gets a price tag.',
        },
        {
          title: 'Fix and automate',
          body: 'I build the solution myself, from the database to the finished automation. With AI and machine learning where it pays off, and plain solid engineering where that is enough.',
        },
        {
          title: 'Prove the effect',
          body: 'The effect is documented against the baseline, like for like and with sources. You get numbers that hold up in a board meeting, including when the gain is smaller than hoped.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Three ways to get started.',
      more: 'More about the services',
    },
    caseTeaser: {
      eyebrow: 'Featured case',
      title: 'Copyright Agent: almost 3× the cases per scan',
      body: 'Copyright Agent finds unlicensed use of press images online. The business starts with scanning more than 60 million images, and which images get scanned decides both revenue and cost. I found that the selection was no better than random, and built one that is.',
      cta: 'Read the full case',
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Former colleague at Copyright Agent · LinkedIn recommendation',
    },
    about: {
      eyebrow: 'About',
      title: 'An engineer’s hands, a business head.',
      body: 'I hold a computer science degree from the University of Copenhagen and have worked with data at Viteco, Copyright Agent and Ase, among others. Before that I was a manager in retail, responsible for budgets and up to 18 employees. That is why I’m comfortable translating between developers, operations and the C-suite, and why my projects end in numbers management can use.',
      cta: 'More about my background',
    },
    cta: {
      title: 'What does your waste cost per month?',
      body: 'Book a free 30-minute call. You tell me where it hurts. I tell you honestly whether I think there is something to gain, and how we would measure it.',
      primary: 'Book a call',
      secondary: 'Send me a message',
    },
  },

  services: {
    meta: {
      title: 'Services',
      description:
        'Optimization review, AI implementation and data engineering. Three well-scoped ways to work together, each aimed at a measurable effect.',
    },
    hero: {
      eyebrow: 'Services',
      title: 'Scoped engagements with a measurable effect.',
      lead: 'I do my best work when the goal can be expressed as a number: lower cost, shorter waiting time, more cases per euro. These are the three typical ways to start.',
    },
    items: [
      {
        key: 'analysis',
        name: 'Optimization review',
        tagline: 'Find out where the money goes before you invest in a solution.',
        body: 'A short, scoped engagement where I map a system or process, put numbers on the current flow and find the places where resources don’t pay for themselves.',
        deliverables: [
          'A map of the current flow with baseline numbers',
          'A prioritized list of findings, each with an estimated value',
          'A plan for the first fixes: what, how hard, and what it yields',
        ],
        fit: 'For teams that sense there is waste but lack the overview and the numbers.',
      },
      {
        key: 'ai',
        name: 'AI that pays off',
        tagline: 'AI and machine learning where it moves a number, not where it sounds good.',
        body: 'I implement AI solutions from idea to production: prioritization and prediction with machine learning, automation with language models and AI agents, and AI-assisted development that gets more out of your team. Always with a measurement of whether it worked.',
        deliverables: [
          'An assessment of where AI can realistically pay off for you',
          'A solution in production, integrated with your existing systems',
          'Before/after measurement, so the effect can be documented',
        ],
        fit: 'For teams that want AI to deliver results, not another pilot project.',
      },
      {
        key: 'engineering',
        name: 'Data engineering',
        tagline: 'A data foundation that is fast, cheap to run and trustworthy.',
        body: 'Data pipelines, data warehouses and databases that perform. I clean up slow queries, expensive nightly jobs and fragile manual routines, and build the replacement so others can take it over.',
        deliverables: [
          'Pipelines and data models in the cloud (including Google Cloud and Azure)',
          'Performance and cost optimization of existing solutions',
          'Reporting that management actually makes decisions from',
        ],
        fit: 'For teams that need a senior data engineer for a period, part-time or full-time.',
      },
    ],
    deliverablesLabel: 'You get',
    engagement: {
      title: 'Ways of working',
      body: 'I work as a freelancer through MLN Data Consulting, either on a scoped engagement with a fixed deliverable or as an ongoing consultant. I work in both Danish and English, on-site in Copenhagen or remotely.',
    },
    tech: {
      title: 'Tools I typically work with',
      items: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Azure', 'Machine learning', 'LLMs and AI agents', 'Power BI'],
    },
  },

  cases: {
    meta: {
      title: 'Results',
      description:
        'How a value-based ranking at Copyright Agent found 72% of the cases with 25% of the scans, and what else turned up along the way.',
    },
    hero: {
      eyebrow: 'Results',
      title: 'One case, told honestly and with all the numbers.',
      lead: 'I would rather show one engagement in depth than ten in headlines. Here is what I found, what I did, and what has been proven so far.',
    },
    featured: {
      client: 'Copyright Agent',
      industry: 'Copyright · image recognition · SaaS',
      period: '2026 · ongoing',
      title: 'From random selection to almost 3× the cases per scan',
      sections: [
        {
          heading: 'The starting point',
          body: 'Copyright Agent helps image agencies and media companies find unlicensed use of their images. Everything starts with a scan: the company holds more than 60 million images and budgets roughly 13 million scans a month. Which images are scanned, and when, decides both how many cases partners receive and what it costs. Selection was driven by manually maintained schedules.',
          bullets: [] as string[],
        },
        {
          heading: 'What I found',
          body: 'Before changing anything, I mapped and measured the existing flow. Three things stood out:',
          bullets: [
            'A technical fault repeated the selection 2–4.5 times: ≈540,000 images a day against ≈250,000 scheduled. August ended 16% over the scan budget.',
            '72% of scans went to images without a single violation in the past year. The order images were picked in was no better than random.',
            'Partner targets played no part in the selection. Some partners were well behind, while others were scanned despite not having reviewed a case in over 90 days.',
          ],
        },
        {
          heading: 'What I did',
          body: 'First the foundations: I stopped the duplicate scans and made the selection itself fast. Then I built a model that ranks every image by expected value: the chance that a scan ends as a case with the partner, times what that case is worth. On top of that sits a daily plan that spends the budget by value while keeping the most important partners supplied, and a daily report showing who is behind and whether the bottleneck is scanning or the partner’s own review.',
          bullets: [] as string[],
        },
      ],
      resultsHeading: 'Results so far',
      results: [
        {
          value: '72% with 25%',
          label: 'The new ranking finds 72% of the cases partners received using 25% of the scans. The previous order found 25%.',
          status: 'tested',
        },
        {
          value: '+16%',
          label: 'Estimated gain in cases per scan in the full daily plan. The gain is smaller here because most of the budget goes to keeping the most important partners supplied. That is a deliberate business choice, not a weakness in the model.',
          status: 'tested',
        },
        {
          value: '80–106%',
          label: 'In a 21-day simulation, budgeted partners reach 80–106% of their monthly target, against 30–90% today, within the same scan budget.',
          status: 'tested',
        },
        {
          value: '46M → 683K',
          label: 'A nightly job no longer rewrites 46 million rows to change 683,000, and selection uses a fast lookup instead of reading through a 16 GB table.',
          status: 'measured',
        },
        {
          value: '≈5M/month',
          label: 'Fixing the duplicate scans brings volume within budget and frees about 5 million scans a month to be spent by value.',
          status: 'pending',
        },
      ],
      honesty: {
        heading: 'The honest math',
        body: 'The direct saving on scans is small compared with revenue. The real value is more, and more valuable, cases for the same money, and the most important partners kept supplied. I write this because it is true, and because an optimization that measures the wrong thing is not an optimization.',
      },
      tech: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Statistical modelling'],
    },
    testimonialHeading: 'What a colleague says',
    testimonialFull:
      'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times. I have seen Mathias excel with all levels of seniority at Copyright Agent, showing immense capabilities with project management, leadership consultation, and data analysis. […] There can be no doubt that Mathias is one of the most competent colleagues I’ve had the ability to work and learn from.',
    research: {
      eyebrow: 'Research',
      title: 'Can machine learning build a data warehouse?',
      body: 'My bachelor thesis at the Department of Computer Science, University of Copenhagen (2021), examined whether machine learning can analyze source-system metadata and automatically propose the structure of a data warehouse. The conclusion was nuanced: full automation did not hold up, but ML combined with a few simple human choices produced a usable foundation. I still draw on that experience when judging where AI can realistically pay off.',
    },
  },

  about: {
    meta: {
      title: 'About',
      description:
        'Mathias Lau Nielsen: computer scientist from the University of Copenhagen, senior data engineer and former manager. Freelancing through MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'About',
      title: 'I can’t help checking the math.',
      lead: 'I’m Mathias Lau Nielsen and I run MLN Data Consulting from Copenhagen. My specialty is optimization: finding where a system spends resources without getting anything for them, and then fixing it.',
    },
    story: [
      'I hold a computer science degree from the University of Copenhagen, where my bachelor thesis was about using machine learning to build data warehouses automatically. Since then I have worked with business intelligence at Viteco, as a data engineer at Copyright Agent and as a senior data engineer for Ase.',
      'Before computer science I was an assistant manager and management trainee in retail, responsible for budgets, sales targets and 12–18 employees, and I hold an academy degree in leadership and project management. It sounds like a detour, but it is the reason I think in operations and bottom line, and can explain a technical solution to a board without losing anyone along the way.',
      'When I’m not working I play the piano, train for triathlons and cook. All three, as it happens, are also about getting a little better every time.',
    ],
    principlesTitle: 'What you can count on',
    principles: [
      { title: 'Numbers with a source', body: 'Every number I present can be traced back to a query, an invoice or a report. Estimates are labelled as estimates.' },
      { title: 'Honest conclusions', body: 'If the gain is small, I say so. If the problem lies somewhere other than expected, I say that too.' },
      { title: 'Explained for humans', body: 'Management gets results in business language. Developers get documentation they can build on.' },
      { title: 'Built to hand over', body: 'I build so your team can take over. You should not depend on me once the engagement ends.' },
    ],
    timelineTitle: 'Background',
    timeline: [
      { period: 'Now', title: 'Freelance consultant', place: 'MLN Data Consulting', body: 'Optimization, AI implementation and data engineering for Copyright Agent and Ase, among others.' },
      { period: '', title: 'Senior Data Engineer', place: 'Ase', body: 'Data platform and data engineering for one of Denmark’s large unemployment insurance funds.' },
      { period: '', title: 'Data Engineer', place: 'Copyright Agent', body: 'Data, analysis and advice to management in an international copyright scale-up.' },
      { period: '2021', title: 'Business intelligence', place: 'Viteco', body: 'BI consultancy focused on activating clients’ data.' },
      { period: '2018–2021', title: 'BSc in Computer Science', place: 'University of Copenhagen', body: 'Thesis: automatic generation of data warehouse structures with machine learning.' },
      { period: '2016–2018', title: 'Assistant manager and management trainee', place: 'Q8', body: 'Managed 12–18 employees with budget and sales responsibility. Academy degree in leadership and project management.' },
    ],
  },

  contact: {
    meta: {
      title: 'Contact',
      description: 'Book a free intro call with Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s find out if there is something to gain.',
      lead: 'Write a few lines about where you see waste, slow processes or data you are not getting enough out of. I reply within one business day.',
    },
    direct: 'Or reach me directly',
    expectTitle: 'What happens next?',
    expect: [
      'We have a call of about 30 minutes, no strings attached.',
      'I tell you honestly whether I think there is a gain, and how big.',
      'If it makes sense, you get a short proposal with goal, scope and price.',
    ],
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      phone: 'Phone',
      message: 'What would you like optimized?',
      optional: 'optional',
      placeholder: 'E.g. our nightly data jobs have become slow and expensive, and we don’t know why …',
      submit: 'Send message',
      sending: 'Sending …',
      successTitle: 'Thanks for your message',
      successBody: 'I will get back to you within one business day.',
      again: 'Send another message',
      error: 'The message could not be sent. Please try again, or email me directly.',
      consent: 'By sending, you accept that I store your details in order to reply.',
      privacy: 'Privacy policy (in Danish)',
    },
  },

  footer: {
    tagline: 'Optimization with data and AI, proven in numbers.',
    pages: 'Pages',
    contact: 'Contact',
    blog: 'Blog (in Danish)',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
}
