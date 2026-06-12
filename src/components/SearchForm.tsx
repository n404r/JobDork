import { SearchState, defaultSearchState } from "@/lib/types";
import { JOB_ROLES } from "@/lib/roles";
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
  const toggleExp = (exp: string) => {
    const next = state.experienceLevels.includes(exp)
      ? state.experienceLevels.filter(e => e !== exp)
      : [...state.experienceLevels, exp];
    updateState({ experienceLevels: next });
  };

  const roleSegments = state.role.split(",");
  const currentRoleSegment = roleSegments[roleSegments.length - 1].trimStart();
  const roleQuery = currentRoleSegment.trim().toLowerCase();
  
  const matchedRoles = roleQuery.length > 0 
    ? JOB_ROLES.filter(r => r.toLowerCase().includes(roleQuery) && r.toLowerCase() !== roleQuery).slice(0, 8) 
    : [];

  const handleRoleSelect = (role: string) => {
    const newSegments = [...roleSegments];
    newSegments[newSegments.length - 1] = newSegments.length === 1 ? role : " " + role;
    updateState({ role: newSegments.join(",") + ", " });
  };

  const toggleWorkType = (wt: string) => {
    const next = state.workTypes.includes(wt)
      ? state.workTypes.filter(w => w !== wt)
      : [...state.workTypes, wt];
    updateState({ workTypes: next });
  };

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-3 pl-1">
        <h2 className="text-sm font-bold tracking-wide uppercase text-white flex items-center gap-2">
         Core Criteria
        </h2>
        <button 
          onClick={() => updateState(defaultSearchState)}
          className="text-xs font-bold text-red-400 hover:text-red-300 px-2 py-1 bg-red-400/10 hover:bg-red-400/20 rounded transition-colors uppercase tracking-wider"
        >
          Reset All
        </button>
      </div>
      <div className="bg-[#0a0f1a] border border-white/5 rounded-xl p-3.5 sm:p-5 shadow-xl">
        <div className="flex flex-col gap-4">
        {/* Role & Variations */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Job Title / Role</label>
              <input
                type="text"
                value={state.role}
                onChange={(e) => updateState({ role: e.target.value })}
                placeholder="e.g. Software Engineer, Frontend"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-sm font-medium transition-all outline-none
                  ${state.role ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
              {matchedRoles.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#121826] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
                  {matchedRoles.map(r => (
                    <button
                      key={r}
                      onClick={() => handleRoleSelect(r)}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-gray-300 hover:bg-[#05DF72]/10 hover:text-[#05DF72] transition-colors"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Target Company URL (Optional)</label>
              <input
                type="text"
                value={state.company}
                onChange={(e) => updateState({ company: e.target.value })}
                placeholder="cloudflare.com"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-sm font-medium transition-all outline-none
                  ${state.company ? "border-[#05DF72] text-[#05DF72]" : "border-white/10 text-white focus:border-white/30 focus:ring-1 focus:ring-white/10"}
                `}
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="border-t border-white/5 pt-4">
          <label className="block text-xs font-semibold text-gray-400 mb-2">Location</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                value={state.location}
                onChange={(e) => updateState({ location: e.target.value })}
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-sm font-medium transition-all outline-none appearance-none
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
                placeholder="Bengaluru, etc"
                className={`w-full px-3 py-2 rounded-lg border bg-[#121826] text-sm font-medium transition-all outline-none
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
                  <span className={`text-xs font-medium transition-colors ${isChecked ? "text-[#05DF72]" : "text-gray-400 group-hover:text-gray-300"}`}>
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
                  className={`px-2.5 py-1 rounded border text-xs font-medium transition-all ${
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
