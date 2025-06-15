import { siteConfig } from '@/lib/config/site';

import type { Blog, WithContext } from 'schema-dts';

const blogUrl = `${siteConfig.baseUrl}/blog`;

const blogSchema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog',
    description: siteConfig.description,
    url: blogUrl,
    author: {
        '@type': 'Organization',
        name: siteConfig.author.name,
        url: siteConfig.author.url,
        logo: {
            '@type': 'ImageObject',
            url: siteConfig.author.logo
        }
    },
    publisher: {
        '@type': 'Organization',
        name: siteConfig.author.name,
        logo: {
            '@type': 'ImageObject',
            url: siteConfig.author.logo
        }
    },
    image: {
        '@type': 'ImageObject',
        url: `${siteConfig.baseUrl}/og?title=${encodeURIComponent(siteConfig.title)}`,
        width: '1200',
        height: '630',
        description: `Blog | ${siteConfig.title}`
    },
    keywords: siteConfig.keywords,
    sameAs: siteConfig.social.sameAs,
    potentialAction: {
        '@type': 'ReadAction',
        target: [
            {
                '@type': 'EntryPoint',
                urlTemplate: blogUrl
            }
        ]
    }
};

const BlogSchema: React.FC = () => {
    return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />;
};

export default BlogSchema;
