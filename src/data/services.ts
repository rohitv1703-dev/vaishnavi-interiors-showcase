import img5 from "@/assets/interior-231820.jpg";
import img3 from "@/assets/interior-231708.jpg";
import img6 from "@/assets/interior-231831.jpg";
import img12 from "@/assets/interior-232032.jpg";
import img1 from "@/assets/interior-231640.jpg";
import img7 from "@/assets/interior-231848.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  hero: string;
  intro: string;
  bullets: string[];
  fromPrice: string;
  keyword: string; // local SEO target
};

export const services: Service[] = [
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    short: "Ergonomic kitchens with premium hardware and finishes.",
    hero: img5,
    intro:
      "From compact L-shapes to islanded layouts, we design modular kitchens around how you actually cook. Quartz tops, soft-close hardware and a working triangle that just feels right.",
    bullets: [
      "L-shape, U-shape, parallel & island layouts",
      "Acrylic, PU, laminate or membrane shutters",
      "Quartz / granite countertops",
      "Hettich / Hafele hardware, soft-close everywhere",
      "Tall units, magic corners, pull-out pantry",
      "Under-cabinet LED & profile lighting",
    ],
    fromPrice: "₹1,25,000",
    keyword: "Modular Kitchen in Vasai",
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    short: "Sliding, hinged & walk-in wardrobes built to the millimetre.",
    hero: img3,
    intro:
      "Wall-to-wall storage that feels architectural, not bulky. We design wardrobes around your wardrobe — shoes, sarees, suits, jewellery — and finish in your choice of laminate, PU or acrylic.",
    bullets: [
      "Sliding, hinged & walk-in configurations",
      "Internal lighting, drawer organisers, tie & belt pulls",
      "Full-length mirror panels",
      "Premium aluminium sliding tracks",
      "Matching dresser & loft storage",
    ],
    fromPrice: "₹55,000",
    keyword: "Wardrobe Design in Vasai",
  },
  {
    slug: "tv-units",
    title: "TV Units & Media Walls",
    short: "Statement media walls with cove lighting and storage.",
    hero: img6,
    intro:
      "From minimal floating consoles to floor-to-ceiling media walls in veneer and fluted panels — we design TV units that anchor the living room.",
    bullets: [
      "Floating or full-height media walls",
      "Concealed cable & device storage",
      "Cove + accent LED lighting",
      "Veneer, fluted, PU and laminate finishes",
      "Integrated open display shelving",
    ],
    fromPrice: "₹35,000",
    keyword: "TV Unit Design in Vasai",
  },
  {
    slug: "pooja-units",
    title: "Pooja Units",
    short: "Serene temple units crafted into the home.",
    hero: img12,
    intro:
      "Considered, calm pooja spaces built into niches or as standalone units — with concealed storage, brass detailing and warm low-glare lighting.",
    bullets: [
      "Solid wood frames & carvings",
      "3D PU cladding backdrops",
      "Brass detailing",
      "Concealed bell & item storage",
      "Warm dimmable LED",
    ],
    fromPrice: "₹28,000",
    keyword: "Pooja Unit Design in Vasai",
  },
  {
    slug: "safety-doors",
    title: "Designer Safety Doors",
    short: "Hand-carved safety doors that make an entrance.",
    hero: img1,
    intro:
      "A safety door should welcome you home and protect it. We build solid wood doors with CNC carving, brass detailing and multi-point security locks.",
    bullets: [
      "Solid hardwood construction",
      "CNC carved or laser-cut panels",
      "Brass studs, handles & viewer",
      "Multi-point security lock",
      "Matte PU finish, decade-long durability",
    ],
    fromPrice: "₹32,000",
    keyword: "Safety Door Design in Vasai",
  },
  {
    slug: "full-home-interiors",
    title: "Full Home Interiors",
    short: "End-to-end turnkey interiors for 1BHK / 2BHK / 3BHK homes.",
    hero: img7,
    intro:
      "One studio, one accountable team — from design to handover. We deliver complete homes with a fixed timeline, fixed quote and a single point of contact.",
    bullets: [
      "Free 3D design + walkthrough",
      "Modular kitchen + all wardrobes",
      "TV unit, pooja unit, foyer, false ceiling",
      "Loose furniture & lighting curation",
      "Single project manager, fixed timeline",
      "10-year warranty on modular elements",
    ],
    fromPrice: "₹3,50,000",
    keyword: "Full Home Interior in Vasai",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
