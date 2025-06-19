//
// import { Mail, MessageSquare, Clock } from 'lucide-react';
// import { Metadata } from 'next';
// import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
// import Link from 'next/link';
// import FeatureCard from '@/components/ui/feature-card';
import { Suspense } from 'react';

import { Metadata } from 'next';

import CalBooking from '@/components/contact/cal-booking';
import ContactForm from '@/components/contact/contact-form';
import TabsComponent from '@/components/ui/tabs';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import ContactSchema from '@/lib/seo/schema/contact';

export const metadata: Metadata = createPageMetadata({
    path: 'contact',
    description:
        'Have questions about our products, or just want to share your thoughts? We would love to hear from you!'
});

const LoadingSpinner = () => (
    <div className='flex h-96 items-center justify-center'>
        <div className='border-primary-solid h-8 w-8 animate-spin rounded-full border-b-2'></div>
    </div>
);

const ContentWrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div
        className={`from-canvas-bg via-canvas-subtle to-canvas-bg border-canvas-line overflow-hidden rounded-xl border bg-gradient-to-bl from-0% via-50% to-100% shadow-sm ${className}`}>
        {children}
    </div>
);

export default function ContactPage() {
    const tabs = [
        {
            value: 'form',
            label: 'Send a message',
            content: (
                <div className='mx-auto max-w-2xl'>
                    <ContentWrapper className='p-8'>
                        <ContactForm />
                    </ContentWrapper>
                </div>
            )
        },
        {
            value: 'call',
            label: 'Book a call',
            content: (
                <ContentWrapper>
                    <Suspense fallback={<LoadingSpinner />}>
                        <CalBooking />
                    </Suspense>
                </ContentWrapper>
            )
        }
    ];

    return (
        <>
            <ContactSchema />
            <div className='mx-auto min-h-screen w-full max-w-7xl'>
                <div className='px-4 py-16'>
                    {/* Header Section */}
                    <header className='mb-12 text-center'>
                        <h1 className='text-canvas-text-contrast mb-4 text-4xl font-bold md:text-5xl'>Get in touch</h1>
                        <h2 className='text-canvas-text mx-auto max-w-2xl text-lg text-balance'>
                            Book a meeting with us to discuss how we can help or fill out a form to get in touch
                        </h2>
                    </header>

                    {/* Tabs Section */}
                    <TabsComponent tabs={tabs} defaultValue='form' />
                </div>
            </div>
        </>
    );
}
