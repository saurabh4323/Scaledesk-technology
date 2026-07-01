"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxImage } from "../../components/Parallax";
import { getInsight, INSIGHTS } from "../../data/insights";

const BLUE = "#2F80FF";

export default function InsightArticleContent({ article }) {
  const related = INSIGHTS.filter(
    (item) => item.slug !== article.slug && item.category === article.category
  ).slice(0, 2);

  return (
    <main className="bg-white text-zinc-900">
      <section className="relative min-h-[50vh] flex items-end bg-black">
        <ParallaxImage className="absolute inset-0" speed={14} scale={1.14}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/30" />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 xl:px-12 pb-14 pt-32">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            ← All insights
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#2F80FF] bg-[#2F80FF]/15 border border-[#2F80FF]/25">
              {article.type}
            </span>
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/60 border border-white/15">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
            {article.title}
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/45">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <article className="max-w-[900px] mx-auto px-6 xl:px-12 py-16 md:py-24">
        <div className="space-y-6 text-[17px] text-zinc-600 leading-relaxed">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-zinc-50 border-t border-zinc-200 py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-12">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-8">Related insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="group grid sm:grid-cols-5 gap-5 bg-white border border-zinc-200 p-5 hover:border-[#2F80FF]/30 transition-colors"
                >
                  <div className="sm:col-span-2 relative h-36 sm:h-auto min-h-[8rem] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-[10px] uppercase tracking-widest text-[#2F80FF] mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-[#2F80FF] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-black text-center px-6">
        <Link
          href="/contact"
          className="inline-flex px-8 py-3.5 text-sm font-semibold text-white"
          style={{ backgroundColor: BLUE }}
        >
          Discuss this topic with our team →
        </Link>
      </section>
    </main>
  );
}
