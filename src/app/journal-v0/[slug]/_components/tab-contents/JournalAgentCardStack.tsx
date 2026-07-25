"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

export interface AgentCardItem {
  id: number | string;
  name: string;
  status: string;
  tag: string;
  description: string;
  image: string;
  color?: string;
  badge?: string;
}

export const defaultAgentCards: AgentCardItem[] = [
  {
    id: 1,
    name: "Riya",
    status: "Active",
    tag: "AI Real Estate Companion",
    description: "Understands your needs, guides you with clarity, and helps you make the right move.",
    image: "/journals/avatar-riya.png",
    color: "bg-gradient-to-b from-[#A78BFA] to-[#8B5CF6]",
  },
  {
    id: 2,
    name: "Kabir",
    status: "Active",
    tag: "Projects Curator",
    description: "Handpicks projects that match your stage of life, budget, and builder trust score.",
    image: "https://i.pravatar.cc/300?u=kabir",
    color: "bg-gradient-to-b from-[#93C5FD] to-[#3B82F6]",
  },
  {
    id: 3,
    name: "Ananya",
    status: "Active",
    tag: "Finance Expert",
    description: "Evaluates mortgage options and tax benefits to optimize your real estate investment.",
    image: "https://i.pravatar.cc/300?u=ananya",
    color: "bg-gradient-to-b from-[#F59E0B] to-[#D97706]",
  },
];

export interface AgentCardSliderProps {
  cards?: AgentCardItem[];
  className?: string;
}

export const AgentCardSlider: React.FC<AgentCardSliderProps> = ({
  cards: initialCards,
  className = "",
}) => {
  const cardsToRender = initialCards && initialCards.length > 0 ? initialCards : defaultAgentCards;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const n = cardsToRender.length;

  // Compute visual stack styles for a card based on its offset relative to activeIndex
  const getStackStyle = (offset: number) => {
    let rotation = 0;
    let xOffset = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = n - offset;

    if (offset === 0) {
      // Front card
      rotation = 0;
      xOffset = 0;
      scale = 1;
      zIndex = 10;
    } else if (offset === 1) {
      // Left tilt card
      rotation = -7;
      xOffset = -18;
      scale = 0.94;
      zIndex = 8;
    } else if (offset === 2) {
      // Right tilt card
      rotation = 7;
      xOffset = 18;
      scale = 0.94;
      zIndex = 6;
    } else {
      // Hidden cards behind
      rotation = 0;
      xOffset = 0;
      scale = 0.88;
      opacity = 0;
      zIndex = 1;
    }

    return { rotation, xOffset, scale, opacity, zIndex };
  };

  // Synchronize card positions smoothly with GSAP whenever activeIndex changes
  useLayoutEffect(() => {
    cardsToRender.forEach((_, idx) => {
      const card = cardsRef.current[idx];
      if (!card) return;

      const offset = (idx - activeIndex + n) % n;
      const target = getStackStyle(offset);

      gsap.to(card, {
        x: target.xOffset,
        y: 0,
        rotation: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
        zIndex: target.zIndex,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, [activeIndex, cardsToRender, n]);

  // Smooth, glitch-free next slide handler
  const nextSlide = () => {
    if (isAnimating || n <= 1) return;
    setIsAnimating(true);

    const currentCardEl = cardsRef.current[activeIndex];
    if (!currentCardEl) {
      setIsAnimating(false);
      return;
    }

    // 1. Front card slides out smoothly to the right
    gsap.to(currentCardEl, {
      x: 150,
      y: -10,
      rotation: 16,
      opacity: 0,
      scale: 0.88,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        // Position the outgoing card quietly behind the deck in position 2
        const targetBack = getStackStyle(n - 1);
        gsap.set(currentCardEl, {
          x: targetBack.xOffset + 15,
          y: 0,
          rotation: targetBack.rotation,
          scale: 0.88,
          opacity: 0,
          zIndex: targetBack.zIndex,
        });

        // Advance activeIndex — useLayoutEffect will fluidly glide all cards into position
        setActiveIndex((prev) => (prev + 1) % n);
        setIsAnimating(false);
      },
    });
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-full min-h-[410px] p-4 overflow-hidden select-none cursor-pointer ${className}`}
      onClick={nextSlide}
    >
      {/* Card Stack Container (Width: 235px sm:245px) */}
      <div className="relative w-[235px] sm:w-[245px] h-[340px]" ref={containerRef}>
        {cardsToRender.map((card, index) => {
          const offset = (index - activeIndex + n) % n;
          const displayNum = offset + 1;

          return (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute inset-0 ${
                card.color || "bg-gradient-to-b from-[#A78BFA] to-[#8B5CF6]"
              } rounded-[24px] p-5 flex flex-col items-center justify-between text-white shadow-2xl overflow-hidden border border-white/20`}
            >
              {/* Top Bar */}
              <div className="w-full flex justify-between items-center">
                <div className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-white/20">
                  <div className="w-2 h-2 bg-[#4ADE80] rounded-full shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                  <span className="text-[10.5px] font-medium tracking-tight text-white">
                    {card.status || "Active"}
                  </span>
                </div>
                <span className="text-[10.5px] font-medium text-white/80">
                  {displayNum} of {n}
                </span>
              </div>

              {/* Profile Image */}
              <div className="relative my-1">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-4 border-white/30 p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white/20">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-2xl sm:text-[26px] font-normal text-white tracking-tight text-center"
                style={{ fontFamily: "Newsreader, Georgia, serif" }}
              >
                {card.name}
              </h3>

              {/* Tag Pill */}
              <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/20 shadow-xs">
                <Plus size={10} className="text-white/90" />
                <span className="text-[11px] font-medium text-white">
                  {card.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-[12px] leading-[1.4] text-center font-normal text-white/90 px-1 font-inter">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dynamic Pagination Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-5 z-10">
        {cardsToRender.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? "w-5 h-1.5 bg-[#8B5CF6]"
                : "w-1.5 h-1.5 bg-[#8B5CF6]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCardSlider;