// Danish copy. en.ts mirrors this shape exactly (typed as Copy).
// Every number on the site must be traceable: keep the status label honest
// ("measured", "tested", "pending") and update it when the status changes.

export type ProofStatus = 'measured' | 'tested' | 'pending'

export const da = {
  nav: {
    cases: 'Resultater',
    services: 'Ydelser',
    about: 'Om mig',
    contact: 'Kontakt',
    cta: 'Book en samtale',
    switchLabel: 'English',
  },

  statusLabels: {
    measured: 'Målt i drift',
    tested: 'Testet på historiske data',
    pending: 'Afventer release',
  } as Record<ProofStatus, string>,

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Optimering med data og AI, dokumenteret i tal',
      description:
        'Freelance dataingeniør med speciale i optimering. Jeg finder spildet i jeres systemer og processer, retter det med data engineering og AI, og dokumenterer effekten i tal, I selv kan efterprøve.',
    },
    hero: {
      eyebrow: 'MLN Data Consulting · København',
      titleA: 'Jeres data ved allerede,',
      titleB: 'hvor pengene forsvinder.',
      lead: 'Jeg er Mathias, dataingeniør med speciale i optimering. Jeg finder spildet i jeres systemer og processer, retter det med data engineering og AI, og dokumenterer effekten i tal, I selv kan efterprøve.',
      ctaPrimary: 'Book en uforpligtende samtale',
      ctaSecondary: 'Se resultaterne',
      chart: {
        kicker: 'Case · Copyright Agent',
        title: 'Andel af partnersager fundet med 25 % af scanningerne',
        before: 'Hidtidig udvælgelse',
        after: 'Ny værdibaseret prioritering',
        beforeValue: 25,
        afterValue: 72,
        percent: ' %',
        footnote: 'Testet på data fra juli–august 2026. Næsten 3× flere sager for den samme scanning.',
      },
    },
    proof: {
      eyebrow: 'Dokumenterede resultater',
      title: 'Tal frem for tillægsord.',
      lead: 'Alle tal herunder stammer fra ét igangværende optimeringsforløb, og hvert tal har en status, så I kan se, hvad der er målt, hvad der er testet, og hvad der venter på release.',
      items: [
        {
          value: '72 %',
          label: 'af sagerne fundet med kun 25 % af scanningerne',
          detail: 'Den hidtidige rækkefølge fandt 25 %, altså ikke bedre end tilfældig udvælgelse.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '2–4,5×',
          label: 'dobbeltarbejde fundet og sporet til én teknisk fejl',
          detail: 'Systemet valgte ≈540.000 billeder om dagen mod ≈250.000 planlagt. Ingen havde bedt om det.',
          status: 'measured' as ProofStatus,
        },
        {
          value: '−98,5 %',
          label: 'færre rækker omskrevet hver nat',
          detail: 'Et natligt job omskrev 46 mio. rækker for at ændre 683.000. Nu rører det kun det, der ændrer sig.',
          status: 'measured' as ProofStatus,
        },
        {
          value: '≈5 mio.',
          label: 'scanninger om måneden frigjort til det, der betaler sig',
          detail: 'Rettelsen af dobbeltscanningerne bringer forbruget tilbage inden for budget.',
          status: 'pending' as ProofStatus,
        },
      ],
    },
    method: {
      eyebrow: 'Sådan arbejder jeg',
      title: 'Ingen påstande uden baseline.',
      lead: 'Optimering uden måling er bare forandring. Derfor starter hvert forløb med at måle, og slutter med at bevise.',
      steps: [
        {
          title: 'Mål udgangspunktet',
          body: 'Før noget ændres, kortlægger jeg det nuværende flow og sætter tal på det: omkostninger, mængder, ventetider og fejl. Det er den baseline, alt senere måles imod.',
        },
        {
          title: 'Find spildet',
          body: 'Jeg leder efter det, ingen har bedt om: dobbeltarbejde, ressourcer brugt hvor de sjældent betaler sig, manuelle rutiner der ikke skalerer. Hvert fund får en pris.',
        },
        {
          title: 'Ret og automatisér',
          body: 'Jeg bygger løsningen selv, fra databasen til den færdige automatisering. Med AI og machine learning, hvor det betaler sig, og med almindelig solid ingeniørkunst, hvor det er nok.',
        },
        {
          title: 'Bevis effekten',
          body: 'Effekten dokumenteres mod baseline, sammenligneligt og med kilder. I får tal, der kan holde til et bestyrelsesmøde, også når gevinsten er mindre end håbet.',
        },
      ],
    },
    services: {
      eyebrow: 'Ydelser',
      title: 'Tre måder at komme i gang på.',
      more: 'Læs mere om ydelserne',
    },
    caseTeaser: {
      eyebrow: 'Udvalgt case',
      title: 'Copyright Agent: næsten 3× flere sager pr. scanning',
      body: 'Copyright Agent finder ulicenseret brug af pressebilleder på nettet. Forretningen starter med scanninger af over 60 mio. billeder, og hvilke billeder der scannes, afgør både omsætning og omkostninger. Jeg fandt ud af, at udvælgelsen ikke var bedre end tilfældig, og byggede en, der er.',
      cta: 'Læs hele casen',
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Tidligere kollega hos Copyright Agent · anbefaling på LinkedIn',
    },
    about: {
      eyebrow: 'Om mig',
      title: 'Ingeniør i hænderne, forretning i hovedet.',
      body: 'Jeg er uddannet datalog fra Københavns Universitet og har arbejdet med data hos bl.a. Viteco, Copyright Agent og Ase. Før det var jeg leder i detailhandlen med ansvar for budget og op til 18 medarbejdere. Derfor oversætter jeg gerne mellem udviklere, drift og direktion, og derfor ender mine projekter i tal, ledelsen kan bruge.',
      cta: 'Mere om min baggrund',
    },
    cta: {
      title: 'Hvad koster jeres spild om måneden?',
      body: 'Tag en uforpligtende samtale på 30 minutter. I fortæller, hvor det gør ondt. Jeg fortæller ærligt, om jeg tror, der er noget at hente, og hvordan vi i givet fald måler det.',
      primary: 'Book en samtale',
      secondary: 'Skriv til mig',
    },
  },

  services: {
    meta: {
      title: 'Ydelser',
      description:
        'Optimeringsanalyse, AI-implementering og data engineering. Tre afgrænsede måder at arbejde sammen på, alle med målbar effekt som mål.',
    },
    hero: {
      eyebrow: 'Ydelser',
      title: 'Afgrænsede forløb med målbar effekt.',
      lead: 'Jeg arbejder bedst, når målet kan udtrykkes i et tal: lavere omkostning, kortere ventetid, flere sager pr. krone. Her er de tre typiske måder at starte på.',
    },
    items: [
      {
        key: 'analysis',
        name: 'Optimeringsanalyse',
        tagline: 'Find ud af, hvor pengene forsvinder, før I investerer i en løsning.',
        body: 'Et kort, afgrænset forløb, hvor jeg kortlægger et system eller en proces, sætter tal på det nuværende flow og finder de steder, hvor ressourcerne ikke betaler sig hjem.',
        deliverables: [
          'Kortlægning af det nuværende flow med baseline-tal',
          'Prioriteret liste over fund, hver med en anslået værdi',
          'Plan for de første rettelser: hvad, hvor svært, hvad det giver',
        ],
        fit: 'Passer til jer, der har en fornemmelse af spild, men mangler overblik og tal.',
      },
      {
        key: 'ai',
        name: 'AI, der betaler sig',
        tagline: 'AI og machine learning dér, hvor det flytter et tal, ikke dér, hvor det lyder godt.',
        body: 'Jeg implementerer AI-løsninger fra idé til drift: prioritering og forudsigelse med machine learning, automatisering med sprogmodeller og AI-agenter, og AI-assisteret udvikling, der får mere ud af jeres team. Altid med en måling af, om det virkede.',
        deliverables: [
          'Vurdering af, hvor AI reelt kan betale sig hos jer',
          'Løsning i drift, integreret i jeres eksisterende systemer',
          'Før/efter-måling, så effekten kan dokumenteres',
        ],
        fit: 'Passer til jer, der vil have AI til at skabe resultater, ikke endnu et pilotprojekt.',
      },
      {
        key: 'engineering',
        name: 'Data engineering',
        tagline: 'Et datafundament, der er hurtigt, billigt i drift og til at stole på.',
        body: 'Datapipelines, data warehouses og databaser, der performer. Jeg rydder op i langsomme forespørgsler, dyre natlige jobs og skrøbelige manuelle rutiner, og bygger det nye, så andre kan overtage det.',
        deliverables: [
          'Pipelines og datamodeller i cloud (bl.a. Google Cloud og Azure)',
          'Performance- og omkostningsoptimering af eksisterende løsninger',
          'Rapportering, ledelsen rent faktisk træffer beslutninger ud fra',
        ],
        fit: 'Passer til jer, der har brug for en senior dataingeniør i en periode, på deltid eller fuld tid.',
      },
    ],
    deliverablesLabel: 'I får',
    engagement: {
      title: 'Samarbejdsformer',
      body: 'Jeg arbejder som freelancer via MLN Data Consulting, enten på et afgrænset forløb med fast leverance eller som løbende tilknyttet konsulent. Jeg arbejder både på dansk og engelsk, on-site i København eller remote.',
    },
    tech: {
      title: 'Værktøjer, jeg typisk arbejder med',
      items: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Azure', 'Machine learning', 'LLM’er og AI-agenter', 'Power BI'],
    },
  },

  cases: {
    meta: {
      title: 'Resultater',
      description:
        'Se hvordan en værdibaseret prioritering hos Copyright Agent fandt 72 % af sagerne med 25 % af scanningerne, og hvad der ellers dukkede op undervejs.',
    },
    hero: {
      eyebrow: 'Resultater',
      title: 'Én case, fortalt ærligt og med alle tal.',
      lead: 'Jeg viser hellere ét forløb i dybden end ti i overskrifter. Her er, hvad jeg fandt, hvad jeg gjorde, og hvad der er bevist indtil nu.',
    },
    featured: {
      client: 'Copyright Agent',
      industry: 'Ophavsret · billedgenkendelse · SaaS',
      period: '2026 · igangværende',
      title: 'Fra tilfældig udvælgelse til næsten 3× flere sager pr. scanning',
      sections: [
        {
          heading: 'Udgangspunktet',
          body: 'Copyright Agent hjælper billedbureauer og medier med at finde ulicenseret brug af deres billeder. Alt starter med en scanning: virksomheden har over 60 mio. billeder og et budget på ca. 13 mio. scanninger om måneden. Hvilke billeder der scannes, og hvornår, afgør både hvor mange sager partnerne får, og hvad det koster. Udvælgelsen blev styret af manuelt vedligeholdte planer.',
          bullets: [] as string[],
        },
        {
          heading: 'Hvad jeg fandt',
          body: 'Før jeg ændrede noget, kortlagde og målte jeg det eksisterende flow. Tre ting stod frem:',
          bullets: [
            'En teknisk fejl gentog udvælgelsen 2–4,5 gange: ≈540.000 billeder om dagen mod ≈250.000 planlagt. August endte 16 % over scanningsbudgettet.',
            '72 % af scanningerne gik til billeder uden en eneste krænkelse det seneste år. Rækkefølgen, billederne blev valgt i, var ikke bedre end tilfældig.',
            'Partnernes mål indgik slet ikke i udvælgelsen. Nogle partnere var markant bagud, mens andre blev scannet uden at have behandlet sager i over 90 dage.',
          ],
        },
        {
          heading: 'Hvad jeg gjorde',
          body: 'Først fundamentet: jeg stoppede dobbeltscanningerne og gjorde selve udvælgelsen hurtig. Derefter byggede jeg en model, der rangerer hvert billede efter forventet værdi: sandsynligheden for, at en scanning ender som en sag hos partneren, gange hvad den sag er værd. Oven på det ligger en daglig plan, der bruger budgettet efter værdi og samtidig holder de vigtigste partnere forsynet, og en daglig rapport, der viser, hvem der er bagud, og om flaskehalsen er scanning eller partnerens egen behandling.',
          bullets: [] as string[],
        },
      ],
      resultsHeading: 'Resultater indtil nu',
      results: [
        {
          value: '72 % med 25 %',
          label: 'Den nye rangering finder 72 % af de sager, partnerne modtog, med 25 % af scanningerne. Den hidtidige rækkefølge fandt 25 %.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '+16 %',
          label: 'Estimeret gevinst i sager pr. scanning i den fulde daglige plan. Gevinsten er mindre her, fordi det meste af budgettet går til at holde de vigtigste partnere forsynet. Det er et bevidst forretningsvalg, ikke en svaghed i modellen.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '80–106 %',
          label: 'I en 21-dages simulering når de budgetterede partnere 80–106 % af deres månedlige mål, mod 30–90 % i dag, inden for det samme scanningsbudget.',
          status: 'tested' as ProofStatus,
        },
        {
          value: '46 mio. → 683.000',
          label: 'Et natligt job omskriver ikke længere 46 mio. rækker for at ændre 683.000, og udvælgelsen bruger et hurtigt opslag i stedet for at gennemlæse en tabel på 16 GB.',
          status: 'measured' as ProofStatus,
        },
        {
          value: '≈5 mio./md.',
          label: 'Rettelsen af dobbeltscanningerne bringer forbruget inden for budget og frigør ca. 5 mio. scanninger om måneden, der kan bruges efter værdi.',
          status: 'pending' as ProofStatus,
        },
      ],
      honesty: {
        heading: 'Det ærlige regnestykke',
        body: 'Den direkte besparelse på scanninger er lille i forhold til omsætningen. Den reelle værdi ligger i flere og mere værdifulde sager for de samme penge, og i at de vigtigste partnere bliver forsynet. Det skriver jeg, fordi det er sandt, og fordi en optimering, der måler det forkerte, ikke er en optimering.',
      },
      tech: ['Python', 'SQL', 'PostgreSQL', 'BigQuery', 'Google Cloud', 'Statistisk modellering'],
    },
    testimonialHeading: 'Hvad en kollega siger',
    testimonialFull:
      'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times. I have seen Mathias excel with all levels of seniority at Copyright Agent, showing immense capabilities with project management, leadership consultation, and data analysis. […] There can be no doubt that Mathias is one of the most competent colleagues I’ve had the ability to work and learn from.',
    research: {
      eyebrow: 'Forskning',
      title: 'Kan machine learning bygge et data warehouse?',
      body: 'Mit bachelorprojekt på Datalogisk Institut, Københavns Universitet (2021), undersøgte, om machine learning kan analysere kildesystemers metadata og automatisk foreslå strukturen i et data warehouse. Konklusionen var nuanceret: fuld automatik holdt ikke, men ML kombineret med få, enkle valg fra et menneske gav et brugbart fundament. Den erfaring bruger jeg stadig, når jeg vurderer, hvor AI reelt kan betale sig.',
    },
  },

  about: {
    meta: {
      title: 'Om mig',
      description:
        'Mathias Lau Nielsen: datalog fra Københavns Universitet, senior dataingeniør og tidligere leder. Freelance via MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Om mig',
      title: 'Jeg kan ikke lade være med at regne efter.',
      lead: 'Jeg hedder Mathias Lau Nielsen og driver MLN Data Consulting fra København. Mit speciale er optimering: at finde ud af, hvor et system bruger ressourcer uden at få noget for dem, og så rette det.',
    },
    story: [
      'Jeg er uddannet datalog fra Københavns Universitet, hvor mit bachelorprojekt handlede om at bruge machine learning til automatisk at opbygge data warehouses. Siden har jeg arbejdet med business intelligence hos Viteco, som dataingeniør hos Copyright Agent og som senior dataingeniør for Ase.',
      'Før datalogien var jeg souschef og ledertrainee i detailhandlen med ansvar for budget, salgsmål og 12–18 medarbejdere, og jeg har en akademiuddannelse i ledelse og projektledelse. Det lyder som en omvej, men det er grunden til, at jeg tænker i drift og bundlinje, og at jeg kan forklare en teknisk løsning for en direktion uden at miste nogen undervejs.',
      'Når jeg ikke arbejder, spiller jeg klaver, træner triatlon og laver mad. Alle tre handler i øvrigt også om at blive lidt bedre hver gang.',
    ],
    principlesTitle: 'Det kan I regne med',
    principles: [
      { title: 'Tal med kilde', body: 'Hvert tal, jeg præsenterer, kan spores tilbage til en forespørgsel, en faktura eller en rapport. Skøn er mærket som skøn.' },
      { title: 'Ærlige konklusioner', body: 'Hvis gevinsten er lille, siger jeg det. Hvis problemet ligger et andet sted end forventet, siger jeg også det.' },
      { title: 'Forklaret for mennesker', body: 'Ledelsen får resultater i forretningssprog. Udviklerne får dokumentation, de kan arbejde videre med.' },
      { title: 'Bygget til overdragelse', body: 'Jeg bygger, så jeres team kan overtage. I skal ikke være afhængige af mig, når forløbet slutter.' },
    ],
    timelineTitle: 'Baggrund',
    timeline: [
      { period: 'Nu', title: 'Freelance konsulent', place: 'MLN Data Consulting', body: 'Optimering, AI-implementering og data engineering for bl.a. Copyright Agent og Ase.' },
      { period: '', title: 'Senior Data Engineer', place: 'Ase', body: 'Dataplatform og data engineering for en af Danmarks store a-kasser.' },
      { period: '', title: 'Data Engineer', place: 'Copyright Agent', body: 'Data, analyse og rådgivning af ledelsen i en international scale-up inden for ophavsret.' },
      { period: '2021', title: 'Business intelligence', place: 'Viteco', body: 'BI-konsulenthus med fokus på at aktivere kundernes data.' },
      { period: '2018–2021', title: 'BSc i datalogi', place: 'Københavns Universitet', body: 'Bachelorprojekt: automatisk generering af data warehouse-strukturer med machine learning.' },
      { period: '2016–2018', title: 'Souschef og ledertrainee', place: 'Q8', body: 'Ledelse af 12–18 medarbejdere, budget- og salgsansvar. Akademiuddannelse i ledelse og projektledelse.' },
    ],
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description: 'Book en uforpligtende samtale med Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Lad os finde ud af, om der er noget at hente.',
      lead: 'Skriv et par linjer om, hvor I oplever spild, langsomme processer eller data, I ikke får nok ud af. Jeg svarer inden for én arbejdsdag.',
    },
    direct: 'Eller kontakt mig direkte',
    expectTitle: 'Hvad sker der så?',
    expect: [
      'Vi tager en samtale på ca. 30 minutter, uden binding.',
      'Jeg siger ærligt, om jeg tror, der er en gevinst, og hvor stor.',
      'Hvis det giver mening, får I et kort oplæg med mål, omfang og pris.',
    ],
    form: {
      name: 'Navn',
      email: 'E-mail',
      company: 'Virksomhed',
      phone: 'Telefon',
      message: 'Hvad vil I gerne have optimeret?',
      optional: 'valgfrit',
      placeholder: 'Fx: Vores natlige datajobs er blevet dyre og langsomme, og vi ved ikke hvorfor …',
      submit: 'Send besked',
      sending: 'Sender …',
      successTitle: 'Tak for din besked',
      successBody: 'Jeg vender tilbage inden for én arbejdsdag.',
      again: 'Send en ny besked',
      error: 'Beskeden kunne ikke sendes. Prøv igen, eller skriv direkte til mig på mail.',
      consent: 'Ved at sende accepterer du, at jeg gemmer dine oplysninger for at kunne svare dig.',
      privacy: 'Privatlivspolitik',
    },
  },

  footer: {
    tagline: 'Optimering med data og AI, dokumenteret i tal.',
    pages: 'Sider',
    contact: 'Kontakt',
    blog: 'Blog',
    privacy: 'Privatlivspolitik',
    rights: 'Alle rettigheder forbeholdes.',
  },
}

export type Copy = typeof da
