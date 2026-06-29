import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import img1 from "@/assets/interior-231640.png.asset.json";
import img2 from "@/assets/interior-231654.png.asset.json";
import img3 from "@/assets/interior-231708.png.asset.json";
import img4 from "@/assets/interior-231757.png.asset.json";
import img5 from "@/assets/interior-231820.png.asset.json";
import img6 from "@/assets/interior-231831.png.asset.json";
import img7 from "@/assets/interior-231848.png.asset.json";
import img8 from "@/assets/interior-231901.png.asset.json";
import img9 from "@/assets/interior-231927.png.asset.json";
import img10 from "@/assets/interior-232001.png.asset.json";
import img11 from "@/assets/interior-232018.png.asset.json";
import img12 from "@/assets/interior-232032.png.asset.json";
import img13 from "@/assets/interior-232054.png.asset.json";
import img14 from "@/assets/interior-232107.png.asset.json";
import img15 from "@/assets/interior-232122.png.asset.json";
import img16 from "@/assets/interior-232135.png.asset.json";
import img17 from "@/assets/interior-232232.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaishnavi Interiors | Premium Interior Designer in Vasai" },
      {
        name: "description",
        content:
          "Luxury home interiors, modular kitchens, wardrobes, furniture, false ceiling, safety doors, office interiors and renovation in Vasai. 4.8★ Google rated.",
      },
      { property: "og:title", content: "Vaishnavi Interiors | Premium Interior Designer in Vasai" },
      { property: "og:description", content: "Crafting beautiful living spaces in Vasai. 4.8★ Google rated. 22+ happy clients." },
      { property: "og:image", content: img7.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vaishnavi Interiors",
          image: img7.url,
          telephone: "+91 95793 22314",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No.11, Shubham Building, Near KK Hospital, Opp. Shanti Lifespaces, Yashvant Viva Township",
            addressLocality: "Vasai East",
            addressRegion: "Maharashtra",
            postalCode: "401208",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "22" },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "919579322314";
const PHONE_DISPLAY = "+91 95793 22314";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Vaishnavi Interiors, I'd like a free consultation.")}`;
const TEL = `tel:+${PHONE}`;

const projects = [
  { src: img1.url, title: "Carved Wooden Safety Door", category: "Safety Door", location: "Vasai East" },
  { src: img7.url, title: "Cinematic Living Room", category: "Living Room", location: "Vasai" },
  { src: img6.url, title: "Walnut TV Unit & Cove Lighting", category: "TV Unit", location: "Vasai" },
  { src: img2.url, title: "Fluted Wall Panelling", category: "Wall Design", location: "Vasai East" },
  { src: img10.url, title: "Floating Shelf TV Console", category: "TV Unit", location: "Nalasopara" },
  { src: img5.url, title: "Modular Kitchen — Aubergine Gloss", category: "Modular Kitchen", location: "Vasai" },
  { src: img3.url, title: "CNC Carved Wardrobe", category: "Wardrobe", location: "Vasai" },
  { src: img4.url, title: "Sliding Bedroom Wardrobe", category: "Wardrobe", location: "Vasai East" },
  { src: img8.url, title: "4-Door Wardrobe + Vanity", category: "Bedroom", location: "Nalasopara" },
  { src: img9.url, title: "Kids Room — Themed Wardrobe", category: "Kids Room", location: "Vasai" },
  { src: img11.url, title: "Framed Wall Art & Accent Cladding", category: "Wall Design", location: "Vasai" },
  { src: img12.url, title: "Temple Unit with 3D Cladding", category: "Pooja Room", location: "Vasai East" },
  { src: img13.url, title: "Custom Study & Workstation", category: "Study Room", location: "Nalasopara" },
  { src: img14.url, title: "Bespoke Bed with Storage", category: "Bedroom", location: "Vasai" },
  { src: img15.url, title: "Solid Wood Storage Console", category: "Furniture", location: "Vasai" },
  { src: img16.url, title: "Designer Entry Door — Mandala", category: "Safety Door", location: "Vasai East" },
  { src: img17.url, title: "Minimal Sliding Wardrobe", category: "Wardrobe", location: "Nalasopara" },
];

