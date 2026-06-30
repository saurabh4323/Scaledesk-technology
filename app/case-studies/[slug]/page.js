import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CaseStudyHero from "../../components/case-studies/CaseStudyHero";
import RelatedCaseStudies from "../../components/case-studies/RelatedCaseStudies";
import CaseStudyContent from "../../components/case-studies/CaseStudyContent";
import {
  CASE_STUDIES,
  getCaseStudy,
  getCaseStudySlugs,
} from "../../data/caseStudies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study | ScaleDesk Technology" };

  return {
    title: `${study.title} | ScaleDesk Technology`,
    description: study.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const related = CASE_STUDIES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="bg-black min-h-screen text-white flex flex-col">
      <CaseStudyHero study={study} />
      <CaseStudyContent study={study} />
      <RelatedCaseStudies studies={related} />
      <Footer />
    </main>
  );
}
