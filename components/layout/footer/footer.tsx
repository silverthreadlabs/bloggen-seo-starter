'use client';

import Link from 'next/link';

import Logo from '@/components/logo/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

import SocialLinks from './social-links';
import { FaRegEnvelope } from 'react-icons/fa';

// import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

const EMAIL = 'silverthreadlabs@gmail.com';
const SUBJECT = 'Business Inquiry';
const BODY = 'Hello, I would like to discuss a potential project.';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const NAV_ITEMS = [
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms' }
];

const title = 'Silverthread Labs';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-canvas-bg-subtle border-canvas-bg-hover w-full border-t shadow-inner'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='py-12'>
                    <div className={'flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0'}>
                        <div className='flex flex-col space-y-4'>
                            <Logo />
                            <nav className='flex flex-wrap gap-4'>
                                {NAV_ITEMS.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className='text-canvas-text hover:text-canvas-text-contrast tracking wide text-sm font-medium transition-colors'>
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Nav + Social */}
                        <div className={'flex flex-col items-start space-y-6 sm:items-end'}>
                            <SocialLinks />
                            <ThemeSwitcher />
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className='border-canvas-line mt-8 border-t pt-8'>
                        <p className='text-canvas-text text-sm'>
                            © {currentYear} Bloggen. Crafted by{' '}
                            <Link href='https://silverthreadlabs.com' target='_blank' rel='noopener noreferrer'>
                                <button className='group relative cursor-pointer'>
                                    <div className='ml-1 flex w-fit items-center justify-start space-x-3'>
                                        <span className='text-canvas-text-contrast group-hover:text-canvas-text-contrast/90 text-sm transition-colors duration-300'>
                                            {title}
                                        </span>
                                    </div>
                                    <div className='from-canvas-text-contrast absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-full' />
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
