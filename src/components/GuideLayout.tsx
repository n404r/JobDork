import { Header } from "@/components/Header";
import Link from "next/link";
import { ReactNode } from "react";

interface GuideLayoutProps {
  title: string;
  description: string;
  slug: string;
  children: ReactNode;
}

export function GuideLayout({ title, description, slug, children }: GuideLayoutProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jobdork.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://jobdork.tech/#guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `https://jobdork.tech/guides/${slug}`
      }
    ]
  };

  return (
    <main className="max-w-[800px] mx-auto px-4 sm:px-6 pt-2 pb-20">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mt-8 prose prose-invert prose-emerald max-w-none">
        <div className="mb-10">
          <Link href="/" className="text-[#05DF72] no-underline hover:underline text-sm font-semibold flex items-center gap-1 mb-4">
            ← Back to JobDork
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{title}</h1>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">{description}</p>
        </div>
        
        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
          {children}
        </div>
      </article>
    </main>
  );
}
