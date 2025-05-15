'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '@/components/logo/Logo';

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-3">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="px-3 py-2 text-sm font-medium rounded-sm text-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm md:hidden"
        >
          <ul className="p-4 space-y-3 border-t border-border">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={toggleMobile}
                  className="block px-4 py-2 text-base font-medium rounded-sm text-foreground hover:bg-card hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={toggleMobile}
                className="block w-full px-6 py-2 text-center text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
