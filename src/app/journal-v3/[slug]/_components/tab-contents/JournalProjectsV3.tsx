"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Building2, Award, CheckCircle2, XCircle, BarChart3, PiggyBank, LayoutGrid, TableProperties } from "lucide-react";

export interface ProjectItem {
  name: string;
  location: string;
  price: string;
  status: string;
  isWinner?: boolean;
  image?: string;
  score?: string;
  reason?: string;
  lightScore?: string;
  commuteTime?: string;
  density?: string;
}

export interface BudgetCutItem {
  amount: string;
  description: string;
}

export interface JournalProjectsV3Props {
  eyebrow?: string;
  title: string;
  description: string;
  matteredTitle?: string;
  matteredItems?: { title: string; subtitle: string; iconName?: string }[];
  corridorsTitle?: string;
  corridors?: { name: string; percentage: number; countLabel: string }[];
  projectsTitle?: string;
  projects?: ProjectItem[];
  cutsTitle?: string;
  budgetCuts?: BudgetCutItem[];
}

export const JournalProjectsV3: React.FC<JournalProjectsV3Props> = ({
  eyebrow = "Project Comparison",
  title = "Where they looked and what they found.",
  description = "From defining non-negotiables to comparing communities and projects, every search brought them one step closer to understanding what truly mattered.",
  matteredTitle = "What mattered most in evaluation",
  matteredItems = [
    { title: "Natural Light", subtitle: "9.4 / 10" },
    { title: "Floor Plan Flow", subtitle: "8.8 / 10" },
    { title: "Commute to ORR", subtitle: "8.5 / 10" },
    { title: "Builder Trust", subtitle: "8.2 / 10" },
    { title: "Noise Level", subtitle: "8.0 / 10" },
  ],
  corridorsTitle = "Share of searches by corridor",
  corridors = [
    { name: "HSR Ext. & Kudlu", percentage: 58, countLabel: "58% (20 Homes)" },
    { name: "Sarjapur Road Corridor", percentage: 26, countLabel: "26% (9 Homes)" },
    { name: "Bellandur ORR Hub", percentage: 16, countLabel: "16% (5 Homes)" },
  ],
  projectsTitle = "Shortlisted properties evaluated",
  projects = [
    {
      name: "The Sixteenth Floor (Project A)",
      location: "HSR Ext.",
      price: "₹1.78 Cr · 1,850 sq.ft",
      status: "Selected Winner",
      isWinner: true,
      image: "/journals/brigade-sanctuary.png",
      score: "9.6 / 10",
      reason: "Abundant south-facing light & 22-min commute",
      lightScore: "9.8 / 10",
      commuteTime: "22 mins",
      density: "Low Density (60 u/ac)",
    },
    {
      name: "Greenwood Meadows (Project B)",
      location: "Sarjapur Rd",
      price: "₹1.55 Cr · 1,650 sq.ft",
      status: "Rejected · Dark layout",
      isWinner: false,
      image: "/journals/greenwood-meadows.png",
      score: "7.2 / 10",
      reason: "High-rise block shadow from south side",
      lightScore: "5.5 / 10",
      commuteTime: "35 mins",
      density: "Medium Density (90 u/ac)",
    },
    {
      name: "Aeropolis Enclave (Project C)",
      location: "ORR Bellandur",
      price: "₹1.68 Cr · 1,720 sq.ft",
      status: "Rejected · High density",
      isWinner: false,
      image: "/journals/sattva-aeropolis.png",
      score: "7.8 / 10",
      reason: "Heavy traffic bottlenecks on main arterial road",
      lightScore: "8.0 / 10",
      commuteTime: "45 mins",
      density: "High Density (120 u/ac)",
    },
  ],
  cutsTitle = "Smart budget cuts & savings",
  budgetCuts = [
    { amount: "₹4.2L", description: "Saved by skipping Italian marble upgrade package" },
    { amount: "₹2.8L", description: "Saved on developer parking markup negotiation" },
    { amount: "₹1.5L", description: "Negotiated discount on floor rise charges" },
    { amount: "₹3.0L", description: "Opted for modular shell over full interior package" },
    { amount: "₹1.2L", description: "Avoided club membership forced bundle" },
  ],
}) => {
  const [selectedVariant, setSelectedVariant] = useState<"variantA" | "variantB">("variantA");

  return (
    <section id="v3-section-projects" className="w-full space-y-10" aria-label="Project comparison">
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

      {/* Interactive Variant Switcher */}
      <div className="flex items-center justify-center gap-2">
        <div className="bg-[#EFF3F7] p-1 rounded-xl flex items-center gap-1 border border-[#E4E9EF]">
          <button
            type="button"
            onClick={() => setSelectedVariant("variantA")}
            className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer border-none font-sans ${
              selectedVariant === "variantA"
                ? "bg-white text-[#111821] shadow-xs"
                : "text-[#59636F] hover:text-[#111821]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Variant A: Story Cards</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedVariant("variantB")}
            className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer border-none font-sans ${
              selectedVariant === "variantB"
                ? "bg-[#DD5128] text-white shadow-xs"
                : "text-[#59636F] hover:text-[#111821]"
            }`}
          >
            <TableProperties className="w-3.5 h-3.5" />
            <span>Variant B: Comparison Matrix</span>
          </button>
        </div>
      </div>

      {/* ── VARIANT A: STORY CARDS LAYOUT ────────────────────────────── */}
      {selectedVariant === "variantA" && (
        <div className="space-y-10">
          {/* What Mattered Cards */}
          <div className="space-y-3">
            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans">
              {matteredTitle}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {matteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E4E9EF] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-2 hover:border-[#DD5128]/40 transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#8A94A1] uppercase tracking-wider font-sans">
                    Priority 0{idx + 1}
                  </span>
                  <div>
                    <h5 className="font-serif text-[16px] font-semibold text-[#111821]">
                      {item.title}
                    </h5>
                    <div className="inline-flex items-center gap-1 mt-1 text-[13px] font-semibold text-[#DD5128] font-sans">
                      Score: {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corridor Search Analytics */}
          <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans">
                {corridorsTitle}
              </div>
              <span className="text-[12px] font-medium text-[#59636F] font-sans">
                34 total projects evaluated
              </span>
            </div>

            <div className="space-y-4">
              {corridors.map((corr, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-[13.5px] font-medium text-[#111821] font-sans">
                    <span className="font-semibold">{corr.name}</span>
                    <span className="text-[#8A94A1] tabular-nums font-sans text-[12.5px]">
                      {corr.countLabel}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#EFF3F7] overflow-hidden flex">
                    <div
                      className="h-full bg-[#DD5128] rounded-full transition-all duration-1000"
                      style={{ width: `${corr.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shortlisted Projects Showcase */}
          <div className="space-y-4">
            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans">
              {projectsTitle}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border p-5 flex flex-col justify-between space-y-4 transition-all ${
                    proj.isWinner
                      ? "bg-[#FBEDE7]/40 border-[#DD5128] shadow-xs"
                      : "bg-[#F7F9FB] border-[#E4E9EF]"
                  }`}
                >
                  {/* Cover Image */}
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-[#E4E9EF] bg-white">
                    <Image
                      src={proj.image || "/journals/hero-img.png"}
                      alt={proj.name || "Project image"}
                      fill
                      className="object-cover"
                    />
                    {proj.isWinner && (
                      <div className="absolute top-2.5 right-2.5 bg-[#DD5128] text-white text-[10.5px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs font-sans">
                        ★ Winner
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-serif text-[18px] font-semibold text-[#111821] leading-snug">
                        {proj.name || `Project ${idx + 1}`}
                      </h5>
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#59636F] font-sans">
                      {proj.price || "₹1.65 Cr"} · {proj.location || "Bengaluru"}
                    </div>
                    {proj.reason && (
                      <p className="text-[12.5px] leading-[1.5] text-[#59636F] font-serif pt-1">
                        "{proj.reason}"
                      </p>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="pt-2 border-t border-[#EFF3F7]">
                    <span
                      className={`text-[11.5px] font-semibold inline-flex items-center gap-1.5 font-sans ${
                        proj.isWinner ? "text-[#DD5128]" : "text-[#8A94A1]"
                      }`}
                    >
                      {proj.isWinner ? "✓ Selected Winner" : "✕ " + (proj.status || "Evaluated")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Evaluated Banner */}
            <div className="bg-[#111821] text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#111821]">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-[22px] font-semibold">
                  Exhaustive Micro-Market Analysis
                </h4>
                <p className="text-[13.5px] text-[#8A94A1] font-sans">
                  34 projects evaluated across 3 corridors before finding the winner.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <b className="font-serif text-[38px] font-semibold text-[#DD5128] leading-none">
                  +34
                </b>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#8A94A1] font-sans">
                  Projects<br />Evaluated
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── VARIANT B: COMPARISON MATRIX TABLE LAYOUT ───────────────────── */}
      {selectedVariant === "variantB" && (
        <div className="space-y-8">
          <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] overflow-hidden">
            <div className="p-6 border-b border-[#E4E9EF] bg-[#F7F9FB]">
              <h3 className="font-serif text-[21px] font-semibold text-[#111821]">
                Side-by-Side Property Matrix
              </h3>
              <p className="text-[13px] text-[#59636F] mt-1 font-sans">
                Detailed comparison of non-negotiable criteria across top 3 shortlisted projects.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans">
                <thead>
                  <tr className="border-b border-[#E4E9EF] bg-[#F7F9FB] text-[12px] uppercase tracking-wider text-[#8A94A1]">
                    <th className="p-4 pl-6 font-semibold min-w-[180px]">Evaluation Criteria</th>
                    {projects.map((p, idx) => (
                      <th
                        key={idx}
                        className={`p-4 font-semibold min-w-[220px] ${
                          p.isWinner ? "bg-[#FBEDE7]/60 text-[#DD5128]" : "text-[#111821]"
                        }`}
                      >
                        {p.name}
                        {p.isWinner && <span className="block text-[10px] text-[#DD5128] font-bold">★ Selected Winner</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFF3F7] text-[13.5px]">
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Location & Commute</td>
                    <td className="p-4 bg-[#FBEDE7]/20 font-medium text-[#111821]">HSR Ext. (22 mins)</td>
                    <td className="p-4 text-[#59636F]">Sarjapur Rd (35 mins)</td>
                    <td className="p-4 text-[#59636F]">ORR Bellandur (45 mins)</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Price & Sq.Ft</td>
                    <td className="p-4 bg-[#FBEDE7]/20 font-serif font-semibold text-[#111821]">₹1.78 Cr (1,850 sq.ft)</td>
                    <td className="p-4 font-serif text-[#59636F]">₹1.55 Cr (1,650 sq.ft)</td>
                    <td className="p-4 font-serif text-[#59636F]">₹1.68 Cr (1,720 sq.ft)</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Natural Light Exposure</td>
                    <td className="p-4 bg-[#FBEDE7]/20 font-semibold text-[#DD5128]">9.8 / 10 (South-Facing)</td>
                    <td className="p-4 text-[#8A94A1]">5.5 / 10 (High-Rise Shadow)</td>
                    <td className="p-4 text-[#59636F]">8.0 / 10 (East Open)</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Density & Open Space</td>
                    <td className="p-4 bg-[#FBEDE7]/20 text-[#111821]">Low Density (60 u/ac)</td>
                    <td className="p-4 text-[#59636F]">Medium Density (90 u/ac)</td>
                    <td className="p-4 text-[#8A94A1]">High Density (120 u/ac)</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Overall Rating</td>
                    <td className="p-4 bg-[#FBEDE7]/20 font-serif text-[18px] font-semibold text-[#DD5128]">9.6 / 10</td>
                    <td className="p-4 font-serif text-[16px] text-[#59636F]">7.2 / 10</td>
                    <td className="p-4 font-serif text-[16px] text-[#59636F]">7.8 / 10</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-semibold text-[#111821]">Final Decision</td>
                    <td className="p-4 bg-[#FBEDE7]/20 font-semibold text-[#DD5128]">✓ Winner Chosen</td>
                    <td className="p-4 text-[#8A94A1]">✕ Rejected (Dark layout)</td>
                    <td className="p-4 text-[#8A94A1]">✕ Rejected (Traffic density)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── COMMON COMPONENT: SMART BUDGET CUTS GRID ─────────────────── */}
      <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8 space-y-6">
        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans">
          {cutsTitle}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#E4E9EF] border border-[#E4E9EF] rounded-xl overflow-hidden">
          {budgetCuts.map((cut, idx) => (
            <div key={idx} className="bg-white p-4 space-y-1">
              <b className="font-serif text-[24px] font-semibold text-[#DD5128] block leading-none">
                {cut.amount}
              </b>
              <span className="text-[12.5px] leading-[1.4] text-[#59636F] block pt-1 font-serif">
                {cut.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalProjectsV3;
