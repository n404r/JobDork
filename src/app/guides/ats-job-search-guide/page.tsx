import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate ATS Job Search Guide | JobDork",
  description: "A comprehensive guide to searching applicant tracking systems (ATS) like Lever, Greenhouse, and Workable to find tech jobs early.",
  alternates: { canonical: "/guides/ats-job-search-guide" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="The Ultimate ATS Job Search Guide" 
      description="How to search applicant tracking systems directly to find jobs before anyone else."
      slug="ats-job-search-guide"
    >
      <h2 className="text-xl font-bold text-white mb-3">What is an ATS?</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        An Applicant Tracking System (ATS) is software used by recruiters to manage the hiring process. Every time a company creates a new job req, it goes into their ATS first. Popular examples include Greenhouse, Lever, Workable, and Ashby.
      </p>

      <h2 className="text-xl font-bold text-white mb-3">The ATS Search Advantage</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        By searching an ATS directly via Google, you bypass algorithmic job boards entirely. This means:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li>You see jobs the exact day they are posted.</li>
        <li>You avoid "ghost jobs" that aggregators forget to delete.</li>
        <li>You find stealth startups that haven't spent money on marketing their open roles.</li>
      </ul>

      <h2 className="text-xl font-bold text-white mb-3">Identifying ATS Footprints</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Every ATS has a predictable URL structure. For example, Greenhouse jobs always sit on `boards.greenhouse.io` or use the Greenhouse API. JobDork utilizes `site:` operators to restrict Google searches exclusively to these footprints.
      </p>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">Automating the Search</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        JobDork aggregates all major ATS footprints into a single, highly optimized query. You can filter by remote roles, specific tech stacks, or target a specific list of companies.
      </p>
    </GuideLayout>
  );
}
