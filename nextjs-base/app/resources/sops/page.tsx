"use client";
import Link from "next/link";
import { SearchIcon, BookOpenIcon, BarChart2Icon, ShoppingBagIcon, BookTextIcon, DollarSignIcon, ClipboardCheckIcon, MegaphoneIcon, ShoppingCartIcon, BuildingIcon, Rocket, Wrench, TrendingUp } from "lucide-react";
import React, { useState } from "react";

// Sample guides data
const guides = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Getting Started",
    description: "Essential insights for launching your dispensary with confidence."
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    title: "Everyday Operations",
    description: "Streamline daily workflows and reduce errors with proven processes."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Business Growth",
    description: "Strategies, automations, and features to take your business to the next level."
  }
];

export default function BleaumSOPsPage() {
  const [search, setSearch] = useState("");
  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(search.toLowerCase()) ||
    guide.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Bleaum Guides & Standard Operating Procedures (SOPs)
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Built for clarity, scalability, and success.
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Whether you&apos;re opening your first location or scaling operations across multiple states, Bleaum&apos;s SOPs and guides are here to support your every step—from compliance to growth strategy.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder=" Search guides…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-gray-100"
            />
            <SearchIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Business Stages Section */}
      {/* <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">What stage is your business in?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Rocket className="w-8 h-8 text-blue-500" />,
              title: "Getting Started",
              description: "Essential insights for launching your dispensary with confidence."
            },
            {
              icon: <Wrench className="w-8 h-8 text-blue-500" />,
              title: "Everyday Operations",
              description: "Streamline daily workflows and reduce errors with proven processes."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
              title: "Business Growth",
              description: "Strategies, automations, and features to take your business to the next level."
            }
          ].map((stage, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl mb-4">{stage.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{stage.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{stage.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Topics Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">What topics are you interested in?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            "Compliance", "Delivery", "Ecommerce", "Emergency", "Events",
            "Integrations", "Inventory", "Loyalty", "Marketing", "Operational",
            "Payments", "Point of Sale", "Sales", "Security", "Staffing"
          ].map((topic, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200"
            >
              <div className="w-4 h-4 border-2 border-blue-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
              </div>
              <span className="text-gray-700 dark:text-gray-300">{topic}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Guides Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100"> Featured Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  {guide.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{guide.title}</h4>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Want something specific?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/resources/sops/all">
            <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
              Browse all guides by topic
            </button>
          </Link>
          <Link href="/demo">
            <button className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-300">
              Schedule a live onboarding walkthrough
            </button>
          </Link>
          <Link href="/resources/sops/checklists">
            <button className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-300">
              Download printable SOP checklists
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}