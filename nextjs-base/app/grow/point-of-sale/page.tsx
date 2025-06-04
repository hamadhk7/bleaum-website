import Link from "next/link";

export default function BleaumPOSPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bleaum Point of Sale</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Built for cannabis. Powered by precision.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        A modern cannabis POS designed to help dispensaries, processors, and wholesalers grow smarter, scale faster, and operate seamlessly.<br/>
        Bleaum isn't just a system—it's an ecosystem. With real-time inventory audits, advanced compliance tools, and A-to-Z retail automation, Bleaum helps operators stay ahead of the curve while delivering standout customer experiences.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">👉 Book a demo</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">A POS system that actually simplifies your cannabis business.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum POS is fast, flexible, and fully integrated across your operations—retail, wholesale, delivery, back office, and beyond. Built with traceability, customization, and speed at its core, our cloud platform gives you total control without the usual headaches.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">The Bleaum Difference</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>🧠 Smarter tech, built for scale:</b> From the register to the warehouse, Bleaum gives you total visibility and control. Whether you have one store or ten, our unified platform grows with you.</li>
        <li><b>🔄 Integrated end-to-end:</b> Compliance, inventory, accounting, last-mile delivery, and customer engagement—all connected through one simple, powerful platform.</li>
        <li><b>⚡ Built for speed, not stress:</b> No more slow systems or clunky menus. Our modern UI means budtenders fly through checkouts and managers move through audits in half the time.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Front of House</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>🧾 Clean, fast register interface:</b> Simple design. Lightning-fast checkout. Minimal training required. Enable staff to focus on customers—not the tech.</li>
        <li><b>👤 Insights that drive revenue:</b> View purchase history, preferences, and cart behavior right at the register. Empower staff to upsell intelligently with data that actually matters.</li>
        <li><b>🛒 Omnichannel order flow:</b> In-store, online, or delivery? Bleaum supports all order types with custom workflows so your team can adapt on the fly.</li>
        <li><b>🧩 Hardware that just works:</b> Reset devices. Run diagnostics. All from the POS—no IT calls, no downtime.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Back of House</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>📊 Reporting that tells the whole story:</b> Sales, inventory, team performance, promotions, and more—track everything in real-time and drill into what's actually working.</li>
        <li><b>🧾 Midday inventory audits:</b> Bleaum's biggest breakthrough: live, accurate inventory checks without shutting down operations. Count faster. Catch theft. Prevent waste. No late nights.</li>
        <li><b>🏷 Discounts made simple:</b> Set BOGOs, happy hours, stackable promos, and delivery-specific deals—across store, app, and web.</li>
        <li><b>📜 Compliance, not complexity:</b> Automated METRC syncing, audit logs, labeling, and error detection keep you compliant, not confused.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Compliance & Automation</h3>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>✅ Real-time traceability:</b> Built-in syncing with METRC, plus deep audit trails and alerts for missing actions or violations—so you're never blindsided.</li>
        <li><b>💳 Cannabis-friendly payments:</b> We support your reality. Bleaum connects with debit, cashless ATM, ACH, or Pay by Bank—no clunky workarounds.</li>
        <li><b>🧬 Strain-level control:</b> Track by strain, batch, and weight. Customize your SKUs to fit your exact operation, no compromises.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">See it in action</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum is more than a POS. It's your operation's command center.<br/>
        We don't just plug into cannabis—we power it.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">👉 Book your personalized demo</button>
      </Link>
    </div>
  );
} 