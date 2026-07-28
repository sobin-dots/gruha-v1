import React from 'react';

interface JourneyBadgeProps {
  step: number | string;
  className?: string;
}

export const JourneyBadge: React.FC<JourneyBadgeProps> = ({ step, className = "" }) => {
  return (
    <div className={`left-0 w-full flex justify-center z-20 -translate-y-1/2 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-[#84A98C] flex items-center justify-center mb-3 bg-[#f8f7f3] animate-bounce">
          <svg className="w-5 h-5 text-[#2D6A4F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="4" x2="12" y2="15" strokeDasharray="3 3"></line>
            <polyline points="16 14 12 18 8 14"></polyline>
          </svg>
        </div>
        <div className="px-5 py-2 bg-[#E2EBE5] text-[#2D6A4F] rounded-full text-sm font-inter font-semibold tracking-wide text-center shadow-sm">
          Step {step} of your journey
        </div>
      </div>
    </div>
  );
};
