import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function UpdatesPage() {
  const updates = [
    {
      title: "Project Setup Complete",
      status: "complete",
      description: "Created project structure, documentation templates, and interim website. All foundational documents in place.",
      details: [
        "Project folder structure created",
        "WordPress development guidelines (.cursorrules)",
        "Documentation templates (README, checklists, guides)",
        "Research document with Companies House information",
        "Asset inventory template",
        "Interim Next.js website created",
      ],
    },
    {
      title: "Interim Website Deployed",
      status: "complete",
      description: "Next.js interim site deployed to Netlify for hosting assets, plans, and providing updates to David.",
      details: [
        "Next.js 14 with TypeScript and Tailwind",
        "Four main pages: Home, Assets, Docs, Updates",
        "Responsive design with moss green theme",
        "Ready for asset uploads and content",
      ],
    },
    {
      title: "Asset Gathering Initiated",
      status: "pending",
      description: "Requested brand assets, book covers, and author photos from David & Kirsty.",
      details: [
        "Logo files (PNG, SVG, EPS)",
        "Book cover images for 5 initial titles",
        "Author photos (Beth McDonough, Neil Gunn archival)",
        "Brand guidelines with moss green specifications",
      ],
    },
    {
      title: "WordPress Planning Phase",
      status: "pending",
      description: "Next phase: Design and develop WordPress e-commerce site with WooCommerce and Glassbox integration.",
      details: [
        "6-page structure planning",
        "WooCommerce shopping cart setup",
        "Glassbox ebook integration",
        "UK/Ireland shipping restrictions",
        "Moss green design implementation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Project Updates</h1>
          <p className="text-lg text-green-700">
            Progress log and updates for David & Kirsty
          </p>
        </div>

        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {update.status === "complete" && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                    {update.status === "in-progress" && (
                      <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    )}
                    {update.status === "pending" && (
                      <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                    <h2 className="text-2xl font-semibold text-gray-900">{update.title}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                      {update.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{update.description}</p>
                </div>
              </div>
              {update.details && (
                <div className="mt-4 pt-4 border-t">
                  <h3 className="font-semibold text-gray-900 mb-2">Details:</h3>
                  <ul className="space-y-1">
                    {update.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2">Next Steps</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Gather assets from David & Kirsty (logo, covers, photos)</li>
            <li>• Populate asset gallery as materials arrive</li>
            <li>• Begin WordPress site planning and wireframing</li>
            <li>• Research WooCommerce and Glassbox integration</li>
            <li>• Plan moss green design implementation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

