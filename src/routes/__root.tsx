import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ScrollToTop } from "@/components/ScrollToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl gold-gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold text-gold px-5 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-gold text-gold px-5 py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-[#0B0B0B] transition-colors"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-white/15 text-white px-5 py-3 text-xs tracking-[0.25em] uppercase"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B0B0B" },
      { title: "Vaishnavi Interiors | Premium Interior Designer in Vasai" },
      {
        name: "description",
        content:
          "Luxury home interiors, modular kitchens, wardrobes, furniture, false ceiling, safety doors, office interiors and renovation in Vasai. 4.8★ Google rated.",
      },
      {
        name: "keywords",
        content:
          "Interior Designer Vasai, Interior Designer Nalasopara, Modular Kitchen Vasai, Wardrobe Design, Luxury Interior, Office Interior, Safety Door, False Ceiling, Renovation",
      },
      { property: "og:site_name", content: "Vaishnavi Interiors" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vaishnavi Interiors",
          telephone: "+91 95793 22314",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Shop No.11, Shubham Building, Near KK Hospital, Opp. Shanti Lifespaces, Yashvant Viva Township",
            addressLocality: "Vasai East",
            addressRegion: "Maharashtra",
            postalCode: "401208",
            addressCountry: "IN",
          },
          areaServed: ["Vasai", "Vasai East", "Vasai West", "Nalasopara", "Virar", "Naigaon"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "22",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
        <FloatingCTA />
      </div>
    </QueryClientProvider>
  );
}
