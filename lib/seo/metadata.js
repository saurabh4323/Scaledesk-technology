import { SITE, absoluteUrl, joinKeywords } from "./config";

const KEYWORDS_FALLBACK = [
  "Product Engineering",
  "AI Solutions",
  "Enterprise Software",
  "Software Development",
  "IT Services",
  "Technology Consulting",
];

/**
 * Build production-ready Next.js Metadata object.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage,
  ogType = "website",
  noIndex = false,
  noFollow = false,
  publishedTime,
  modifiedTime,
  authors,
  section,
  alternates = {},
}) {
  const canonical = absoluteUrl(path);
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : absoluteUrl(SITE.defaultOgImage);

  const fullTitle = title.includes(SITE.name)
    ? title
    : `${title} | ${SITE.name}`;

  const robots = {
    index: !noIndex,
    follow: !noFollow,
    googleBot: {
      index: !noIndex,
      follow: !noFollow,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };

  return {
    title: fullTitle,
    description,
    keywords: joinKeywords(keywords, KEYWORDS_FALLBACK),
    authors: authors?.map((a) =>
      typeof a === "string" ? { name: a, url: absoluteUrl("/team/saurabh-singh") } : a
    ) ?? [{ name: SITE.founder.name, url: absoluteUrl("/team/saurabh-singh") }],
    creator: SITE.founder.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      ...alternates,
    },
    openGraph: {
      type: ogType,
      locale: SITE.locale,
      url: canonical,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      title: fullTitle,
      description,
      images: [image],
    },
    robots,
    category: "technology",
    other: {
      "geo.region": SITE.address.addressRegion,
      "geo.placename": SITE.address.addressLocality,
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },
  };
}

export function buildPageMetadata(page) {
  return buildMetadata({
    title: page.seoTitle || page.title,
    description: page.metaDescription || page.description,
    path: page.path,
    keywords: [
      page.primaryKeyword,
      ...(page.secondaryKeywords || []),
      ...(page.longTailKeywords || []),
      ...(page.lsiKeywords || []),
      ...(page.semanticKeywords || []),
    ].filter(Boolean),
    ogImage: page.ogImage,
    ogType: page.ogType || "website",
    noIndex: page.noIndex,
    noFollow: page.noFollow,
    publishedTime: page.publishedTime,
    modifiedTime: page.modifiedTime,
    authors: page.authors,
    section: page.section,
  });
}
