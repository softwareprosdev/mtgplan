export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MTGPlan",
    url: "https://mtgplan.com",
    logo: "https://mtgplan.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-407-486-4555",
      contactType: "customer service",
      areaServed: "US",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MTGPlan",
    url: "https://mtgplan.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mtgplan.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "MTGPlan",
      url: "https://mtgplan.com",
      logo: "https://mtgplan.com/logo.png",
    },
  };
}

export function financialProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Mortgage Protection Insurance",
    description:
      "Mortgage protection insurance that pays off your mortgage if you pass away, become disabled, or lose your job.",
    url: "https://mtgplan.com",
    provider: {
      "@type": "Organization",
      name: "MTGPlan",
      url: "https://mtgplan.com",
    },
    feesAndCommissionsSpecification:
      "Rates vary based on age, health, loan amount, and term. Get a free quote at mtgplan.com.",
    category: "Mortgage Protection Insurance",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
