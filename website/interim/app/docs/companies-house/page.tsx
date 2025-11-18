import Link from "next/link";
import { Building2, ArrowLeft, FileText, ExternalLink } from "lucide-react";

export default function CompaniesHousePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Link href="/docs" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-700 to-green-900">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Companies House & Similar Publishers</h1>
              <p className="text-green-700">Company registration details and competitor analysis</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Overview</h2>
              <p className="text-gray-700 mb-4">
                This document contains research on North House Press Ltd from Companies House and analysis 
                of similar independent publishers for inspiration and competitive positioning.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Information</h2>
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">North House Press Ltd</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li><strong>Company Number:</strong> SC838774</li>
                      <li><strong>Status:</strong> Active</li>
                      <li><strong>SIC Code:</strong> 58110 (Book publishing)</li>
                      <li><strong>Location:</strong> Rogart, Sutherland, Scotland</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Directors</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• David Warwick Graham</li>
                      <li>• Kirsty Jane Gunn</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/SC838774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Companies House
                  </a>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Publishers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">Scottish Publishers</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Scotland Street Press</li>
                    <li>• Fledgling Press</li>
                    <li>• Canongate Books</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-2">UK Independent Publishers</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Renard Press</li>
                    <li>• Tramp Press</li>
                    <li>• Peirene Press</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete research document includes detailed company information, competitor analysis, 
                    market positioning, and insights from similar publishers.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/research/companies-house-and-similar-publishers.md
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

