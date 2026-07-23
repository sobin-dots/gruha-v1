"use client";

import React from "react";
import { MapPin, LayoutGrid, Calendar, Car } from "lucide-react";

export interface SearchMetricItem {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface ExploredAreaItem {
  id: string;
  name: string;
  desc: string;
  image: string;
  projectsCount: number;
  visitsCount: number;
  isTopChoice?: boolean;
  dotColor?: string;
  left?: string;
  top?: string;
  ovalLeft?: string;
  ovalTop?: string;
  ovalWidth?: string;
  ovalHeight?: string;
  ovalFill?: string;
}

export interface JournalSearchV4Props {
  tagline?: string;
  title?: string;
  description?: string;
  locationPreference?: string;
  homeConfiguration?: string;
  sundaysSacrificed?: string;
  lostToTraffic?: string;
  metrics?: SearchMetricItem[];
  areasTitle?: string;
  areas?: ExploredAreaItem[];
  googleMapQuery?: string;
}

export const defaultExploredAreas: ExploredAreaItem[] = [
  {
    id: "hosa-road",
    name: "Hosa Road",
    desc: "Good connectivity & better value within reach",
    image: "/journals/hosa-road.png",
    projectsCount: 3,
    visitsCount: 2,
    dotColor: "rgb(59, 130, 246)",
    left: "10%",
    top: "10%",
    ovalLeft: "8%",
    ovalTop: "38%",
    ovalWidth: "220px",
    ovalHeight: "115px",
    ovalFill: "rgba(59, 130, 246, 0.12)",
  },
  {
    id: "chandapura-attibele",
    name: "Chandapura-Attibele",
    desc: "Lower budget, but larger units",
    image: "/journals/attibele.png",
    projectsCount: 3,
    visitsCount: 3,
    dotColor: "rgb(16, 185, 129)",
    left: "37%",
    top: "36%",
    ovalLeft: "34%",
    ovalTop: "62%",
    ovalWidth: "240px",
    ovalHeight: "120px",
    ovalFill: "rgba(16, 185, 129, 0.12)",
  },
  {
    id: "outer-sarjapur-road",
    name: "Outer Sarjapur Road",
    desc: "Strongest match on builder trust & school proximity",
    image: "/journals/sarjapur.png",
    projectsCount: 5,
    visitsCount: 4,
    isTopChoice: true,
    dotColor: "rgb(239, 68, 68)",
    left: "64%",
    top: "8%",
    ovalLeft: "62%",
    ovalTop: "42%",
    ovalWidth: "270px",
    ovalHeight: "145px",
    ovalFill: "rgba(239, 68, 68, 0.14)",
  },
];

export const JournalSearchV4: React.FC<JournalSearchV4Props> = ({
  tagline = "THE SEARCH",
  title = "Where they looked and what they found.",
  description = "From defining non-negotiables to comparing communities and projects, every search brought them one step closer to understanding what truly mattered.",
  locationPreference = "Sarjapur",
  homeConfiguration = "2.5 BHK",
  sundaysSacrificed = "5 Sundays",
  lostToTraffic = "20+ Hours",
  metrics,
  areasTitle = "AREAS THEY EXPLORED",
  areas = defaultExploredAreas,
  googleMapQuery = "Sarjapur+Road,Bengaluru",
}) => {
  const displayMetrics = metrics && metrics.length >= 4 ? metrics : [
    { icon: MapPin, label: "LOCATION PREFERENCE", value: locationPreference },
    { icon: LayoutGrid, label: "HOME CONFIGURATION", value: homeConfiguration },
    { icon: Calendar, label: "SUNDAYS SACRIFICED", value: sundaysSacrificed },
    { icon: Car, label: "LOST TO TRAFFIC", value: lostToTraffic },
  ];

  return (
    <section id="search" className="w-full text-slate-900">
      <div className="mx-auto max-w-[1120px] space-y-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <p
            className="text-[11px] font-semibold tracking-[0.15em] uppercase"
            style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(221, 81, 40)" }}
          >
            {tagline}
          </p>
          <h2
            className="mt-2 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em]"
            style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
          >
            {title}
          </h2>
          <p
            className="mt-3 text-[17px] leading-[1.55] max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(100, 116, 139)" }}
          >
            {description}
          </p>
        </div>

