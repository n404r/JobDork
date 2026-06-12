"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SearchState, defaultSearchState } from "@/lib/types";
import { LocalSearchStorage } from "@/lib/storage";
import { plainDorkString } from "@/lib/dorkBuilder";
import { Search } from "lucide-react";

import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import dynamic from "next/dynamic";

const AdvancedSettings = dynamic(() => import("@/components/AdvancedSettings").then(mod => mod.AdvancedSettings), { ssr: false });
const GeneratedSearch = dynamic(() => import("@/components/GeneratedSearch").then(mod => mod.GeneratedSearch), { ssr: false });

interface JobDorkContentProps {
  initialOverride?: Partial<SearchState>;
  h1Override?: string;
}

export function JobDorkContent({ initialOverride, h1Override }: JobDorkContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [state, setState] = useState<SearchState>(defaultSearchState);
  const [mounted, setMounted] = useState(false);
  const [showFloatingHint, setShowFloatingHint] = useState(false);

  // Bust cache by using a new key for main
  const storageKey = pathname === "/" ? "jobdork_v7" : `jobdork_${pathname.replace(/\//g, "")}`;

  useEffect(() => {
    // Elegant slide-in after load
    const t1 = setTimeout(() => setShowFloatingHint(true), 600);
    const t2 = setTimeout(() => setShowFloatingHint(false), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    let initialState = { ...defaultSearchState, ...initialOverride };
    
    // Only load from storage if there are no overrides and no URL params
    const stored = LocalSearchStorage.load(storageKey);
    if (stored && !initialOverride) {
       initialState = { ...initialState, ...stored };
    }

    const urlRole = searchParams.get("role");
    const urlLocation = searchParams.get("location");

    if (urlRole !== null) initialState.role = urlRole;
    if (urlLocation !== null) initialState.location = urlLocation;

    setState(initialState);
    setMounted(true);
  }, [searchParams, initialOverride, storageKey]);

  useEffect(() => {
    if (!mounted) return;
    LocalSearchStorage.save(storageKey, state);

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
    const defaultWithOverride = { ...defaultSearchState, ...initialOverride };
    setState(defaultWithOverride);
    router.replace(pathname, { scroll: false });
  }, [router, pathname, initialOverride]);

  if (!mounted) {
    return (
      <main className="max-w-[1400px] mx-auto px-3 sm:px-6 pt-2">
        <Header h1Override={!!h1Override} />
        {h1Override && (
          <h1 className="text-xl sm:text-3xl font-black text-center text-white mb-6 mt-2 tracking-tight">
            {h1Override}
          </h1>
        )}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 border-2 border-[#05DF72] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </main>
    );
  }

  const dorkString = plainDorkString(state);

  return (
    <main className="max-w-[1400px] mx-auto px-3 sm:px-6 pt-2">
      <Header h1Override={!!h1Override} />

      {h1Override && (
        <h1 className="text-lg sm:text-xl font-bold text-center text-white mb-4 mt-1 tracking-tight">
          {h1Override}
        </h1>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-start mt-0">
        
        {/* Left Column (Builder) */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          <SearchForm state={state} updateState={updateState} />
          <AdvancedSettings state={state} updateState={updateState} />
        </div>

        {/* Right Column - Results */}
        <div className="lg:col-span-4 flex flex-col gap-2 lg:sticky lg:top-4">
          <GeneratedSearch state={state} dorkString={dorkString} onClear={handleClear} />
        </div>

      </div>

      {/* Floating Search Actions - Mobile Only */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 lg:hidden">
        
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
