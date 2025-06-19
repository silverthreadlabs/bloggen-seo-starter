import { siteConfig } from '@/lib/config/site';

import { Blog, WithContext } from 'schema-dts';

const blogSchema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    url: `${siteConfig.baseUrl}/blog`,
    name: `Blog - ${siteConfig.title}`,
    description:
        'Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.',
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
        url: siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).url,
        width: siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).width.toString(),
        height: siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).height.toString(),
        description: siteConfig.getImageConfig(`Blog | ${siteConfig.title}`).description
    },
    keywords: siteConfig.keywords,
    sameAs: siteConfig.social.sameAs,
    potentialAction: {
        '@type': 'ReadAction',
        target: [
            {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.baseUrl}/blog`
            }
        ]
    }
};

const BlogSchema = () => (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
);

export default BlogSchema;
