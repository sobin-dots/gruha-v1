"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export interface MomentItem {
  id: string;
  title: string;
  desc: React.ReactNode;
  imageSrc: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  x: number;
  y: number;
  width: number;
}

export interface MetricItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export interface QuoteItem {
  text: string;
  author: string;
}

export interface ChatMessage {
  sender: string;
  avatar: string;
  text: string;
  isRiya?: boolean;
}

export interface RealityCheckItem {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

export interface TimelineStep {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  tag?: string;
}

export interface JournalJourneyV3Props {
  tagline?: string;
  title: string;
  description: string;
  metrics: MetricItem[];
  roadmapTitle?: string;
  roadmapNodes: RoadmapNode[];
  timelineTitle?: string;
  timelineSteps: TimelineStep[];
  momentsTitle?: string;
  moments: MomentItem[];
  voicesTitle?: string;
  quotes: QuoteItem[];
  riyaConclusionTitle?: string;
  riyaConclusionImage?: string;
  chatMessages: ChatMessage[];
  audioLabel?: string;
  audioDurationLabel?: string;
  waveformBars?: { height: number; opacity: number }[];
  realityChecksTitle?: string;
  realityChecks: RealityCheckItem[];
}

export const JournalJourneyV3: React.FC<JournalJourneyV3Props> = ({
  tagline = "THE JOURNEY SO FAR",
  title,
  description,
  metrics,
  roadmapTitle = "How their journey actually unfolded",
  roadmapNodes,
  timelineTitle = "Where they stand today",
  timelineSteps,
  momentsTitle = "Moments that changed everything",
  moments,
  voicesTitle = "Voices around them",
  quotes = [
    { text: "Buy a site. Land never loses value.", author: "Dad" },
    { text: "Find a home close to a temple and good schools.", author: "Mom" },
    { text: "Don't rush. Wait for ready-to-move projects.", author: "Friend" },
    { text: "Prices are increasing every quarter.", author: "Builder" },
  ],
  riyaConclusionTitle = "Why Riya concluded this",
  riyaConclusionImage = "/journals/riya.png",
  chatMessages = [],
  audioLabel = "Hear entire conversation (94 sec)",
  audioDurationLabel = "1:32",
  waveformBars = [
    { height: 12, opacity: 0.4 },
    { height: 12, opacity: 0.4 },
    { height: 20, opacity: 1.0 },
    { height: 20, opacity: 1.0 },
    { height: 28, opacity: 1.0 },
    { height: 28, opacity: 1.0 },
    { height: 16, opacity: 1.0 },
    { height: 16, opacity: 1.0 },
    { height: 24, opacity: 1.0 },
    { height: 24, opacity: 1.0 },
    { height: 32, opacity: 1.0 },
    { height: 32, opacity: 1.0 },
    { height: 20, opacity: 0.6 },
    { height: 20, opacity: 0.6 },
    { height: 20, opacity: 0.6 },
    { height: 20, opacity: 0.6 },
    { height: 12, opacity: 0.4 },
    { height: 12, opacity: 0.4 },
    { height: 12, opacity: 0.4 },
    { height: 24, opacity: 0.3 },
    { height: 24, opacity: 0.3 },
  ],
  realityChecksTitle = "Reality checks along the way",
  realityChecks = [],
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="v3-section-journey" className="w-full space-y-12" aria-label="Journey timeline">
      {/* Section Head */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <p className="text-[11.5px] font-semibold tracking-[0.15em] uppercase text-[#DD5128] font-sans">
          {tagline}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#111821]">
          {title}
        </h2>
        <p className="text-sm sm:text-base font-serif text-[#59636F]">
          {description}
        </p>
      </div>

      {/* Top Metric Bar */}
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

      {/* Snake Roadmap Container */}
      <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8 overflow-hidden">
        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
          {roadmapTitle}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-4 md:hidden">
          {roadmapNodes.map((stage, idx) => {
            const isLast = idx === roadmapNodes.length - 1;

            return (
              <div key={stage.id || idx} className="relative flex items-start gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center justify-center w-9 h-9 bg-[#DD5128] text-white rounded-lg z-10 font-serif text-[13px] font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  {!isLast && (
                    <div className="w-0.5 bg-[#EFF3F7] flex-1 my-1 min-h-[30px]" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5 pt-1">
                  <h4 className="font-serif text-[17px] font-semibold text-[#111821]">
                    {stage.title}
                  </h4>
                  <p className="font-serif text-[13px] text-[#59636F]">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Snaking SVG Roadmap */}
        <div className="hidden md:block relative w-full aspect-[1000/860] min-h-[860px]">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 860"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 130 110 C 190 60, 270 190, 340 160 C 420 120, 480 180, 560 150 C 640 120, 680 140, 740 130 C 820 120, 880 190, 880 290"
              fill="none"
              stroke="#DD5128"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <path
              d="M 880 290 C 830 350, 780 390, 710 400 C 630 410, 580 420, 510 430 C 440 440, 390 440, 330 450"
              fill="none"
              stroke="#DD5128"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
            <path
              d="M 330 450 C 240 480, 190 520, 150 580 C 110 650, 230 730, 320 710 C 400 690, 460 760, 530 740"
              fill="none"
              stroke="#DD5128"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
          </svg>

          {roadmapNodes.map((stage, idx) => (
            <div
              key={stage.id || idx}
              className="absolute z-10 flex flex-col items-center pointer-events-auto"
              style={{
                left: `${(stage.x / 1000) * 100}%`,
                top: `${(stage.y / 860) * 100}%`,
                width: `${stage.width}px`,
                transform: "translate(-50%, -20px)",
              }}
            >
              {/* Clean Numeric Dot Badge (01, 02, 03...) */}
              <div className="flex items-center justify-center w-8 h-8 bg-[#DD5128] text-white rounded-lg mb-2 shadow-sm font-serif text-[13px] font-semibold shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col items-center text-center p-2.5 rounded-lg bg-white border border-[#E4E9EF] shadow-xs w-full">
                <h4 className="font-serif text-[15px] font-semibold text-[#111821]">
                  {stage.title}
                </h4>
                <p className="font-serif text-[12px] text-[#59636F] leading-tight mt-1">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Moments & Voices Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Moments Cards */}
        <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 space-y-6">
          <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] font-sans">
            {momentsTitle}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moments.map((moment) => (
              <div key={moment.id} className="p-3.5 border border-[#E4E9EF] rounded-xl bg-[#F7F9FB]">
                <div className="relative w-full h-32 rounded-lg overflow-hidden bg-white border border-[#E4E9EF] mb-3">
                  <Image
                    src={moment.imageSrc}
                    alt={moment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-serif text-[17px] font-semibold text-[#111821]">
                  {moment.title}
                </h4>
                <p className="text-[13px] leading-[1.5] text-[#59636F] mt-1 font-sans">
                  {moment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Iris Audio Conversation Box */}
        <div className="bg-[#EDEAFB] border border-[#5843D6]/20 rounded-[14px] p-6 space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#5843D6] font-sans">
              {riyaConclusionTitle}
            </span>
          </div>

          <blockquote className="font-serif italic text-[18px] leading-[1.55] text-[#241C6B]">
            "Pavan & Shruti were terrified of stretching to ₹1.8Cr, but our analysis showed their joint income growth trajectory supported it."
          </blockquote>

          {/* Equalizer Audio Player */}
          <div className="bg-white rounded-xl p-3.5 border border-[#5843D6]/20 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-[#5843D6] hover:bg-[#4532B8] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer border-none"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white text-white" />
              ) : (
                <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
              )}
            </button>

            <div className="flex-1 flex items-center gap-1 h-7">
              {waveformBars.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#5843D6] rounded-full transition-all"
                  style={{
                    height: `${bar.height}px`,
                    opacity: isPlaying ? bar.opacity : bar.opacity * 0.4,
                  }}
                />
              ))}
            </div>

            <span className="text-[12.5px] font-semibold text-[#5843D6] shrink-0 font-sans">
              {audioDurationLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Voices Around Them Section */}
      <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-6 sm:p-8">
        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A94A1] mb-6 font-sans">
          {voicesTitle}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quotes.map((quote, idx) => (
            <div key={idx} className="p-4 border border-[#E4E9EF] rounded-xl bg-[#F7F9FB] relative">
              <span className="text-[32px] font-serif text-[#DD5128] leading-none block -mb-2">“</span>
              <p className="font-serif italic text-[16px] leading-[1.5] text-[#111821]">
                {quote.text}
              </p>
              <div className="text-[12px] font-semibold text-[#DD5128] mt-3 font-sans">
                — {quote.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalJourneyV3;
