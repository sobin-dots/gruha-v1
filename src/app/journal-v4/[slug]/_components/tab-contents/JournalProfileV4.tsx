"use client";

import React from "react";
import Image from "next/image";

export interface BuyerProfile {
  name: string;
  age: number;
  role: string;
  tags?: string[];
  image: string;
}

export interface StatItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
  tag: string;
}

export interface PriorityItem {
  image: string;
  title: string;
  scoreLabel: string;
  scorePercentage: number;
  description: string;
}

export interface JournalProfileV4Props {
  aboutLabel?: string;
  title?: string;
  description?: string;
  buyers?: BuyerProfile[];
  sharedVisionTitle?: string;
  sharedVisionDescription?: string;
  sharedVisionImage?: string;
  stats?: StatItem[];
  prioritiesTitle?: string;
  priorities?: PriorityItem[];
}

export const JournalProfileV4: React.FC<JournalProfileV4Props> = ({
  aboutLabel = "About",
  title = "Who they are",
  description = "Getting to know Pavan & Shruti — their world, their dreams, and what matters most.",
  buyers = [
    {
      name: "Pavan",
      age: 29,
      role: "Senior Engineer",
      image: "/pavan-avatar.png",
    },
    {
      name: "Shruti",
      age: 28,
      role: "QA",
      image: "/shruti-avatar.png",
    },
  ],
  sharedVisionDescription = "A safe, comfortable home before the baby arrives — where every milestone, from the first homecoming to birthdays and festivals, begins with belonging.",
  prioritiesTitle = "Top priorities right now",
  priorities = [],
}) => {
  const getAvatarSrc = (name: string, fallback: string) => {
    const n = name ? name.toLowerCase() : "";
    if (n.includes("pavan")) return "/pavan-avatar.png";
    if (n.includes("shruti")) return "/shruti-avatar.png";
    return fallback || "/pavan-avatar.png";
  };

  return (
    <section id="section-profile" className="w-full">
      {/* ── Section Header ────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <p
          className="text-[11px] font-semibold tracking-[0.15em] uppercase font-sans"
          style={{ color: "rgb(221, 81, 40)" }}
        >
          {aboutLabel}
        </p>
        <h2
          className="mt-2 text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] font-serif"
          style={{ color: "rgb(17, 24, 33)" }}
        >
          {title}
        </h2>
        <p
          className="mt-3 text-[17px] leading-[1.55] font-serif max-w-xl mx-auto"
          style={{ color: "rgb(89, 99, 111)" }}
        >
          {description}
        </p>
      </div>

      {/* ── Dark Persona Skyline Banner Card ─────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          height: "420px",
          boxShadow:
            "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.1) 0px 12px 32px",
        }}
      >
        {/* Background Image — Pure Dusk City Skyline */}
        <Image
          src="/city_skyline_dusk.png"
          alt="Dusk Skyline"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center"
          priority
        />

        {/* 65% Dark Overlay for contrast */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: "rgba(0, 0, 0, 0.65)" }}
        />

        {/* Left Container */}
        <div
          className="absolute left-7 bottom-7 flex flex-col gap-5 z-10"
          style={{ maxWidth: "40%" }}
        >
          <div className="flex flex-col gap-3">
            <p
              className="text-[9.5px] font-semibold tracking-[0.13em] uppercase font-sans"
              style={{ color: "rgba(255, 255, 255, 0.4)" }}
            >
              Meet the buyers
            </p>

            {/* Buyer 1: Pavan */}
            {buyers[0] && (
              <div className="flex items-center gap-3">
                <img
                  src={getAvatarSrc(buyers[0].name, buyers[0].image)}
                  alt={buyers[0].name}
                  className="w-[70px] h-[70px] rounded-xl object-cover flex-none"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px" }}
                />
                <div>
                  <p className="text-[17px] font-[500] text-white leading-tight font-serif">
                    {buyers[0].name}, {buyers[0].age}
                  </p>
                  <p
                    className="text-[11px] mt-0.5 font-sans"
                    style={{ color: "rgba(255, 255, 255, 0.55)" }}
                  >
                    {buyers[0].role}
                  </p>
                </div>
              </div>
            )}

            {/* Buyer 2: Shruti */}
            {buyers[1] && (
              <div className="flex items-center gap-3">
                <img
                  src={getAvatarSrc(buyers[1].name, buyers[1].image)}
                  alt={buyers[1].name}
                  className="w-[70px] h-[70px] rounded-xl object-cover flex-none"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 8px" }}
                />
                <div>
                  <p className="text-[17px] font-[500] text-white leading-tight font-serif">
                    {buyers[1].name}, {buyers[1].age}
                  </p>
                  <p
                    className="text-[11px] mt-0.5 font-sans"
                    style={{ color: "rgba(255, 255, 255, 0.55)" }}
                  >
                    {buyers[1].role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Shared Vision Divider & Text */}
          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              paddingTop: "14px",
            }}
          >
            <p
              className="text-[9.5px] font-semibold tracking-[0.13em] uppercase mb-1.5 font-sans"
              style={{ color: "rgba(255, 255, 255, 0.4)" }}
            >
              Shared Vision
            </p>
            <p
              className="text-[13px] leading-[1.55] font-serif"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              {sharedVisionDescription}
            </p>
          </div>
        </div>

        {/* Right Container — 2x3 Grid */}
        <div className="absolute right-7 bottom-7 z-10" style={{ width: "38%" }}>
          <div className="grid grid-cols-2 relative">
            {/* Center Vertical Divider Line */}
            <div
              className="absolute inset-y-0 left-1/2 w-px"
              style={{ background: "rgba(255, 255, 255, 0.12)" }}
            />

            {/* Cell 1: Buyer Profile */}
            <div className="px-4 py-3.5">
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="14"
                    height="11"
                    fill="none"
                    viewBox="0 0 15.2727 12.202"
                  >
                    <path
                      d="M5.04545 3.20746V1.554C5.04545 1.09741 5.43212 0.727273 5.90909 0.727273H8.93182C9.40879 0.727273 9.79545 1.09741 9.79545 1.554V3.20746M2.45455 11.4747H12.8182C13.7721 11.4747 14.5455 10.7345 14.5455 9.82129V4.86092C14.5455 3.94774 13.7721 3.20746 12.8182 3.20746H2.45455C1.5006 3.20746 0.727273 3.94774 0.727273 4.86092V9.82129C0.727273 10.7345 1.5006 11.4747 2.45455 11.4747Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.45"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Buyer profile
                </p>
              </div>
              <p className="text-[16px] font-[500] leading-[1.2] font-serif text-white">
                First-timers
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                Young professionals
              </p>
            </div>

            {/* Cell 2: Their Reality */}
            <div className="px-4 py-3.5">
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 15.0545 15.0545"
                  >
                    <path
                      d="M10.1455 4.47273H4.90909H6.33719C6.8422 4.47273 7.32652 4.68289 7.68361 5.05699C8.04071 5.43109 8.24132 5.93848 8.24132 6.46753C8.24132 6.99659 8.04071 7.50397 7.68361 7.87807C7.32652 8.25217 6.8422 8.46234 6.33719 8.46234H4.90909L7.76529 11.4545M4.90909 6.46753H10.1455M14.5091 7.52727C14.5091 11.3832 11.3832 14.5091 7.52727 14.5091C3.67132 14.5091 0.545455 11.3832 0.545455 7.52727C0.545455 3.67132 3.67132 0.545455 7.52727 0.545455C11.3832 0.545455 14.5091 3.67132 14.5091 7.52727Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.09"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Their reality
                </p>
              </div>
              <p className="text-[16px] font-[500] leading-[1.2] font-serif text-white">
                ₹1 Cr → ₹1.5 Cr
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                Dream met the market
              </p>
            </div>

            {/* Cell 3: Life Stage */}
            <div
              className="px-4 py-3.5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}
            >
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="14"
                    height="13"
                    fill="none"
                    viewBox="0 0 16 14.5455"
                  >
                    <path
                      d="M10.9899 0.727273C13.5515 0.727273 15.2727 3.16545 15.2727 5.44C15.2727 10.0464 8.12929 13.8182 8 13.8182C7.87071 13.8182 0.727273 10.0464 0.727273 5.44C0.727273 3.16545 2.44848 0.727273 5.0101 0.727273C6.48081 0.727273 7.44242 1.47182 8 2.12636C8.55758 1.47182 9.51919 0.727273 10.9899 0.727273Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.45"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Life stage
                </p>
              </div>
              <p className="text-[16px] font-[500] leading-[1.2] font-serif text-white">
                Newly married
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                2 yrs · first child due
              </p>
            </div>

            {/* Cell 4: Search Stage */}
            <div
              className="px-4 py-3.5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}
            >
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="14"
                    height="8"
                    fill="none"
                    viewBox="0 0 16 8.72727"
                  >
                    <path
                      d="M15.2727 0.727273L9.55009 6.44991C9.26207 6.73792 9.11807 6.88193 8.95201 6.93589C8.80594 6.98335 8.6486 6.98335 8.50253 6.93589C8.33648 6.88193 8.19247 6.73792 7.90446 6.44991L5.91372 4.45918C5.62571 4.17117 5.48171 4.02716 5.31565 3.97321C5.16958 3.92574 5.01224 3.92574 4.86617 3.97321C4.70011 4.02716 4.55611 4.17117 4.26809 4.45918L0.727273 8M15.2727 5.81818V0.727273H10.1818"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.45"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Search stage
                </p>
              </div>
              <p
                className="text-[16px] font-[500] leading-[1.2] font-serif"
                style={{ color: "rgb(255, 140, 107)" }}
              >
                Active explorer
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                11 sites visited
              </p>
            </div>

            {/* Cell 5: Timeline */}
            <div
              className="px-4 py-3.5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}
            >
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="11"
                    height="14"
                    fill="none"
                    viewBox="0 0 11.6364 14.5455"
                  >
                    <path
                      d="M0.727273 0.727273H10.9091M0.727273 13.8182H10.9091M9.63636 0.727273V2.65253C9.63636 3.15449 9.46328 3.64109 9.14631 4.03031L7.05534 6.59779C6.68521 7.05226 6.69401 7.69414 7.07645 8.13902L9.10905 10.5035C9.44928 10.8993 9.63636 11.4039 9.63636 11.9258V13.8182M2 0.727273V2.65253C2 3.15449 2.17308 3.64109 2.49006 4.03031L4.58103 6.59779C4.95115 7.05226 4.94236 7.69414 4.55991 8.13902L2.52731 10.5035C2.18708 10.8993 2 11.4039 2 11.9258V13.8182"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.45"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Timeline
                </p>
              </div>
              <p
                className="text-[16px] font-[500] leading-[1.2] font-serif"
                style={{ color: "rgb(255, 140, 107)" }}
              >
                Before the baby
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                Under 8 months
              </p>
            </div>

            {/* Cell 6: Transaction */}
            <div
              className="px-4 py-3.5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}
            >
              <div
                className="flex items-center gap-1.5 mb-1.5"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                <span className="flex-none">
                  <svg
                    width="12"
                    height="14"
                    fill="none"
                    viewBox="0 0 13.4545 15.6364"
                  >
                    <path
                      d="M12.1818 8.18182V4.03636C12.1818 2.81443 12.1818 2.20346 11.944 1.73675C11.7348 1.32621 11.4011 0.992437 10.9905 0.783259C10.5238 0.545455 9.91284 0.545455 8.69091 0.545455H4.03636C2.81443 0.545455 2.20346 0.545455 1.73675 0.783259C1.32621 0.992437 0.992437 1.32621 0.783259 1.73675C0.545455 2.20346 0.545455 2.81443 0.545455 4.03636V11.6C0.545455 12.8219 0.545455 13.4329 0.783259 13.8996C0.992437 14.3102 1.32621 14.6439 1.73675 14.8531C2.20346 15.0909 2.81443 15.0909 4.03636 15.0909H6.36364M7.81818 7.09091H3.45455M4.90909 10H3.45455M9.27273 4.18182H3.45455M8.18182 12.9091L9.63636 14.3636L12.9091 11.0909"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.09"
                    />
                  </svg>
                </span>
                <p className="text-[9px] font-semibold tracking-[0.12em] uppercase font-sans">
                  Transaction
                </p>
              </div>
              <p className="text-[16px] font-[500] leading-[1.2] font-serif text-white">
                Under construction
              </p>
              <p
                className="mt-0.5 text-[10.5px] leading-tight font-sans"
                style={{ color: "rgba(255, 255, 255, 0.45)" }}
              >
                RERA · primary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Top Priorities Section Below Card ──────────────────────── */}
      {priorities && priorities.length > 0 && (
        <div className="mt-5">
          <div
            className="bg-white rounded-2xl border border-slate-100 p-5"
            style={{
              boxShadow:
                "rgba(17, 24, 33, 0.04) 0px 1px 2px, rgba(17, 24, 33, 0.06) 0px 8px 24px",
            }}
          >
            <p
              className="text-[9.5px] font-semibold tracking-[0.14em] uppercase mb-4 font-sans"
              style={{ color: "rgb(138, 148, 161)" }}
            >
              {prioritiesTitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {priorities.map((priority, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-slate-100 p-4"
                  style={{
                    boxShadow: "rgba(17, 24, 33, 0.04) 0px 1px 3px",
                  }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4
                        className="text-[15px] font-semibold leading-[1.25] font-serif"
                        style={{ color: "rgb(17, 24, 33)" }}
                      >
                        {priority.title}
                      </h4>
                      <span
                        className="text-[13px] font-semibold flex-none pt-0.5 font-sans"
                        style={{ color: "rgb(221, 81, 40)" }}
                      >
                        {priority.scoreLabel}
                      </span>
                    </div>
                    <p
                      className="text-[12.5px] leading-[1.5] font-sans"
                      style={{ color: "rgb(89, 99, 111)" }}
                    >
                      {priority.description}
                    </p>
                  </div>
                  <div className="mt-4 h-[3px] rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${priority.scorePercentage}%`,
                        background: "rgb(221, 81, 40)",
                        opacity: 0.4,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JournalProfileV4;
