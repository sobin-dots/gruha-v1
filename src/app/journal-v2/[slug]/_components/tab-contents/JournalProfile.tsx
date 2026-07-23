"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, IndianRupee, Heart, TrendingUp, Hourglass, FileCheck } from "lucide-react";

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

export interface JournalProfileProps {
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

export const JournalProfile: React.FC<JournalProfileProps> = ({
  aboutLabel = "ABOUT",
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
    <section id="profile" className="w-full bg-white text-[#111821] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">

        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-[11.5px] font-semibold tracking-[0.15em] text-[#DD5128] uppercase font-sans">
            {aboutLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111821]">
            {title}
          </h2>
          <p className="text-sm sm:text-base font-serif text-[#59636F] max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Bio Cards + Shared Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {buyers.map((buyer, idx) => (
            <div
              key={idx}
              className="lg:col-span-4 flex flex-col justify-between rounded-[2rem] bg-white p-5 sm:p-6 border border-[#E4E9EF] shadow-xs"
            >
              <div>
                {/* Portrait Image Box */}
                <div className="relative aspect-[4/3.8] w-full rounded-[1.5rem] overflow-hidden bg-[#F7F9FB] mb-5">
                  <Image
                    src={buyer.image}
                    alt={buyer.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Profile Details */}
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-serif font-bold text-[#111821]">
                    {buyer.name} ({buyer.age})
                  </h3>
                  <p className="text-xs font-semibold text-[#8A94A1] font-sans">
                    {buyer.role}
                  </p>
                </div>
              </div>

              {/* Trait Badges */}
              <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
                {buyer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-[#59636F] bg-[#F7F9FB] border border-[#E4E9EF] px-3 py-1.5 rounded-full tracking-wide font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Shared Vision Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-[2rem] bg-white p-6 sm:p-7 border border-[#E4E9EF] shadow-xs overflow-hidden">
            {/* Text Content */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#111821]">
                {sharedVisionTitle}
              </h3>
              <p className="text-xs sm:text-sm font-serif font-medium text-[#59636F] leading-relaxed">
                "{sharedVisionDescription}"
              </p>
            </div>

            {/* Illustration Wrapper - Sofa illustration with clip path */}
            <div className="relative mt-4 h-48 sm:h-56 lg:h-64 w-full flex items-end justify-center">
              <div
                className="relative w-full h-full"
                style={{ clipPath: "inset(25% 0 0 0)" }}
              >
                <Image
                  src={sharedVisionImage}
                  alt="Shared Vision Illustration"
                  fill
                  className="object-contain object-bottom scale-160 origin-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-7xl mx-auto rounded-[1.5rem] bg-white border border-[#E4E9EF] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-[#EFF3F7]">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`p-5 sm:p-6 flex items-start gap-4 ${
                  index % 3 !== 0 ? "md:border-l md:border-[#EFF3F7]" : ""
                } ${index >= 3 ? "border-t border-[#EFF3F7]" : ""}`}
              >
                {/* Ember Red/Coral Line Icon */}
                <div className="pt-0.5 shrink-0 text-[#DD5128]">
                  {item.icon}
                </div>

                {/* Text & Meta info */}
                <div className="space-y-1">
                  <p className="text-[10.5px] font-semibold text-[#8A94A1] uppercase tracking-[0.11em] font-sans">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-serif font-bold text-[#111821] leading-snug">
                    {item.value}
                  </p>
                  <div className="pt-1">
                    <span className="inline-block text-[11px] font-medium text-[#59636F] bg-[#F7F9FB] border border-[#E4E9EF] px-3 py-1 rounded-full font-sans">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priorities Section */}
        <div className="w-full rounded-xl border border-[#E4E9EF] bg-white p-5 sm:p-6 space-y-6 shadow-xs">
          {/* Header */}
          <h3 className="text-base font-serif font-semibold text-[#111821] leading-[19px] flex items-center">
            {prioritiesTitle}
          </h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {priorities.map((priority, idx) => (
              <div key={idx} className="flex flex-col gap-2 w-full">
                {/* Image */}
                <div className="relative aspect-[254/169.5] w-full overflow-hidden rounded-lg">
                  <Image
                    src={priority.image}
                    alt={priority.title}
                    fill
                    className="object-cover mix-blend-darken"
                  />
                </div>

                {/* Title */}
                <div className="flex items-center py-1 min-h-[33px]">
                  <p className="text-sm font-serif font-semibold text-[#111821] leading-tight">
                    {priority.title}
                  </p>
                </div>

                {/* Progress Bar & Rating */}
                <div className="flex items-center gap-2 w-full py-1">
                  <div className="relative flex-1 bg-[#EFF3F7] h-[4px] rounded-full overflow-hidden">
                    <div
                      className="bg-[#DD5128] h-full rounded-full transition-all duration-1000"
                      style={{ width: `${priority.scorePercentage}%` }}
                    />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#DD5128] leading-none whitespace-nowrap min-w-[36px] text-right font-sans">
                    {priority.scoreLabel}
                  </span>
                </div>

                {/* Description Box */}
                <div className="bg-[#F7F9FB] border border-[#E4E9EF] p-2.5 rounded-[6px] w-full min-h-[52px] flex items-center">
                  <p className="text-xs text-[#59636F] leading-relaxed font-serif">
                    {priority.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export const journalDefaultStatsIcons = {
  briefcase: <Briefcase className="h-5 w-5 stroke-[1.75]" />,
  rupee: <IndianRupee className="h-5 w-5 stroke-[1.75]" />,
  heart: <Heart className="h-5 w-5 stroke-[1.75]" />,
  trending: <TrendingUp className="h-5 w-5 stroke-[1.75]" />,
  hourglass: <Hourglass className="h-5 w-5 stroke-[1.75]" />,
  fileCheck: <FileCheck className="h-5 w-5 stroke-[1.75]" />,
};

export default JournalProfile;
