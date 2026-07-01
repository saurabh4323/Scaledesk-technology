import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CaseStudyHero from "../../components/case-studies/CaseStudyHero";
import RelatedCaseStudies from "../../components/case-studies/RelatedCaseStudies";
import CaseStudyContent from "../../components/case-studies/CaseStudyContent";
import JsonLd from "../../components/seo/JsonLd";
import {
  CASE_STUDIES,
  getCaseStudy,
  getCaseStudySlugs,
} from "../../data/caseStudies";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph, articleSchema } from "../../../lib/seo/schema";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study | ScaleDesk Technology" };

  return buildPageMetadata({
    title: study.title,
    seoTitle: `${study.title} | ScaleDesk Case Study`,
    metaDescription: study.excerpt,
    path: `/case-studies/${slug}`,
    primaryKeyword: "Product Engineering Case Study",
    secondaryKeywords: [study.industry, "ScaleDesk Technology", "Enterprise Software"],
    ogImage: study.image,
    ogType: "article",
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const related = CASE_STUDIES.filter((s) => s.slug !== slug).slice(0, 3);
  const path = `/case-studies/${slug}`;

  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: study.title, path },
    ],
    page: { title: study.title, description: study.excerpt, path },
    article: {
      title: study.title,
      description: study.excerpt,
      path,
      image: study.image,
      section: study.industry || "Case Study",
    },
  });

  return (
    <>
      <JsonLd data={graph} />
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
    </>
  );
}
