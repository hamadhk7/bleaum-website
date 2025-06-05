'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EcommercePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100"> Bleaum Ecommerce</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Branded, powerful, and fully connected ecommerce for modern dispensaries.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Branded, powerful, and fully connected ecommerce for modern dispensaries.<br/>
        Bleaum's white-labeled ecommerce solution gives your dispensary the ability to own your customer experience end-to-end. From a beautifully branded mobile app to a fully integrated web portal — it's your store, your data, and your community.
      </p>

      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">  Launch Your Store</button>
      </Link>

      <h3 className="text-xl font-semibold mt-8 mb-2">🚀 Native Ecommerce Built for Growth</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Sell online with confidence using Bleaum's fully branded website and mobile app. Your name, your logo, your colors — your customers. No redirecting. No third-party branding.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>iOS & Android native apps</li>
        <li>Responsive web design</li>
        <li>Seamlessly syncs with POS</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">💳 Memberships, Loyalty, and Rewards</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Build long-term loyalty with built-in programs that drive repeat purchases and brand affinity.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Automated points & rewards system</li>
        <li>Scan a QR code in-store to earn points</li>
        <li>Launch a &quot;Refer a Friend&quot; campaign in seconds</li>
        <li>Customizable tiers & perks for VIP members</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">📅 Community-Driven Commerce</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Go beyond transactions — build community. Your Bleaum ecommerce platform includes a calendar system for events, product drops, sales, and more.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Push notifications to both web and app users</li>
        <li>Promote flash sales, educational sessions, drops</li>
        <li>Grow engagement with recurring in-app events</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">📦 Integrated Delivery from Checkout to Doorstep</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Your ecommerce is connected to Bleaum POS and the last-mile delivery app, making fulfillment smoother than ever.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Real-time product availability</li>
        <li>Delivery route optimization</li>
        <li>Driver app with OTP verification and live tracking</li>
        <li>Order updates sent to customers automatically</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">🌐 One Ecosystem, Zero Friction</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Because your ecommerce, POS, delivery, payments, and compliance are all built inside Bleaum, you get:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>No sync errors</li>
        <li>No need for 5 different vendors</li>
        <li>One dashboard for it all</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">🏷 Own Your Brand. Own Your Store.</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum gives you the tools to build a dispensary that lasts.
        Create a frictionless experience for your customers. Build loyalty. Deliver faster. Market smarter.
      </p>

      <div className="mt-8">
        <Link
          href="/demo"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"> Schedule Your Ecommerce Demo</button>
        </Link>
      </div>
    </div>
  );
} 