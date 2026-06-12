import { SearchState, defaultSearchState } from "./types";

export interface SearchStorage {
  save(id: string, config: SearchState): void;
  load(id: string): SearchState | null;
}

export const LocalSearchStorage: SearchStorage = {
  save(id: string, config: SearchState) {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(`jobdork_search_${id}`, JSON.stringify(config));
      }
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  },
  
  load(id: string): SearchState | null {
    try {
      if (typeof window !== "undefined") {
        const data = localStorage.getItem(`jobdork_search_${id}`);
        if (data) {
          const parsed = JSON.parse(data);
          // Merge with default state to ensure all fields exist
          return { ...defaultSearchState, ...parsed };
        }
      }
    } catch (e) {
      console.error("Failed to load from localStorage", e);
    }
    return null;
  }
};
