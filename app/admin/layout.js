import { buildPageMetadata } from "../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Admin",
  path: "/admin",
  metaDescription: "ScaleDesk Technology admin portal.",
  noIndex: true,
  noFollow: true,
});

export default function Layout({ children }) {
  return children;
}
