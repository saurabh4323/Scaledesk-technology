import { buildPageMetadata } from "../../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "LinkedIn",
  seoTitle: "LinkedIn | ScaleDesk Technology",
  metaDescription:
    "Connect with ScaleDesk Technology on LinkedIn — company news, product updates, engineering insights, and career opportunities.",
  path: "/legal/linkedin",
  primaryKeyword: "ScaleDesk Technology LinkedIn",
});

export default function Layout({ children }) {
  return children;
}
