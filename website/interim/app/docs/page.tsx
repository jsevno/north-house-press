import Link from "next/link";
import { FileText, BookOpen, Search, Building2, ExternalLink } from "lucide-react";

export default function DocsPage() {
  const docSections = [
    {
      title: "Research",
      icon: Search,
      items: [
        {
          title: "Companies House & Similar Publishers",
          description: "Company registration details and competitor analysis",
          href: "#",
        },
        {
          title: "Market Research",
          description: "Independent publishing industry analysis",
          href: "#",
        },
      ],
    },
    {
      title: "Strategy",
      icon: BookOpen,
      items: [
        {
          title: "Business Plan",
          description: "Company strategy and financial projections",
          href: "#",
        },
        {
          title: "Marketing Strategy",
          description: "Launch and promotion plans",
          href: "#",
        },
      ],
    },
    {
      title: "Company Information",
      icon: Building2,
      items: [
        {
          title: "Companies House Details",
          description: "SC838774 - Registered 24 February 2025",
          href: "https://find-and-update.company-information.service.gov.uk/company/SC838774",
          external: true,
        },
        {
          title: "Directors",
          description: "David Warwick Graham & Kirsty Jane Gunn",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Documentation</h1>
          <p className="text-lg text-green-700">
            Research, strategy, and planning documents for North House Press
          </p>
        </div>

        <div className="space-y-8">
          {docSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <section.icon className="w-6 h-6 text-green-700" />
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                              {item.title}
                              <ExternalLink className="w-4 h-4 text-green-600" />
                            </h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Company Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Name:</strong> North House Press Ltd</li>
                <li><strong>Number:</strong> SC838774</li>
                <li><strong>Status:</strong> Active</li>
                <li><strong>SIC Code:</strong> 58110 (Book publishing)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Launch Timeline</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Launch:</strong> May 2025</li>
                <li><strong>Initial Books:</strong> 5 titles</li>
                <li><strong>Focus:</strong> Scottish culture, lost classics</li>
                <li><strong>Website:</strong> WordPress e-commerce (planned)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

