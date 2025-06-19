import { siteConfig } from '@/lib/config/site';

import type { BlogPosting, WithContext } from 'schema-dts';

interface BlogPostSchemaProps {
    title: string;
    description?: string;
    summary?: string;
    publishedAt?: string;
    modifiedAt?: string;
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
}

const createBlogPostSchema = ({
    title,
    description,
    summary,
    publishedAt,
    modifiedAt,
    image,
    ogImage,
    slug,
    author,
    tags
}: BlogPostSchemaProps): WithContext<BlogPosting> => {
    const postUrl = `${siteConfig.baseUrl}/blog/${slug.join('/')}`;
    
    // Determine the best image to use
    // const schemaImage = ogImage?.url || image;
    // const imageUrl = image ? 
    //     ? `${siteConfig.baseUrl}${image}` 
    //     : siteConfig.getImageConfig(title).url;


        

    // Handle author - can be string or object
    const authorName = typeof author === 'string' ? author : author?.name || siteConfig.author.name;
    // const authorUrl = typeof author === 'object' && author.picture 
    //     ? `${siteConfig.baseUrl}${author.picture}` 
    //     : siteConfig.author.url;

    // Use summary as description fallback, then site description
    const schemaDescription = description || summary || siteConfig.description;

    // Combine tags with site keywords
    const schemaKeywords = tags ? [...tags, ...siteConfig.keywords] : siteConfig.keywords;

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: schemaDescription,
        url: postUrl,
        datePublished: publishedAt,
        dateModified: modifiedAt || publishedAt,
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
            url: `${siteConfig.baseUrl}${image}`,
            width: siteConfig.getImageConfig(title).width.toString(),
            height: siteConfig.getImageConfig(title).height.toString(),
            description: title
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': postUrl
        },
        isPartOf: {
            '@type': 'Blog',
            '@id': `${siteConfig.baseUrl}/blog`,
            name: `Blog - ${siteConfig.title}`
        },
        keywords: schemaKeywords,
        inLanguage: 'en-US',
        potentialAction: {
            '@type': 'ReadAction',
            target: [postUrl]
        }
    };
};

// interface BlogPostSchemaComponentProps extends BlogPostSchemaProps {}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = (props) => {
    const schema = createBlogPostSchema(props);
    
    return (
        <script 
            type='application/ld+json' 
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
    );
};

export default BlogPostSchema;