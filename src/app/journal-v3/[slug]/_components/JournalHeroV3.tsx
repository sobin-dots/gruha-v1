"use client";

import React from "react";
import Image from "next/image";
import { Clock, Calendar, Wallet, Building2, Users } from "lucide-react";

export interface JournalHeroV3Props {
  tags: string[];
  title: string;
  description: string;
  quote: string;
  learningsLabel?: string;
  learnings: { icon?: React.ReactNode; text: string }[];
  readTime: string;
  updatedOn: string;
}

export const JournalHeroV3: React.FC<JournalHeroV3Props> = ({
  tags,
  title,
  description,
  quote,
  learningsLabel = "What you'll learn from this journey",
  learnings,
  readTime,
  updatedOn,
}) => {
  const newsreaderStyle = { fontFamily: "'Newsreader', Georgia, serif" };
  const interTightStyle = { fontFamily: "'Inter Tight', system-ui, sans-serif" };

  return (
    <section className="relative mx-auto w-full max-w-[1120px] px-4 sm:px-8 mb-2 mt-12" aria-label="Journal hero">
      {/* Hero Outer Wrapper */}
      <div className="relative w-full min-h-[593px] mx-auto rounded-[20px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] flex flex-col bg-white border border-[#E4E9EF] overflow-hidden">
        
        <div className="relative w-full flex-1 flex flex-col">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/journals/hero-img.png"
              alt={title}
              fill
              priority
              className="object-cover object-right sm:object-center"
            />

            {/* Spine Overlay */}
            <div className="absolute inset-y-0 left-0 pointer-events-none z-10 flex">
              <div className="relative h-full w-7 flex-shrink-0">
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-white/80 via-white/40 to-transparent z-20" />
                <div className="absolute inset-y-0 left-[2px] w-full bg-gradient-to-r from-black/20 via-black/8 to-transparent" />
              </div>
              <div className="relative h-full w-[12px] flex-shrink-0 flex items-center">
                <div className="absolute inset-y-0 left-[5px] w-[7px] bg-gradient-to-r from-black/5 via-black/25 to-transparent blur-[0.5px]" />
                <div className="absolute inset-y-0 left-[1px] w-[7px] bg-gradient-to-r from-black/15 via-black/5 to-transparent blur-[1.5px]" />
              </div>
              <div className="w-8 h-full bg-gradient-to-r from-black/8 to-transparent" />
            </div>
          </div>

          {/* Top-Right Metadata Glass Chips */}
          <div className="absolute top-6 right-6 z-20 flex flex-wrap items-center justify-end gap-2 max-w-[calc(100%-48px)]">
            <div
              style={interTightStyle}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/94 backdrop-blur-md rounded-lg border border-[#E4E9EF] shadow-xs"
            >
              <Clock className="w-3.5 h-3.5 text-[#59636F]" strokeWidth={2} />
              <span className="text-[11.5px] font-medium text-[#111821] leading-none whitespace-nowrap">
                {readTime}
              </span>
            </div>
            <div
              style={interTightStyle}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/94 backdrop-blur-md rounded-lg border border-[#E4E9EF] shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#59636F]" strokeWidth={2} />
              <span className="text-[11.5px] font-medium text-[#111821] leading-none whitespace-nowrap">
                {updatedOn}
              </span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="relative z-20 w-full flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12 gap-8">
            <div className="max-w-[623px] flex flex-col gap-3.5 mt-12 sm:mt-2">
              {/* Category Tag Pills */}
              <div className="flex items-center gap-2 flex-wrap" style={interTightStyle}>
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#111821] text-white text-[11.5px] font-medium leading-none rounded-full tracking-[0.04em] uppercase border border-[#111821]">
                  Community
                </span>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center px-3 py-1 bg-[#F7F9FB] text-[#59636F] text-[11.5px] font-medium leading-none rounded-full tracking-[0.04em] uppercase border border-[#E4E9EF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Headline (Newsreader Font) */}
              <h1
                style={newsreaderStyle}
                className="text-[36px] sm:text-[46px] lg:text-[54px] font-semibold text-[#111821] leading-[1.04] tracking-[-0.02em] text-balance mt-3"
              >
                {title}
              </h1>

              {/* Subtitle Description */}
              <p
                style={newsreaderStyle}
                className="text-[16px] sm:text-[17px] font-normal leading-[1.55] text-[#59636F] max-w-[46ch] mt-2"
              >
                {description}
              </p>

              {/* Quote Block (Newsreader Serif + Ember #DD5128 left border) */}
              <div className="border-l-2 border-[#DD5128] pl-4 py-0.5 mt-4 max-w-[500px]">
                <blockquote
                  style={newsreaderStyle}
                  className="italic text-[18px] sm:text-[19px] font-normal leading-[1.5] text-[#111821]"
                >
                  "{quote}"
                </blockquote>
              </div>
            </div>

            {/* Learnings Glassmorphic Card */}
            <div className="w-full max-w-[725px] rounded-[12px] p-5 sm:p-6 backdrop-blur-[12px] bg-white/90 border border-[#E4E9EF] shadow-xs">
              <h4
                style={interTightStyle}
                className="text-[11px] font-semibold tracking-[0.11em] uppercase text-[#8A94A1] leading-[17px] mb-3.5"
              >
                {learningsLabel}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                {learnings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span
                      style={interTightStyle}
                      className="text-[11px] font-semibold text-[#DD5128] tabular-nums pt-0.5 shrink-0"
                    >
                      0{idx + 1}
                    </span>
                    <span
                      style={interTightStyle}
                      className="text-[13px] sm:text-[13.5px] font-normal text-[#59636F] leading-[1.45]"
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Book Ribbon Fixed */}
        <div
          className="absolute left-8 sm:left-12 -bottom-4 w-[26px] h-[38px] bg-[#DD5128] z-30 pointer-events-none drop-shadow-sm"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%)",
          }}
        />

      </div>
    </section>
  );
};

export default JournalHeroV3;
