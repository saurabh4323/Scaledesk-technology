import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import InsightArticleContent from "../../components/insights/InsightArticleContent";
import { getInsight, getInsightSlugs } from "../../data/insights";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Insight | ScaleDesk Technology" };

  return {
    title: `${article.title} | ScaleDesk Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) notFound();

  return (
    <>
      <InsightArticleContent article={article} />
      <Footer />
    </>
  );
}
