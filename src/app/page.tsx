"use client";

import { Suspense } from "react";
import { JobDorkContent } from "@/components/JobDorkContent";
import { FAQAccordion } from "@/components/FAQAccordion";

const homeFaq = [
  { question: "What are hidden jobs?", answer: "Hidden jobs are unadvertised tech jobs and remote opportunities that are published directly to internal company career pages and Applicant Tracking Systems (ATS) like Greenhouse, Lever, and Workable. These positions often don't appear on major job boards like LinkedIn or Indeed until days later, or sometimes never at all, making them an untapped market for job seekers." },
  { question: "How does JobDork work?", answer: "JobDork is a free boolean search generator that creates advanced Google dork queries to uncover hidden software engineering, product, and data science jobs. By applying specialized search operators (like site:lever.co or inurl:greenhouse.io), JobDork filters out recruiter spam and connects you directly to the original job postings on ATS platforms." },
  { question: "Which ATS platforms does JobDork support?", answer: "JobDork allows you to search across the most popular Applicant Tracking Systems (ATS) used by top tech companies and startups. Our supported platforms include Greenhouse, Lever, Ashby, Workday, BambooHR, and SmartRecruiters. This ensures you can find remote and worldwide job listings before they get flooded with applications." },
  { question: "Why aren't some jobs visible on major job boards?", answer: "Many tech companies and startups publish their latest open positions exclusively to their own ATS first to save on recruitment costs and avoid an overwhelming volume of applicants. By utilizing advanced search techniques and boolean job search strategies, you bypass the crowded job boards and discover these hidden tech jobs immediately upon publication." },
  { question: "Is JobDork free to use?", answer: "Yes, JobDork is a completely free job search tool designed to help developers, engineers, and tech professionals discover publicly available but hidden job opportunities. We do not require an account, and we empower you to use advanced Google search operators to find remote, hybrid, and onsite roles instantly." }
];

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-gray-500">Loading...</div>}>
        <JobDorkContent key="home" />
      </Suspense>

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
        <FAQAccordion items={homeFaq} />
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": homeFaq.map(item => ({
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
