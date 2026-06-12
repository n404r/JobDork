"use client";

import { useState } from "react";
import { SearchState } from "@/lib/types";
import { SOURCES, EXCLUDE_PORTALS } from "@/lib/constants";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface AdvancedSettingsProps {
  state: SearchState;
  updateState: (updates: Partial<SearchState>) => void;
}

const DISPLAY_LIMIT = 6;

export function AdvancedSettings({ state, updateState }: AdvancedSettingsProps) {
  const [showAllSources, setShowAllSources] = useState(false);
  const [showAllExclusions, setShowAllExclusions] = useState(false);

  const toggleSource = (id: string) => {
    const next = state.includedSources.includes(id)
      ? state.includedSources.filter(s => s !== id)
      : [...state.includedSources, id];
    updateState({ includedSources: next });
  };

  const toggleExclusion = (id: string) => {
    const next = state.excludedBoards.includes(id)
      ? state.excludedBoards.filter(s => s !== id)
      : [...state.excludedBoards, id];
    updateState({ excludedBoards: next });
  };

  const visibleSources = showAllSources ? SOURCES : SOURCES.slice(0, DISPLAY_LIMIT);
  const visibleExclusions = showAllExclusions ? EXCLUDE_PORTALS : EXCLUDE_PORTALS.slice(0, DISPLAY_LIMIT);

  return (
    <div className="mb-4">
      <h2 className="text-sm font-bold tracking-wide uppercase text-white flex items-center justify-start gap-2 mb-3 pl-1">
       Advanced Settings
      </h2>
      <div className="bg-[#0a0f1a] border border-white/5 rounded-xl p-3.5 sm:p-5 shadow-xl">
        <div className="flex flex-col gap-5">
        {/* Included Sources */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[12px] font-semibold text-gray-300">Included Sources</h3>
            <div className="flex items-center gap-1.5 text-[10px] font-medium">
              <button onClick={() => updateState({ includedSources: SOURCES.map(s => s.id) })} className="text-white hover:underline">Select All</button>
              <span className="text-gray-600">|</span>
              <button onClick={() => updateState({ includedSources: [] })} className="text-gray-400 hover:text-gray-200 hover:underline">Clear</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {visibleSources.map(s => {
              const isChecked = state.includedSources.includes(s.id);
              return (
                <label key={s.id} className={`flex items-center gap-2 p-2 rounded-lg border bg-[#121826] cursor-pointer group transition-all
                  ${isChecked ? "border-[#05DF72]" : "border-white/5 hover:border-white/20"}
                `}>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={isChecked} 
                    onChange={() => toggleSource(s.id)} 
                  />
                  <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all ${
                    isChecked ? "bg-[#05DF72] border-[#05DF72]" : "bg-transparent border-white/20 group-hover:border-white/40"
                  }`}>
                    <Check className={`w-2.5 h-2.5 text-[#0a0f1a] transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                  </div>
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    {s.logo ? (
                      <img src={s.logo} alt={s.name} className="w-3.5 h-3.5 object-contain" />
                    ) : (
                      <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-[3px] flex items-center justify-center text-[8px] font-bold ${isChecked ? 'bg-[#05DF72]/20 text-[#05DF72]' : 'bg-white/10 text-white/50'}`}>
                        {s.initial}
                      </div>
                    )}
                    <span className={`text-[11px] font-medium truncate ${isChecked ? "text-[#05DF72]" : "text-gray-400"}`} title={s.name}>{s.name}</span>
                  </div>
                </label>
              );
            })}
          </div>
          {SOURCES.length > DISPLAY_LIMIT && (
            <button 
              onClick={() => setShowAllSources(!showAllSources)}
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-white/5 bg-[#121826] text-[10px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {showAllSources ? <><ChevronUp className="w-3 h-3" /> See Less</> : <><ChevronDown className="w-3 h-3" /> See More ({SOURCES.length - DISPLAY_LIMIT})</>}
            </button>
          )}
        </div>

        {/* Exclusions */}
        <div className="border-t border-white/5 pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[12px] font-semibold text-gray-300">Excluded Job Boards</h3>
            <div className="flex items-center gap-1.5 text-[10px] font-medium">
              <button onClick={() => updateState({ excludedBoards: EXCLUDE_PORTALS.map(p => p.id) })} className="text-white hover:underline">Select All</button>
              <span className="text-gray-600">|</span>
              <button onClick={() => updateState({ excludedBoards: [] })} className="text-gray-400 hover:text-gray-200 hover:underline">Clear</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {visibleExclusions.map(p => {
              const isChecked = state.excludedBoards.includes(p.id);
              return (
                <label key={p.id} className={`flex items-center gap-2 p-2 rounded-lg border bg-[#121826] cursor-pointer group transition-all
                  ${isChecked ? "border-[#05DF72]" : "border-white/5 hover:border-white/20"}
                `}>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={isChecked} 
                    onChange={() => toggleExclusion(p.id)} 
                  />
                  <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all ${
                    isChecked ? "bg-[#05DF72] border-[#05DF72]" : "bg-transparent border-white/20 group-hover:border-white/40"
                  }`}>
                    <Check className={`w-2.5 h-2.5 text-[#0a0f1a] transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                  </div>
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} className="w-3.5 h-3.5 object-contain" />
                    ) : (
                      <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-[3px] flex items-center justify-center text-[8px] font-bold ${isChecked ? 'bg-[#05DF72]/20 text-[#05DF72]' : 'bg-white/10 text-white/50'}`}>
                        {p.name[0]}
                      </div>
                    )}
                    <span className={`text-[11px] font-medium truncate ${isChecked ? "text-[#05DF72]" : "text-gray-400"}`} title={p.name}>{p.name}</span>
                  </div>
                </label>
              );
            })}
          </div>
          {EXCLUDE_PORTALS.length > DISPLAY_LIMIT && (
            <button 
              onClick={() => setShowAllExclusions(!showAllExclusions)}
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-white/5 bg-[#121826] text-[10px] font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {showAllExclusions ? <><ChevronUp className="w-3 h-3" /> See Less</> : <><ChevronDown className="w-3 h-3" /> See More ({EXCLUDE_PORTALS.length - DISPLAY_LIMIT})</>}
            </button>
          )}
        </div>

        {/* Additional Filters */}
        <div className="border-t border-white/5 pt-4">
          <h3 className="text-[12px] font-semibold text-gray-300 mb-3">Additional Filters</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: "openPositionsOnly", label: "Open Positions Only", key: "openPositionsOnly" as const },
              { id: "salaryMentioned", label: "Salary Mentioned", key: "salaryMentioned" as const },
              { id: "easyApply", label: "Easy Apply", key: "easyApply" as const },
              { id: "excludeSponsored", label: "Exclude Sponsored", key: "excludeSponsored" as const }
            ].map(f => {
              const isChecked = state[f.key] as boolean;
              return (
                <label key={f.id} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={isChecked} 
                    onChange={() => updateState({ [f.key]: !isChecked })} 
                  />
                  <div className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all ${
                    isChecked ? "bg-[#05DF72] border-[#05DF72]" : "bg-[#121826] border-white/20 group-hover:border-white/40"
                  }`}>
                    <Check className={`w-2.5 h-2.5 text-[#0a0f1a] transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                  </div>
                  <span className={`text-[11px] font-medium transition-colors ${isChecked ? "text-[#05DF72]" : "text-gray-400 group-hover:text-gray-300"}`}>
                    {f.label}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">Date Filter</label>
              <select
                value={state.dateFilter}
                onChange={(e) => updateState({ dateFilter: e.target.value as any })}
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[12px] font-medium outline-none appearance-none transition-colors
                  ${state.dateFilter ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236B7280' d='M1 1l4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="" className="bg-[#121826] text-white">Any Time</option>
                <option value="24h" className="bg-[#121826] text-white">Past 24 Hours</option>
                <option value="7d" className="bg-[#121826] text-white">Past 7 Days</option>
                <option value="30d" className="bg-[#121826] text-white">Past 30 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 mb-1.5">Custom Filter</label>
              <input
                type="text"
                value={state.customFilter}
                onChange={(e) => updateState({ customFilter: e.target.value })}
                placeholder='e.g. "we are hiring"'
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[12px] font-medium outline-none transition-colors
                  ${state.customFilter ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
