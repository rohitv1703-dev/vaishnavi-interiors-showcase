import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import {
  ADDRESS_LINES,
  MAP_DIRECTIONS,
  MAP_EMBED,
  PHONE_DISPLAY,
  TEL,
  WHATSAPP,
} from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vaishnavi Interiors — Vasai Studio" },
      {
        name: "description",
        content:
          "Visit our Vasai East studio or message us on WhatsApp. Free consultation and 3D design walkthrough across Vasai, Nalasopara and Virar.",
      },
      { property: "og:title", content: "Contact — Vaishnavi Interiors Vasai" },
      {
        property: "og:description",
        content: "Free consultation. WhatsApp, call or visit our Vasai East studio.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: faqJsonLd() },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "/contact" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <main>
      <header className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            Let's <em className="not-italic gold-gradient-text">talk</em>
          </h1>
          <p className="mt-4 max-w-xl text-[color:var(--muted-foreground)]">
            Free consultation. We respond within 24 hours.
          </p>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="reveal space-y-10">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Studio</div>
              <address className="mt-3 not-italic text-white/90 leading-relaxed">
                {ADDRESS_LINES.map((l, i) => (
                  <span key={i}>
                    {l}
                    <br />
                  </span>
                ))}
              </address>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-gold hover:gap-3 transition-all"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Phone</div>
              <a
                href={TEL}
                className="mt-2 inline-block font-display text-2xl text-white hover:text-gold"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Hours</div>
              <div className="mt-2 text-white/90">Mon – Sat · 10:00 AM – 8:00 PM</div>
              <div className="text-white/60 text-sm">Sunday by appointment</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-[color:var(--gold-soft)]"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/60 text-gold px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="aspect-[16/10] overflow-hidden border border-white/5">
              <iframe
                title="Vaishnavi Interiors location"
                src={MAP_EMBED}
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="reveal max-w-2xl mb-12">
            <SectionHeading eyebrow="FAQ">
              Common <em className="not-italic gold-gradient-text">questions</em>.
            </SectionHeading>
          </div>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
