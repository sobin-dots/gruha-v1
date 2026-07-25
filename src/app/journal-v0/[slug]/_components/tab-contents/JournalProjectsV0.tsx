"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";
import imgProj1 from "@/imports/image-1.png";
import imgProj2 from "@/imports/image-2.png";
import imgProj3 from "@/imports/image-3.png";

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
  defaultName = "ShieldCheck",
  props: any = { className: "w-4 h-4 text-slate-400 stroke-[1.5]" }
) => {
  if (!name) return null;
  const Icon = (Icons as any)[name] || (Icons as any)[defaultName] || Icons.HelpCircle;
  return <Icon {...props} />;
};

const defaultProjects = [
  {
    name: "Bhartiya City Nikoo Homes",
    location: "Thanisandra Main Rd",
    tagline: "The launch-window buy",
    priceRange: "₹1.31–2.9 Cr",
    psf: "₹11,950–12,500/sqft",
    possession: "2029",
    possessionColor: "#111821",
    img: imgProj1,
  },
  {
    name: "L&T Raintree Boulevard",
    location: "Hebbal",
    tagline: "Delivered-premium benchmark",
    priceRange: "₹2.6–3.53 Cr",
    psf: "₹17,500–20,400/sqft",
    possession: "Ready",
    possessionColor: "#10B981",
    img: imgProj2,
  },
  {
    name: "Devanahalli Plotted",
    location: "Devanahalli",
    tagline: "The alternative thesis — parked",
    priceRange: "₹38–45L",
    psf: "₹2,100–8,500/sqft",
    possession: "Immediate",
    possessionColor: "#64748B",
    img: imgProj3,
  },
];

const defaultCriteria = [
  { icon: "Shield", text: "Safety & security", sub: "for family", active: false },
  { icon: "GraduationCap", text: "Good schools", sub: "nearby", active: false },
  { icon: "ShieldCheck", text: "Trusted builders", sub: "for quality", active: false },
  { icon: "TrendingUp", text: "Value of money", sub: "for future growth", active: false },
  { icon: "Clock", text: "Possession timeline", sub: "before baby arrives", active: true },
];

export interface JournalProjectsV0Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  projectsTitle?: string;
  projectsCountBadge?: string;
  projects?: any[];
  criteriaTitle?: string;
  criteria?: any[];
}

