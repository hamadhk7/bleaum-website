import Link from "next/link";
import { RocketIcon, MailIcon, BarChart2Icon, TargetIcon, SparklesIcon, UsersIcon } from "lucide-react";

export default function BleaumMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Marketing & Loyalty</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Smarter campaigns. Stickier customers.</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Drive repeat sales and lasting loyalty with fully embedded marketing, personalized offers, and real-time insights—all from the same platform you use to sell.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Schedule a demo</button>
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <RocketIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold">Supercharge growth with Bleaum&apos;s built-in marketing engine</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Forget switching tabs or juggling platforms. Bleaum gives you a single, seamless system for launching targeted campaigns, rewarding loyalty, and tracking it all—live.
      </p>

      <div className="flex items-center gap-3 mb-4">
        <MailIcon className="w-8 h-8 text-blue-500" />
        <h3 className="text-xl font-semibold">Email & SMS Campaigns</h3>
      </div>
      <h4 className="text-lg font-medium mb-2">Turn marketing into money—automatically.</h4>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Reach the right customer at the right time with AI-powered emails and SMS that personalize themselves. Whether you&apos;re promoting a drop or boosting a slow day, you&apos;re always a step ahead.
      </p>

      <div className="flex items-center gap-3 mb-4">
        <SparklesIcon className="w-8 h-8 text-blue-500" />
        <h3 className="text-xl font-semibold">Key Features</h3>
      </div>
      <ul className="space-y-4 mb-6 text-gray-700 dark:text-gray-300">
        <li className="flex items-start gap-3">
          <SparklesIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <b>Built-in AI campaign assistant</b>
            <p className="text-sm mt-1">Generate impactful messaging instantly with curated templates and smart suggestions tailored to your audience.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <BarChart2Icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <b>Track what actually matters</b>
            <p className="text-sm mt-1">See real-time results—revenue, retention, order size—directly tied to your marketing campaigns.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <TargetIcon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <b>Hyper-targeted segments</b>
            <p className="text-sm mt-1">Trigger offers based on buying behavior, visit frequency, category, and more.</p>
          </div>
        </li>
      </ul>

      <div className="flex items-center gap-3 mb-4">
        <UsersIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold">Ready to transform your marketing?</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Join the growing number of cannabis businesses using Bleaum to drive customer loyalty and boost revenue through smart, automated marketing.
      </p>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">Schedule your personalized demo</button>
      </Link>
    </div>
  );
} 