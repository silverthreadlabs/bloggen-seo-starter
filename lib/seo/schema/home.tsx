import { siteConfig } from '@/lib/config/site';

import type { WebSite, WithContext } from 'schema-dts';

const homeSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    alternateName: siteConfig.alternateNames,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
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
        url: siteConfig.getImageConfig(siteConfig.title).url,
        width: siteConfig.getImageConfig(siteConfig.title).width.toString(),
        height: siteConfig.getImageConfig(siteConfig.title).height.toString(),
        description: siteConfig.getImageConfig(siteConfig.title).description
    },
    sameAs: siteConfig.social.sameAs,
    keywords: siteConfig.keywords
};

const HomeSchema: React.FC = () => (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
);

export default HomeSchema;
