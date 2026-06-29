import { useState } from "react";
import { PHONE, TEL, WHATSAPP } from "@/data/site";

export function ContactForm({ initialType = "" }: { initialType?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: initialType,
    budget: "",
    message: "",
  });
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) next.name = "Required (max 100)";
    if (!/^[+\d\s-]{7,20}$/.test(form.phone)) next.phone = "Enter a valid phone";
    if (!form.type) next.type = "Select project type";
    if (form.message.length > 1000) next.message = "Message too long";
    setErr(next);
    if (Object.keys(next).length) return;
    const msg = `New enquiry\nName: ${form.name}\nPhone: ${form.phone}\nProject: ${form.type}\nBudget: ${form.budget}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const field =
    "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder:text-white/35 transition-colors";

  return (
    <form
      onSubmit={submit}
      className="reveal bg-[color:var(--card)] p-7 md:p-10 border border-white/5"
    >
      <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Inquiry form</div>
      <h3 className="mt-3 font-display text-3xl text-white">Request a quote</h3>
      <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <input
            className={field}
            placeholder="Full name"
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {err.name && <div className="text-xs text-red-400 mt-1">{err.name}</div>}
        </div>
        <div>
          <input
            className={field}
            placeholder="Phone number"
            maxLength={20}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {err.phone && <div className="text-xs text-red-400 mt-1">{err.phone}</div>}
        </div>
        <div>
          <select
            className={`${field} appearance-none`}
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="" className="bg-[#111]">
              Project type
            </option>
            {[
              "Full Home Interior",
              "Modular Kitchen",
              "Wardrobe",
              "TV Unit",
              "False Ceiling",
              "Office Interior",
              "Renovation",
              "Other",
            ].map((o) => (
              <option key={o} className="bg-[#111]">
                {o}
              </option>
            ))}
          </select>
          {err.type && <div className="text-xs text-red-400 mt-1">{err.type}</div>}
        </div>
        <div>
          <select
            className={`${field} appearance-none`}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="" className="bg-[#111]">
              Approx. budget
            </option>
            {["Under ₹1L", "₹1L – ₹3L", "₹3L – ₹6L", "₹6L – ₹10L", "₹10L+"].map((o) => (
              <option key={o} className="bg-[#111]">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <textarea
            rows={3}
            className={field}
            maxLength={1000}
            placeholder="Tell us about your space"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {err.message && <div className="text-xs text-red-400 mt-1">{err.message}</div>}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-gold text-[#0B0B0B] px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
        >
          Request Quote
        </button>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gold/60 text-gold px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
        >
          WhatsApp
        </a>
        <a
          href={TEL}
          className="inline-flex items-center gap-2 border border-white/15 text-white px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors"
        >
          Call
        </a>
      </div>
      {sent && (
        <div className="mt-5 text-xs text-gold">
          Thank you — opening WhatsApp with your enquiry.
        </div>
      )}
    </form>
  );
}
