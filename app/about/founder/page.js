import Link from "next/link";
import Footer from "../../components/Footer";
import FounderPageContent from "../../components/seo/FounderPageContent";
import { FOUNDER, FOUNDER_PAGES } from "../../../lib/seo/founder";
import { buildPageMetadata } from "../../../lib/seo/metadata";

const page = FOUNDER_PAGES.founder;

export const metadata = buildPageMetadata({
  ...page,
  title: page.seoTitle,
  description: page.metaDescription,
  secondaryKeywords: FOUNDER.secondaryKeywords,
  ogImage: FOUNDER.ogImage,
});

export default function FounderPage() {
  return (
    <>
      <FounderPageContent
        pageMeta={page}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Founder", path: "/about/founder" },
        ]}
      />
      <Footer />
    </>
  );
}
