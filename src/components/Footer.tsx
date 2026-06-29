import { Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, TEL, WHATSAPP } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[color:var(--secondary)] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-[0.2em] gold-gradient-text">VAISHNAVI</div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--muted-foreground)] mt-1">
            Interiors · Vasai
          </div>
          <p className="mt-6 text-sm text-[color:var(--muted-foreground)] max-w-sm leading-relaxed">
            A boutique interior studio crafting premium homes, modular kitchens, wardrobes and bespoke
            furniture across Vasai &amp; Nalasopara.
          </p>
          <div className="mt-6 flex gap-3">
            {["IG", "FB", "YT"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="h-9 w-9 grid place-items-center border border-white/15 text-xs text-white/70 hover:text-gold hover:border-gold transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Reach Us</div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              Shop No.11, Shubham Building,
              <br />
              Yashvant Viva Township,
              <br />
              Vasai East 401208
            </li>
            <li>
              <a href={TEL} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-10 mt-12 pt-6 border-t border-white/5 flex flex-wrap justify-between gap-3 text-xs text-[color:var(--muted-foreground)]">
        <div>© {new Date().getFullYear()} Vaishnavi Interiors. All rights reserved.</div>
        <div>Crafted in Vasai · Maharashtra</div>
      </div>
    </footer>
  );
}
