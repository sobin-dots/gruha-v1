"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listItems = [
  {
    title: "How efficiently is\nspace used?",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/ChatGPT Image May 2, 2026, 12_46_43 PM 1.png"
  },
  {
    title: "Construction\nProgress",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/ChatGPT Image May 2, 2026, 12_46_43 PM 2.png"
  },
  {
    title: "Movement &\nAccess",
    description: "Understand real walking distances\nand daily movement inside the\nproject.",
    image: "/assets/list-after-project/ChatGPT Image May 2, 2026, 12_46_43 PM 3.png"
  },
  {
    title: "Sun & Shadow\nSimulation",
    description: "See how sunlight and shadows move\nacross your project and affect your\nselected unit.",
    image: "/assets/list-after-project/ChatGPT Image May 2, 2026, 12_46_43 PM 4.png"
  }
];

export const ProjectListSection = () => {
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
    <section ref={containerRef} className="py-20 md:py-32 bg-[#F6F9F8] overflow-hidden w-full">
      <div className="flex flex-col gap-16 md:gap-32 w-full">
          {listItems.map((item, index) => (
            <div 
              key={index}
              ref={el => { rowsRef.current[index] = el; }}
              className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 w-full"
            >
              {/* Text Content */}
              <div className="w-full md:w-4/12 pl-6 md:pl-[max(3rem,calc((100vw-1400px)/2))] pr-6 md:pr-12 lg:pr-24 flex flex-col justify-center">
                <h2 className="font-inter font-bold text-3xl md:text-[36px] leading-[1.2] tracking-[-1px] text-black mb-4 whitespace-pre-line">
                  {item.title}
                </h2>
                <p className="font-inter text-base md:text-[18px] leading-[1.5] tracking-[-0.3px] text-black/80 font-normal whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-8/12 flex justify-end pl-0 md:pl-10">
                <img 
                  src={item.image} 
                  alt={item.title.replace(/\n/g, ' ')}
                  className="w-full h-auto object-cover rounded-l-2xl md:rounded-l-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
