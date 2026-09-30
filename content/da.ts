import type { Copy } from './en'

// Danish copy. Must match the shape of en.ts.
export const da: Copy = {
  nav: {
    data: 'Dataplatform',
    ai: 'AI-kodning',
    about: 'Om mig',
    contact: 'Kontakt',
    cta: 'Kontakt mig',
    call: 'Ring',
    switchLabel: 'English',
  },

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Ekspertise i dataplatforme og AI-kodning',
      description:
        'Freelance data- og AI-ingeniør, der har haft det tekniske ansvar for hele dataplatformen i to virksomheder. Jeg bygger og retter dataplatforme og sætter AI-kodning op, der leverer.',
    },
    hero: {
      eyebrow: 'Freelance data- og AI-ingeniør · København',
      title: 'Dataplatforme, der holder.',
      title2: 'AI-kodning, der leverer.',
      lead: 'Jeg hedder Mathias. I to virksomheder har jeg haft det tekniske ansvar for hele dataplatformen, fra rådata til de rapporter, forretningen styrer efter. Virksomheder hyrer mig til at bygge eller rette deres, eller til at få reelt output ud af AI-assisteret udvikling. Ofte begge dele.',
      ctaPrimary: 'Få svar inden for en dag',
      ctaSecondary: 'Se hvordan I hyrer mig',
      availability: 'Tager nye opgaver ind',
      visual: {
        platformLabel: 'Dataplatform',
        flow: ['Kilder', 'Pipelines', 'Warehouse', 'Rapporter'],
        aiLabel: 'AI-kodning',
        terminal: [
          { kind: 'cmd', text: 'agent "tilføj inkrementel load for ordrer"' },
          { kind: 'ok', text: 'læste teamets konventioner' },
          { kind: 'ok', text: 'skrev pipeline og tests' },
          { kind: 'ok', text: 'åbnede pull request til review' },
        ],
      },
    },
    offers: {
      eyebrow: 'To ting, jeg bliver hyret til',
      items: [
        {
          key: 'data',
          name: 'Ekspertise i dataplatforme',
          body: 'Pipelines, data warehouse, datamodeller, rapportering og machine learning ovenpå: designet, bygget eller redet ud. Til virksomheder, hvis data er vokset fra deres setup, eller som aldrig har haft et ordentligt.',
          points: ['Nye platforme bygget fra bunden', 'Langsomme, dyre eller skrøbelige platforme rettet', 'En senior ingeniør som del af jeres team'],
          cta: 'Arbejde med dataplatforme',
        },
        {
          key: 'ai',
          name: 'Ekspertise i AI-kodning',
          body: 'AI-kodeagenter sat ordentligt op i jeres kodebase, med de konventioner, rammer og forbindelser, der gør en demo til dagligt output, og et team, der ved, hvordan de bruges.',
          points: ['Opsætning af agenter i jeres repositories', 'Rammer, rettigheder og review-flow', 'Hands-on træning af jeres udviklere'],
          cta: 'Arbejde med AI-kodning',
        },
      ],
    },
    buy: {
      eyebrow: 'Sådan hyrer I mig',
      title: 'Køb timer, eller køb et resultat.',
      hours: {
        name: 'Timer',
        body: 'En senior ingeniør i jeres team, deltid eller fuld tid, så længe I har brug for det. Den mest almindelige måde, virksomheder arbejder med mig på.',
        points: ['Timepris, aftalt på forhånd', 'Start småt og skalér op', 'Ingen binding: stop, når arbejdet er gjort'],
        cta: 'Spørg til min kalender',
        topic: 'hours',
      },
      productsLabel: 'Fast omfang, fast pris',
      products: [
        {
          name: 'Gennemgang af dataplatform',
          body: 'Jeg gennemgår jeres platform og fortæller, hvad den koster, hvor den er skrøbelig, og hvad der bør rettes først. I får en skriftlig, prioriteret rapport og en gennemgang.',
          meta: '5–8 arbejdsdage over 2–3 uger',
          cta: 'Bed om et tilbud',
          topic: 'review',
        },
        {
          name: 'Opsætning af AI-kodning',
          body: 'Kodeagenter sat op i ét team eller én kodebase: konventioner, rammer, forbindelser til jeres systemer og hands-on træning, så jeres udviklere bliver ved med at bruge det.',
          meta: '6–10 arbejdsdage over 3–4 uger',
          cta: 'Bed om et tilbud',
          topic: 'setup',
        },
      ],
    },
    faq: {
      title: 'Før I skriver',
      items: [
        { q: 'Hvad koster det?', a: 'Timer afregnes til en timepris, produkter til en fast pris. Begge dele aftales, før arbejdet går i gang. I får et tal efter en kort første samtale.' },
        { q: 'Hvor hurtigt kan du starte?', a: 'Det afhænger af, hvad jeg har kørende. Spørg, så får I min aktuelle kalender med det samme.' },
        { q: 'Hvor arbejder du?', a: 'On-site i København, remote alle andre steder. På dansk eller engelsk.' },
        { q: 'Hvordan er det kontraktligt?', a: 'Gennem mit firma, MLN Data Consulting (CVR 45700577). Jeres standardkonsulentkontrakt og NDA er fint.' },
        { q: 'Hvad hvis du ikke er den rette?', a: 'Så siger jeg det i den første samtale, før det har kostet jer noget.' },
      ],
    },
    contactSection: {
      title: 'Fortæl mig, hvad I har brug for.',
      body: 'Tre linjer er nok. Jeg svarer inden for én arbejdsdag med, hvordan jeg ville gribe det an, og hvad det kræver.',
      points: ['Gratis og uforpligtende', 'Et klart svar på, om jeg kan hjælpe', 'En pris, før arbejdet går i gang'],
    },
    proof: {
      eyebrow: 'Resultater',
      title: 'Sådan ser det ud i tal.',
      lead: 'Fra nyligt kundearbejde på en platform med over 60 mio. poster.',
      items: [
        {
          value: '72 % fra 25 %',
          label: 'En rangeringsmodel fandt 72 % af de værdifulde sager med en fjerdedel af behandlingsbudgettet. Den gamle udvælgelse fandt 25 %.',
          note: 'Testet på to måneders historiske data',
        },
        {
          value: '−98,5 %',
          label: 'Et natligt job omskrev 46 mio. rækker for at ændre 683.000. Nu rører det kun det, der er ændret.',
          note: 'Målt i drift',
        },
        {
          value: '2–4,5×',
          label: 'Dobbeltarbejde sporet til én fejl, som ingen havde opdaget, fordi intet så ud til at være i stykker.',
          note: 'Målt i drift',
        },
      ],
    },
    why: {
      eyebrow: 'Hvorfor mig',
      title: 'Begge halvdele af opgaven.',
      items: [
        { title: 'Jeg har haft ansvaret for hele platformen', body: 'Teknisk ansvar for dataplatformen i to virksomheder: arkitektur, pipelines, data warehouse og rapportering. Ikke kun et hjørne af den.' },
        { title: 'Jeg bygger det selv', body: 'Med hænderne i koden, ikke et slide-deck. Jeg har bygget alle lag: pipelines, data warehouse, machine learning-modeller, rapporter og forecasts.' },
        { title: 'Jeg måler før og efter', body: 'Først en baseline, så effekten af arbejdet kan vises og ikke bare påstås.' },
        { title: 'Jeg kan forklare det', body: 'For udviklere på deres sprog og for ledelsen på deres. Forecasts, jeg har bygget, er indgået i virksomhedsbudgetter, og jeg har selv været leder.' },
        { title: 'AI-kodning er min egen arbejdsform', body: 'Jeg laver det meste af mit eget ingeniørarbejde med kodeagenter, og jeg har omlagt en dataplatform i drift, så agenter kan arbejde i den.' },
        { title: 'Jeg bygger til overdragelse', body: 'Konventionelt, dokumenteret og ejet af jeres team, når jeg går.' },
      ],
    },
    experience: {
      label: 'Erfaring fra',
      items: ['Ase', 'Copyright Agent', 'Viteco', 'Københavns Universitet (BSc i datalogi)'],
    },
    testimonial: {
      quote:
        'Mathias must be one of the most intelligent Data Engineers I’ve ever had the pleasure to work with. He has a remarkable talent for drilling down the most complex data projects into understandable and actionable insights and maintains a focus on problem-solving at all times.',
      name: 'Hannah Louise L.',
      role: 'Tidligere kollega · anbefaling på LinkedIn',
    },
    cta: {
      title: 'Fortæl mig, hvad I skal have bygget eller rettet.',
      body: 'Et par linjer er nok. Er jeg den rette, siger jeg, hvordan jeg ville gribe det an. Hvis ikke, siger jeg det.',
      primary: 'Kontakt mig',
      secondary: 'Send en mail',
    },
  },

  data: {
    meta: {
      title: 'Ekspertise i dataplatforme',
      description:
        'Design, opbygning og reparation af dataplatforme: pipelines, data warehouse, datamodeller, rapportering, machine learning, omkostninger og performance. Freelance data- og AI-ingeniør.',
    },
    hero: {
      eyebrow: 'Ekspertise i dataplatforme',
      title: 'En dataplatform, folk stoler på, til en pris, der giver mening.',
      lead: 'Jeg designer og bygger dataplatforme, og jeg retter dem, der er blevet langsomme, dyre eller upålidelige. Jeg har haft det tekniske ansvar for hele platformen i to virksomheder.',
    },
    signsTitle: 'Hvornår virksomheder ringer',
    signs: [
      'Tallene afhænger af, hvilken rapport man åbner.',
      'Cloud-regningen vokser hurtigere end forretningen.',
      'De natlige jobs når ikke længere at blive færdige.',
      'Alt afhænger af én person og en samling scripts.',
      'Der er data overalt, men ingen fælles måde at måle noget på.',
    ],
    whatTitle: 'Hvad jeg laver',
    what: [
      { title: 'Arkitektur og opbygning', body: 'Dataindlæsning, pipelines, data warehouse og datamodeller, sat op så platformen kan vokse uden at skulle bygges om.' },
      { title: 'Omkostninger og performance', body: 'Jeg finder de forespørgsler og jobs, der laver langt mere arbejde end nødvendigt, og retter dem. Det meste spild ligger som regel en håndfuld steder.' },
      { title: 'Fundament for rapportering', body: 'Aftalte definitioner, konsistente tal og et rapporteringslag, ledelsen kan drive virksomheden efter.' },
      { title: 'Driftssikkerhed', body: 'Tests, overvågning og datakvalitetstjek, så problemer bliver fundet af platformen og ikke af økonomidirektøren.' },
      { title: 'Machine learning i drift', body: 'Modeller, der træffer en beslutning inde i platformen, fx hvilke poster der er værd at behandle, og som bliver målt mod det, de afløste.' },
      { title: 'Forecasting', body: 'Omsætningsforecasts, der kombinerer flere modeller og er detaljerede nok til at budgettere efter, både top-down og bottom-up.' },
    ],
    engagementsTitle: 'Sådan kan vi arbejde sammen',
    engagements: [
      { title: 'Gennemgang af dataplatform', body: 'En kort vurdering af jeres platform: hvad den koster, hvor den er skrøbelig, og hvad der bør rettes først.', topic: 'review' },
      { title: 'Projekt', body: 'En afgrænset opbygning eller rettelse med et aftalt resultat.' },
      { title: 'Timer', body: 'Jeg indgår i jeres team på deltid eller fuld tid i en længere periode. Det foretrækker jeg, og det er dér, de bedste resultater kommer fra.', topic: 'hours' },
    ],
    stackTitle: 'Teknologi',
    stack: ['SQL', 'Python', 'BigQuery', 'Google Cloud', 'Microsoft Fabric', 'Azure', 'SQL Server', 'PostgreSQL', 'Datamodellering', 'Orkestrering', 'Machine learning', 'Forecasting', 'BI og rapportering'],
    note: '',
    otherOffer: { label: 'Også', text: 'Ekspertise i AI-kodning' },
  },

  ai: {
    meta: {
      title: 'Ekspertise i AI-kodning',
      description:
        'AI-kodeagenter sat ordentligt op i jeres kodebase: konventioner, rammer, forbindelser til jeres systemer og et trænet team. Freelance data- og AI-ingeniør.',
    },
    hero: {
      eyebrow: 'Ekspertise i AI-kodning',
      title: 'Fra “vi har prøvet Copilot” til AI, der leverer rigtigt arbejde.',
      lead: 'De fleste teams har værktøjerne og ikke meget at vise for det. Forskellen ligger i opsætningen, og det er den, jeg laver.',
    },
    signsTitle: 'Hvornår virksomheder ringer',
    signs: [
      'Udviklerne har AI-værktøjer, men outputtet har ikke rigtig ændret sig.',
      'Agenten skriver kode, der ignorerer, hvordan jeres kodebase fungerer.',
      'Ingen ved helt, hvad agenten må røre ved.',
      'Resultaterne svinger voldsomt fra udvikler til udvikler.',
      'Ledelsen vil vide, om det betaler sig.',
    ],
    whatTitle: 'Hvad jeg laver',
    what: [
      { title: 'Opsætning i jeres repositories', body: 'Projektinstruktioner og konventioner, agenten læser hver gang, så den skriver kode, som jeres team gør.' },
      { title: 'Rammer', body: 'Rettigheder, review-flow og regler for, hvad en agent må gøre selv, og hvad der kræver et menneske.' },
      { title: 'Forbindelser til jeres systemer', body: 'Sikker adgang til det, rigtigt arbejde afhænger af: databaser, sagsstyring, dokumentation, deployment.' },
      { title: 'Træning', body: 'Hands-on sessioner med jeres udviklere på rigtige opgaver fra jeres backlog, indtil det er en del af deres arbejdsgang.' },
    ],
    engagementsTitle: 'Sådan kan vi arbejde sammen',
    engagements: [
      { title: 'Opsætning af AI-kodning', body: 'Jeg sætter agentbaseret kodning op i ét team eller én kodebase og overdrager en fungerende arbejdsform.', topic: 'setup' },
      { title: 'Udrulning', body: 'Det samme på tværs af flere teams, med fælles konventioner og måling af effekten.' },
      { title: 'Levering', body: 'Jeg bygger jeres projekt selv med denne opsætning og efterlader både resultatet og opsætningen.' },
    ],
    stackTitle: 'Teknologi',
    stack: ['Claude Code', 'AI-kodeagenter', 'MCP-integrationer', 'Projektkonventioner', 'Git- og pull request-flows', 'Python', 'TypeScript', 'SQL'],
    note: 'Jeg har omlagt en dataplatform i drift, så kodeagenter kan arbejde i den, og jeg laver det meste af mit eget ingeniørarbejde på den måde. Dette website er bygget med den opsætning, der er beskrevet her.',
    otherOffer: { label: 'Også', text: 'Ekspertise i dataplatforme' },
  },

  about: {
    meta: {
      title: 'Om mig',
      description:
        'Mathias Lau Nielsen: freelance data- og AI-ingeniør i København. Har arbejdet med data siden 2020 og haft det tekniske ansvar for hele dataplatformen i to virksomheder.',
    },
    hero: {
      eyebrow: 'Om mig',
      title: 'Mathias Lau Nielsen',
      lead: 'Freelance data- og AI-ingeniør i København. Jeg arbejder gennem mit eget firma, MLN Data Consulting.',
    },
    story: [
      'Jeg har arbejdet med data siden 2020, og i to virksomheder har jeg haft det tekniske ansvar for hele dataplatformen: fra de rå data kommer ind, til de rapporter, forretningen styrer efter.',
      'Jeg begyndte hos konsulenthuset Viteco, mens jeg læste datalogi på Københavns Universitet. Der byggede jeg software, som automatiserede arbejdet med data warehouses: den aflæste kildesystemernes struktur, indlæste og transformerede data og håndterede stamdata. Mit bachelorprojekt, skrevet sammen med Viteco, brugte machine learning til at finde strukturen i kildedata og udlede warehouse-modellen af den.',
      'Hos softwarevirksomheden Copyright Agent designede og byggede jeg dataplatformen: data warehouset, pipelines fra de vigtigste kildesystemer og al rapportering. Oven på den satte jeg machine learning-modeller i drift og byggede de omsætningsforecasts, der blev brugt i virksomhedens budgetlægning. Jeg begyndte som ansat og arbejder stadig for dem som konsulent.',
      'Hos Ase, en stor dansk medlemsorganisation, fik jeg det tekniske ansvar for dataplatformen og dens arkitektur. Jeg planlagde flytningen fra SQL Server til Microsoft Fabric, lagde koden om til Python-pakker, som AI-kodeagenter kan arbejde i, og har været mentor for data- og analyseteamet, også i de tekniske prioriteringer.',
      'Ved siden af platformsarbejdet er jeg gået i dybden med AI-assisteret udvikling. Jeg laver det meste af mit eget ingeniørarbejde med kodeagenter og har opbygget de konventioner og rammer, der gør det pålideligt. Hos både Ase og Copyright Agent har jeg brugt AI til at designe og forbedre rapportering. At sætte det op for andre er blevet den anden halvdel af det, jeg laver.',
      'Før datalogien ledede jeg et team på 12–18 medarbejdere i detailhandlen med ansvar for budget og salgsmål, så jeg ved, hvordan det er at drive noget efter tal, man skal kunne stole på.',
    ],
    factsTitle: 'Kort fortalt',
    facts: [
      { label: 'Base', value: 'København. Remote eller on-site.' },
      { label: 'Sprog', value: 'Dansk og engelsk' },
      { label: 'Dækker', value: 'Data engineering, machine learning, rapportering og AI-kodning' },
      { label: 'Foretrækker', value: 'Længere forløb, deltid eller fuld tid' },
      { label: 'Arbejder ikke med', value: 'Våben, sprængstoffer, udvinding af fossile brændsler' },
    ],
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description: 'Kontakt Mathias Lau Nielsen, MLN Data Consulting.',
    },
    hero: {
      eyebrow: 'Kontakt',
      title: 'Fortæl mig, hvad I har brug for.',
      lead: 'Tre linjer er nok. Jeg svarer inden for én arbejdsdag.',
    },
    direct: 'Eller kontakt mig direkte',
    expectTitle: 'Hvad sker der så',
    expect: [
      'En kort samtale, så jeg forstår problemet.',
      'Jeg siger, om og hvordan jeg kan hjælpe.',
      'Giver det mening, aftaler vi omfang og vilkår.',
    ],
    form: {
      name: 'Navn',
      email: 'E-mail',
      company: 'Virksomhed',
      phone: 'Telefon',
      message: 'Hvad har I brug for?',
      optional: 'valgfrit',
      placeholder: 'Hvad skal I have bygget, rettet eller sat op?',
      topicLabel: 'Jeg er interesseret i',
      topics: [
        { value: 'data', label: 'Dataplatform' },
        { value: 'ai', label: 'AI-kodning' },
        { value: 'hours', label: 'Timer' },
        { value: 'review', label: 'Gennemgang af dataplatform' },
        { value: 'setup', label: 'Opsætning af AI-kodning' },
        { value: 'other', label: 'Ved det ikke endnu' },
      ],
      submit: 'Send forespørgsel',
      sending: 'Sender …',
      successTitle: 'Tak',
      successBody: 'Jeg svarer inden for én arbejdsdag.',
      again: 'Send en ny besked',
      error: 'Beskeden kunne ikke sendes. Prøv igen, eller skriv direkte til mig på mail.',
      consent: 'Ved at sende accepterer du, at jeg gemmer dine oplysninger for at kunne svare dig.',
      privacy: 'Privatlivspolitik',
    },
  },

  footer: {
    tagline: 'Ekspertise i dataplatforme og AI-kodning.',
    pages: 'Sider',
    contact: 'Kontakt',
    blog: 'Blog',
    privacy: 'Privatlivspolitik',
    rights: 'Alle rettigheder forbeholdes.',
  },
}
