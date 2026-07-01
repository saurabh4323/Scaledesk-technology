import Footer from "../../components/Footer";
import FounderPageContent from "../../components/seo/FounderPageContent";
import { FOUNDER, FOUNDER_PAGES } from "../../../lib/seo/founder";
import { buildPageMetadata } from "../../../lib/seo/metadata";

const page = FOUNDER_PAGES.cto;

export const metadata = buildPageMetadata({
  ...page,
  title: page.seoTitle,
  description: page.metaDescription,
  secondaryKeywords: ["Chief Technology Officer ScaleDesk", "CTO ScaleDesk Technology"],
  ogImage: FOUNDER.ogImage,
});

export default function CTOPage() {
  return (
    <>
      <FounderPageContent
        pageMeta={page}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "CTO", path: "/about/cto" },
        ]}
        emphasis="cto"
      />
      <Footer />
    </>
  );
}
