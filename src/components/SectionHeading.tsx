import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
}: {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gold" />
        <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{eyebrow}</span>
        {align === "center" && <span className="h-px w-10 bg-gold" />}
      </div>
      <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">{children}</h2>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--muted-foreground)]">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? (
            <a href={it.href} className="hover:text-gold transition-colors">
              {it.label}
            </a>
          ) : (
            <span className="text-white/80">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="px-3 text-gold/60">/</span>}
        </span>
      ))}
    </nav>
  );
}
