import Script from "next/script";

type Props = {
  locale: string;
};

export default function StructuredData({ locale }: Props) {
  const isNb = locale?.startsWith("nb");

  const personJobTitle = isNb
    ? "Programvarearkitekt og selvstendig konsulent"
    : "Software Architect & Independent Consultant";

  const orgDescription = isNb
    ? "Intello Group AS tilbyr rådgivning og utvikling innen programvarearkitektur, moderne skyplattformer og AI."
    : "Intello Group AS provides consulting and development in software architecture, modern cloud platforms and AI.";

  const personDescription = isNb
    ? "Finn-Robert Kristensen er en erfaren programvarearkitekt som hjelper selskaper å bygge skalerbare, robuste og enkle løsninger."
    : "Finn-Robert Kristensen is an experienced software architect helping companies build scalable, robust and simple solutions.";

  const orgId = "https://intello.no#organization";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Intello Group AS",
        url: "https://intello.no",
        logo: "https://intello.no/brand/intello-icon-currentColor.svg",
        description: orgDescription,
        inLanguage: isNb ? "nb" : "en",
        sameAs: [
          "https://www.linkedin.com/in/finnrobertk",
          "https://github.com/finnrobertk"
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "hello@intello.no",
            contactType: "customer support",
            availableLanguage: ["en", "nb"]
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://intello.no#person",
        name: "Finn-Robert Kristensen",
        jobTitle: personJobTitle,
        description: personDescription,
        worksFor: { "@id": orgId },
        url: "https://intello.no",
        sameAs: [
          "https://www.linkedin.com/in/finnrobertk",
          "https://github.com/finnrobertk"
        ]
      },
      // Services (locale-aware)
      {
        "@type": "Service",
        name: isNb ? "Programvarearkitektur og systemdesign" : "Software architecture & system design",
        description: isNb
          ? "Designer skalerbare og vedlikeholdbare programvaresystemer med klarhet."
          : "Designing scalable, maintainable software systems with clarity.",
        provider: { "@id": orgId },
        serviceType: isNb ? "Arkitektur" : "Architecture",
        inLanguage: isNb ? "nb" : "en"
      },
      {
        "@type": "Service",
        name: isNb ? "Sky-native utvikling (GCP/Azure)" : "Cloud-native development (GCP/Azure)",
        description: isNb
          ? "Utvikling av moderne applikasjoner på skyplattformer (GCP, Azure)."
          : "Developing modern applications on cloud platforms (GCP, Azure).",
        provider: { "@id": orgId },
        serviceType: isNb ? "Skyutvikling" : "Cloud development",
        inLanguage: isNb ? "nb" : "en"
      },
      {
        "@type": "Service",
        name: isNb ? "Modernisering av legacy" : "Legacy modernization",
        description: isNb
          ? "Transformerer monolittiske legacysystemer til moderne mikrotjenester."
          : "Transforming monolithic legacy systems into modern microservices.",
        provider: { "@id": orgId },
        serviceType: isNb ? "Modernisering" : "Modernization",
        inLanguage: isNb ? "nb" : "en"
      },
      {
        "@type": "Service",
        name: isNb ? "AI/ML-integrasjon og MVP-er" : "AI/ML integration and MVPs",
        description: isNb
          ? "Integrerer AI/ML i forretningssystemer og bygger MVP-er."
          : "Integrating AI/ML into business systems and building MVPs.",
        provider: { "@id": orgId },
        serviceType: "AI/ML",
        inLanguage: isNb ? "nb" : "en"
      },
      {
        "@type": "Service",
        name: isNb ? "Utviklerstøtte og code reviews" : "Developer enablement & reviews",
        description: isNb
          ? "Hjelper team med forbedring gjennom code reviews, mentoring og arkitekturstøtte."
          : "Helping teams improve via code reviews, mentoring, and architectural guidance.",
        provider: { "@id": orgId },
        serviceType: isNb ? "Utviklerstøtte" : "Developer enablement",
        inLanguage: isNb ? "nb" : "en"
      }
    ]
  } as const;

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
