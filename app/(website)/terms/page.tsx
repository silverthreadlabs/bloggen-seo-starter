import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';

export const metadata: Metadata = createPageMetadata({
    path: 'terms',
    description:
        'Read our Terms of Service and how it relates to you.'
});

// Reusable section component

const TermsSection = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
    <div className='mb-8'>
        <h2 className=' text-canvas-text-contrast mb-4 text-3xl leading-snug font-semibold tracking-normal md:text-4xl'>
            {number}. {title}
        </h2>
        <p className=' text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
            {children}
        </p>
    </div>
);

// Terms of Service component
export default function TermsOfService() {
    // Array of sections for easy management and addition

    const sections = [
        {
            title: 'Introduction',
            content:
                "These Terms of Service ('Terms') govern your use of the Silverthread Labs website and services. By accessing or using our services, you agree to be bound by these Terms."
        },
        {
            title: 'Acceptance of Terms',
            content:
                'By using our services, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not use our services.'
        },
        {
            title: 'Changes to Terms',
            content:
                'We may revise these Terms from time to time. The most current version will always be posted on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms.'
        },
        {
            title: 'User Obligations',
            content:
                'You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the services.'
        },
        {
            title: 'Intellectual Property',
            content:
                'All content on our website, including text, graphics, logos, and software, is the property of Silverthread Labs and is protected by copyright and other intellectual property laws.'
        },
        {
            title: 'Privacy Policy',
            content:
                'Our Privacy Policy, which is incorporated into these Terms by reference, describes how we collect, use, and share your personal information.'
        },
        {
            title: 'Limitation of Liability',
            content:
                'To the fullest extent permitted by applicable law, Silverthread Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.'
        },
        {
            title: 'Termination',
            content:
                'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'
        },
        {
            title: 'Governing Law',
            content:
                'These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Silverthread Labs is established, without regard to its conflict of law provisions.'
        },
        {
            title: 'Contact Information',
            content: 'Questions about the Terms should be sent to us at legal@silverthreadlabs.com.'
        }
    ];
    
return (
        <div className='mx-auto mt-16 min-h-screen max-w-7xl px-4 xl:px-0'>
            <div className='mx-auto max-w-7xl py-12'>
                <h1 className='text-canvas-text-contrast mb-8 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                    Terms of Service
                </h1>

                <p className='text-canvas-text mb-8 text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                    Last updated: May 20, 2025
                </p>
                <div className='space-y-8'>
                    {sections.map((section, index) => (
                        <TermsSection key={index} number={index + 1} title={section.title}>
                            {section.content}
                        </TermsSection>
                    ))}
                </div>
            </div>
        </div>
    );
}
