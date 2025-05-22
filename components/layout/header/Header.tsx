'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(open => !open);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-bg-bg-subtle border-b border-bg-bg-hover shadow-sm"
      role="banner"
    >
      {/* px-4 sm:px-6 lg:px-8 */}
      <div className="px-4 xl:px-0 max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav - hidden on small screens, visible on md and up */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-4"
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
              <Button color="primary" size="default" variant="solid">
                Contact
              </Button>
            </Link>
            <Link href="https://www.bloggen.dev/" target="_blank">
              <Button
                color="neutral"
                size="default"
                variant="outline"
                trailingIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Create your first post
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button - visible on small screens, hidden on md and up */}
          <Button
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="block md:hidden" // Changed from md:hidden to block md:hidden for clarity
            color="neutral"
            variant="ghost"
            iconOnly
            leadingIcon={
              mobileOpen ? (
                <FaTimes className="h-5 w-5 text-fg-text" />
              ) : (
                <FaBars className="h-5 w-5 text-fg-text" />
              )
            }
          />
        </div>
      </div>

      {/* Mobile overlay menu - only rendered when mobileOpen is true */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
          className="fixed z-50 inset-0 top-16 bg-bg-base/95 backdrop-blur-sm md:hidden"
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
              <div className="flex flex-col gap-3">
                <Link href="/contact" onClick={toggleMobile} className="flex-1">
                  <Button
                    color="primary"
                    size="default"
                    variant="solid"
                    fullWidth
                  >
                    Contact
                  </Button>
                </Link>
                <Link
                  href="https://www.bloggen.dev/"
                  target="_blank"
                  className="flex-1"
                >
                  <Button
                    color="neutral"
                    size="default"
                    variant="outline"
                    trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                    fullWidth
                  >
                    Create your first post
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
