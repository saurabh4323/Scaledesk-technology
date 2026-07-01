import { buildPageMetadata } from "../../../lib/seo/metadata";
import { getService } from "../../../lib/seo/services";

export const metadata = buildPageMetadata(getService("software-engineering"));

export default function Layout({ children }) {
  return children;
}
