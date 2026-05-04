"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TrustCtaSection = () => {
  return (
    <section className="relative w-full bg-[#1A1B1A] overflow-hidden py-16 md:py-24">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/3-cta/bg.svg")',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
          
          {/* Left: Icon and Text */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full md:w-3/4">
            <div className="flex-shrink-0 pt-1 md:pt-2">
              <img 
                src="/assets/3-cta/Vector.svg" 
                alt="Trust Icon" 
                className="w-16 md:w-20 h-auto object-contain"
              />
            </div>
            
            <div className="flex flex-col text-center md:text-left">
              <h2 className="font-fraunces text-[40px] md:text-[48px] lg:text-[52px] font-medium text-white mb-4 tracking-[-1px] leading-[1.1]">
                Trust in every detail.
              </h2>
              <p className="font-inter text-base md:text-[18px] text-gray-300 leading-[1.6] tracking-[-0.2px] font-normal whitespace-pre-line">
                RERA verified. OC status. Builder track record.<br className="hidden md:block" />
                No surprises later.
              </p>
            </div>
          </div>
          
          {/* Right: CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
            <button className="w-full md:w-auto bg-[#8BD8BE] hover:bg-[#74C9AD] text-[#111] font-inter font-medium text-[17px] px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors duration-300">
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
