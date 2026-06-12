import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { landingPages } from "@/lib/seoData";
import { JobDorkContent } from "@/components/JobDorkContent";
import { FAQAccordion } from "@/components/FAQAccordion";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes at build time
export async function generateStaticParams() {
  return Object.keys(landingPages).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each route
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageData = landingPages[slug];

  if (!pageData) {
    return {};
  }

  return {
    title: pageData.title,
    description: pageData.description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `/${slug}`,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const pageData = landingPages[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-gray-500">Loading...</div>}>
        <JobDorkContent 
          key={slug}
          initialOverride={pageData.defaultState} 
          h1Override={pageData.h1} 
        />
      </Suspense>

      {/* SEO Content & FAQ Section */}
      <section className="max-w-[1400px] w-full mx-auto px-3 sm:px-6 mt-6 mb-2">
        <div className="flex items-center gap-4 mb-3 select-none">
          <div className="flex-1 border-t border-dashed border-white/20"></div>
          <span 
            className="text-[10px] font-mono tracking-[0.3em] text-[#05DF72] uppercase font-bold"
            style={{ textShadow: "0 0 10px rgba(5, 223, 114, 0.8), 0 0 20px rgba(5, 223, 114, 0.4)" }}
          >
            FOR SEO
          </span>
          <div className="flex-1 border-t border-dashed border-white/20"></div>
        </div>
        <h2 className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Frequently Asked Questions</h2>
        <FAQAccordion items={pageData.faq} />
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": pageData.faq.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
