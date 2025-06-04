import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">🚚 Bleaum Last-Mile Delivery</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Full Control. Faster Routes. Better Cannabis Delivery.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Meet the most advanced last-mile delivery platform in cannabis—fully integrated with Bleaum POS and your ecommerce experience. From tap to doorstep, Bleaum's driver app and real-time dashboard make delivery effortless for your team and exceptional for your customers.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">👉 Book a demo</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">🔗 Seamless From Order to Arrival</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        One system, no switching tabs.<br/>
        Bleaum Delivery is tightly integrated with your POS, customer app, inventory tools, and compliance protocols. That means smoother workflows, zero manual syncing, and faster fulfillment at scale.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Orders flow automatically from POS to driver app</li>
        <li>Inventory is updated in real time as orders are packed and delivered</li>
        <li>Route assignments, manifests, and compliance rules—all in one place</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🧭 A Driver App That Drives Results</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Give your team the tools to move faster.<br/>Our dedicated driver mobile app does more than just map stops—it turns delivery into a true extension of your customer experience.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Turn-by-turn navigation built in</li>
        <li>Route optimization for multiple stops</li>
        <li>One-tap status updates (On Route, Delivered, Delayed)</li>
        <li>Digital ID check and signature capture</li>
        <li>Secure order tracking with full history and photo proof</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">📍 Dynamic Delivery Zones & GPS Routing</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">You're in control.<br/>Set rules based on zones, real-time GPS, time windows, or order value.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Zone-based or GPS-based route generation</li>
        <li>Dynamic delivery windows based on driver availability</li>
        <li>Support for scheduled or on-demand delivery</li>
        <li>Easily adjust pricing, fees, and limits per region</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">📦 Inventory on Wheels, Tracked to the Gram</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Compliance, handled.<br/>No more guesswork—track every gram of inventory across drivers, routes, and time.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Real-time inventory syncing with POS</li>
        <li>Vehicle-specific limits and compliance caps</li>
        <li>Automated return-to-store workflows</li>
        <li>Manifest creation and audit logs built in</li>
        <li>Full traceability from pack to delivery</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🔄 Deliver More, Stress Less</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Built for scale.<br/>Whether you're running a single driver or a fleet, Bleaum helps you deliver more, faster—with less overhead.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Assign and batch multiple orders per route</li>
        <li>Auto-prioritize based on time sensitivity</li>
        <li>Customize workflows per driver or store</li>
        <li>Review daily performance with built-in analytics</li>
        <li>Integrations with leading fleet systems and tools</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">💬 Better Customer Experience</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Fast. Transparent. Friendly.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>Real-time order updates via SMS or app</li>
        <li>Driver ETAs and delivery tracking</li>
        <li>Custom notifications when their order is on the way</li>
        <li>Reorder in one tap from past delivery history</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">🚀 Deliver Cannabis the Right Way</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Bleaum Last-Mile isn't an add-on—it's the future of cannabis delivery.<br/>Seamless. Compliant. Intelligent. Yours.</p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">👉 Schedule a demo to see it in action</button>
      </Link>
    </div>
  );
} 