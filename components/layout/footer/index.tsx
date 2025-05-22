'use client';
import React from 'react';
import Link from 'next/link';
import SocialLinks from './social-links';
import Logo from '@/components/logo/Logo';
import { FaRegEnvelope } from 'react-icons/fa';
// import { useMediaQuery } from '@/lib/hooks/useMediaQuery';


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
  // const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <footer className="w-full bg-bg-bg-subtle border-t  border-bg-bg-hover shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
   
          <div
            className={
              'flex justify-between items-start flex-col space-y-8 md:flex-row md:space-y-0'
            }
          >
   
            <div className="space-y-4 flex flex-col">
       
                <Logo />

              <Link
                href={MAILTO}
                className="inline-flex items-center space-x-2 text-fg-text hover:text-primary-text transition-colors text-sm"
              >
                <FaRegEnvelope className="w-4 h-4" />
                <span>{EMAIL}</span>
              </Link>
            </div>

            {/* Nav + Social */}
            <div
              className={'space-x-6 flex flex-col space-y-6 items-start md:flex-row md:space-y-0 md:items-center'}
            >
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
          <div className="mt-8 pt-8 border-t border-fg-line">
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
