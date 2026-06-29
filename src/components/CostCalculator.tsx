import { useState, useMemo } from "react";
import { waWith } from "@/data/site";

const BHK = [
  { id: "1bhk", label: "1 BHK", base: [300000, 450000] },
  { id: "2bhk", label: "2 BHK", base: [500000, 800000] },
  { id: "3bhk", label: "3 BHK", base: [800000, 1400000] },
  { id: "4bhk", label: "4 BHK+", base: [1400000, 2200000] },
] as const;

const SCOPE = [
  { id: "kitchen", label: "Modular Kitchen", add: [125000, 200000] },
  { id: "wardrobe", label: "Wardrobes (all rooms)", add: [180000, 300000] },
  { id: "tv", label: "TV Unit / Media Wall", add: [60000, 120000] },
  { id: "ceiling", label: "False Ceiling", add: [80000, 150000] },
  { id: "pooja", label: "Pooja Unit", add: [35000, 80000] },
  { id: "doors", label: "Designer Safety Door", add: [40000, 90000] },
  { id: "paint", label: "Painting & Polish", add: [50000, 110000] },
  { id: "lighting", label: "Lighting & Electricals", add: [40000, 100000] },
];

const fmt = (n: number) =>
  n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${(n / 1000).toFixed(0)}K`;

export function CostCalculator() {
  const [bhk, setBhk] = useState<(typeof BHK)[number]["id"]>("2bhk");
  const [selected, setSelected] = useState<string[]>(["kitchen", "wardrobe"]);

  const [low, high] = useMemo(() => {
    const b = BHK.find((x) => x.id === bhk)!;
    let lo = b.base[0];
    let hi = b.base[1];
    for (const id of selected) {
      const s = SCOPE.find((x) => x.id === id);
      if (s) {
        lo += s.add[0];
        hi += s.add[1];
      }
    }
    return [lo, hi];
  }, [bhk, selected]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const waMsg = waWith(
    `Hi Vaishnavi Interiors, I used your cost calculator:\nHome: ${
      BHK.find((b) => b.id === bhk)!.label
    }\nScope: ${selected.map((id) => SCOPE.find((s) => s.id === id)?.label).join(", ") || "—"}\nEstimated: ${fmt(low)} – ${fmt(high)}\nPlease share a detailed quote.`
  );

  return (
    <div className="reveal grid lg:grid-cols-[1fr_auto] gap-10 bg-[color:var(--card)] border border-white/5 p-7 md:p-10">
      <div>
        <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Estimate</div>
        <h3 className="mt-2 font-display text-3xl text-white">Interior Cost Calculator</h3>
        <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
          Get an instant ballpark range. Final quote is shared after a free site visit.
        </p>

        <div className="mt-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Home Size</div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {BHK.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBhk(b.id)}
                className={`py-3 text-[11px] tracking-[0.2em] uppercase border transition-colors ${
                  bhk === b.id
                    ? "border-gold text-gold bg-gold/5"
                    : "border-white/10 text-white/70 hover:border-white/30"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Scope</div>
          <div className="mt-3 grid sm:grid-cols-2 gap-2">
            {SCOPE.map((s) => {
              const on = selected.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggle(s.id)}
                  className={`flex items-center gap-3 py-3 px-4 text-left text-sm border transition-colors ${
                    on
                      ? "border-gold/70 text-white bg-gold/5"
                      : "border-white/10 text-white/75 hover:border-white/30"
                  }`}
                >
                  <span
                    className={`h-4 w-4 grid place-items-center text-[10px] border ${
                      on ? "border-gold text-gold" : "border-white/30 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="lg:w-[320px] flex flex-col">
        <div className="bg-[#0B0B0B] border border-gold/30 p-7 flex-1">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Estimated</div>
          <div className="mt-3 font-display text-4xl md:text-5xl gold-gradient-text leading-tight">
            {fmt(low)} – {fmt(high)}
          </div>
          <p className="mt-4 text-xs text-[color:var(--muted-foreground)] leading-relaxed">
            Indicative range based on average finishes and brands we use. Actual quote depends on
            material selection, area and site conditions.
          </p>
          <a
            href={waMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full bg-gold text-[#0B0B0B] py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
          >
            Get Detailed Quote
          </a>
        </div>
      </aside>
    </div>
  );
}
