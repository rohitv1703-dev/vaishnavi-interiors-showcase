import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeading } from "@/components/SectionHeading";
import { CostCalculator } from "@/components/CostCalculator";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Interior Design Services in Vasai — Vaishnavi Interiors" },
      {
        name: "description",
        content:
          "Modular kitchens, wardrobes, TV units, pooja units, safety doors and full home interiors in Vasai, Vasai East, Nalasopara and Virar. Includes a cost calculator.",
      },
      { property: "og:title", content: "Services — Vaishnavi Interiors" },
      {
        property: "og:description",
        content: "Premium interior design services in Vasai with a free cost calculator.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();
  return (
    <main>
      <header className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            Interior Design <em className="not-italic gold-gradient-text">Services</em>
          </h1>
          <p className="mt-4 max-w-xl text-[color:var(--muted-foreground)]">
            Everything you need to design, build and move into a beautiful home — under one roof.
          </p>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="reveal group relative block overflow-hidden bg-[color:var(--card)] border border-white/5 hover:border-gold/40 transition-colors"
            >
              <div className="grid grid-cols-[1.1fr_1fr]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.hero}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                </div>
                <div className="p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
                      Service {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-3 font-display text-2xl md:text-3xl text-white">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">From</div>
                      <div className="font-display text-xl gold-gradient-text">{s.fromPrice}</div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Learn more →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl mb-12">
            <SectionHeading eyebrow="Instant estimate">
              Plan your <em className="not-italic gold-gradient-text">budget</em>.
            </SectionHeading>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              Pick your home size and what you'd like done. We'll show an indicative range.
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>
    </main>
  );
}
