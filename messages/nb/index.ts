const nb = {
  Nav: {
    home: "Hjem",
    about: "Om oss",
    projects: "Prosjekter",
    contact: "Kontakt",
  },
  Hero: {
    title: "Selvstendig IT-arkitekt",
    subtitle: "Skaper skalerbare systemer med oversikt",
    cta: "Lei meg",
  },
  Footer: {
    copyright: "© {year} Intello. Alle rettigheter forbeholdt.",
  },
  footer: {
    rights: "Alle rettigheter reservert."
  },
  Language: {
    english: "English",
    norwegian: "Norsk",
  },
  categories: {
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Sky",
    infra: "Infra / DevOps",
    ai: "AI / ML",
    other: "Annet",
  },
  about: {
    title: "Om Intello",
    paragraphs: [
      "Jeg heter Finn-Robert Kristensen og driver Intello Group AS, et selvstendig konsulentselskap innen programvareutvikling og arkitektur.",
      "Med over 20 års erfaring har jeg jobbet med alt fra komplekse monolitter til moderne mikrotjenester, skyplattformer og AI-drevne løsninger.",
      "Jeg skaper robuste, skalerbare og enkle systemer som gir reell verdi."
    ],
    highlightsTitle: "Noen høydepunkter fra de siste årene:",
    highlights: [
      "Modernisering av pensjonsløsninger i Statens pensjonskasse (SPK) til mikrotjenester.",
      "Bygget komplett nettside og booking med Next.js og Sanity.",
      "Utforsket MVP-løsninger for automatisert testgenerering med AI."
    ],
    values: "Verdiene mine er klarhet, presisjon og samarbeid."
  },
  Pages: {
    home: {
      expertiseTitle: "Kompetanseområder",
      intro:
        "Jeg hjelper selskaper med å modernisere systemer, bygge skalerbare løsninger i skyen og utforske nye muligheter med AI. Med 20+ års erfaring som utvikler og arkitekt skaper jeg løsninger som gir verdi og varig effekt.",
      cta: "Les mer om meg",
      contactCta: "Kontakt meg",
      techStackTitle: "Teknologistack",
      viewDetails: "Se mer",
    },
    projects: {
      title: "Prosjekter",
      empty: "Vi vil vise frem utvalgte kundecase her.",
    },
    contact: {
      title: "Kontakt",
      body: "Ta kontakt på contact@intello.no",
    },
  },
  ProjectList: {
    spk: {
      title: "SPK: Migrering til mikrotjenester",
      description:
        "Ledet arkitektur og implementasjon for å dele opp en monolitt i selvstendige mikrotjenester.",
      tags: ["Kotlin", "Java", "Mikrotjenester"],
    },
    artemova: {
      title: "Artemova.no: Next.js-side for salong",
      description:
        "Designet og bygget et raskt, SEO-vennlig nettsted med moderne React-verktøy.",
      tags: ["React"],
    },
    aimvp: {
      title: "AI MVP: Automatisk testgenerering",
      description:
        "Prototypet et AI-verktøy som genererer enhetstester fra kode og spesifikasjoner for å effektivisere QA.",
      tags: ["AI", "React"],
    },
  },
  contact: {
    title: "Kontakt",
    intro: "La oss jobbe sammen. Send en kort melding så tar jeg kontakt.",
    name: "Navn",
    email: "E-post",
    message: "Melding",
    placeholder: {
      name: "Ditt navn",
      email: "deg@eksempel.no",
      message: "Fortell kort om behovet, tidsramme og mål...",
    },
    submit: "Send melding",
    sending: "Sender...",
    successTitle: "Takk!",
    successBody: "Meldingen er sendt. Jeg svarer så snart jeg kan.",
    errorTitle: "Noe gikk galt",
    errorBody: "Prøv igjen, eller send meg en e-post direkte.",
    alt: {
      title: "Foretrekker du noe annet?",
      linkedin: "Koble på LinkedIn",
      github: "Se GitHub",
      email: "Send e-post",
    },
    sent: {
      title: "Melding sendt",
      body: "Takk for at du tok kontakt! Jeg svarer deg så snart jeg kan.",
    },
  },
  projects: {
    title: "Prosjekter",
    intro: "Utvalgte oppdrag innen arkitektur, sky og AI.",
    readMore: "Les case",
    back: "Tilbake til prosjekter",
    labels: { role: "Rolle", year: "År", tags: "Stikkord" },
  },
} as const;

export default nb;
