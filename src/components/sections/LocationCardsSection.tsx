"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "01",
    title: "Real reach - not radius",
    description: "Walk and drive zones that follow actual roads, not perfect circles. Dead ends, one-ways, and missing links included - so you see what's truly reachable in 5, 10, or 15 minutes.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1.png"
  },
  {
    id: "02",
    title: "Green cover, verified from space",
    description: "A satellite-based vegetation map that reveals actual tree cover - not brochure promises. See where greenery truly exists, and where it doesn't.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (1).png"
  },
  {
    id: "03",
    title: "Flood risk - before it finds you",
    description: "Elevation and water-index data combined into a clear flood risk map. Identify low-lying zones and historically waterlogged areas before you commit.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (2).png"
  },
  {
    id: "04",
    title: "Experience your commute — before you live it",
    description: "Preview your actual daily route through real street-level views - traffic, signals, and all. No stitched maps, just what your mornings will look like.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (3).png"
  },
  {
    id: "05",
    title: "Real commute times that actually hold up",
    description: "Peak-hour travel times to the places that matter - airport, work hubs, stations - based on live traffic, not optimistic estimates.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (4).png"
  }
];

export const LocationCardsSection = () => {
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
    <section ref={containerRef} className="pb-24 md:pb-40 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col gap-20 md:gap-32">
          {cards.map((card, index) => {
            // Even index (0, 2, 4) -> Image Left
            // Odd index (1, 3) -> Text Left
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={index}
                ref={el => { rowsRef.current[index] = el; }}
                className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 md:gap-20`}
              >
                {/* Image Content */}
                <div className="w-full md:w-7/12 flex justify-center">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-auto object-cover rounded-[24px] shadow-2xl drop-shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-5/12 flex flex-col justify-center">
                  <span className="font-inter text-[28px] text-gray-300 font-semibold leading-none tracking-tight">
                    {card.id}
                  </span>
                  <div className="w-10 h-[3px] bg-[#48C4A9] mt-3 mb-6"></div>
                  
                  <h2 className="font-inter font-bold text-3xl md:text-[38px] leading-[1.1] tracking-[-1px] text-black mb-6 whitespace-pre-line">
                    {card.title}
                  </h2>
                  <p className="font-inter text-[17px] md:text-[19px] leading-[1.5] tracking-[-0.3px] text-gray-700 font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
