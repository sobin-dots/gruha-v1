"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  LayoutGrid,
  CalendarX,
  Car,
  ShieldCheck,
  GraduationCap,
  BadgeCheck,
  TrendingUp,
  Timer,
  Lightbulb,
  Target,
  AlertTriangle,
  Trophy,
  Sun,
} from "lucide-react";
import svgPaths from "@/imports/JournalDetailProfileAllSection/svg-h1d4o3f4wg";
import imgPavan from "@/imports/signal-2026-07-23-12-45-03-735_003.jpg";
import imgShruti from "@/imports/signal-2026-07-23-12-45-03-735_002.jpg";
import imgCover from "@/imports/ChatGPT_Image_Jul_23__2026__11_52_10_AM.png";
import imgHero from "@/imports/testy.jpg";
import imgRiya from "@/imports/signal-2026-07-23-17-18-39-504.jpg";
import imgKabir from "@/imports/signal-2026-07-23-17-32-02-937_005.jpg";
import imgAnanya from "@/imports/signal-2026-07-23-17-32-02-937_004.jpg";
import imgArjun from "@/imports/signal-2026-07-23-17-32-02-937_003.jpg";
import imgKaran from "@/imports/signal-2026-07-23-17-32-02-937_002.jpg";
import imgSharon from "@/imports/signal-2026-07-23-17-32-02-937.jpg";
import imgSearchMap from "@/imports/Container.png";
import imgMoment1 from "@/imports/1.png";
import imgMoment2 from "@/imports/2.png";
import imgMoment3 from "@/imports/3.png";
import imgClosure1 from "@/imports/1-1.png";
import imgClosure2 from "@/imports/2-1.png";
import imgClosure3 from "@/imports/4.png";
import imgStartHere1 from "@/imports/start-here-1.png";
import imgStartHere2 from "@/imports/start-here-2.png";
import imgStartHere3 from "@/imports/start-here-3.png";
import imgStartHere4 from "@/imports/start-here-4.png";

const fd = "'Newsreader', Georgia, serif";
const fu = "'Inter Tight', system-ui, sans-serif";

const getImgSrc = (img: any): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img.src) return img.src;
  return String(img);
};

// ─── Tab Nav ──────────────────────────────────────────────────────────────────
const tabs = ["Profile", "Journey", "Search", "Projects", "Learnings", "Start here"];

