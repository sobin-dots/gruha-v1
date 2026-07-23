"use client";

import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { JournalProfileV3 } from "./tab-contents/JournalProfileV3";
import { JournalJourneyV3 } from "./tab-contents/JournalJourneyV3";
import { JournalSearchV3 } from "./tab-contents/JournalSearchV3";
import { JournalProjectsV3 } from "./tab-contents/JournalProjectsV3";
import { JournalLearningsV3 } from "./tab-contents/JournalLearningsV3";
import { JournalStartHereV3 } from "./tab-contents/JournalStartHereV3";

const getIcon = (name: string): React.ComponentType<any> => {
  return (Icons as any)[name] || Icons.HelpCircle;
};

type TabId = "profile" | "journey" | "search" | "projects" | "learnings" | "start-here" | (string & {});

export interface TabItem {
  id: TabId;
  label: string;
  badgeCount?: string;
  [key: string]: any;
}

interface JournalTabsSectionV3Props {
  tabs?: TabItem[];
}

export const JournalTabsSectionV3: React.FC<JournalTabsSectionV3Props> = ({
  tabs: passedTabs = [],
}) => {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const tabs: TabItem[] = passedTabs.length > 0 ? passedTabs : [
    { id: "profile", label: "Profile", badgeCount: "2 Buyers" },
    { id: "journey", label: "Journey", badgeCount: "18 Mo" },
    { id: "search", label: "Search", badgeCount: "34 Homes" },
    { id: "projects", label: "Projects", badgeCount: "4 Shortlist" },
    { id: "learnings", label: "Learnings", badgeCount: "7 Shifts" },
    { id: "start-here", label: "Start Here", badgeCount: "4 Steps" },
  ];

  const renderTabContent = (tab: any) => {
    switch (tab.id) {
      case "profile": {
        const profileData = {
          ...tab,
          stats: (tab.stats || []).map((item: any) => {
            const IconComponent = getIcon(item.icon);
            return {
              ...item,
              icon: <IconComponent className="h-5 w-5" strokeWidth={2} />,
            };
          }),
        };
        return <JournalProfileV3 {...profileData} />;
      }

      case "journey": {
        const journeyData = {
          ...tab,
          metrics: (tab.metrics || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          roadmapNodes: (tab.roadmapNodes || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          timelineSteps: (tab.timelineSteps || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          moments: (tab.moments || []).map((item: any) => ({
            ...item,
            desc: item.desc,
          })),
          realityChecks: (tab.realityChecks || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
        };
        return <JournalJourneyV3 {...journeyData} />;
      }

      case "search": {
        const searchData = {
          ...tab,
          metrics: (tab.metrics || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          filters: (tab.filters || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
        };
        return <JournalSearchV3 {...searchData} />;
      }

      case "projects": {
        const projectsData = {
          ...tab,
          metrics: (tab.metrics || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          priorities: (tab.priorities || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          rejectedReasons: (tab.rejectedReasons || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
        };
        return <JournalProjectsV3 {...projectsData} />;
      }

      case "learnings": {
        const learningsData = {
          ...tab,
          metrics: (tab.metrics || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          beforeItems: (tab.beforeItems || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          afterItems: (tab.afterItems || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
          differentlyCards: (tab.differentlyCards || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
        };
        return <JournalLearningsV3 {...learningsData} />;
      }

      case "start-here":
      case "startHere": {
        const startHereData = {
          ...tab,
          valueProps: (tab.valueProps || []).map((item: any) => ({
            ...item,
            icon: getIcon(item.icon),
          })),
        };
        return <JournalStartHereV3 {...startHereData} />;
      }

      default:
        return null;
    }
  };

  const handleScroll = () => {
    if (isScrollingRef.current) return;

    const sectionIds = tabs.map((tab: any) => tab.id as TabId);
    const offset = 140;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const id = sectionIds[i];
      const el = document.getElementById(`v3-section-${id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          setActiveTab(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleTabClick = (id: TabId) => {
    const el = document.getElementById(`v3-section-${id}`);
    if (el) {
      isScrollingRef.current = true;
      setActiveTab(id);

      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="w-full relative">
      {/* Folder Tabs Sticky Header */}
      <div className="sticky top-[60px] z-50 bg-[#F3F6F9] pt-4 pb-0 border-b border-[#E4E9EF]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8">
          <nav className="flex items-end gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative group shrink-0 transition-colors cursor-pointer border-none bg-transparent ${
                    isActive ? "z-20 text-[#111821]" : "z-10 text-[#59636F] hover:text-[#111821]"
                  }`}
                >
                  {/* Folder Tab Vector */}
                  <svg
                    viewBox="0 0 200 90"
                    preserveAspectRatio="none"
                    className="w-full h-11 pointer-events-none drop-shadow-xs"
                    style={{ minWidth: "138px" }}
                  >
                    <path
                      d="M 0 90 V 52 C 0 46, 4 42, 10 42 H 72 C 78 42, 84 38, 88 34 L 98 24 C 102 20, 108 16, 114 16 H 190 C 196 16, 200 20, 200 26 V 90 Z"
                      fill={isActive ? "#FFFFFF" : "#EFF3F7"}
                      stroke="#E4E9EF"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Tab Label & Count Badge */}
                  <div className="absolute inset-0 pt-3 px-4 flex items-center justify-center gap-2">
                    <span className="text-[13.5px] font-semibold tracking-tight font-sans">
                      {tab.label}
                    </span>
                    {tab.badgeCount && (
                      <span
                        className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full font-sans ${
                          isActive
                            ? "bg-[#FBEDE7] text-[#DD5128]"
                            : "bg-[#E4E9EF] text-[#59636F]"
                        }`}
                      >
                        {tab.badgeCount}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Folder Content Container */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 bg-white border border-t-0 border-[#E4E9EF] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] rounded-b-[20px] pt-12 pb-20 space-y-24">
        {tabs.map((tab: any) => (
          <div
            key={tab.id}
            id={`v3-section-${tab.id}`}
            className="scroll-mt-32"
          >
            {renderTabContent(tab)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalTabsSectionV3;
