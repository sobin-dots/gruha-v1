"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";
import imgMoment1 from "@/imports/1.png";
import imgMoment2 from "@/imports/2.png";
import imgMoment3 from "@/imports/3.png";
import imgRiya from "@/imports/signal-2026-07-23-17-18-39-504.jpg";
import imgKabir from "@/imports/signal-2026-07-23-17-32-02-937_005.jpg";
import imgAnanya from "@/imports/signal-2026-07-23-17-32-02-937_004.jpg";
import imgArjun from "@/imports/signal-2026-07-23-17-32-02-937_003.jpg";
import imgKaran from "@/imports/signal-2026-07-23-17-32-02-937_002.jpg";
import imgSharon from "@/imports/signal-2026-07-23-17-32-02-937.jpg";
import imgFrame9 from "@/imports/Frame9.svg";

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
  defaultName = "Briefcase",
  props: any = { className: "w-4 h-4", strokeWidth: 2 }
) => {
  if (!name) return null;
  const Icon = (Icons as any)[name] || (Icons as any)[defaultName] || Icons.HelpCircle;
  return <Icon {...props} />;
};

const defaultAgents = [
  {
    name: "Riya",
    role: "AI Real Estate Companion",
    desc: "Understands your needs, guides you with clarity, and helps you make the right move — at every stage of your search.",
    color: "#7C3AED",
    grad: ["#9B6EF3", "#C4B5FD"],
    img: imgRiya,
    active: true,
    quote: "Every time I suggested a lower-priced option, both of you kept returning to communities with trusted builders, better schools and realistic possession timelines. That's when I realized you weren't searching for the cheapest home. You were searching for peace of mind.",
    quoteLabel: "Riya's take on the Journey",
  },
  {
    name: "Kabir",
    role: "Projects Curator",
    desc: "Handpicks projects that match your stage of life, budget, and builder trust score — so you never chase the wrong listings.",
    color: "#0369A1",
    grad: ["#3B82F6", "#93C5FD"],
    img: imgKabir,
    active: true,
    quote: "Your EMI comfort zone and your aspiration were ₹40K apart. Most buyers ignore that gap. I made sure you didn't — every shortlist was calibrated to what you could actually sustain, not just afford on paper.",
    quoteLabel: "Why Kabir flagged this",
  },
  {
    name: "Ananya",
    role: "Floor Plan Specialist",
    desc: "Reads layouts for liveability — light, flow, future-proofing, ventilation, and what the brochure won't tell you.",
    color: "#047857",
    grad: ["#10B981", "#6EE7B7"],
    img: imgAnanya,
    active: false,
    quote: "Three of your shortlisted units had the kitchen facing north with no cross-ventilation. On paper they looked identical to the others. I flagged them before you fell in love with the view.",
    quoteLabel: "Why Ananya flagged the layout",
  },
  {
    name: "Arjun",
    role: "Project Analyst",
    desc: "Stress-tests builder credibility, delivery timelines, and project-level risks before you commit — because paperwork matters as much as square feet.",
    color: "#B45309",
    grad: ["#F59E0B", "#FCD34D"],
    img: imgArjun,
    active: false,
    quote: "Two of the 11 projects you visited had pending OC approvals. I flagged them in real-time during your site visits, so you never made a shortlist decision on incomplete documentation.",
    quoteLabel: "Why Arjun raised a flag",
  },
  {
    name: "Karan",
    role: "Location Explorer",
    desc: "Maps micro-market dynamics, commute realities, school catchments, and neighbourhood trajectories over 5 years.",
    color: "#DB2777",
    grad: ["#F43F5E", "#FDA4AF"],
    img: imgKaran,
    active: false,
    quote: "Whitefield scored highest on commute but lowest on school density within 2 km. Sarjapur flipped that equation. I mapped 11 micro-markets so you could compare what actually mattered at the building stage of life.",
    quoteLabel: "Why Karan mapped this area",
  },
  {
    name: "Sharon",
    role: "Lifestyle Curator",
    desc: "Matches the neighbourhood's social fabric — cafés, parks, communities, weekend trails — to how you actually live, not how you wish you did.",
    color: "#0F766E",
    grad: ["#14B8A6", "#5EEAD4"],
    img: imgSharon,
    active: false,
    quote: "You mentioned weekend farmers markets and a jogging trail twice each. I cross-referenced both against walkability scores and found only two projects where your Sunday routine would survive the move.",
    quoteLabel: "Why Sharon curated this shortlist",
  },
];

