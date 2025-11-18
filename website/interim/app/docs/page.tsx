import Link from "next/link";
import { FileText, BookOpen, Search, Building2, ExternalLink, Target, Palette, Server, Code, Users, Mail } from "lucide-react";

export default function DocsPage() {
  const docSections = [
    {
      title: "Strategy",
      icon: Target,
      color: "from-green-500 to-green-700",
      items: [
        {
          title: "Brand Guidelines",
          description: "Complete brand identity, color palette, typography, and tone of voice",
          href: "/docs/brand-guidelines",
          icon: Palette,
        },
        {
          title: "Ideal Customer Profile",
          description: "Target audience analysis, demographics, and customer behavior",
          href: "/docs/ideal-customer-profile",
          icon: Users,
        },
      ],
    },
    {
      title: "Operations",
      icon: Server,
      color: "from-green-600 to-green-800",
      items: [
        {
          title: "Hosting & Technology Requirements",
          description: "WordPress hosting options, server requirements, and recommendations",
          href: "/docs/hosting-technology",
          icon: Server,
        },
        {
          title: "Technology Stack",
          description: "Complete list of technologies, plugins, and tools needed",
          href: "/docs/technology-stack",
          icon: Code,
        },
        {
          title: "Consolidation Review",
          description: "Project structure consolidation and file organization",
          href: "/docs/consolidation-review",
          icon: FileText,
        },
        {
          title: "Page Summaries",
          description: "Overview of all pages created and planned for the website",
          href: "/docs/page-summaries",
          icon: BookOpen,
        },
      ],
    },
    {
      title: "Research",
      icon: Search,
      color: "from-green-700 to-green-900",
      items: [
        {
          title: "Companies House & Similar Publishers",
          description: "Company registration details and competitor analysis",
          href: "/docs/companies-house",
          icon: Building2,
        },
      ],
    },
    {
      title: "Communications",
      icon: Mail,
      color: "from-green-500 to-green-700",
      items: [
        {
          title: "Email to David",
          description: "Project summary email draft for David",
          href: "/docs/email-david",
          icon: Mail,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Documentation</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Research, strategy, operations, and planning documents for North House Press
          </p>
        </div>

        <div className="space-y-12">
          {docSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${section.color}`}>
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group border-2 border-green-100 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-green-50/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-green-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="mt-3 flex items-center text-green-700 text-sm font-medium">
                          <span>View Document</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="mt-12 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-10 border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-green-600 rounded-full"></div>
            Key Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Company Details</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Name:</span>
                  <span>North House Press Ltd</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Number:</span>
                  <span>SC838774</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Status:</span>
                  <span>Active</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">SIC Code:</span>
                  <span>58110 (Book publishing)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Project Overview</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Initial Books:</span>
                  <span>5 titles</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Focus:</span>
                  <span>Scottish culture, lost classics</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Website:</span>
                  <span>WordPress e-commerce (planned)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Directors:</span>
                  <span>David Warwick Graham & Kirsty Jane Gunn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
