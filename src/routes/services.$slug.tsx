import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeading } from "@/components/SectionHeading";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactForm } from "@/components/ContactForm";
import { getService, services } from "@/data/services";
import { processSteps } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    const title = `${s.keyword} | Vaishnavi Interiors`;
    return {
      meta: [
        { title },
        { name: "description", content: s.intro.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:image", content: s.hero },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            areaServed: ["Vasai", "Vasai East", "Nalasopara", "Virar"],
            provider: { "@type": "LocalBusiness", name: "Vaishnavi Interiors" },
            offers: { "@type": "Offer", price: s.fromPrice, priceCurrency: "INR" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              { "@type": "ListItem", position: 3, name: s.title, item: `/services/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-24 mx-auto max-w-3xl px-5 text-center">
      <h1 className="font-display text-5xl text-white">Service not found</h1>
      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 text-[11px] tracking-[0.3em] uppercase"
      >
        Back to services
      </Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  useReveal();
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <section className="relative pt-28 md:pt-32 min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={service.hero}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/55 to-[#0B0B0B]" />
        </div>
        <div className="relative w-full mx-auto max-w-7xl px-5 md:px-10 pb-16 md:pb-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-white">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[color:var(--muted-foreground)] text-lg">
            {service.short}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-14">
          <div className="reveal">
            <SectionHeading eyebrow="What's included">
              Built around <em className="not-italic gold-gradient-text">your home</em>.
            </SectionHeading>
            <p className="mt-6 text-[color:var(--muted-foreground)] leading-relaxed text-lg">
              {service.intro}
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {service.bullets.map((b: string) => (
                <li key={b} className="flex items-start gap-3 text-white/85">
                  <span className="text-gold mt-0.5">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="reveal bg-[color:var(--card)] border border-white/5 p-7 md:p-8 h-fit lg:sticky lg:top-28">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Starts from</div>
            <div className="mt-2 font-display text-4xl gold-gradient-text">{service.fromPrice}</div>
            <p className="mt-4 text-xs text-[color:var(--muted-foreground)] leading-relaxed">
              Indicative starting price for a typical project. Final quote depends on size,
              materials and finishes.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center w-full bg-gold text-[#0B0B0B] py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
            >
              Get a Quote
            </Link>
            <Link
              to="/portfolio"
              className="mt-3 inline-flex items-center justify-center w-full border border-gold/60 text-gold py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
            >
              See Past Work
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl mb-12">
            <SectionHeading eyebrow="Our process">
              How we deliver this <em className="not-italic gold-gradient-text">{service.title}</em>.
            </SectionHeading>
          </div>
          <ol className="grid md:grid-cols-5 gap-8">
            {processSteps.map((p, i) => (
              <li key={p.t} className="reveal">
                <div className="font-display text-gold text-2xl">0{i + 1}</div>
                <div className="mt-3 h-px w-10 bg-gold/60" />
                <h3 className="mt-5 font-display text-xl text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl mb-12">
            <SectionHeading eyebrow="Estimate">
              Try the <em className="not-italic gold-gradient-text">cost calculator</em>.
            </SectionHeading>
          </div>
          <CostCalculator />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <SectionHeading eyebrow="Start your project">
              Tell us about your <em className="not-italic gold-gradient-text">space</em>.
            </SectionHeading>
            <p className="mt-6 text-[color:var(--muted-foreground)]">
              Share a few quick details and we'll get back within 24 hours to schedule your free
              consultation.
            </p>
            <div className="mt-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Other services</div>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="font-display text-2xl text-white hover:text-gold transition-colors"
                    >
                      {o.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm initialType={service.title} />
        </div>
      </section>
    </main>
  );
}
