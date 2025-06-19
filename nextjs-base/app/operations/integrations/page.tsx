import Link from "next/link";
import { 
  LinkIcon,
  BriefcaseIcon,
  BarChart2Icon,
  LeafIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  MegaphoneIcon,
  UsersIcon,
  UserIcon,
  StoreIcon,
  SparklesIcon,
  MessageSquareIcon
} from "lucide-react";

export default function BleaumIntegrationsPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bleaum Integrations</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Built to connect. Designed for growth.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Whether you&apos;re all-in on Bleaum or mixing tools to fit your stack, our open, flexible platform integrates seamlessly with the cannabis industry&apos;s most trusted systems—ensuring everything just works, right out of the box.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Schedule a demo</button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <LinkIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold">Connected where it counts</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We play well with others—because your business depends on it. Bleaum integrates with a wide range of third-party tools across every major category:
      </p>

      <div className="space-y-12">
        {/* Accounting & Finance Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BriefcaseIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Accounting & Finance</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>QuickBooks</li>
            <li>Moneris</li>
            <li>Aeropay</li>
          </ul>
        </section>

        {/* Analytics & Insights Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart2Icon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Analytics & Insights</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Google Analytics</li>
            <li className="flex items-center gap-2">
              <span>(AI-powered reporting coming soon)</span>
            </li>
          </ul>
        </section>

        {/* Cultivation & Inventory Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <LeafIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Cultivation & Inventory</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>GrowFlow</li>
            <li>Mercco</li>
          </ul>
        </section>

        {/* Compliance & Traceability Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Compliance & Traceability</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>METRC</li>
            <li>IDScan</li>
            <li>IndicaOnline</li>
            <li>Treez</li>
            <li>Cova</li>
          </ul>
        </section>

        {/* Ecommerce & Marketplace Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCartIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Ecommerce & Marketplace</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Leafly</li>
            <li>Weedmaps</li>
            <li>Blackleaf</li>
          </ul>
        </section>

        {/* Marketing & Loyalty Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MegaphoneIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Marketing & Loyalty</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Springbig</li>
            <li>Weave</li>
            <li className="flex items-center gap-2">
              <span>Built-in marketing & loyalty tools with AI coming soon</span>
            </li>
          </ul>
        </section>

        {/* CRM & Customer Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UsersIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">CRM & Customer Experience</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>IDScan</li>
            <li>Springbig</li>
            <li>Weave</li>
          </ul>
        </section>

        {/* Staff & Operations Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Staff & Operations</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Team management built into Bleaum</li>
            <li>Role-based permissions</li>
            <li>Daily performance metrics</li>
          </ul>
        </section>

        {/* Retail Tools & In-Store Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <StoreIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Retail Tools & In-Store Experience</h3>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>In-store menus</li>
            <li>Loyalty programs at the register</li>
            <li>ID verification & digital receipts</li>
          </ul>
        </section>

        {/* Native Integration Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Native when you want it. Integrated when you need it.</h3>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Use our built-in tools or plug in your favorites. Either way, we&apos;re here to give you complete control and total clarity.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Want to build a custom integration? Let&apos;s talk.</button>
          </Link>
        </section>
      </div>
    </div>
  );
} 