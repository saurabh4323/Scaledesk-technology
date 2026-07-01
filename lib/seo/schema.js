import { SITE, absoluteUrl } from "./config";

function orgBase() {
  return {
    "@type": ["Organization", "Corporation", "ProfessionalService"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: absoluteUrl("/og/scaledesk-technology-logo.png"),
      width: 512,
      height: 512,
      caption: SITE.name,
    },
    image: absoluteUrl(SITE.defaultOgImage),
    description: SITE.description,
    slogan: SITE.slogan,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SITE.sameAs,
    knowsAbout: SITE.knowsAbout,
    areaServed: SITE.areaServed,
    founder: { "@id": `${SITE.url}/#founder` },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
  };
}

export function organizationSchema() {
  return orgBase();
}

export function localBusinessSchema() {
  return {
    ...orgBase(),
    "@type": ["LocalBusiness", "ProfessionalService"],
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function personSchema(overrides = {}) {
  const f = SITE.founder;
  return {
    "@type": "Person",
    "@id": `${SITE.url}/#founder`,
    name: f.name,
    givenName: "Saurabh",
    familyName: "Singh",
    jobTitle: f.title,
    worksFor: { "@id": `${SITE.url}/#organization` },
    url: absoluteUrl(`/team/${f.slug}`),
    email: f.email,
    sameAs: f.sameAs,
    knowsAbout: f.expertise,
    description:
      "Saurabh Singh is Co-Founder and Chief Technology Officer (CTO) of ScaleDesk Technology, leading Product Engineering, AI Solutions, and Enterprise Software development.",
    ...overrides,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema({ title, description, path, datePublished, dateModified }) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path, areaServed = "Worldwide" }) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed,
    url: absoluteUrl(path),
    serviceType: name,
    brand: { "@id": `${SITE.url}/#organization` },
  };
}

export function softwareApplicationSchema({
  name,
  description,
  path,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web",
  offers,
}) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(path)}#software`,
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory,
    operatingSystem,
    creator: { "@id": `${SITE.url}/#organization` },
    author: { "@id": `${SITE.url}/#founder` },
    publisher: { "@id": `${SITE.url}/#organization` },
    ...(offers && {
      offers: {
        "@type": "Offer",
        ...offers,
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function productSchema({ name, description, path, brand = SITE.name }) {
  return {
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name,
    description,
    url: absoluteUrl(path),
    brand: { "@type": "Brand", name: brand },
    manufacturer: { "@id": `${SITE.url}/#organization` },
  };
}

export function faqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
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
  path,
  datePublished,
  dateModified,
  image,
  authorName = SITE.founder.name,
  section = "Technology",
}) {
  const url = absoluteUrl(path);
  return {
    "@type": ["Article", "BlogPosting"],
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: absoluteUrl("/team/saurabh-singh"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og/scaledesk-technology-logo.png"),
      },
    },
    image: image || absoluteUrl(SITE.defaultOgImage),
    articleSection: section,
    inLanguage: SITE.language,
    isPartOf: { "@id": `${SITE.url}/#website` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article .article-summary", "article h2"],
    },
  };
}

export function collectionPageSchema({ title, description, path }) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE.url}/#website` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function profilePageSchema({ name, description, path }) {
  return {
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(path)}#profile`,
    name,
    description,
    url: absoluteUrl(path),
    mainEntity: { "@id": `${SITE.url}/#founder` },
  };
}

/** Combine multiple schemas into @graph */
export function buildGraph(schemas) {
  const filtered = schemas.filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": filtered,
  };
}

/** Default site-wide graph for root layout */
export function siteGraph() {
  return buildGraph([
    organizationSchema(),
    localBusinessSchema(),
    personSchema(),
    websiteSchema(),
  ]);
}

/** Build page-specific graph */
export function pageGraph({ breadcrumbs, page, service, product, software, faqs, article }) {
  const schemas = [
    organizationSchema(),
    personSchema(),
    websiteSchema(),
    page && webPageSchema(page),
    breadcrumbs?.length && breadcrumbSchema(breadcrumbs),
    service && serviceSchema(service),
    product && productSchema(product),
    software && softwareApplicationSchema(software),
    faqs?.length && faqSchema(faqs),
    article && articleSchema(article),
  ];
  return buildGraph(schemas);
}
