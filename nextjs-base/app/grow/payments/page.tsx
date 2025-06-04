import Link from "next/link";

export default function PaymentsPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bleaum Pay: 🚀 Simple, Secure Cashless Payments for Dispensaries</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">More flexibility for your customers. More revenue for your store.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum Pay is a fully integrated, ACH-based digital payment solution built right into the Bleaum platform—point of sale, delivery, and e-commerce. It's fast, compliant, and eliminates cash from your workflow while increasing sales and safety.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">👉 See Bleaum Pay in Action</button>
      </Link>

      <h2 className="text-2xl font-bold mt-8 mb-4">💸 Cash-Free Convenience with Bleaum Pay</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Let customers pay directly from their bank accounts—online or in-store—without ever touching cash.<br/>
        No terminals. No extra apps. Just seamless, modern payments that elevate your entire operation.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>🔒 100% secure.</li>
        <li>⚖ Fully compliant.</li>
        <li>💡 Ready to activate inside Bleaum.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">📈 Maximize Revenue Potential</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>💰 Dispensaries using bank-based payments see 25–30% higher order values</li>
        <li>🔁 Repeat customers return faster with easier checkout</li>
        <li>🚀 More loyalty, less friction at every touchpoint</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">💼 Eliminate the Cash Burden</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li>🔐 Protect your staff and store from theft</li>
        <li>💸 Lower operating costs tied to cash pickups, storage, and human error</li>
        <li>🔄 Automate reporting with synced, real-time transaction data</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">✅ One-Click Setup for Customers</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        After a quick one-time setup, shoppers can pay with just one tap—online or in-store.<br/>
        No cards. No PINs. Just a better customer experience.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">🔐 Safe, Streamlined & Smart</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
        <li><b>Security First:</b> End-to-end encrypted payments built to cannabis regulations.</li>
        <li><b>Efficiency Built-In:</b> Linked directly to your POS and Bleaum Ecommerce—no data entry, no syncing headaches.</li>
        <li><b>Completely Integrated:</b> Manage everything in one place: inventory, orders, payments, and customers.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Ready to Ditch the Cash Drawer?</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Let's show you how Bleaum Pay is redefining cannabis payments—from register to doorstep.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">👉 Get a Demo of Bleaum Pay</button>
      </Link>
    </div>
  );
} 