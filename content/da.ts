import type { Copy } from './en'
import type { CaseStudy, ProofItem } from './types'

// Danish copy. Must match the shape of en.ts.

const proofItems: ProofItem[] = [
  {
    value: '72 % fra 25 %',
    label: 'En rangeringsmodel fandt 72 % af de værdifulde sager med en fjerdedel af behandlingsbudgettet. Den gamle udvælgelse fandt 25 %.',
    note: 'Testet på to måneders historiske data',
    chart: {
      caption: 'Værdifulde sager fundet med en fjerdedel af budgettet',
      max: 100,
      rows: [
        { label: 'Gammel udvælgelse', display: '25 %', value: 25 },
        { label: 'Rangeringsmodel', display: '72 %', value: 72, highlight: true },
      ],
    },
  },
  {
    value: '−98,5 %',
    label: 'Et natligt job omskrev 46 mio. rækker for at ændre 683.000. Nu rører det kun det, der er ændret.',
    note: 'Målt i drift',
    chart: {
      caption: 'Rækker skrevet pr. nat',
      max: 46_000_000,
      rows: [
        { label: 'Før', display: '46 mio.', value: 46_000_000 },
        { label: 'Nu, kun det ændrede', display: '683.000', value: 683_000, highlight: true },
      ],
    },
  },
  {
    value: '2–4,5×',
    label: 'Dobbeltarbejde sporet til én fejl, som ingen havde opdaget, fordi intet så ud til at være i stykker.',
    note: 'Målt i drift',
    chart: {
      caption: 'Udført arbejde i forhold til nødvendigt arbejde',
      max: 4.5,
      rows: [
        { label: 'Nødvendigt', display: '1×', value: 1, highlight: true },
        { label: 'Faktisk udført', display: '2–4,5×', value: 2, upTo: 4.5 },
      ],
    },
  },
]

