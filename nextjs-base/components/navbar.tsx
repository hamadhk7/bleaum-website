'use client';

import { CommandIcon } from "lucide-react";
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
    title: "Product",
    href: "/product",
    children: [
      {
        title: "Grow your business",
        href: "#",
        children: [
          { title: "Point of Sale", href: "/grow/point-of-sale", description: "Dispensary POS for any size operation", icon: CommandIcon },
          { title: "Ecommerce Mobile Apps", href: "/grow/ecommerce-mobile-app", description: "A complete solution in an mobile application", icon: CommandIcon },
          { title: "Ecommerce Web Portal", href: "/grow/ecommerce-web-portal", description: "A whole web portal availabilty", icon: CommandIcon },
          { title: "Marketing & Loyalty", href: "/grow/marketing", description: "Increase purchase frequency & reward your regulars", icon: CommandIcon },
          { title: "Payments", href: "/grow/payments", description: "Boost AOV with cashless payments", icon: CommandIcon },
          { title: "Delivery", href: "/grow/delivery", description: "Drive efficient delivery operations", icon: CommandIcon },
        ],
      },
      {
        title: "Simplify operations",
        href: "#",
        children: [
          { title: "Reporting & Analytics", href: "/operations/reporting-analytics", description: "Unified, customizable reporting & insights", icon: CommandIcon },
          { title: "Automated Compliance", href: "#", description: "Tools for dispensaries' intense regulatory needs", icon: CommandIcon },
          { title: "Inventory Management", href: "/operations/inventory-management", description: "Optimize spend, inventory levels, & minimize waste", icon: CommandIcon },
          { title: "Integrations", href: "/operations/integrations", description: "Seamlessly integrated with over 100 tech partners", icon: CommandIcon },
          
        ],
      },
    ],
  },

  /* Previous navigation links */
  /*
  {
    title: "old features",
    href: "/old features",
    children: [
      { title: "Documentation", href: `/docs${page_routes[0].href}` },
      { title: "Blog", href: "/blog" },
      { title: "Examples", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Community", href: "https://github.com/nisabmohd/Aria-Docs/discussions" },
    ],
  },
  */
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "SOPs", href: "/resources/sops" },
      { title: "State Laws", href: "/resources/state-laws" },
      { title: "Refer", href: "/resources/refer" },
    ],
  },
  {
    title: "Company",
    href: "/company",
    children: [
      { title: "About", href: "/company/about" },
      { title: "Careers", href: "/company/careers" },
      { title: "Support", href: "/company/support" },
    ],
  },
  {
    title: "Help and Support",
    href: "/help",
    children: [
      { title: "Help Guide", href: "/help/guide" },
      { title: "FAQ", href: "/help/faq" },
      { title: "Printer Help", href: "/help/printer" },
      { title: "API Documentation", href: "/help/api-docs" },
    ],
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
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300/85">
            <NavMenu />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex gap-1">
            <Link
              href="https://www.linkedin.com/company/bleaum/"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </Link>
            <Link
              href="https://x.com/bleaumwithus"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </Link>
            <Link
              href="https://www.instagram.com/bleaumwithus/"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
          </div>
          <Link
            href="/demo"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-semibold rounded-full text-sm px-5 py-2.5 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Demo
          </Link>
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
        className="flex-shrink-0"
      />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isHelpSupportOpen, setIsHelpSupportOpen] = useState(false);

  // Create refs for dropdown triggers and content
  const productRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const helpSupportRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductOpen(!isProductOpen);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
    setIsHelpSupportOpen(false);
  };

  const handleResourcesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResourcesOpen(!isResourcesOpen);
    setIsProductOpen(false);
    setIsCompanyOpen(false);
    setIsHelpSupportOpen(false);
  };

  const handleCompanyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCompanyOpen(!isCompanyOpen);
    setIsProductOpen(false);
    setIsResourcesOpen(false);
    setIsHelpSupportOpen(false);
  };

  const handleHelpSupportClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHelpSupportOpen(!isHelpSupportOpen);
    setIsProductOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };

  // Effect to handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (isProductOpen && productRef.current && !productRef.current.contains(target)) {
        setIsProductOpen(false);
      }
      
      if (isResourcesOpen && resourcesRef.current && !resourcesRef.current.contains(target)) {
        setIsResourcesOpen(false);
      }
      
      if (isCompanyOpen && companyRef.current && !companyRef.current.contains(target)) {
        setIsCompanyOpen(false);
      }

      if (isHelpSupportOpen && helpSupportRef.current && !helpSupportRef.current.contains(target)) {
        setIsHelpSupportOpen(false);
      }
    };

    if (isProductOpen || isResourcesOpen || isCompanyOpen || isHelpSupportOpen) {
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isProductOpen, isResourcesOpen, isCompanyOpen, isHelpSupportOpen]);

  return (
    <>
      {NAVLINKS.map((item) => {
        if (item.children) {
          if (item.title === "Product") {
            return (
              <div key={item.title} className="relative group" ref={productRef}>
                <Anchor
                  activeClassName="!text-primary font-medium"
                  absolute
                  className="flex items-center gap-1 text-sm text-white/70 cursor-pointer transition-colors duration-200 hover:text-blue-300 group-focus-within:text-blue-300"
                  href={item.href}
                  onClick={handleProductClick}
                >
                  {item.title}
                  <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Anchor>
                {!isSheet && (
                  <div className={`dropdown-menu absolute left-0 mt-3 w-[90vw] max-w-[700px] bg-background border border-border rounded-xl shadow-2xl z-50 p-4 sm:p-8 ${
                    isProductOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  } md:block hidden`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6">
                      {item.children.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-sm font-bold text-foreground/80 mb-4 border-b border-border/70 pb-2">{category.title}</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {category.children?.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <li key={subItem.title}>
                                  <Link href={subItem.href} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 -m-2 sm:-m-3 rounded-md transition-colors duration-150 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:outline hover:outline-blue-300 hover:outline-1">
                                    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-0.5" />}
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-foreground hover:text-blue-300 flex items-center">
                                        {subItem.title}
                                        {subItem.isNew && (
                                          <span className="ml-2 inline-flex items-center rounded-md bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 flex-shrink-0">NEW</span>
                                        )}
                                      </p>
                                      {subItem.description && <p className="text-xs text-muted-foreground mt-0.5">{subItem.description}</p>}
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {isSheet && (
                  <div className={`mt-2 space-y-2 ${isProductOpen ? 'block' : 'hidden'}`}>
                    {item.children.map((category) => (
                      <div key={category.title} className="pl-4">
                        <h4 className="text-sm font-bold text-foreground/80 mb-2">{category.title}</h4>
                        <ul className="space-y-2">
                          {category.children?.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <li key={subItem.title}>
                                <Link href={subItem.href} className="flex items-start gap-2 sm:gap-3 p-2 rounded-md hover:bg-blue-300/10">
                                  {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-0.5" />}
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground hover:text-blue-300">
                                      {subItem.title}
                                    </p>
                                    {subItem.description && <p className="text-xs text-muted-foreground mt-0.5">{subItem.description}</p>}
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          } else if (item.title === "Resources" || item.title === "Company") {
            return (
              <div key={item.title} className="relative group" ref={item.title === "Resources" ? resourcesRef : companyRef}>
                <Anchor
                  activeClassName="!text-primary font-medium"
                  absolute
                  className="flex items-center gap-1 text-sm text-white/70 cursor-pointer transition-colors duration-200 hover:text-blue-300 group-focus-within:text-blue-300"
                  href={item.href}
                  onClick={item.title === "Resources" ? handleResourcesClick : handleCompanyClick}
                >
                  {item.title}
                  <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Anchor>
                {!isSheet && (
                  <div className={`dropdown-menu absolute left-0 mt-3 w-60 bg-background border border-border rounded-xl shadow-2xl z-50 py-2 ${
                    (item.title === "Resources" ? isResourcesOpen : isCompanyOpen) ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  } md:block hidden`}>
                    {item.children.map((child) => (
                      <div key={child.title} className="relative group/sub">
                        <Anchor
                          href={child.href}
                          className="flex items-center justify-between px-4 sm:px-5 py-2.5 text-foreground hover:bg-blue-300/10 hover:text-blue-300 rounded-lg transition-colors duration-150"
                        >
                          {child.title}
                        </Anchor>
                      </div>
                    ))}
                  </div>
                )}
                {isSheet && (
                  <div className={`mt-2 space-y-2 ${(item.title === "Resources" ? isResourcesOpen : isCompanyOpen) ? 'block' : 'hidden'}`}>
                    {item.children.map((child) => (
                      <div key={child.title} className="pl-4">
                        <Link href={child.href} className="block py-2 text-sm text-foreground hover:text-blue-300">
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          } else if (item.title === "Help and Support") {
            return (
              <div key={item.title} className="relative group" ref={helpSupportRef}>
                <Anchor
                  activeClassName="!text-primary font-medium"
                  absolute
                  className="flex items-center gap-1 text-sm text-white/70 cursor-pointer transition-colors duration-200 hover:text-blue-300 group-focus-within:text-blue-300"
                  href={item.href}
                  onClick={handleHelpSupportClick}
                >
                  {item.title}
                  <svg className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </Anchor>
                {!isSheet && (
                  <div className={`dropdown-menu absolute left-0 mt-3 w-60 bg-background border border-border rounded-xl shadow-2xl z-50 py-2 ${
                    isHelpSupportOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  } md:block hidden`}>
                    {item.children.map((child) => (
                      <div key={child.title} className="relative group/sub">
                        <Anchor
                          href={child.href}
                          className="flex items-center justify-between px-4 sm:px-5 py-2.5 text-foreground hover:bg-blue-300/10 hover:text-blue-300 rounded-lg transition-colors duration-150"
                        >
                          {child.title}
                        </Anchor>
                      </div>
                    ))}
                  </div>
                )}
                {isSheet && (
                  <div className={`mt-2 space-y-2 ${isHelpSupportOpen ? 'block' : 'hidden'}`}>
                    {item.children.map((child) => (
                      <div key={child.title} className="pl-4">
                        <Link href={child.href} className="block py-2 text-sm text-foreground hover:text-blue-300">
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        } else {
          const Comp = (
            <Anchor
              key={item.title + item.href}
              activeClassName="!text-primary font-medium"
              absolute
              className="flex items-center gap-1 text-sm text-white/70 hover:text-blue-300"
              href={item.href}
            >
              {item.title}
            </Anchor>
          );
          return isSheet ? (
            <SheetClose key={item.title + item.href} asChild>
              {Comp}
            </SheetClose>
          ) : (
            Comp
          );
        }
      })}
    </>
  );
}
