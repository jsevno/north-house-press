"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/assets", label: "Assets" },
    { href: "/docs", label: "Documentation" },
    { href: "/meetings", label: "Meetings" },
    { href: "/copywriting", label: "Copywriting" },
    { href: "/updates", label: "Updates" },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-green-200 transition-colors group">
            <div className="relative">
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <Sparkles className="w-3 h-3 text-green-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="hidden sm:inline">North House Press</span>
            <span className="sm:hidden">NHP</span>
          </Link>
          <div className="flex gap-1 sm:gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200",
                  pathname === link.href 
                    ? "bg-green-700 text-white shadow-md" 
                    : "text-green-100 hover:text-white hover:bg-green-800/50"
                )}
              >
                <span className="hidden md:inline">{link.label}</span>
                <span className="md:hidden">{link.label.split(' ')[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
