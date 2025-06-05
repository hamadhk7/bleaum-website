'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function EcommercePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bleaum Ecommerce</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Branded, powerful, and fully connected ecommerce for modern dispensaries.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum's white-labeled ecommerce solution gives your dispensary the ability to own your customer experience end-to-end. From a beautifully branded mobile app to a fully integrated web portal — it's your store, your data, and your community.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Launch Your Store</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">Native Ecommerce Built for Growth</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Sell online with confidence using Bleaum's fully branded website and mobile app. Your name, your logo, your colors — your customers. No redirecting. No third-party branding.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">White-Labeled Web Portal & Mobile App</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>📲 Native Apps:</b> iOS & Android native apps for seamless mobile shopping</li>
        <li><b>💻 Responsive Design:</b> Beautiful, responsive web design that works on any device</li>
        <li><b>⚡ POS Integration:</b> Seamlessly syncs with your Bleaum POS system</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Memberships, Loyalty, and Rewards</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>🎁 Automated Points:</b> Built-in points & rewards system that drives repeat purchases</li>
        <li><b>🔍 QR Code Integration:</b> Scan a QR code in-store to earn points instantly</li>
        <li><b>🤝 Referral Program:</b> Launch a "Refer a Friend" campaign in seconds</li>
        <li><b>👑 VIP Tiers:</b> Customizable tiers & perks for your most loyal customers</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Community-Driven Commerce</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>📢 Smart Notifications:</b> Push notifications to both web and app users</li>
        <li><b>✨ Event Promotion:</b> Promote flash sales, educational sessions, and product drops</li>
        <li><b>📆 Recurring Events:</b> Grow engagement with recurring in-app events</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Integrated Delivery from Checkout to Doorstep</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>📈 Real-time Inventory:</b> Live product availability across all channels</li>
        <li><b>🎯 Route Optimization:</b> Smart delivery route optimization for efficiency</li>
        <li><b>🚚 Driver App:</b> Complete with OTP verification and live tracking</li>
        <li><b>📬 Auto Updates:</b> Order updates sent to customers automatically</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">One Ecosystem, Zero Friction</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>🔄 Perfect Sync:</b> No sync errors between systems</li>
        <li><b>🔌 Unified Platform:</b> No need for 5 different vendors</li>
        <li><b>📊 Single Dashboard:</b> One dashboard to manage it all</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Own Your Brand. Own Your Store.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum gives you the tools to build a dispensary that lasts.
        Create a frictionless experience for your customers. Build loyalty. Deliver faster. Market smarter.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Schedule Your Ecommerce Demo</button>
      </Link>
    </div>
  );
} 