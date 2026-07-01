import { buildPageMetadata } from "../../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Security",
  seoTitle: "Security | ScaleDesk Technology",
  metaDescription:
    "ScaleDesk Technology security practices — infrastructure protection, application security, data encryption, access controls, and incident response for enterprise products.",
  path: "/legal/security",
  primaryKeyword: "ScaleDesk Security",
});

export default function Layout({ children }) {
  return children;
}
