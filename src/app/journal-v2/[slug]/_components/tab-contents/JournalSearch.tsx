"use client";

import React from "react";

export interface AreaItem {
  number: string;
  name: string;
  isBest?: boolean;
  desc: string;
  pricePerSqFt: string;
  commuteTime: string;
}

export interface FilterItem {
  title: string;
  value: string;
  desc: string;
  isVerified?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface MetricItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface JournalSearchProps {
  eyebrow?: string;
  title: string;
  description: string;
  metrics?: MetricItem[];
  areasTitle?: string;
  areas?: AreaItem[];
  filtersTitle?: string;
  filters?: FilterItem[];
  footnoteText?: string;
}

export const JournalSearch: React.FC<JournalSearchProps> = ({
  eyebrow = "Search Strategy",
  title,
  description,
  metrics = [],
  areasTitle = "Searched corridors",
  areas = [],
  filtersTitle = "Search filters applied",
  filters = [],
  footnoteText = '"We eliminated 14 projects instantly because their master plan showed high-rise blocks blocking natural light from the south."',
}) => {
  return (
    <section id="search" className="w-full bg-white text-[#111821] px-4 sm:px-6 lg:px-8">
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

        {/* Optional Metric Bar */}
        {metrics.length > 0 && (
          <div className="w-full rounded-[14px] bg-white border border-[#E4E9EF] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EFF3F7] shadow-xs">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="flex items-center gap-[16px] p-[16px]">
                  {Icon && (
                    <div className="flex items-center justify-center w-[18px] h-[18px] text-[#DD5128] shrink-0">
                      <Icon className="w-full h-full stroke-[2]" />
                    </div>
                  )}
                  <div className="flex flex-col justify-center gap-[2px]">
                    <span className="text-[10.5px] leading-[14px] font-semibold tracking-[0.11em] text-[#8A94A1] uppercase font-sans">
                      {metric.label}
                    </span>
                    <span className="text-[15px] leading-[20px] font-serif font-semibold text-[#111821]">
                      {metric.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Main Card: 2 Column Layout */}
        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Searched Areas */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
                {areasTitle}
              </div>
              <div className="space-y-0">
                {areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 py-4 border-t border-[#EFF3F7] first:border-t-0 first:pt-0"
                  >
                    <div
                      className={`w-[34px] h-[34px] rounded-[9px] border font-serif text-[15px] font-semibold flex items-center justify-center shrink-0 ${
                        area.isBest
                          ? "bg-[#DD5128] border-[#DD5128] text-white"
                          : "bg-[#F7F9FB] border-[#E4E9EF] text-[#59636F]"
                      }`}
                    >
                      {area.number || String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-[17px] font-semibold text-[#111821] flex items-center gap-2 flex-wrap">
                        <span>{area.name}</span>
                        {area.isBest && (
                          <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#DD5128] bg-[#FBEDE7] rounded-full px-2 py-0.5 font-sans">
                            Top Choice
                          </span>
                        )}
                      </h4>
                      <p className="text-[13px] leading-[1.5] font-serif text-[#59636F] mt-1">
                        {area.desc}
                      </p>
                      <div className="flex gap-6 mt-2.5">
                        <div className="text-[12px] text-[#8A94A1] font-sans">
                          Price / sq.ft
                          <b className="block font-serif text-[16px] font-semibold text-[#111821] leading-[1.2]">
                            {area.pricePerSqFt}
                          </b>
                        </div>
                        <div className="text-[12px] text-[#8A94A1] font-sans">
                          Commute
                          <b className="block font-serif text-[16px] font-semibold text-[#111821] leading-[1.2]">
                            {area.commuteTime}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Search Filters Applied */}
            <div>
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
                {filtersTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filters.map((filt, idx) => (
                  <div key={idx} className="p-4 border border-[#E4E9EF] rounded-xl bg-[#F7F9FB]">
                    <h5 className="text-[12.5px] font-semibold text-[#59636F] font-sans">
                      {filt.title}
                    </h5>
                    <div className="font-serif text-[17px] font-medium leading-[1.3] text-[#111821] mt-1">
                      {filt.value}
                    </div>
                    <p className="text-[12.5px] leading-[1.5] text-[#8A94A1] mt-1.5 font-sans">
                      {filt.desc}
                    </p>
                    {filt.isVerified && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#DD5128] mt-2 font-sans">
                        ✓ RERA registered
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {footnoteText && (
                <div className="text-[12.5px] text-[#8A94A1] bg-[#F7F9FB] border border-[#E4E9EF] rounded-lg p-3.5 mt-6 leading-[1.5] font-serif">
                  {footnoteText}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JournalSearch;
