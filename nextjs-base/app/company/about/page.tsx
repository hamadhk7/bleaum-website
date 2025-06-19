import Link from "next/link";
import { BriefcaseBusinessIcon, GlobeIcon, LeafIcon, LightbulbIcon, UsersIcon, SparklesIcon, ScaleIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Bleaum</h1>
      <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Powering the Future of Retail—Starting with Cannabis</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum is a modern, all-in-one platform designed to supercharge how businesses operate, connect, and grow. From dispensaries to boutique retailers, we bring together Point of Sale, E-commerce, Delivery, Payments, and Inventory tools into one seamless system.
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We're best known in cannabis—but we're built for more. Bleaum helps businesses simplify complexity, eliminate waste, and unlock profit—whether you sell flower, food, fashion, or anything in between.
      </p>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <SparklesIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">We exist to simplify work so good businesses can thrive.</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Retail is evolving—and it's more competitive than ever. We believe the right technology should feel like a superpower, not a burden.
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        With Bleaum, retailers can focus on what they do best: building amazing customer experiences, creating jobs, and moving their communities forward.
      </p>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <LightbulbIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Why we built Bleaum</h2>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <LeafIcon className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">For cannabis</h3>
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We started with one of the most highly regulated industries in the world. Cannabis isn't just medicine—it's a movement. Our software helps dispensaries stay compliant, reduce shrink, and serve customers better with real-time data, mobile-friendly tools, and smart workflows that just work.
        </p>

        <div className="flex items-center gap-3 mb-2">
          <UsersIcon className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">For people</h3>
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We want to see entrepreneurs win. Operators spend too much time buried in clunky systems and nightmarish audits. Bleaum is designed to save you hours, protect your margins, and make your business more valuable—without extra overhead.
        </p>

        <div className="flex items-center gap-3 mb-2">
          <GlobeIcon className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">For the future</h3>
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Retail is only getting faster, more digital, and more automated. We help businesses ride the wave with software that's built to adapt. Whether you're running a single store or scaling across states, Bleaum is built to grow with you.
        </p>
      </div>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <BriefcaseBusinessIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Where we came from—and where we're headed</h2>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Planting seeds</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum started with a simple insight: operators deserve better tools. From that seed grew a platform that tackles what really matters—faster checkouts, cleaner inventory, smarter decisions.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Growing with vision</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We didn't just chase buzzwords—we solved real pain points. Inventory audits at 3am? Gone. Confusing delivery ops? Simplified. Clunky menus? Reimagined. We kept refining until customers couldn't imagine running their shop without us.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Building beyond cannabis</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Today, Bleaum supports a growing number of retail verticals that want the same thing: clean systems, smooth operations, and control over their future. Cannabis taught us how to thrive in hard environments. Now we're taking that same power everywhere.
      </p>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <ScaleIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Backed by builders</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We're proud to be led by operators, engineers, and designers who've built tech used by millions. We're obsessed with details, driven by data, and committed to real partnerships—not just signups.
      </p>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <SparklesIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Social good is not a side project—it's a responsibility</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        From supporting dispensary owners impacted by criminalization, to empowering small teams with tech built for scale, we believe equity and access should be part of every business model—not just a footnote.
      </p>

      <div className="flex items-center gap-3 mb-4 mt-8">
        <BriefcaseBusinessIcon className="w-8 h-8 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Let's build what's next—together</h2>
      </div>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Bleaum is more than a product. It's a platform for serious operators who want to move fast, stay lean, and win big.
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We're here to help businesses not just survive—but scale.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Ready to grow?</h3>
      <Link href="/demo">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full mb-8 transition">Let's talk.</button>
      </Link>
    </div>
  );
} 