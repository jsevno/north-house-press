import { FileText, BookOpen, PenTool, CheckCircle2 } from "lucide-react";

export default function CopywritingPage() {
  const analysis = {
    tone: {
      title: "Tone of Voice",
      description: "Literary, authentic, welcoming, heritage-focused",
      elements: [
        "Thoughtful and reflective language",
        "Genuine passion for books (not marketing speak)",
        "Accessible without being pretentious",
        "Celebrates Scottish culture respectfully",
        "Invites readers into the conversation"
      ]
    },
    messaging: {
      title: "Key Messages",
      items: [
        {
          message: "Publishing books we love, not just books that sell",
          strength: "Authentic mission statement",
          usage: "Homepage, About page"
        },
        {
          message: "Preserving Scotland's literary heritage",
          strength: "Clear value proposition",
          usage: "Book pages, News/Events"
        },
        {
          message: "Independent publishing with a mission: break even, not profit",
          strength: "Transparent and honest",
          usage: "About page, mission statement"
        },
        {
          message: "Bringing lost classics back to readers",
          strength: "Unique positioning",
          usage: "Neil Gunn book pages, catalog"
        }
      ]
    },
    structure: {
      title: "Website Architecture",
      pages: [
        {
          name: "Home",
          purpose: "Welcome, featured books, company mission",
          keyContent: "Hero section with mission, featured book carousel, quick links"
        },
        {
          name: "Books",
          purpose: "Complete catalog of all titles",
          keyContent: "Book covers, descriptions, purchase options (print/ebook)"
        },
        {
          name: "Authors",
          purpose: "Author profiles and backgrounds",
          keyContent: "Author photos, bios, book connections"
        },
        {
          name: "News/Events",
          purpose: "Updates, announcements, literary events",
          keyContent: "Blog-style posts, event listings, press releases"
        },
        {
          name: "Contacts",
          purpose: "Contact form and company information",
          keyContent: "Contact form, address, email, submission inquiries"
        },
        {
          name: "Submissions",
          purpose: "Guidelines for authors submitting work",
          keyContent: "Submission policy, what we're looking for, how to submit"
        }
      ]
    },
    recommendations: {
      title: "Copywriting Recommendations",
      items: [
        {
          area: "Book Descriptions",
          recommendation: "Focus on the story and why it matters, not just plot summary. Include historical context for classics.",
          example: "Neil Gunn's 'The Grey Coast' (1926) - A centenary edition of the debut novel that launched one of Scotland's greatest literary voices."
        },
        {
          area: "Author Bios",
          recommendation: "Personal, authentic stories. Connect authors to Scottish culture and their work.",
          example: "Beth McDonough is a Dundee-based poet and wild swimmer who finds inspiration in the Tay's changing waters throughout the year."
        },
        {
          area: "Mission Statement",
          recommendation: "Keep it simple and honest. No corporate jargon.",
          example: "We publish books we love. Our mission is to break even, not make a profit, giving us the freedom to publish exceptional works regardless of commercial viability."
        },
        {
          area: "Call-to-Actions",
          recommendation: "Warm, inviting, not pushy. Focus on discovery and connection.",
          example: "Discover our books, Explore Scottish literature, Join our community"
        }
      ]
    },
    guidelines: {
      title: "Writing Guidelines",
      rules: [
        "Use UK English spelling throughout",
        "Keep sentences clear and well-structured",
        "Write in active voice where possible",
        "Be authentic - write as you would speak to a friend",
        "Avoid jargon - literary terms are fine, but explain when needed",
        "Show, don't tell - let the books speak for themselves",
        "Respect the reader - assume intelligence, not expertise",
        "Large, readable text (18px+ body) for older target audience",
        "High contrast (moss green on white) for accessibility"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4 flex items-center justify-center gap-3">
            <PenTool className="w-10 h-10" />
            Copywriting Analysis
          </h1>
          <p className="text-lg text-green-700">
            Analysis of website copy and content strategy for North House Press
          </p>
        </div>

        {/* Tone of Voice */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-700" />
            {analysis.tone.title}
          </h2>
          <p className="text-gray-700 mb-4">{analysis.tone.description}</p>
          <ul className="space-y-2">
            {analysis.tone.elements.map((element, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{element}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Messages */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-700" />
            {analysis.messaging.title}
          </h2>
          <div className="space-y-6">
            {analysis.messaging.items.map((item, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-4">
                <p className="font-semibold text-gray-900 mb-2">{item.message}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Strength:</strong> {item.strength}</p>
                <p className="text-sm text-gray-600"><strong>Usage:</strong> {item.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Website Architecture */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{analysis.structure.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {analysis.structure.pages.map((page, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">{page.name}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Purpose:</strong> {page.purpose}</p>
                <p className="text-sm text-gray-700"><strong>Key Content:</strong> {page.keyContent}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{analysis.recommendations.title}</h2>
          <div className="space-y-6">
            {analysis.recommendations.items.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.area}</h3>
                <p className="text-gray-700 mb-3">{item.recommendation}</p>
                <div className="bg-green-50 rounded p-3 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600"><strong>Example:</strong></p>
                  <p className="text-sm text-gray-800 italic mt-1">"{item.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{analysis.guidelines.title}</h2>
          <ul className="space-y-2">
            {analysis.guidelines.rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <p className="text-sm text-green-800">
            <strong>Note:</strong> This analysis is based on the project briefing, brand guidelines, and website architecture documents. 
            Final copy will be refined with David and Kirsty's input and should reflect their authentic voice and mission.
          </p>
        </div>
      </div>
    </div>
  );
}

