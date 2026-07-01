import Link from "next/link";

export default function Breadcrumbs({ items }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol
        className="flex flex-wrap items-center gap-2 text-[13px] text-zinc-500"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.path}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && (
                <span className="text-zinc-700 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span itemProp="name" className="text-zinc-400" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  itemProp="item"
                  className="text-zinc-500 hover:text-blue-400 transition-colors"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