// The excerpts are quoted from the repository, which is written in English, so they stay in English.
const studies: CaseStudy[] = [
  {
    key: 'agent',
    offer: 'ai',
    topic: 'setup',
    meta: {
      title: 'Case: et firmas IT drevet af en kodeagent',
      description:
        'Sådan driver en kodeagent et firmas website, database og hosting: reglerne, hvem der bestemmer hvad, hvad der gik galt, og et offentligt repository.',
    },
    hero: {
      eyebrow: 'Case · AI-kodning',
      title: 'Mit firmas IT drives af en kodeagent.',
      lead: 'Dette website, dets database, dets hosting og firmaets dokumentation drives af en kodeagent, der arbejder inden for regler, jeg har skrevet. Repositoriet er offentligt, så det, der står på denne side, kan efterprøves dér.',
      repoCta: 'Åbn repositoriet',
      contactCta: 'Spørg til opsætning af AI-kodning',
    },
    card: {
      body: 'Det site, I læser nu, dets database, hosting og dokumentation drives af en kodeagent inden for regler, jeg har skrevet. Repositoriet er offentligt, så det kan efterprøves.',
      points: [
        '11 pull requests i drift på lanceringsdagen',
        'Hvad agenten må selv, og hvad der kræver mig',
        'Hvad der gik galt, og den regel, det førte til',
      ],
    },
    figures: [
      { value: '11', label: 'pull requests lagt i drift på lanceringsdagen, 30. september 2026. Hver af dem havde først et godkendt preview-build.' },
      { value: '13', label: 'wiki-artikler skrevet samme dag, sideløbende med koden: hvad der findes, hvad der blev besluttet og hvorfor.' },
      { value: '28 min', label: 'hvor domænet ikke kunne slås op den dag, efter en DNS-flytning slog fejl. Beskrevet nedenfor, med den regel, det førte til.' },
    ],
    blocks: [
      {
        kind: 'items',
        title: 'Hvad agenten får udleveret',
        lead: 'Intet her afhænger af en særlig model. Det afhænger af fire ting i repositoriet.',
        items: [
          {
            title: 'Projektinstruktioner',
            body: 'Én fil, agenten læser i starten af hver session: hvordan koden er organiseret, hvor teksterne ligger, de faste navne på ydelserne, og hvordan jeg skriver. Den indeholder reglen om, at ingen fakta, tal eller titler må opfindes.',
          },
          {
            title: 'En firmawiki',
            body: 'Hvad der findes, hvordan det er sat op, hvad der blev besluttet og hvorfor, og hvad der stadig er åbent. Kilder gemmes først og redigeres aldrig; artiklerne skrives ud fra dem. Agenten læser wikien, før den handler, og opdaterer den i samme arbejdsgang.',
          },
          {
            title: 'Forbindelser',
            body: 'Kommandolinjeadgang til kodehosting, hostingudbyderen og databasen, knyttet til dette projekt alene. De rettigheder, der gælder for mit kundearbejde, holdes adskilt og bliver ikke rørt.',
          },
          {
            title: 'Tjek, der kan fejle',
            body: 'Hver pull request får et produktionsbuild og en preview-udgave. Et script tjekker wikien og afviser pull requesten ved et brudt link, en manglende kilde eller et forældet indeks.',
          },
        ],
      },
      {
        kind: 'split',
        title: 'Hvem bestemmer hvad',
        lead: 'Grænsen står skrevet i repositoriet, og jeg er den eneste, der flytter den.',
        columns: [
          {
            title: 'Agenten, på egen hånd',
            items: [
              'Ændringer i sitets kode, tekster og design',
              'Databasemigreringer',
              'Domæne-, miljø- og deploy-kommandoer hos hostingudbyderen',
              'Hele pull requesten: branch, tjek, merge og kontrol af driften bagefter',
              'At holde wikien opdateret',
            ],
          },
          {
            title: 'Kræver mig',
            items: [
              'Konti, agenten ikke kan nå: domæneregistrator, e-mail, betaling',
              'Hemmeligheder. Jeg lægger dem selv ind; agenten kender deres navne, aldrig deres værdier',
              'Alt destruktivt, fx at slette data eller nedlægge en tjeneste, hver gang',
              'Beslutninger om penge, kunder og hvad firmaet sælger',
              'Enhver ny oplysning om mig eller mine kunder på sitet',
            ],
          },
        ],
        notes: [
          'Et automatisk sikkerhedstjek forhindrer agenten i at læse adgangsoplysninger og i at ændre sine egne rettigheder, også når den bliver bedt om det i chatten.',
          'Jeg gennemgår ikke ændringerne før merge her. Det er mit eget firma, og risikoen er min. I et team hører den grænse til et andet sted, og at beslutte hvor er en del af opsætningen.',
        ],
      },
      {
        kind: 'steps',
        title: 'Sådan når en ændring i drift',
        lead: 'De samme seks trin hver gang, uanset om ændringen er én sætning eller en ny del af sitet.',
        steps: [
          { title: 'Jeg beder om det', body: 'I almindeligt sprog, som jeg ville bede en kollega.' },
          { title: 'Den læser', body: 'Projektinstruktionerne og wiki-siderne for det område, den skal til at røre ved.' },
          { title: 'Den bygger', body: 'På en branch, og åbner derefter en pull request, der siger, hvad der er ændret og hvorfor.' },
          { title: 'Tjek kører', body: 'Produktionsbuild, preview-udgave og wiki-tjekket. Agenten merger kun, når de er bestået.' },
          { title: 'Den merger', body: 'Ændringen er i drift efter cirka et minut.' },
          { title: 'Den kontrollerer', body: 'Den tjekker det levende site og noterer derefter ændringen i wikien.' },
        ],
      },
      {
        kind: 'timeline',
        title: 'Lanceringsdagen, 30. september 2026',
        lead: 'Alle pull requests, der blev merget den dag, i dansk tid. Hver linje linker til selve ændringen.',
        entries: [
          { time: '15.52', pr: 4, text: 'Det nye site går i drift på engelsk og dansk, med adminområdet begrænset til en liste over godkendte brugere' },
          { time: '16.18', pr: 5, text: 'Databasen genopbygget fra sine migreringsfiler, og arbejdsgangen dokumenteret' },
          { time: '16.43', pr: 6, text: 'Firmawikien sat op; www viderestiller til domænet uden www' },
          { time: '16.50', pr: 7, text: 'Wikien opdateret, da www-viderestillingen var bekræftet i drift' },
          { time: '17.11', pr: 8, text: 'Research om solokonsulenters websites omsat til en forbedringsplan' },
          { time: '17.18', pr: 9, text: 'Hændelsesnotat: hvorfor sitet så ud til at være nede fra ét netværk' },
          { time: '17.47', pr: 10, text: 'Logo, resultater på ydelsessiderne, ét link-preview pr. side' },
          { time: '19.00', pr: 11, text: 'Positionering skrevet om: ansvarsområde i stedet for en senioritetstitel' },
          { time: '19.32', pr: 12, text: 'Machine learning fremhævet som styrke; gennemgang af synlighed i søgning' },
          { time: '20.10', pr: 13, text: 'Besøgsstatistik uden cookies i adminområdet' },
          { time: '20.32', pr: 14, text: 'Om mig-siden: uddannelsen som en oplysning, ikke som ramme for historien' },
        ],
      },
      {
        kind: 'text',
        title: 'Hvad der gik galt',
        paragraphs: [
          'På lanceringsdagen flyttede vi domænets navneservere til hostingudbyderen. Udbyderen oprettede aldrig en zone for domænet, så fra 15.59 til 16.27 kunne intet slås op for nogen uden et gemt svar. Det gjaldt også indgående e-mail, som blev forsinket, ikke tabt. Vi skiftede tilbage.',
          'Agenten havde noteret, hvad hver navneserver svarede, mens det stod på. Samme dag blev de noter til en runbook med ét trin, der ville have fanget problemet: spørg den nye udbyders navneservere direkte, før der skiftes, og stop, hvis svaret er tomt eller afvist.',
          'Senere samme eftermiddag så sitet ud til at være nede fra mit eget netværk, mens det virkede alle andre steder. En resolver havde gemt et tomt svar under reparationen. Det blev til endnu et punkt: tjek udefra, før noget ændres.',
          'Ting går galt med eller uden en agent. Det, opsætningen tilføjer, er, at læren bliver skrevet ned samme dag og læst før næste ændring.',
        ],
      },
      {
        kind: 'excerpts',
        title: 'Fire linjer fra repositoriet',
        lead: 'Gengivet ordret. Repositoriet er skrevet på engelsk.',
        items: [
          {
            source: 'CLAUDE.md',
            text: 'No hype and no invented facts, clients, numbers or job titles; leave things out rather than guess. Every figure comes from real work and says whether it was measured in production or tested on historical data.',
            note: 'Reglen for alt, der står på dette site.',
          },
          {
            source: 'wiki/raw/2026-09-30-brand-and-quick-wins.md',
            text: 'Held back: an AI coding FAQ about safety and payoff, because it would state new claims about Mathias\'s methods in his voice.',
            note: 'Det, reglen gjorde på lanceringsdagen: agenten udelod et planlagt punkt i stedet for at skrive påstande på mine vegne.',
          },
          {
            source: 'CLAUDE.md',
            text: 'Stop before `main` only when Mathias has to do something specific first, and say what.',
            note: 'Hvor langt agenten går alene, og hvornår den skal stoppe.',
          },
          {
            source: 'wiki/references/runbook-dns-changes.md',
            text: 'Query the new provider\'s nameserver directly and compare with the old one, record by record. A "refused" answer or an empty answer means stop.',
            note: 'Trinnet, der kom til efter DNS-fejlen.',
          },
        ],
      },
    ],
    closing: {
      title: 'De samme dele, i jeres kodebase',
      body: 'Det er det, jeg sætter op for et udviklingsteam: instruktioner, agenten læser hver gang, en nedskrevet grænse mellem det, den må gøre selv, og det, der kræver et menneske, tjek, der kan afvise en pull request, og et sted, hvor beslutninger og hændelser bliver noteret. Hvor grænsen ligger, afhænger af jeres systemer og jeres risiko.',
    },
  },
]

