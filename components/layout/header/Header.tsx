"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/logo/Logo";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-bg-base border-b border-fg-border shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className={`${isMobile ? "hidden" : "flex"} items-center space-x-4`}
          >
            <ul className="flex space-x-3">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="px-3 py-2 text-sm font-medium rounded-sm text-fg-text hover:text-primary-text transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="flex-1">
              <Button color="primary" size="default" variant="solid" >
                Contact
              </Button>
            </Link>
            <Link href="https://www.bloggen.dev/" target="_blank">
              <Button color="neutral" size="default" variant="outline" trailingIcon={<ArrowUpRight className="w-4 h-4" />} >
                Create your first post
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="md:hidden"
            color="neutral"
            variant="ghost"
            iconOnly
            leadingIcon={mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-16 z-50 bg-bg-base/95 backdrop-blur-sm md:hidden"
        >
          <ul className="p-4 space-y-3 border-t border-fg-border">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={toggleMobile}
                  className="block px-4 py-2 text-base font-medium rounded-sm text-fg-text hover:bg-bg-bg hover:text-primary-text transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={toggleMobile}
                className="flex-1"
              >
                <Button color="primary" size="default" variant="solid" fullWidth>
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
