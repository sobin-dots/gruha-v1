"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import AgentCardSlider, { AgentCardItem } from "./AgentCardSlider";

/* ── Type Definitions ────────────────────────────────────────────────────── */

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
  x: number; // Viewbox X (0 to 1000)
  y: number; // Viewbox Y (0 to 800)
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

export interface JournalJourneyV4Props {
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
  audioSrc?: string;
  waveformBars?: { height: number; opacity: number }[];
  realityChecksTitle?: string;
  realityChecks: RealityCheckItem[];
  agentCards?: AgentCardItem[];
  agentCardsTitle?: string;
}

/* ── Audio Player Sub-Component ──────────────────────────────────────────── */

export interface AudioPlayerProps {
  audioLabel?: string;
  audioSrc?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioLabel = "HEAR ENTIRE CONVERSATION",
  audioSrc = "https://samplelib.com/mp3/sample-3s.mp3",
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(92);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Audio playback notice:", err);
            setIsPlaying(true);
          });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isNaN(audioRef.current.currentTime)) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
      setDuration(Math.round(audioRef.current.duration));
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        if (audioRef.current && !audioRef.current.paused && !isNaN(audioRef.current.currentTime)) {
          setCurrentTime(audioRef.current.currentTime);
          if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
            setDuration(Math.round(audioRef.current.duration));
          }
        } else if (isPlaying) {
          setCurrentTime((prev) => {
            const next = prev + 0.25;
            const maxDur = duration > 0 ? duration : 92;
            if (next >= maxDur) {
              setIsPlaying(false);
              return 0;
            }
            return next;
          });
        }
      }, 250);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration]);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progressRatio = duration > 0 ? currentTime / duration : 0;

  const baseWaveform = [
    12, 14, 18, 22, 26, 22, 28, 24, 20, 16, 24, 28, 22, 18, 14, 12, 16, 20, 24, 18, 14, 10, 14, 18, 22
  ];
  const totalBars = baseWaveform.length;
  const activeBarIndex = Math.floor(progressRatio * totalBars);

  const handleBarClick = (index: number) => {
    const maxDur = duration > 0 ? duration : 92;
    const targetTime = (index / totalBars) * maxDur;
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = targetTime;
      } catch (e) {
        // Fallback for unbuffered seek
      }
    }
    setCurrentTime(targetTime);
  };

  return (
    <div className="pt-4 border-t border-slate-100/80 space-y-3">
      <audio
        ref={audioRef}
        src={audioSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="auto"
      />

      <p
        className="text-[9.5px] font-semibold tracking-[0.14em] uppercase"
        style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
      >
        {audioLabel} {duration > 0 ? `(${Math.round(duration)} SEC)` : "(92 SEC)"}
      </p>

      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors flex items-center justify-center shrink-0 border-none cursor-pointer shadow-md text-white"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-white text-white" />
          ) : (
            <Play className="w-4 h-4 fill-white text-white translate-x-[1px]" />
          )}
        </button>

        {/* Dynamic Waveform Visualizer */}
        <div className="flex items-center gap-[3px] flex-1 max-w-[280px] h-8 cursor-pointer select-none">
          {baseWaveform.map((height, idx) => {
            const isActive = idx <= activeBarIndex;
            const barHeight = isPlaying && isActive
              ? Math.min(28, Math.max(8, height + Math.sin(currentTime * 8 + idx) * 5))
              : height;

            return (
              <div
                key={idx}
                onClick={() => handleBarClick(idx)}
                className={`flex-1 rounded-full transition-all duration-150 hover:opacity-80 ${isActive ? "bg-[#8B5CF6]" : "bg-[#EBE9FE]"
                  }`}
                style={{ height: `${barHeight}px` }}
              />
            );
          })}
        </div>

        {/* Time Display */}
        <span className="text-[12px] font-medium text-slate-400 shrink-0 font-inter min-w-[70px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

