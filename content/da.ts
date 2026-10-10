import type { Copy } from './en'
import { site } from './site'
import type { CaseStudy, ProofItem } from './types'

// Danish copy. Must match the shape of en.ts.

const proofItems: ProofItem[] = [
  {
    value: '72 % fra 25 %',
    label: 'En rangeringsmodel fandt 72 % af de værdifulde sager med en fjerdedel af behandlingsbudgettet. Den gamle udvælgelse fandt 25 %.',
    note: 'Testet på to måneders historiske data',
    study: 'ranking',
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
    study: 'hidden-work',
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
    label: 'Platformen lavede 2–4,5 gange det planlagte arbejde. Et langsomt opslag fik den til at lave jobs om, der allerede var kørt, og hver kørsel meldte succes.',
    note: 'Målt i drift',
    study: 'hidden-work',
    chart: {
      caption: 'Udført arbejde i forhold til planlagt arbejde',
      max: 4.5,
      rows: [
        { label: 'Planlagt', display: '1×', value: 1, highlight: true },
        { label: 'Faktisk udført', display: '2–4,5×', value: 2, upTo: 4.5 },
      ],
    },
  },
]

// De to dataplatform-cases er kundearbejde, anonymiseret: intet kundenavn, ingen beløb og intet om forretningen
// ud over det, ingeniørarbejdet kræver. Alle tal kommer fra kundens egne data.
// The excerpts are quoted from the repository, which is written in English, so they stay in English.
const studies: CaseStudy[] = [
  {
    key: 'hidden-work',
    offer: 'data',
    topic: 'review',
    published: '2026-10-11',
    meta: {
      title: 'Case: dataplatform med 4,5 gange det planlagte arbejde',
      description:
        'Et langsomt opslag fik en dataplatform til at lave færdige jobs om, og et natligt job omskrev 46 mio. rækker for at ændre 683.000. Fundet og rettet.',
    },
    hero: {
      eyebrow: 'Case · Dataplatform',
      title: 'Platformen lavede op til 4,5 gange det planlagte arbejde. Hver kørsel meldte succes.',
      lead: 'En kundes dataplatform med over 60 mio. poster behandlede langt mere, end planerne bad om, og et natligt job omskrev det meste af en stor tabel for at ændre en lille del af den. Intet var fejlet, så ingen havde kigget. Sådan blev det fundet, hvad der blev ændret, og hvad der stadig er åbent.',
      contactCta: 'Spørg til en platformgennemgang',
    },
    card: {
      body: 'En kundes platform behandlede op til 4,5 gange det, planerne bad om, og et natligt job omskrev 46 mio. rækker for at ændre 683.000. Intet var fejlet, så ingen havde kigget.',
      points: [
        '2–4,5 gange det planlagte arbejde, sporet til ét langsomt opslag',
        '46 mio. rækker omskrevet hver nat for at ændre 683.000',
        'Rettet i drift samme uge',
      ],
    },
    figures: [
      { value: '2–4,5×', label: 'det arbejde, planerne bad om, målt i drift over de første to uger af september 2026.' },
      { value: '8 min', label: 'for det langsomste enkelte opslag, hvor hele jobbet havde 10 minutter, før det blev delt ud igen.' },
      { value: '−98,5 %', label: 'rækker skrevet af et natligt job: 46 mio. omskrevet hver nat for at ændre 683.000.' },
    ],
    blocks: [
      {
        kind: 'text',
        title: 'Hvad der var galt',
        paragraphs: [
          'Flere gange om dagen, pr. kunde, udvælger platformen en portion poster og sender den gennem et betalt behandlingstrin. Planerne gav tilsammen omkring 250.000 poster om dagen. I de første to uger af september 2026 behandlede den omkring 540.000 om dagen, og for enkelte kunder op til 4,5 gange deres grænse.',
          'Intet så ud til at være i stykker. Jobbene blev færdige, data var korrekte, og ingen alarm gik. De eneste tegn var regningen for behandlingen og en sammenligning, ingen havde lavet: det, planerne bad om, over for det, der faktisk blev gjort.',
        ],
      },
      {
        kind: 'steps',
        title: 'Sådan blev det fundet',
        lead: 'På én dag, ud fra platformens egne logs og indstillinger. Uden nyt værktøj.',
        steps: [
          { title: 'Sammenlign', body: 'Det, planerne bad om, over for den behandling, der faktisk blev logget, pr. kunde og pr. dag.' },
          { title: 'Følg ét job', body: 'Jobbene tog mellem 100 og 835 sekunder. Køen gav hvert job 600 sekunder, før det blev delt ud igen.' },
          { title: 'Find den langsomme del', body: 'Opslaget, der udvælger næste portion, læste hele tabellen med 64 mio. rækker hver gang, fordi tabellen ikke havde et indeks til det filter, opslaget brugte. Det tog op til 503 sekunder alene.' },
          { title: 'Forklar mangedoblingen', body: 'Et job, der kørte over grænsen, blev delt ud igen, og det nye forsøg tog en ny portion, fordi den første allerede var reserveret. Hvert langsomt job blev lavet to gange eller mere, og hvert forsøg meldte succes.' },
          { title: 'Tjek resten', body: 'En manuel kørsel på tværs af alle kunder tog 20 til 26 minutter og blev delt ud igen, til den havde kørt 74 gange på tre dage og sendt omkring 3 mio. poster.' },
        ],
      },
      {
        kind: 'items',
        title: 'Hvad der blev ændret',
        lead: 'Tre ændringer, i drift 16. og 18. september 2026. Ingen af dem ændrede, hvad platformen leverer.',
        items: [
          {
            title: 'Et indeks til opslaget',
            body: 'Et delvist indeks, der passer til opslagets filter, og forespørgslen omskrevet, så den kan bruge det. Opslaget læser ikke længere hele tabellen.',
          },
          {
            title: 'En sortering, der ikke gjorde noget',
            body: 'Hver portion blev sorteret efter værdier, der var frosset måneder tidligere. Den eneste reelle effekt var at lægge poster, der aldrig var behandlet før, bagerst, og den tvang databasen til at sortere alle kandidater, før portionen blev taget. Den blev fjernet. Testet på historiske data var den ikke bedre end tilfældig udvælgelse.',
          },
          {
            title: 'Et natligt job, der omskrev alt',
            body: 'Fundet i samme undersøgelse: et natligt job markerede poster som ledige igen uden at tjekke, om de allerede var det. Det omskrev 46,2 mio. rækker hver nat for at ændre 683.000, og tabellen havde fået 10,7 mia. opdateringer. Én ekstra betingelse rettede det; slutresultatet og ændringsloggen blev de samme.',
          },
        ],
      },
      {
        kind: 'results',
        title: 'Før og efter',
        lead: 'Begge tal er målt i drift.',
      },
      {
        kind: 'text',
        title: 'Hvad der skete bagefter',
        paragraphs: [
          'Da årsagen var kendt, blev den ekstra mængde en beslutning i stedet for et uheld. Kunden valgte bevidst at blive ved med at behandle mere, end planerne siger, for at dække flere poster, og satte et loft for det.',
          'Stadig åbent: hvor lang tid opslaget tager nu, er ikke målt efter ændringen. Næste skridt er en tjeneste, der planlægger hver dags arbejde ét sted og slet ikke kan dele et job ud igen. Den er under opbygning.',
          'Den lære, jeg tager med til hver platform: korrekt output siger intet om omkostningen. Sammenlign det, der blev bedt om, med det, der blev gjort, job for job, før alt andet.',
        ],
      },
    ],
    closing: {
      title: 'Samme tjek på jeres platform',
      body: 'Det er det, en Gennemgang af dataplatform leder efter: arbejde, ingen har bedt om, jobs der omskriver langt mere, end de ændrer, og omkostninger, der vokser, uden at nogen opdager det. I får en skriftlig, prioriteret liste over, hvad der bør rettes først.',
    },
  },
  {
    key: 'ranking',
    offer: 'data',
    topic: 'hours',
    published: '2026-10-11',
    meta: {
      title: 'Case: machine learning-rangering på en fjerdedel af budgettet',
      description:
        'En rangeringsmodel fandt 72 % af de værdifulde sager med en fjerdedel af behandlingsbudgettet. Den gamle rækkefølge fandt 25 %, ikke bedre end tilfældigt.',
    },
    hero: {
      eyebrow: 'Case · Machine learning',
      title: '72 % af de værdifulde sager med en fjerdedel af budgettet.',
      lead: 'En kunde betaler for hver post, den sender gennem et eksternt behandlingstrin, og kun en lille del fører til noget af værdi. Hvilke poster der sendes, er det store greb, og den gamle rækkefølge viste sig ikke at være bedre end tilfældigheder. Her er modellen, der blev bygget til at afløse den, hvordan den blev testet, og hvorfor den ikke bestemmer noget endnu.',
      contactCta: 'Spørg til machine learning-arbejde',
    },
    card: {
      body: 'Hvilke poster det betaler sig at behandle: den gamle rækkefølge var ikke bedre end tilfældigheder. En rangeringsmodel testet på to måneders historiske data fandt 72 % af de værdifulde sager med en fjerdedel af budgettet.',
      points: [
        '72 % af de værdifulde sager med 25 % af budgettet, op fra 25 %',
        'Testet på historiske data, med forbeholdene skrevet ned',
        'Hvorfor faste forpligtelser gør gevinsten mindre',
      ],
    },
    figures: [
      { value: '72 %', label: 'af de senere værdifulde sager, hvis kun den bedste fjerdedel af posterne var blevet behandlet. Den gamle rækkefølge fangede 25 %.' },
      { value: '88 %', label: 'med halvdelen af budgettet, hvor den gamle rækkefølge fangede 51 %.' },
      { value: '0,1 %', label: 'af de automatiske resultater nåede det trin, hvor de kan tjene penge, i en målt uge. At vælge rigtigt er det store greb.' },
    ],
    blocks: [
      {
        kind: 'text',
        title: 'Problemet',
        paragraphs: [
          'Kunden sender poster gennem et betalt, eksternt behandlingstrin. Det meste af det, der kommer tilbage, bliver frasorteret eller afvist: i en målt uge nåede omkring 0,1 % af de automatiske resultater frem til det punkt, hvor de kan tjene penge. Med et fast budget er det mere værd at vælge, hvilke poster der sendes, end at gøre hvert trin billigere.',
          'Posterne blev udvalgt i en rækkefølge, der byggede på værdier, som ikke var opdateret i måneder. Testet mod det, der faktisk skete bagefter, var den rækkefølge ikke bedre end tilfældigheder: den bedste fjerdedel ville have fanget 24,6 % af de værdifulde sager, og tilfældig udvælgelse fangede 25,6 %.',
        ],
      },
      {
        kind: 'steps',
        title: 'Sådan blev det testet',
        lead: 'På historiske data, så hver version kunne sammenlignes på de samme poster, før noget blev ændret i drift.',
        steps: [
          { title: 'Frys tiden', body: 'Brug kun det, der var kendt før 1. juli 2026.' },
          { title: 'Rangér', body: 'Giv hver post, der blev behandlet i juli og august, en score ud fra den viden, bedste først.' },
          { title: 'Skær', body: 'Hvis kun de bedste 10 %, 25 %, 50 % eller 75 % var blevet behandlet, hvor mange af de senere værdifulde sager var så blevet fanget?' },
          { title: 'Sammenlign', body: 'Den gamle rækkefølge, tilfældig udvælgelse og hver model, på de samme poster.' },
        ],
      },
      {
        kind: 'items',
        title: 'Hvad der blev prøvet',
        lead: 'Hver version på samme test: andelen af værdifulde sager fanget med en fjerdedel af budgettet.',
        items: [
          { title: 'Den gamle rækkefølge: 25 %', body: 'Værdier frosset måneder tidligere. Ikke bedre end tilfældig udvælgelse.' },
          { title: 'Kundens gennemsnit: 37 %', body: 'Hver post scoret efter, hvor godt kundens poster klarer sig i gennemsnit.' },
          { title: 'Postens egen rate: 54 %', body: 'Hvor ofte netop denne post har ført til noget før, trukket mod kundens gennemsnit, når den har lidt historik. Endnu ikke tunet.' },
          { title: 'Den endelige blanding: 72 %', body: 'To rater kombineret: det sjældne værdifulde udfald med lang hukommelse og alle udfald med en kortere, vægtet efter hvor ofte kundens resultater bliver værdifulde. 88 % med halvdelen af budgettet.' },
          { title: 'Hjalp ikke: tid siden sidste behandling', body: 'Det lignede et stærkt signal, men den gamle rækkefølge havde bestemt, hvornår poster blev behandlet, så det målte mest den gamle rækkefølge.' },
        ],
      },
      {
        kind: 'results',
        title: 'Før og efter',
        lead: 'Testet på historiske data, ikke målt i drift.',
      },
      {
        kind: 'text',
        title: 'Hvad det ikke viser endnu',
        paragraphs: [
          'Det er en test på historiske data, og den endelige blanding blev tunet mod den samme test. Data rummer også kun de poster, den gamle rækkefølge valgte at behandle, og nogle udfald var stadig på vej ind, da det blev målt. Et tjek på en senere, separat periode er i gang.',
          'Scorerne er beregnet hver dag siden 17. september 2026, men de bestemmer endnu ikke, hvad der bliver behandlet. Det kræver en ny tjeneste, der planlægger hver dags arbejde, og den er under opbygning. Indtil den kører, er der intet tal fra drift, og det vil denne side sige.',
        ],
      },
      {
        kind: 'text',
        title: 'Hagen: det meste af budgettet var allerede lovet væk',
        paragraphs: [
          'En simulering over tre uger med det daværende budget viste det. Faste forpligtelser over for enkelte kunder tog omkring 95 % af behandlingen, så modellen bestemte kun resten. Dér skrumpede gevinsten til omkring 16 % flere forventede værdifulde sager pr. post, ikke de næsten tre gange, testen antyder.',
          'Det gjorde et modelspørgsmål til et forretningsspørgsmål: hvor meget af budgettet er bundet i forpligtelser, og hvor meget går derhen, hvor det tjener mest. Budgettet er siden hævet, hvilket giver modellen mere plads. En model er kun så meget værd som den andel af beslutningerne, den får lov at træffe.',
        ],
      },
    ],
    closing: {
      title: 'Modeller, der gør sig fortjent til pladsen',
      body: 'Sådan arbejder jeg med machine learning på en dataplatform: først en baseline, så en test mod det, der faktisk skete, forbeholdene skrevet ned og et klart svar på, hvor meget af beslutningen modellen reelt kommer til at træffe. Som regel som del af et længere forløb i jeres team.',
    },
  },
  {
    key: 'agent',
    offer: 'ai',
    topic: 'setup',
    published: '2026-10-02',
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
    home: 'Forside',
    data: 'Dataplatform',
    ai: 'AI-kodning',
    cases: 'Cases',
    blog: 'Blog',
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
          body: 'Til teams, der har AI-kodeværktøjer og ikke meget at vise for det. Forskellen ligger i opsætningen: agenter, der følger jeres konventioner, holder sig inden for grænser, I bestemmer, og bruges på samme måde af hele teamet.',
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
          body: 'Ét team eller én kodebase: instruktioner, agenten læser hver gang, en nedskrevet grænse mellem det, den må gøre selv, og det, der kræver et menneske, forbindelser til jeres systemer og træning på jeres egen backlog.',
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
      lead: 'Fra nyligt kundearbejde på en platform med over 60 mio. poster.',
      more: 'Se cases',
      items: proofItems,
    },
    why: {
      eyebrow: 'Hvorfor mig',
      title: 'Sådan arbejder jeg.',
      items: [
        { title: 'Jeg bygger det selv', body: 'Med hænderne i koden, ikke et slide-deck. Jeg har bygget alle lag: pipelines, data warehouse, machine learning-modeller, rapporter og forecasts.' },
        { title: 'Jeg måler før og efter', body: 'Først en baseline, så effekten af arbejdet kan vises og ikke bare påstås. Casene viser, hvordan det ser ud.' },
        { title: 'Jeg kan forklare det', body: 'For udviklere på deres sprog og for ledelsen på deres. Forecasts, jeg har bygget, er indgået i virksomhedsbudgetter, og jeg har selv været leder.' },
        { title: 'Jeg bygger til overdragelse', body: 'Konventionelt, dokumenteret og ejet af jeres team, når jeg går.' },
      ],
    },
    experience: {
      label: 'Erfaring fra',
      items: ['Ase', 'Copyright Agent', 'Viteco'],
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
    product: {
      eyebrow: 'Gennemgang af dataplatform',
      title: 'Hvad gennemgangen dækker, og hvad I får.',
      lead: 'Et kig på jeres platform med fast omfang, til når I skal vide, hvor I står, før I beslutter, hvad I vil bruge på den.',
      steps: [
        { title: 'Tal med folkene', body: 'Korte samtaler med dem, der bygger platformen, og dem, der er afhængige af den: hvad de stoler på, og hvad de arbejder uden om.' },
        { title: 'Følg omkostningen', body: 'Hvor pengene faktisk går hen: de forespørgsler, jobs og den lagring, der laver det meste af arbejdet, og om nogen har bedt om det arbejde.' },
        { title: 'Find det, der går i stykker', body: 'Hvad der afhænger af én person eller ét script, hvad der fejler, uden at nogen opdager det, og hvilke tal der er uenige mellem rapporter.' },
        { title: 'Skriv det ned', body: 'En skriftlig rapport i prioriteret rækkefølge: hvad der bør rettes først og hvorfor, og hvad der kan vente.' },
        { title: 'Gå den igennem', body: 'En session med jeres team og ledelse, så rapporten bliver til beslutninger.' },
      ],
      getTitle: 'I får',
      get: ['En skriftlig, prioriteret rapport', 'En gennemgang med jeres team og ledelse', 'En liste, jeres eget team kan handle på, med eller uden mig'],
    },
    faq: {
      title: 'Spørgsmål om arbejde med dataplatforme',
      items: [
        { q: 'Hvilke platforme arbejder du med?', a: 'Jeg har haft ansvaret for platforme på BigQuery og Google Cloud og på SQL Server på vej mod Microsoft Fabric, med PostgreSQL som driftsdatabase. Er jeres bygget på noget andet, så spørg: det meste af arbejdet er det samme.' },
        { q: 'Erstatter du vores datateam?', a: 'Nej. Jeg arbejder inde i det, på deltid eller fuld tid, og bygger, så jeres team ejer resultatet, når jeg går. Hos én kunde var jeg også mentor for data- og analyseteamet, også i de tekniske prioriteringer.' },
        { q: 'Bygger du det, eller rådgiver du kun?', a: 'Jeg bygger det. Jeg skriver selv pipelines, modeller og rapporter. Gennemgangen er undtagelsen: dér får I listen over, hvad der skal rettes, og hvem der retter det, bestemmer I.' },
        { q: 'Vi vil gerne have machine learning. Hvor starter vi?', a: 'Som regel med data nedenunder. En model er kun så god som den platform, der fodrer den, og den skal måles mod det, den afløser. Casen om rangeringsmodellen viser, hvordan det ser ud.' },
      ],
    },
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
    product: {
      eyebrow: 'Opsætning af AI-kodning',
      title: 'Hvad opsætningen efterlader.',
      lead: 'En fungerende arbejdsform i jeres eget repository, ikke et slide-deck. De samme dele, dette firma kører på, tilpasset jeres systemer og jeres risiko.',
      steps: [
        { title: 'Se, hvordan I arbejder', body: 'Jeres kodebase, jeres review-flow, de systemer, en agent skal bruge, og hvor teamet allerede bruger AI.' },
        { title: 'Sæt repositoryet op', body: 'Instruktioner, agenten læser hver gang: hvordan koden er organiseret, jeres konventioner og de regler, der ikke må brydes.' },
        { title: 'Træk grænsen', body: 'Skriftligt: hvad agenten må gøre selv, hvad der kræver et menneske, og de tjek, der kan afvise en pull request.' },
        { title: 'Forbind jeres systemer', body: 'Sikker adgang til det, rigtigt arbejde afhænger af: databaser, sagsstyring, dokumentation, deployment.' },
        { title: 'Træn på jeres backlog', body: 'Hands-on sessioner på rigtige opgaver, indtil jeres udviklere arbejder sådan uden mig.' },
      ],
      getTitle: 'Tilbage i jeres repository',
      get: [
        'Instruktioner, agenten læser i hver session',
        'En nedskrevet grænse mellem det, den må selv, og det, der kræver et menneske',
        'Tjek, der kan afvise en pull request',
        'Forbindelser til jeres systemer',
        'Et sted, hvor beslutninger og hændelser bliver noteret',
        'Udviklere trænet på jeres egen backlog',
      ],
    },
    faq: {
      title: 'Spørgsmål om AI-kodning',
      items: [
        { q: 'Er det sikkert at lade en agent ændre vores kode?', a: 'Lige så sikkert som den grænse, I trækker. Agenten arbejder inden for skrevne regler, et menneske bestemmer, hvad den må selv, og tjek kører, før noget bliver merget. I mit eget firma blokerer et automatisk sikkerhedstjek den desuden fra at læse adgangskoder. Casen viser hele opsætningen.' },
        { q: 'Kan agenten se vores hemmeligheder?', a: 'Det behøver den ikke. I den opsætning, jeg bruger, kender agenten navnene på hemmelighederne, aldrig værdierne, og det er mennesker, der lægger dem ind.' },
        { q: 'Hvordan ved vi, om det betaler sig?', a: 'Aftal, hvad der skal måles, før vi starter, og mål det før og efter. Jeg lover ikke en procentsats; jeres egne tal vil vise det.' },
        { q: 'Hvilke værktøjer bruger du?', a: 'Jeg laver det meste af mit eget ingeniørarbejde med Claude Code. Det, der får det til at virke, instruktionerne, rettighederne og tjekkene, er ikke bundet til ét værktøj.' },
        { q: 'Virker det på en gammel eller rodet kodebase?', a: 'Det kan det, men koden skal måske omlægges først. Jeg har omlagt en dataplatform i drift til Python-pakker, så kodeagenter kan arbejde i den.' },
      ],
    },
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
    },
    storyTitle: 'Baggrund',
    factsTitle: 'Kort fortalt',
    facts: [
      { label: 'Base', value: 'København. Remote eller on-site.' },
      { label: 'Sprog', value: 'Dansk og engelsk' },
      { label: 'Dækker', value: 'Data engineering, machine learning, rapportering og AI-kodning' },
      { label: 'Uddannelse', value: 'BSc i datalogi, Københavns Universitet' },
      { label: 'Firma', value: `${site.company}, CVR ${site.cvr}` },
      { label: 'Foretrækker', value: 'Længere forløb, deltid eller fuld tid' },
      { label: 'Arbejder ikke med', value: 'Våben, sprængstoffer, udvinding af fossile brændsler' },
    ],
  },

  cases: {
    meta: {
      title: 'Cases: dataplatform, machine learning og AI-kodning',
      description:
        'En dataplatform med 4,5 gange det planlagte arbejde, en rangeringsmodel der gør mere med en fjerdedel af budgettet, og et firma, hvis IT drives af en kodeagent.',
    },
    hero: {
      eyebrow: 'Cases',
      title: 'Sådan ser arbejdet ud.',
      lead: 'To cases fra en kundes dataplatform, anonymiseret, med tallene vist som før og efter. Og én, I kan efterprøve helt ned til den enkelte commit: mit eget firma.',
    },
    note: 'Kundecases nævner hverken kunde eller beløb. Hvert tal siger, om det er målt i drift eller testet på historiske data.',
    data: {
      eyebrow: 'Dataplatform',
      title: 'To resultater, skrevet ud.',
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
    prompts: {
      title: 'Det hjælper i første besked',
      items: ['Hvad I kører i dag, groft sagt', 'Hvad der går galt, eller hvad I vil have bygget', 'Hvornår I gerne vil i gang'],
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

  blog: {
    meta: {
      title: 'Blog: teori, praksis og hvad det betyder for forretningen',
      description:
        'Korte indlæg, der tager én idé fra teorien bag dataplatforme, prognoser og machine learning, viser den i praksis og siger, hvad den betyder for forretningen.',
    },
    hero: {
      eyebrow: 'Blog',
      title: 'Fra teori til praksis til forretningen.',
      lead: 'Én idé pr. indlæg. Hvor den kommer fra, hvordan den ser ud i rigtigt dataarbejde, og hvad den ændrer for dem, der beslutter.',
    },
    empty: 'Ingen indlæg endnu.',
    emptyCta: 'Indtil da viser casene arbejdet',
    readMore: 'Læs',
    back: 'Alle indlæg',
    author: {
      role: 'Freelance data- og AI-ingeniør',
      body: 'Jeg bygger og retter dataplatforme og sætter AI-kodeagenter op for udviklingsteams. Teknisk ansvar for hele dataplatformen i to virksomheder.',
      cta: 'Kontakt mig',
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
