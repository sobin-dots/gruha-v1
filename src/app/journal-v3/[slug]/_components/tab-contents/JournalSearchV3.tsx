"use client";

import React from "react";
import Image from "next/image";

export interface AreaItem {
  number: string;
  name: string;
  isBest?: boolean;
  desc: string;
  pricePerSqFt: string;
  commuteTime: string;
  image?: string;
}

export interface FilterItem {
  title: string;
  value: string;
  desc: string;
  isVerified?: boolean;
}

export interface MetricItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface JournalSearchV3Props {
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

export const JournalSearchV3: React.FC<JournalSearchV3Props> = ({
  eyebrow = "Search Strategy",
  title,
  description,
  metrics = [],
  areasTitle = "Searched corridors",
  areas = [
    {
      number: "01",
      name: "HSR Ext. & Kudlu Gate",
      isBest: true,
      desc: "Ideal sweet spot for joint commute to ORR Bellandur & Electronic City.",
      pricePerSqFt: "₹9,200 – ₹10,800",
      commuteTime: "22 mins to office",
      image: "/journals/sarjapur.png",
    },
    {
      number: "02",
      name: "Sarjapur Road Corridor",
      desc: "High growth potential with upcoming Metro line, though traffic remains heavy.",
      pricePerSqFt: "₹8,500 – ₹9,800",
      commuteTime: "35 mins to office",
      image: "/journals/hosa-road.png",
    },
    {
      number: "03",
      name: "Attibele & Carmeleram",
      desc: "Budget friendly township options with large open green spaces.",
      pricePerSqFt: "₹6,400 – ₹7,200",
      commuteTime: "50 mins to office",
      image: "/journals/attibele.png",
    },
  ],
  filtersTitle = "Search filters applied",
  filters = [
    {
      title: "Budget Filter",
      value: "₹1.4 Cr – ₹1.8 Cr",
      desc: "Max joint EMI capped under 35% of combined salary.",
      isVerified: true,
    },
    {
      title: "Location",
      value: "Within 10 km of ORR",
      desc: "Ensuring daily travel stays under 45 minutes total.",
      isVerified: true,
    },
    {
      title: "Configuration",
      value: "3 BHK (1,600+ sq.ft)",
      desc: "Dedicated work-from-home space & nursery room.",
      isVerified: true,
    },
    {
      title: "Builder Trust",
      value: "A-Tier RERA Registered",
      desc: "Clean legal title, bank APF approved, zero litigations.",
      isVerified: true,
    },
  ],
  footnoteText = '"We eliminated 14 projects instantly because their master plan showed high-rise blocks blocking natural light from the south."',
}) => {
  return (
    <section id="v3-section-search" className="w-full space-y-12" aria-label="Search strategy">
      {/* Section Head */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-[#DD5128] font-sans">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111821]">
          {title}
        </h2>
        <p className="text-sm sm:text-base font-serif text-[#59636F]">
          {description}
        </p>
      </div>

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
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="font-serif text-[17px] font-semibold text-[#111821] flex items-center gap-2 flex-wrap">
                        <span>{area.name}</span>
                        {area.isBest && (
                          <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#DD5128] bg-[#FBEDE7] rounded-full px-2 py-0.5 font-sans">
                            Top Choice
                          </span>
                        )}
                      </h4>
                    </div>

                    {/* Area Image Thumbnail */}
                    {area.image && (
                      <div className="relative w-full h-28 rounded-lg overflow-hidden border border-[#E4E9EF] mt-2 mb-2">
                        <Image
                          src={area.image}
                          alt={area.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

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

          {/* Right Column: Search Filters */}
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
    </section>
  );
};

export default JournalSearchV3;