const services = [
  { t: "Home Interiors", d: "End-to-end turnkey interiors crafted around how you live." },
  { t: "Modular Kitchen", d: "Ergonomic layouts with premium hardware and finishes." },
  { t: "Wardrobes", d: "Sliding, hinged & walk-in — built to the millimetre." },
  { t: "TV Units", d: "Statement media walls with cove lighting and storage." },
  { t: "Bedroom Design", d: "Restful, layered spaces with bespoke joinery." },
  { t: "Living Room Design", d: "Sculpted spaces that frame everyday moments." },
  { t: "False Ceiling", d: "Architectural ceilings with concealed lighting." },
  { t: "Safety Doors", d: "Hand-carved doors that make an entrance." },
  { t: "Furniture", d: "Custom pieces — beds, sofas, dining, study units." },
  { t: "Office Interiors", d: "Workspaces that signal credibility and calm." },
  { t: "Renovation", d: "Complete makeovers, on-time, on-budget." },
];

const reviews = [
  { n: "Rohit S.", r: 5, q: "Best carpenter, very talented. The detailing on our wardrobe was unreal." },
  { n: "Priya M.", r: 5, q: "Excellent quality with affordable price. They understood our taste perfectly." },
  { n: "Anjali K.", r: 5, q: "I'm really happy with how my home turned out. Looks like a magazine." },
  { n: "Suresh P.", r: 5, q: "Best shop for furniture work in Vasai. Highly recommended." },
  { n: "Neha D.", r: 4, q: "Very good experience. Team was patient and professional throughout." },
  { n: "Kiran J.", r: 5, q: "Exceptional service and stunning designs. Delivered on time." },
];

const process = [
  { t: "Consultation", d: "We listen — your taste, lifestyle, budget." },
  { t: "Site Visit", d: "Measurements, lighting, flow and feasibility." },
  { t: "Design Planning", d: "Mood boards, 3D views and material samples." },
  { t: "Execution", d: "Crafted on-site by our master carpenters." },
  { t: "Final Handover", d: "Walk-through, snag-free, ready to live in." },
];

