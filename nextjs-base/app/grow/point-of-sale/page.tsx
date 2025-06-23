import Link from "next/link";
import {
  ShoppingCartIcon,
  ZapIcon,
  UserIcon,
  BarChart2Icon,
  FileTextIcon,
  CheckCircle2Icon,
  TagIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  LayersIcon,
  EyeIcon,
} from "lucide-react";

export default function BleaumPOSPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <ShoppingCartIcon className="w-8 h-8 text-blue-500" />
        Bleaum Point of Sale
      </h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Built for cannabis. Powered by precision.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        A modern cannabis POS designed to help dispensaries, processors, and wholesalers grow smarter, scale faster, and operate seamlessly.<br />
        Bleaum isn&apos;t just a system—it&apos;s an ecosystem. With real-time inventory audits, advanced compliance tools, and A-to-Z retail automation, Bleaum helps operators stay ahead of the curve while delivering standout customer experiences.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Book a demo</button>
      </Link>

      <div className="space-y-12">
        {/* POS System Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ZapIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">A POS system that actually simplifies your cannabis business.</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Bleaum POS is fast, flexible, and fully integrated across your operations—retail, wholesale, delivery, back office, and beyond. Built with traceability, customization, and speed at its core, our cloud platform gives you total control without the usual headaches.
          </p>
        </section>

        {/* The Bleaum Difference Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2Icon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">The Bleaum Difference</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><UserIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Smarter tech, built for scale:</b> From the register to the warehouse, Bleaum gives you total visibility and control. Whether you have one store or ten, our unified platform grows with you.</span></li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Integrated end-to-end:</b> Compliance, inventory, accounting, last-mile delivery, and customer engagement—all connected through one simple, powerful platform.</span></li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Built for speed, not stress:</b> No more slow systems or clunky menus. Our modern UI means budtenders fly through checkouts and managers move through audits in half the time.</span></li>
          </ul>
        </section>

        {/* Front of House Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileTextIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Front of House</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Clean, fast register interface:</b> Simple design. Lightning-fast checkout. Minimal training required. Enable staff to focus on customers—not the tech.</span></li>
            <li className="flex items-start gap-3"><EyeIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Insights that drive revenue:</b> View purchase history, preferences, and cart behavior right at the register. Empower staff to upsell intelligently with data that actually matters.</span></li>
            <li className="flex items-start gap-3"><ShoppingCartIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Omnichannel order flow:</b> In-store, online, or delivery? Bleaum supports all order types with custom workflows so your team can adapt on the fly.</span></li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Hardware that just works:</b> Reset devices. Run diagnostics. All from the POS—no IT calls, no downtime.</span></li>
          </ul>
        </section>

        {/* Back of House Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2Icon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Back of House</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><FileTextIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Reporting that tells the whole story:</b> Sales, inventory, team performance, promotions, and more—track everything in real-time and drill into what&apos;s actually working.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Midday inventory audits:</b> Bleaum&apos;s biggest breakthrough: live, accurate inventory checks without shutting down operations. Count faster. Catch theft. Prevent waste. No late nights.</span></li>
            <li className="flex items-start gap-3"><TagIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Discounts made simple:</b> Set BOGOs, happy hours, stackable promos, and delivery-specific deals—across store, app, and web.</span></li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Compliance, not complexity:</b> Automated METRC syncing, audit logs, labeling, and error detection keep you compliant, not confused.</span></li>
          </ul>
        </section>

        {/* Compliance & Automation Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Compliance & Automation</h3>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Real-time traceability:</b> Built-in syncing with METRC, plus deep audit trails and alerts for missing actions or violations—so you&apos;re never blindsided.</span></li>
            <li className="flex items-start gap-3"><CreditCardIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Cannabis-friendly payments:</b> We support your reality. Bleaum connects with debit, cashless ATM, ACH, or Pay by Bank—no clunky workarounds.</span></li>
            <li className="flex items-start gap-3"><LayersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><span><b>Strain-level control:</b> Track by strain, batch, and weight. Customize your SKUs to fit your exact operation, no compromises.</span></li>
          </ul>
        </section>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-3"><EyeIcon className="w-8 h-8 text-blue-500" />See it in action</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum is more than a POS. It&apos;s your operation&apos;s command center.<br />
        We don&apos;t just plug into cannabis—we power it.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Book your personalized demo</button>
      </Link>
    </div>
  );
} 