"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SearchIcon, FlagIcon, MapIcon, ArrowRightIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const usStates = [
  { state: "Alabama", code: "AL", status: "Medical only" },
  { state: "Alaska", code: "AK", status: "Both Medical and Adult-Use" },
  { state: "Arizona", code: "AZ", status: "Both Medical and Adult-Use" },
  { state: "Arkansas", code: "AR", status: "Medical only" },
  { state: "California", code: "CA", status: "Both Medical and Adult-Use" },
  { state: "Colorado", code: "CO", status: "Both Medical and Adult-Use" },
  { state: "Connecticut", code: "CT", status: "Both Medical and Adult-Use" },
  { state: "Delaware", code: "DE", status: "Medical only" },
  { state: "Florida", code: "FL", status: "Medical only" },
  { state: "Georgia", code: "GA", status: "Medical limited", icon: "🍑" },
  { state: "Hawaii", code: "HI", status: "Medical only", icon: "🌺" },
  { state: "Idaho", code: "ID", status: "Prohibited", icon: "🥔" },
  { state: "Illinois", code: "IL", status: "Both Medical and Adult-Use", icon: "🌆" },
  { state: "Indiana", code: "IN", status: "Prohibited", icon: "🏀" },
  { state: "Iowa", code: "IA", status: "Medical limited", icon: "🌽" },
  { state: "Kansas", code: "KS", status: "CBD only", icon: "🌾" },
  { state: "Kentucky", code: "KY", status: "Prohibited", icon: "🐎" },
  { state: "Louisiana", code: "LA", status: "Medical only", icon: "🎭" },
  { state: "Maine", code: "ME", status: "Both Medical and Adult-Use", icon: "🦞" },
  { state: "Maryland", code: "MD", status: "Both Medical and Adult-Use", icon: "🦀" },
  { state: "Massachusetts", code: "MA", status: "Both Medical and Adult-Use", icon: "⚓" },
  { state: "Michigan", code: "MI", status: "Both Medical and Adult-Use", icon: "🌊" },
  { state: "Minnesota", code: "MN", status: "Both Medical and Adult-Use", icon: "❄️" },
  { state: "Mississippi", code: "MS", status: "Medical only", icon: "🎵" },
  { state: "Missouri", code: "MO", status: "Medical only", icon: "🌳" },
  { state: "Montana", code: "MT", status: "Both Medical and Adult-Use", icon: "🏔️" },
  { state: "Nebraska", code: "NE", status: "CBD only", icon: "🌾" },
  { state: "Nevada", code: "NV", status: "Both Medical and Adult-Use", icon: "🎰" },
  { state: "New Hampshire", code: "NH", status: "Both Medical and Adult-Use", icon: "🍁" },
  { state: "New Jersey", code: "NJ", status: "Both Medical and Adult-Use", icon: "🌊" },
  { state: "New Mexico", code: "NM", status: "Both Medical and Adult-Use", icon: "🌵" },
  { state: "New York", code: "NY", status: "Both Medical and Adult-Use", icon: "🗽" },
  { state: "North Carolina", code: "NC", status: "Prohibited", icon: "🌲" },
  { state: "North Dakota", code: "ND", status: "Medical only", icon: "🌾" },
  { state: "Ohio", code: "OH", status: "Medical only", icon: "🌳" },
  { state: "Oklahoma", code: "OK", status: "Medical only", icon: "🌪️" },
  { state: "Oregon", code: "OR", status: "Both Medical and Adult-Use", icon: "🌲" },
  { state: "Pennsylvania", code: "PA", status: "Medical only", icon: "🔔" },
  { state: "Rhode Island", code: "RI", status: "Both Medical and Adult-Use", icon: "🌊" },
  { state: "South Carolina", code: "SC", status: "CBD only", icon: "🌴" },
  { state: "South Dakota", code: "SD", status: "Both Medical and Adult-Use", icon: "🏔️" },
  { state: "Tennessee", code: "TN", status: "CBD only", icon: "🎵" },
  { state: "Texas", code: "TX", status: "Medical limited", icon: "🤠" },
  { state: "Utah", code: "UT", status: "Medical only", icon: "🏔️" },
  { state: "Vermont", code: "VT", status: "Both Medical and Adult-Use", icon: "🍁" },
  { state: "Virginia", code: "VA", status: "Both Medical and Adult-Use", icon: "🌳" },
  { state: "Washington", code: "WA", status: "Both Medical and Adult-Use", icon: "🌲" },
  { state: "West Virginia", code: "WV", status: "Medical only", icon: "🏔️" },
  { state: "Wisconsin", code: "WI", status: "CBD only", icon: "🧀" },
  { state: "Wyoming", code: "WY", status: "CBD only", icon: "🏔️" },
  { state: "District of Columbia", code: "DC", status: "Both Medical and Adult-Use", icon: "🏛️" }
];
const caProvinces = [
  { province: "Alberta", code: "AB", status: "Both Medical and Adult-Use" },
  { province: "British Columbia", code: "BC", status: "Both Medical and Adult-Use" },
  { province: "Manitoba", code: "MB", status: "Both Medical and Adult-Use" },
  { province: "New Brunswick", code: "NB", status: "Both Medical and Adult-Use" },
  { province: "Newfoundland & Labrador", code: "NL", status: "Both Medical and Adult-Use" },
  { province: "Northwest Territories", code: "NT", status: "Both Medical and Adult-Use" },
  { province: "Nova Scotia", code: "NS", status: "Both Medical and Adult-Use" },
  { province: "Nunavut", code: "NU", status: "Both Medical and Adult-Use" },
  { province: "Ontario", code: "ON", status: "Both Medical and Adult-Use" },
  { province: "Prince Edward Island", code: "PE", status: "Both Medical and Adult-Use", icon: "🌊" },
  { province: "Quebec", code: "QC", status: "Both Medical and Adult-Use", icon: "🍁" },
  { province: "Saskatchewan", code: "SK", status: "Both Medical and Adult-Use", icon: "🌾" },
  { province: "Yukon", code: "YT", status: "Both Medical and Adult-Use", icon: "❄️" }
];

