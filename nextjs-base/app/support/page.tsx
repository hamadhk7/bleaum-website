import React from "react";

export default function SupportPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Support</h1>
      <p className="mb-8 text-lg text-white-700">
        Need help? Our support team is here to assist you. Please choose one of the options below or reach out directly.
      </p>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Frequently Asked Questions</h2>
          <p className="mb-2 text-gray-700">Find answers to common questions in our <a href="/help/faq" className="text-blue-600 underline">FAQ</a>.</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact Support</h2>
          <p className="mb-2 text-gray-700" >Email us at <a href="mailto:support@bleaum.com" className="text-blue-600 underline">support@bleaum.com</a> or use our <a href="/help/guide" className="text-blue-600 underline">Help Guide</a>.</p>
        </div>
      </div>
    </main>
  );
} 