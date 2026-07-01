/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
        ],
      },
      {
        source: "/(.*\\.(?:jpg|jpeg|png|webp|avif|svg|ico|woff2))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      { source: "/service/:slug", destination: "/services/:slug", permanent: true },
      { source: "/product/:slug", destination: "/products/:slug", permanent: true },
      { source: "/leadforgrow", destination: "/products/leadforgrow-crm", permanent: true },
      { source: "/leadforgrow-crm", destination: "/products/leadforgrow-crm", permanent: true },
      { source: "/hrm", destination: "/products/scaledesk-hrm", permanent: true },
      { source: "/scaledesk-hrm", destination: "/products/scaledesk-hrm", permanent: true },
      { source: "/founder", destination: "/about/founder", permanent: true },
      { source: "/cto", destination: "/about/cto", permanent: true },
      { source: "/author/saurabh-singh", destination: "/team/saurabh-singh", permanent: true },
      { source: "/saurabh-singh", destination: "/team/saurabh-singh", permanent: true },
      { source: "/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/terms", destination: "/legal/terms-of-service", permanent: true },
      { source: "/cookies", destination: "/legal/cookie-policy", permanent: true },
      { source: "/company", destination: "/about", permanent: true },
      { source: "/platform", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
