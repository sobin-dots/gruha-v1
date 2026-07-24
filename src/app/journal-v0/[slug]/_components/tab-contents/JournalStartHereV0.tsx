"use client";

import React from "react";
import * as Icons from "lucide-react";
import imgStartHere1 from "@/imports/start-here-1.png";
import imgStartHere2 from "@/imports/start-here-2.png";
import imgStartHere3 from "@/imports/start-here-3.png";
import imgStartHere4 from "@/imports/start-here-4.png";
import imgRiya from "@/imports/signal-2026-07-23-17-18-39-504.jpg";

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
  defaultName = "BadgeCheck",
  props: any = { className: "w-4 h-4", strokeWidth: 2 }
) => {
  if (!name) return null;
  const Icon = (Icons as any)[name] || (Icons as any)[defaultName] || Icons.HelpCircle;
  return <Icon {...props} />;
};

const defaultChecklistItems = [
  'You have capital ready and a spreadsheet that has been "two weeks from final" for most of a year.',
  "You compare every property to an index-fund benchmark, out loud, at site visits.",
  "Launch-window pricing excites you more than ready inventory — you want the developer's early-bird margin, not the resale market's.",
  "You track infrastructure tenders the way others track cricket scores.",
  "You know your analysis is partly fear, and you'd rather not discuss it.",
  "Your spouse has one rule for this money, and you're quietly testing its edges.",
];

export interface JournalStartHereV0Props {
  tagline?: string;
  title?: string;
  description?: string;
  checklistTitle?: string;
  checklistItems?: string[];
  stepsTitle?: string;
  steps?: Array<{
    num?: string;
    id?: number;
    title: string;
    body?: string;
    description?: string;
    img?: any;
    imageSrc?: any;
    highlight?: boolean;
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaAdaptButtonText?: string;
  ctaCharacterImage?: any;
  ctaBadgeText?: string;
}

export const JournalStartHereV0: React.FC<JournalStartHereV0Props> = ({
  tagline = "Start Here",
  title = "What if this journal was about you?",
  description = "Every home-buying journey leaves behind lessons. Yours can be captured the same way — as it happens, not after.",
  checklistTitle = "Is This You?",
  checklistItems = defaultChecklistItems,
  stepsTitle = "Your conversation becomes your journal",
  steps = [
    { num: "01", title: "You share", body: "Your plans, family needs, lifestyle, budget and expectations.", img: imgStartHere1 },
    { num: "02", title: "Riya listens", body: "She understands your priorities, asks meaningful questions and discovers what truly matters to you.", highlight: true, img: imgStartHere2 },
    { num: "03", title: "Journal created", body: "Your conversations become a personalised home-buying journal with insights and recommendations.", img: imgStartHere3 },
    { num: "04", title: "Better matches", body: "You receive project suggestions that fit your priorities, not just your filters.", img: imgStartHere4 },
  ],
  ctaTitle = "Ready to write your story?",
  ctaDescription = "Let Riya understand your goals and build a personalised journal that guides you toward the right home, with confidence.",
  ctaButtonText = "Start your journal",
  ctaAdaptButtonText = "Adapt this journal",
  ctaCharacterImage = imgRiya,
  ctaBadgeText = "Real Estate Companion",
}) => {
  const displayChecklist = checklistItems.length > 0 ? checklistItems : defaultChecklistItems;

  return (
    <section id="section-start-here" className="w-full pt-10 pb-32">
      <div className="flex flex-col items-start text-left">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: fu, color: "#C45D3A" }}>
          {tagline}
        </p>
        <h2 className="text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] mb-6 max-w-[720px]" style={{ fontFamily: fd, color: "#111821" }}>
          {title}
        </h2>
        <p className="text-[18px] leading-relaxed max-w-[560px] mb-10" style={{ fontFamily: fd, color: "#6B7280" }}>
          {description}
        </p>

