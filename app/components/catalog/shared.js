export const BLUE = "#2F80FF";

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

export function headingFont(className = "") {
  return `${className}`.trim();
}

export const HEADING_STYLE = { fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" };

export function DarkBreadcrumbs({ children }) {
  return (
    <div className="mb-8 [&_a]:text-white/50 [&_a:hover]:text-white [&_span]:text-white/70">
      {children}
    </div>
  );
}
