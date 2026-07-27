"use client";

import React, { type RefObject } from "react";
import * as Icons from "lucide-react";
import imgHero from "@/imports/testy.jpg";

const fd = "'Newsreader', Georgia, serif";
const fu = "'Inter Tight', system-ui, sans-serif";

const getImgSrc = (img: any): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img.src) return img.src;
  return String(img);
};

export const getIcon = (
  name?: string,
  defaultName = "HelpCircle",
  props: any = { className: "w-4 h-4", strokeWidth: 2 }
) => {
  if (!name) return null;
  const Icon = (Icons as any)[name] || (Icons as any)[defaultName] || Icons.HelpCircle;
  return <Icon {...props} />;
};

export interface JournalHeroV0Props {
  title?: string;
  heroTitle?: string;
  description?: string;
  learningsLabel?: string;
  learnings?: Array<{ icon?: string; text: string } | string>;
  heroImage?: any;
  startJournalText?: string;
  adaptJournalText?: string;
  heroImgWrapRef?: RefObject<HTMLDivElement | null>;
  onStartJournal?: () => void;
  onAdaptJournal?: () => void;
}

export const JournalHeroV0: React.FC<JournalHeroV0Props> = ({
  title,
  heroTitle,
  description,
  learningsLabel = "What you'll learn from this journey",
  learnings = [],
  heroImage,
  startJournalText = "Start your journal",
  adaptJournalText = "Adapt this journal",
  heroImgWrapRef,
  onStartJournal,
  onAdaptJournal,
}) => {
  const displayTitle = heroTitle || title || "The Sixteenth Floor\nDream Journal.";
  const displayDescription =
    description ||
    "The story of Pavan & Shruti Kalsi's first home purchase journey in Bengaluru — a young couple navigating budget, fear, and a future built together.";
  const displayHeroImage = heroImage || imgHero;

  const defaultLearnings = [
    { text: "Stretch your budget without regret" },
    { text: "Decide between ready vs under construction" },
    { text: "Manage home buying before becoming parents" },
  ];

  const displayLearnings = learnings.length > 0 ? learnings : defaultLearnings;

  return (
    <div className="w-full pt-6 sm:pt-8 pb-8 sm:pb-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
        {/* Col 1 — Hero Image */}
        <div ref={heroImgWrapRef} className="relative rounded-2xl overflow-hidden aspect-square border border-slate-100 shadow-xs w-full max-w-[280px] mx-auto sm:mx-0 flex-none">
          <img
            src={getImgSrc(displayHeroImage)}
            alt={displayTitle.replace("\n", " ")}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Col 2 — Title, Subtitle, Learnings & Actions */}
        <div className="flex flex-col gap-4 justify-center pt-1 min-w-0">
          <h1
            className="text-[clamp(24px,2.2vw,38px)] font-semibold leading-[1.12] tracking-[-0.02em] whitespace-pre-line break-words"
            style={{ fontFamily: fd, color: "#111821" }}
          >
            {displayTitle}
          </h1>

          <p className="text-[14.5px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F", maxWidth: 520 }}>
            {displayDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mt-2">
            <div>
              <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ fontFamily: fu, color: "#8A94A1" }}>
                {learningsLabel}
              </p>
              <div className="flex flex-col gap-2.5">
                {displayLearnings.map((item: any, i: number) => {
                  const text = typeof item === "string" ? item : item.text;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[11px] font-semibold flex-none mt-0.5" style={{ fontFamily: fd, color: "#DD5128" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] leading-[1.45]" style={{ fontFamily: fu, color: "#374151" }}>
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="flex flex-col items-start gap-3">
              <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3 invisible hidden sm:block" aria-hidden="true">
                Spacer
              </p>
              <button
                type="button"
                onClick={onStartJournal}
                className="w-full sm:w-auto px-6 py-3 text-[14px] font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer"
                style={{ background: "#DD5128", fontFamily: fu }}
              >
                {startJournalText}
              </button>
              <button
                type="button"
                onClick={onAdaptJournal}
                className="w-full sm:w-auto px-6 py-3 text-[14px] font-semibold rounded-xl border transition-colors hover:bg-slate-50 active:scale-[0.98] cursor-pointer"
                style={{ borderColor: "#E4E9EF", fontFamily: fu, color: "#111821" }}
              >
                {adaptJournalText}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalHeroV0;
