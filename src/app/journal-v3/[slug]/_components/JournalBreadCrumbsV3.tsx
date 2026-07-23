"use client";

import React from "react";
import Link from "next/link";
import { Copy } from "lucide-react";

interface JournalBreadCrumbsV3Props {
  title?: string;
}

export const JournalBreadCrumbsV3: React.FC<JournalBreadCrumbsV3Props> = ({
  title = "The First-EMI Family",
}) => {
  return (
    <header className="sticky top-0 z-[60] bg-white/92 backdrop-blur-md border-b border-[#E4E9EF]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-8 h-[60px] flex items-center gap-4">
        {/* Brand Mark */}
        <Link
          href="/"
          className="w-[26px] h-[26px] rounded-[7px] bg-[#111821] text-white flex items-center justify-center font-serif font-semibold text-[14px] shrink-0 text-decoration-none"
        >
          h
        </Link>

        {/* Breadcrumb Trail */}
        <nav
          className="flex items-center gap-2 text-[13px] text-[#8A94A1] min-w-0 font-sans"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hidden md:inline text-[#8A94A1] hover:text-[#111821] transition-colors text-decoration-none"
          >
            Home
          </Link>
          <span className="hidden md:inline text-[#E4E9EF]">/</span>
          <Link
            href="/"
            className="hidden md:inline text-[#8A94A1] hover:text-[#111821] transition-colors text-decoration-none"
          >
            Community Journals
          </Link>
          <span className="hidden md:inline text-[#E4E9EF]">/</span>
          <span className="text-[#111821] font-medium truncate font-serif">
            {title}
          </span>
        </nav>

        {/* CTA Button */}
        <button
          type="button"
          className="ml-auto bg-[#DD5128] hover:bg-[#C6461F] text-white text-[13.5px] font-medium px-4 py-[9px] rounded-lg inline-flex items-center gap-[7px] whitespace-nowrap transition-colors shadow-xs cursor-pointer font-sans"
        >
          <Copy className="w-[14px] h-[14px]" strokeWidth={2} />
          <span>Adapt this journal</span>
        </button>
      </div>
    </header>
  );
};

export default JournalBreadCrumbsV3;
