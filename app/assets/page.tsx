import { ImageIcon, FileImage, User, Palette } from "lucide-react";

export default function AssetsPage() {
  const assetCategories = [
    {
      title: "Logo & Branding",
      icon: Palette,
      items: [
        "Primary logo (PNG, SVG, EPS) - Requested from David & Kirsty",
        "Logo variations (horizontal, vertical, icon)",
        "Brand guidelines document (moss green color scheme)",
      ],
      status: "pending",
    },
    {
      title: "Book Covers",
      icon: FileImage,
      items: [
        '"The Grey Coast" by Neil Gunn - Requested',
        "Additional Neil Gunn books (2 titles) - Requested",
        '"A Year In Water" by Beth McDonough - Requested',
        "Autumn nonfiction book - Pending",
      ],
      status: "pending",
    },
    {
      title: "Author Photos",
      icon: User,
      items: [
        "Beth McDonough - Requested",
        "Neil Gunn (archival photos) - Research needed",
        "Other authors - As books are added",
      ],
      status: "pending",
    },
    {
      title: "Other Images",
      icon: ImageIcon,
      items: [
        "Highland location photos",
        "Tay swimming spots (for 'A Year In Water')",
        "Event photos (when available)",
      ],
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Asset Gallery</h1>
          <p className="text-lg text-green-700">
            Brand assets, book covers, and images for North House Press
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Asset Status</h2>
          <p className="text-gray-600 mb-6">
            Most assets are currently being requested from David & Kirsty. Once received, they will be organized and displayed here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {assetCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-green-700" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t">
                <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                  {category.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2">Next Steps</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Request logo and brand assets from David & Kirsty</li>
            <li>• Collect high-res book cover images for all 5 initial books</li>
            <li>• Gather author photos and bios</li>
            <li>• Organize assets into proper folders</li>
            <li>• Update this gallery as assets arrive</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

