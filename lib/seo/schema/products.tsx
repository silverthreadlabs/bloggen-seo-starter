import { siteConfig } from '@/lib/config/site';

import { CollectionPage, WithContext } from 'schema-dts';

const productsSchema: WithContext<CollectionPage> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${siteConfig.baseUrl}/products`,
    name: `Products - ${siteConfig.title}`,
    description:
        'Discover our carefully crafted digital products and tools, from premium solutions to open source resources, all designed to help you confidently build and grow your online presence.',
    author: {
        '@type': 'Person',
        name: siteConfig.author.name,
        url: siteConfig.author.url
    },
    publisher: {
        '@type': 'Organization',
        name: siteConfig.publisher,
        url: siteConfig.author.url,
        logo: {
            '@type': 'ImageObject',
            url: siteConfig.author.logo
        }
    },
    image: {
        '@type': 'ImageObject',
        url: siteConfig.getImageConfig(`Products | ${siteConfig.title}`).url,
        width: siteConfig.getImageConfig(`Products | ${siteConfig.title}`).width.toString(),
        height: siteConfig.getImageConfig(`Products | ${siteConfig.title}`).height.toString(),
        description: siteConfig.getImageConfig(`Products | ${siteConfig.title}`).description
    },
    keywords: [...siteConfig.keywords, 'digital products', 'software', 'templates', 'tools'],
    sameAs: siteConfig.social.sameAs,
    mainEntity: {
        '@type': 'ItemList',
        name: 'Digital Products',
        description: 'Collection of digital products and software solutions',
        numberOfItems: 0, // This should be dynamically updated based on actual product count
        itemListElement: [] // This would be populated with actual products in a real implementation
    },
    potentialAction: {
        '@type': 'ViewAction',
        target: [
            {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.baseUrl}/products`
            }
        ]
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
                name: 'Products',
                item: `${siteConfig.baseUrl}/products`
            }
        ]
    }
};

const ProductsSchema = () => (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />
);

export default ProductsSchema;
