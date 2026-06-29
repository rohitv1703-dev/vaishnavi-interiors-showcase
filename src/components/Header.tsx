import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl md:text-2xl tracking-[0.2em] gold-gradient-text">
            VAISHNAVI
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.4em] text-[color:var(--muted-foreground)]">
            INTERIORS
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-[13px] tracking-[0.15em] uppercase text-white/80 hover:text-gold transition-colors data-[status=active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
          >
            Get Quote
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center border border-white/15"
          >
            <span className="block w-4 h-px bg-white relative before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-px before:bg-white after:absolute after:top-1.5 after:left-0 after:w-4 after:h-px after:bg-white" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[480px]" : "max-h-0"
        } bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-[0.2em] uppercase text-white/85 hover:text-gold data-[status=active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex justify-center border border-gold/60 text-gold px-5 py-3 text-xs tracking-[0.25em] uppercase"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