const waveHeights = [4, 6, 10, 14, 18, 22, 26, 28, 30, 28, 26, 22, 20, 24, 28, 30, 26, 20, 16, 18, 22, 26, 28, 24, 20, 16, 12, 10, 8, 6];

function AgentsSection({ agentsData = defaultAgents, featuredIndex = 0 }: { agentsData?: any[]; featuredIndex?: number }) {
  const [current, setCurrent] = useState(featuredIndex);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress] = useState(0.35);
  const list = agentsData.length > 0 ? agentsData : defaultAgents;
  const total = list.length;
  const agent = list[current];
  const featured = list[featuredIndex];

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div
      className="mt-5 border overflow-hidden"
      style={{ borderRadius: 14, borderColor: "#E4E9EF", background: "#ffffff", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
        <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-100">
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase" style={{ fontFamily: fu, color: "#8A94A1" }}>
            AI agents on this journey
          </p>
          <div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-3">
              <path d="M14 2 L15.5 11.5 L25 14 L15.5 16.5 L14 26 L12.5 16.5 L3 14 L12.5 11.5 Z" stroke={featured.color || "#7C3AED"} strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M22 4 L22.7 7.3 L26 8 L22.7 8.7 L22 12 L21.3 8.7 L18 8 L21.3 7.3 Z" stroke={featured.color || "#7C3AED"} strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <p className="text-[13px] font-semibold" style={{ fontFamily: fu, color: featured.color || "#7C3AED" }}>
              {featured.quoteLabel || "Riya's take on the Journey"}
            </p>
          </div>

          <blockquote className="text-[17px] leading-[1.65]" style={{ fontFamily: fd, color: "#1E293B" }}>
            "{featured.quote}"
          </blockquote>

          <div>
            <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ fontFamily: fu, color: "#8A94A1" }}>
              Hear entire conversation (92 sec)
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPlaying(!playing)}
                className="flex-none w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 cursor-pointer"
                style={{ background: featured.color || "#7C3AED" }}
              >
                {playing ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                    <rect x="1" y="1" width="3.5" height="10" rx="1" />
                    <rect x="7.5" y="1" width="3.5" height="10" rx="1" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                    <path d="M3 1.5 L10.5 6 L3 10.5 Z" />
                  </svg>
                )}
              </button>
              <div className="flex-1 flex items-center gap-[2.5px] h-9">
                {waveHeights.map((h, i) => {
                  const pct = i / waveHeights.length;
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-full transition-colors"
                      style={{
                        height: `${h}px`,
                        background: pct <= progress ? (featured.color || "#7C3AED") : "#E2E8F0",
                        opacity: pct <= progress ? 1 : 0.7,
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex-none flex items-center gap-1.5">
                <span className="text-[11px]" style={{ fontFamily: fu, color: "#94A3B8" }}>
                  0:{Math.round(progress * 92).toString().padStart(2, "0")}
                </span>
                <span className="text-[11px]" style={{ fontFamily: fu, color: "#CBD5E1" }}>
                  /
                </span>
                <span className="text-[11px]" style={{ fontFamily: fu, color: "#94A3B8" }}>
                  1:32
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center py-10 px-8"
          style={{ background: "#ffffff" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 transition-all duration-200 cursor-pointer"
            style={{
              zIndex: 30,
              opacity: hovered ? 1 : 0,
              transform: `translateY(-50%) scale(${hovered ? 1 : 0.85})`,
            }}
          >
            <ChevronLeft size={14} color="#475569" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 transition-all duration-200 cursor-pointer"
            style={{
              zIndex: 30,
              opacity: hovered ? 1 : 0,
              transform: `translateY(-50%) scale(${hovered ? 1 : 0.85})`,
            }}
          >
            <ChevronRight size={14} color="#475569" />
          </button>

          <div className="relative flex flex-col items-center" style={{ width: 220 }}>
            <div className="relative" style={{ width: 220, height: 340 }}>
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(160deg, ${list[(current + 2) % total].grad?.[0] || "#9B6EF3"}, ${list[(current + 2) % total].grad?.[1] || "#C4B5FD"})`,
                  transform: "rotate(8deg) translateY(6px) scale(0.95)",
                  transformOrigin: "bottom center",
                  zIndex: 1,
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(160deg, ${list[(current + 1) % total].grad?.[0] || "#9B6EF3"}, ${list[(current + 1) % total].grad?.[1] || "#C4B5FD"})`,
                  transform: "rotate(-6deg) translateY(3px) scale(0.97)",
                  transformOrigin: "bottom center",
                  zIndex: 2,
                  opacity: 0.65,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl flex flex-col overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${agent.grad?.[0] || "#9B6EF3"}, ${agent.grad?.[1] || "#C4B5FD"})`,
                  boxShadow: `0 20px 60px ${agent.grad?.[0] || "#9B6EF3"}60`,
                  zIndex: 3,
                }}
              >
                <div className="flex items-center justify-between px-4 pt-4">
                  {agent.active ? (
                    <span className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)", color: "white", fontFamily: fu }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                      Active
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", fontFamily: fu }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
                      Not at this stage
                    </span>
                  )}
                  <span className="text-[10px]" style={{ fontFamily: fu, color: "rgba(255,255,255,0.7)" }}>
                    {current + 1} of {total}
                  </span>
                </div>

                <div className="flex justify-center mt-4">
                  <div
                    className="rounded-full overflow-hidden flex-none"
                    style={{
                      width: 120,
                      height: 120,
                      border: "3px solid rgba(255,255,255,0.4)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                  >
                    <img src={getImgSrc(agent.img || agent.image || imgRiya)} alt={agent.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>

                <p className="text-center text-[24px] font-semibold mt-4 leading-tight text-white" style={{ fontFamily: fd }}>
                  {agent.name}
                </p>

                <div className="flex justify-center mt-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "white", fontFamily: fu }}>
                    <svg width="8" height="8" viewBox="0 0 10 10">
                      <path d="M5 0.5 L5.8 3.8 L9.5 5 L5.8 6.2 L5 9.5 L4.2 6.2 L0.5 5 L4.2 3.8 Z" fill="white" />
                    </svg>
                    {agent.role}
                  </span>
                </div>

                <p className="text-center text-[11.5px] leading-[1.55] mx-5 mt-3" style={{ fontFamily: fu, color: "rgba(255,255,255,0.8)" }}>
                  {agent.desc || agent.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
              {list.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-200 cursor-pointer"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current ? (agent.grad?.[0] || "#9B6EF3") : "#CBD5E1",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface JournalJourneyV0Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  metrics?: Array<{
    icon?: string | React.ReactNode;
    label: string;
    value: string;
  }>;
  journeyFrameTitle?: string;
  journeyFrameSubtitle?: string;
  journeyFrameImage?: any;
  momentsTitle?: string;
  moments?: Array<{
    id?: string;
    title: string;
    desc?: string;
    description?: string;
    imageSrc?: any;
  }>;
  agents?: any[];
  voicesTitle?: string;
  quotes?: Array<{
    text: string;
    author?: string;
    speaker?: string;
  }>;
}

export const JournalJourneyV0: React.FC<JournalJourneyV0Props> = ({
  eyebrow = "The journey so far",
  title = "How their journey actually unfolded.",
  description = "Months of conversations, weekend visits, changing budgets and countless trade-offs brought them to where they are today.",
  metrics = [
    { icon: "Briefcase", label: "Journey stage", value: "Actively exploring" },
    { icon: "TrendingUp", label: "Site visits", value: "11 Projects" },
    { icon: "Hourglass", label: "Timeline", value: "≤ 8 Months" },
    { icon: "IndianRupee", label: "Budget stretch", value: "₹1 Cr → ₹1.5 Cr" },
  ],
  journeyFrameTitle = "How their journey unfolded",
  journeyFrameSubtitle = "Every stage, mapped.",
  journeyFrameImage = imgFrame9,
  momentsTitle = "Moments that changed everything",
  moments = [
    { title: "The budget shift", desc: "Their ₹1 Cr dream became a ₹1.5 Cr reality as prices rose faster than their savings.", imageSrc: imgMoment1 },
    { title: "The baby deadline", desc: "With their first child arriving next year, delaying the decision was no longer an option.", imageSrc: imgMoment2 },
    { title: "The Sunday Ritual", desc: "Every Sunday meant one site visit, one Excel update, one argument and one make-up dosa.", imageSrc: imgMoment3 },
  ],
  agents: agentsFromProps = defaultAgents,
  voicesTitle = "Voices around them",
  quotes = [
    { text: "Buy a site. Land never loses value.", speaker: "Dad" },
    { text: "Find a home close to a temple and good schools.", speaker: "Mom" },
    { text: "Don't rush. Wait for ready-to-move projects.", speaker: "Friend" },
    { text: "Prices are increasing every quarter.", speaker: "Builder" },
  ],
}) => {
  return (
    <section id="section-journey" className="pt-10 pb-12">
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

      {/* Metrics strip */}
      <div
        className="bg-white border flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
      >
        {metrics.map((cell: any) => {
          const iconElement =
            typeof cell.icon === "string"
              ? getIcon(cell.icon, "Briefcase", { className: "w-4 h-4 text-[#DD5128]" })
              : cell.icon;

          return (
            <div key={cell.label} className="flex items-center gap-4 px-6 sm:px-8 py-5 flex-1">
              <span className="flex-none text-[#DD5128]">{iconElement}</span>
              <div>
                <p className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1" style={{ fontFamily: fu, color: "#8A94A1" }}>
                  {cell.label}
                </p>
                <p className="text-[17px] font-[500] leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                  {cell.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Journey SVG illustration */}
      <div
        className="mt-5 bg-white border overflow-hidden"
        style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
      >
        <div className="px-8 pt-7 pb-2">
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase" style={{ fontFamily: fu, color: "#8A94A1" }}>
            {journeyFrameTitle}
          </p>
          <h3 className="mt-1 text-[20px] font-semibold leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
            {journeyFrameSubtitle}
          </h3>
        </div>
        <div className="w-full">
          <img src={getImgSrc(journeyFrameImage || imgFrame9)} alt="How their journey unfolded" className="w-full h-auto block" />
        </div>
      </div>

      {/* Moments section */}
      <div className="mt-5">
        <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
          {momentsTitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {moments.slice(0, 3).map((m: any, idx: number) => {
            const imgSrc = getImgSrc(m.imageSrc || (idx === 0 ? imgMoment1 : idx === 1 ? imgMoment2 : imgMoment3));
            const bodyText = m.desc || m.description || "";
            return (
              <div
                key={m.title}
                className="bg-white border overflow-hidden flex flex-col"
                style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
              >
                <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                  <img src={imgSrc} alt={m.title} className="w-full h-auto object-contain rounded-lg" />
                </div>
                <div className="px-6 py-5">
                  <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                    {m.title}
                  </h4>
                  <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                    {bodyText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Agents */}
      <div className="mt-5">
        <AgentsSection agentsData={agentsFromProps} />
      </div>

      {/* Voices around them */}
      <div className="mt-5">
        <div
          className="bg-white border p-6 sm:p-8"
          style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
        >
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ fontFamily: fu, color: "#8A94A1" }}>
            {voicesTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quotes.map((q: any) => (
              <div
                key={q.speaker || q.author || q.text}
                className="rounded-xl border border-slate-100 p-6 flex flex-col justify-between gap-6"
                style={{ background: "#F8FAFC" }}
              >
                <p className="text-[18px] leading-[1.5] italic" style={{ fontFamily: fd, color: "#1E293B" }}>
                  "{q.text}"
                </p>
                <p className="text-[14px] font-semibold" style={{ fontFamily: fu, color: "#DD5128" }}>
                  — {q.speaker || q.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalJourneyV0;
