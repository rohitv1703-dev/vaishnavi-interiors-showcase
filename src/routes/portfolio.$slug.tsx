import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/SectionHeading";
import { getProject, related } from "@/data/projects";
import { waWith } from "@/data/site";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: async ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    const title = `${p.title} — ${p.category} in ${p.location}`;
    const desc = p.description.slice(0, 155);
    return {
      meta: [
        { title: `${title} | Vaishnavi Interiors` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: p.src },
        { property: "og:url", content: `/portfolio/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            image: p.src,
            description: p.description,
            locationCreated: p.location,
            creator: { "@type": "Organization", name: "Vaishnavi Interiors" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "/portfolio" },
              { "@type": "ListItem", position: 3, name: p.title, item: `/portfolio/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-24 mx-auto max-w-3xl px-5 text-center">
      <h1 className="font-display text-5xl text-white">Project not found</h1>
      <Link
        to="/portfolio"
        className="mt-8 inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 text-[11px] tracking-[0.3em] uppercase"
      >
        Back to portfolio
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  useReveal();
  const { project } = Route.useLoaderData();
  const rel = related(project.slug, 3);
  const wa = waWith(`Hi, I love the "${project.title}" project. Please share a similar quote.`);

  return (
    <main>
      <section className="relative pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: project.title },
            ]}
          />
        </div>
        <div className="mt-10 mx-auto max-w-7xl px-5 md:px-10">
          <div className="overflow-hidden">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-[55vh] md:h-[80vh] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-14">
          <div className="reveal">
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {project.category} · {project.location}
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-8 text-[color:var(--muted-foreground)] leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
          <aside className="reveal bg-[color:var(--card)] border border-white/5 p-7 md:p-8 h-fit">
            <div className="grid grid-cols-2 gap-6">
              <Meta label="Category" value={project.category} />
              <Meta label="Location" value={project.location} />
              <Meta label="Timeline" value={project.timeline} />
              <Meta label="Studio" value="Vaishnavi Interiors" />
            </div>
            <div className="mt-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Materials</div>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {project.materials.map((m: string) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-gold mt-1">·</span> {m}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center w-full bg-gold text-[#0B0B0B] py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-[color:var(--gold-soft)]"
            >
              I want similar
            </a>
          </aside>
        </div>
      </section>

      {rel.length > 0 && (
        <section className="py-20 md:py-28 bg-[color:var(--secondary)]">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-display text-3xl md:text-4xl text-white">
                More <em className="not-italic gold-gradient-text">{project.category}</em>
              </h2>
              <Link
                to="/portfolio"
                className="text-[11px] tracking-[0.3em] uppercase text-gold hover:gap-3 inline-flex items-center gap-2"
              >
                View all <span>→</span>
              </Link>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rel.map((p) => (
                <Link
                  key={p.slug}
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="reveal group relative overflow-hidden aspect-[4/5]"
                >
                  <img src={p.src} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{p.location}</div>
                    <div className="mt-2 font-display text-lg text-white">{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{label}</div>
      <div className="mt-1.5 text-white">{value}</div>
    </div>
  );
}
