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
import * as Tabs from '@radix-ui/react-tabs';
import CalBooking from '@/components/contact/cal-booking';
import ContactForm from '@/components/contact/contact-form';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';

export const metadata: Metadata = createPageMetadata({
  path: 'contact',
  description:
    'Have questions about our products, or just want to share your thoughts? We would love to hear from you!',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen w-7xl max-w-7xl">
      <div className=" mx-auto px-4 py-16 ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-fg-text mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-fg-text opacity-80 max-w-2xl mx-auto">
            Book a meeting with us to discuss how we can help or fill out a form
            to get in touch
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs.Root defaultValue="call" className="w-full">
          <Tabs.List className="flex w-full max-w-md mx-auto mb-12 bg-bg-subtle rounded-lg p-1 border border-fg-border">
            <Tabs.Trigger
              value="call"
              className="flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-primary-solid data-[state=active]:text-primary-on-primary data-[state=inactive]:text-fg-text data-[state=inactive]:hover:text-primary-text data-[state=inactive]:hover:bg-bg-bg-hover"
            >
              Book a call
            </Tabs.Trigger>
            <Tabs.Trigger
              value="form"
              className="flex-1 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:bg-primary-solid data-[state=active]:text-primary-on-primary data-[state=inactive]:text-fg-text data-[state=inactive]:hover:text-primary-text data-[state=inactive]:hover:bg-bg-bg-hover"
            >
              Send a message
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="call" className="focus:outline-none">
            <div className="bg-bg-base rounded-xl border border-fg-border shadow-sm overflow-hidden">
              <Suspense
                fallback={
                  <div className="h-96 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-solid"></div>
                  </div>
                }
              >
                <CalBooking />
              </Suspense>
            </div>
          </Tabs.Content>

          <Tabs.Content value="form" className="focus:outline-none">
            <div className="max-w-2xl mx-auto">
              <div className="bg-bg-base rounded-xl border border-fg-border shadow-sm p-8">
                <ContactForm />
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
