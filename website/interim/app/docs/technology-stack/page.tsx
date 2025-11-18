import Link from "next/link";
import { Code, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function TechnologyStackPage() {
  const technologies = [
    {
      category: "Core Platform",
      items: ["WordPress.org", "WooCommerce", "Glassbox (ebooks)"]
    },
    {
      category: "Payment Processing",
      items: ["Stripe", "PayPal"]
    },
    {
      category: "Shipping & Fulfillment",
      items: ["Royal Mail", "WooCommerce Shipping Zones"]
    },
    {
      category: "Security",
      items: ["Wordfence Security", "UpdraftPlus (backups)", "SSL Certificate"]
    },
    {
      category: "Performance",
      items: ["WP Super Cache", "Image Optimization", "CDN (optional)"]
    },
    {
      category: "SEO",
      items: ["Yoast SEO", "Google Analytics"]
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
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Technology Stack</h1>
              <p className="text-green-700">Complete list of technologies, plugins, and tools</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Overview</h2>
              <p className="text-gray-700 mb-4">
                This document provides a comprehensive list of all technologies, plugins, and tools needed 
                for the North House Press WordPress website.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Categories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="border-2 border-green-100 rounded-xl p-6 bg-gradient-to-br from-white to-green-50/30">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">{tech.category}</h3>
                    <ul className="space-y-2">
                      {tech.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Technologies</h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 mb-2">WordPress</h3>
                  <p className="text-gray-700 text-sm mb-2">Self-hosted WordPress.org - Most common in publishing industry, user-friendly, WooCommerce compatible</p>
                  <p className="text-gray-600 text-xs">Status: ✅ Confirmed</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 mb-2">WooCommerce</h3>
                  <p className="text-gray-700 text-sm mb-2">Free WordPress plugin for shopping cart, product catalog, and order management</p>
                  <p className="text-gray-600 text-xs">Status: ✅ Required</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 mb-2">Glassbox</h3>
                  <p className="text-gray-700 text-sm mb-2">Ebook sales platform - 20% commission, David's previous experience</p>
                  <p className="text-gray-600 text-xs">Status: ✅ Specifically requested</p>
                </div>
              </div>
            </section>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete technology stack document includes detailed descriptions, costs, implementation priorities, 
                    and integration requirements for each technology.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/operations/technology-stack-list.md
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

