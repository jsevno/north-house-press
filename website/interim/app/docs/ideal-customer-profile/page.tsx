import Link from "next/link";
import { Users, ArrowLeft, FileText, Target } from "lucide-react";

export default function IdealCustomerProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Link href="/docs" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Documentation
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-700">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Ideal Customer Profile</h1>
              <p className="text-green-700">Version 1.0 - Target audience analysis</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Overview</h2>
              <p className="text-gray-700 mb-4">
                The Ideal Customer Profile (ICP) defines the perfect customer for North House Press - the type of reader who 
                gets maximum value from our books, is easiest to reach and convert, and becomes an advocate.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Primary ICP: Scottish Literature Enthusiast</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Demographics</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Age:</strong> 45-75 years (primary: 55-70)</li>
                      <li>• <strong>Location:</strong> UK (Scotland, England, Northern Ireland, Wales)</li>
                      <li>• <strong>Education:</strong> University-educated or self-educated readers</li>
                      <li>• <strong>Income:</strong> Middle to upper-middle class</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Geographic Focus</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Scotland:</strong> 60% of target market</li>
                      <li>• <strong>England:</strong> 30% of target market</li>
                      <li>• <strong>NI & Wales:</strong> 10% of target market</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Values & Behaviors</h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Core Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cultural Heritage - Values Scottish culture and history</li>
                    <li>• Literary Quality - Appreciates well-written, thoughtful books</li>
                    <li>• Independent Spirit - Supports small businesses and independents</li>
                    <li>• Authenticity - Prefers genuine passion over commercial marketing</li>
                    <li>• Preservation - Values keeping literary heritage alive</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Reading Habits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">Reading Patterns</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Reads 10-30 books per year</li>
                      <li>• Mix of fiction and non-fiction</li>
                      <li>• Prefers physical books over ebooks</li>
                      <li>• Belongs to book clubs or reading groups</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">Cultural Engagement</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Interested in Scottish history and culture</li>
                      <li>• Visits museums, galleries, cultural sites</li>
                      <li>• Follows literary news and reviews</li>
                      <li>• Values local and independent businesses</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pain Points</h2>
                <div className="space-y-4">
                  <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Limited Access to Scottish Literature</h3>
                    <p className="text-gray-700 text-sm">Difficulty finding Scottish-focused books and lost classics out of print</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Commercial Publishing Focus</h3>
                    <p className="text-gray-700 text-sm">Mainstream publishers only publish "commercial" books, quality literary fiction overlooked</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Discovery Challenges</h3>
                    <p className="text-gray-700 text-sm">Hard to find books that match interests, algorithm-driven recommendations miss the mark</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete Ideal Customer Profile document includes detailed demographics, psychographics, buying behavior, 
                    information sources, and validation framework.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/strategy/ideal-customer-profile-v1.0.md
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

