"use client";

import React from "react";
import Image from "next/image";

export interface BuyerProfile {
  name: string;
  age: number;
  role: string;
  tags: string[];
  image: string;
}

export interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  tag: string;
}

export interface PriorityItem {
  image: string;
  title: string;
  scoreLabel: string;
  scorePercentage: number;
  description: string;
}

export interface JournalProfileV3Props {
  aboutLabel?: string;
  title: string;
  description: string;
  buyers: BuyerProfile[];
  sharedVisionTitle?: string;
  sharedVisionDescription: string;
  sharedVisionImage: string;
  stats: StatItem[];
  prioritiesTitle?: string;
  priorities: PriorityItem[];
}

export const JournalProfileV3: React.FC<JournalProfileV3Props> = ({
  aboutLabel = "ABOUT THE BUYERS",
  title,
  description,
  buyers,
  sharedVisionTitle = "Shared vision",
  sharedVisionDescription,
  sharedVisionImage,
  stats,
  prioritiesTitle = "Top priorities right now",
  priorities,
}) => {
  return (
    <section id="v3-section-profile" className="w-full space-y-12" aria-label="Buyer profile">
      {/* Section Head */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-[#DD5128] font-sans">
          {aboutLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111821]">
          {title}
        </h2>
        <p className="text-sm sm:text-base font-serif text-[#59636F]">
          {description}
        </p>
      </div>

      {/* Buyer Cards & Shared Vision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {buyers.map((buyer, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 flex flex-col justify-between"
          >
            <div>
              {/* Portrait Box */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F7F9FB] border border-[#E4E9EF] mb-4">
                <Image
                  src={buyer.image}
                  alt={buyer.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Bio Details */}
              <div className="space-y-1">
                <h3 className="font-serif text-[21px] font-semibold text-[#111821]">
                  {buyer.name} ({buyer.age})
                </h3>
                <p className="text-[12.5px] text-[#8A94A1] font-sans">
                  {buyer.role}
                </p>
              </div>
            </div>

            {/* Trait Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EFF3F7] mt-4">
              {buyer.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11.5px] text-[#59636F] bg-[#F7F9FB] border border-[#E4E9EF] px-2.5 py-1 rounded-full font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Shared Vision Card */}
        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 flex flex-col justify-between overflow-hidden">
          <div className="space-y-3">
            <h3 className="font-serif text-[19px] font-semibold text-[#111821]">
              {sharedVisionTitle}
            </h3>
            <p className="font-serif text-[16px] leading-[1.6] text-[#59636F]">
              "{sharedVisionDescription}"
            </p>
          </div>

          {/* Sofa Illustration Clip-Path */}
          <div className="relative mt-6 h-48 w-full flex items-end justify-center">
            <div
              className="relative w-full h-full"
              style={{ clipPath: "inset(25% 0 0 0)" }}
            >
              <Image
                src={sharedVisionImage}
                alt="Shared Vision Illustration"
                fill
                className="object-contain object-bottom scale-125 origin-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full rounded-[14px] bg-white border border-[#E4E9EF] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EFF3F7] shadow-xs">
        {stats.map((item, index) => (
          <div key={index} className="p-5 flex items-start gap-4">
            <div className="pt-0.5 text-[#DD5128] shrink-0">
              {item.icon}
            </div>
            <div className="space-y-1 min-w-0">
              <span className="text-[10.5px] font-semibold tracking-[0.11em] text-[#8A94A1] uppercase font-sans">
                {item.label}
              </span>
              <p className="font-serif text-[19px] font-semibold text-[#111821] truncate">
                {item.value}
              </p>
              <div className="pt-1">
                <span className="text-[11.5px] text-[#59636F] bg-[#F7F9FB] border border-[#E4E9EF] px-2.5 py-0.5 rounded-full font-sans">
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Priority Radar Cards Section */}
      <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8 space-y-6">
        <h3 className="font-serif text-[21px] font-semibold text-[#111821]">
          {prioritiesTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {priorities.map((priority, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 p-4 rounded-xl bg-[#F7F9FB] border border-[#E4E9EF]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-white border border-[#E4E9EF]">
                <Image
                  src={priority.image}
                  alt={priority.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <h4 className="font-serif text-[17px] font-semibold text-[#111821]">
                  {priority.title}
                </h4>
                <span className="text-[13px] font-semibold text-[#DD5128] tabular-nums font-sans">
                  {priority.scoreLabel}
                </span>
              </div>

              {/* Progress Fillbar */}
              <div className="w-full bg-[#EFF3F7] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#DD5128] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${priority.scorePercentage}%` }}
                />
              </div>

              <p className="text-[13px] leading-[1.5] text-[#59636F] font-sans">
                {priority.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalProfileV3;
