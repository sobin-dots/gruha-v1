"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export const RiyaDockedWidget: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <aside
      className="fixed right-3 sm:right-5 bottom-3 sm:bottom-5 z-[70] w-[312px] max-w-[calc(100vw-24px)] bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_4px_12px_rgba(17,24,33,0.06),0_16px_40px_rgba(17,24,33,0.12)] overflow-hidden transition-all duration-300 ease-out"
    >
      {/* Header Bar */}
      <div
        onClick={() => setIsMinimized(!isMinimized)}
        className="flex items-center gap-2.5 p-[12px_14px] border-b border-[#EFF3F7] cursor-pointer select-none"
      >
        <div className="w-[26px] h-[26px] rounded-full bg-[#5843D6] text-white flex items-center justify-center text-[11px] font-semibold shrink-0">
          R
        </div>
        <span className="text-[13px] font-semibold text-[#111821]">
          Riya AI
        </span>
        <span className="text-[11.5px] text-[#8A94A1]">
          • Online
        </span>
        <div
          className={`ml-auto text-[#8A94A1] transition-transform duration-300 ${
            isMinimized ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
        </div>
      </div>

      {/* Body Content */}
      <div
        className={`transition-all duration-300 ease-out overflow-hidden ${
          isMinimized ? "max-h-0 opacity-0 p-0" : "max-h-[340px] opacity-100 p-[14px]"
        }`}
      >
        <div className="mb-3">
          <span className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#5843D6]">
            Context summary
          </span>
          <p className="font-serif text-[15px] leading-[1.5] text-[#111821] mt-2 min-h-[66px]">
            "Pavan & Shruti were terrified of stretching to ₹1.8Cr, but our analysis showed their joint income growth trajectory supported it."
          </p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Riya about this journal..."
            className="flex-1 min-w-0 bg-[#F7F9FB] border border-[#E4E9EF] rounded-lg px-3 py-[9px] font-sans text-[13px] text-[#111821] outline-none focus:border-[#5843D6] transition-colors placeholder:text-[#8A94A1]"
          />
          <button
            type="button"
            className="bg-[#5843D6] hover:bg-[#4834C4] text-white rounded-lg w-[36px] h-[36px] flex items-center justify-center shrink-0 transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RiyaDockedWidget;