const statusColors: { [key: string]: string } = {
  "Both Medical and Adult-Use": "#2563eb",
  "Medical only": "#22d3ee",
  "Medical limited": "#f59e42",
  "CBD only": "#a3e635",
  "Prohibited": "#ef4444"
};

type ChartDatum = { status: string; count: number };

function getStatusChartData(states: { status: string }[]): ChartDatum[] {
  const counts: { [key: string]: number } = {};
  states.forEach((s) => {
    counts[s.status] = (counts[s.status] || 0) + 1;
  });
  return Object.entries(counts).map(([status, count]) => ({ status, count }));
}

export default function BleaumStateLawsPage() {
  const [search, setSearch] = useState("");
  const filteredStates = usStates.filter(
    s =>
      s.state.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
  );
  const filteredProvinces = caProvinces.filter(
    p =>
      p.province.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase())
  );
  const chartData = getStatusChartData(usStates);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Cannabis Laws and Compliance
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          US States & Canadian Provinces
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay informed about cannabis regulations, compliance requirements, and market opportunities across North America.
        </p>
        <Link href="/demo">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
            Schedule a demo
          </button>
        </Link>
      </div>

      {/* Chart Section */}
      <div className="mb-12 bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">US State Law Status Overview</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="status" type="category" width={180} tick={{ fill: '#2563eb', fontWeight: 600, fontSize: 14 }} />
            <Tooltip />
            <Bar dataKey="count">
              {chartData.map((entry, idx) => (
                <Cell key={entry.status} fill={statusColors[entry.status] || "#2563eb"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <SearchIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Find your jurisdiction</h2>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search by state or province..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-gray-100 shadow"
          />
          <SearchIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* United States Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <FlagIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">United States</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((state, index) => (
            <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{state.state}</h4>
              <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-semibold mb-2">{state.code}</span>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-2 ${
                state.status === "Both Medical and Adult-Use"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : state.status === "Medical only"
                  ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"
                  : state.status === "Prohibited"
                  ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                  : state.status === "CBD only"
                  ? "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-200"
                  : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200"
              }`}>{state.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Canada Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <MapIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Canada</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProvinces.map((province, index) => (
            <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{province.province}</h4>
              <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-semibold mb-2">{province.code}</span>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-2 ${
                province.status === "Both Medical and Adult-Use"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                  : province.status === "Medical only"
                  ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"
                  : province.status === "Prohibited"
                  ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                  : province.status === "CBD only"
                  ? "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-200"
                  : "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200"
              }`}>{province.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800 shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white dark:bg-blue-900/50 rounded-xl">
            <ArrowRightIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Need help with compliance?</h3>
        </div>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Our team can help you navigate the complex regulatory landscape and ensure your business stays compliant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/demo">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
              Schedule a compliance consultation
            </button>
          </Link>
          <Link href="/resources/sops">
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-semibold px-8 py-3 rounded-full transition-all duration-300">
              View compliance guides
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
} 