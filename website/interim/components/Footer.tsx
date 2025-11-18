import { BookOpen, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-green-300" />
              <h3 className="font-bold text-lg">North House Press</h3>
            </div>
            <p className="text-sm text-green-200 leading-relaxed">
              Independent publishing company focused on Scottish culture.
              Publishing books we love, celebrating Scottish culture, and bringing lost classics back to readers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="text-sm text-green-200 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Company Number: SC838774
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-300" />
                Rogart, Sutherland, Scotland
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Project</h3>
            <p className="text-sm text-green-200 leading-relaxed mb-4">
              This is an interim development site for project planning and asset management.
              The production WordPress site will launch when ready.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-300">
              <Mail className="w-4 h-4" />
              <span>Contact via email for updates</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-green-800 text-center">
          <p className="text-sm text-green-200">
            &copy; {new Date().getFullYear()} North House Press Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
