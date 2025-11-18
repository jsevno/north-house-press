import Link from "next/link";
import { BookOpen, FileText, Image as ImageIcon, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function Home() {
  const statusItems = [
    {
      title: "Project Structure",
      status: "complete",
      description: "Folder structure, documentation templates, and guidelines created",
    },
    {
      title: "Interim Website",
      status: "in-progress",
      description: "Next.js site for hosting assets and providing updates",
    },
    {
      title: "Asset Gathering",
      status: "pending",
      description: "Logo, book covers, author photos from David & Kirsty",
    },
    {
      title: "WordPress Planning",
      status: "pending",
      description: "E-commerce site design and development planning",
    },
  ];

  const quickLinks = [
    { href: "/assets", icon: ImageIcon, label: "Assets Gallery", description: "Logos, covers, photos" },
    { href: "/docs", icon: FileText, label: "Documentation", description: "Plans, research, strategy" },
    { href: "/meetings", icon: FileText, label: "Meetings", description: "Notes and transcripts" },
    { href: "/updates", icon: Calendar, label: "Updates", description: "Progress log for David" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">North House Press</h1>
          <p className="text-xl text-green-700 mb-2">Independent Publishing Company</p>
          <p className="text-green-600">Launching May 2025</p>
        </div>

        {/* Status Dashboard */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Status</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {statusItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  {item.status === "complete" && (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                  {item.status === "in-progress" && (
                    <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  )}
                  {item.status === "pending" && (
                    <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="mt-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.status === "complete" ? "bg-green-100 text-green-700" :
                    item.status === "in-progress" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {item.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
            >
              <link.icon className="w-8 h-8 text-green-700 mb-4 group-hover:text-green-800" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{link.label}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Company Details</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Name:</strong> North House Press Ltd</li>
                <li><strong>Company Number:</strong> SC838774</li>
                <li><strong>Incorporated:</strong> 24 February 2025</li>
                <li><strong>Location:</strong> Rogart, Sutherland, Scotland</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Directors</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>David Warwick Graham</li>
                <li>Kirsty Jane Gunn</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-gray-900 mb-2">Initial Book List</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• "The Grey Coast" by Neil Gunn (1926 - centenary edition)</li>
              <li>• Additional Neil Gunn titles (2 books)</li>
              <li>• "A Year In Water" by Beth McDonough</li>
              <li>• Nonfiction title (Autumn 2025)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
