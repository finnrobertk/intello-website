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
  Language: {
    english: "English",
    norwegian: "Norsk",
  },
  Pages: {
    home: {
      intro:
        "Jeg hjelper selskaper med å modernisere systemer, bygge skalerbare løsninger i skyen og utforske nye muligheter med AI. Med 20+ års erfaring som utvikler og arkitekt skaper jeg løsninger som gir verdi og varig effekt.",
      cta: "Les mer om meg",
      contactCta: "Kontakt meg",
    },
    about: {
      title: "Om Intello",
      body: `Jeg heter Finn-Robert Kristensen og driver Intello Group AS, et selvstendig konsulentselskap innen programvareutvikling og arkitektur.
Med over 20 års erfaring fra IT-bransjen har jeg jobbet med alt fra komplekse monolitter til moderne mikrotjenestearkitektur, skyplattformer og AI-drevne løsninger.
Jeg brenner for å skape robuste, skalerbare og enkle løsninger som gir verdi for kundene – enten det handler om å modernisere en eksisterende kodebase, bygge nye systemer i skyen eller utforske mulighetene med generativ AI.
Noen høydepunkter fra de siste årene:
Ledet moderniseringen av pensjonsløsninger i Statens pensjonskasse (SPK) til mikrotjenester.
Bygget en komplett nettside og bookingløsning for en skjønnhetssalong med Next.js og Sanity.
Utforsket MVP-løsninger for automatisert testgenerering med AI.
Verdiene mine er klarhet, presisjon og samarbeid. Jeg liker å finne gode løsninger sammen med kunden – og levere med høy kvalitet.`,
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
} as const;

export default nb;
