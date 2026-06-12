import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Hidden Tech Jobs | JobDork Guide",
  description: "Learn why 80% of jobs are never posted on LinkedIn and discover actionable strategies to find unlisted tech roles using boolean search operators.",
  alternates: { canonical: "/guides/how-to-find-hidden-jobs" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="How to Find Hidden Tech Jobs" 
      description="Learn why 80% of jobs are never posted on LinkedIn and discover actionable strategies to find unlisted tech roles."
      slug="how-to-find-hidden-jobs"
    >
      <h2 className="text-xl font-bold text-white mb-3">The Hidden Job Market</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        The vast majority of job opportunities never make it to popular job boards like LinkedIn, Indeed, or Glassdoor. 
        Instead, companies post them internally, rely on referrals, or publish them strictly on their Applicant Tracking Systems (ATS).
      </p>

      <h2 className="text-xl font-bold text-white mb-3">Why Companies Hide Jobs</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li><strong>Cost:</strong> Posting on major job boards is extremely expensive.</li>
        <li><strong>Volume:</strong> Public job postings attract thousands of unqualified resumes, overwhelming recruiters.</li>
        <li><strong>Testing the waters:</strong> Companies often quietly open roles on their own domains first.</li>
      </ul>

      <h2 className="text-xl font-bold text-white mb-3">How to Access the Hidden Market</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        The secret to accessing these hidden jobs is querying the underlying software that companies use to hire.
        Platforms like Lever, Greenhouse, Workable, and Ashby host the actual job postings. By using advanced Google search operators (Google Dorks), you can surface these pages directly.
      </p>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">Using JobDork</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Instead of manually constructing complex boolean queries, JobDork automatically builds the perfect search string for your desired role and targets all major ATS platforms simultaneously. Just enter your role, and let the tool do the heavy lifting.
      </p>
    </GuideLayout>
  );
}
