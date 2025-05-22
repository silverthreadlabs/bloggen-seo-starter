'use client';



import Link from 'next/link';

import Logo from '@/components/logo/Logo';

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
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
    { href: '/terms', label: 'Terms' }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    // const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <footer className='bg-bg-bg-subtle border-bg-bg-hover w-full border-t shadow-inner'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='py-12'>
                    <div className={'flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0'}>
                        <div className='flex flex-col space-y-4'>
                            <Logo />

                            <Link
                                href={MAILTO}
                                className='text-fg-text hover:text-primary-text inline-flex items-center space-x-2 text-sm transition-colors'>
                                <FaRegEnvelope className='h-4 w-4' />
                                <span>{EMAIL}</span>
                            </Link>
                        </div>

                        {/* Nav + Social */}
                        <div
                            className={
                                'flex flex-col items-start space-y-6 space-x-6 md:flex-row md:items-center md:space-y-0'
                            }>
                            <nav className='flex flex-wrap gap-4'>
                                {NAV_ITEMS.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className='text-fg-text hover:text-primary-text text-sm transition-colors'>
                                        {label}
                                    </Link>
                                ))}
                            </nav>

                            <SocialLinks />
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className='border-fg-line mt-8 border-t pt-8'>
                        <p className='text-fg-text text-sm'>
                            © {currentYear} Bloggen. Built by{' '}
                            <Link
                                href='https://silverthreadlabs.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-text hover:text-primary-text-contrast transition-colors'>
                                Silverthread Labs
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
