"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import imgRiya from "@/imports/signal-2026-07-23-17-18-39-504.jpg";

const fd = "'Newsreader', Georgia, serif";
const fu = "'Inter Tight', system-ui, sans-serif";

const getImgSrc = (img: any): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img.src) return img.src;
  return String(img);
};

export interface JournalSidebarCtaCardV0Props {
  title?: string;
  description?: string;
  startJournalText?: string;
  adaptJournalText?: string;
  characterImage?: any;
  onStartJournal?: () => void;
  onAdaptJournal?: () => void;
}

export const JournalSidebarCtaCardV0: React.FC<JournalSidebarCtaCardV0Props> = ({
  title = "Ready to write your story?",
  description = "Let Riya build a personalised journal that guides you toward the right home.",
  startJournalText = "Start your journal",
  adaptJournalText = "Adapt this journal",
  characterImage = imgRiya,
  onStartJournal,
  onAdaptJournal,
}) => {
  return (
    <div
      className="bg-white border p-6 flex flex-col items-center text-center"
      style={{
        borderRadius: 20,
        borderColor: "#E4E9EF",
        boxShadow: "0 4px 24px rgba(17,24,33,0.06)",
      }}
    >
      {/* Top illustration container */}
      <div className="relative w-full mb-10 pt-2">
        <div
          className="relative w-full h-[140px] border border-dashed rounded-[16px] p-5 flex flex-col justify-start items-start gap-2.5 overflow-hidden"
          style={{
            borderColor: "#E2E5F3",
            background: "#F7F8FC",
          }}
        >
          {/* Sparkle icon */}
          <div className="absolute top-4 right-4">
            <Sparkles size={20} className="text-[#6366F1]" />
          </div>

          {/* Skeleton lines */}
          <div className="w-1/2 h-2 rounded-full bg-[#E2E6F5]" />
          <div className="w-3/4 h-2 rounded-full bg-[#E8ECF7]" />
          <div className="w-3/5 h-2 rounded-full bg-[#EDF0F9]" />
          <div className="w-1/3 h-2 rounded-full bg-[#FCE8E2]" />
        </div>

        {/* Overlapping Avatar */}
        <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-10">
          <div
            className="w-[78px] h-[78px] rounded-full overflow-hidden border-4 border-white"
            style={{
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={getImgSrc(characterImage)}
              alt="Riya"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <h3
        className="text-[19px] font-semibold leading-tight mb-2 text-[#111821]"
        style={{ fontFamily: fd }}
      >
        {title}
      </h3>

      <p
        className="text-[13px] leading-[1.55] mb-6 text-[#59636F]"
        style={{ fontFamily: fu }}
      >
        {description}
      </p>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-3">
        <button
          type="button"
          onClick={onStartJournal}
          className="w-full py-3.5 px-4 text-[14px] font-semibold rounded-[14px] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer"
          style={{ background: "#E05326", fontFamily: fu }}
        >
          {startJournalText}
        </button>

        <button
          type="button"
          onClick={onAdaptJournal}
          className="w-full py-3.5 px-4 text-[14px] font-semibold rounded-[14px] border transition-colors hover:bg-slate-50 active:scale-[0.98] cursor-pointer bg-white"
          style={{ borderColor: "#E4E9EF", fontFamily: fu, color: "#111821" }}
        >
          {adaptJournalText}
        </button>
      </div>
    </div>
  );
};

export default JournalSidebarCtaCardV0;
