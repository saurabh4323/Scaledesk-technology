import { buildPageMetadata } from "../../lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Employee Portal",
  path: "/employee",
  metaDescription: "ScaleDesk Technology employee portal.",
  noIndex: true,
  noFollow: true,
});

export default function Layout({ children }) {
  return children;
}
