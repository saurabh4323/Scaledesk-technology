import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import InsightArticleContent from "../../components/insights/InsightArticleContent";
import JsonLd from "../../components/seo/JsonLd";
import { getInsight, getInsightSlugs } from "../../data/insights";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { pageGraph, articleSchema } from "../../../lib/seo/schema";

export function generateStaticParams() {
  return getInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Insight | ScaleDesk Technology" };

  return buildPageMetadata({
    title: article.title,
    seoTitle: `${article.title} | ScaleDesk Insights`,
    metaDescription: article.excerpt,
    path: `/insights/${slug}`,
    primaryKeyword: article.category,
    secondaryKeywords: [article.type, "ScaleDesk Technology", "Product Engineering"],
    ogImage: article.image,
    ogType: "article",
    authors: [{ name: article.author, url: "https://scaledesktechnology.com/team/saurabh-singh" }],
    section: article.category,
  });
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) notFound();

  const path = `/insights/${slug}`;
  const graph = pageGraph({
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: article.title, path },
    ],
    page: { title: article.title, description: article.excerpt, path },
    article: {
      title: article.title,
      description: article.excerpt,
      path,
      datePublished: article.date,
      image: article.image,
      authorName: article.author,
      section: article.category,
    },
  });

  return (
    <>
      <JsonLd data={graph} />
      <InsightArticleContent article={article} />
      <Footer />
    </>
  );
}
