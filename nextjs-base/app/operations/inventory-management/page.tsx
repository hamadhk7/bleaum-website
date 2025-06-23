import Link from "next/link";
import {
  PackageIcon,
  ZapIcon,
  ShieldCheckIcon,
  BarChart2Icon,
  StoreIcon,
  PrinterIcon,
  CheckCircle2Icon,
  LayersIcon,
  AlertCircleIcon,
  TagIcon,
  UsersIcon,
  SearchIcon,
} from "lucide-react";

export default function InventoryManagementPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <PackageIcon className="w-8 h-8 text-blue-500" />
        Inventory Built for Smart Operators
      </h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Mid day counts - Blind audits - Manager approvals<br/>The fastest, most accurate inventory system in cannabis.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        With Bleaum, you don&apos;t wait until closing time to count inventory—you stay ahead, in real time. From midday audits to manager-reviewed blind counts, Bleaum&apos;s POS-integrated inventory system is built to eliminate loss, reduce overhead, and unlock precision.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Schedule a demo</button>
      </Link>

      <div className="space-y-12">
        {/* Real-Time Audits Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ZapIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Real-Time Audits, Any Time of Day</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Why wait? Count in the flow of business.<br/>Our unique inventory tools let you pause, count, and approve in real time—without shutting down operations.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Conduct audits while processing orders</li>
            <li className="flex items-start gap-3"><UsersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Assign blind counts to staff</li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Approve results with manager sign-off</li>
            <li className="flex items-start gap-3"><AlertCircleIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Instant variance detection and alerting</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />All audit logs saved for reporting and compliance</li>
          </ul>
        </section>

        {/* Dynamic Inventory Management Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <LayersIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Dynamic Inventory Management</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Move fast, stay accurate.<br/>Track, update, and adjust inventory across all locations, sales channels, and states—with zero lag.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><TagIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Bulk adjust, transfer, or label items</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Real-time syncing with sales and fulfillment</li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Full support for batch, strain, and weight tracking</li>
            <li className="flex items-start gap-3"><AlertCircleIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Instantly create restock or reorder alerts</li>
          </ul>
        </section>

        {/* Traceability and Compliance Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Traceability and Compliance Built In</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Your compliance assistant—built into your POS.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />One-click package acceptance from Metrc</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Two-way syncing with BioTrack and other systems</li>
            <li className="flex items-start gap-3"><AlertCircleIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Limit overages automatically</li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Instantly see what&apos;s in compliance—and what&apos;s not</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Full history of every item, from seed to sale</li>
          </ul>
        </section>

        {/* See the Full Picture Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2Icon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">See the Full Picture</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Data that drives smarter decisions.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><SearchIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Know what&apos;s moving, what&apos;s sitting, and what&apos;s missing</li>
            <li className="flex items-start gap-3"><StoreIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />View stock across every location, warehouse, or zone</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Pull performance reports instantly</li>
            <li className="flex items-start gap-3"><UsersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Customize dashboards by role—manager, buyer, or operator</li>
          </ul>
        </section>

        {/* Multi-Location Ready Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <StoreIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Multi-Location Ready</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">One system to manage them all.<br/>Whether you operate one store or one hundred, Bleaum keeps all your inventory data unified, accurate, and accessible.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><StoreIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Centralized product control</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Sync inventory across stores and online</li>
            <li className="flex items-start gap-3"><TagIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Control pricing, discounts, and availability per location</li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Smooth integration with ecommerce, POS, and delivery</li>
          </ul>
        </section>

        {/* Bulk Actions Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PrinterIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Bulk Actions, Label Printing, Instant Adjustments.</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">No more clicking through menus for every SKU.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Move, relabel, or adjust 10 items—or 1,000—with just a few clicks</li>
            <li className="flex items-start gap-3"><UsersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Create audit schedules and assign team roles</li>
            <li className="flex items-start gap-3"><PrinterIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Print compliant labels instantly</li>
            <li className="flex items-start gap-3"><AlertCircleIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Bulk reject, quarantine, or recall flagged products</li>
          </ul>
        </section>

        {/* Operational Intelligence Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2Icon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Bleaum Inventory = Operational Intelligence</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">No fluff. No guesswork. Just smarter inventory in your hands, all day, every day.</p>
        </section>
      </div>

      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">See why operators call it the best in the industry</button>
      </Link>
    </div>
  );
} 