export const da: Copy = {
  nav: {
    data: 'Dataplatform',
    ai: 'AI-kodning',
    cases: 'Cases',
    about: 'Om mig',
    contact: 'Kontakt',
    cta: 'Kontakt mig',
    call: 'Ring',
    switchLabel: 'English',
  },

  home: {
    meta: {
      title: 'Freelance data engineer i København | Mathias Lau Nielsen',
      description:
        'Freelance data- og AI-ingeniør i København, ansvarlig for hele dataplatformen i to virksomheder. Jeg bygger og retter dataplatforme og sætter AI-kodning op.',
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
      more: 'Se cases',
      items: proofItems,
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
      items: ['Ase', 'Copyright Agent', 'Viteco'],
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
      title: 'Dataplatform-konsulent i København',
      description:
        'Freelance dataplatform-konsulent: pipelines, data warehouse, rapportering, machine learning, BigQuery, Fabric. Byg, ret eller gennemgang, timer eller fast pris.',
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
      'I ved, hvad I gerne vil forudsige, og ingen har bygget det.',
    ],
    whatTitle: 'Hvad jeg laver',
    what: [
      { title: 'Arkitektur og opbygning', body: 'Dataindlæsning, pipelines, data warehouse og datamodeller, sat op så platformen kan vokse uden at skulle bygges om.' },
      { title: 'Omkostninger og performance', body: 'Jeg finder de forespørgsler og jobs, der laver langt mere arbejde end nødvendigt, og retter dem. Det meste spild ligger som regel en håndfuld steder.' },
      { title: 'Fundament for rapportering', body: 'Aftalte definitioner, konsistente tal og et rapporteringslag, ledelsen kan drive virksomheden efter.' },
      { title: 'Driftssikkerhed', body: 'Tests, overvågning og datakvalitetstjek, så problemer bliver fundet af platformen og ikke af økonomidirektøren.' },
      { title: 'Machine learning i drift', body: 'Modeller, der kører inde i platformen og bliver målt mod det, de afløste. Jeg har sat modeller i drift, der forudsiger omsætning, indgående opkald, medlemsbevægelser, churn, ledighed, og hvilke poster der er værd at behandle.' },
      { title: 'Forecasting', body: 'Omsætningsforecasts, der kombinerer flere modeller og er detaljerede nok til at budgettere efter, både top-down og bottom-up.' },
    ],
    engagementsTitle: 'Sådan kan vi arbejde sammen',
    engagements: [
      { title: 'Gennemgang af dataplatform', body: 'En kort vurdering af jeres platform: hvad den koster, hvor den er skrøbelig, og hvad der bør rettes først.', topic: 'review' },
      { title: 'Projekt', body: 'En afgrænset opbygning, rettelse eller første forudsigelsesmodel med et aftalt resultat.' },
      { title: 'Timer', body: 'Jeg indgår i jeres team på deltid eller fuld tid i en længere periode. Det foretrækker jeg, og det er dér, de bedste resultater kommer fra.', topic: 'hours' },
    ],
    stackTitle: 'Teknologi',
    stack: ['SQL', 'Python', 'BigQuery', 'Google Cloud', 'Microsoft Fabric', 'Azure', 'SQL Server', 'PostgreSQL', 'Datamodellering', 'Orkestrering', 'Machine learning', 'Forecasting', 'BI og rapportering'],
    note: '',
    otherOffer: { label: 'Også', text: 'Ekspertise i AI-kodning' },
  },

  ai: {
    meta: {
      title: 'Opsætning af AI-kodning i jeres team',
      description:
        'Claude Code og andre kodeagenter sat op i jeres kodebase: konventioner, rammer, forbindelser til jeres systemer og hands-on træning af jeres udviklere.',
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
      title: 'Om mig: freelance data- og AI-ingeniør',
      description:
        'Mathias Lau Nielsen, freelance data- og AI-ingeniør i København. Data siden 2020, teknisk ansvar for hele dataplatformen i to virksomheder.',
    },
    hero: {
      eyebrow: 'Om mig',
      title: 'Mathias Lau Nielsen',
      lead: 'Freelance data- og AI-ingeniør i København. Jeg bygger og retter dataplatforme (BigQuery, Google Cloud, Microsoft Fabric) og sætter AI-kodeagenter som Claude Code op for udviklingsteams. Jeg arbejder gennem mit eget firma, MLN Data Consulting.',
    },
    story: [
      'Jeg har arbejdet med data siden 2020, og i to virksomheder har jeg haft det tekniske ansvar for hele dataplatformen: fra de rå data kommer ind, til de rapporter, forretningen styrer efter.',
      'Jeg begyndte hos konsulenthuset Viteco i 2020. Der byggede jeg software, som automatiserede arbejdet med data warehouses: den aflæste kildesystemernes struktur, indlæste og transformerede data og håndterede stamdata. Et projekt, jeg skrev sammen med Viteco, brugte machine learning til at finde strukturen i kildedata og udlede warehouse-modellen af den.',
      'Hos softwarevirksomheden Copyright Agent designede og byggede jeg dataplatformen: data warehouset, pipelines fra de vigtigste kildesystemer og al rapportering. Oven på den satte jeg machine learning-modeller i drift og byggede de omsætningsforecasts, der blev brugt i virksomhedens budgetlægning. Jeg begyndte som ansat og arbejder stadig for dem som konsulent.',
      'Hos Ase, en stor dansk medlemsorganisation, fik jeg det tekniske ansvar for dataplatformen og dens arkitektur. Jeg planlagde flytningen fra SQL Server til Microsoft Fabric, lagde koden om til Python-pakker, som AI-kodeagenter kan arbejde i, og satte modeller i drift, der forudsiger indgående opkald, medlemsbevægelser, churn og ledighed. Jeg har også været mentor for data- og analyseteamet, også i de tekniske prioriteringer.',
      'Ved siden af platformsarbejdet er jeg gået i dybden med AI-assisteret udvikling. Jeg laver det meste af mit eget ingeniørarbejde med kodeagenter og har opbygget de konventioner og rammer, der gør det pålideligt. Hos både Ase og Copyright Agent har jeg brugt AI til at designe og forbedre rapportering. At sætte det op for andre er blevet den anden halvdel af det, jeg laver.',
      'Før data ledede jeg et team på 12–18 medarbejdere i detailhandlen med ansvar for budget og salgsmål, så jeg ved, hvordan det er at drive noget efter tal, man skal kunne stole på.',
    ],
    work: {
      eyebrow: 'Arbejde',
      title: 'Det, jeg kan vise.',
      results: {
        eyebrow: 'Dataplatform',
        title: 'Tre resultater fra én dataplatform',
        body: 'En rangeringsmodel, et natligt job og en skjult fejl, hver vist som før og efter.',
        cta: 'Se resultaterne',
      },
    },
    storyTitle: 'Baggrund',
    factsTitle: 'Kort fortalt',
    facts: [
      { label: 'Base', value: 'København. Remote eller on-site.' },
      { label: 'Sprog', value: 'Dansk og engelsk' },
      { label: 'Dækker', value: 'Data engineering, machine learning, rapportering og AI-kodning' },
      { label: 'Uddannelse', value: 'BSc i datalogi, Københavns Universitet' },
      { label: 'Foretrækker', value: 'Længere forløb, deltid eller fuld tid' },
      { label: 'Arbejder ikke med', value: 'Våben, sprængstoffer, udvinding af fossile brændsler' },
    ],
  },

  cases: {
    meta: {
      title: 'Cases: dataplatform og AI-kodning',
      description:
        'Resultater fra en dataplatform vist som før og efter, og en fuld case om et firma, hvis IT drives af en kodeagent i et offentligt repository.',
    },
    hero: {
      eyebrow: 'Cases',
      title: 'Sådan ser arbejdet ud.',
      lead: 'Resultater fra en kundes dataplatform, vist som før og efter, og én case, I kan efterprøve helt ned til den enkelte commit: mit eget firma.',
    },
    ai: {
      eyebrow: 'AI-kodning',
      title: 'En case, I selv kan tjekke.',
    },
    read: 'Læs casen',
    all: 'Alle cases',
    studies,
  },

  contact: {
    meta: {
      title: 'Kontakt',
      description: 'Tre linjer om, hvad I skal have bygget, rettet eller sat op. Jeg svarer inden for én arbejdsdag. On-site i København, ellers remote, på dansk eller engelsk.',
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
    privacy: 'Privatlivspolitik',
    rights: 'Alle rettigheder forbeholdes.',
  },
}
