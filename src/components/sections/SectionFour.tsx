"use client";

import  { useRef, useEffect } from 'react';
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

const cards = [
  {
    title: "How efficiently is\nspace used?",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/list (1).png",
    id:"pj-1",
    bg:"bg-[#E3F7F2]",
  },
  {
    title: "Construction\nProgress",
    description: "Measure of usable, functional space\nacross the entire project.",
    image: "/assets/list-after-project/list (3).png",
    id:"pj-2",
    bg:"bg-[#F7F7F7]",
  },
  {
    title: "Movement &\nAccess",
    description: "Understand real walking distances\nand daily movement inside the\nproject.",
    image: "/assets/list-after-project/list (4).png",
    id:"pj-3",
    bg:"bg-[#E3F7F2]",
  },
  {
    title: "Sun & Shadow\nSimulation",
    description: "See how sunlight and shadows move\nacross your project and affect your\nselected unit.",
    image: "/assets/list-after-project/list (2).png",
    id:"pj-4",
    bg:"bg-[#F7F7F7]",
  }
];

export const SectionFour = () => {
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
            Step 4 of your journey
          </div>
        </div>
      </div>
     

      <div className="max-w-6xl mx-auto px-4 md:px-6 ">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left Column (Sticky on lg+) */}
          <div className="lg:w-5/12 lg:sticky lg:top-28 flex flex-col pt-8">
            <div className="mb-2 font-fraunces text-3xl md:text-4xl text-black">
              04
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1] mb-4">
             Project & Tower <br/>
Intelligence
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-[1.4] mb-6">
              Big decisions need the full
picture.
            </p>
            
            {/* Image: hidden on mobile, shown on lg+ */}
            <div className=" relative w-full h-[400px] md:h-[500px] mt-auto ">
              <img 
                src="/assets/drone.png" 
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
