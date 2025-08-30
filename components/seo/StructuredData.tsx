"use client";

import Script from "next/script";
import { useTranslations, useLocale } from "next-intl";

export default function StructuredData() {
  const locale = useLocale();
  const isNb = locale?.startsWith("nb");
  const tServices = useTranslations("services");

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

  const serviceItems = (tServices.raw("what.items") as string[]) || [];

  const graph: any[] = [
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
      }
  ];

  // Dynamically add Service entries from i18n
  serviceItems.forEach((item, idx) => {
    graph.push({
      "@type": "Service",
      "@id": `https://intello.no#service-${locale}-${idx}`,
      name: item,
      description: item,
      provider: { "@id": orgId },
      inLanguage: isNb ? "nb" : "en"
    });
  });

  const data = {
    "@context": "https://schema.org",
    "@graph": graph
  } as const;

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
