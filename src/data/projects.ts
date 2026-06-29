import img1 from "@/assets/interior-231640.jpg";
import img2 from "@/assets/interior-231654.jpg";
import img3 from "@/assets/interior-231708.jpg";
import img4 from "@/assets/interior-231757.jpg";
import img5 from "@/assets/interior-231820.jpg";
import img6 from "@/assets/interior-231831.jpg";
import img7 from "@/assets/interior-231848.jpg";
import img8 from "@/assets/interior-231901.jpg";
import img9 from "@/assets/interior-231927.jpg";
import img10 from "@/assets/interior-232001.jpg";
import img11 from "@/assets/interior-232018.jpg";
import img12 from "@/assets/interior-232032.jpg";
import img13 from "@/assets/interior-232054.jpg";
import img14 from "@/assets/interior-232107.jpg";
import img15 from "@/assets/interior-232122.jpg";
import img16 from "@/assets/interior-232135.jpg";
import img17 from "@/assets/interior-232232.jpg";

export type Project = {
  slug: string;
  src: string;
  title: string;
  category: string;
  location: string;
  timeline: string;
  description: string;
  materials: string[];
};

export const projects: Project[] = [
  {
    slug: "carved-wooden-safety-door-vasai-east",
    src: img1,
    title: "Carved Wooden Safety Door",
    category: "Safety Door",
    location: "Vasai East",
    timeline: "10 days",
    description:
      "A hand-finished solid wood safety door with deep CNC carving, brass detailing and a high-security multi-point lock. Designed as a quiet statement at the entrance — warm, substantial and built to last decades.",
    materials: ["Solid hardwood frame", "CNC carved panels", "Brass hardware", "Multi-point safety lock", "Matte PU finish"],
  },
  {
    slug: "cinematic-living-room-vasai",
    src: img7,
    title: "Cinematic Living Room",
    category: "Living Room",
    location: "Vasai",
    timeline: "45 days",
    description:
      "A layered living room balancing fluted walnut walls, a sculpted TV unit, and a curated lighting plan. Every surface was chosen to flatter both daylight and warm evening LEDs.",
    materials: ["Fluted walnut veneer", "Italian marble accents", "Cove + spot LED", "Custom upholstery", "Brushed brass profiles"],
  },
  {
    slug: "walnut-tv-unit-cove-lighting-vasai",
    src: img6,
    title: "Walnut TV Unit & Cove Lighting",
    category: "TV Unit",
    location: "Vasai",
    timeline: "18 days",
    description:
      "A floor-to-ceiling walnut media wall with concealed storage, hidden cable routing and cove lighting that washes the wall in soft gold.",
    materials: ["Walnut veneer", "PU lacquer", "Soft-close drawers", "Concealed LED cove", "Cable management"],
  },
  {
    slug: "fluted-wall-panelling-vasai-east",
    src: img2,
    title: "Fluted Wall Panelling",
    category: "Wall Design",
    location: "Vasai East",
    timeline: "8 days",
    description:
      "A full-height fluted accent wall in warm oak, paired with a curated console. Adds rhythm, depth and craft to an otherwise quiet room.",
    materials: ["Oak fluted panels", "Matte PU", "Hidden fixings", "Skirting integration"],
  },
  {
    slug: "floating-shelf-tv-console-nalasopara",
    src: img10,
    title: "Floating Shelf TV Console",
    category: "TV Unit",
    location: "Nalasopara",
    timeline: "12 days",
    description:
      "A minimal floating console with an open shelf for media. Designed to feel light and almost detached from the floor while hiding all cabling.",
    materials: ["Engineered wood", "Laminate finish", "Hidden bracket", "Soft-close drawer"],
  },
  {
    slug: "modular-kitchen-aubergine-gloss-vasai",
    src: img5,
    title: "Modular Kitchen — Aubergine Gloss",
    category: "Modular Kitchen",
    location: "Vasai",
    timeline: "30 days",
    description:
      "A high-gloss modular kitchen in deep aubergine with quartz counters and a tall pantry column. Built around a working triangle that keeps cooking effortless.",
    materials: ["High-gloss acrylic shutters", "Quartz countertop", "Hettich hardware", "Tall pantry unit", "Under-cabinet LED"],
  },
  {
    slug: "cnc-carved-wardrobe-vasai",
    src: img3,
    title: "CNC Carved Wardrobe",
    category: "Wardrobe",
    location: "Vasai",
    timeline: "20 days",
    description:
      "A hinged wardrobe with intricate CNC-carved shutters and a soft-close mechanism. The detailing references traditional jaali patterns reinterpreted in matte champagne.",
    materials: ["18mm BWP ply", "CNC carved shutters", "Matte PU finish", "Soft-close hinges", "Aluminium profile handles"],
  },
  {
    slug: "sliding-bedroom-wardrobe-vasai-east",
    src: img4,
    title: "Sliding Bedroom Wardrobe",
    category: "Wardrobe",
    location: "Vasai East",
    timeline: "15 days",
    description:
      "A 3-shutter sliding wardrobe with a full-length mirror panel, internal LED and a pull-out tie rack — designed for a compact master bedroom.",
    materials: ["BWP ply carcass", "Mirror panel", "Top-bottom sliding track", "Internal LED", "Trouser & tie pull-outs"],
  },
  {
    slug: "4-door-wardrobe-vanity-nalasopara",
    src: img8,
    title: "4-Door Wardrobe + Vanity",
    category: "Bedroom",
    location: "Nalasopara",
    timeline: "22 days",
    description:
      "A coordinated 4-door wardrobe with an attached dresser-vanity, framed mirror and integrated lighting. One continuous craft language across the room.",
    materials: ["BWP ply", "Laminate + acrylic mix", "LED mirror", "Soft-close hinges", "Drawer organisers"],
  },
  {
    slug: "kids-room-themed-wardrobe-vasai",
    src: img9,
    title: "Kids Room — Themed Wardrobe",
    category: "Kids Room",
    location: "Vasai",
    timeline: "18 days",
    description:
      "A playful, durable kids' wardrobe with chalk panels, study niche and rounded edges — built for ten years of growing up.",
    materials: ["BWP ply", "Child-safe edges", "Chalk panel", "Laminate finish", "Open study niche"],
  },
  {
    slug: "framed-wall-art-accent-cladding-vasai",
    src: img11,
    title: "Framed Wall Art & Accent Cladding",
    category: "Wall Design",
    location: "Vasai",
    timeline: "9 days",
    description:
      "An entryway feature wall with framed art mouldings and a textured accent cladding — adds instant character to the foyer.",
    materials: ["PU mouldings", "Textured stone cladding", "Hidden LED wash"],
  },
  {
    slug: "temple-unit-3d-cladding-vasai-east",
    src: img12,
    title: "Temple Unit with 3D Cladding",
    category: "Pooja Room",
    location: "Vasai East",
    timeline: "14 days",
    description:
      "A serene pooja unit set against 3D cladding with concealed bell storage and soft warm lighting — built into a niche to feel original to the home.",
    materials: ["Solid wood frame", "3D PU panel backdrop", "Brass detailing", "Warm LED", "Hidden storage drawers"],
  },
  {
    slug: "custom-study-workstation-nalasopara",
    src: img13,
    title: "Custom Study & Workstation",
    category: "Study Room",
    location: "Nalasopara",
    timeline: "12 days",
    description:
      "A compact home-office unit with overhead shelving, integrated cable management and a pinboard wall — designed for long focus hours.",
    materials: ["Engineered wood", "Laminate finish", "Cable grommets", "Pinboard wall", "Task lighting"],
  },
  {
    slug: "bespoke-bed-storage-vasai",
    src: img14,
    title: "Bespoke Bed with Storage",
    category: "Bedroom",
    location: "Vasai",
    timeline: "16 days",
    description:
      "A king-size bed with hydraulic full-storage base and an upholstered headboard. Designed to disappear visually while delivering generous storage.",
    materials: ["BWP ply storage box", "Hydraulic lift", "Upholstered headboard", "Side niche shelves"],
  },
  {
    slug: "solid-wood-storage-console-vasai",
    src: img15,
    title: "Solid Wood Storage Console",
    category: "Furniture",
    location: "Vasai",
    timeline: "11 days",
    description:
      "A solid wood console with mixed open-and-closed storage — equally at home in a hallway or behind a sofa.",
    materials: ["Solid hardwood", "Oil + wax finish", "Soft-close drawers", "Brass pulls"],
  },
  {
    slug: "designer-entry-door-mandala-vasai-east",
    src: img16,
    title: "Designer Entry Door — Mandala",
    category: "Safety Door",
    location: "Vasai East",
    timeline: "12 days",
    description:
      "An entry door with a CNC mandala motif, brass studs and a multi-point lock — equal parts safety, craft and welcome.",
    materials: ["Solid hardwood", "CNC mandala panel", "Brass studs", "Multi-point lock", "Matte PU finish"],
  },
  {
    slug: "minimal-sliding-wardrobe-nalasopara",
    src: img17,
    title: "Minimal Sliding Wardrobe",
    category: "Wardrobe",
    location: "Nalasopara",
    timeline: "14 days",
    description:
      "A minimal two-shutter sliding wardrobe in soft beige laminate with recessed handles — calm, clean, generous in storage.",
    materials: ["BWP ply", "Beige textured laminate", "Top-bottom sliding track", "Recessed pulls", "Internal LED"],
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const related = (slug: string, n = 3) => {
  const p = getProject(slug);
  if (!p) return [];
  return projects.filter((x) => x.slug !== slug && x.category === p.category).slice(0, n);
};
