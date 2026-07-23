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
    status: "Busy",
    tag: "Finance Expert",
    description: "Evaluates mortgage options and tax benefits to optimize your real estate investment.",
    image: "https://i.pravatar.cc/300?u=ananya",
    color: "bg-gradient-to-b from-[#5EEAD4] to-[#14B8A6]",
  },
];

export interface AgentCardSliderProps {
  cards?: AgentCardItem[];
  className?: string;
}

export const AgentCardSlider: React.FC<AgentCardSliderProps> = ({
  cards: initialCards = defaultAgentCards,
  className = "",
}) => {
  const [cards, setCards] = useState<AgentCardItem[]>(initialCards);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Move to next card (Glitch-free GSAP shuffle animation)
  const nextSlide = () => {
    if (isAnimating || cards.length <= 1) return;
    setIsAnimating(true);

    const topCard = cardsRef.current[0];
    if (!topCard) {
      setIsAnimating(false);
      return;
    }

    gsap.to(topCard, {
      x: 130,
      y: -10,
      rotation: 16,
      opacity: 0,
      scale: 0.85,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        // Reset top card transforms before state change to prevent re-render jump/glitch
        gsap.set(topCard, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
        setCards((prev) => {
          const newCards = [...prev];
          const first = newCards.shift()!;
          newCards.push(first);
          return newCards;
        });
        setActiveIndex((prev) => (prev + 1) % 6);
        setIsAnimating(false);
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        let rotation = 0;
        let xOffset = 0;
        let scale = 1;
        let opacity = 1;

        if (index === 1) {
          rotation = -8;
          xOffset = -22;
          scale = 0.94;
        } else if (index === 2) {
          rotation = 8;
          xOffset = 22;
          scale = 0.94;
        } else if (index > 2) {
          opacity = 0;
        }

        gsap.to(card, {
          x: xOffset,
          rotation: rotation,
          scale: scale,
          opacity: opacity,
          zIndex: cards.length - index,
          duration: 0.45,
          ease: "expo.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [cards]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-full min-h-[440px] p-6 overflow-hidden select-none cursor-pointer ${className}`}
      onClick={nextSlide}
    >
      {/* Card Stack Container */}
      <div className="relative w-[260px] sm:w-[275px] h-[360px]" ref={containerRef}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`absolute inset-0 ${
              card.color || "bg-gradient-to-b from-[#A78BFA] to-[#8B5CF6]"
            } rounded-[28px] p-6 flex flex-col items-center justify-between text-white shadow-2xl overflow-hidden border border-white/20`}
          >
            {/* Top Bar */}
            <div className="w-full flex justify-between items-center">
              <div className="bg-white/20 backdrop-blur-md px-3 py-0.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <div className="w-2 h-2 bg-[#4ADE80] rounded-full shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-[11px] font-medium tracking-tight text-white">{card.status}</span>
              </div>
              <span className="text-[11px] font-medium text-white/80">
                {((activeIndex + index) % 6) + 1} of 6
              </span>
            </div>

            {/* Profile Image */}
            <div className="relative my-2">
              <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-full border-4 border-white/30 p-0.5 shadow-lg">
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
              className="text-3xl font-normal text-white tracking-tight text-center"
              style={{ fontFamily: "Newsreader, Georgia, serif" }}
            >
              {card.name}
            </h3>

            {/* Tag Pill */}
            <div className="bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full flex items-center gap-1 border border-white/20 shadow-xs">
              <Plus size={11} className="text-white/90" />
              <span className="text-[11.5px] font-medium text-white">{card.tag}</span>
            </div>

            {/* Description */}
            <p className="text-[12.5px] leading-[1.45] text-center font-normal text-white/90 px-1 font-inter">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Dynamic Pagination Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-6 z-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex ? "w-6 h-1.5 bg-[#8B5CF6]" : "w-1.5 h-1.5 bg-[#8B5CF6]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentCardSlider;
