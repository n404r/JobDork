"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SearchState, defaultSearchState } from "@/lib/types";
import { LocalSearchStorage } from "@/lib/storage";
import { plainDorkString } from "@/lib/dorkBuilder";
import { Search } from "lucide-react";

import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { CareerPageHunter } from "@/components/CareerPageHunter";
import { AdvancedSettings } from "@/components/AdvancedSettings";
import { GeneratedSearch } from "@/components/GeneratedSearch";

const STORAGE_KEY = "main";

function JobDorkContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [state, setState] = useState<SearchState>(defaultSearchState);
  const [mounted, setMounted] = useState(false);
  const [showFloatingHint, setShowFloatingHint] = useState(false);

  useEffect(() => {
    // Elegant slide-in after load
    const t1 = setTimeout(() => setShowFloatingHint(true), 600);
    const t2 = setTimeout(() => setShowFloatingHint(false), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    let initialState = { ...defaultSearchState };
    const stored = LocalSearchStorage.load(STORAGE_KEY);
    if (stored) initialState = stored;

    const urlRole = searchParams.get("role");
    const urlLocation = searchParams.get("location");
    const urlPreset = searchParams.get("preset");

    if (urlRole !== null) initialState.role = urlRole;
    if (urlLocation !== null) initialState.location = urlLocation;

    setState(initialState);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    LocalSearchStorage.save(STORAGE_KEY, state);

    const params = new URLSearchParams(searchParams.toString());
    
    if (state.role) params.set("role", state.role);
    else params.delete("role");

    if (state.location && state.location !== "worldwide") params.set("location", state.location);
    else params.delete("location");

    const newQuery = params.toString();
    const currentQuery = searchParams.toString();
    
    if (newQuery !== currentQuery) {
      router.replace(`${pathname}?${newQuery}`, { scroll: false });
    }
  }, [state, mounted, router, pathname, searchParams]);

  const updateState = useCallback((updates: Partial<SearchState>) => {
    setState(prev => {
      return { ...prev, ...updates };
    });
  }, []);

  const handleClear = useCallback(() => {
    setState(defaultSearchState);
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  if (!mounted) return null;

  const dorkString = plainDorkString(state);

  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-2 pb-6">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        
        {/* Left Column (Builder) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <SearchForm state={state} updateState={updateState} />
          <AdvancedSettings state={state} updateState={updateState} />
        </div>

        {/* Right Column (Sidebar / Output) */}
        <div className="lg:col-span-4 flex flex-col gap-6 sticky top-6">
          <GeneratedSearch state={state} dorkString={dorkString} onClear={handleClear} />
          <CareerPageHunter state={state} updateState={updateState} />
        </div>

      </div>

      <footer className="mt-10 flex flex-col items-center justify-center gap-1.5 border-t border-white/5 pt-5 pb-2 text-center">
        <p className="text-sm text-gray-500 font-medium">
          Tip: Target specific companies for the most accurate results.
        </p>
        <p className="text-[13px] text-gray-500 font-medium">
          Built with 🤍 by <a href="https://github.com/n404r" target="_blank" rel="noreferrer" className="text-[#05DF72] hover:underline font-semibold">Nischay Raj</a>
        </p>
      </footer>

      {/* Floating Search Actions */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        {/* Premium Animated Hint Tooltip */}
        <div 
          className={`absolute right-full mr-5 top-1/2 -translate-y-1/2 w-52 bg-[#0a0f1a]/80 backdrop-blur-xl border border-white/10 text-gray-200 text-[13px] leading-snug font-medium p-3.5 rounded-2xl shadow-2xl transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none origin-right flex items-center gap-3
            ${showFloatingHint ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 translate-x-8"}
          `}
        >
          {/* Pulsing Icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#05DF72]/10 border border-[#05DF72]/20 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-[#05DF72]/20 animate-ping"></div>
            <span className="text-sm relative z-10">💡</span>
          </div>
          
          <div className="flex-1">
            Click here anytime to <span className="text-[#05DF72] font-semibold">Quick Search</span>
          </div>
          
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-[6px] -translate-y-1/2 w-3 h-3 bg-[#0a0f1a] border-t border-r border-white/10 rotate-45"></div>
        </div>

        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(dorkString)}`}
          target="_blank"
          rel="noreferrer"
          title="Search Google"
          className="flex items-center justify-center w-12 h-12 bg-[#0a0f1a] border border-white/10 rounded-full shadow-2xl hover:bg-[#121826] hover:border-white/20 transition-all hover:scale-105"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5 object-contain" />
        </a>
        <a 
          href={`https://www.bing.com/search?q=${encodeURIComponent(dorkString)}`}
          target="_blank"
          rel="noreferrer"
          title="Search Bing"
          className="flex items-center justify-center w-12 h-12 bg-[#0a0f1a] border border-white/10 rounded-full shadow-2xl hover:bg-[#121826] hover:border-white/20 transition-all hover:scale-105"
        >
          <img src="/bing.svg" alt="Bing" className="w-6 h-6 object-contain" />
        </a>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-gray-500">Loading...</div>}>
      <JobDorkContent />
    </Suspense>
  );
}
