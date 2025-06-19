import Link from "next/link";
import { 
  BarChart2Icon, 
  ZapIcon, 
  MapPinIcon, 
  LineChartIcon, 
  RefreshCwIcon, 
  UserIcon, 
  GlobeIcon, 
  BrainIcon,
  AlertCircleIcon,
  TrendingUpIcon,
  FileTextIcon,
  UsersIcon,
  LockIcon,
  BuildingIcon,
  LightbulbIcon,
  FilterIcon,
  EyeIcon,
  CalendarIcon,
  FileDownIcon,
  LinkIcon
} from "lucide-react";

export default function BleaumReportingPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Cannabis POS Reporting & Analytics</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Clarity that drives growth.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Get real-time visibility across your operations with intuitive dashboards, multi-location reporting, and AI-generated insights—embedded directly into your POS.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Schedule a demo</button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <BarChart2Icon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold">Business intelligence, built for cannabis.</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Whether you&apos;re running one store or twenty, Bleaum transforms your data into actionable clarity—giving operators, managers, and owners the tools to make smarter, faster decisions.
      </p>

      <div className="space-y-12">
        {/* AI-Powered Reporting Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ZapIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">AI-Powered Reporting (Coming Soon)</h3>
          </div>
          <h4 className="text-lg font-medium mb-2">Your data. Smarter.</h4>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our upcoming AI features turn raw data into strategic guidance. Think proactive alerts, suggested actions, and predictive insights—all embedded in your dashboard.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <AlertCircleIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Spot anomalies automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUpIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Surface your most profitable segments</span>
            </li>
            <li className="flex items-start gap-3">
              <FileTextIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Get AI-written summaries for each report</span>
            </li>
          </ul>
        </section>

        {/* Everything in one view Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MapPinIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Everything in one view</h3>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Track key metrics like product performance, sales trends, customer behavior, and average order value—all in real time.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <BuildingIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Multi-location rollups</span>
            </li>
            <li className="flex items-start gap-3">
              <BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Store-specific insights</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUpIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Busiest hours, cart sizes, and trends</span>
            </li>
          </ul>
        </section>

        {/* Intuitive dashboards Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <LineChartIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Intuitive, customizable dashboards</h3>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            See what you want, how you want. Drag, drop, filter, and save views that work for your team—from high-level KPIs to granular transaction logs.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <FilterIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Custom filters & date ranges</span>
            </li>
            <li className="flex items-start gap-3">
              <EyeIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Quick-view visuals & deep dives</span>
            </li>
            <li className="flex items-start gap-3">
              <FileTextIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Built-in templates to speed things up</span>
            </li>
          </ul>
        </section>

        {/* Automated reports Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCwIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Automated reports & compliance-ready exports</h3>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Never miss a deadline or a detail. Set recurring reports, export to CSV, or print in one click. Stay compliant and stay informed—without the grunt work.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CalendarIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Weekly/monthly scheduled reports</span>
            </li>
            <li className="flex items-start gap-3">
              <FileDownIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Easy CSV exports</span>
            </li>
            <li className="flex items-start gap-3">
              <LinkIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Integration-ready data structure</span>
            </li>
          </ul>
        </section>

        {/* Control access Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Control access & align your team</h3>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Give every stakeholder the right data at the right time—with built-in permission settings and team-based dashboards.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <UsersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Manager-level visibility</span>
            </li>
            <li className="flex items-start gap-3">
              <LockIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Controlled user access</span>
            </li>
            <li className="flex items-start gap-3">
              <UsersIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Cross-department collaboration</span>
            </li>
          </ul>
        </section>

        {/* Multi-location Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <GlobeIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Multi-location, single source of truth</h3>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            No more piecing things together from multiple systems. Bleaum centralizes your reporting across all channels—POS, ecommerce, loyalty, and beyond.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Location-based performance tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <GlobeIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Unified data across in-store and online</span>
            </li>
            <li className="flex items-start gap-3">
              <EyeIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <span>Full operational clarity</span>
            </li>
          </ul>
        </section>

        {/* Insights Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BrainIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">Insights that move your business forward</h3>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Bleaum doesn&apos;t just report data—it delivers insights that lead to action. With predictive tools and embedded intelligence, we help you answer not just "what happened" but "what&apos;s next."
          </p>
          <Link href="/demo">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Book a demo to see Bleaum Reporting in action</button>
          </Link>
        </section>
      </div>
    </div>
  );
} 