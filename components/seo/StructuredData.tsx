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

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://intello.no#organization",
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
        worksFor: { "@id": "https://intello.no#organization" },
        url: "https://intello.no",
        sameAs: [
          "https://www.linkedin.com/in/finnrobertk",
          "https://github.com/finnrobertk"
        ]
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
