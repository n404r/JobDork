"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-1">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-white/5 last:border-none">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-2.5 text-left group"
              >
                <span className="text-[12px] sm:text-[13px] font-medium text-gray-200 group-hover:text-[#05DF72] transition-colors pr-6">
                  {item.question}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#05DF72]" : ""}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[11px] sm:text-[12px] text-gray-400 leading-relaxed pr-6">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
