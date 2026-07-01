import Image from "next/image";
import Link from "next/link";
import { BLUE } from "../../data/catalog-display";

export default function CatalogCard({ item, large = false, basePath = "" }) {
  const href = item.href || `${basePath}/${item.slug}`;

  return (
    <Link
      href={href}
      className={`group block bg-white border border-zinc-200 hover:border-[#2F80FF]/50 transition-all duration-300 ${
        large ? "grid lg:grid-cols-2 shadow-sm hover:shadow-lg" : "hover:shadow-md"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-zinc-100 ${
          large ? "min-h-[300px] lg:min-h-full" : "h-52 md:h-56"
        }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt || item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>

      <div className={`flex flex-col justify-between ${large ? "p-8 lg:p-12" : "p-6 md:p-7"}`}>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            {item.tagline}
          </span>
          <h2
            className={`font-semibold text-zinc-900 tracking-tight leading-snug group-hover:text-[#2F80FF] transition-colors ${
              large ? "text-3xl md:text-4xl mb-4 mt-3" : "text-xl mb-3 mt-2"
            }`}
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            {item.name}
          </h2>
          <p className={`text-zinc-600 leading-relaxed font-light ${large ? "text-base md:text-lg" : "text-sm"}`}>
            {item.description}
          </p>
          {item.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-600 border border-zinc-200 bg-zinc-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {(item.metric || item.metricLabel) && (
          <div className="flex items-end justify-between mt-8 pt-5 border-t border-zinc-100">
            <div>
              {item.metric && (
                <div className="text-xl md:text-2xl font-semibold tracking-tight" style={{ color: BLUE }}>
                  {item.metric}
                </div>
              )}
              {item.metricLabel && (
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5">
                  {item.metricLabel}
                </div>
              )}
            </div>
            <span className="text-xs font-semibold text-zinc-400 group-hover:text-[#2F80FF] transition-colors flex items-center gap-1">
              Explore
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
