export default function BrandLogo({ variant = "navbar", className = "" }) {
  const sizeMap = {
    navbar: "text-[15px] md:text-[16px]",
    medium: "text-[19px]",
    large: "text-[24px]",
  };

  return (
    <span
      className={`whitespace-nowrap tracking-[-0.03em] leading-none ${sizeMap[variant] || sizeMap.navbar} ${className}`}
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      <span className="font-bold" style={{ color: "#2F80FF" }}>
        Scaledesk
      </span>
      <span className="font-medium text-white/95"> Technology</span>
    </span>
  );
}
