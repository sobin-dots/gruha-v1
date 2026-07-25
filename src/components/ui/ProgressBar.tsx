"use client";

import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden pointer-events-none z-50 bg-slate-100/50">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          background: "linear-gradient(90deg, #FF7E57 10.56%, #FF583A 100%)",
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}