import { buildPageMetadata } from "../../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  seoTitle: "Cookie Policy | ScaleDesk Technology",
  metaDescription:
    "ScaleDesk Technology cookie policy — how we use cookies and similar technologies on our website and products, and how you can manage preferences.",
  path: "/legal/cookie-policy",
  primaryKeyword: "ScaleDesk Cookie Policy",
});

export default function Layout({ children }) {
  return children;
}
