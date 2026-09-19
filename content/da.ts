import type { Copy } from './en'

// Danish copy. Must match the shape of en.ts.
export const da: Copy = {
  nav: {
    cases: 'Resultater',
    services: 'Ydelser',
    about: 'Om mig',
    contact: 'Kontakt',
    cta: 'Kontakt mig',
    switchLabel: 'English',
  },

  statusLabels: {
    measured: 'Målt i drift',
    tested: 'Testet på historiske data',
    pending: 'Afventer release',
  },

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Freelance data- og AI-konsulent',
      description:
        'Senior dataingeniør for mellemstore virksomheder: rapportering, I kan stole på, datasystemer, der er billigere i drift, og AI dér, hvor det betaler sig.',
    },
    hero: {
      eyebrow: 'Freelance data- og AI-konsulent · København',
      titleA: 'Rapportering, I kan stole på.',
      titleB: 'Systemer, der er billigere i drift.',
      lead: 'Jeg er Mathias, senior dataingeniør. Jeg hjælper mellemstore virksomheder med at få tal, de stoler på, nedbringe hvad deres datasystemer koster, og bruge AI dér, hvor det betaler sig.',
      ctaPrimary: 'Kontakt mig',
      ctaSecondary: 'Se resultater',
      chart: {
        kicker: 'Kunderesultat · Copyright Agent',
        title: 'Andel af sager fundet med 25 % af scanningerne',
        before: 'Hidtidig udvælgelse',
        after: 'Ny værdibaseret prioritering',
        beforeValue: 25,
        afterValue: 72,
        percent: ' %',
        footnote: 'Et automatiseret system, der afgør, hvilke af over 60 mio. billeder der skal scannes. Testet på to måneders historiske data.',
      },
    },
    areas: {
      eyebrow: 'Hvad jeg hjælper med',
      title: 'Tre problemer, jeg typisk bliver hyret til.',
      items: [
        {
          key: 'reporting',
          title: 'Rapportering og fundamentet under den',
          body: 'Tal, der ikke stemmer mellem rapporter, månedstal, ingen helt stoler på, dashboards, ingen åbner. Løsningen er sjældent endnu et dashboard. Jeg får styr på data nedenunder, aftaler med ledelsen, hvad der skal måles, og bygger rapporteringen oven på det.',
        },
        {
          key: 'cost',
          title: 'Omkostninger og performance',
          body: 'Cloud-regninger, der vokser hurtigere end forretningen, natlige jobs, der tager timer, forespørgsler, der timer ud. Jeg finder det, der driver omkostningen, og retter det, som regel uden at skifte platform.',
        },
        {
          key: 'ai',
          title: 'AI og automatisering',
          body: 'Opsætning af AI, så et team reelt når mere, og automatiserede systemer, der træffer rutinebeslutninger bedre end den manuelle proces gjorde. Med en måling af, om det virkede.',
        },
      ],
      more: 'Mere om, hvordan jeg arbejder',
    },
    generalist: {
      eyebrow: 'Hvorfor én person',
      title: 'De fleste dataproblemer bliver ikke i én kasse.',
      body: [
        'Rapporten er forkert, fordi pipelinen er skrøbelig, fordi kildesystemet blev ændret, fordi ingen ejer definitionen. Fordeler man det på tre specialister, retter de hver deres del, mens problemet består.',
        'Jeg arbejder på tværs af hele kæden: kildesystemer, pipelines, data warehouse, modeller og rapporten på direktørens bord. I får én senior person, der står på mål for resultatet, og som kan forklare det for både udviklerne og bestyrelsen.',
      ],
    },
    proof: {
      eyebrow: 'Resultater',
      title: 'Fra nyligt kundearbejde.',
      lead: 'Alle fra ét forløb. Ved hvert tal står der, om det er målt i drift eller testet på historiske data.',
      items: [
        {
          value: '72 %',
          label: 'af sagerne fundet med 25 % af scanningerne',
          detail: 'Den hidtidige udvælgelse fandt 25 %, altså ikke bedre end tilfældig.',
          status: 'tested',
        },
        {
          value: '2–4,5×',
          label: 'dobbeltarbejde, sporet til én fejl',
          detail: 'Et system gentog sit eget arbejde flere gange om dagen. Ingen havde opdaget det, fordi intet så ud til at være i stykker.',
          status: 'measured',
        },
        {
          value: '−98,5 %',
          label: 'rækker omskrevet af et natligt job',
          detail: 'Det omskrev 46 mio. rækker for at ændre 683.000. Nu rører det kun det, der ændrer sig.',
          status: 'measured',
        },
      ],
      cta: 'Læs casen',
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Tidligere kollega hos Copyright Agent · anbefaling på LinkedIn',
    },
    about: {
      eyebrow: 'Om mig',
      title: 'Senior dataingeniør, freelance.',
      body: 'Datalog fra Københavns Universitet. Jeg har arbejdet med data hos Viteco, Copyright Agent og Ase og driver mit eget firma, MLN Data Consulting. Jeg foretrækker lange forløb, hvor jeg lærer forretningen at kende, for det er dér, resultaterne kommer fra.',
      cta: 'Mere om mig',
    },
    cta: {
      title: 'Har I et dataproblem, der bliver ved med at komme igen?',
      body: 'Fortæl mig om det. Kan jeg hjælpe, siger jeg hvordan. Kan jeg ikke, siger jeg også det.',
      primary: 'Kontakt mig',
      secondary: 'Send en mail',
    },
  },

  services: {
    meta: {
      title: 'Ydelser',
      description:
        'Rapportering og datafundament, omkostninger og performance samt AI-opsætning. Primært som længere forløb for mellemstore virksomheder.',
    },
    hero: {
      eyebrow: 'Ydelser',
      title: 'Hvad jeg laver, og hvordan vi ville arbejde sammen.',
      lead: 'Jeg er generalist med vilje. Det her er de tre slags opgaver, jeg typisk bliver hentet ind til, og de overlapper ofte.',
    },
    items: [
      {
        key: 'reporting',
        name: 'Rapportering og datafundament',
        tagline: 'Tal, ledelsen kan drive virksomheden efter.',
        body: 'Jeg starter med, hvad ledelsen skal kunne beslutte, arbejder baglæns til, hvad der skal måles, og derfra til de data, der skal være pålidelige, for at det virker. Så bygger jeg det: pipelines, et data warehouse eller modellag, og rapporter ovenpå.',
        deliverables: [
          'En rapporteringsstrategi: hvad måles, hvordan er det defineret, hvem ejer det',
          'Pipelines og datamodeller, der gør tallene konsistente',
          'Rapporter og dashboards, der bliver brugt',
        ],
        fit: 'Typisk udgangspunkt: “vores tal stemmer ikke” eller “vi ved ikke, hvad vi skal måle”.',
      },
      {
        key: 'cost',
        name: 'Omkostninger og performance',
        tagline: 'Find det, der driver regningen, og ret det.',
        body: 'Jeg måler, hvor pengene og tiden går hen i jeres cloud- og datasystemer, finder de jobs og forespørgsler, der laver langt mere arbejde end nødvendigt, og retter dem. De fleste besparelser ligger en håndfuld steder.',
        deliverables: [
          'Et overblik over, hvad jeres datasystemer koster, og hvorfor',
          'Rettelser af de dyre og langsomme dele',
          'Før- og eftertal',
        ],
        fit: 'Typisk udgangspunkt: en cloud-regning, ingen kan forklare, eller jobs, der ikke længere når at blive færdige om natten.',
      },
      {
        key: 'ai',
        name: 'AI og automatisering',
        tagline: 'AI dér, hvor det betaler sig.',
        body: 'To slags opgaver. Opsætning af AI-værktøjer, så et udviklings- eller datateam når mere, med de rammer og konventioner, der gør det sikkert. Og automatiserede systemer, ofte med machine learning, der overtager rutinebeslutninger og træffer dem bedre.',
        deliverables: [
          'En fungerende AI-opsætning til jeres team, inkl. regler og konventioner',
          'Automatiserede beslutningssystemer, integreret med det, I allerede kører',
          'En måling af effekten',
        ],
        fit: 'Typisk udgangspunkt: “vi burde bruge AI, men vi ved ikke helt hvor”.',
      },
    ],
    deliverablesLabel: 'Det får I',
    engagement: {
      title: 'Samarbejdsformer',
      body: 'Jeg foretrækker længere forløb, deltid eller fuld tid, hvor jeg bliver en del af teamet. Jeg tager også afgrænsede projekter. Jeg arbejder på dansk og engelsk, remote eller on-site i København. Pris aftales fra opgave til opgave.',
      ethics: 'Jeg tager ikke opgaver inden for våben, sprængstoffer eller udvinding af fossile brændsler.',
    },
    tech: {
      title: 'Værktøjer, jeg arbejder med',
      items: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Azure', 'Machine learning', 'LLM’er og AI-agenter'],
    },
  },

  cases: {
    meta: {
      title: 'Resultater',
      description:
        'Hvordan en værdibaseret prioritering hos Copyright Agent fandt 72 % af sagerne med 25 % af scanningerne.',
    },
    hero: {
      eyebrow: 'Resultater',
      title: 'Én case, med tallene.',
      lead: 'Det forløb, jeg kan beskrive mest detaljeret.',
    },
    featured: {
      client: 'Copyright Agent',
      industry: 'Håndhævelse af ophavsret · SaaS',
      period: '2026 · igangværende',
      title: 'Hvilke af 60 mio. billeder skal scannes?',
      sections: [
        {
          heading: 'Situationen',
          body: 'Copyright Agent finder ulicenseret brug af partnernes billeder på nettet. Virksomheden har over 60 mio. billeder og scanner ca. 13 mio. om måneden. Hvilke billeder der scannes, afgør, hvor mange sager partnerne får, og dermed omsætningen. Udvælgelsen kørte efter manuelt vedligeholdte planer.',
          bullets: [],
        },
        {
          heading: 'Hvad jeg fandt',
          body: 'Jeg kortlagde og målte det eksisterende flow, før jeg ændrede noget.',
          bullets: [
            'En fejl fik systemet til at gentage sin udvælgelse 2–4,5 gange om dagen, så scanningsmængden endte 16 % over budget.',
            '72 % af scanningerne gik til billeder uden en eneste krænkelse det seneste år. Rækkefølgen var ikke bedre end tilfældig.',
            'Partnernes mål indgik ikke i udvælgelsen, så nogle partnere fik for lidt, mens andre blev scannet uden behov.',
          ],
        },
        {
          heading: 'Hvad jeg byggede',
          body: 'Først fundamentet: stop dobbeltscanningerne og gør udvælgelsen hurtig. Derefter en model, der rangerer hvert billede efter forventet værdi, en daglig scanningsplan, der bruger budgettet efter den rangering og samtidig holder de prioriterede partnere forsynet, og en daglig rapport, der viser, hvilke partnere der er bagud, og hvorfor.',
          bullets: [],
        },
      ],
      resultsHeading: 'Resultater indtil nu',
      results: [
        {
          value: '72 % med 25 %',
          label: 'Rangeringen finder 72 % af de sager, partnerne modtog, med 25 % af scanningerne. Den hidtidige rækkefølge fandt 25 %.',
          status: 'tested',
        },
        {
          value: '80–106 %',
          label: 'I en 21-dages simulering når de prioriterede partnere 80–106 % af deres månedlige mål, mod 30–90 % i dag, med samme scanningsbudget.',
          status: 'tested',
        },
        {
          value: '−98,5 %',
          label: 'Et natligt job omskriver ikke længere 46 mio. rækker for at ændre 683.000, og udvælgelsen bruger et hurtigt opslag i stedet for at læse en tabel på 16 GB.',
          status: 'measured',
        },
        {
          value: '≈5 mio./md.',
          label: 'Rettelsen af dobbeltscanningerne bringer mængden tilbage inden for budget og frigør ca. 5 mio. scanninger om måneden.',
          status: 'pending',
        },
      ],
      note: 'Den direkte besparelse på scanninger er beskeden. Værdien ligger i flere sager for de samme penge.',
      tech: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud'],
    },
    testimonialHeading: 'Fra en kollega',
    testimonialFull:
      'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times. I have seen Mathias excel with all levels of seniority at Copyright Agent, showing immense capabilities with project management, leadership consultation, and data analysis.',
  },

  about: {
    meta: {
      title: 'Om mig',
      description:
        'Mathias Lau Nielsen: senior dataingeniør og datalog fra Københavns Universitet. Freelance via MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Om mig',
      title: 'Mathias Lau Nielsen',
      lead: 'Senior dataingeniør i København. Freelance via MLN Data Consulting.',
    },
    story: [
      'Jeg er datalog fra Københavns Universitet, hvor mit bachelorprojekt handlede om at bruge machine learning til at generere data warehouse-strukturer. Siden har jeg arbejdet med business intelligence hos Viteco, med data engineering og analyse hos Copyright Agent og som senior dataingeniør for Ase.',
      'Mit arbejde ender ofte samme sted: et system eller en proces, der koster mere, end den burde, eller tjener mindre, end den kunne, og en måde at vise forskellen på, når det er rettet. Jeg er hjemme overalt mellem databasen og bestyrelseslokalet og bruger meget af min tid på at oversætte mellem de to.',
      'Før datalogien ledede jeg et team på 12–18 medarbejdere i detailhandlen med ansvar for budget og salgsmål. Det lærte mig, hvordan en forretning faktisk drives, og det viser sig at betyde noget, når man bygger dens rapportering.',
    ],
    principlesTitle: 'Sådan arbejder jeg',
    principles: [
      { title: 'Mål først', body: 'Jeg sætter tal på udgangspunktet, før noget ændres, så effekten kan vises bagefter.' },
      { title: 'Sig det ligeud', body: 'Er gevinsten lille, eller ligger problemet et andet sted end forventet, hører I det fra mig tidligt.' },
      { title: 'Byg til overdragelse', body: 'Dokumenteret, konventionelt og ejet af jeres team, når jeg går.' },
    ],
    timelineTitle: 'Erfaring',
    timeline: [
      { title: 'MLN Data Consulting', body: 'Eget firma. Freelance data engineering, optimering og AI-opsætning.' },
      { title: 'Ase', body: 'Senior dataingeniør.' },
      { title: 'Copyright Agent', body: 'Data engineering, analyse og rådgivning af ledelsen.' },
      { title: 'Viteco', body: 'BI-konsulenthus.' },
      { title: 'Københavns Universitet', body: 'BSc i datalogi, 2021.' },
    ],
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description: 'Kontakt Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Fortæl mig, hvad I står med.',
      lead: 'Et par linjer er nok. Jeg svarer som regel inden for en dag eller to.',
    },
    direct: 'Eller kontakt mig direkte',
    expectTitle: 'Hvad sker der så',
    expect: [
      'Vi tager en kort samtale, så jeg forstår problemet.',
      'Jeg siger, om og hvordan jeg kan hjælpe.',
      'Giver det mening, aftaler vi omfang og vilkår.',
    ],
    form: {
      name: 'Navn',
      email: 'E-mail',
      company: 'Virksomhed',
      phone: 'Telefon',
      message: 'Besked',
      optional: 'valgfrit',
      placeholder: 'Fx: Vores månedsrapportering tager en uge at lave, og der bliver stadig sat spørgsmålstegn ved tallene …',
      submit: 'Send',
      sending: 'Sender …',
      successTitle: 'Tak',
      successBody: 'Jeg vender tilbage snarest.',
      again: 'Send en ny besked',
      error: 'Beskeden kunne ikke sendes. Prøv igen, eller skriv direkte til mig på mail.',
      consent: 'Ved at sende accepterer du, at jeg gemmer dine oplysninger for at kunne svare dig.',
      privacy: 'Privatlivspolitik',
    },
  },

  footer: {
    tagline: 'Freelance data engineering, optimering og AI.',
    pages: 'Sider',
    contact: 'Kontakt',
    blog: 'Blog',
    privacy: 'Privatlivspolitik',
    rights: 'Alle rettigheder forbeholdes.',
  },
}
