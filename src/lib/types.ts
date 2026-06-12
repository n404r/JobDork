export interface SearchState {
  // Primary
  role: string;
  keywords: string;
  skills: string;
  location: string;
  customLocation: string;
  company: string; // Target Company
  experienceLevels: string[];
  workTypes: string[];


  // Sources
  includedSources: string[]; // List of source names or IDs
  
  // Exclusions
  excludedBoards: string[]; // List of board names or IDs

  // Advanced Filters
  exactPhrase: boolean;
  salaryMentioned: boolean;
  easyApply: boolean;
  excludeSponsored: boolean;
  openPositionsOnly: boolean;

  // Date Filter
  dateFilter: "" | "24h" | "7d" | "30d";
  
  // Custom Filter
  customFilter: string;
}

export const defaultSearchState: SearchState = {
  role: "",
  keywords: "",
  skills: "",
  location: "worldwide",
  customLocation: "",
  company: "",
  experienceLevels: [],
  workTypes: [],
  includedSources: ["greenhouse", "lever", "ashby", "workday", "bamboohr", "smartrecruiters"], // Default to top ATS boards
  excludedBoards: [], // Will be populated from default constants
  exactPhrase: false,
  salaryMentioned: false,
  easyApply: false,
  excludeSponsored: false,
  openPositionsOnly: false,
  dateFilter: "",
  customFilter: "",
};
