"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Master Plan",
    description: "Understand the entire layout at a glance.",
    icon: "/assets/04-project-tower/Vector.svg"
  },
  {
    title: "Tower Plans",
    description: "Compare towers, floors and unit configurations.",
    icon: "/assets/04-project-tower/Vector (1).svg"
  },
  {
    title: "Amenities",
    description: "See everything you'll love, inside & out.",
    icon: "/assets/04-project-tower/Vector (2).svg"
  },
  {
    title: "Construction updates",
    description: "See everything you'll love, inside & out.",
    icon: "/assets/04-project-tower/Vector (3).svg"
  }
];

export const ProjectTowerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the main text block
      gsap.fromTo(textRef.current,
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

      // Stagger in the feature items
      gsap.fromTo(featuresRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#FFF] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Video/Character */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-start">
            <video 
              src="/assets/04-project-tower/model 4-4k.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-7/12 flex flex-col items-start pt-10 md:pt-0">
            <div ref={textRef} className="w-full">
              <h2 className="font-fraunces font-semibold text-[48px] md:text-[64px] leading-none text-black mb-4">
                04
              </h2>
              
              <h2 className="font-fraunces font-semibold text-[52px] md:text-[76px] leading-[1.05] tracking-[-2px] text-black mb-8">
                Project <span className="font-normal italic">&</span> Tower<br />
                Intelligence
              </h2>
              
              <div className="w-24 h-1 bg-[#FE6235] mb-12"></div>
              
              <p className="font-inter text-3xl md:text-[38px] text-gray-800 font-light leading-[1.2] tracking-[-0.5px] mb-16">
                Big decisions need the full<br className="hidden md:block" /> picture.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 w-full">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  ref={el => { featuresRef.current[index] = el; }}
                  className="flex flex-col items-start"
                >
                  <div className="mb-5 h-12 flex items-end">
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-10 h-auto object-contain"
                    />
                  </div>
                  <h3 className="font-inter text-[15px] font-semibold text-black mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-[13px] text-gray-500 leading-[1.4]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
