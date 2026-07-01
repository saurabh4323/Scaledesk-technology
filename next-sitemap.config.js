/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://scaledesktechnology.com",
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/employee/*", "/api/*", "/careers/track", "/careers/opportunities/*/apply"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin/", "/employee/", "/api/"] },
    ],
  },
  additionalPaths: async () => {
    const { getAllSitemapEntries } = await import("./lib/seo/sitemap-urls.js");
    return getAllSitemapEntries().map((entry) => ({
      loc: entry.url.replace("https://scaledesktechnology.com", ""),
      changefreq: entry.changeFrequency,
      priority: entry.priority,
      lastmod: entry.lastModified.toISOString(),
    }));
  },
};
