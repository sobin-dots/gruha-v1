"use client";

import React from "react";

export interface ProjectItem {
  name: string;
  location: string;
  price: string;
  status: string;
  isWinner?: boolean;
}

export interface BudgetCutItem {
  amount: string;
  description: string;
}

export interface JournalProjectsProps {
  eyebrow?: string;
  title: string;
  description: string;
  matteredTitle?: string;
  matteredItems?: { title: string; subtitle: string }[];
  corridorsTitle?: string;
  corridors?: { name: string; percentage: number; countLabel: string }[];
  projectsTitle?: string;
  projects?: ProjectItem[];
  cutsTitle?: string;
  budgetCuts?: BudgetCutItem[];
}

export const JournalProjects: React.FC<JournalProjectsProps> = ({
  eyebrow = "Project Comparison",
  title,
  description,
  matteredTitle = "What mattered most",
  matteredItems = [
    { title: "Natural Light", subtitle: "Score: 9.4/10" },
    { title: "Floor Plan Flow", subtitle: "Score: 8.8/10" },
    { title: "Commute to ORR", subtitle: "Score: 8.5/10" },
    { title: "Builder Trust", subtitle: "Score: 8.2/10" },
    { title: "Noise Level", subtitle: "Score: 8.0/10" },
  ],
  corridorsTitle = "Share of searches by corridor",
  corridors = [
    { name: "HSR Ext. & Kudlu", percentage: 58, countLabel: "58% (20)" },
    { name: "Sarjapur Road", percentage: 26, countLabel: "26% (9)" },
    { name: "Bellandur ORR", percentage: 16, countLabel: "16% (5)" },
  ],
  projectsTitle = "Shortlisted properties",
  projects = [
    { name: "The Sixteenth Floor (Project A)", location: "HSR Ext.", price: "₹1.78Cr", status: "Selected Winner", isWinner: true },
    { name: "Project B — Sarjapur", location: "Sarjapur Rd", price: "₹1.55Cr", status: "Rejected · Dark layout", isWinner: false },
    { name: "Project C — Bellandur", location: "ORR", price: "₹1.68Cr", status: "Rejected · High density", isWinner: false },
  ],
  cutsTitle = "Smart budget cuts",
  budgetCuts = [
    { amount: "₹4.2L", description: "Saved by skipping Italian marble upgrade" },
    { amount: "₹2.8L", description: "Saved on developer parking markup" },
    { amount: "₹1.5L", description: "Negotiated discount on floor rise charges" },
    { amount: "₹3.0L", description: "Opted for modular shell over full interior package" },
    { amount: "₹1.2L", description: "Avoided club membership forced bundle" },
  ],
}) => {
  return (
    <section id="projects" className="w-full bg-white text-[#111821] px-4 sm:px-6 lg:px-8">
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

        {/* What Mattered Grid (5 Cells) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#E4E9EF] border border-[#E4E9EF] rounded-[14px] overflow-hidden">
          {matteredItems.map((item, idx) => (
            <div key={idx} className="bg-white p-[18px_16px] text-center">
              <h5 className="text-[13px] font-semibold text-[#111821] font-sans">
                {item.title}
              </h5>
              <span className="text-[12px] text-[#8A94A1] block mt-1 font-sans">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Corridors Bar Chart */}
        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8">
          <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
            {corridorsTitle}
          </div>
          <div className="space-y-3.5">
            {corridors.map((corr, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <span className="text-[13px] font-medium text-[#111821] w-[140px] sm:w-[190px] shrink-0 truncate font-sans">
                  {corr.name}
                </span>
                <div className="flex-1 h-2 rounded-full bg-[#EFF3F7] overflow-hidden">
                  <div
                    className="h-full bg-[#DD5128] rounded-full transition-all duration-1000"
                    style={{ width: `${corr.percentage}%` }}
                  />
                </div>
                <span className="text-[12.5px] text-[#8A94A1] tabular-nums w-[74px] text-right shrink-0 font-sans">
                  {corr.countLabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisted Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-4 transition-colors ${
                proj.isWinner
                  ? "bg-[#FBEDE7]/40 border-[#DD5128]"
                  : "bg-[#F7F9FB] border-[#E4E9EF]"
              }`}
            >
              <h5 className="font-serif text-[16px] font-semibold text-[#111821]">
                {proj.name}
              </h5>
              <span className="text-[12px] text-[#8A94A1] block mt-1 font-sans">
                {proj.status} · {proj.price}
              </span>
            </div>
          ))}
          <div className="bg-[#111821] border border-[#111821] text-white rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <b className="font-serif text-[26px] font-semibold block leading-none">
              +34
            </b>
            <span className="text-[12px] text-[#8A94A1] mt-1 font-sans">
              Projects Evaluated
            </span>
          </div>
        </div>

        {/* Budget Cuts Grid (5 Cells) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#E4E9EF] border border-[#E4E9EF] rounded-[14px] overflow-hidden">
          {budgetCuts.map((cut, idx) => (
            <div key={idx} className="bg-white p-4">
              <b className="font-serif text-[24px] font-semibold text-[#DD5128] block leading-none">
                {cut.amount}
              </b>
              <span className="text-[12.5px] leading-[1.4] text-[#59636F] block mt-1.5 font-serif">
                {cut.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JournalProjects;
