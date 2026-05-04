"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="relative w-full bg-[#121622] overflow-hidden">
      {/* Background Cityscape Image anchored to bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-full md:w-[90%] lg:w-[80%] h-[80%] md:h-full z-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/cta-bg.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 pt-24 pb-32 md:py-40">
        <div className="flex flex-col items-start max-w-4xl">
          <h2 className="font-inter text-4xl md:text-[52px] lg:text-[56px] font-bold text-white mb-10 tracking-tight leading-[1.15]">
            Be the first to experience<br className="hidden md:block" />
            the <span className="text-[#8B5CF6]">future of real estate</span> decisions.
          </h2>
          
          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-inter font-semibold text-[18px] px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors duration-300">
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
