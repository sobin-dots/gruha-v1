"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        scrolled ? 'bg-black shadow-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          {/* Logo container. Using unoptimized since it's an export build */}
          <div className="relative h-8 w-32 md:h-10 md:w-40">
            {/* Since the background is dark in the hero section, we might need to filter the logo if it's black. 
                Assuming the provided logo is the Gruha.ai logo. 
                Applying brightness-0 invert if the background is dark and the logo is black, 
                but let's keep it simple and just use the image first. */}
            <Image 
              src="/assets/logo.png" 
              alt="Gruha.ai Logo" 
              fill 
              className="object-contain object-left" 
              priority
            />
          </div>
        </Link>
        
        {/* Navigation - optional for now, but leaving space */}
        <nav className="hidden md:flex items-center gap-8 text-white font-inter text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#specialists" className="hover:text-primary transition-colors">Specialists</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How it works</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" className="hidden md:inline-flex bg-[#D8A76B] text-black hover:bg-[#D8A76B]/90 rounded-lg border-none shadow-none text-sm px-6">
            Join Waitlist  ↗
          </Button>
          {/* Mobile menu toggle could go here */}
        </div>
      </div>
    </header>
  );
};
