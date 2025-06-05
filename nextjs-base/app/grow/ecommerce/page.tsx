'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EcommercePage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Ecommerce</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Last updated June 5, 2025</p>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Notice at Collection:</h2>
          <p>
            Bleaum collects the categories of personal information listed in the Privacy Policy below, including any information you provide in a fillable field referencing this Privacy Policy. We collect this information to fulfill the purpose for which you are providing the personal information, to provide our services, to communicate with you (including about products or services that may be relevant to you), or as otherwise necessary or appropriate for our legitimate business purposes. By submitting your personal information, you agree to its processing in this manner. To learn more, including how to exercise any rights that may be available to you, please review the Privacy Policy below.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Welcome to Bleaum!</h2>
        <p className="mb-6">
          This Privacy Policy explains how Bleaum Inc. and its affiliates (&quot;Bleaum&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collect, use, and disclose your Personal Information when you access or use our products and services. These include our point-of-sale systems, mobile apps, eCommerce tools, payment processing services, hardware, APIs, customer accounts, and our websites (collectively, the &quot;Services&quot;).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-6">
          We collect information that you provide directly to us, including when you create an account, use our Services, make a purchase, or communicate with us. This may include:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Contact information (name, email address, phone number, mailing address)</li>
          <li>Account credentials</li>
          <li>Payment information</li>
          <li>Transaction history</li>
          <li>Communications with us</li>
          <li>Device and usage information</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          We use the information we collect to:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Provide, maintain, and improve our Services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information, such as updates and security alerts</li>
          <li>Respond to your comments and questions</li>
          <li>Personalize your experience</li>
          <li>Monitor and analyze trends and usage</li>
          <li>Protect against fraudulent or illegal activity</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
        <p className="mb-6">
          We may share your information with:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Service providers who perform services on our behalf</li>
          <li>Business partners with your consent</li>
          <li>Legal authorities when required by law</li>
          <li>Other parties in connection with a business transaction</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
        <p className="mb-6">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy or our practices, please contact us at:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <p className="mb-2">Bleaum Inc.</p>
          <p className="mb-2">123 Business Street</p>
          <p className="mb-2">San Francisco, CA 94105</p>
          <p className="mb-2">Email: privacy@bleaum.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contact Support
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
} 