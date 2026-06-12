import { SearchState } from "@/lib/types";
import { SOURCES } from "@/lib/constants";

interface SearchMetricsProps {
  state: SearchState;
  dorkLength: number;
}

export function SearchMetrics({ state, dorkLength }: SearchMetricsProps) {
  const atsSources = state.includedSources.filter(id => SOURCES.find(s => s.id === id)?.group === 'ats').length;
  const careerSources = state.includedSources.filter(id => SOURCES.find(s => s.id === id)?.group === 'career_pages').length;
  const excludedSites = state.excludedBoards.length;

  return (
    <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500 mb-3 px-2">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
        <span>ATS Sources: {atsSources}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
        <span>Career Pages: {careerSources > 0 || state.careerMode === 'both' || state.careerMode === 'careers' ? 'Yes' : 'No'}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
        <span>Excluded Sites: {excludedSites}</span>
      </div>
      <div className="flex items-center gap-1.5 ml-auto">
        <span>Query Length: {dorkLength} chars</span>
      </div>
    </div>
  );
}
