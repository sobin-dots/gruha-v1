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
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Content */}
          <div ref={contentRef} className="w-full md:w-6/12 flex flex-col items-start pt-10 md:pt-0">
            <h2 className="font-fraunces font-semibold text-[48px] md:text-[56px] leading-none text-black mb-4">
              05
            </h2>
            
            <h2 className="font-fraunces font-semibold text-[52px] md:text-[58px] leading-[1.05] tracking-[-2px] text-black mb-8">
              Location Intelligence
            </h2>
            
            <div className="w-24 h-1 bg-[#FE6235] mb-10"></div>
            
            <h3 className="font-inter text-2xl md:text-[34px] text-gray-800 font-light leading-[1.3] tracking-[-0.5px] mb-6">
              Know the neighbourhood.<br />
              Live with confidence.
            </h3>

            <p className="font-inter text-[17px] md:text-[18px] text-gray-700 leading-[1.6] max-w-[500px] mb-12">
              We analyze everything around your home - from daily convenience to future growth - so you can make a smarter choice.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-300 mb-8 max-w-[650px]"></div>

            {/* Feature Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 w-full max-w-[650px]">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div 
                    ref={el => { featuresRef.current[index] = el; }}
                    className="flex flex-row items-center gap-4 flex-1"
                  >
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-10 h-10 object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-[18px] text-black leading-tight">
                        {feature.title}
                      </span>
                      <span className="font-inter text-[15px] text-gray-500 leading-tight">
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  {/* Vertical Divider (hide on last item and mobile) */}
                  {index < features.length - 1 && (
                    <div className="hidden sm:block w-[1px] h-12 bg-gray-300 mx-6"></div>
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
              className="w-full max-w-[450px] lg:max-w-[500px] h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};
