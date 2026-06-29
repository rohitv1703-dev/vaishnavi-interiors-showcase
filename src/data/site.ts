export const PHONE = "919579322314";
export const PHONE_DISPLAY = "+91 95793 22314";
export const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Vaishnavi Interiors, I'd like a free consultation."
)}`;
export const TEL = `tel:+${PHONE}`;
export const ADDRESS_LINES = [
  "Shop No.11, Shubham Building,",
  "Near KK Hospital, Opp. Shanti Lifespaces,",
  "Yashvant Viva Township, Vasai East,",
  "Maharashtra 401208",
];
export const MAP_EMBED =
  "https://maps.google.com/maps?q=Vaishnavi%20Interiors%20Vasai%20East&t=&z=15&ie=UTF8&iwloc=&output=embed";
export const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Vaishnavi+Interiors+Vasai+East";

export const waWith = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

export const reviews = [
  { n: "Rohit S.", r: 5, q: "Best carpenter, very talented. The detailing on our wardrobe was unreal." },
  { n: "Priya M.", r: 5, q: "Excellent quality with affordable price. They understood our taste perfectly." },
  { n: "Anjali K.", r: 5, q: "I'm really happy with how my home turned out. Looks like a magazine." },
  { n: "Suresh P.", r: 5, q: "Best shop for furniture work in Vasai. Highly recommended." },
  { n: "Neha D.", r: 4, q: "Very good experience. Team was patient and professional throughout." },
  { n: "Kiran J.", r: 5, q: "Exceptional service and stunning designs. Delivered on time." },
];

export const processSteps = [
  { t: "Consultation", d: "We listen — your taste, lifestyle, budget." },
  { t: "Site Visit", d: "Measurements, lighting, flow and feasibility." },
  { t: "3D Design", d: "Mood boards, 3D views and material samples." },
  { t: "Execution", d: "Crafted on-site by our master carpenters." },
  { t: "Handover", d: "Walk-through, snag-free, ready to live in." },
];

export const faqs = [
  {
    q: "How much does interior design cost in Vasai?",
    a: "A 1BHK turnkey interior typically starts around ₹3.5L, a 2BHK around ₹5–8L, and a 3BHK ₹8–14L depending on finishes, brands and scope. We share a transparent itemised quote after the first site visit — no hidden charges.",
  },
  {
    q: "How long does a full home interior take?",
    a: "Most 2BHK projects are completed in 45–60 working days from design sign-off. We commit to a fixed timeline in the contract and run a weekly progress review with you.",
  },
  {
    q: "Do you give a warranty?",
    a: "Yes — 10 years on modular carcass and 1 year on hardware, finish and electrical fittings. Service requests during this period are handled by our own in-house team, not third parties.",
  },
  {
    q: "Which areas do you serve?",
    a: "We work across Vasai, Vasai East, Vasai West, Nalasopara, Virar, Naigaon and nearby Mumbai western suburbs. Site visits in this region are always free.",
  },
  {
    q: "What materials and brands do you use?",
    a: "BWP / 710-grade ply for all carcass work, Hettich and Hafele hardware, Merino / Greenlam / Century laminates, and quartz or granite tops. We can also work in solid hardwood, veneer and PU on request.",
  },
  {
    q: "Can I see a 3D design before I commit?",
    a: "Yes. After your free consultation we share a detailed 3D walkthrough and a fixed quote. You only proceed if you love it.",
  },
];

export const HEAD_DEFAULTS = {
  siteName: "Vaishnavi Interiors",
  city: "Vasai",
};
