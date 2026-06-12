import Link from "next/link";
import { landingPages } from "@/lib/seoData";
import { Heart } from "lucide-react";

export function Footer() {
  const guides = [
    { title: "Hidden Jobs Guide", slug: "how-to-find-hidden-jobs" },
    { title: "Boolean Search", slug: "boolean-search-for-jobs" },
    { title: "ATS Guide", slug: "ats-job-search-guide" },
    { title: "Lever Jobs", slug: "lever-job-search-guide" },
    { title: "Greenhouse Jobs", slug: "greenhouse-job-search-guide" },
    { title: "Stealth Tech Jobs", slug: "hidden-tech-jobs-guide" },
  ];

  return (
    <footer className="w-full px-4 py-4 mt-2 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-4">
        
        {/* Minimal SEO Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[11px] text-gray-500">
          {Object.values(landingPages).map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="hover:text-[#05DF72] transition-colors">
              {page.category}
            </Link>
          ))}
          <span className="text-gray-700 hidden sm:inline">|</span>
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="hover:text-[#05DF72] transition-colors">
              {guide.title}
            </Link>
          ))}
        </div>

        {/* Credit Centered */}
        <div className="text-[12px] text-gray-400 font-medium flex items-center gap-1.5">
          Created with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by <a href="https://github.com/n404r" target="_blank" rel="noreferrer" className="text-white hover:text-[#05DF72] transition-colors ml-0.5">Nischay</a>
        </div>

      </div>
    </footer>
  );
}
