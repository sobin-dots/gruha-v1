"use client";

import React, { useState, useRef, useEffect } from "react";
import * as Icons from "lucide-react";
import { JournalProfile } from "./tab-contents/JournalProfile";
import { JournalJourney } from "./tab-contents/JournalJourney";
import { JournalSearch } from "./tab-contents/JournalSearch";
import { JournalProjects } from "./tab-contents/JournalProjects";
import { JournalLearnings } from "./tab-contents/JournalLearnings";
import { JournalStartHere } from "./tab-contents/JournalStartHere";

const getIcon = (name: string): React.ComponentType<any> => {
  return (Icons as any)[name] || Icons.HelpCircle;
};

type TabId = "profile" | "journey" | "search" | "projects" | "learnings" | "start-here" | (string & {});

export interface TabItem {
  id: TabId;
  label: string;
  bgColorHex?: string;
  inactiveBgHex?: string;
  textColor?: string;
  inactiveTextColor?: string;
  avatar?: string;
  badgeCount?: string;
  [key: string]: any;
}

interface JournalTabsSectionProps {
  tabs?: TabItem[];
}

export const JournalTabsSection: React.FC<JournalTabsSectionProps> = ({ tabs: passedTabs = [] }) => {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const tabs: TabItem[] = passedTabs;

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
        return <JournalProfile {...profileData} />;
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
        return <JournalJourney {...journeyData} />;
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
        return <JournalSearch {...searchData} />;
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
        return <JournalProjects {...projectsData} />;
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
        return <JournalLearnings {...learningsData} />;
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
        return <JournalStartHere {...startHereData} />;
      }

      default:
        return null;
    }
  };

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (isScrollingRef.current) return;

    const sectionIds = tabs.map((tab: any) => tab.id as TabId);
    const offset = 140;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const id = sectionIds[i];
      const el = document.getElementById(`section-${id}`);
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
    const el = document.getElementById(`section-${id}`);
    if (el) {
      isScrollingRef.current = true;
      setActiveTab(id);

      const offset = 90;
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
    <section
      className="relative w-full max-w-7xl mx-auto px-4 py-8 select-none"
      aria-label="Interactive folder sections"
    >
      {/* Folder Tabs Header (Sticky Container) */}
      <div className="sticky top-0 z-30 bg-[#F3F6F9] pt-4 pb-1 w-full">
        <div className="w-full max-w-full mx-auto relative flex items-end h-[76px] px-2 sm:px-4 overflow-hidden -mb-[1px] shrink-0">
          <nav className="flex items-end w-full">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className="relative flex-1 min-w-0 focus:outline-none transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    height: isActive ? "71px" : "56px",
                    marginLeft: index === 0 ? "0px" : "-8px",
                    zIndex: isActive ? 30 : 20 - index,
                  }}
                >
                  {/* SVG Folder Path Vector */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
                      preserveAspectRatio="none"
                      viewBox="0 0 184 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 0 90 V 52 C 0 44 4 40 10 40 H 12 C 18 40 22 36 22 28 V 12 C 22 4 28 0 36 0 H 158 C 166 0 170 6 171 14 C 172 22 174 28 178 33 C 180 36 184 40 184 48 V 90 Z"
                        fill={isActive ? "#FFFFFF" : "#EFF3F7"}
                      />
                    </svg>

                    {/* Tab Label */}
                    <span
                      className="relative z-20 font-sans text-[12px] sm:text-[14px] tracking-tight text-center truncate px-1 transition-all duration-300"
                      style={{
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "#111821" : "#59636F",
                        marginTop: isActive ? "-8px" : "10px",
                      }}
                    >
                      {tab.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Folder Body */}
      <div className="w-full relative z-10 py-10 space-y-24 bg-white rounded-[1.5rem] shadow-[0_1px_2px_rgba(17,24,33,0.04),0_8px_24px_rgba(17,24,33,0.05)] border border-[#E4E9EF]">
        {tabs.map((tab: any, index: number) => (
          <div
            key={tab.id}
            id={`section-${tab.id}`}
            className={`scroll-mt-28 ${index > 0 ? "border-t border-[#EFF3F7]" : ""}`}
          >
            {renderTabContent(tab)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JournalTabsSection;
