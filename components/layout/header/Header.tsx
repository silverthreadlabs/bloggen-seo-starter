"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo/Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
  ];

  const buttonStyles =
    "inline-flex items-center justify-center gap-2 rounded-[2px] border border-slate-700 px-3 py-2.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/50";

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A0A0F] border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Nav Links */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-200 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium rounded-[2px]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <div className="flex-1 px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                Contact
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#0A0A0F]/95 backdrop-blur-sm md:hidden">
          <div className="h-full overflow-y-auto">
            <div className="border-t border-slate-800">
              <div className="p-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-[2px] px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/50 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact">
                  <div className="flex-1 px-8 mx-3 my-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
