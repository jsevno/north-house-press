import Link from "next/link";
import Image from "next/image";
import { BookOpen, FileText, Image as ImageIcon, Calendar, CheckCircle2, Clock, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const featuredBooks = [
    {
      title: "The Grey Coast",
      author: "Neil Gunn",
      year: "1926",
      edition: "Centenary Edition",
      cover: "/images/covers/The Grey Coast FC Hi Res.jpg",
      description: "The debut novel that launched one of Scotland's greatest literary voices."
    },
    {
      title: "The Serpent",
      author: "Neil Gunn",
      cover: "/images/covers/The Serpent FC Hi Res.jpg",
      description: "A powerful exploration of Highland life and culture."
    },
    {
      title: "Blood Hunt",
      author: "Neil Gunn",
      cover: "/images/covers/Blood Hunt FC Hi Res.jpg",
      description: "Another classic from the master of Highland literature."
    }
  ];

  const statusItems = [
    {
      title: "Project Structure",
      status: "complete",
      description: "Folder structure, documentation templates, and guidelines created",
    },
    {
      title: "Interim Website",
      status: "complete",
      description: "Next.js site for hosting assets and providing updates",
    },
    {
      title: "Asset Gathering",
      status: "in-progress",
      description: "Book covers received, logo and additional assets pending",
    },
    {
      title: "WordPress Planning",
      status: "pending",
      description: "E-commerce site design and development planning",
    },
  ];

  const quickLinks = [
    { href: "/assets", icon: ImageIcon, label: "Assets Gallery", description: "Logos, covers, photos", color: "from-green-500 to-green-700" },
    { href: "/docs", icon: FileText, label: "Documentation", description: "Plans, research, strategy", color: "from-green-600 to-green-800" },
    { href: "/meetings", icon: FileText, label: "Meetings", description: "Notes and transcripts", color: "from-green-700 to-green-900" },
    { href: "/copywriting", icon: FileText, label: "Copywriting", description: "Content analysis and guidelines", color: "from-green-500 to-green-700" },
    { href: "/updates", icon: Calendar, label: "Updates", description: "Progress log for David", color: "from-green-600 to-green-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/covers/The Grey Coast FC Hi Res.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-800/80"></div>
        <div className="relative container mx-auto px-4 py-24 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-green-300" />
              <Sparkles className="w-6 h-6 text-green-300" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              North House Press
          </h1>
            <p className="text-2xl md:text-3xl text-green-100 mb-3 font-light">
              Independent Publishing Company
            </p>
            <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
              Publishing books we love, celebrating Scottish culture, and bringing lost classics back to readers.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Featured Books Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-900 mb-3">Featured Books</h2>
            <p className="text-lg text-green-700">Our inaugural collection</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-96 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                  {book.cover && (
            <Image
                      src={book.cover}
                      alt={`${book.title} by ${book.author}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {book.year && (
                    <div className="absolute top-4 right-4 bg-green-900/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {book.year}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {book.edition && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                      {book.edition}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-green-700 font-medium mb-3">{book.author}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-green-600 rounded-full"></div>
            Project Status
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {statusItems.map((item, index) => (
              <div key={index} className="border-2 border-green-100 rounded-xl p-6 hover:border-green-300 transition-colors bg-gradient-to-br from-white to-green-50/30">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  {item.status === "complete" && (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  )}
                  {item.status === "in-progress" && (
                    <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  )}
                  {item.status === "pending" && (
                    <AlertCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore the Project</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{link.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                  <div className="flex items-center text-green-700 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-10 border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-1 h-8 bg-green-600 rounded-full"></div>
            Company Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Company Details</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Name:</span>
                  <span>North House Press Ltd</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Company Number:</span>
                  <span>SC838774</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-green-700 mr-2">Location:</span>
                  <span>Rogart, Sutherland, Scotland</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-green-900 mb-4 text-lg">Directors</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>David Warwick Graham</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span>Kirsty Jane Gunn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
            <h3 className="font-bold text-green-900 mb-4 text-lg">Initial Book List</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span><strong>"The Grey Coast"</strong> by Neil Gunn (1926 - centenary edition)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span><strong>"The Serpent"</strong> and <strong>"Blood Hunt"</strong> by Neil Gunn</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span><strong>"A Year In Water"</strong> by Beth McDonough</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span>Nonfiction title</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
