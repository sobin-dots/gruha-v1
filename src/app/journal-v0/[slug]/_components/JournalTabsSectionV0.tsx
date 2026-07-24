"use client";

import React, { useState, useRef, useEffect, type RefObject } from "react";
import JournalProfileV0 from "./tab-contents/JournalProfileV0";
import JournalJourneyV0 from "./tab-contents/JournalJourneyV0";
import JournalSearchV0 from "./tab-contents/JournalSearchV0";
import JournalProjectsV0 from "./tab-contents/JournalProjectsV0";
import JournalLearningsV0 from "./tab-contents/JournalLearningsV0";
import JournalStartHereV0 from "./tab-contents/JournalStartHereV0";
import JournalSidebarCtaCardV0 from "./JournalSidebarCtaCardV0";
import imgHero from "@/imports/testy.jpg";
import imgRiya from "@/imports/signal-2026-07-23-17-18-39-504.jpg";

const fd = "'Newsreader', Georgia, serif";
const fu = "'Inter Tight', system-ui, sans-serif";

const getImgSrc = (img: any): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img.src) return img.src;
  return String(img);
};

const tabs = ["Profile", "Journey", "Search", "Projects", "Learnings", "Start here"];

function TabNav({
  active,
  showBrand,
  navRef,
  navHeight,
  onTabClick,
}: {
  active: string;
  showBrand: boolean;
  navRef: RefObject<HTMLDivElement | null>;
  navHeight: number;
  onTabClick: (tab: string) => void;
}) {
  const brandImgSize = Math.max(0, navHeight - 20);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-white border-t border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="flex items-center mr-4 shrink-0 overflow-hidden transition-all duration-300 ease-out"
            style={{ maxWidth: showBrand ? brandImgSize + 140 : 0, opacity: showBrand ? 1 : 0 }}
          >
            <div className="flex items-center gap-2.5 flex-none" style={{ width: brandImgSize + 140 }}>
              <img
                src={getImgSrc(imgHero)}
                alt="Journal logo"
                className="rounded-lg object-cover flex-none"
                style={{ width: brandImgSize, height: brandImgSize }}
              />
              <span className="text-[13px] font-semibold leading-[1.25] flex-none" style={{ fontFamily: fu, color: "#111821", width: 110 }}>
                Pavan &amp; Shruti's Journal
              </span>
            </div>
          </div>
          {tabs.map((tab) => {
            const isActive = active.toLowerCase() === tab.toLowerCase();
            return (
              <button
                type="button"
                key={tab}
                onClick={() => onTabClick(tab)}
                className="relative shrink-0 px-4 py-8 transition-colors cursor-pointer"
              >
                <span
                  className="text-[13.5px] font-semibold tracking-tight"
                  style={{ fontFamily: fu, color: isActive ? "#111821" : "#8A94A1" }}
                >
                  {tab}
                </span>
                <span
                  className="absolute left-4 right-4 -bottom-px h-[2px] rounded-full transition-opacity"
                  style={{ background: "#DD5128", opacity: isActive ? 1 : 0 }}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export interface JournalTabsSectionV0Props {
  tabsData?: any[];
  heroImgWrapRef?: RefObject<HTMLDivElement | null>;
}

export const JournalTabsSectionV0: React.FC<JournalTabsSectionV0Props> = ({
  tabsData = [],
  heroImgWrapRef,
}) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const tabNavRef = useRef<HTMLDivElement>(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [showNavBrand, setShowNavBrand] = useState(false);
  const isScrollingRef = useRef(false);

  // Map tabs array from JSON into a dictionary by tab id
  const tabsMap = (tabsData || []).reduce((acc: any, tab: any) => {
    acc[tab.id] = tab;
    return acc;
  }, {});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setActiveTab(tab);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const measure = () => setNavBarHeight(tabNavRef.current?.getBoundingClientRect().height ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = heroImgWrapRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavBrand(!entry.isIntersecting),
      { rootMargin: `-${navBarHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [heroImgWrapRef, navBarHeight]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    const targetId = `section-${tabName.toLowerCase().replace(/\s+/g, "-")}`;
    const el = document.getElementById(targetId);
    if (el) {
      isScrollingRef.current = true;
      const offset = navBarHeight + 20;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return (
    <>
      <TabNav
        active={activeTab}
        showBrand={showNavBrand}
        navRef={tabNavRef}
        navHeight={navBarHeight}
        onTabClick={handleTabClick}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div className="min-w-0">
            {/* Profile Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Profile"] = el;
              }}
            >
              <JournalProfileV0 {...tabsMap["profile"]} />
            </div>

            {/* Journey Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Journey"] = el;
              }}
            >
              <JournalJourneyV0 {...tabsMap["journey"]} />
            </div>

            {/* Search Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Search"] = el;
              }}
            >
              <JournalSearchV0 {...tabsMap["search"]} />
            </div>

            {/* Projects Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Projects"] = el;
              }}
            >
              <JournalProjectsV0 {...tabsMap["projects"]} />
            </div>

            {/* Learnings Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Learnings"] = el;
              }}
            >
              <JournalLearningsV0 {...tabsMap["learnings"]} />
            </div>

            {/* Start Here Section */}
            <div
              ref={(el) => {
                sectionRefs.current["Start here"] = el;
              }}
            >
              <JournalStartHereV0 {...tabsMap["start-here"] || tabsMap["startHere"]} />
            </div>
          </div>

          {/* Sticky CTA sidebar */}
          <div className="hidden lg:block">
            <div className="invisible mb-7" aria-hidden="true">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase">About</p>
              <h2 className="mt-2 text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em]">Who they are</h2>
              <p className="mt-3 text-[17px] leading-[1.55]">Getting to know Pavan &amp; Shruti — their world, their dreams, and what matters most.</p>
            </div>
            <div className="sticky" style={{ top: navBarHeight + 24 }}>
              <JournalSidebarCtaCardV0 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalTabsSectionV0;
