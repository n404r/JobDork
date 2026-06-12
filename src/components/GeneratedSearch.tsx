"use client";

import { useState } from "react";
import { Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { buildDorkParts } from "@/lib/dorkBuilder";
import { SearchState } from "@/lib/types";

interface GeneratedSearchProps {
  state: SearchState;
  dorkString: string;
  onClear: () => void;
}

export function GeneratedSearch({ state, dorkString, onClear }: GeneratedSearchProps) {
  const [copied, setCopied] = useState(false);
  const parts = buildDorkParts(state);

  const handleCopy = () => {
    navigator.clipboard.writeText(dorkString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(dorkString)}`;
  const bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(dorkString)}`;
  const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(dorkString)}&btnI=1`;

  const includedSourcesCount = state.includedSources.length;
  const excludedBoardsCount = state.excludedBoards.length;

  return (
    <div className="bg-[#05070A] border border-white/10 rounded-2xl shadow-xl flex flex-col h-full">
      <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-white/5 bg-white/[0.01]">
        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase text-white flex items-center gap-2">
            Generated Search
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-[12px] font-semibold hover:border-green-400 hover:text-green-400 transition-all"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button 
            onClick={onClear}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 text-[12px] font-semibold hover:border-white/30 hover:text-white transition-all"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 px-3.5 sm:px-5 py-3 border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-[11px] font-medium text-gray-400">ATS Sources: <span className="text-white">{includedSourcesCount}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
          <span className="text-[11px] font-medium text-gray-400">Excluded Sites: <span className="text-white">{excludedBoardsCount}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
          <span className="text-[11px] font-medium text-gray-400">Query Length: <span className={dorkString.length > 2048 ? "text-red-400" : "text-white"}>{dorkString.length} chars</span></span>
        </div>
      </div>

      <div className="p-3.5 sm:p-5 font-mono text-[13px] leading-relaxed text-gray-300 flex-1 break-words whitespace-pre-wrap">
        {!dorkString ? (
          <span className="text-gray-600 italic">Start typing to generate your search strategy...</span>
        ) : (
          parts.map((p, i) => {
            if (p.type === 'neg') {
              return <span key={i} className="text-rose-400"> {p.value} </span>;
            }
            if (p.type === 'date' || p.type === 'site') {
              return <span key={i} className="text-cyan-400 font-semibold"> {p.value} </span>;
            }
            
            // Highlight strings, ORs, ANDs, Parenthesis, and Operators
            const val = p.value
              .replace(/"([^"]*)"/g, '<span class="text-[#05DF72]">"$1"</span>')
              .replace(/\b(OR|AND)\b/g, '<span class="text-pink-400 font-bold">$1</span>')
              .replace(/(-?)(site:|inurl:|intitle:|after:|before:)([^\s)]+)/g, (match, neg, prefix, term) => {
                const color = neg ? 'text-rose-400' : 'text-cyan-400';
                return `<span class="${color}">${neg}${prefix}${term}</span>`;
              })
              .replace(/(\(|\))/g, '<span class="text-yellow-400/80 font-bold">$1</span>');
              
            return <span key={i} dangerouslySetInnerHTML={{ __html: val + " " }} />;
          })
        )}
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(dorkString)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-transparent text-gray-300 text-[13px] font-semibold hover:bg-white/5 hover:text-white transition-all"
          >
            <img src="/google.svg" alt="Google" className="w-4 h-4 object-contain" />
            Google
          </a>
          <a
            href={`https://www.bing.com/search?q=${encodeURIComponent(dorkString)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-transparent text-gray-300 text-[13px] font-semibold hover:bg-white/5 hover:text-white transition-all"
          >
            <img src="/bing.svg" alt="Bing" className="w-4 h-4 object-contain" />
            Bing
          </a>
          <a
            href={`https://www.google.com/search?btnI=1&q=${encodeURIComponent(dorkString)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-transparent text-gray-300 text-[13px] font-semibold hover:bg-white/5 hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4 text-gray-400" />
            Lucky
          </a>
        </div>
      </div>
    </div>
  );
}