        {/* ── 4-Column Metrics Bar ──────────────────────────────────────── */}
        <div
          className="bg-white border flex divide-x divide-slate-100"
          style={{
            boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.05) 0px 8px 24px",
            borderRadius: "14px",
            borderColor: "rgb(228, 233, 239)",
          }}
        >
          {displayMetrics.map((item, idx) => {
            const Icon = item.icon || MapPin;
            return (
              <div key={idx} className="flex items-center gap-4 px-8 py-5 flex-1">
                <span className="flex-none text-[#DD5128]">
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <div>
                  <p
                    className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1"
                    style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[17px] font-[500] leading-tight"
                    style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── AREAS THEY EXPLORED (Light Gray Map & Dotted Oval Regions) ──── */}
        <div className="w-full">
          <p
            className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4"
            style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
          >
            {areasTitle}
          </p>

          <div className="relative w-full rounded-[24px] border border-slate-200/80 overflow-hidden min-h-[580px] bg-[#F4F6F8] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            {/* Real Interactive Google Map Background with Light Gray Tone Filter */}
            <iframe
              title="Explored Areas Google Map"
              src={`https://maps.google.com/maps?q=${googleMapQuery}&t=m&z=12&output=embed&iwloc=near`}
              className="absolute inset-0 w-full h-full border-none transition-opacity"
              style={{ filter: "grayscale(100%) contrast(92%) brightness(106%)", opacity: 0.88 }}
              loading="lazy"
            />

            {/* Light Canvas Overlay */}
            <div className="absolute inset-0 bg-white/20 pointer-events-none z-1" />

            {/* Dynamic Dotted Oval Filled Shapes for Area Locations */}
            <div className="relative z-10 w-full h-full min-h-[580px] pointer-events-none">
              {areas.map((area, idx) => {
                const defaultOvalPos = [
                  { left: "8%", top: "38%", width: "220px", height: "115px", fill: "rgba(59, 130, 246, 0.12)", border: "rgb(59, 130, 246)" },
                  { left: "34%", top: "62%", width: "240px", height: "120px", fill: "rgba(16, 185, 129, 0.12)", border: "rgb(16, 185, 129)" },
                  { left: "62%", top: "42%", width: "270px", height: "145px", fill: "rgba(239, 68, 68, 0.14)", border: "rgb(239, 68, 68)" },
                ];
                const def = defaultOvalPos[idx % defaultOvalPos.length];

                return (
                  <div
                    key={`oval-${area.id || idx}`}
                    className="absolute rounded-[50%] pointer-events-none transition-all z-5"
                    style={{
                      left: area.ovalLeft || def.left,
                      top: area.ovalTop || def.top,
                      width: area.ovalWidth || def.width,
                      height: area.ovalHeight || def.height,
                      backgroundColor: area.ovalFill || def.fill,
                      border: `2px dashed ${area.dotColor || def.border}`,
                    }}
                  />
                );
              })}

              {/* Dynamic Overlayed Area Cards */}
              {areas.map((area, idx) => {
                const defaultPositions = [
                  { left: "10%", top: "10%" },
                  { left: "37%", top: "36%" },
                  { left: "64%", top: "8%" },
                ];
                const defaultPos = defaultPositions[idx % defaultPositions.length];
                const posLeft = area.left || defaultPos.left;
                const posTop = area.top || defaultPos.top;

                return (
                  <div
                    key={area.id || idx}
                    className="absolute pointer-events-auto transition-all duration-300 hover:scale-105 hover:z-30 z-10"
                    style={{ left: posLeft, top: posTop }}
                  >
                    <div
                      className="w-[190px] sm:w-[200px] rounded-xl overflow-hidden relative"
                      style={{
                        background: "rgba(255, 255, 255, 0.96)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 20px",
                        border: area.isTopChoice ? "2px solid #DD5128" : "none",
                      }}
                    >
                      {area.isTopChoice && (
                        <span className="absolute top-2 left-2 z-10 bg-[#DD5128] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-md shadow-md font-inter">
                          TOP CHOICE
                        </span>
                      )}

                      <div className="h-[80px] overflow-hidden relative">
                        <img
                          src={area.image}
                          alt={area.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="px-3 py-2.5">
                        <p
                          className="text-[13px] font-semibold leading-tight mb-0.5"
                          style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
                        >
                          {area.name}
                        </p>
                        <p
                          className="text-[11px] leading-[1.45] mb-2"
                          style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(89, 99, 111)" }}
                        >
                          {area.desc}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-none"
                            style={{ background: area.dotColor || "rgb(59, 130, 246)" }}
                          />
                          <span
                            className="text-[10px] font-semibold"
                            style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
                          >
                            {area.projectsCount} Projects · {area.visitsCount} Visits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JournalSearchV4;
