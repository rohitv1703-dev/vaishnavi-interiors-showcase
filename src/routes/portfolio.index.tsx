import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeading } from "@/components/SectionHeading";
import { projects, categories } from "@/data/projects";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Vaishnavi Interiors Vasai" },
      {
        name: "description",
        content:
          "Explore 17+ completed interior design projects across Vasai and Nalasopara — modular kitchens, wardrobes, TV units, pooja rooms, safety doors and full homes.",
      },
      { property: "og:title", content: "Portfolio — Vaishnavi Interiors" },
      {
        property: "og:description",
        content: "Recent interior design projects across Vasai & Nalasopara.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "/portfolio" },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  useReveal();
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <main>
      <header className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            Our <em className="not-italic gold-gradient-text">Portfolio</em>
          </h1>
          <p className="mt-4 max-w-xl text-[color:var(--muted-foreground)]">
            A complete archive of homes we've shaped across Vasai, Vasai East, Nalasopara and
            Virar.
          </p>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase border transition-colors ${
                  filter === c
                    ? "border-gold text-gold bg-gold/5"
                    : "border-white/10 text-white/70 hover:border-white/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="reveal group relative overflow-hidden aspect-[4/5]"
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
                    {p.category} · {p.location}
                  </div>
                  <div className="mt-2 font-display text-xl md:text-2xl text-white leading-tight">
                    {p.title}
                  </div>
                  <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-[color:var(--muted-foreground)]">
              No projects in this category yet.
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <SectionHeading eyebrow="Like what you see?" align="center">
            Let's build <em className="not-italic gold-gradient-text">yours</em>.
          </SectionHeading>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
          >
            Start your project
          </Link>
        </div>
      </section>
    </main>
  );
}
