import Link from "next/link";
import { BookOpen, ArrowLeft, FileText } from "lucide-react";

export default function PageSummariesPage() {
  const pages = [
    {
      name: "Home",
      status: "Complete",
      purpose: "Project hub and status dashboard"
    },
    {
      name: "Assets",
      status: "Complete",
      purpose: "Display all project assets"
    },
    {
      name: "Documentation",
      status: "Complete",
      purpose: "Project documentation hub"
    },
    {
      name: "Meetings",
      status: "Complete",
      purpose: "Meeting notes and transcripts"
    },
    {
      name: "Copywriting",
      status: "Complete",
      purpose: "Copywriting analysis and guidelines"
    },
    {
      name: "Updates",
      status: "Complete",
      purpose: "Progress log"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Link href="/docs" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-800">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Summaries</h1>
              <p className="text-green-700">Overview of all pages created and planned</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Overview</h2>
              <p className="text-gray-700 mb-4">
                This document provides top-level summaries of all pages created for the interim website 
                and planned for the WordPress production site.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Pages (Interim Website)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pages.map((page, index) => (
                  <div key={index} className="border-2 border-green-100 rounded-xl p-6 bg-gradient-to-br from-white to-green-50/30">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg">{page.name}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {page.status}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{page.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Planned Pages (WordPress Site)</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Home</strong> - Main landing page with hero section and featured books</li>
                  <li>• <strong>Books</strong> - Complete book catalog with purchase options</li>
                  <li>• <strong>Authors</strong> - Author profiles and biographies</li>
                  <li>• <strong>News/Events</strong> - Updates and announcements</li>
                  <li>• <strong>Contact</strong> - Contact form and company information</li>
                  <li>• <strong>Submissions</strong> - Guidelines for authors</li>
                </ul>
              </div>
            </section>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete page summaries document includes detailed descriptions, content strategy, 
                    design principles, and implementation status for all pages.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/operations/page-summaries.md
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

