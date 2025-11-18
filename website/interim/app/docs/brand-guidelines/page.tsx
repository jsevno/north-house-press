import Link from "next/link";
import { Palette, ArrowLeft, FileText, Download } from "lucide-react";

export default function BrandGuidelinesPage() {
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
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Brand Guidelines</h1>
              <p className="text-green-700">Version 1.0 - Complete brand identity framework</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Overview</h2>
              <p className="text-gray-700 mb-4">
                This comprehensive brand guidelines document covers all aspects of North House Press's visual and verbal identity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Brand identity and philosophy</li>
                <li>• Visual identity (logo, colors, typography)</li>
                <li>• Tone of voice and messaging</li>
                <li>• Brand applications (website, print, social media)</li>
                <li>• Implementation guidelines</li>
              </ul>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Brand Identity</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  North House Press operates on the principle that great books deserve to be published, regardless of commercial viability. 
                  Our approach focuses on passion over profit, celebrating Scottish heritage, bringing lost classics back to readers, 
                  and maintaining quality over quantity.
                </p>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Brand Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Literary Excellence</strong> - Commitment to quality writing and publishing</li>
                    <li>• <strong>Cultural Preservation</strong> - Keeping Scottish literary heritage alive</li>
                    <li>• <strong>Authenticity</strong> - Genuine passion for books and authors</li>
                    <li>• <strong>Accessibility</strong> - Making great books available to readers</li>
                    <li>• <strong>Independence</strong> - Freedom to publish what matters, not just what sells</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Color Palette</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The primary brand color is moss green, reflecting the Scottish landscape and heritage focus.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#5A7A5A] rounded-lg p-6 text-white">
                    <h3 className="font-bold mb-2">Moss Green</h3>
                    <p className="text-sm opacity-90">#5A7A5A</p>
                    <p className="text-sm mt-2">Primary brand color</p>
                  </div>
                  <div className="bg-[#3A5A3A] rounded-lg p-6 text-white">
                    <h3 className="font-bold mb-2">Moss Green Dark</h3>
                    <p className="text-sm opacity-90">#3A5A3A</p>
                    <p className="text-sm mt-2">Text on light backgrounds</p>
                  </div>
                  <div className="bg-[#6B5A4A] rounded-lg p-6 text-white">
                    <h3 className="font-bold mb-2">Earth Brown</h3>
                    <p className="text-sm opacity-90">#6B5A4A</p>
                    <p className="text-sm mt-2">Book covers & accents</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Typography</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">Headlines</h3>
                    <p className="text-gray-700">Playfair Display (Serif) - Elegant, literary, classic</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">Body Text</h3>
                    <p className="text-gray-700">Lora or Merriweather (Serif) - Highly readable, optimized for longer reading</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-bold text-gray-900 mb-2">UI Elements</h3>
                    <p className="text-gray-700">Inter or Source Sans Pro - Clean, modern, accessible</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tone of Voice</h2>
                <div className="bg-green-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>Literary & Thoughtful</strong> - Use rich, descriptive language</li>
                    <li>• <strong>Authentic & Genuine</strong> - Write from the heart, not marketing speak</li>
                    <li>• <strong>Welcoming & Accessible</strong> - Avoid literary pretension</li>
                    <li>• <strong>Heritage-Focused</strong> - Celebrate Scottish culture respectfully</li>
                    <li>• <strong>Passionate & Enthusiastic</strong> - Show genuine excitement about books</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Full Document</h3>
                  <p className="text-green-800 text-sm mb-4">
                    The complete brand guidelines document is available in the project repository with detailed specifications 
                    for all brand elements, usage guidelines, and implementation examples.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Location:</strong> docs/strategy/brand-guidelines-v1.0.md
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

