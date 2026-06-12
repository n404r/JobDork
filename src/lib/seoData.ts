export interface SEOPageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  defaultState: {
    role?: string;
    location?: string;
    keywords?: string;
  };
  faq: { question: string; answer: string }[];
}

export const landingPages: Record<string, SEOPageData> = {
  "remote-jobs": {
    slug: "remote-jobs",
    title: "JobDork | Find Hidden Remote Software Jobs",
    description: "Generate advanced search queries to discover hidden remote tech jobs on ATS platforms before they appear on major job boards. Search remote jobs from Lever, Greenhouse, Workable, Ashby, and more.",
    h1: "Find Hidden Remote Jobs",
    category: "Remote",
    defaultState: {
      location: "Remote",
    },
    faq: [
      {
        question: "How do I find hidden remote jobs?",
        answer: "JobDork uses Google Dorks (advanced search operators) to search directly through Applicant Tracking Systems (ATS) like Lever and Greenhouse, uncovering remote positions before they are aggregated by LinkedIn or Indeed."
      },
      {
        question: "Why use boolean search for remote jobs?",
        answer: "Major job boards are heavily saturated. By searching ATS URLs directly, you bypass the algorithms and apply to remote positions the moment they are published by the company."
      }
    ]
  },
  "frontend-jobs": {
    slug: "frontend-jobs",
    title: "JobDork | Find Hidden Frontend Developer Jobs",
    description: "Generate advanced search queries to discover hidden frontend developer jobs on ATS platforms before they appear on major job boards. Search React, Vue, and Angular jobs from Lever, Greenhouse, Workable, and more.",
    h1: "Find Hidden Frontend Jobs",
    category: "Frontend",
    defaultState: {
      role: "Frontend Developer",
    },
    faq: [
      {
        question: "What are the best ATS boards for frontend jobs?",
        answer: "Many top tech companies use Lever, Greenhouse, and Ashby to post their frontend engineering roles. JobDork helps you query these platforms directly."
      }
    ]
  },
  "backend-jobs": {
    slug: "backend-jobs",
    title: "JobDork | Find Hidden Backend Developer Jobs",
    description: "Generate advanced search queries to discover hidden backend developer jobs on ATS platforms before they appear on major job boards. Search Node.js, Python, Java, and Go jobs from Lever, Greenhouse, Workable, and more.",
    h1: "Find Hidden Backend Jobs",
    category: "Backend",
    defaultState: {
      role: "Backend Developer",
    },
    faq: [
      {
        question: "How can I find backend roles that aren't on LinkedIn?",
        answer: "By using Google Dorks customized for backend roles (like Node, Go, or Python) targeted directly at ATS domains like greenhouse.io and lever.co."
      }
    ]
  },
  "full-stack-jobs": {
    slug: "full-stack-jobs",
    title: "JobDork | Find Hidden Full Stack Developer Jobs",
    description: "Generate advanced search queries to discover hidden full stack developer jobs on ATS platforms before they appear on major job boards. Search jobs from Lever, Greenhouse, Workable, Ashby, and more.",
    h1: "Find Hidden Full Stack Jobs",
    category: "Full Stack",
    defaultState: {
      role: "Full Stack Developer",
    },
    faq: [
      {
        question: "How do I filter full stack jobs by tech stack?",
        answer: "You can add specific keywords (e.g., React, Node, AWS) to the JobDork search builder to narrow down full stack roles hosted on applicant tracking systems."
      }
    ]
  },
  "cybersecurity-jobs": {
    slug: "cybersecurity-jobs",
    title: "JobDork | Find Hidden Cybersecurity Jobs",
    description: "Generate advanced search queries to discover hidden cybersecurity, infosec, and penetration testing jobs on ATS platforms before they appear on major job boards.",
    h1: "Find Hidden Cybersecurity Jobs",
    category: "Cybersecurity",
    defaultState: {
      role: "Security Engineer",
    },
    faq: [
      {
        question: "Why use JobDork for cybersecurity jobs?",
        answer: "Cyber roles are highly competitive. JobDork allows you to use boolean search operators to find unlisted or fresh infosec job postings on platforms like Lever and Greenhouse."
      }
    ]
  },
  "ai-jobs": {
    slug: "ai-jobs",
    title: "JobDork | Find Hidden AI & Machine Learning Jobs",
    description: "Generate advanced search queries to discover hidden AI, Machine Learning, and LLM engineering jobs on ATS platforms before they appear on major job boards.",
    h1: "Find Hidden AI & ML Jobs",
    category: "AI & Machine Learning",
    defaultState: {
      role: "Machine Learning Engineer",
    },
    faq: [
      {
        question: "How to find early-stage AI startup jobs?",
        answer: "JobDork targets ATS software commonly used by startups (like Ashby and Lever), allowing you to find AI and ML roles before they hit mainstream job boards."
      }
    ]
  },
  "data-science-jobs": {
    slug: "data-science-jobs",
    title: "JobDork | Find Hidden Data Science Jobs",
    description: "Generate advanced search queries to discover hidden data science, data engineering, and analytics jobs on ATS platforms before they appear on major job boards.",
    h1: "Find Hidden Data Science Jobs",
    category: "Data Science",
    defaultState: {
      role: "Data Scientist",
    },
    faq: [
      {
        question: "Can I find data engineering jobs with this tool?",
        answer: "Yes, you can easily change the role to Data Engineer in the JobDork builder to generate queries specific to data infrastructure roles."
      }
    ]
  },
  "devops-jobs": {
    slug: "devops-jobs",
    title: "JobDork | Find Hidden DevOps & SRE Jobs",
    description: "Generate advanced search queries to discover hidden DevOps, Site Reliability Engineering, and Cloud infrastructure jobs on ATS platforms before they appear on major job boards.",
    h1: "Find Hidden DevOps & SRE Jobs",
    category: "DevOps & SRE",
    defaultState: {
      role: "DevOps Engineer",
    },
    faq: [
      {
        question: "How do I find cloud engineering roles?",
        answer: "Simply set the role to DevOps, Cloud Engineer, or SRE in JobDork to search top ATS boards for infrastructure roles."
      }
    ]
  },
  "startup-jobs": {
    slug: "startup-jobs",
    title: "JobDork | Find Hidden Startup Jobs",
    description: "Generate advanced search queries to discover hidden startup jobs on ATS platforms like Ashby and Lever before they appear on major job boards.",
    h1: "Find Hidden Startup Jobs",
    category: "Startups",
    defaultState: {
      keywords: "startup OR \"seed\" OR \"series A\"",
    },
    faq: [
      {
        question: "Which ATS do startups use the most?",
        answer: "Early-stage startups heavily favor Ashby and Lever. JobDork includes these sources by default in its boolean queries."
      }
    ]
  },
  "internships": {
    slug: "internships",
    title: "JobDork | Find Hidden Software Engineering Internships",
    description: "Generate advanced search queries to discover hidden tech internships and new grad roles on ATS platforms before they appear on major job boards.",
    h1: "Find Hidden Internships & New Grad Roles",
    category: "Internships",
    defaultState: {
      role: "Software Engineering Intern",
    },
    faq: [
      {
        question: "How to find unlisted tech internships?",
        answer: "Internships fill up fast. By using JobDork to search Greenhouse and Lever directly, you can apply the day an internship is posted."
      }
    ]
  }
};
