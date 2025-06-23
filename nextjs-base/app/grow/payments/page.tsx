import Link from "next/link";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  RefreshCwIcon,
  CheckCircle2Icon,
  UserIcon,
  BarChart2Icon,
  ZapIcon,
  WalletIcon,
  LockIcon,
  DollarSignIcon,
  SmileIcon,
} from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <CreditCardIcon className="w-8 h-8 text-blue-500" />
        Bleaum Pay: Simple, Secure Cashless Payments for Dispensaries
      </h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">More flexibility for your customers. More revenue for your store.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum Pay is a fully integrated, ACH-based digital payment solution built right into the Bleaum platform—point of sale, delivery, and e-commerce. It&apos;s fast, compliant, and eliminates cash from your workflow while increasing sales and safety.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">See Bleaum Pay in Action</button>
      </Link>

      <div className="space-y-12">
        {/* Cash-Free Convenience Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <WalletIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Cash-Free Convenience with Bleaum Pay</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let customers pay directly from their bank accounts—online or in-store—without ever touching cash.<br />
            No terminals. No extra apps. Just seamless, modern payments that elevate your entire operation.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><LockIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />100% secure.</li>
            <li className="flex items-start gap-3"><ShieldCheckIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Fully compliant.</li>
            <li className="flex items-start gap-3"><CheckCircle2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Ready to activate inside Bleaum.</li>
          </ul>
        </section>

        {/* Maximize Revenue Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <TrendingUpIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Maximize Revenue Potential</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><DollarSignIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Dispensaries using bank-based payments see 25–30% higher order values</li>
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Repeat customers return faster with easier checkout</li>
            <li className="flex items-start gap-3"><SmileIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />More loyalty, less friction at every touchpoint</li>
          </ul>
        </section>

        {/* Eliminate Cash Burden Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Eliminate the Cash Burden</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><LockIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Protect your staff and store from theft</li>
            <li className="flex items-start gap-3"><DollarSignIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Lower operating costs tied to cash pickups, storage, and human error</li>
            <li className="flex items-start gap-3"><RefreshCwIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />Automate reporting with synced, real-time transaction data</li>
          </ul>
        </section>

        {/* One-Click Setup Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2Icon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">One-Click Setup for Customers</h2>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            After a quick one-time setup, shoppers can pay with just one tap—online or in-store.<br />
            No cards. No PINs. Just a better customer experience.
          </p>
        </section>

        {/* Safe, Streamlined & Smart Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Safe, Streamlined & Smart</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3"><LockIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><b>Security First:</b> End-to-end encrypted payments built to cannabis regulations.</li>
            <li className="flex items-start gap-3"><ZapIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><b>Efficiency Built-In:</b> Linked directly to your POS and Bleaum Ecommerce—no data entry, no syncing headaches.</li>
            <li className="flex items-start gap-3"><BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" /><b>Completely Integrated:</b> Manage everything in one place: inventory, orders, payments, and customers.</li>
          </ul>
        </section>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center gap-3"><CreditCardIcon className="w-8 h-8 text-blue-500" />Ready to Ditch the Cash Drawer?</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Let&apos;s show you how Bleaum Pay is redefining cannabis payments—from register to doorstep.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Get a Demo of Bleaum Pay</button>
      </Link>
    </div>
  );
} 