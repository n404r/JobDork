import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hidden Tech Jobs Guide | JobDork",
  description: "A comprehensive strategy guide to finding unlisted, stealth, and hidden tech jobs before they hit major job boards.",
  alternates: { canonical: "/guides/hidden-tech-jobs-guide" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="The Hidden Tech Jobs Guide" 
      description="A comprehensive strategy guide to finding unlisted, stealth, and hidden tech jobs."
      slug="hidden-tech-jobs-guide"
    >
      <h2 className="text-xl font-bold text-white mb-3">The Stealth Startup Ecosystem</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Many well-funded stealth startups do not advertise their open roles on LinkedIn because they don't want competitors to know what they are building. However, they still need an ATS to manage inbound candidates who are "in the know."
      </p>

      <h2 className="text-xl font-bold text-white mb-3">How to Find Stealth Jobs</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li><strong>Venture Capital Portfolios:</strong> Identify recently funded startups on Crunchbase and use JobDork to target their specific domains.</li>
        <li><strong>Generic Queries:</strong> Search for roles containing "Stealth" or "NewCo" on Lever and Ashby.</li>
        <li><strong>Date Filtering:</strong> The most critical factor is finding fresh jobs. Use Google's "Past 24 Hours" filter (which JobDork enables automatically) to find jobs the second they go live.</li>
      </ul>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">Beat the Competition</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Applying to a job within the first 48 hours increases your chance of an interview by 400%. The hidden job market is all about speed and direct access.
      </p>
    </GuideLayout>
  );
}
