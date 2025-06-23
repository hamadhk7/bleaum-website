import React from "react";

export default function SopsChecklistsPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">SOP Checklists</h1>
      <p className="mb-8 text-lg text-gray-700">
        Download our Standard Operating Procedure (SOP) checklists to help streamline your business operations. Click on a checklist below to download.
      </p>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-gray-50 flex items-center justify-between">
          <span className="text-gray-800 font-medium">General Operations SOP</span>
          <a
            href="/downloads/general-operations-sop.pdf"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            download
          >
            Download
          </a>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50 flex items-center justify-between">
          <span className="text-gray-800 font-medium">Inventory Management SOP</span>
          <a
            href="/downloads/inventory-management-sop.pdf"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            download
          >
            Download
          </a>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50 flex items-center justify-between">
          <span className="text-gray-800 font-medium">Employee Onboarding SOP</span>
          <a
            href="/downloads/employee-onboarding-sop.pdf"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            download
          >
            Download
          </a>
        </div>
      </div>
    </main>
  );
} 