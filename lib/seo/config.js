/** @type {import('./types').SiteConfig} */
export const SITE = {
  name: "ScaleDesk Technology",
  legalName: "ScaleDesk Technology",
  shortName: "ScaleDesk",
  alternateNames: ["Scale Desk", "ScaleDesk Tech"],
  url: "https://scaledesktechnology.com",
  locale: "en_US",
  language: "en",
  email: "contact@scaledesktechnology.com",
  phone: "+1-800-SCALE-TECH",
  foundingDate: "2026",
  slogan:
    "Product Engineering, AI Solutions, Enterprise Software & Technology Consulting",
  description:
    "ScaleDesk Technology is a Product Engineering company delivering AI Solutions, Enterprise Software Development, Custom Software Development, IT Services, and Technology Consulting for startups, high-growth businesses, and enterprises.",
  defaultOgImage: "/heroimage.png",
  twitterHandle: "@ScaleDeskTech",
  linkedIn: "https://www.linkedin.com/company/scaledesk-technology",
  sameAs: [
    "https://www.linkedin.com/company/scaledesk-technology",
    "https://twitter.com/ScaleDeskTech",
    "https://github.com/scaledesk-technology",
  ],
  address: {
    streetAddress: "Innovation Hub",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  geo: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  areaServed: ["Worldwide", "India", "United States", "Europe", "APAC"],
  knowsAbout: [
    "Product Engineering",
    "AI Solutions",
    "Enterprise Software Development",
    "Custom Software Development",
    "AI Automation",
    "Business Automation",
    "SaaS Development",
    "MVP Development",
    "CRM Development",
    "HRMS Development",
    "Cloud Native Development",
    "DevOps",
    "Digital Transformation",
    "Technology Consulting",
  ],
  products: [
    { name: "LeadForGrow", slug: "leadforgrow-crm", trademark: "LeadForGrow™" },
    { name: "ScaleDesk HRM", slug: "scaledesk-hrm", trademark: "ScaleDesk HRM™" },
  ],
  founder: {
    name: "Saurabh Singh",
    slug: "saurabh-singh",
    title: "Co-Founder & Chief Technology Officer",
    jobTitle: "Chief Technology Officer",
    role: "Co-Founder",
    email: "saurabh@scaledesktechnology.com",
    linkedIn: "https://www.linkedin.com/in/saurabh-singh-scaledesk",
    sameAs: [
      "https://www.linkedin.com/in/saurabh-singh-scaledesk",
      "https://scaledesktechnology.com/team/saurabh-singh",
      "https://scaledesktechnology.com/about/founder",
      "https://scaledesktechnology.com/about/cto",
    ],
    expertise: [
      "Product Engineering",
      "Enterprise Software Architecture",
      "AI Solutions",
      "Cloud Native Systems",
      "Digital Transformation",
      "Technology Leadership",
    ],
  },
};

export const KEYWORDS = {
  brand: [
    "ScaleDesk Technology",
    "ScaleDesk",
    "Scale Desk",
    "scaledesktechnology.com",
  ],
  core: [
    "Product Engineering Company",
    "Product Engineering Services",
    "Product Engineering India",
    "Software Development Company",
    "Custom Software Development Company",
    "Enterprise Software Development Company",
    "Enterprise Software Company",
    "IT Services Company",
    "IT Consulting Company",
    "Technology Consulting Company",
    "AI Development Company",
    "Artificial Intelligence Company",
    "AI Solutions Company",
    "AI Automation Company",
    "Business Automation Company",
  ],
  products: [
    "LeadForGrow",
    "LeadForGrow CRM",
    "LeadForGrow AI CRM",
    "ScaleDesk HRM",
  ],
  founder: [
    "Saurabh Singh",
    "Saurabh Singh ScaleDesk",
    "Founder ScaleDesk",
    "Co-Founder ScaleDesk",
    "CTO ScaleDesk",
    "Chief Technology Officer ScaleDesk",
  ],
};

export function absoluteUrl(path = "") {
  const base = SITE.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

export function joinKeywords(...groups) {
  return [...new Set(groups.flat())].join(", ");
}
