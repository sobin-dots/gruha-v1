"use client";

import  { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const features = [
  {
    icon: "/assets/home-units/icon (2).svg",
    title: "Well ventilated",
    description: "Rooms with natural light"
  },
  {
    icon: "/assets/home-units/icon (3).svg",
    title: "Efficient layouts",
    description: "No wastage of space"
  },
  {
    icon: "/assets/home-units/icon (1).svg",
    title: "Private spaces",
    description: "Balcony, utility & more"
  }
];

const cards = [
  {
    title: "Not all 1200 sq ft are\ncreated equal.",
    description: "Your floor plan colour-coded into usable space, circulation, and dead space — with an efficiency score. See exactly what you're paying for, and what's eating into your carpet area.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (1).png",
    bg:"bg-[#EBF3EF]",
    id:"st1"
  },
  {
    title: "Vaastu-aligned? We\ncheck every room — not\njust the main door.",
    description: "Every unit evaluated against classical Vaastu principles — main door, kitchen, master bedroom, pooja room, toilets, and the Brahmasthan. You get a compliance score with specific passes and deviations.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (2).png",
    imageFirst: true,
    bg:"bg-[#EBF3FF]",
    id:"st5"
  },
  {
    title: "Pick your appliances. We'll\nshow you the kitchens\nthat actually fit them.",
    description: "Tell Gruha what goes in your kitchen — OTG, built-in oven, dishwasher, tall fridge, coffee machine, chimney size — and every unit's kitchen is scored for counter space, ventilation, plug points, and storage.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (4).png",
    bg:"bg-[#FBEFEA]",
    id:"st2"
  },
  {
    title: "Overlook & Privacy Check",
    description: "Every nearby building — PGs, residential towers, offices, schools — measured against your unit's window lines. See which of your windows are overlooked, from what angle, and by what kind of building, before you commit to a flat where the curtains never come off.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (3).png",
bg:"bg-[#F2F4F6]",
id:"st3"
  },
  {
    title: "The NE flat and the SW flat\nare not the same. Now\nyou'll see why.",
    description: "Direct sunlight calculated on your specific window facings, per season. Two units in the same tower can get very different sun — this is the number that tells you which is which.",
    image: "/assets/features/ChatGPT Image May 2, 2026, 09_44_47 AM 1 (5).png",
    bg:"bg-[#FCF8F3]",
    id:"st4"
  }
];;

export const SectionThree = () => {
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
            Step 3 of your journey
          </div>
        </div>
      </div>
     

      <div className="max-w-6xl mx-auto px-4 md:px-6 ">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column (Sticky on lg+) */}
          <div className="lg:w-5/12 lg:sticky lg:top-28 flex flex-col pt-8">
            <div className="mb-2 font-fraunces text-3xl md:text-4xl text-black">
              03
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1] mb-4">
              Home &amp; Units
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-[1.4] mb-6">
              Every space tells a story. <br/>
                  Find yours.
            </p>
            
            {/* Image: hidden on mobile, shown on lg+ */}
            <div className=" relative w-full h-[400px] md:h-[500px] mt-auto ">
              <img 
                src="/assets/section3.png" 
                alt="Kabir - Projects Curator" 
                className="w-full h-full object-contain object-left-bottom"
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
                  top: `calc(120px + ${index * 16}px)`,
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
                <div className="w-full mt-5 md:mt-8  flex justify-center">
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
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center mr-5 md:mr-6 pt-0.5">
                    <img 
                      src={feature.icon} 
                      alt="" 
                      className="w-full h-auto object-contain"
                    />
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
