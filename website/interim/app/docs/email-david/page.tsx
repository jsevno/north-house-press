import Link from "next/link";
import { Mail, ArrowLeft, FileText } from "lucide-react";

export default function EmailDavidPage() {
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
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Email to David</h1>
              <p className="text-green-700">Project summary email draft</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Overview</h2>
              <p className="text-gray-700 mb-4">
                This email provides a summary of the project status, explains the interim website, 
                and outlines how David can interact with the project going forward.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Email Summary</h2>
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What's Been Completed</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Interim website set up and live on Netlify</li>
                      <li>• All project assets organized and accessible</li>
                      <li>• Brand guidelines, customer profiles, and strategy documents</li>
                      <li>• Meeting notes and transcripts available</li>
                      <li>• Copywriting analysis and content guidelines</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">How to Access</h3>
                    <p className="text-sm">Website is deployed and automatically updates when changes are pushed. Accessible through GitHub repository or direct Netlify URL.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Next Steps & Interaction</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Email anytime with questions, feedback, or new assets</li>
                      <li>• Check website regularly for updates</li>
                      <li>• Review all strategy documents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Email Draft</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete email draft is available in both markdown and plain text formats 
                    for easy copying and sending.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/communications/email-to-david-final.txt
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

