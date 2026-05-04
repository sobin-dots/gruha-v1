"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Not all 1200 sq ft are\ncreated equal.",
    description: "Your floor plan colour-coded into usable space, circulation, and dead space — with an efficiency score. See exactly what you're paying for, and what's eating into your carpet area.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1.png",
    imageFirst: false
  },
  {
    title: "Vaastu-aligned? We\ncheck every room — not\njust the main door.",
    description: "Every unit evaluated against classical Vaastu principles — main door, kitchen, master bedroom, pooja room, toilets, and the Brahmasthan. You get a compliance score with specific passes and deviations.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (1).png",
    imageFirst: true
  },
  {
    title: "Pick your appliances. We'll\nshow you the kitchens\nthat actually fit them.",
    description: "Tell Gruha what goes in your kitchen — OTG, built-in oven, dishwasher, tall fridge, coffee machine, chimney size — and every unit's kitchen is scored for counter space, ventilation, plug points, and storage.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (2).png",
    imageFirst: false
  },
  {
    title: "Overlook & Privacy Check",
    description: "Every nearby building — PGs, residential towers, offices, schools — measured against your unit's window lines. See which of your windows are overlooked, from what angle, and by what kind of building, before you commit to a flat where the curtains never come off.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (3).png",
    imageFirst: true
  },
  {
    title: "The NE flat and the SW flat\nare not the same. Now\nyou'll see why.",
    description: "Direct sunlight calculated on your specific window facings, per season. Two units in the same tower can get very different sun — this is the number that tells you which is which.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (4).png",
    imageFirst: false
  }
];

export const AppFeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, index) => {
        if (row) {
          gsap.fromTo(row,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#F9F0E5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col gap-24 md:gap-40">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => { rowsRef.current[index] = el; }}
              className={`flex flex-col ${feature.imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-16 md:gap-32`}
            >
              {/* Text Content */}
              <div className="w-full md:w-5/12 flex flex-col justify-center">
                <h2 className="font-inter font-bold text-3xl md:text-[36px] leading-[1.2] tracking-[-1px] text-black mb-4 whitespace-pre-line">
                  {feature.title}
                </h2>
                <p className="font-inter text-base md:text-[18px] leading-[1.6] tracking-[-0.3px] text-black/80 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title.replace(/\n/g, ' ')}
                  className="w-full max-w-[540px] h-auto object-contain rounded-2xl shadow-2xl drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
