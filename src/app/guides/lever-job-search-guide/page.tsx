import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lever Job Search Guide | JobDork",
  description: "Master boolean search to find hidden tech jobs hosted on Lever.co. Learn the exact search operators to find remote and high-paying roles.",
  alternates: { canonical: "/guides/lever-job-search-guide" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="How to Search Lever for Jobs" 
      description="Master boolean search to find hidden tech jobs hosted on Lever.co."
      slug="lever-job-search-guide"
    >
      <h2 className="text-xl font-bold text-white mb-3">Why Lever?</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Lever is one of the most popular ATS platforms for mid-market and enterprise tech companies, including Netflix, Spotify, and Figma. Searching Lever directly is a goldmine for engineering and product roles.
      </p>

      <h2 className="text-xl font-bold text-white mb-3">The Lever URL Structure</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Lever job postings typically follow the structure: <code>jobs.lever.co/company-name/uuid</code>.
        By instructing Google to only return results from <code>site:jobs.lever.co</code> or <code>site:jobs.eu.lever.co</code>, we can isolate actual job applications.
      </p>

      <h2 className="text-xl font-bold text-white mb-3">Creating a Lever Dork</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        A basic dork for Lever looks like this: <br/>
        <code className="bg-white/10 px-2 py-1 rounded text-cyan-400 mt-2 block w-fit">site:jobs.lever.co "Software Engineer"</code>
      </p>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">Filtering for Remote</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Lever uses specific semantic tags for remote work. JobDork automatically injects modifiers like <code>"Remote"</code> or <code>"Anywhere"</code> to ensure the search results are highly accurate. Use the JobDork builder to instantly generate these queries without memorizing the syntax.
      </p>
    </GuideLayout>
  );
}
