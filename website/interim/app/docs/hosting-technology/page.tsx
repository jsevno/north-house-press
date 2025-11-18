import Link from "next/link";
import { Server, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function HostingTechnologyPage() {
  const hostingOptions = [
    {
      name: "Krystal Hosting",
      location: "UK",
      price: "£4.99+/month",
      features: ["UK-based support", "WooCommerce optimized", "Daily backups", "Free SSL"],
      recommended: true
    },
    {
      name: "34SP.com",
      location: "UK",
      price: "£5+/month",
      features: ["UK-based", "Managed WordPress", "Good reputation"],
      recommended: false
    },
    {
      name: "SiteGround",
      location: "UK/US",
      price: "£2.99+/month",
      features: ["Excellent performance", "UK data center", "Great support"],
      recommended: false
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
              <Server className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Hosting & Technology Requirements</h1>
              <p className="text-green-700">WordPress hosting options and technical specifications</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Overview</h2>
              <p className="text-gray-700 mb-4">
                This document outlines hosting options, WordPress requirements, and technology stack recommendations 
                for the North House Press website.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Hosting Providers</h2>
              <div className="space-y-6">
                {hostingOptions.map((option, index) => (
                  <div key={index} className={`border-2 rounded-xl p-6 ${option.recommended ? 'border-green-600 bg-green-50' : 'border-green-100 bg-white'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{option.name}</h3>
                          {option.recommended && (
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{option.location} • {option.price}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">WordPress Requirements</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Minimum Server Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>PHP:</strong> Version 8.3 or greater</li>
                  <li>• <strong>MySQL:</strong> Version 8.0+ or MariaDB 10.6+</li>
                  <li>• <strong>Web Server:</strong> Apache or Nginx with HTTPS support</li>
                  <li>• <strong>Memory:</strong> 256MB PHP memory minimum</li>
                  <li>• <strong>SSL Certificate:</strong> Required (free with most hosts)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-3">Core Platform</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• WordPress.org (self-hosted)</li>
                    <li>• WooCommerce (e-commerce)</li>
                    <li>• Glassbox (ebook platform)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-gray-900 mb-3">Payment & Shipping</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Stripe (payment processing)</li>
                    <li>• PayPal (alternative)</li>
                    <li>• Royal Mail (UK shipping)</li>
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
                    The complete hosting and technology requirements document includes detailed comparisons, cost estimates, 
                    implementation timeline, and support recommendations.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/operations/hosting-and-technology-requirements.md
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

