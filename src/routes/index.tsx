import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/interior-231848.jpg";
import img1 from "@/assets/interior-231640.jpg";
import img3 from "@/assets/interior-231708.jpg";
import img5 from "@/assets/interior-231820.jpg";

import { useReveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { reviews, processSteps } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaishnavi Interiors | Premium Interior Designer in Vasai" },
      {
        name: "description",
        content:
          "Luxury home interiors, modular kitchens, wardrobes, furniture, safety doors and renovation in Vasai. 4.8★ Google rated, 22+ happy clients.",
      },
      {
        property: "og:title",
        content: "Vaishnavi Interiors | Premium Interior Designer in Vasai",
      },
      {
        property: "og:description",
        content: "Crafting beautiful living spaces in Vasai. 4.8★ Google rated.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd() }],
  }),
  component: Index,
});

function useCounter(target: number, run: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

function Stat({
  value,
  suffix,
  label,
  fixed = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  fixed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setRun(true),
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCounter(value, run);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl gold-gradient-text">
        {n.toFixed(fixed)}
        {suffix}
      </div>
      <div className="mt-3 text-sm tracking-[0.25em] uppercase text-[color:var(--muted-foreground)]">
        {label}
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const featured = [projects[1], projects[5], projects[6], projects[2], projects[11], projects[0]];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium living room interior by Vaishnavi Interiors in Vasai"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/55 to-[#0B0B0B]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0B0B_85%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 animate-fade-up">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                Vasai · Est. Luxury Interiors
              </span>
            </div>
            <h1
              className="mt-8 font-display text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] text-white animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Crafting <em className="not-italic gold-gradient-text">Beautiful</em>
              <br />
              Living Spaces
            </h1>
            <p
              className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[color:var(--muted-foreground)] animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Luxury Interior Design · Modular Kitchen · Wardrobes · Furniture · Home Renovation ·
              Safety Doors.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 bg-gold text-[#0B0B0B] px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)] transition-colors"
              >
                View Portfolio
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
            <div
              className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-xs text-[color:var(--muted-foreground)] animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <span className="text-gold font-medium">4.8★</span> Google Rating
              </div>
              <div>
                <span className="text-gold font-medium">22+</span> Happy Clients
              </div>
              <div>
                <span className="text-gold font-medium">10+</span> Services
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/50 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Scroll
        </div>
      </section>

      {/* About teaser */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <SectionHeading eyebrow="About the studio">
              A Vasai studio devoted to{" "}
              <em className="not-italic gold-gradient-text">timeless interiors</em>.
            </SectionHeading>
            <p className="mt-6 text-[color:var(--muted-foreground)] leading-relaxed">
              At Vaishnavi Interiors we treat every home as a one-off commission. From the first
              sketch to the final reveal, our designers and master carpenters work closely with you
              to build spaces that feel considered, generous and quietly luxurious.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {[
                "Experienced Designers",
                "Premium Materials",
                "Custom Furniture",
                "Modern Designs",
                "Fixed Timelines",
                "Customer Satisfaction",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/85">
                  <span className="text-gold">✓</span> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold hover:gap-3 transition-all"
            >
              Read our story <span>→</span>
            </Link>
          </div>
          <div className="reveal grid grid-cols-6 grid-rows-6 gap-3 h-[460px] md:h-[560px]">
            <div className="col-span-4 row-span-4 overflow-hidden">
              <img src={heroImg} alt="Living room" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden">
              <img src={img1} alt="Door" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden">
              <img src={img3} alt="Wardrobe" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-4 row-span-2 overflow-hidden">
              <img src={img5} alt="Kitchen" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="relative py-28 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <SectionHeading eyebrow="Services">
              Everything your home needs,{" "}
              <em className="not-italic gold-gradient-text">under one roof</em>.
            </SectionHeading>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="reveal group relative bg-[color:var(--card)] p-8 md:p-10 overflow-hidden transition-colors hover:bg-[#181818]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-gold text-sm tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-white/10 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-[28px] text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {s.short}
                </p>
                <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  View service →
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-gold/60 text-gold px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Selected work">
                Recent <em className="not-italic gold-gradient-text">projects</em>.
              </SectionHeading>
            </div>
            <p className="max-w-sm text-sm text-[color:var(--muted-foreground)]">
              A glimpse into homes we've shaped across Vasai &amp; Nalasopara.
            </p>
          </div>

          <Link
            to="/portfolio/$slug"
            params={{ slug: featured[0].slug }}
            className="reveal mt-14 relative block w-full group overflow-hidden"
          >
            <img
              src={featured[0].src}
              alt={featured[0].title}
              loading="lazy"
              className="w-full h-[55vh] md:h-[80vh] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-left">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold">
                {featured[0].category} · {featured[0].location}
              </div>
              <div className="mt-3 font-display text-3xl md:text-5xl text-white">
                {featured[0].title}
              </div>
            </div>
          </Link>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-6">
            {featured.slice(1).map((p) => (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="reveal group relative overflow-hidden"
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold">
                    {p.category}
                  </div>
                  <div className="mt-1 font-display text-base md:text-xl text-white leading-tight">
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)] transition-colors"
            >
              See Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/5 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value={22} suffix="+" label="Happy Clients" />
          <Stat value={4.8} fixed={1} suffix="★" label="Google Rating" />
          <Stat value={100} suffix="%" label="Satisfaction" />
          <Stat value={10} suffix="+" label="Services" />
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <SectionHeading eyebrow="Our process">
              From concept to{" "}
              <em className="not-italic gold-gradient-text">key handover</em>.
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

      {/* Reviews */}
      <section className="py-28 md:py-36 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Testimonials">
                Voices from our <em className="not-italic gold-gradient-text">clients</em>.
              </SectionHeading>
            </div>
            <div className="text-right">
              <div className="text-gold text-2xl">★★★★★</div>
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--muted-foreground)] mt-1">
                4.8 · 22+ reviews
              </div>
            </div>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure
                key={i}
                className="reveal bg-[color:var(--card)] border border-white/5 p-8 hover:border-gold/40 transition-colors"
              >
                <div className="text-gold text-sm">
                  {"★".repeat(r.r)}
                  {"☆".repeat(5 - r.r)}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-white">
                  "{r.q}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gold/15 text-gold grid place-items-center font-display">
                    {r.n[0]}
                  </div>
                  <div>
                    <div className="text-sm text-white">{r.n}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]">
                      Verified client
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <div className="reveal max-w-2xl mb-12">
            <SectionHeading eyebrow="FAQ">
              Common <em className="not-italic gold-gradient-text">questions</em>.
            </SectionHeading>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-4xl px-5 md:px-10 text-center reveal">
          <SectionHeading eyebrow="Start your project" align="center">
            Let's design your{" "}
            <em className="not-italic gold-gradient-text">dream home</em>.
          </SectionHeading>
          <p className="mt-6 text-[color:var(--muted-foreground)] max-w-xl mx-auto">
            Book a free consultation and a 3D walkthrough — we'll respond within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
            >
              Request a Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-gold/60 text-gold px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
            >
              Estimate Cost
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
