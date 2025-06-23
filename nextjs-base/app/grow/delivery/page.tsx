import Link from "next/link";
import {
  TruckIcon,
  ZapIcon,
  MapPinIcon,
  PackageIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  UserIcon,
  BarChart2Icon,
  ShieldCheckIcon,
  SmartphoneIcon,
  MessageSquareIcon,
  SmileIcon,
  LayersIcon,
  DollarSign,
} from "lucide-react";

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <TruckIcon className="w-8 h-8 text-blue-500" />
        Bleaum Last-Mile Delivery
      </h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Full Control. Faster Routes. Better Cannabis Delivery.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Meet the most advanced last-mile delivery platform in cannabis—fully integrated with Bleaum POS and your ecommerce experience. From tap to doorstep, Bleaum&apos;s driver app and real-time dashboard make delivery effortless for your team and exceptional for your customers.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Book a demo</button>
      </Link>

      <div className="space-y-12">
        {/* Seamless From Order to Arrival Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCwIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Seamless From Order to Arrival</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            One system, no switching tabs.<br />
            Bleaum Delivery is tightly integrated with your POS, customer app, inventory tools, and compliance protocols. That means smoother workflows, zero manual syncing, and faster fulfillment at scale.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Orders flow automatically from POS to driver app</li>
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Inventory is updated in real time as orders are packed and delivered</li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Route assignments, manifests, and compliance rules—all in one place</li>
          </ul>
        </section>

        {/* Driver App Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SmartphoneIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">A Driver App That Drives Results</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Give your team the tools to move faster.<br />Our dedicated driver mobile app does more than just map stops—it turns delivery into a true extension of your customer experience.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><MapPinIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Turn-by-turn navigation built in</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Route optimization for multiple stops</li>
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />One-tap status updates (On Route, Delivered, Delayed)</li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Digital ID check and signature capture</li>
            <li className="flex items-start gap-3"><PackageIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Secure order tracking with full history and photo proof</li>
          </ul>
        </section>

        {/* Dynamic Delivery Zones Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MapPinIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Dynamic Delivery Zones & GPS Routing</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">You&apos;re in control.<br />Set rules based on zones, real-time GPS, time windows, or order value.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><MapPinIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Zone-based or GPS-based route generation</li>
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Dynamic delivery windows based on driver availability</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Support for scheduled or on-demand delivery</li>
            <li className="flex items-start gap-3"><DollarSign className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Easily adjust pricing, fees, and limits per region</li>
          </ul>
        </section>

        {/* Inventory on Wheels Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <PackageIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Inventory on Wheels, Tracked to the Gram</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Compliance, handled.<br />No more guesswork&apos;—track every gram of inventory across drivers, routes, and time.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Real-time inventory syncing with POS</li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Vehicle-specific limits and compliance caps</li>
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Automated return-to-store workflows</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Manifest creation and audit logs built in</li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Full traceability from pack to delivery</li>
          </ul>
        </section>

        {/* Deliver More, Stress Less Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ZapIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Deliver More, Stress Less</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Built for scale.<br />Whether you&apos;re running a single driver or a fleet, Bleaum helps you deliver more, faster—with less overhead.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Assign and batch multiple orders per route</li>
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Auto-prioritize based on time sensitivity</li>
            <li className="flex items-start gap-3"><UserIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Customize workflows per driver or store</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Review daily performance with built-in analytics</li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Integrations with leading fleet systems and tools</li>
          </ul>
        </section>

        {/* Better Customer Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SmileIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Better Customer Experience</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Fast. Transparent. Friendly.</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><MessageSquareIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Real-time order updates via SMS or app</li>
            <li className="flex items-start gap-3"><SmartphoneIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Driver ETAs and delivery tracking</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Custom notifications when their order is on the way</li>
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Reorder in one tap from past delivery history</li>
          </ul>
        </section>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-3"><TruckIcon className="w-8 h-8 text-blue-500" />Deliver Cannabis the Right Way</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Bleaum Last-Mile isn&apos;t an add-on—it&apos;s the future of cannabis delivery.<br />Seamless. Compliant. Intelligent. Yours.</p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Schedule a demo to see it in action</button>
      </Link>
    </div>
  );
} 