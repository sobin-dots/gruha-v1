"use client";

import React from "react";
import Image from "next/image";

export interface LearningItem {
  icon?: React.ReactNode;
  text: string;
}

export interface JournalHeroV4Props {
  tags?: string[];
  title?: string;
  description?: string;
  quote?: string;
  learningsLabel?: string;
  learnings?: LearningItem[];
  readTime?: string;
  updatedOn?: string;
  heroImage?: string;
}

export const JournalHeroV4: React.FC<JournalHeroV4Props> = ({
  title,
  description,
  learningsLabel = "WHAT YOU'LL LEARN FROM THIS JOURNEY",
  learnings,
  heroImage = "/couple_balcony_hero.png",
}) => {
  const displayTitle = title || "The Sixteenth Floor Dream Journal.";
  const displayDescription =
    description ||
    "The story of Pavan & Shruti Kalsi's first home purchase journey in Bengaluru — a young couple navigating budget, fear, and a future built together.";

  const defaultLearnings: LearningItem[] = [
    { text: "Stretch your budget without regret" },
    { text: "Decide between ready vs under construction" },
    { text: "Manage home buying before becoming parents" },
  ];

  const displayLearnings =
    learnings && learnings.length > 0 ? learnings : defaultLearnings;

  return (
    <section className="w-full max-w-[1120px] mx-auto px-4 sm:px-8 pt-8 pb-10" aria-label="Journal Hero V4">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Learnings */}
        <div className="flex flex-col justify-center">
          {/* Main Title (Newsreader Serif) */}
          <h1
            className="text-[clamp(40px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111821] font-serif max-w-[540px]"
          >
            {displayTitle}
          </h1>

          {/* Subtitle Description */}
          <p
            className="mt-6 text-[17px] leading-[1.55] text-[#59636F] font-serif max-w-[500px]"
          >
            {displayDescription}
          </p>

          {/* Learnings Section */}
          <div className="mt-10">
            <p
              className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#8A94A1] font-sans mb-4"
            >
              {learningsLabel}
            </p>

            <div className="flex flex-col gap-3">
              {displayLearnings.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[12.5px] font-semibold text-[#DD5128] font-sans tracking-tight shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-[14px] text-[#4F5B67] font-sans font-normal leading-[1.4]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Balcony Couple Image Card */}
        <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[460px] rounded-[28px] overflow-hidden shadow-[0_4px_24px_rgba(17,24,33,0.06)] border border-[#E4E9EF]">
          <Image
            src={heroImage}
            alt={displayTitle}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default JournalHeroV4;
