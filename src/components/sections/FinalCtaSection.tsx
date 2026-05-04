"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FinalCtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 md:py-10 bg-[#F6F7F9] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Content */}
          <div ref={contentRef} className="w-full md:w-4/6 flex flex-col items-start">
            <h2 className="font-fraunces text-[30px] md:text-[42px] lg:text-[48px] leading-[1.1] font-semibold text-black tracking-[-1.5px] mb-6">
              Make your next home decision <br className="hidden md:block" />
              with <span className="text-[#3DBCA6]">real data</span>.
            </h2>
            
            <div className="w-16 h-[3px] bg-[#3DBCA6] mb-8"></div>
            
            <p className="font-inter text-[18px] md:text-[20px] text-gray-700 leading-relaxed max-w-[450px]">
              Stop guessing. Start seeing the reality around every property.
            </p>
          </div>

          {/* Right Content / Image & Button */}
          <div className="w-full md:w-3/6 flex flex-col items-center justify-center gap-6 mt-12 md:mt-0">
            <img 
              src="/assets/CTA-last.png" 
              alt="Data visualization"
              className="w-full max-w-[450px] lg:max-w-[500px] h-auto object-contain pointer-events-none"
            />
            <button 
              ref={buttonRef}
              className="bg-[#3DBCA6] hover:bg-[#32A893] text-white font-inter font-medium text-[16px] px-12 py-4 rounded-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative z-20"
            >
              Join the waitlist
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
