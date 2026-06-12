import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boolean Search for Jobs (Dorks) | JobDork",
  description: "Master Google Dorks to query ATS systems directly like a technical recruiter. Learn boolean search for finding hidden jobs.",
  alternates: { canonical: "/guides/boolean-search-for-jobs" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="Boolean Search for Jobs (Google Dorks)" 
      description="Master Google Dorks to query ATS systems directly like a technical recruiter."
      slug="boolean-search-for-jobs"
    >
      <h2 className="text-xl font-bold text-white mb-3">What is Boolean Search?</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Boolean search uses operators like AND, OR, and NOT to combine keywords into a highly specific database query. Google supports boolean operators, allowing you to use it as a massive, free database of job postings.
      </p>

      <h2 className="text-xl font-bold text-white mb-3">Essential Search Operators</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li><code>site:</code> Restricts results to a specific domain (e.g., <code>site:lever.co</code>).</li>
        <li><code>"exact phrase"</code> Forces Google to only return pages containing the exact words inside quotes.</li>
        <li><code>OR</code> (must be capitalized) Returns pages containing either keyword (e.g., <code>"Frontend" OR "React"</code>).</li>
        <li><code>-word</code> Excludes pages containing the word (e.g., <code>-senior</code>).</li>
      </ul>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">Why JobDork Exists</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Writing complex boolean strings by hand is prone to syntax errors (like forgetting a quote or using lowercase 'or'). JobDork takes your plain English requirements and programmatically compiles them into flawless Google Dork strings.
      </p>
    </GuideLayout>
  );
}
