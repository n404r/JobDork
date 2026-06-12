# JobDork

Find hidden jobs others can't.

JobDork is an advanced Google Dorking query builder specifically engineered for job hunters. Instead of relying on traditional job board algorithms, JobDork allows you to search directly across Applicant Tracking Systems (ATS), startup boards, and internal company career pages by generating highly precise Google search queries.

## Features

- **Precision Filtering**: Build complex search strings targeting specific roles, locations, required skills, and experience levels.
- **Live Role Autocomplete**: Instantly search and chain together multiple job titles from a massive predefined list of tech and corporate roles.
- **ATS Targeting**: Search directly inside popular ATS platforms (Greenhouse, Lever, Workday, Ashby, BambooHR, SmartRecruiters, etc.) to find unlisted or fresh opportunities.
- **Board Exclusion**: Automatically strip out noisy aggregate boards (LinkedIn, Indeed, Glassdoor) to drastically reduce spam and duplicate listings.
- **State Persistence**: Your search configurations are saved locally in your browser so you never lose your active hunt parameters.

## For Visitors and Job Hunters

Using JobDork is incredibly simple:

1. Start typing your target roles in the autocomplete box (e.g., "Software Engineer", "Frontend Developer").
2. Add any specific keywords, locations, or mandatory skills you possess.
3. Select which ATS platforms you want to target in the Advanced Settings.
4. Click the **Google**, **Bing**, or **Lucky** button to execute your query instantly, or copy the raw Dork string.

This method bypasses the standard filtering algorithms of major job platforms, often revealing positions hours or days before they are widely indexed or promoted.

## For Developers

JobDork is built with modern web technologies, prioritizing a fast, client-side experience with zero backend dependencies.

### Tech Stack

- **Framework**: Next.js (App Router)
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

### Getting Started

To run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/n404r/JobDork.git
   ```

2. Navigate into the directory:
   ```bash
   cd jobdork
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

- `src/app`: Contains the Next.js routing, global CSS, and main page layout.
- `src/components`: Modular React components comprising the UI (`SearchForm`, `AdvancedSettings`, `GeneratedSearch`, etc.).
- `src/lib/dorkBuilder.ts`: The core logic engine that transforms user state into a valid Google Dork string.
- `src/lib/constants.ts`: The centralized database of ATS domains, startup boards, and excluded portals.
- `src/lib/roles.ts`: A predefined massive list of job roles used for autocomplete functionality.
- `src/lib/storage.ts`: Utility for handling local storage persistence.

### Contributing

Pull requests and fixes are welcome! If you want to add a new ATS platform or job board to the database:

1. Open `src/lib/constants.ts`.
2. Add the new platform to the `SOURCES` or `EXCLUDE_PORTALS` array.
3. Ensure you provide the exact search domain (e.g., `site:boards.greenhouse.io`).
4. Submit a PR!

Built with 🤍 by [Nischay Raj](https://github.com/n404r)