function TabNav({
  active,
  showBrand,
  navRef,
  navHeight,
}: {
  active: string;
  showBrand: boolean;
  navRef: RefObject<HTMLDivElement | null>;
  navHeight: number;
}) {
  const brandImgSize = Math.max(0, navHeight - 20);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-white border-t border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="flex items-center mr-4 shrink-0 overflow-hidden transition-all duration-300 ease-out"
            style={{ maxWidth: showBrand ? brandImgSize + 140 : 0, opacity: showBrand ? 1 : 0 }}
          >
            <div className="flex items-center gap-2.5 flex-none" style={{ width: brandImgSize + 140 }}>
              <img
                src={getImgSrc(imgHero)}
                alt="Pavan and Shruti"
                className="rounded-lg object-cover flex-none"
                style={{ width: brandImgSize, height: brandImgSize }}
              />
              <span
                className="text-[13px] font-semibold leading-[1.25] flex-none"
                style={{ fontFamily: fu, color: "#111821", width: 110 }}
              >
                Pavan &amp; Shruti's Journal
              </span>
            </div>
          </div>
          {tabs.map((tab) => {
            const isActive = active === tab;
            return (
              <a
                key={tab}
                href={`#section-${tab.toLowerCase().replace(" ", "-")}`}
                className="relative shrink-0 px-4 py-8 transition-colors cursor-pointer"
              >
                <span
                  className="text-[13.5px] font-semibold tracking-tight"
                  style={{ fontFamily: fu, color: isActive ? "#111821" : "#8A94A1" }}
                >
                  {tab}
                </span>
                <span
                  className="absolute left-4 right-4 -bottom-px h-[2px] rounded-full transition-opacity"
                  style={{ background: "#DD5128", opacity: isActive ? 1 : 0 }}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const icons = {
  luggage: (
    <svg width="14" height="11" fill="none" viewBox="0 0 15.2727 12.202">
      <path d={svgPaths.p1e8fb100} stroke="currentColor" strokeLinecap="round" strokeWidth="1.45" />
    </svg>
  ),
  rupee: (
    <svg width="14" height="14" fill="none" viewBox="0 0 15.0545 15.0545">
      <path d={svgPaths.p1863d100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09" />
    </svg>
  ),
  heart: (
    <svg width="14" height="13" fill="none" viewBox="0 0 16 14.5455">
      <path d={svgPaths.p18dcbb00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  ),
  trend: (
    <svg width="14" height="8" fill="none" viewBox="0 0 16 8.72727">
      <path d={svgPaths.pf9d7e70} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  ),
  hourglass: (
    <svg width="11" height="14" fill="none" viewBox="0 0 11.6364 14.5455">
      <path d={svgPaths.p2896e700} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  ),
  file: (
    <svg width="12" height="14" fill="none" viewBox="0 0 13.4545 15.6364">
      <path d={svgPaths.p285e2940} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09" />
    </svg>
  ),
};

const metrics = [
  { icon: icons.luggage, label: "Buyer profile", value: "First-timers", sub: "Young professionals", highlight: false },
  { icon: icons.rupee, label: "Their reality", value: "₹1 Cr → ₹1.5 Cr", sub: "Dream met the market", highlight: false },
  { icon: icons.heart, label: "Life stage", value: "Newly married", sub: "2 yrs · first child due", highlight: false },
  { icon: icons.trend, label: "Search stage", value: "Active explorer", sub: "11 sites visited", highlight: true },
  { icon: icons.hourglass, label: "Timeline", value: "Before the baby", sub: "Under 8 months", highlight: true },
  { icon: icons.file, label: "Transaction", value: "Under construction", sub: "RERA · primary", highlight: false },
];

const personas = [
  { img: imgPavan, name: "Pavan", age: 29, role: "Senior Engineer", tags: ["Responsible", "Practical", "Calm"] },
  { img: imgShruti, name: "Shruti", age: 28, role: "QA", tags: ["Thoughtful", "Organised", "Empathetic"] },
];

const profileStatsLabels = ["Buyer profile", "Life stage", "Search stage", "Timeline"];
const profileStats = metrics.filter((m) => profileStatsLabels.includes(m.label));

const priorities = [
  { title: "Budget friendly, but future ready", score: 9.5, why: "A wrong financial decision would follow them for years.", pct: 95 },
  { title: "Good connectivity to work", score: 9.0, why: "The daily commute should be easy and stress-free.", pct: 90 },
  { title: "Enough space for their lifestyle", score: 8.0, why: "Room to grow, work and create memories.", pct: 80 },
  { title: "Safe, family-friendly neighbourhood", score: 7.5, why: "A secure environment for their child to grow up in.", pct: 75 },
];

function PrioritiesPanel() {
  return (
    <div
      className="bg-white border p-5"
      style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
    >
      <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
        Top priorities right now
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {priorities.map((p) => (
          <div
            key={p.title}
            className="flex flex-col justify-between border p-4"
            style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 3px rgba(17,24,33,.04)" }}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-[15px] font-semibold leading-[1.25]" style={{ fontFamily: fd, color: "#111821" }}>
                  {p.title}
                </h4>
                <span className="text-[13px] font-semibold flex-none pt-0.5" style={{ fontFamily: fu, color: "#DD5128" }}>
                  {p.score}
                </span>
              </div>
              <p className="text-[12.5px] leading-[1.5]" style={{ fontFamily: fu, color: "#59636F" }}>
                {p.why}
              </p>
            </div>
            <div className="mt-4 h-[3px] rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: "#DD5128", opacity: 0.4 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileHeroWidget() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {personas.map((p) => (
          <div
            key={p.name}
            className="bg-white border rounded-2xl overflow-hidden flex items-center gap-5 p-4"
            style={{ borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)", minHeight: 180 }}
          >
            <img src={getImgSrc(p.img)} alt={p.name} className="h-28 w-28 rounded-xl object-cover flex-none" />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                {p.name} ({p.age})
              </p>
              <p className="mt-1 text-[12.5px]" style={{ fontFamily: fu, color: "#6B7684" }}>
                {p.role}
              </p>
              <p className="mt-3 text-[12.5px] leading-[1.6]" style={{ fontFamily: fu, color: "#8A94A1" }}>
                {p.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-white border rounded-2xl p-6"
        style={{ borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
      >
        <p className="text-[19px] font-semibold" style={{ fontFamily: fd, color: "#111821" }}>
          Shared vision
        </p>
        <p className="mt-3 text-[13.5px] leading-[1.6]" style={{ fontFamily: fu, color: "#6B7684" }}>
          Create a safe, comfortable home before their baby arrives. A place where every milestone begins with a sense of belonging, from bringing their newborn home for the first time to celebrating birthdays, festivals and everyday moments together.
        </p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, heading, sub }: { eyebrow: string; heading: string; sub: string }) {
  return (
    <div className="text-left mb-7">
      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: fu, color: "#DD5128" }}>
        {eyebrow}
      </p>
      <h2 className="mt-2 text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em]" style={{ fontFamily: fd, color: "#111821" }}>
        {heading}
      </h2>
      <p className="mt-3 text-[17px] leading-[1.55]" style={{ fontFamily: fd, color: "#59636F" }}>
        {sub}
      </p>
    </div>
  );
}

// ─── AI Agents ────────────────────────────────────────────────────────────────
const agents = [
  {
    name: "Riya",
    role: "AI Real Estate Companion",
    desc: "Understands your needs, guides you with clarity, and helps you make the right move — at every stage of your search.",
    color: "#7C3AED",
    bg: "#EDE9FE",
    grad: ["#9B6EF3", "#C4B5FD"],
    initials: "R",
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
    bg: "#E0F2FE",
    grad: ["#3B82F6", "#93C5FD"],
    initials: "K",
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
    bg: "#D1FAE5",
    grad: ["#10B981", "#6EE7B7"],
    initials: "An",
    img: imgAnanya,
    quote: "Three of your shortlisted units had the kitchen facing north with no cross-ventilation. On paper they looked identical to the others. I flagged them before you fell in love with the view.",
    quoteLabel: "Why Ananya flagged the layout",
  },
  {
    name: "Arjun",
    role: "Project Analyst",
    desc: "Stress-tests builder credibility, delivery timelines, and project-level risks before you commit — because paperwork matters as much as square feet.",
    color: "#B45309",
    bg: "#FEF3C7",
    grad: ["#F59E0B", "#FCD34D"],
    initials: "Ar",
    img: imgArjun,
    quote: "Two of the 11 projects you visited had pending OC approvals. I flagged them in real-time during your site visits, so you never made a shortlist decision on incomplete documentation.",
    quoteLabel: "Why Arjun raised a flag",
  },
  {
    name: "Karan",
    role: "Location Explorer",
    desc: "Maps micro-market dynamics, commute realities, school catchments, and neighbourhood trajectories over 5 years.",
    color: "#DB2777",
    bg: "#FCE7F3",
    grad: ["#F43F5E", "#FDA4AF"],
    initials: "Ka",
    img: imgKaran,
    quote: "Whitefield scored highest on commute but lowest on school density within 2 km. Sarjapur flipped that equation. I mapped 11 micro-markets so you could compare what actually mattered at the building stage of life.",
    quoteLabel: "Why Karan mapped this area",
  },
  {
    name: "Sharon",
    role: "Lifestyle Curator",
    desc: "Matches the neighbourhood's social fabric — cafés, parks, communities, weekend trails — to how you actually live, not how you wish you did.",
    color: "#0F766E",
    bg: "#CCFBF1",
    grad: ["#14B8A6", "#5EEAD4"],
    initials: "Sh",
    img: imgSharon,
    quote: "You mentioned weekend farmers markets and a jogging trail twice each. I cross-referenced both against walkability scores and found only two projects where your Sunday routine would survive the move.",
    quoteLabel: "Why Sharon curated this shortlist",
  },
];

const waveHeights = [4, 6, 10, 14, 18, 22, 26, 28, 30, 28, 26, 22, 20, 24, 28, 30, 26, 20, 16, 18, 22, 26, 28, 24, 20, 16, 12, 10, 8, 6];

function AgentsSection({ featuredIndex = 0, showAudio = true }: { featuredIndex?: number; showAudio?: boolean }) {
  const [current, setCurrent] = useState(featuredIndex);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress] = useState(0.35);
  const total = agents.length;
  const agent = agents[current];
  const featured = agents[featuredIndex];

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div
      className="mt-5 border overflow-hidden"
      style={{ borderRadius: 14, borderColor: "#E4E9EF", background: "#ffffff", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
        {/* Left: insight + audio */}
        <div className="px-6 lg:px-10 py-8 lg:py-10 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-slate-100">
          <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase" style={{ fontFamily: fu, color: "#8A94A1" }}>
            AI agents on this journey
          </p>
          <div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-3">
              <path d="M14 2 L15.5 11.5 L25 14 L15.5 16.5 L14 26 L12.5 16.5 L3 14 L12.5 11.5 Z" stroke={featured.color} strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M22 4 L22.7 7.3 L26 8 L22.7 8.7 L22 12 L21.3 8.7 L18 8 L21.3 7.3 Z" stroke={featured.color} strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <p className="text-[13px] font-semibold" style={{ fontFamily: fu, color: featured.color }}>
              {featured.quoteLabel}
            </p>
          </div>

          <blockquote className="text-[17px] leading-[1.65]" style={{ fontFamily: fd, color: "#1E293B" }}>
            "{featured.quote}"
          </blockquote>

          {showAudio && (
            <div>
              <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ fontFamily: fu, color: "#8A94A1" }}>
                Hear entire conversation (92 sec)
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPlaying(!playing)}
                  className="flex-none w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ background: featured.color }}
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
                          background: pct <= progress ? featured.color : "#E2E8F0",
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
          )}
        </div>

        {/* Right: Carousel cards */}
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
                  background: `linear-gradient(160deg, ${agents[(current + 2) % total].grad[0]}, ${agents[(current + 2) % total].grad[1]})`,
                  transform: "rotate(8deg) translateY(6px) scale(0.95)",
                  transformOrigin: "bottom center",
                  zIndex: 1,
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(160deg, ${agents[(current + 1) % total].grad[0]}, ${agents[(current + 1) % total].grad[1]})`,
                  transform: "rotate(-6deg) translateY(3px) scale(0.97)",
                  transformOrigin: "bottom center",
                  zIndex: 2,
                  opacity: 0.65,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl flex flex-col overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${agent.grad[0]}, ${agent.grad[1]})`,
                  boxShadow: `0 20px 60px ${agent.grad[0]}60`,
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
                    <img src={getImgSrc(agent.img)} alt={agent.name} className="w-full h-full object-cover object-top" />
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
                  {agent.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
              {agents.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-200 cursor-pointer"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current ? agent.grad[0] : "#CBD5E1",
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

// ─── Main Journal Page V0 Component ───────────────────────────────────────────
export default function JournalPageV0({ journalData }: { journalData?: any }) {
  const [activeTab, setActiveTab] = useState("Profile");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const heroImgWrapRef = useRef<HTMLDivElement>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [showNavBrand, setShowNavBrand] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(tab);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const measure = () => setNavBarHeight(tabNavRef.current?.getBoundingClientRect().height ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = heroImgWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavBrand(!entry.isIntersecting),
      { rootMargin: `-${navBarHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [navBarHeight]);

  const title = journalData?.article?.title || "The Sixteenth Floor\nDream Journal.";
  const description = journalData?.article?.description || "The story of Pavan & Shruti Kalsi's first home purchase journey in Bengaluru — a young couple navigating budget, fear, and a future built together.";
  const learnings = journalData?.article?.learnings || [
    { text: "Stretch your budget without regret" },
    { text: "Decide between ready vs under construction" },
    { text: "Manage home buying before becoming parents" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F6F9]" style={{ fontFamily: fu }}>
      {/* ── Page Cover ── */}
      <div className="bg-white">
        <div className="max-w-[1120px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 items-stretch">
          <div ref={heroImgWrapRef} className="relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-full">
            <img src={getImgSrc(imgHero)} alt="Pavan and Shruti" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.05] tracking-[-0.02em] whitespace-pre-line" style={{ fontFamily: fd, color: "#111821" }}>
              {title}
            </h1>

            <p className="text-[16px] leading-[1.6]" style={{ fontFamily: fu, color: "#59636F", maxWidth: 520 }}>
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mt-2">
              <div>
                <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3" style={{ fontFamily: fu, color: "#8A94A1" }}>
                  What you'll learn from this journey
                </p>
                <div className="flex flex-col gap-2">
                  {learnings.map((item: any, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[11px] font-semibold flex-none mt-0.5" style={{ fontFamily: fu, color: "#DD5128" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px]" style={{ fontFamily: fu, color: "#374151" }}>
                        {typeof item === "string" ? item : item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-3 invisible hidden sm:block" aria-hidden="true">
                  Spacer
                </p>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 text-[14px] font-semibold rounded-xl text-white transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ background: "#DD5128", fontFamily: fu }}
                >
                  Start your journal
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 text-[14px] font-semibold rounded-xl border transition-colors hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: "#E4E9EF", fontFamily: fu, color: "#111821" }}
                >
                  Adapt this journal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TabNav active={activeTab} showBrand={showNavBrand} navRef={tabNavRef} navHeight={navBarHeight} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div className="min-w-0">
            {/* Profile section */}
            <section
              id="section-profile"
              ref={(el) => {
                sectionRefs.current["Profile"] = el;
              }}
              className="pt-16 pb-20"
            >
              <SectionHeader
                eyebrow="About"
                heading="Who they are"
                sub="Getting to know Pavan & Shruti — their world, their dreams, and what matters most."
              />

              <div
                className="mb-5 bg-white border flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
                style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
              >
                {profileStats.map((cell) => {
                  const isSearchStage = cell.label === "Search stage";
                  return (
                    <div key={cell.label} className="flex items-center gap-4 px-6 sm:px-8 py-5 flex-1">
                      <span className="flex-none" style={{ color: isSearchStage ? "#DD5128" : "#8A94A1" }}>
                        {cell.icon}
                      </span>
                      <div>
                        <p className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          {cell.label}
                        </p>
                        <p className="text-[17px] font-[500] leading-tight" style={{ fontFamily: fd, color: isSearchStage ? "#DD5128" : "#111821" }}>
                          {cell.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <ProfileHeroWidget />

              <div className="mt-5">
                <PrioritiesPanel />
              </div>
            </section>

            {/* Journey section */}
            <section
              id="section-journey"
              ref={(el) => {
                sectionRefs.current["Journey"] = el;
              }}
              className="pt-10 pb-12"
            >
              <SectionHeader
                eyebrow="The journey so far"
                heading="How their journey actually unfolded."
                sub="Months of conversations, weekend visits, changing budgets and countless trade-offs brought them to where they are today."
              />

              <div
                className="bg-white border flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
                style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
              >
                {[
                  { icon: icons.luggage, label: "Journey stage", value: "Actively exploring" },
                  { icon: icons.trend, label: "Site visits", value: "11 Projects" },
                  { icon: icons.hourglass, label: "Timeline", value: "≤ 8 Months" },
                  { icon: icons.rupee, label: "Budget stretch", value: "₹1 Cr → ₹1.5 Cr" },
                ].map((cell) => (
                  <div key={cell.label} className="flex items-center gap-4 px-6 sm:px-8 py-5 flex-1">
                    <span className="flex-none text-[#DD5128]">{cell.icon}</span>
                    <div>
                      <p className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1" style={{ fontFamily: fu, color: "#8A94A1" }}>
                        {cell.label}
                      </p>
                      <p className="text-[17px] font-[500] leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                        {cell.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Moments that changed everything */}
              <div className="mt-5">
                <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
                  Moments that changed everything
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border overflow-hidden flex flex-col" style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}>
                    <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                      <img src={getImgSrc(imgMoment1)} alt="The budget shift" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                        01
                      </p>
                      <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                        The budget shift
                      </h4>
                      <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                        Their ₹1 Cr dream became a ₹1.5 Cr reality as prices rose faster than their savings.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border overflow-hidden flex flex-col" style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}>
                    <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                      <img src={getImgSrc(imgMoment2)} alt="The baby deadline" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                        02
                      </p>
                      <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                        The baby deadline
                      </h4>
                      <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                        With their first child arriving next year, delaying the decision was no longer an option.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border overflow-hidden flex flex-col" style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}>
                    <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                      <img src={getImgSrc(imgMoment3)} alt="The Sunday Ritual" className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                        03
                      </p>
                      <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                        The Sunday Ritual
                      </h4>
                      <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                        Every Sunday meant one site visit, one Excel update, one argument and one make-up dosa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Agents */}
              <div className="mt-5">
                <AgentsSection />
              </div>

              {/* Voices Around Them */}
              <div className="mt-5">
                <div
                  className="bg-white border p-6 sm:p-8"
                  style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
                >
                  <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-6" style={{ fontFamily: fu, color: "#8A94A1" }}>
                    Voices around them
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { quote: "Buy a site. Land never loses value.", speaker: "Dad" },
                      { quote: "Find a home close to a temple and good schools.", speaker: "Mom" },
                      { quote: "Don't rush. Wait for ready-to-move projects.", speaker: "Friend" },
                      { quote: "Prices are increasing every quarter.", speaker: "Builder" },
                    ].map(({ quote, speaker }) => (
                      <div
                        key={speaker}
                        className="rounded-xl border border-slate-100 p-6 flex flex-col justify-between gap-6"
                        style={{ background: "#F8FAFC" }}
                      >
                        <p className="text-[18px] leading-[1.5] italic" style={{ fontFamily: fd, color: "#1E293B" }}>
                          "{quote}"
                        </p>
                        <p className="text-[14px] font-semibold" style={{ fontFamily: fu, color: "#DD5128" }}>
                          — {speaker}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Search section */}
            <section
              id="section-search"
              ref={(el) => {
                sectionRefs.current["Search"] = el;
              }}
              className="pt-10 pb-12"
            >
              <SectionHeader
                eyebrow="The Search"
                heading="Where they looked and what they found."
                sub="From defining non-negotiables to comparing communities and projects, every search brought them one step closer to understanding what truly mattered."
              />

              <div
                className="bg-white border flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
                style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
              >
                {[
                  { icon: <MapPin size={14} />, label: "Location Preference", value: "Sarjapur" },
                  { icon: <LayoutGrid size={14} />, label: "Home Configuration", value: "2.5 BHK" },
                  { icon: <CalendarX size={14} />, label: "Sundays Sacrificed", value: "5 Sundays" },
                  { icon: <Car size={14} />, label: "Lost to Traffic", value: "20+ Hours" },
                ].map((cell) => (
                  <div key={cell.label} className="flex items-center gap-4 px-6 sm:px-8 py-5 flex-1">
                    <span className="flex-none text-[#DD5128]">{cell.icon}</span>
                    <div>
                      <p className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1" style={{ fontFamily: fu, color: "#8A94A1" }}>
                        {cell.label}
                      </p>
                      <p className="text-[17px] font-[500] leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                        {cell.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4 mt-5" style={{ fontFamily: fu, color: "#8A94A1" }}>
                Areas they explored
              </p>

              {/* Search map */}
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ height: 430, boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 12px 32px rgba(17,24,33,.10)" }}
              >
                <img src={getImgSrc(imgSearchMap)} alt="Search corridors map" className="absolute inset-0 w-full h-full object-cover object-center" />

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 460" preserveAspectRatio="none">
                  <ellipse cx="210" cy="265" rx="95" ry="65" fill="#3B82F6" fillOpacity="0.13" />
                  <ellipse cx="210" cy="265" rx="95" ry="65" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />
                  <ellipse cx="440" cy="390" rx="100" ry="55" fill="#10B981" fillOpacity="0.13" />
                  <ellipse cx="440" cy="390" rx="100" ry="55" fill="none" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />
                  <ellipse cx="760" cy="320" rx="115" ry="65" fill="#DD5128" fillOpacity="0.15" />
                  <ellipse cx="760" cy="320" rx="115" ry="65" fill="none" stroke="#DD5128" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5 4" />
                </svg>

                <div className="absolute" style={{ left: "8%", top: "14%" }}>
                  <div
                    className="w-[180px] sm:w-[190px] rounded-xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
                  >
                    <div className="h-[75px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1625019401404-421b2de1b0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80"
                        alt="Hosa Road"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="text-[13px] font-semibold leading-tight mb-0.5" style={{ fontFamily: fd, color: "#111821" }}>
                        Hosa Road
                      </p>
                      <p className="text-[11px] leading-[1.45] mb-2" style={{ fontFamily: fu, color: "#59636F" }}>
                        Good connectivity &amp; better value
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: "#3B82F6" }} />
                        <span className="text-[10px] font-semibold" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          3 Projects · 2 Visits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute" style={{ right: "10%", top: "10%" }}>
                  <div
                    className="w-[200px] sm:w-[215px] rounded-xl overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.96)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 6px 28px rgba(221,81,40,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                      outline: "1.5px solid rgba(221,81,40,0.25)",
                    }}
                  >
                    <div className="h-[85px] overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1627306036351-036986f292a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80"
                        alt="Outer Sarjapur Road"
                        className="w-full h-full object-cover"
                      />
                      <span
                        className="absolute top-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "#DD5128", color: "white", fontFamily: fu, letterSpacing: "0.08em" }}
                      >
                        TOP CHOICE
                      </span>
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="text-[13px] font-semibold leading-tight mb-0.5" style={{ fontFamily: fd, color: "#111821" }}>
                        Outer Sarjapur Road
                      </p>
                      <p className="text-[11px] leading-[1.45] mb-2" style={{ fontFamily: fu, color: "#59636F" }}>
                        Strongest match on builder trust
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-none" style={{ background: "#DD5128" }} />
                        <span className="text-[10px] font-semibold" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          5 Projects · 4 Visits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Cost of Searching */}
              <div className="mt-14">
                <p className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ fontFamily: fu, color: "#8A94A1" }}>
                  The Cost of Searching
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { icon: <CalendarX size={16} />, value: "11 months", label: "Total duration" },
                    { icon: <LayoutGrid size={16} />, value: "47 spreadsheets", label: "Tabs, models & comparisons" },
                    { icon: <MapPin size={16} />, value: "18 site visits", label: "Across 3 corridors" },
                    { icon: <Sun size={16} />, value: "5 Sundays", label: "Lost to research marathons" },
                    { icon: <Car size={16} />, value: "20 traffic hours", label: "Whitefield ↔ Sarjapur loops" },
                    { icon: <TrendingUp size={16} />, value: "₹35L appreciation", label: "Missed while deciding" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white border flex items-center gap-4 px-5 py-6"
                      style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
                    >
                      <span className="flex-none" style={{ color: "#DD5128" }}>
                        {stat.icon}
                      </span>
                      <div>
                        <p className="text-[17px] font-[500] leading-tight" style={{ fontFamily: fd, color: "#111821" }}>
                          {stat.value}
                        </p>
                        <p className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mt-0.5" style={{ fontFamily: fu, color: "#8A94A1" }}>
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[24px] sm:text-[26px] leading-[1.35] italic text-center" style={{ fontFamily: fd, color: "rgba(17,24,33,0.5)" }}>
                  "Not just time. It was the cost of waiting."
                </p>
              </div>
            </section>

            {/* Learnings section */}
            <section
              id="section-learnings"
              ref={(el) => {
                sectionRefs.current["Learnings"] = el;
              }}
              className="pt-10 pb-12"
            >
              <SectionHeader
                eyebrow="Learnings"
                heading="What eleven months of analysis taught him."
                sub="Not every lesson was about the property. Some were about the spreadsheet, and what it was really measuring."
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { img: imgClosure1, title: "Markets don't wait.", body: "Prices rose ₹35–55L in two years. Starting earlier would have unlocked far more flexibility." },
                  { img: imgClosure2, title: "Shortlists beat browsing.", body: "More options didn't help. Focusing on a few well-matched communities made decisions easier." },
                  { img: imgClosure3, title: "Buy for tomorrow.", body: "Becoming parents shifted everything. Schools, hospitals, and safety beat luxury finishes." },
                ].map(({ img, title, body }) => (
                  <div
                    key={title}
                    className="bg-white border overflow-hidden flex flex-col"
                    style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
                  >
                    <div className="h-[180px] overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                      <img src={getImgSrc(img)} alt={title} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="px-6 py-5">
                      <h4 className="text-[19px] leading-tight mb-2" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                        {title}
                      </h4>
                      <p className="text-[13px] leading-[1.6]" style={{ fontFamily: fu, color: "#59636F" }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Start Here section */}
            <section
              id="section-start-here"
              ref={(el) => {
                sectionRefs.current["Start here"] = el;
              }}
              className="pt-10 pb-32"
            >
              <SectionHeader eyebrow="Start Here" heading="What if this journal was about you?" sub="Every home-buying journey leaves behind lessons. Yours can be captured the same way — as it happens, not after." />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {[
                  { num: "01", title: "You share", body: "Your plans, family needs, lifestyle, budget and expectations.", img: imgStartHere1 },
                  { num: "02", title: "Riya listens", body: "She understands your priorities, asks meaningful questions and discovers what truly matters to you.", highlight: true, img: imgStartHere2 },
                  { num: "03", title: "Journal created", body: "Your conversations become a personalised home-buying journal with insights and recommendations.", img: imgStartHere3 },
                  { num: "04", title: "Better matches", body: "You receive project suggestions that fit your priorities, not just your filters.", img: imgStartHere4 },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="bg-white border overflow-hidden flex flex-col"
                    style={{
                      borderRadius: 14,
                      borderColor: step.highlight ? "#C4B5FD" : "#E4E9EF",
                      boxShadow: step.highlight
                        ? "0 0 0 1px rgba(124,58,237,0.12), 0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)"
                        : "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)",
                      background: step.highlight ? "linear-gradient(135deg, #F8F6FE 0%, #FFFFFF 100%)" : undefined,
                    }}
                  >
                    <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                      <img src={getImgSrc(step.img)} alt={step.title} className="w-full h-auto object-contain rounded-lg" />
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-[11px] font-semibold mb-1" style={{ fontFamily: fu, color: "#DD5128" }}>
                        {step.num}
                      </p>
                      <h4 className="text-[16px] mb-1.5" style={{ fontFamily: fd, color: "#111821", fontWeight: 500 }}>
                        {step.title}
                      </h4>
                      <p className="text-[13px] leading-[1.55]" style={{ fontFamily: fu, color: "#59636F" }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky CTA sidebar */}
          <div className="hidden lg:block">
            <div className="invisible mb-7" aria-hidden="true">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase">About</p>
              <h2 className="mt-2 text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em]">Who they are</h2>
              <p className="mt-3 text-[17px] leading-[1.55]">Getting to know Pavan &amp; Shruti — their world, their dreams, and what matters most.</p>
            </div>
            <div className="sticky" style={{ top: navBarHeight + 24 }}>
              <div
                className="border overflow-hidden"
                style={{ borderRadius: 14, borderColor: "#E4E9EF", boxShadow: "0 1px 2px rgba(17,24,33,.04), 0 8px 24px rgba(17,24,33,.05)" }}
              >
                <div
                  className="relative flex items-center justify-center pt-8 pb-6 px-6 overflow-hidden"
                  style={{ background: "linear-gradient(160deg, #9B6EF3, #C4B5FD)" }}
                >
                  <div
                    className="rounded-full overflow-hidden flex-none relative z-10"
                    style={{ width: 64, height: 64, border: "3px solid rgba(255,255,255,0.5)", boxShadow: "0 8px 20px rgba(0,0,0,0.25)" }}
                  >
                    <img src={getImgSrc(imgRiya)} alt="Riya" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="bg-white px-6 py-6">
                  <h3 className="text-[17px] font-semibold leading-snug mb-2" style={{ fontFamily: fd, color: "#111821" }}>
                    Ready to write your story?
                  </h3>
                  <p className="text-[13px] leading-[1.6] mb-5" style={{ fontFamily: fu, color: "#59636F" }}>
                    Let Riya build a personalised journal that guides you toward the right home.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <button
                      type="button"
                      className="w-full px-4 py-3.5 text-[13.5px] font-semibold rounded-xl text-white transition-opacity hover:opacity-90 cursor-pointer"
                      style={{ background: "#DD5128", fontFamily: fu }}
                    >
                      Start your journal
                    </button>
                    <button
                      type="button"
                      className="w-full px-4 py-3.5 text-[13.5px] font-semibold rounded-xl border transition-colors hover:bg-slate-50 cursor-pointer"
                      style={{ borderColor: "#E4E9EF", fontFamily: fu, color: "#111821" }}
                    >
                      Adapt this journal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
