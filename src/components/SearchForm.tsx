import { SearchState } from "@/lib/types";
import { generateVariations } from "@/lib/variations";
import { Check } from "lucide-react";

interface SearchFormProps {
  state: SearchState;
  updateState: (updates: Partial<SearchState>) => void;
}

const EXPERIENCES = [
  "Internship", "Entry Level", "Junior", "Mid Level", "Senior", "Lead", "Director+"
];

const WORK_TYPES = [
  { id: "remote", label: "Remote Only" },
  { id: "wfh", label: "Work From Home" },
  { id: "hybrid", label: "Hybrid" },
  { id: "onsite", label: "On-site" }
];

export function SearchForm({ state, updateState }: SearchFormProps) {
  const variations = generateVariations(state.role);
  const showVariations = variations.length > 1 && state.role.length > 2;

  const toggleExp = (exp: string) => {
    const next = state.experienceLevels.includes(exp)
      ? state.experienceLevels.filter(e => e !== exp)
      : [...state.experienceLevels, exp];
    updateState({ experienceLevels: next });
  };

  const toggleWorkType = (wt: string) => {
    const next = state.workTypes.includes(wt)
      ? state.workTypes.filter(w => w !== wt)
      : [...state.workTypes, wt];
    updateState({ workTypes: next });
  };

  return (
    <div className="mb-2">
      <h2 className="text-sm font-bold tracking-wide uppercase text-white flex items-center justify-center gap-2 mb-3">
       Core Criteria
      </h2>
      <div className="bg-[#0a0f1a] border border-white/5 rounded-xl p-5 shadow-xl">
        <div className="flex flex-col gap-4">
        {/* Role & Variations */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Job Title / Role</label>
              <input
                type="text"
                value={state.role}
                onChange={(e) => updateState({ role: e.target.value })}
                placeholder="e.g. Security Engineer"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[13px] font-medium transition-all outline-none
                  ${state.role ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Target Company (Optional)</label>
              <input
                type="text"
                value={state.company}
                onChange={(e) => updateState({ company: e.target.value })}
                placeholder="e.g. cloudflare.com"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[13px] font-medium transition-all outline-none
                  ${state.company ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
            </div>
          </div>
          
          {showVariations && (
            <div>
              <span className="text-[11px] font-medium text-gray-500 mb-1 block">Query Variations:</span>
              <div className="flex flex-wrap gap-1.5">
                {variations.slice(0, 5).map(v => (
                  <button
                    key={v}
                    onClick={() => updateState({ role: v })}
                    className="px-2 py-1 text-[11px] font-medium rounded-md bg-[#121826] border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Location Section */}
        <div className="border-t border-white/5 pt-4">
          <label className="block text-xs font-semibold text-gray-400 mb-2">Location</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                value={state.location}
                onChange={(e) => updateState({ location: e.target.value })}
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[13px] font-medium transition-all outline-none appearance-none
                  ${state.location !== "worldwide" ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236B7280' d='M1 1l4 4 4-4'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="worldwide" className="bg-[#121826] text-white">Worldwide</option>
                <option value="remote" className="bg-[#121826] text-white">Remote Default</option>
                <option value="usa" className="bg-[#121826] text-white">USA</option>
                <option value="europe" className="bg-[#121826] text-white">Europe</option>
                <option value="india" className="bg-[#121826] text-white">India</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                value={state.customLocation}
                onChange={(e) => updateState({ customLocation: e.target.value })}
                placeholder="Custom Cities (e.g. London, Berlin)"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-[13px] font-medium transition-all outline-none
                  ${state.customLocation ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {WORK_TYPES.map(wt => {
              const isChecked = state.workTypes.includes(wt.id);
              return (
                <label key={wt.id} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={isChecked} 
                    onChange={() => toggleWorkType(wt.id)} 
                  />
                  <div className={`w-3.5 h-3.5 rounded-[3px] border flex items-center justify-center transition-all ${
                    isChecked ? "bg-[#05DF72] border-[#05DF72]" : "bg-[#121826] border-white/20 group-hover:border-white/40"
                  }`}>
                    <Check className={`w-2.5 h-2.5 text-[#0a0f1a] transition-opacity ${isChecked ? "opacity-100" : "opacity-0"}`} strokeWidth={3} />
                  </div>
                  <span className={`text-[12px] font-medium transition-colors ${isChecked ? "text-[#05DF72]" : "text-gray-400 group-hover:text-gray-300"}`}>
                    {wt.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="border-t border-white/5 pt-4">
          <label className="block text-xs font-semibold text-gray-400 mb-2">Experience Level</label>
          <div className="flex flex-wrap gap-1.5">
            {EXPERIENCES.map(exp => {
              const active = state.experienceLevels.includes(exp);
              return (
                <button
                  key={exp}
                  onClick={() => toggleExp(exp)}
                  className={`px-2.5 py-1 rounded border text-[11px] font-medium transition-all ${
                    active 
                      ? "bg-[#05DF72] text-[#0a0f1a] border-[#05DF72]" 
                      : "bg-[#121826] border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {exp}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
