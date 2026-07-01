export function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 ${
        dark ? "text-white/45" : "text-zinc-500"
      }`}
    >
      {children}
    </p>
  );
}

export function DarkBreadcrumbs({ items, Breadcrumbs }) {
  return (
    <div className="mb-8 [&_a]:text-white/50 [&_a:hover]:text-white [&_span]:text-white/70 [&_li]:text-zinc-500">
      <Breadcrumbs items={items} />
    </div>
  );
}

export { BLUE } from "../../data/catalog-display";
