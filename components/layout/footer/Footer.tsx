'use client';
import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';
import Logo from '@/components/logo/Logo';
import { FaRegEnvelope } from 'react-icons/fa';
import { Text } from '@/components/ui/text';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

// export const dynamic = 'force-static';

const EMAIL = 'silverthreadlabs@gmail.com';
const SUBJECT = 'Business Inquiry';
const BODY = 'Hello, I would like to discuss a potential project.';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/terms', label: 'Terms' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer className="w-full bg-bg-base border-t border-fg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className={`flex justify-between items-start ${isMobile ? 'flex-col space-y-8' : 'flex-row space-y-0'}`}>
            {/* Logo + Email */}
            <div className="space-y-4 flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <Logo />
                <Text renderAs="span" className="border-none bg-transparent font-semibold">SEO Starter</Text>
              </div>
              <Link
                href={MAILTO}
                className="inline-flex items-center space-x-2 text-fg-text hover:text-primary-text transition-colors text-sm"
              >
                <FaRegEnvelope className="w-4 h-4" />
                <span>{EMAIL}</span>
              </Link>
            </div>

            {/* Nav + Social */}
            <div className={`space-x-6 flex ${isMobile ? 'flex-col space-y-6 items-start' : 'flex-row space-y-0 items-center'}`}>
              <nav className="flex flex-wrap gap-4">
                {NAV_ITEMS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-fg-text hover:text-primary-text transition-colors text-sm"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <SocialLinks />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-fg-border">
            <p className="text-sm text-fg-text">
              © {currentYear} Bloggen. Built by{' '}
              <Link
                href="https://silverthreadlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-text hover:text-primary-text-contrast transition-colors"
              >
                Silverthread Labs
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
