export default function BrandLogo({ variant = "navbar", className = "" }) {
  const sizeMap = {
    navbar: "text-[15px]",
    medium: "text-[19px]",
    large: "text-[24px]",
  };

  return (
    <span
      className={`whitespace-nowrap tracking-[-0.02em] leading-none ${sizeMap[variant] || sizeMap.navbar} ${className}`}
      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
    >
      <span className="font-bold text-[#2F80FF]">Scaledesk</span>
      <span className="font-medium text-white"> Technology</span>
    </span>
  );
}
