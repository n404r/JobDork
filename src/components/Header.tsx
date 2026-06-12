"use client";

import Link from "next/link";
import { Search, HelpCircle, X } from "lucide-react";
import { useState } from "react";

export function Header({ h1Override }: { h1Override?: string | boolean }) {
  const [isHelpOpen, setHelpOpen] = useState(false);

  const LogoTag = h1Override ? "h2" : "h1";

  return (
    <>
      <header className="flex items-center justify-between mb-5 border-b border-white/5 pb-4">
        {/* Left */}
        <a href="/" className="flex items-center gap-3 sm:gap-4 select-none hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="JobDork Logo" className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain" />
          <div className="flex flex-col justify-center mt-1">
            <LogoTag className="text-2xl sm:text-3xl font-black tracking-tight flex items-baseline m-0 leading-none">
              <span className="text-white">Job</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#8b5cf6]">Dork</span>
            </LogoTag>
            <h2 className="hidden sm:block text-[10px] font-bold text-gray-400 tracking-[0.2em] mt-2 uppercase leading-none">Find hidden jobs others can't.</h2>
          </div>
        </a>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-gray-500 font-medium text-[11px] hidden sm:inline-block">PRs & Fixes Welcome</span>
            <a 
              href="https://github.com/n404r/JobDork" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-all"
              title="GitHub Repository"
            >
              <img src="/github.svg" alt="GitHub" className="w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <button 
            onClick={() => setHelpOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-3 h-9 rounded-md border border-white/10 bg-transparent text-gray-400 text-[13px] font-medium hover:bg-white/5 hover:text-gray-200 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">What are Dorks?</span>
          </button>
        </div>
      </header>

      {/* Help Modal */}
      {isHelpOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          onClick={() => setHelpOpen(false)}
        >
          <div 
            className="bg-[#0a0f1a] border border-white/10 p-6 rounded-2xl max-w-md w-full shadow-2xl relative" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setHelpOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-xl font-bold text-white mb-4">What are Google Dorks?</h2>
            
            <div className="space-y-4 text-[13px] text-gray-300 leading-relaxed">
              <p>A "dork" is an advanced search query that uses special operators like <code className="text-[#05DF72] bg-white/5 px-1 py-0.5 rounded">site:</code>, <code className="text-pink-400 bg-white/5 px-1 py-0.5 rounded">OR</code>, <code className="text-cyan-400 bg-white/5 px-1 py-0.5 rounded">"exact phrase"</code>, and <code className="text-rose-400 bg-white/5 px-1 py-0.5 rounded">-exclude</code> to dig up pages that normal searches miss.</p>
              <p>JobDork builds one of these queries for you based on your role, skills, location, and preferred sources, then sends it straight to Google or Bing,  so you can find postings on company career pages, ATS boards, and hiring docs that never make it to LinkedIn or Indeed.</p>
              <p>Nothing is stored or sent anywhere. The query is built entirely in your browser.</p>
            </div>
            
            <button 
              onClick={() => setHelpOpen(false)}
              className="mt-6 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
