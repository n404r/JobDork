# JobDork

<p align="center">
  <img src="public/logo.png" width="100" alt="JobDork Logo">
</p>

<h3 align="center">Find hidden jobs others can't.</h3>

JobDork is an advanced Google Dorking query builder specifically engineered for tech professionals and job hunters. Instead of relying on traditional job board algorithms or recruiters, JobDork allows you to search directly across Applicant Tracking Systems (ATS), startup boards, and internal company career pages by generating highly precise boolean search queries.

## 🚀 Features

- **Precision Filtering**: Build complex search strings targeting specific roles, exact locations, remote preferences, and required skills.
- **Advanced Job Parameters**: Instantly filter for "Open Positions Only", "Salary Mentioned", and "Easy Apply" tags directly in the search operators.
- **ATS Targeting**: Search directly inside popular ATS platforms (Greenhouse, Lever, Workday, Ashby, BambooHR, SmartRecruiters, etc.) to find unlisted or fresh opportunities before they hit job boards.
- **Board Exclusion**: Automatically strip out noisy aggregate boards (LinkedIn, Indeed, Glassdoor, BuiltIn) to drastically reduce spam and duplicate listings.
- **Dynamic SEO Landing Pages**: Programmatically generated static pages (`/remote-jobs`, `/frontend-jobs`, etc.) powered by Next.js App Router for deep SEO penetration and direct-to-search user acquisition.
- **Rich "Neon Tech" UI**: A beautiful, fully responsive interface featuring glassmorphism, glowing accents, and optimized mobile layouts with floating action elements.
- **Rock-Solid State Management**: Advanced route-based caching and `<Suspense>` boundaries prevent layout shifts and ensure your complex search parameters persist exactly as intended without bleeding across pages.
- **Rich Results**: Fully integrated JSON-LD FAQ schema markup out of the box to dominate Google Search results.

## 🎯 For Visitors and Job Hunters

Using JobDork is incredibly simple:

1. Start typing your target roles in the autocomplete box (e.g., "Software Engineer", "Frontend Developer").
2. Add any specific keywords, locations, or mandatory skills you possess.
3. Select which ATS platforms you want to target in the Advanced Settings.
4. Click the **Google**, **Bing**, or **Lucky** button to execute your query instantly, or copy the raw Dork string to paste anywhere.

This method bypasses the standard filtering algorithms of major job platforms, revealing positions hours or days before they are widely indexed or promoted.

## 💻 For Developers

JobDork is built with modern web technologies, prioritizing a blazing-fast, client-side experience, robust SSR logic, and zero backend dependencies.

### Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS (with advanced custom config)
- **Language**: TypeScript
- **Icons**: Lucide React
- **Hosting**: Designed for seamless deployment on Vercel or any static edge host.

### Getting Started

To run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/n404r/JobDork.git
   ```

2. Navigate into the directory:
   ```bash
   cd JobDork
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

### Project Structure

- `src/app`: Contains the Next.js routing, global CSS, and dynamic slug generation (`/[slug]/page.tsx`).
- `src/components`: Modular React components comprising the UI (`SearchForm`, `AdvancedSettings`, `FAQAccordion`, etc.).
- `src/lib/seoData.ts`: Master configuration for programmatic landing pages and rich FAQ data.
- `src/lib/dorkBuilder.ts`: The core logic engine that transforms user state into a valid Google Dork string.
- `src/lib/constants.ts`: The centralized database of ATS domains, startup boards, and excluded portals.
- `src/lib/roles.ts`: A massive predefined list of tech roles used for lightning-fast autocomplete functionality.

### Contributing

Pull requests and fixes are always welcome! To add a new ATS platform or job board:

1. Open `src/lib/constants.ts`.
2. Add the new platform to the `SOURCES` or `EXCLUDE_PORTALS` array.
3. Ensure you provide the exact search domain (e.g., `site:boards.greenhouse.io`) and a neat logo if possible.
4. Submit a PR!

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/n404r">Nischay Raj</a>
</p>
