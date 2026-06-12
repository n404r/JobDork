import { GuideLayout } from "@/components/GuideLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenhouse Job Search Guide | JobDork",
  description: "Learn how to search Greenhouse.io for hidden tech jobs using Google Dorks. Bypass aggregators and apply directly to top startups.",
  alternates: { canonical: "/guides/greenhouse-job-search-guide" },
};

export default function Guide() {
  return (
    <GuideLayout 
      title="How to Search Greenhouse for Jobs" 
      description="Learn how to search Greenhouse.io for hidden tech jobs using Google Dorks."
      slug="greenhouse-job-search-guide"
    >
      <h2 className="text-xl font-bold text-white mb-3">Why Search Greenhouse?</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Greenhouse is arguably the most dominant ATS in the tech startup ecosystem. Y Combinator companies, series A-C startups, and tech unicorns heavily rely on Greenhouse. If you want to work at a fast-growing startup, you need to monitor Greenhouse.
      </p>

      <h2 className="text-xl font-bold text-white mb-3">Greenhouse Search Footprints</h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Job postings on Greenhouse are hosted on <code>boards.greenhouse.io</code>. However, many companies use the Greenhouse API to host the job board on their own domain (e.g., <code>careers.company.com</code>) while keeping the application form on <code>boards.greenhouse.io</code>.
      </p>

      <h3 className="text-lg font-semibold text-[#05DF72] mb-2">The JobDork Solution</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Because of this split structure, searching Greenhouse can be tricky. JobDork automatically accounts for both the hosted boards and the embedded iframes, giving you comprehensive coverage of Greenhouse jobs with a single click.
      </p>
    </GuideLayout>
  );
}
