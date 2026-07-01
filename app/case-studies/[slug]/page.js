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
    <main className="bg-white min-h-screen text-zinc-900 flex flex-col">
      <CaseStudyHero study={study} />
      <CaseStudyContent study={study} />
      <RelatedCaseStudies studies={related} />
      <section className="py-16 bg-black text-center px-6">
        <a
          href="/contact"
          className="inline-flex px-8 py-3.5 text-sm font-semibold text-white bg-[#2F80FF] hover:opacity-90 transition-opacity"
        >
          Discuss a similar project with our team →
        </a>
      </section>
      <Footer />
    </main>
  );
}
