import Link from "next/link";
import { FileText, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ConsolidationReviewPage() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Consolidation Review</h1>
              <p className="text-green-700">Project structure consolidation and file organization</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consolidation Summary</h2>
              <p className="text-gray-700 mb-4">
                This document details the consolidation of project files, removal of duplicates, and organization 
                of client assets into the correct locations.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Issues Resolved</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Duplicate Folders Removed</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Removed root-level app/ folder (duplicate)</li>
                    <li>• Removed root-level components/ folder (duplicate)</li>
                    <li>• Removed root-level lib/ folder (duplicate)</li>
                    <li>• Removed root-level public/ folder (duplicate)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Client Files Moved</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Moved all files from pubhut folder to assets/documents/</li>
                    <li>• Book covers organized into assets/images/covers/</li>
                    <li>• Author photos organized into assets/images/</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Configuration Files Cleaned</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Removed duplicate root-level config files</li>
                    <li>• Kept only active site in website/interim/</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Structure</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
{`north-house-press/
├── assets/
│   └── documents/          ✅ Client files
│       ├── Book covers
│       ├── Author photos
│       └── Website copy
├── docs/                   ✅ Documentation
├── knowledge-base/         ✅ Transcripts & references
└── website/
    └── interim/            ✅ Active Next.js site
        ├── app/
        ├── components/
        └── package.json`}
                </pre>
              </div>
            </section>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete consolidation review includes detailed actions taken, verification steps, 
                    and lessons learned from the consolidation process.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/operations/consolidation-review.md
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

