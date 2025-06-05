'use client';

import Link from "next/link";
import Image from 'next/image';

// Copy of NAVLINKS structure from navbar.tsx

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
       
          
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bleaum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}