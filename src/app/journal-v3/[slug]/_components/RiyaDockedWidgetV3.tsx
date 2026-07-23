"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown, ArrowUpRight, MessageSquare, Send } from "lucide-react";

export const RiyaDockedWidgetV3: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const suggestedPrompts = [
    "How did they stretch to ₹1.8Cr?",
    "Why Sarjapur over Whitefield?",
    "What legal checks did they run?",
  ];

  return (
    <aside className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-[70] w-[340px] max-w-[calc(100vw-32px)]">
      <div className="bg-slate-900/95 backdrop-blur-2xl border border-slate-800 text-white rounded-3xl shadow-[0_16px_48px_rgba(15,23,42,0.4),0_0_32px_rgba(99,102,241,0.15)] overflow-hidden transition-all duration-300">
        {/* Header Bar */}
        <div
          onClick={() => setIsMinimized(!isMinimized)}
          className="flex items-center gap-3 p-4 cursor-pointer select-none hover:bg-slate-800/50 transition-colors"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#818CF8] text-white flex items-center justify-center font-bold text-xs shadow-md">
              <Sparkles className="w-4 h-4 fill-white text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-white">
                Riya AI
              </span>
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/30">
                Copilot
              </span>
            </div>
            <span className="text-xs text-slate-400 truncate">
              Journal Intelligence Assistant
            </span>
          </div>

          <div
            className={`ml-auto text-slate-400 transition-transform duration-300 ${
              isMinimized ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Expanded Body */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isMinimized ? "max-h-0 opacity-0 p-0" : "max-h-[420px] opacity-100 p-4 pt-0 space-y-4"
          }`}
        >
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-1.5 text-[#818CF8] font-semibold text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>AI Insights Summary</span>
            </div>
            <p className="leading-relaxed text-slate-200">
              "Pavan & Shruti were hesitant to stretch to ₹1.8Cr, but our analysis showed their joint career trajectory made it a safe 7-year investment."
            </p>
          </div>

          {/* Prompt Chips */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Suggested Questions
            </span>
            <div className="flex flex-col gap-1.5">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setInputVal(prompt)}
                  className="text-left text-xs text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800 p-2 rounded-xl border border-slate-700/40 flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <span className="truncate">{prompt}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#818CF8] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex gap-2 pt-1">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask Riya about this journal..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#6366F1] transition-colors"
            />
            <button
              type="button"
              className="bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white rounded-xl px-3 flex items-center justify-center hover:shadow-[0_0_16px_rgba(99,102,241,0.4)] transition-all cursor-pointer border-none"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RiyaDockedWidgetV3;