/* ── Component ──────────────────────────────────────────────────────────── */

export const JournalJourneyV4: React.FC<JournalJourneyV4Props> = ({
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
  quotes,
  riyaConclusionTitle = "Why Riya concluded this",
  riyaConclusionImage = "/journals/riya.png",
  chatMessages,
  audioLabel = "Hear entire conversation (94 sec)",
  audioDurationLabel = "1:32",
  audioSrc,
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
  realityChecks,
  agentCards,
  agentCardsTitle = "AI ASSISTANTS & ADVISORS",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="journey" className="w-full text-slate-900">
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
            className="mt-3 text-[17px] leading-[1.55]"
            style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(89, 99, 111)" }}
          >
            {description}
          </p>
        </div>

        {/* ── Metrics Bar ─────────────────────────────────────────────── */}
        <div
          className="w-full bg-white rounded-2xl border border-slate-100 flex divide-x divide-slate-100"
          style={{ boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.06) 0px 8px 24px" }}
        >
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="flex items-center gap-4 px-8 py-5 flex-1">
                <span className="flex-none text-[#DD5128]">
                  <Icon className="w-[14px] h-[14px]" />
                </span>
                <div>
                  <p
                    className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1"
                    style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
                  >
                    {metric.label}
                  </p>
                  <p
                    className="text-[17px] font-[500] leading-tight"
                    style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
                  >
                    {metric.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Snake Roadmap ────────────────────────────────────────────── */}
        <div className="w-full border border-[#F1F5F9] rounded-[24px] bg-white overflow-hidden">
          <div className="px-8 pt-7 pb-2">
            <p
              className="text-[9.5px] font-semibold tracking-[0.14em] uppercase"
              style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
            >
              How their journey unfolded
            </p>
            <h3
              className="mt-1 text-[20px] font-semibold leading-tight"
              style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
            >
              {roadmapTitle}
            </h3>
          </div>

          {/* MOBILE ROADMAP */}
          <div className="flex flex-col gap-6 md:hidden">
            {roadmapNodes.map((stage, idx) => {
              const Icon = stage.icon;
              const isLast = idx === roadmapNodes.length - 1;

              return (
                <div key={stage.id} className="relative flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="flex items-center justify-center w-[52px] h-[52px] bg-[#F1F5F9] rounded-[18px] z-10">
                      <Icon className="w-[24px] h-[24px] text-[#475569]" strokeWidth={1.8} />
                    </div>
                    {!isLast && (
                      <div className="w-[2px] bg-slate-200 flex-1 my-2 min-h-[36px]" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <h4 className="font-semibold text-[15px] leading-[20px] text-[#334155] font-inter">
                      {stage.title}
                    </h4>
                    <p className="font-medium text-[13px] leading-[18px] text-[#64748B] font-inter">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP ROADMAP — SVG Snaking Path */}
          <div className=" md:block relative w-full aspect-[4/3] h-auto max-h-[1220px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 800"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrowhead-v4"
                  markerWidth="7"
                  markerHeight="7"
                  refX="5"
                  refY="3.5"
                  orient="auto"
                >
                  <path
                    d="M 1 1 L 6 3.5 L 1 6"
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              {/* Main Path: Top Row */}
              <path
                d="M 130 110 C 190 60, 270 190, 340 160 C 420 120, 480 180, 560 150 C 640 120, 680 140, 740 130 C 820 120, 880 190, 880 290"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* Loop under Budget Shock */}
              <path
                d="M 880 290 C 800 370, 860 520, 930 450 C 980 400, 970 330, 950 335"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                markerEnd="url(#arrowhead-v4)"
              />

              {/* Path: Budget Shock area to Back to Research */}
              <path
                d="M 880 290 C 830 350, 780 390, 710 400 C 630 410, 580 420, 510 430 C 440 440, 390 440, 330 450"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* Teardrop Loop above Back to Research */}
              <path
                d="M 330 450 C 270 370, 320 340, 345 380 C 355 400, 348 415, 345 422"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                markerEnd="url(#arrowhead-v4)"
              />

              {/* Path: Back to Research to Current Position */}
              <path
                d="M 330 450 C 240 480, 190 520, 150 580 C 110 650, 230 730, 320 710 C 400 690, 460 760, 530 740"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>

            {roadmapNodes.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="absolute z-10 flex flex-col items-center pointer-events-auto"
                  style={{
                    left: `${(stage.x / 1000) * 100}%`,
                    top: `${(stage.y / 800) * 100}%`,
                    width: `${stage.width}px`,
                    transform: "translate(-50%, -27px)",
                  }}
                >
                  <div
                    className="flex items-center justify-center w-[54px] h-[54px] bg-[#F1F5F9] rounded-[18px] mb-2 shrink-0 transition-transform duration-200 hover:scale-105"
                    style={{ boxShadow: "0 0 0 8px #ffffff" }}
                  >
                    <Icon className="w-[26px] h-[26px] text-[#475569]" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col items-center text-center gap-0.5 w-full">
                    <h4 className="font-semibold text-[14px] leading-[18px] text-[#334155] font-inter">
                      {stage.title}
                    </h4>
                    <p className="font-medium text-[13px] leading-[17px] text-[#64748B] font-inter">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Moments & Voices Grid ────────────────────────────────────── */}
        <div className="w-full space-y-6">

          {/* Moments Cards */}
          {moments.length > 0 && (
            <div className="mt-5">
              <p
                className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4"
                style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
              >
                {momentsTitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {moments.slice(0, 3).map((moment, idx) => (
                  <div
                    key={moment.id}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col"
                    style={{ boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.06) 0px 8px 24px" }}
                  >
                    {/* Image area */}
                    <div className="flex-1 flex items-center justify-center pt-5 px-5 bg-slate-50/60">
                      <Image
                        src={moment.imageSrc}
                        alt={moment.title}
                        width={500}
                        height={350}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    {/* Text area */}
                    <div className="px-6 py-5">
                      <p
                        className="text-[11px] font-semibold mb-1"
                        style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(221, 81, 40)" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h4
                        className="text-[16px] font-semibold mb-1.5"
                        style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(17, 24, 33)" }}
                      >
                        {moment.title}
                      </h4>
                      <p
                        className="text-[13px] leading-[1.55]"
                        style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(89, 99, 111)" }}
                      >
                        {moment.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Where They Stand Today */}
          {timelineSteps.length > 0 && (
            <div className="w-full border border-[#F1F5F9] rounded-[24px] bg-white p-6 space-y-6 overflow-hidden">
              <h3 className="text-[16px] leading-[19px] font-semibold text-[#334155] font-inter">
                {timelineTitle}
              </h3>

              <div className="relative flex items-center justify-between w-full min-h-[85px] overflow-x-auto pb-4 pt-8 scrollbar-none">
                {timelineSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isLast = index === timelineSteps.length - 1;

                  return (
                    <React.Fragment key={step.id}>
                      {/* Step Item */}
                      <div className="relative flex flex-col items-center gap-3 min-w-[75px] shrink-0 z-10">

                        {/* Tooltip Active Tag */}
                        {step.tag && (
                          <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                            <div className="bg-black text-white text-[12px] leading-[15px] font-semibold px-3 py-1 rounded-[5px] whitespace-nowrap shadow-md font-inter">
                              {step.tag}
                            </div>
                            <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[5px] border-t-black" />
                          </div>
                        )}

                        {/* Icon Circle */}
                        <div
                          className={`flex items-center justify-center w-[56px] h-[56px] rounded-full transition-all duration-300 ${step.active
                            ? "bg-[#FF7E57] text-white shadow-sm"
                            : "bg-[#F8FAFC] border border-[#F1F5F9] text-[#64748B]"
                            }`}
                        >
                          <IconComponent className="w-[26px] h-[26px]" />
                        </div>

                        {/* Label */}
                        <span className="text-[14px] leading-[17px] font-semibold text-center whitespace-nowrap font-inter text-[#475569]">
                          {step.label}
                        </span>
                      </div>

                      {/* Dashed Connecting Line */}
                      {!isLast && (
                        <div className="flex-1 flex items-center justify-center min-w-[30px] sm:min-w-[50px] px-1 mb-[28px] shrink-0">
                          <div className="w-full flex items-center">
                            <div className="w-full border-t-2 border-dashed border-[#94A3B8]" />
                            <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#94A3B8] -ml-[2px]" />
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}



          {/* ── AI Agents & Audio Player Section ────────────────────────────── */}
          <div className="mt-5">
            <div
              className="bg-white rounded-2xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 overflow-hidden"
              style={{ boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.06) 0px 8px 24px" }}
            >
              {/* Left Column: Take on Journey & Audio Player */}
              <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p
                    className="text-[9.5px] font-semibold tracking-[0.14em] uppercase"
                    style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
                  >
                    AI AGENTS ON THIS JOURNEY
                  </p>

                  <div className="flex items-center gap-2">
                    {/* Purple Sparkle Icon */}
                    <svg className="w-5 h-5 text-[#8B5CF6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] font-semibold text-[#8B5CF6] font-inter">
                      {riyaConclusionTitle || "Riya's take on the Journey"}
                    </span>
                  </div>

                  <p
                    className="text-[19px] sm:text-[20px] leading-[1.55] text-slate-800"
                    style={{ fontFamily: "Newsreader, Georgia, serif" }}
                  >
                    "Every time I suggested a lower-priced option, both of you kept returning to communities with trusted builders, better schools and realistic possession timelines. That's when I realized you weren't searching for the cheapest home. You were searching for peace of mind."
                  </p>
                </div>

                {/* Interactive Audio Player Controls */}
                <AudioPlayer audioLabel={audioLabel} audioSrc={audioSrc} />
              </div>

              {/* Right Column: Card Slider */}
              <div className="flex items-center justify-center bg-[#FAFAFD] lg:bg-white p-4">
                <AgentCardSlider cards={agentCards} />
              </div>
            </div>
          </div>
        </div>

        {/* Voices — standalone full-width */}
        {quotes.length > 0 && (
          <div className="mt-5">
            <div
              className="bg-white rounded-2xl border border-slate-100 p-8"
              style={{ boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.06) 0px 8px 24px" }}
            >
              <p
                className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-6"
                style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(138, 148, 161)" }}
              >
                {voicesTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-100 p-8 flex flex-col justify-between gap-6"
                    style={{ background: "rgb(248, 250, 252)" }}
                  >
                    <p
                      className="text-[20px] leading-[1.5] italic"
                      style={{ fontFamily: "Newsreader, Georgia, serif", color: "rgb(30, 41, 59)" }}
                    >
                      "{quote.text}"
                    </p>
                    <p
                      className="text-[14px] font-semibold"
                      style={{ fontFamily: '"Inter Tight", system-ui, sans-serif', color: "rgb(221, 81, 40)" }}
                    >
                      — {quote.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Reality Checks ───────────────────────────────────────────── */}
        {/* {realityChecks.length > 0 && (
          <div className="w-full border border-[#F1F5F9] bg-white rounded-[24px] p-6 flex flex-col gap-6">
            <h3 className="text-[16px] leading-[19px] font-semibold text-[#334155] font-inter">
              {realityChecksTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
              {realityChecks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-4 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#FF7E57] stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col items-center gap-2 w-full">
                      <h4 className="text-[14px] leading-[17px] font-semibold text-[#475569] font-inter">
                        {item.title}
                      </h4>
                      <p className="text-[14px] leading-[20px] font-medium text-[#64748B] font-inter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )} */}

      </div>
    </section>
  );
};

export default JournalJourneyV4;