const whyUs = [
  "Premium Quality", "Affordable Pricing", "Custom Designs", "Experienced Team",
  "Timely Delivery", "Trusted by Customers", "Modern Designs", "Complete Interior Solutions",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

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

function Stat({ value, suffix, label, fixed = 0 }: { value: number; suffix?: string; label: string; fixed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCounter(value, run);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl gold-gradient-text">
        {n.toFixed(fixed)}{suffix}
      </div>
      <div className="mt-3 text-sm tracking-[0.25em] uppercase text-[color:var(--muted-foreground)]">{label}</div>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % projects.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);

  const nav = [
    ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
    ["Portfolio", "#portfolio"], ["Reviews", "#reviews"], ["Process", "#process"], ["Contact", "#contact"],
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading screen */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-fade-in">
          <div className="text-center">
            <div className="font-display text-3xl tracking-[0.3em] gold-gradient-text">VAISHNAVI</div>
            <div className="mt-4 h-px w-40 mx-auto overflow-hidden bg-white/10">
              <div className="h-full w-1/3 bg-gold animate-[shimmer_1.2s_linear_infinite]"
                style={{ backgroundImage: "linear-gradient(90deg, transparent, #D4AF37, transparent)", backgroundSize: "200% 100%" }} />
            </div>
            <div className="mt-3 text-[10px] tracking-[0.4em] text-[color:var(--muted-foreground)]">INTERIORS</div>
          </div>
        </div>
      )}

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div className="h-full bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10 h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl tracking-[0.2em] gold-gradient-text">VAISHNAVI</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.4em] text-[color:var(--muted-foreground)]">INTERIORS</span>
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-[13px] tracking-[0.15em] uppercase text-white/80 hover:text-gold transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors">
              Get Quote
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 grid place-items-center border border-white/15"
            >
              <span className="block w-4 h-px bg-white relative before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-white after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-white" />
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${open ? "max-h-[480px]" : "max-h-0"} bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5`}>
          <div className="px-5 py-6 flex flex-col gap-4">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm tracking-[0.2em] uppercase text-white/85 hover:text-gold">
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center border border-gold/60 text-gold px-5 py-3 text-xs tracking-[0.25em] uppercase">Get Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <img src={img7.url} alt="Premium living room interior by Vaishnavi Interiors in Vasai" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/55 to-[#0B0B0B]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0B0B_85%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 animate-fade-up">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Vasai · Est. Luxury Interiors</span>
            </div>
            <h1 className="mt-8 font-display text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] text-white animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Crafting <em className="not-italic gold-gradient-text">Beautiful</em>
              <br />Living Spaces
            </h1>
            <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[color:var(--muted-foreground)] animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Luxury Interior Design · Modular Kitchen · Wardrobes · Furniture · Home Renovation · Safety Doors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a href="#portfolio" className="group inline-flex items-center gap-3 bg-gold text-[#0B0B0B] px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)] transition-colors">
                View Portfolio
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">
                Get Free Consultation
              </a>
            </div>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-xs text-[color:var(--muted-foreground)] animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div><span className="text-gold font-medium">4.8★</span> Google Rating</div>
              <div><span className="text-gold font-medium">22+</span> Happy Clients</div>
              <div><span className="text-gold font-medium">10+</span> Services</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/50 animate-fade-in" style={{ animationDelay: "1s" }}>
          Scroll
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">About the studio</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              A Vasai studio devoted to <em className="not-italic gold-gradient-text">timeless interiors</em>.
            </h2>
            <p className="mt-6 text-[color:var(--muted-foreground)] leading-relaxed">
              At Vaishnavi Interiors we treat every home as a one-off commission. From the first sketch to the
              final reveal, our team of designers and master carpenters work closely with you to build spaces
              that feel considered, generous and quietly luxurious.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {["Experienced Interior Designers","Premium Materials","Custom Furniture","Modern Designs","Budget Friendly Solutions","Timely Delivery","Customer Satisfaction"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/85">
                  <span className="text-gold">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-6 grid-rows-6 gap-3 h-[460px] md:h-[560px]">
            <div className="col-span-4 row-span-4 overflow-hidden">
              <img src={img7.url} alt="Living room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden">
              <img src={img1.url} alt="Door" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-2 row-span-3 overflow-hidden">
              <img src={img3.url} alt="Wardrobe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div className="col-span-4 row-span-2 overflow-hidden">
              <img src={img5.url} alt="Kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-28 md:py-36 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Services</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl">Everything your home needs, <em className="not-italic gold-gradient-text">under one roof</em>.</h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {services.map((s, i) => (
              <div key={s.t} className="reveal group relative bg-[color:var(--card)] p-8 md:p-10 overflow-hidden transition-colors hover:bg-[#181818]">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-gold text-sm tracking-[0.3em]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-10 bg-white/10 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-[28px] text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{s.d}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Selected work</span>
              </div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl">Recent <em className="not-italic gold-gradient-text">projects</em>.</h2>
            </div>
            <p className="max-w-sm text-sm text-[color:var(--muted-foreground)]">
              A glimpse into homes we've shaped across Vasai & Nalasopara. Tap any image to view in detail.
            </p>
          </div>

          {/* Hero project */}
          <button onClick={() => setLightbox(1)} className="reveal mt-14 relative block w-full group overflow-hidden">
            <img src={projects[1].src} alt={projects[1].title} loading="lazy"
              className="w-full h-[55vh] md:h-[80vh] object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 text-left">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{projects[1].category} · {projects[1].location}</div>
              <div className="mt-3 font-display text-3xl md:text-5xl text-white">{projects[1].title}</div>
            </div>
          </button>

          {/* Masonry-ish grid */}
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-6">
            {projects.map((p, i) => {
              if (i === 1) return null;
              const span =
                i === 0 ? "lg:col-span-2 lg:row-span-2 row-span-2" :
                i === 5 ? "lg:col-span-2 row-span-1" :
                i === 8 ? "lg:row-span-2 row-span-2" :
                "";
              return (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`reveal group relative overflow-hidden ${span}`}
                >
                  <img src={p.src} alt={p.title} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold">{p.category}</div>
                    <div className="mt-1 font-display text-base md:text-xl text-white leading-tight">{p.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative py-28 md:py-32 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Why choose us</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">A studio you can <em className="not-italic gold-gradient-text">trust</em>.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <div key={w} className="reveal glass p-7 hover:-translate-y-1 transition-transform duration-500">
                <div className="font-display text-gold text-xs tracking-[0.3em]">0{i + 1}</div>
                <div className="mt-4 font-display text-xl text-white">{w}</div>
                <div className="mt-3 h-px w-10 bg-gold/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value={22} suffix="+" label="Happy Clients" />
          <Stat value={4.8} fixed={1} suffix="★" label="Google Rating" />
          <Stat value={100} suffix="%" label="Satisfaction" />
          <Stat value={10} suffix="+" label="Services" />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Testimonials</span>
              </div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl">Voices from our <em className="not-italic gold-gradient-text">clients</em>.</h2>
            </div>
            <div className="text-right">
              <div className="text-gold text-2xl">★★★★★</div>
              <div className="text-xs tracking-[0.3em] uppercase text-[color:var(--muted-foreground)] mt-1">4.8 · 22+ reviews</div>
            </div>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={i} className="reveal bg-[color:var(--card)] border border-white/5 p-8 hover:border-gold/40 transition-colors">
                <div className="text-gold text-sm">{"★".repeat(r.r)}{"☆".repeat(5 - r.r)}</div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-white">"{r.q}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gold/15 text-gold grid place-items-center font-display">{r.n[0]}</div>
                  <div>
                    <div className="text-sm text-white">{r.n}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]">Verified client</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 md:py-36 bg-[color:var(--secondary)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="reveal max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Our process</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl">From concept to <em className="not-italic gold-gradient-text">key handover</em>.</h2>
          </div>
          <ol className="mt-16 relative grid md:grid-cols-5 gap-10 md:gap-4">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            {process.map((p, i) => (
              <li key={p.t} className="reveal relative text-center">
                <div className="mx-auto h-12 w-12 rounded-full border border-gold/60 grid place-items-center font-display text-gold relative z-10 bg-[color:var(--secondary)]">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="reveal">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Get in touch</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl">Let's design your <em className="not-italic gold-gradient-text">dream home</em>.</h2>
            <p className="mt-6 text-[color:var(--muted-foreground)] max-w-md">
              Tell us about your space. We'll get back within 24 hours with a free consultation slot.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Studio</div>
                <div className="mt-2 text-white/90 leading-relaxed">
                  Shop No.11, Shubham Building,<br />
                  Near KK Hospital, Opp. Shanti Lifespaces,<br />
                  Yashvant Viva Township, Vasai East,<br />
                  Maharashtra 401208
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Phone</div>
                <a href={TEL} className="mt-2 inline-block font-display text-2xl text-white hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={TEL} className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-[color:var(--gold-soft)]">Call Now</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold/60 text-gold px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors">WhatsApp Now</a>
              </div>
            </div>

            <div className="mt-10 aspect-[16/10] overflow-hidden border border-white/5">
              <iframe
                title="Vaishnavi Interiors location"
                src="https://maps.google.com/maps?q=Vaishnavi%20Interiors%20Vasai%20East&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[color:var(--secondary)] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-[0.2em] gold-gradient-text">VAISHNAVI</div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--muted-foreground)] mt-1">Interiors · Vasai</div>
            <p className="mt-6 text-sm text-[color:var(--muted-foreground)] max-w-sm leading-relaxed">
              A boutique interior studio crafting premium homes, modular kitchens, wardrobes and bespoke furniture across Vasai & Nalasopara.
            </p>
            <div className="mt-6 flex gap-3">
              {["IG", "FB", "YT"].map((s) => (
                <a key={s} href="#" aria-label={s} className="h-9 w-9 grid place-items-center border border-white/15 text-xs text-white/70 hover:text-gold hover:border-gold transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Reach Us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Shop No.11, Shubham Building,<br />Yashvant Viva Township,<br />Vasai East 401208</li>
              <li><a href={TEL} className="hover:text-gold">{PHONE_DISPLAY}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-10 mt-12 pt-6 border-t border-white/5 flex flex-wrap justify-between gap-3 text-xs text-[color:var(--muted-foreground)]">
          <div>© {new Date().getFullYear()} Vaishnavi Interiors. All rights reserved.</div>
          <div>Crafted in Vasai · Maharashtra</div>
        </div>
      </footer>

      {/* Floating CTAs */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-40 flex flex-col gap-3">
        {progress > 10 && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
            className="h-12 w-12 grid place-items-center bg-[color:var(--card)] border border-white/10 text-white hover:text-gold hover:border-gold transition-colors">
            ↑
          </button>
        )}
        <a href={TEL} aria-label="Call" className="md:hidden h-14 w-14 grid place-items-center rounded-full bg-gold text-[#0B0B0B] shadow-lg shadow-black/50 hover:scale-105 transition-transform">
          <PhoneIcon />
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 hover:scale-105 transition-transform">
          <WhatsAppIcon />
        </a>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute top-5 right-5 text-white/80 hover:text-gold text-3xl">×</button>
          <button aria-label="Prev" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + projects.length) % projects.length)); }}
            className="absolute left-3 md:left-8 text-white/70 hover:text-gold text-4xl">‹</button>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % projects.length)); }}
            className="absolute right-3 md:right-8 text-white/70 hover:text-gold text-4xl">›</button>
          <figure className="max-w-[92vw] max-h-[88vh]" onClick={(e) => e.stopPropagation()}>
            <img src={projects[lightbox].src} alt={projects[lightbox].title} className="max-w-[92vw] max-h-[78vh] object-contain mx-auto" />
            <figcaption className="mt-4 text-center">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{projects[lightbox].category} · {projects[lightbox].location}</div>
              <div className="mt-2 font-display text-2xl text-white">{projects[lightbox].title}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "", budget: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!/^[+\d\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone";
    if (!form.type) next.type = "Select project type";
    setErr(next);
    if (Object.keys(next).length) return;
    const msg = `New enquiry%0AName: ${form.name}%0APhone: ${form.phone}%0AProject: ${form.type}%0ABudget: ${form.budget}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
    setSent(true);
  };

  const field = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder:text-white/35 transition-colors";

  return (
    <form onSubmit={submit} className="reveal bg-[color:var(--card)] p-7 md:p-10 border border-white/5">
      <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Inquiry form</div>
      <h3 className="mt-3 font-display text-3xl text-white">Request a quote</h3>
      <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <input className={field} placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {err.name && <div className="text-xs text-red-400 mt-1">{err.name}</div>}
        </div>
        <div>
          <input className={field} placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          {err.phone && <div className="text-xs text-red-400 mt-1">{err.phone}</div>}
        </div>
        <div>
          <select className={`${field} appearance-none`} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="" className="bg-[#111]">Project type</option>
            {["Full Home Interior","Modular Kitchen","Wardrobe","TV Unit","False Ceiling","Office Interior","Renovation","Other"].map((o) => (
              <option key={o} className="bg-[#111]">{o}</option>
            ))}
          </select>
          {err.type && <div className="text-xs text-red-400 mt-1">{err.type}</div>}
        </div>
        <div>
          <select className={`${field} appearance-none`} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
            <option value="" className="bg-[#111]">Approx. budget</option>
            {["Under ₹1L","₹1L – ₹3L","₹3L – ₹6L","₹6L – ₹10L","₹10L+"].map((o) => (
              <option key={o} className="bg-[#111]">{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <textarea rows={3} className={field} placeholder="Tell us about your space" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="submit" className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]">Request Quote</button>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold/60 text-gold px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors">WhatsApp</a>
        <a href={TEL} className="inline-flex items-center gap-2 border border-white/15 text-white px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">Call</a>
      </div>
      {sent && <div className="mt-5 text-xs text-gold">Thank you — opening WhatsApp with your enquiry.</div>}
    </form>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .04 5.36.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.93 11.93 0 0 0 5.82 1.48h.01c6.62 0 11.98-5.36 11.98-11.98 0-3.2-1.25-6.21-3.49-8.4zM12.03 21.3h-.01a9.3 9.3 0 0 1-4.74-1.3l-.34-.2-3.68.96.98-3.58-.22-.37a9.3 9.3 0 0 1-1.42-4.83c0-5.14 4.18-9.32 9.33-9.32 2.49 0 4.83.97 6.59 2.73a9.26 9.26 0 0 1 2.73 6.59c0 5.14-4.18 9.32-9.32 9.32zm5.36-6.97c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.94 1.15-.17.2-.34.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02.99-1.02 2.42 0 1.43 1.05 2.81 1.2 3 .15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.99-1.4.24-.69.24-1.27.17-1.4-.07-.13-.27-.2-.56-.34z" /></svg>
  );
}
