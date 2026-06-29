import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs, SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site";
import heroImg from "@/assets/interior-231848.jpg";
import img1 from "@/assets/interior-231640.jpg";
import img5 from "@/assets/interior-231820.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vaishnavi Interiors — A Vasai Design Studio" },
      {
        name: "description",
        content:
          "Vaishnavi Interiors is a boutique Vasai-based studio crafting premium homes, modular kitchens and bespoke furniture. Meet our team, process and values.",
      },
      { property: "og:title", content: "About — Vaishnavi Interiors" },
      {
        property: "og:description",
        content: "A boutique Vasai studio devoted to timeless interiors.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <main>
      <header className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            About <em className="not-italic gold-gradient-text">Vaishnavi</em>
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--muted-foreground)] text-lg">
            A Vasai studio devoted to timeless, considered interiors — built by people who care.
          </p>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="reveal">
            <SectionHeading eyebrow="Our story">
              Crafted with{" "}
              <em className="not-italic gold-gradient-text">care</em>, delivered with{" "}
              <em className="not-italic gold-gradient-text">discipline</em>.
            </SectionHeading>
            <div className="mt-8 space-y-5 text-[color:var(--muted-foreground)] leading-relaxed">
              <p>
                Vaishnavi Interiors began as a small carpentry workshop in Vasai. Over time, what
                started as one-off bespoke pieces grew into a full-service interior studio — covering
                modular kitchens, wardrobes, full home interiors and bespoke furniture across Vasai,
                Nalasopara, Virar and the western suburbs.
              </p>
              <p>
                We are intentionally small. Every project is overseen by the same project manager
                from the first site visit to the final handover. There are no franchises, no sub-
                contracted carpentry, no surprises in the final bill.
              </p>
              <p>
                Our reference points are equal parts old-world craft and quiet contemporary
                architecture — fluted timber walls, sculpted brass details, and lighting plans that
                are felt before they are noticed.
              </p>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4 h-[500px]">
            <img src={heroImg} alt="Project" loading="lazy" className="row-span-2 w-full h-full object-cover" />
            <img src={img1} alt="Door" loading="lazy" className="w-full h-full object-cover" />
            <img src={img5} alt="Kitchen" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <SectionHeading eyebrow="Values">
              What we <em className="not-italic gold-gradient-text">stand for</em>.
            </SectionHeading>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Craft", d: "Every joint, edge and finish is built by our in-house team." },
              { t: "Honesty", d: "Fixed quote. Fixed timeline. No mid-project surprises." },
              { t: "Care", d: "One project manager, one point of contact, from start to finish." },
              { t: "Warranty", d: "10-year warranty on modular elements, served by our own team." },
            ].map((v, i) => (
              <div key={v.t} className="reveal glass p-7">
                <div className="font-display text-gold text-xs tracking-[0.3em]">0{i + 1}</div>
                <div className="mt-4 font-display text-xl text-white">{v.t}</div>
                <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <SectionHeading eyebrow="Our process">
              Five steps from{" "}
              <em className="not-italic gold-gradient-text">brief to handover</em>.
            </SectionHeading>
          </div>
          <ol className="mt-16 relative grid md:grid-cols-5 gap-10 md:gap-4">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            {processSteps.map((p, i) => (
              <li key={p.t} className="reveal relative text-center">
                <div className="mx-auto h-12 w-12 rounded-full border border-gold/60 grid place-items-center font-display text-gold relative z-10 bg-background">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-4xl px-5 md:px-10 text-center reveal">
          <SectionHeading eyebrow="Let's talk" align="center">
            Start your <em className="not-italic gold-gradient-text">project</em>.
          </SectionHeading>
          <p className="mt-6 text-[color:var(--muted-foreground)] max-w-xl mx-auto">
            Book a free consultation. We'll visit, listen, measure, and share a 3D plan within a
            week.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
