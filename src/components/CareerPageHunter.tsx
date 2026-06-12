"use client";

import { SearchState } from "@/lib/types";

interface CareerPageHunterProps {
  state: SearchState;
  updateState: (updates: Partial<SearchState>) => void;
}

const MODES = [
  { id: 'both', label: 'All Jobs', description: 'Search ATS + Career Pages' },
  { id: 'ats', label: 'ATS Only', description: 'Only Greenhouse, Lever, etc.' },
  { id: 'careers', label: 'Career Pages', description: 'Only company /careers pages' },
  { id: 'startup', label: 'Startup & YC', description: 'Notion, Wellfound, YC sites' },
  { id: 'company', label: 'Target Company', description: 'Target a specific site' }
] as const;

export function CareerPageHunter({ state, updateState }: CareerPageHunterProps) {
  return (
    <div className="bg-[#0a0f1a] border border-white/5 rounded-2xl p-6 shadow-xl">
      <h2 className="text-sm font-bold tracking-wide uppercase text-white flex items-center gap-2 mb-6">
        <span className="text-gray-500 font-mono text-xs">03</span> Discovery Mode
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {MODES.map(mode => {
          const isActive = state.careerMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => updateState({ careerMode: mode.id as any })}
              className={`flex flex-col items-start p-3 rounded-xl border transition-all text-left w-full
                ${isActive 
                  ? "bg-[#05DF72]/10 border-[#05DF72]" 
                  : "bg-[#121826] border-white/5 hover:border-white/20 hover:bg-[#1a2133]"
                }
              `}
            >
              <span className={`text-[13px] font-bold ${isActive ? "text-[#05DF72]" : "text-white"}`}>
                {mode.label}
              </span>
              <span className={`text-[11px] font-medium mt-1 ${isActive ? "text-[#05DF72]/70" : "text-gray-500"}`}>
                {mode.description}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
