import Link from "next/link";

export default function InventoryManagementPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">🧠 Inventory Built for Smart Operators</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Midday counts. Blind audits. Manager approvals.<br/>The fastest, most accurate inventory system in cannabis.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        With Bleaum, you don't wait until closing time to count inventory—you stay ahead, in real time. From midday audits to manager-reviewed blind counts, Bleaum's POS-integrated inventory system is built to eliminate loss, reduce overhead, and unlock precision.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">👉 Schedule a demo</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">🚀 Real-Time Audits, Any Time of Day</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Why wait? Count in the flow of business.<br/>Our unique inventory tools let you pause, count, and approve in real time—without shutting down operations.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Conduct audits while processing orders</li>
        <li>Assign blind counts to staff</li>
        <li>Approve results with manager sign-off</li>
        <li>Instant variance detection and alerting</li>
        <li>All audit logs saved for reporting and compliance</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">📦 Dynamic Inventory Management</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Move fast, stay accurate.<br/>Track, update, and adjust inventory across all locations, sales channels, and states—with zero lag.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Bulk adjust, transfer, or label items</li>
        <li>Real-time syncing with sales and fulfillment</li>
        <li>Full support for batch, strain, and weight tracking</li>
        <li>Instantly create restock or reorder alerts</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🔐 Traceability and Compliance Built In</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Your compliance assistant—built into your POS.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>One-click package acceptance from Metrc</li>
        <li>Two-way syncing with BioTrack and other systems</li>
        <li>Limit overages automatically</li>
        <li>Instantly see what's in compliance—and what's not</li>
        <li>Full history of every item, from seed to sale</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">📊 See the Full Picture</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Data that drives smarter decisions.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Know what's moving, what's sitting, and what's missing</li>
        <li>View stock across every location, warehouse, or zone</li>
        <li>Pull performance reports instantly</li>
        <li>Customize dashboards by role—manager, buyer, or operator</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🏪 Multi-Location Ready</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">One system to manage them all.<br/>Whether you operate one store or one hundred, Bleaum keeps all your inventory data unified, accurate, and accessible.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Centralized product control</li>
        <li>Sync inventory across stores and online</li>
        <li>Control pricing, discounts, and availability per location</li>
        <li>Smooth integration with ecommerce, POS, and delivery</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🧰 Bulk Actions. Label Printing. Instant Adjustments.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">No more clicking through menus for every SKU.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Move, relabel, or adjust 10 items—or 1,000—with just a few clicks</li>
        <li>Create audit schedules and assign team roles</li>
        <li>Print compliant labels instantly</li>
        <li>Bulk reject, quarantine, or recall flagged products</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🔎 Bleaum Inventory = Operational Intelligence</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">No fluff. No guesswork. Just smarter inventory in your hands, all day, every day.</p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">👉 See why operators call it the best in the industry</button>
      </Link>
    </div>
  );
} 