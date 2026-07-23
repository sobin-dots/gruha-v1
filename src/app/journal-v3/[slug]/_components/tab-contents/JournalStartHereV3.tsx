"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";

export interface ActionStepItem {
  number: string;
  title: string;
  desc: string;
  isAi?: boolean;
  image?: string;
}

export interface ValuePropItem {
  title: string;
  desc: string;
}

export interface JournalStartHereV3Props {
  eyebrow?: string;
  title: string;
  description: string;
  flowSteps?: ActionStepItem[];
  gets?: ValuePropItem[];
}

export const JournalStartHereV3: React.FC<JournalStartHereV3Props> = ({
  eyebrow = "Start Your Journey",
  title,
  description,
  flowSteps = [
    {
      number: "01",
      title: "Clone Their Criteria",
      desc: "Use their scored priority matrix as a starting baseline with your partner.",
      image: "/journals/journal-step-1.png",
    },
    {
      number: "02",
      title: "Audit Your Corridor",
      desc: "Apply their price/commute filters to your target Bengaluru micro-market.",
      image: "/journals/journal-step-2.png",
    },
    {
      number: "03",
      title: "Run Builder Checks",
      desc: "Follow their 5-point legal and water audit before making an advance deposit.",
      image: "/journals/journal-step-3.png",
    },
    {
      number: "04",
      title: "Ask Riya AI",
      desc: "Chat with Riya to benchmark your budget against 50+ real buyer journals.",
      isAi: true,
      image: "/journals/journal-step-4.png",
    },
  ],
  gets = [
    { title: "Budget Calculator", desc: "Pre-built EMI to salary ratio worksheet." },
    { title: "Legal Audit Checklist", desc: "12 mandatory RERA verification points." },
    { title: "Corridor Price Index", desc: "Updated sq.ft rates across Bengaluru." },
    { title: "Negotiation Playbook", desc: "Proven strategies for builder discounts." },
    { title: "Riya AI Advisor", desc: "24/7 intelligent companion for home buyers." },
  ],
}) => {
  return (
    <section id="v3-section-start-here" className="w-full space-y-12" aria-label="Start your journey">
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

      {/* 4-Step Action Flow Grid with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E4E9EF] border border-[#E4E9EF] rounded-[14px] overflow-hidden">
        {flowSteps.map((step, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 flex flex-col justify-between ${
              step.isAi ? "bg-[#EDEAFB]" : "bg-white"
            }`}
          >
            <div>
              {step.image && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden border border-[#E4E9EF] mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span
                className={`text-[11px] font-semibold tabular-nums font-sans ${
                  step.isAi ? "text-[#5843D6]" : "text-[#DD5128]"
                }`}
              >
                {step.number || String(idx + 1).padStart(2, "0")}
              </span>
              <h4
                className={`font-serif text-[18px] font-semibold mt-2.5 ${
                  step.isAi ? "text-[#5843D6]" : "text-[#111821]"
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-[13px] leading-[1.5] mt-1.5 font-serif ${
                  step.isAi ? "text-[#41399B]" : "text-[#59636F]"
                }`}
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* What You Get (5 Items Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[#E4E9EF] border border-[#E4E9EF] rounded-[14px] overflow-hidden">
        {gets.map((item, idx) => (
          <div key={idx} className="bg-white p-5">
            <h5 className="text-[13.5px] font-serif font-semibold text-[#111821]">
              {item.title}
            </h5>
            <p className="text-[12.5px] leading-[1.5] text-[#59636F] mt-1.5 font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Blank Canvas Promo Card */}
      <div className="bg-white border border-[#E4E9EF] rounded-[14px] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-center">
        <div>
          <h3 className="font-serif text-[28px] font-semibold leading-[1.15] text-[#111821]">
            Ready to write your home journal?
          </h3>
          <p className="font-serif text-[17px] leading-[1.6] text-[#59636F] mt-3">
            Document your search, benchmark against real buyers, and get AI insights from Riya at every milestone.
          </p>
          <Link
            href="/"
            className="text-[#DD5128] font-semibold text-[15px] mt-4 inline-flex items-center gap-2 hover:underline text-decoration-none font-sans"
          >
            <span>Create your journal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="aspect-[4/3] border border-dashed border-[#E4E9EF] rounded-xl bg-[#F7F9FB] flex flex-col items-center justify-center p-6">
          <div className="w-full h-2 bg-[#E4E9EF] rounded-full mb-2.5" />
          <div className="w-3/4 h-2 bg-[#E4E9EF] rounded-full mb-2.5" />
          <div className="w-1/2 h-2 bg-[#E4E9EF] rounded-full" />
        </div>
      </div>

      {/* Final Dark CTA Card */}
      <div className="bg-[#111821] rounded-[20px] p-8 sm:p-12 lg:p-16 text-center text-white">
        <h3 className="font-serif text-[28px] sm:text-[38px] font-semibold leading-[1.1] tracking-[-0.01em]">
          Start your home buying journey today
        </h3>
        <p className="text-[16px] text-[#A8B2BF] max-w-[460px] mx-auto mt-4 leading-[1.6] font-sans">
          Join 4,000+ home buyers in Bengaluru who use Gruha to search smarter, negotiate better, and buy with confidence.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mt-8 font-sans">
          <button
            type="button"
            className="bg-[#DD5128] hover:bg-[#C6461F] text-white text-[15px] font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-xs cursor-pointer border-none"
          >
            <Copy className="w-4 h-4" />
            <span>Adapt this journal now</span>
          </button>
          <button
            type="button"
            className="border border-[#333E4B] hover:border-[#5A6673] text-[#D6DDE5] text-[15px] px-6 py-3 rounded-lg transition-colors cursor-pointer bg-transparent"
          >
            Explore all community journals
          </button>
        </div>
      </div>
    </section>
  );
};

export default JournalStartHereV3;
