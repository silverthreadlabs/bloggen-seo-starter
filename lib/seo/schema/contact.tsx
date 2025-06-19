import { siteConfig } from '@/lib/config/site';

import type { ContactPage, Organization, BreadcrumbList, WithContext } from 'schema-dts';

// Contact Page Schema
const contactPageSchema: WithContext<ContactPage> = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Get in Touch',
    description: 'Have questions about our products, or just want to share your thoughts? We would love to hear from you!',
    url: `${siteConfig.baseUrl}/contact`,
    mainEntity: {
        '@type': 'Organization',
        name: siteConfig.publisher,
        url: siteConfig.author.url,
        logo: {
            '@type': 'ImageObject',
            url: siteConfig.author.logo,
            width: '32',
            height: '32'
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'English',
                contactOption: ['TollFree', 'HearingImpairedSupported']
            },
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                availableLanguage: 'English'
            }
        ],
        sameAs: siteConfig.social.sameAs
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteConfig.baseUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: `${siteConfig.baseUrl}/contact`
            }
        ]
    },
    about: {
        '@type': 'Thing',
        name: 'Contact Information',
        description: 'Multiple ways to get in touch including contact form and booking a call'
    },
    potentialAction: [
        {
            '@type': 'CommunicateAction',
            name: 'Send Message',
            description: 'Send us a message using our contact form',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.baseUrl}/contact`,
                actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
            }
        },
        {
            '@type': 'ScheduleAction',
            name: 'Book a Call',
            description: 'Schedule a 30-minute consultation call',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.baseUrl}/contact`,
                actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
            }
        }
    ]
};

// // Organization Schema (for additional contact details)
// const organizationSchema: WithContext<Organization> = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     '@id': `${siteConfig.baseUrl}#organization`,
//     name: siteConfig.publisher,
//     alternateName: siteConfig.alternateNames,
//     url: siteConfig.author.url,
//     logo: {
//         '@type': 'ImageObject',
//         url: siteConfig.author.logo,
//         width: '32',
//         height: '32',
//         caption: `${siteConfig.publisher} Logo`
//     },
//     description: siteConfig.description,
//     foundingDate: '2024',
//     contactPoint: [
//         {
//             '@type': 'ContactPoint',
//             contactType: 'customer support',
//             availableLanguage: ['English'],
//             areaServed: 'Worldwide',
//             serviceType: 'Web Development and SEO Services'
//         }
//     ],
//     sameAs: siteConfig.social.sameAs,
//     hasOfferCatalog: {
//         '@type': 'OfferCatalog',
//         name: 'Services',
//         itemListElement: [
//             {
//                 '@type': 'Offer',
//                 itemOffered: {
//                     '@type': 'Service',
//                     name: 'Web Development Consultation',
//                     description: 'Professional web development and SEO consultation services'
//                 }
//             }
//         ]
//     }
// };

// // Breadcrumb Schema
// const breadcrumbSchema: WithContext<BreadcrumbList> = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//         {
//             '@type': 'ListItem',
//             position: 1,
//             name: siteConfig.title,
//             item: siteConfig.baseUrl
//         },
//         {
//             '@type': 'ListItem',
//             position: 2,
//             name: 'Contact',
//             item: `${siteConfig.baseUrl}/contact`
//         }
//     ]
// };

// Combined schemas array for easier management
const contactSchemas = [contactPageSchema];

const ContactSchema: React.FC = () => (
    <>
        {contactSchemas.map((schema, index) => (
            <script
                key={`contact-schema-${index}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        ))}
    </>
);

export default ContactSchema;