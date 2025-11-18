import Image from "next/image";
import { FileImage, User, Palette, BookOpen, Download, CheckCircle2 } from "lucide-react";

export default function AssetsPage() {
  const bookCovers = [
    {
      title: "The Grey Coast",
      author: "Neil Gunn",
      year: "1926",
      edition: "Centenary Edition",
      image: "/images/covers/The Grey Coast FC Hi Res.jpg",
      status: "received"
    },
    {
      title: "The Serpent",
      author: "Neil Gunn",
      image: "/images/covers/The Serpent FC Hi Res.jpg",
      status: "received"
    },
    {
      title: "Blood Hunt",
      author: "Neil Gunn",
      image: "/images/covers/Blood Hunt FC Hi Res.jpg",
      status: "received"
    }
  ];

  const authorPhotos = [
    {
      name: "Alan Riach",
      image: "/images/Alan Riach portrait photo 2.jpg",
      status: "received"
    }
  ];

  const assetCategories = [
    {
      title: "Book Covers",
      icon: BookOpen,
      count: bookCovers.length,
      status: "received",
      description: "High-resolution book cover images"
    },
    {
      title: "Author Photos",
      icon: User,
      count: authorPhotos.length,
      status: "partial",
      description: "Professional author portraits"
    },
    {
      title: "Logo & Branding",
      icon: Palette,
      count: 0,
      status: "pending",
      description: "Brand logo and visual identity"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">Asset Gallery</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Brand assets, book covers, and images for North House Press
          </p>
        </div>

        {/* Asset Categories Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {assetCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${
                  category.status === "received" ? "from-green-500 to-green-700" :
                  category.status === "partial" ? "from-yellow-500 to-yellow-700" :
                  "from-gray-400 to-gray-600"
                }`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                {category.status === "received" && (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-700">{category.count}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  category.status === "received" ? "bg-green-100 text-green-700" :
                  category.status === "partial" ? "bg-yellow-100 text-yellow-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {category.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Book Covers Gallery */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Book Covers</h2>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              {bookCovers.length} Received
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {bookCovers.map((book, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-96 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                  <Image
                    src={book.image}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {book.year && (
                    <div className="absolute top-4 right-4 bg-green-900/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {book.year}
                    </div>
                  )}
                  {book.edition && (
                    <div className="absolute top-4 left-4 bg-white/90 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {book.edition}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-green-700 font-medium">{book.author}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>High-resolution image received</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Author Photos */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-green-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Author Photos</h2>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
              {authorPhotos.length} Received
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {authorPhotos.map((author, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src={author.image}
                    alt={`${author.name} portrait`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Portrait photo received</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Assets */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-green-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-green-600 rounded-full"></div>
            Pending Assets
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="w-6 h-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Logo & Branding</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Primary logo (PNG, SVG, EPS)</li>
                <li>• Logo variations (horizontal, vertical, icon)</li>
                <li>• Brand guidelines document</li>
              </ul>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-6 h-6 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Additional Author Photos</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Beth McDonough photo</li>
                <li>• Neil Gunn archival photos</li>
                <li>• Other authors (as books are added)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
