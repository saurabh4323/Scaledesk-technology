import { buildPageMetadata } from "../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact ScaleDesk Technology",
  seoTitle: "Contact Product Engineering Team | ScaleDesk Technology",
  metaDescription:
    "Contact ScaleDesk Technology for Product Engineering, AI Solutions, Enterprise Software Development, and Technology Consulting. Talk to our engineering team.",
  path: "/contact",
  primaryKeyword: "Contact ScaleDesk Technology",
  secondaryKeywords: ["Product Engineering Consultation", "AI Solutions Contact", "Software Development Inquiry"],
});

export default function Layout({ children }) {
  return children;
}
