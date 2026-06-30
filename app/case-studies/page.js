import Footer from "../components/Footer";
import CaseStudiesListPage from "../components/case-studies/CaseStudiesListPage";

export const metadata = {
  title: "Case Studies | ScaleDesk Technology",
  description:
    "Explore how ScaleDesk Technology engineers products for retail, fintech, healthcare, SaaS, and logistics—with measurable business outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesListPage />
      <Footer />
    </>
  );
}