export const JournalProjectsV0: React.FC<JournalProjectsV0Props> = ({
  eyebrow = "The Projects",
  title = "Where they looked and what they found.",
  description = "From defining non-negotiables to comparing communities and projects, every search brought them one step closer to understanding what truly mattered.",
  projectsTitle = "PROJECTS THEY EXPLORED",
  projectsCountBadge = "19 projects",
  projects = defaultProjects,
  criteriaTitle = "Non-negotiables",
  criteria = defaultCriteria,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const displayCriteria = criteria.length > 0 ? criteria : defaultCriteria;

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const visibleProjects =
    displayProjects.length <= 3
      ? displayProjects.map((proj: any, idx: number) => ({ proj, originalIdx: idx }))
      : Array.from({ length: 3 }).map((_, i) => {
        const originalIdx = (startIndex + i) % displayProjects.length;
        return { proj: displayProjects[originalIdx], originalIdx };
      });

  return (
    <section id="section-projects" className="pt-10 ">
      {/* Optional Top Section Header */}
      {title && (
        <div className="text-left mb-7">
          {eyebrow && (
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ fontFamily: fu, color: "#DD5128" }}>
              {eyebrow}
            </p>
          )}
          <h2 className="text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em]" style={{ fontFamily: fd, color: "#111821" }}>
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[17px] leading-[1.55]" style={{ fontFamily: fd, color: "#59636F" }}>
              {description}
            </p>
          )}
        </div>
      )}

      {/* Main Grid: Projects Carousel (Left) + Criteria Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">
        {/* Left Column: Carousel & Cards */}
        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ fontFamily: fu, color: "#8A94A1" }}>
              {projectsTitle}
            </h3>

            <div className="flex items-center gap-3">
              {projectsCountBadge && (
                <span className="text-[12px] font-medium" style={{ fontFamily: fu, color: "#64748B" }}>
                  {projectsCountBadge}
                </span>
              )}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  className="w-7 h-7 rounded-full bg-white border border-slate-200/60 shadow-2xs flex items-center justify-center transition-all hover:bg-slate-50 cursor-pointer"
                  aria-label="Previous projects"
                >
                  <ChevronLeft size={14} className="text-slate-500" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-7 h-7 rounded-full bg-white border border-slate-200/60 shadow-2xs flex items-center justify-center transition-all hover:bg-slate-50 cursor-pointer"
                  aria-label="Next projects"
                >
                  <ChevronRight size={14} className="text-slate-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {visibleProjects.map(({ proj, originalIdx }: any) => {
              const imgSrc = getImgSrc(proj.img || proj.imageSrc || (originalIdx % 3 === 0 ? imgProj1 : originalIdx % 3 === 1 ? imgProj2 : imgProj3));
              const possessionVal = proj.possession || "2029";
              const isReady = possessionVal.toLowerCase().includes("ready");
              const possessionColor = proj.possessionColor || (isReady ? "#10B981" : "#111821");

              return (
                <div
                  key={`${proj.name || proj.title}-${originalIdx}`}
                  className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  {/* Card Image with Gradient Overlay & Bottom-Left Tagline */}
                  <div className="h-52 relative bg-slate-100 overflow-hidden">
                    <img src={imgSrc} alt={proj.name || proj.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {proj.tagline && (
                      <span
                        className="absolute bottom-3.5 left-4 text-[12px] font-medium text-white/95 leading-tight drop-shadow-sm"
                        style={{ fontFamily: fu }}
                      >
                        {proj.tagline}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[17px] font-medium leading-tight mb-1" style={{ fontFamily: fd, color: "#111821" }}>
                        {proj.name || proj.title}
                      </h4>
                      {proj.location && (
                        <p className="text-[13px] leading-tight mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          {proj.location}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100/90">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[9.5px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ fontFamily: fu, color: "#94A3B8" }}>
                            PRICE RANGE
                          </p>
                          <p className="text-[16px] font-semibold leading-none" style={{ fontFamily: fd, color: "#111821" }}>
                            {proj.priceRange || proj.price || "₹1.31–2.9 Cr"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9.5px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ fontFamily: fu, color: "#94A3B8" }}>
                            POSSESSION
                          </p>
                          <p className="text-[15px] font-medium leading-none" style={{ fontFamily: fu, color: possessionColor }}>
                            {possessionVal}
                          </p>
                        </div>
                      </div>

                      {/* Per sqft price sub-line */}
                      <p className="mt-2.5 text-[11px]" style={{ fontFamily: fu, color: "#94A3B8" }}>
                        {proj.psf || proj.perSqft || "₹11,950–12,500/sqft"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Non-Negotiables Criteria List */}
        <div className="pt-10 flex flex-col gap-6">
          {displayCriteria.map((item: any, idx: number) => {
            const isActive = item.active;
            const iconElement =
              typeof item.icon === "string"
                ? getIcon(item.icon, "Shield", { className: "w-4 h-4 text-slate-400 stroke-[1.5]" })
                : item.icon;

            return (
              <div key={item.text || item.title || idx} className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-none">{iconElement}</span>
                  <div>
                    <h5 className="text-[15px] font-medium leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                      {item.text || item.title}
                    </h5>
                    {(item.sub || item.subtitle) && (
                      <p className="text-[12px] mt-0.5 leading-tight" style={{ fontFamily: fu, color: "#8A94A1" }}>
                        {item.sub || item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Orange Dot indicator for active item */}
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#DD5128] mt-1.5 flex-none shadow-xs" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JournalProjectsV0;
