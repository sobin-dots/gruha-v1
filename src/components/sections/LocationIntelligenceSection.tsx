"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "25+",
    subtitle: "Data Layers",
    icon: "/assets/05-location-inteligence/stacks_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg"
  },
  {
    title: "Live",
    subtitle: "Environment",
    icon: "/assets/05-location-inteligence/Vector.svg"
  },
  {
    title: "AI-Powered",
    subtitle: "Insights",
    icon: "/assets/05-location-inteligence/Vector (1).svg"
  }
];

export const LocationIntelligenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left content
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Fade in right image
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Stagger in the bottom feature items
      gsap.fromTo(featuresRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "center 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Left Content */}
          <div ref={contentRef} className="w-full md:w-6/12 flex flex-col items-start pt-6 md:pt-0">
            <h2 className="font-fraunces font-semibold text-[36px] md:text-[44px] leading-none text-black mb-2">
              05
            </h2>
            
            <h2 className="font-fraunces font-semibold text-[38px] md:text-[44px] leading-[1.05] tracking-[-1.5px] text-black mb-5">
              Location Intelligence
            </h2>
            
            <div className="w-16 h-0.5 bg-[#FE6235] mb-6"></div>
            
            <h3 className="font-inter text-lg md:text-xl text-gray-700 font-light leading-[1.3] tracking-[-0.3px] mb-4">
              Know the neighbourhood.<br />
              Live with confidence.
            </h3>

            <p className="font-inter text-sm md:text-[15px] text-gray-600 leading-[1.6] max-w-[500px] mb-8">
              We analyze everything around your home - from daily convenience to future growth - so you can make a smarter choice.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-300 mb-6 max-w-[550px]"></div>

            {/* Feature Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 w-full max-w-[550px]">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div 
                    ref={el => { featuresRef.current[index] = el; }}
                    className="flex flex-row items-center gap-3 flex-1"
                  >
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-8 h-8 object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-[15px] text-black leading-tight">
                        {feature.title}
                      </span>
                      <span className="font-inter text-[13px] text-gray-500 leading-tight">
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  {/* Vertical Divider (hide on last item and mobile) */}
                  {index < features.length - 1 && (
                    <div className="hidden sm:block w-[1px] h-10 bg-gray-300 mx-4"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Image/Character */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
            <img 
              ref={imageRef}
              src="/assets/05-location-inteligence/right-image.png" 
              alt="Location Intelligence Character"
              className="w-full max-w-[260px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};
