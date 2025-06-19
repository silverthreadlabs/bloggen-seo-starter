import { siteConfig } from '@/lib/config/site';

import type { SoftwareApplication, WithContext } from 'schema-dts';

interface ProductPostSchemaProps {
    title: string;
    description?: string;
    summary?: string;
    publishedAt?: string;
    lastUpdated?: string;
    image?: string;
    ogImage?: {
        url: string;
    };
    slug: string[];
    author?: string | {
        name: string;
        picture: string;
    };
    tags?: string[];
    category?: string;
    version?: string;
    link?: string;
}

const createProductPostSchema = ({
    title,
    description,
    summary,
    publishedAt,
    lastUpdated,
    image,
    ogImage,
    slug,
    author,
    tags,
    category,
    version,
    link
}: ProductPostSchemaProps): WithContext<SoftwareApplication> => {
    const productUrl = `${siteConfig.baseUrl}/products/${slug.join('/')}`;
    
    // Handle author - can be string or object
    const authorName = typeof author === 'string' ? author : author?.name || siteConfig.author.name;
    
    // Use summary as description fallback, then site description
    const schemaDescription = description || summary || siteConfig.description;

    // Combine tags with site keywords and add category
    const schemaKeywords = [
        ...(tags || []),
        ...(category ? [category] : []),
        ...siteConfig.keywords,
        'digital product',
        'software'
    ];

    // Determine application category based on category or default
    const applicationCategory = category || 'SoftwareApplication';

    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: title,
        description: schemaDescription,
        url: productUrl,
        downloadUrl: link || productUrl,
        applicationCategory: applicationCategory,
        operatingSystem: 'Web Browser',
        softwareVersion: version || '1.0',
        datePublished: publishedAt,
        dateModified: lastUpdated || publishedAt,
        author: {
            '@type': 'Person',
            name: authorName,
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
            url: image ? `${siteConfig.baseUrl}${image}` : siteConfig.getImageConfig(title).url,
            width: siteConfig.getImageConfig(title).width.toString(),
            height: siteConfig.getImageConfig(title).height.toString(),
            description: title
        },
        screenshot: image ? {
            '@type': 'ImageObject',
            url: `${siteConfig.baseUrl}${image}`,
            description: `Screenshot of ${title}`
        } : undefined,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': productUrl
        },
        isPartOf: {
            '@type': 'CollectionPage',
            '@id': `${siteConfig.baseUrl}/products`,
            name: `Products - ${siteConfig.title}`
        },
        keywords: schemaKeywords,
        inLanguage: 'en-US',
        offers: {
            '@type': 'Offer',
            url: productUrl,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            category: 'Digital Product'
        },
        potentialAction: {
            '@type': 'ViewAction',
            target: [productUrl]
        }
    };
};

const ProductPostSchema: React.FC<ProductPostSchemaProps> = (props) => {
    const schema = createProductPostSchema(props);
    
    return (
        <script 
            type='application/ld+json' 
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
    );
};

export default ProductPostSchema;
