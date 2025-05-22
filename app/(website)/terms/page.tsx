import React from 'react';
import { Text } from '@/components/ui/text';

// Reusable section component
const TermsSection = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <Text
      renderAs="h2"
      className="text-2xl font-semibold text-fg-text-contrast mb-4"
    >
      {number}. {title}
    </Text>
    <Text renderAs="p" className="text-fg-text leading-relaxed">
      {children}
    </Text>
  </div>
);

// Terms of Service component
export default function TermsOfService() {
  // Array of sections for easy management and addition

  const sections = [
    {
      title: 'Introduction',
      content:
        "These Terms of Service ('Terms') govern your use of the Silverthread Labs website and services. By accessing or using our services, you agree to be bound by these Terms.",
    },
    {
      title: 'Acceptance of Terms',
      content:
        'By using our services, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not use our services.',
    },
    {
      title: 'Changes to Terms',
      content:
        'We may revise these Terms from time to time. The most current version will always be posted on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms.',
    },
    {
      title: 'User Obligations',
      content:
        'You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the services.',
    },
    {
      title: 'Intellectual Property',
      content:
        'All content on our website, including text, graphics, logos, and software, is the property of Silverthread Labs and is protected by copyright and other intellectual property laws.',
    },
    {
      title: 'Privacy Policy',
      content:
        'Our Privacy Policy, which is incorporated into these Terms by reference, describes how we collect, use, and share your personal information.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'To the fullest extent permitted by applicable law, Silverthread Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.',
    },
    {
      title: 'Termination',
      content:
        'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
    },
    {
      title: 'Governing Law',
      content:
        'These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Silverthread Labs is established, without regard to its conflict of law provisions.',
    },
    {
      title: 'Contact Information',
      content:
        'Questions about the Terms should be sent to us at legal@silverthreadlabs.com.',
    },
  ];
  return (
    <div className="min-h-screen  mt-16 px-4 xl:px-0 max-w-7xl mx-auto ">
      <div className="max-w-7xl mx-auto py-12">
        <Text renderAs="h1" className=" font-bold text-fg-text-contrast mb-8">
          Terms of Service
        </Text>

        <Text renderAs="p" className="text-fg-text mb-8">
          Last updated: May 20, 2025
        </Text>
        <div className="space-y-8">
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
