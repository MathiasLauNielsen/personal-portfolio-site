import type { Copy } from './en'

// Danish copy. Must match the shape of en.ts.
export const da: Copy = {
  nav: {
    data: 'Dataplatform',
    ai: 'AI-kodning',
    about: 'Om mig',
    contact: 'Kontakt',
    cta: 'Kontakt mig',
    switchLabel: 'English',
  },

  home: {
    meta: {
      title: 'Mathias Lau Nielsen | Ekspertise i dataplatforme og AI-kodning',
      description:
        'Freelance senior dataingeniør. Jeg bygger og retter dataplatforme, og jeg sætter AI-assisteret softwareudvikling op, så teams får mere fra hånden.',
    },
    hero: {
      eyebrow: 'Freelance senior dataingeniør · København',
      title: 'Dataplatforme, der holder.',
      title2: 'AI-kodning, der leverer.',
      lead: 'Jeg hedder Mathias. Virksomheder hyrer mig til én af to ting: at bygge eller rette deres dataplatform, eller at få reelt output ud af AI-assisteret udvikling. Ofte begge dele.',
      ctaPrimary: 'Kontakt mig',
      ctaSecondary: 'Om mig',
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
          body: 'Pipelines, data warehouse, datamodeller og rapportering: designet, bygget eller redet ud. Til virksomheder, hvis data er vokset fra deres setup, eller som aldrig har haft et ordentligt.',
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
        { title: 'Jeg bygger det selv', body: 'Senior ingeniør med hænderne i koden, ikke et slide-deck. Fra databasens indre til rapporten på direktørens bord.' },
        { title: 'Jeg måler før og efter', body: 'Først en baseline, så effekten af arbejdet kan vises og ikke bare påstås.' },
        { title: 'Jeg kan forklare det', body: 'For udviklere på deres sprog og for ledelsen på deres. Jeg har selv været leder.' },
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
        'Design, opbygning og reparation af dataplatforme: pipelines, data warehouse, datamodeller, rapportering, omkostninger og performance. Freelance senior dataingeniør.',
    },
    hero: {
      eyebrow: 'Ekspertise i dataplatforme',
      title: 'En dataplatform, folk stoler på, til en pris, der giver mening.',
      lead: 'Jeg designer og bygger dataplatforme, og jeg retter dem, der er blevet langsomme, dyre eller upålidelige.',
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
    ],
    engagementsTitle: 'Sådan kan vi arbejde sammen',
    engagements: [
      { title: 'Gennemgang', body: 'En kort vurdering af jeres platform: hvad den koster, hvor den er skrøbelig, og hvad der bør rettes først.' },
      { title: 'Projekt', body: 'En afgrænset opbygning eller rettelse med et aftalt resultat.' },
      { title: 'Tilknyttet', body: 'Jeg indgår i jeres team på deltid eller fuld tid i en længere periode. Det foretrækker jeg, og det er dér, de bedste resultater kommer fra.' },
    ],
    stackTitle: 'Teknologi',
    stack: ['SQL', 'Python', 'BigQuery', 'Google Cloud', 'Azure', 'PostgreSQL', 'Datamodellering', 'Orkestrering', 'BI og rapportering'],
    note: '',
    otherOffer: { label: 'Også', text: 'Ekspertise i AI-kodning' },
  },

  ai: {
    meta: {
      title: 'Ekspertise i AI-kodning',
      description:
        'AI-kodeagenter sat ordentligt op i jeres kodebase: konventioner, rammer, forbindelser til jeres systemer og et trænet team. Freelance senior ingeniør.',
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
      { title: 'Opsætning', body: 'Jeg sætter agentbaseret kodning op i ét team eller én kodebase og overdrager en fungerende arbejdsform.' },
      { title: 'Udrulning', body: 'Det samme på tværs af flere teams, med fælles konventioner og måling af effekten.' },
      { title: 'Levering', body: 'Jeg bygger jeres projekt selv med denne opsætning og efterlader både resultatet og opsætningen.' },
    ],
    stackTitle: 'Teknologi',
    stack: ['Claude Code', 'AI-kodeagenter', 'MCP-integrationer', 'Projektkonventioner', 'Git- og pull request-flows', 'Python', 'TypeScript', 'SQL'],
    note: 'Dette website er bygget med den opsætning, der er beskrevet her.',
    otherOffer: { label: 'Også', text: 'Ekspertise i dataplatforme' },
  },

  about: {
    meta: {
      title: 'Om mig',
      description:
        'Mathias Lau Nielsen: freelance senior dataingeniør i København og datalog fra Københavns Universitet.',
    },
    hero: {
      eyebrow: 'Om mig',
      title: 'Mathias Lau Nielsen',
      lead: 'Freelance senior dataingeniør i København. Jeg arbejder gennem mit eget firma, MLN Data Consulting.',
    },
    story: [
      'Jeg er datalog fra Københavns Universitet og har brugt min karriere på data: business intelligence hos konsulenthuset Viteco, data engineering og analyse hos softwarevirksomheden Copyright Agent og senior data engineering for Ase, en stor dansk medlemsorganisation.',
      'Ved siden af platformsarbejdet er jeg gået i dybden med AI-assisteret udvikling. Jeg laver det meste af mit eget ingeniørarbejde med kodeagenter og har opbygget de konventioner og rammer, der gør det pålideligt. At sætte det op for andre er blevet den anden halvdel af det, jeg laver.',
      'Før datalogien ledede jeg et team på 12–18 medarbejdere i detailhandlen med ansvar for budget og salgsmål, så jeg ved, hvordan det er at drive noget efter tal, man skal kunne stole på.',
    ],
    factsTitle: 'Kort fortalt',
    facts: [
      { label: 'Base', value: 'København. Remote eller on-site.' },
      { label: 'Sprog', value: 'Dansk og engelsk' },
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
      lead: 'Et par linjer er nok. Jeg svarer som regel inden for en dag eller to.',
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
      message: 'Besked',
      optional: 'valgfrit',
      placeholder: 'Hvad skal I have bygget, rettet eller sat op?',
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
    tagline: 'Ekspertise i dataplatforme og AI-kodning.',
    pages: 'Sider',
    contact: 'Kontakt',
    blog: 'Blog',
    privacy: 'Privatlivspolitik',
    rights: 'Alle rettigheder forbeholdes.',
  },
}
