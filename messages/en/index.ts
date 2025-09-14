const en = {
  Nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  Hero: {
    title: "Independent Software Architect",
    subtitle: "Building scalable systems with clarity",
    cta: "Hire me",
  },
  Footer: {
    copyright: "© {year} Intello. All rights reserved.",
  },
  footer: {
    rights: "All rights reserved."
  },
  Language: {
    english: "English",
    norwegian: "Norsk",
  },
  categories: {
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Cloud",
    infra: "Infra / DevOps",
    ai: "AI / ML",
    other: "Other",
  },
  about: {
    title: "About Intello",
    paragraphs: [
      "My name is Finn-Robert Kristensen, and I run Intello Group AS, an independent consultancy for software development and architecture.",
      "With more than 20 years of experience, I have worked on everything from complex legacy monoliths to modern microservices, cloud platforms, and AI-driven solutions.",
      "I focus on building robust, scalable, and simple systems that deliver real value."
    ],
    highlightsTitle: "Recent highlights include:",
    highlights: [
      "Modernizing pension solutions at the Norwegian Public Service Pension Fund (SPK) into microservices.",
      "Exploring MVP solutions for automated test generation with AI."
    ],
    values: "My core values are clarity, precision, and collaboration."
  },
  Pages: {
    home: {
      expertiseTitle: "My Expertise",
      intro:
        "I help companies modernize systems, build scalable cloud solutions, and explore new opportunities with AI. With 20+ years of experience as a developer and architect, I create solutions that deliver lasting value.",
      cta: "Read more",
      contactCta: "Contact",
      techStackTitle: "Tech Stack",
      viewDetails: "View details",
    },
    projects: {
      title: "Projects",
      empty: "We will showcase selected client work here.",
    },
    contact: {
      title: "Contact",
      body: "Reach out at contact@intello.no",
    },
  },
  ProjectList: {
    spk: {
      title: "SPK: Migration to microservices",
      description:
        "Led architecture and implementation to decompose a monolith into independently deployable microservices.",
      tags: ["Kotlin", "Java", "Microservices"],
    },
    aimvp: {
      title: "AI MVP: Auto test generation",
      description:
        "Prototyped an AI-powered tool that generates unit tests from code and specs to accelerate QA.",
      tags: ["AI", "React"],
    },
  },
  contact: {
    title: "Contact",
    intro: "Let’s work together. Send a short message and I’ll get back to you.",
    name: "Name",
    email: "Email",
    message: "Message",
    placeholder: {
      name: "Your name",
      email: "you@example.com",
      message: "Tell me a bit about your project, timeline and goals...",
    },
    submit: "Send message",
    sending: "Sending...",
    successTitle: "Thanks!",
    successBody: "Your message has been sent. I’ll get back to you shortly.",
    errorTitle: "Something went wrong",
    errorBody: "Please try again or email me directly.",
    alt: {
      title: "Prefer another channel?",
      linkedin: "Connect on LinkedIn",
      email: "Send an email",
    },
    sent: {
      title: "Message sent",
      body: "Thanks for reaching out! I’ll get back to you shortly.",
    },
  },
  projects: {
    title: "Projects",
    intro: "Selected work highlighting architecture, cloud and AI.",
    readMore: "Read case",
    back: "Back to projects",
    labels: { role: "Role", year: "Year", tags: "Tags" },
  },
  services: {
    what: {
      items: [
        "Software architecture & system design",
        "Cloud-native development (GCP/Azure)",
        "Legacy modernization",
        "AI/ML integration and MVPs",
        "Developer enablement & reviews"
      ]
    }
  },
} as const;

export default en;
