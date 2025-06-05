'use client';

import { ShoppingCartIcon, GlobeIcon, GiftIcon, CreditCardIcon, TruckIcon, BarChart2Icon, ShieldCheckIcon, BoxesIcon, PlugIcon, BookOpenIcon, LandmarkIcon, UsersIcon, InfoIcon, BriefcaseIcon, LifeBuoyIcon, HelpCircleIcon, MessageSquareIcon, PrinterIcon, Code2Icon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
// import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
/* Previous search implementation */
// import AlgoliaSearch from "./algolia-search";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Add type definitions at the top of the file
type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: React.ElementType;
  isNew?: boolean;
};

export const NAVLINKS: NavItem[] = [
  {
    title: "Documentation",
    href: "/docs/pos-help-guide/side-settings-panel",
    description: "Step-by-step product help",
    icon: HelpCircleIcon,
  },
];

/* Previous search implementation */
/*
const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};
*/

export function Navbar() {
  return (
    <nav className="w-full border-b h-20 sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <SheetLeftbar />
          <div className="hidden md:flex items-center -mt-2">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300/85">
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/bleaum White.png"
        alt="Bleaum Logo"
        width={90}
        height={16}
        priority
        className="flex-shrink-0 -mt-1"
      />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  const pathname = usePathname();

  // Function to determine if a main nav item should be active based on the current route
  const isNavItemActive = (item: NavItem) => {
    // Check if the current pathname exactly matches the item's href
    if (item.href !== '#' && pathname === item.href) return true;
    // Check if the current pathname starts with the item's href for section pages
    if (item.href !== '#' && pathname.startsWith(item.href + '/')) return true;
    return false;
  };

  return (
    <>
      {NAVLINKS.map((item) => {
        const shouldHighlight = isNavItemActive(item);
                      return (
            <Anchor
              key={item.title + item.href}
              absolute
            className={`flex items-center gap-1 text-sm cursor-pointer transition-colors duration-200 ${
                shouldHighlight 
                ? 'text-white font-medium' 
                : 'text-white/70 hover:text-white'
              }`}
              href={item.href}
            >
              {item.title}
            </Anchor>
          );
      })}
    </>
  );
}