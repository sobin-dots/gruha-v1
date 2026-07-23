"use client";

import React from "react";

export interface LessonItem {
  number?: string;
  title: string;
  desc: string;
}

export interface ShiftItem {
  oldBelief: string;
  newMindset: string;
}

export interface JournalLearningsProps {
  eyebrow?: string;
  title: string;
  description: string;
  lessonsTitle?: string;
  lessons?: LessonItem[];
  shiftsTitle?: string;
  shifts?: ShiftItem[];
  beforeItems?: any[];
  afterItems?: any[];
  differentlyCards?: any[];
}

export const JournalLearnings: React.FC<JournalLearningsProps> = ({
  eyebrow = "Key Learnings",
  title,
  description,
  lessonsTitle = "Core Lessons",
  lessons = [
    {
      number: "01",
      title: "Location > Amenities Every Time",
      desc: "You can upgrade your kitchen later. You cannot move your apartment 5km closer to work.",
    },
    {
      number: "02",
      title: "Floor Plan Beats Super Built-Up Area",
      desc: "A 1,650 sq.ft unit with zero hallway waste feels larger than a poorly designed 1,850 sq.ft unit.",
    },
    {
      number: "03",
      title: "Talk to Existing Residents",
      desc: "Speaking to 3 owners in Phase 1 revealed actual water tanker costs that wasn't in any brochure.",
    },
    {
      number: "04",
      title: "Don't Fear the 15% Stretch",
      desc: "If income growth is predictable, stretching 15% for a top corridor pays off in 3-5 years.",
    },
  ],
  shiftsTitle = "Perspective shifts",
  shifts = [
    { oldBelief: "Wait for prices to drop", newMindset: "Time in market > timing market" },
    { oldBelief: "Ready to move is always safer", newMindset: "A-tier builder UC gives better payment leverage" },
    { oldBelief: "Max out home loan limit", newMindset: "Keep EMI under 35% of net joint pay" },
    { oldBelief: "Buy for 20 years", newMindset: "Buy for the next 7-10 years of life stage" },
  ],
}) => {
  return (
    <section id="learnings" className="w-full bg-white text-[#111821] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">

        {/* Section Head */}
        <div className="text-center space-y-2">
          <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-[#DD5128] font-sans">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111821]">
            {title}
          </h2>
          <p className="text-sm sm:text-base font-serif text-[#59636F] max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* 4 Core Lessons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-[22px] flex gap-4"
            >
              <div className="font-serif text-[15px] font-semibold text-[#DD5128] shrink-0 w-5 pt-0.5">
                {lesson.number || String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="font-serif text-[19px] font-semibold leading-[1.25] text-[#111821]">
                  {lesson.title}
                </h4>
                <p className="text-[13.5px] leading-[1.55] font-serif text-[#59636F] mt-1.5">
                  {lesson.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mindset Shifts Comparison Box */}
        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8">
          <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
            {shiftsTitle}
          </div>

          <div className="flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_40px_1fr] gap-4 pb-3 border-b border-[#EFF3F7]">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans sm:text-right">
                Old Belief
              </span>
              <span className="hidden sm:inline"></span>
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#DD5128] font-sans">
                New Mindset
              </span>
            </div>

            {/* Shift Rows */}
            {shifts.map((shift, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[1fr_40px_1fr] items-center gap-2 sm:gap-4 py-4 border-t border-[#EFF3F7] first:border-t-0"
              >
                <div className="font-serif text-[16px] text-[#8A94A1] line-through sm:text-right">
                  {shift.oldBelief}
                </div>
                <div className="hidden sm:grid place-items-center text-[#E4E9EF]">
                  →
                </div>
                <div className="font-serif text-[16px] font-medium text-[#111821]">
                  {shift.newMindset}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JournalLearnings;