        {/* Checklist card */}
        <div
          className="w-full bg-white border px-6 sm:px-10 py-8 text-left"
          style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
        >
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ fontFamily: fu, color: "#8A94A1" }}>
            {checklistTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {displayChecklist.map((item: any, i: number) => {
              const text = typeof item === "string" ? item : (item?.title || item?.text || item?.desc || "");
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icons.BadgeCheck size={15} className="mt-0.5 flex-none" style={{ color: "#DD5128" }} />
                  <span className="text-[13.5px] leading-[1.65]" style={{ fontFamily: fu, color: "#59636F" }}>
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works cards */}
        <div className="mt-10 w-full text-left">
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ fontFamily: fu, color: "#8A94A1" }}>
            {stepsTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => {
              const displayNum = step.num || `0${idx + 1}`;
              const displayBody = step.body || step.description || "";
              const imgSrc = getImgSrc(step.img || step.imageSrc || (idx === 0 ? imgStartHere1 : idx === 1 ? imgStartHere2 : idx === 2 ? imgStartHere3 : imgStartHere4));
              const isHighlight = step.highlight || idx === 1;

              return (
                <div
                  key={displayNum}
                  className="bg-white border overflow-hidden flex flex-col"
                  style={{
                    borderRadius: 14,
                    borderColor: isHighlight ? "#C4B5FD" : "#E4E9EF",
                    boxShadow: isHighlight
                      ? "0 0 0 1px rgba(124,58,237,0.12), 0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)"
                      : "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)",
                    background: isHighlight ? "linear-gradient(135deg, #F8F6FE 0%, #FFFFFF 100%)" : undefined,
                  }}
                >
                  <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                    <img src={imgSrc} alt={step.title} className="w-full h-auto object-contain rounded-lg" />
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                      {displayNum}
                    </p>
                    <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                      {step.title}
                    </h4>
                    <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                      {displayBody}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA card */}
        <div
          className="mt-10 w-full border overflow-hidden"
          style={{ borderRadius: 14, borderColor: "#E4E9EF", background: "#ffffff", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
            <div className="px-6 sm:px-10 py-10 lg:py-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontFamily: fd, color: "#111821" }}>
                {ctaTitle}
              </h2>
              <p className="text-[16px] leading-[1.6] mb-8 max-w-[480px]" style={{ fontFamily: fu, color: "#59636F" }}>
                {ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 text-[14px] font-semibold rounded-xl text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "#DD5128", fontFamily: fu }}
                >
                  {ctaButtonText}
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 text-[14px] font-semibold rounded-xl border transition-colors hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: "#E4E9EF", fontFamily: fu, color: "#111821" }}
                >
                  {ctaAdaptButtonText}
                </button>
              </div>
            </div>

            <div
              className="relative flex items-center justify-center py-10 px-8 overflow-hidden min-h-[220px]"
              style={{ background: "linear-gradient(160deg, #9B6EF3, #C4B5FD)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute" style={{ top: "16%", left: "14%" }}>
                <path d="M10 1 L11 8 L18 10 L11 12 L10 19 L9 12 L2 10 L9 8 Z" fill="rgba(255,255,255,0.5)" stroke="white" strokeWidth="1" strokeLinejoin="round" />
              </svg>

              <div
                className="rounded-full overflow-hidden flex-none relative z-10"
                style={{
                  width: 140,
                  height: 140,
                  border: "4px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                }}
              >
                <img src={getImgSrc(ctaCharacterImage || imgRiya)} alt="Riya" className="w-full h-full object-cover object-top" />
              </div>

              <div
                className="absolute flex items-center gap-1 px-3 py-1 rounded-full"
                style={{
                  bottom: "15%",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  zIndex: 10,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1 L6.5 4.5 L10 5 L6.5 5.5 L6 9 L5.5 4.5 Z" fill="white" stroke="white" strokeWidth="0.6" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-semibold text-white" style={{ fontFamily: fu }}>
                  {ctaBadgeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalStartHereV0;
