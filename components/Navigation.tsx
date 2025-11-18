"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/assets", label: "Assets" },
    { href: "/docs", label: "Documentation" },
    { href: "/updates", label: "Updates" },
  ];

  return (
    <nav className="bg-green-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-green-200 transition-colors">
            <BookOpen className="w-6 h-6" />
            <span>North House Press</span>
          </Link>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-green-200 transition-colors",
                  pathname === link.href ? "text-green-200 underline" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

