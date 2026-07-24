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
  props: any = { className: "w-4 h-4", strokeWidth: 2 }
) => {
  if (!name) return null;
  const Icon = (Icons as any)[name] || (Icons as any)[defaultName] || Icons.HelpCircle;
  return <Icon {...props} />;
};

const defaultProjects = [
  {
    name: "Bhartiya City Nikoo Homes",
    location: "Thanisandra Main Rd, North Bengaluru",
    tagline: "The launch-window buy",
    priceRange: "₹1.31–2.9 Cr",
    psf: "₹11,950–12,500/sqft",
    possession: "2029",
    img: imgProj1,
    active: true,
  },
  {
    name: "L&T Raintree Boulevard",
    location: "Hebbal, North Bengaluru",
    tagline: "Delivered-premium benchmark",
    priceRange: "₹2.6–3.53 Cr",
    psf: "₹17,500–20,400/sqft",
    possession: "Ready",
    img: imgProj2,
    active: false,
  },
  {
    name: "Devanahalli Plotted",
    location: "Devanahalli, North Bengaluru",
    tagline: "The alternative thesis",
    priceRange: "₹38–45L",
    psf: "₹2,100–8,500/sqft",
    possession: "Immediate",
    status: "parked",
    img: imgProj3,
    active: false,
  },
];

const defaultCriteria = [
  { icon: "ShieldCheck", text: "Safety & security", sub: "for family", active: false },
  { icon: "GraduationCap", text: "Good schools", sub: "nearby", active: false },
  { icon: "CheckCircle2", text: "Trusted builders", sub: "for quality", active: false },
  { icon: "IndianRupee", text: "Value of money", sub: "for future growth", active: false },
  { icon: "Hourglass", text: "Possession timeline", sub: "before baby arrives", active: true },
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
  projectsTitle = "Projects they explored",
  projectsCountBadge = "19 projects",
  projects = defaultProjects,
  criteriaTitle = "Non-negotiables",
  criteria = defaultCriteria,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);

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
    <section id="section-projects" className="pt-10 pb-12">
      <div className="text-left mb-7">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: fu, color: "#DD5128" }}>
          {eyebrow}
        </p>
        <h2 className="mt-2 text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em]" style={{ fontFamily: fd, color: "#111821" }}>
          {title}
        </h2>
        <p className="mt-3 text-[17px] leading-[1.55]" style={{ fontFamily: fd, color: "#59636F" }}>
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
        {/* Projects Carousel */}
        <div
          className="bg-white border p-6 sm:p-8"
          style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-[20px] font-semibold" style={{ fontFamily: fd, color: "#111821" }}>
                {projectsTitle}
              </h3>
              {projectsCountBadge && (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600" style={{ fontFamily: fu }}>
                  {projectsCountBadge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: "#E4E9EF" }}
                aria-label="Previous projects"
              >
                <ChevronLeft size={16} color="#475569" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: "#E4E9EF" }}
                aria-label="Next projects"
              >
                <ChevronRight size={16} color="#475569" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-300">
            {visibleProjects.map(({ proj, originalIdx }: any, displayPos: number) => {
              const isSelected = originalIdx === selectedIdx;
              const imgSrc = getImgSrc(proj.img || proj.imageSrc || (originalIdx % 3 === 0 ? imgProj1 : originalIdx % 3 === 1 ? imgProj2 : imgProj3));

              return (
                <div
                  key={`${proj.name || proj.title}-${originalIdx}`}
                  onClick={() => setSelectedIdx(originalIdx)}
                  className="border rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200"
                  style={{
                    borderColor: isSelected ? "#DD5128" : "#E4E9EF",
                    boxShadow: isSelected ? "0 4px 16px rgba(221,81,40,0.12)" : undefined,
                  }}
                >
                  <div className="h-44 relative bg-slate-100 overflow-hidden">
                    <img src={imgSrc} alt={proj.name || proj.title} className="w-full h-full object-cover" />
                    {proj.tagline && (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-md text-white backdrop-blur-md"
                        style={{ background: "rgba(17,24,33,0.75)", fontFamily: fu }}
                      >
                        {proj.tagline}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h4 className="text-[16px] font-semibold leading-snug mb-1" style={{ fontFamily: fd, color: "#111821" }}>
                        {proj.name || proj.title}
                      </h4>
                      {proj.location && (
                        <p className="text-[12px] leading-tight mb-3" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          {proj.location}
                        </p>
                      )}
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px]" style={{ fontFamily: fu }}>
                      <span className="font-semibold" style={{ color: "#111821" }}>
                        {proj.priceRange || proj.price || "₹1.31–2.9 Cr"}
                      </span>
                      <span style={{ color: "#6B7280" }}>{proj.possession || "2029"}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Non-Negotiables Sidebar */}
        <div
          className="bg-white border p-6"
          style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
        >
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
            {criteriaTitle}
          </p>

          <div className="flex flex-col gap-3">
            {displayCriteria.map((item: any) => {
              const isActive = item.active;
              const iconElement =
                typeof item.icon === "string"
                  ? getIcon(item.icon, "ShieldCheck", { className: `w-4 h-4 ${isActive ? "text-[#DD5128]" : "text-slate-400"}` })
                  : item.icon;

              return (
                <div
                  key={item.text || item.title}
                  className="flex items-start gap-3 p-3 rounded-xl border transition-colors"
                  style={{
                    borderColor: isActive ? "#FFD0C4" : "#F1F5F9",
                    background: isActive ? "#FFF5F2" : "#F8FAFC",
                  }}
                >
                  <span className="mt-0.5 flex-none" style={{ color: isActive ? "#DD5128" : "#94A3B8" }}>
                    {iconElement}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold leading-tight" style={{ fontFamily: fu, color: isActive ? "#111821" : "#475569" }}>
                      {item.text || item.title}
                    </p>
                    {(item.sub || item.subtitle) && (
                      <p className="text-[11.5px] mt-0.5" style={{ fontFamily: fu, color: isActive ? "#DD5128" : "#94A3B8" }}>
                        {item.sub || item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalProjectsV0;
