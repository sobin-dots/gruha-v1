"use client";

import  { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coffee, ShoppingBag, Trees } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);




const features = [
  {
    title: "Cafés & Dining",
    description: "Great places to eat, relax & socialise.",
    icon: <Coffee className="w-6 h-6 text-[#FE6235]" />
  },
  {
    title: "Shopping & Essentials",
    description: "Daily needs and retail options nearby.",
    icon: <ShoppingBag className="w-6 h-6 text-[#4A90E2]" />
  },
  {
    title: "Parks & Outdoors",
    description: "Green spaces and open-air activities.",
    icon: <Trees className="w-6 h-6 text-[#3BAE8B]" />
  }
];


const cards = [
  {
    id: "01",
    title: "Real reach - not radius",
    description: "Walk and drive zones that follow actual roads, not perfect circles. Dead ends, one-ways, and missing links included - so you see what's truly reachable in 5, 10, or 15 minutes.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1.png",
    bg:"bg-[#E3F7F2]"
  },
  {
    id: "02",
    title: "Green cover, verified from space",
    description: "A satellite-based vegetation map that reveals actual tree cover - not brochure promises. See where greenery truly exists, and where it doesn't.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (1).png",
    bg:"bg-[#f8f7f3]"
  },
  {
    id: "03",
    title: "Flood risk - before it finds you",
    description: "Elevation and water-index data combined into a clear flood risk map. Identify low-lying zones and historically waterlogged areas before you commit.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (2).png",
    bg:"bg-[#f0f9f0]"
  },
  {
    id: "04",
    title: "Experience your commute — before you live it",
    description: "Preview your actual daily route through real street-level views - traffic, signals, and all. No stitched maps, just what your mornings will look like.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (3).png",
    bg:"bg-[#F9F9F9]"
  },
  {
    id: "05",
    title: "Real commute times that actually hold up",
    description: "Peak-hour travel times to the places that matter - airport, work hubs, stations - based on live traffic, not optimistic estimates.",
    image: "/assets/05-location-inteligence/cards/Road-Following Walk & Drive Zones 1 (4).png",
    bg:"bg-[#E3F7F2]"
  }
];

export const SectionSix = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and slide image from left
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Stagger list items
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-[#F9F9F9] ">
      <div className=" left-0 w-full flex justify-center z-20 -translate-y-1/2 -mt-19 md:-mt-23">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border border-[#84A98C] flex items-center justify-center mb-3 bg-[#f8f7f3] animate-bounce">
            <svg className="w-5 h-5 text-[#2D6A4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="4" x2="12" y2="15" strokeDasharray="3 3"></line>
              <polyline points="16 14 12 18 8 14"></polyline>
            </svg>
          </div>
          <div className="px-5 py-2 bg-[#E2EBE5] text-[#2D6A4F] rounded-full text-sm font-inter font-semibold tracking-wide text-center shadow-sm">
            Step 6 of your journey
          </div>
        </div>
      </div>
     

      <div className="max-w-6xl mx-auto px-4 md:px-6 ">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column (Sticky on lg+) */}
          <div className="lg:w-5/12 lg:sticky lg:top-28 flex flex-col pt-8">
            <div className="mb-2 font-fraunces text-3xl md:text-4xl text-black">
              06
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1] mb-4">
             Neighborhood <br/>
& Vibe
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-[1.4] mb-6">
              Life happens outside your four walls. <br/>
              See the heartbeat of your locality.
            </p>
            
            {/* Image: hidden on mobile, shown on lg+ */}
            <div className=" relative w-full h-[400px] md:h-[500px] mt-auto ">
              <img 
                src="/assets/section6.png" 
                alt="Kabir - Projects Curator" 
                className="w-full h-full object-contain object-left-bottom "
              />
            </div>
          </div>

          {/* Right Column (Scrolling Cards) */}
          <div className="lg:w-7/12 flex flex-col gap-5 md:gap-8 pb-12">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className={`w-full rounded-[20px] md:rounded-[28px] overflow-hidden ${card.bg} flex flex-col sticky shadow-sm`}
                style={{ 
                  top: `calc(120px + ${index * 32}px)`,
                  zIndex: index + 1
                }}
              >
                {/* Card Text Content */}
                <div className="p-5 md:p-8 lg:p-10 pb-0">
                  <h3 className="font-inter font-bold text-xl md:text-2xl lg:text-[1.875rem] leading-tight text-black tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="font-inter text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-[95%] font-medium">
                    {card.description}
                  </p>
                </div>
                
                {/* Card Image */}
                <div className="w-full mt-5 md:mt-8  flex justify-center ">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full  h-auto "
                  />
                </div>
              </div>
            ))}
          </div>

         

        </div>
         {/* Features List */}
            <div className="flex flex-col md:flex-row w-full ">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start py-5 ${index !== features.length - 1 ? 'border-b border-gray-200 w-full md:w-1/3' : 'md:border-b md:border-gray-200'}`}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-5 md:mr-6 pt-0.5">
                    {typeof feature.icon === 'string' ? (
                      <img 
                        src={feature.icon} 
                        alt="" 
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="font-inter text-base md:text-lg font-bold text-black mb-1 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-[0.8125rem] md:text-sm text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};
