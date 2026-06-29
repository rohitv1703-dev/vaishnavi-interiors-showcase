import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/5 border-y border-white/5">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="reveal">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-7 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl md:text-2xl text-white group-hover:text-gold transition-colors">
                {f.q}
              </span>
              <span
                className={`text-gold text-2xl shrink-0 transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ${
                isOpen ? "max-h-[300px] opacity-100 pb-7" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[color:var(--muted-foreground)] leading-relaxed max-w-3xl">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const faqJsonLd = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
