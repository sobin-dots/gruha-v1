"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WaitlistSection = () => {
  return (
    <section className="relative w-full bg-[#111111] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/Looper-1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Text Content */}
          <div className="flex flex-col max-w-2xl">
            <h2 className="font-inter text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-4 tracking-tight leading-[1.2]">
              Be the first to see what matters.
            </h2>
            <p className="font-inter text-[17px] md:text-[19px] text-gray-300 leading-relaxed font-normal">
              Join the waitlist and get early access to Bengaluru&apos;s smartest way to find, filter, and finalise your home.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#FE6235] hover:bg-[#E05020] text-white font-inter font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors duration-300 group shadow-lg shadow-[#FE6235]/20">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};
