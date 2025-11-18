export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">North House Press</h3>
            <p className="text-sm text-green-200">
              Independent publishing company focused on Scottish culture, launching May 2025.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="text-sm text-green-200 space-y-2">
              <li>Company Number: SC838774</li>
              <li>Rogart, Sutherland, Scotland</li>
              <li>Incorporated: 24 February 2025</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Project</h3>
            <p className="text-sm text-green-200">
              This is an interim development site for project planning and asset management.
              The production WordPress site will launch in 2025.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-sm text-green-200">
          <p>&copy; {new Date().getFullYear()} North House Press Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

