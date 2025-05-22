// import React from 'react';
// import { Mail, MessageSquare, Clock } from 'lucide-react';
// import { Metadata } from 'next';
// import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
// import Link from 'next/link';
// import FeatureCard from '@/components/ui/feature-card';
// import { Text } from '@/components/ui/text';

// export const metadata: Metadata = createPageMetadata({
//   path: 'contact',
//   description:
//     'Have questions about our products, or just want to share your thoughts? We would love to hear from you!',
// });

// export default function ContactPage() {
//   return (
//     <main role="main" className="min-h-screen">
//       {/* JSON-LD Schema */}
//       <script
//         type="application/ld+json"
//         suppressHydrationWarning
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             '@context': 'https://schema.org',
//             '@type': 'ContactPage',
//             name: 'Contact Us',
//             description: 'Get in touch with our team',
//           }),
//         }}
//       />

//       <div className=" max-w-[20%] xl:max-w-7xl mx-auto py-24 bg-red-500 xl:bg-green-500">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <Text renderAs="p" className="text-fg-text">
//               Contact
//             </Text>
//             <Link
//               href="https://bloggen.dev"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary-text hover:text-primary-text-contrast transition-colors"
//             >
//               Bloggen
//             </Link>
//             <span className="text-fg-text">×</span>
//             <Link
//               href="https://silverthreadlabs.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-primary-text hover:text-primary-text-contrast transition-colors"
//             >
//               Silverthread Labs
//             </Link>
//           </div>
//           <Text renderAs="h1" className="text-4xl md:text-5xl mb-6">
//             Get in Touch
//           </Text>
//           <Text renderAs="p" className="text-lg text-fg-text">
//             If you have any questions about the SEO template? or how to use
//             Bloggen. Or just want to share your feedback? Feel free to send us
//             an email.
//           </Text>
//         </div>

//         {/* Contact Options */}
//         <div className="max-w-2xl mx-auto">
//           {/* Email Cards */}
//           <Link
//             href="mailto:silverthreadlabs@gmail.com"
//             className="block group mb-6 hover:cursor-pointer"
//           >
//             <FeatureCard
//               icon={<Mail className="w-6 h-6" />}
//               title="Email Us"
//               descriptionStart="silverthreadlabs@gmail.com"
//             />
//           </Link>

//           <Link
//             href="mailto:bloggen.dev@gmail.com"
//             className="block group mb-6 hover:cursor-pointer"
//           >
//             <FeatureCard
//               icon={<Mail className="w-6 h-6" />}
//               title="Email Us"
//               descriptionStart="bloggen.dev@gmail.com"
//             />
//           </Link>

//           {/* Additional Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <FeatureCard
//               icon={<Clock className="w-5 h-5 text-fg-text" />}
//               title="Response Time"
//               descriptionStart="Within 24 hours"
//             />

//             <FeatureCard
//               icon={<MessageSquare className="w-5 h-5 text-fg-text" />}
//               title="Support"
//               descriptionStart="24/7 Template Support"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { Suspense } from 'react';
import CalBooking from '@/components/contact/cal-booking';
import ContactForm from '@/components/contact/contact-form';
import TabsComponent from '@/components/ui/tabs';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';

export const metadata: Metadata = createPageMetadata({
  path: 'contact',
  description:
    'Have questions about our products, or just want to share your thoughts? We would love to hear from you!',
});

const LoadingSpinner = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-solid"></div>
  </div>
);

const ContentWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  // <div className={`bg-primary-solid rounded-xl border border-fg-border shadow-sm overflow-hidden ${className}`}>
  <div
    className={`bg-gradient-to-bl from-bg-bg-bg from-0% via-bg-bg-subtle via-50% to-bg-bg-bg to-100% rounded-xl border border-bg-bg-line shadow-sm overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export default function ContactPage() {
  const tabs = [
    {
      value: 'call',
      label: 'Book a call',
      content: (
        <ContentWrapper>
          <Suspense fallback={<LoadingSpinner />}>
            <CalBooking />
          </Suspense>
        </ContentWrapper>
      ),
    },
    {
      value: 'form',
      label: 'Send a message',
      content: (
        <div className="max-w-2xl mx-auto">
          <ContentWrapper className="p-8">
            <ContactForm />
          </ContentWrapper>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">
      <div className="px-4 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-fg-text-contrast mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-fg-text max-w-2xl mx-auto text-balance">
            Book a meeting with us to discuss how we can help or fill out a form
            to get in touch
          </p>
        </header>

        {/* Tabs Section */}
        <TabsComponent tabs={tabs} defaultValue="call" />
      </div>
    </div>
  );
}
