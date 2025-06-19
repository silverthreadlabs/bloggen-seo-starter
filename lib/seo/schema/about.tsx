import { siteConfig } from '@/lib/config/site';
import type { WithContext, WebPage } from 'schema-dts';
import React from 'react';

const aboutSchema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": `${siteConfig.baseUrl}/about`,
    "name": `About - ${siteConfig.title}`,
    "description": 'Launch a fully optimized Next.js site with Bloggen SEO Starter, then create high-quality, SEO-friendly content effortlessly using Bloggen AI.',
    "isPartOf": {
        "@type": "WebSite",
        "url": siteConfig.baseUrl,
        "name": siteConfig.title,
        "alternateName": siteConfig.alternateNames,
        "description": siteConfig.description,
        "keywords": siteConfig.keywords,
        "sameAs": siteConfig.social.sameAs,
        "publisher": {
            "@type": "Organization",
            "name": siteConfig.publisher,
            "url": siteConfig.author.url,
            "logo": {
                "@type": "ImageObject",
                "url": siteConfig.author.logo,
            },
        },
        "image": {
            "@type": "ImageObject",
            "url": siteConfig.getImageConfig(`About | ${siteConfig.title}`).url,
            "width": siteConfig.getImageConfig(`About | ${siteConfig.title}`).width.toString(),
            "height": siteConfig.getImageConfig(`About | ${siteConfig.title}`).height.toString(),
            "description": siteConfig.getImageConfig(`About | ${siteConfig.title}`).description,
        },
    },
    "mainEntity": [
        {
            "@type": "CreativeWork",
            "name": "SEO On by Default",
            "description": "Built-in metadata, OG Images, sitemap & much more to keep your site optimized from day one."
        },
        {
            "@type": "CreativeWork",
            "name": "Designrift",
            "description": "Create stunning themes for your web application with Radix color palettes for cohesive styling."
        },
        {
            "@type": "CreativeWork",
            "name": "MDX-Powered Blog",
            "description": "Drop MDX files into your directory to publish SEO-friendly, responsive posts instantly."
        },
        {
            "@type": "CreativeWork",
            "name": "Rich Results Ready",
            "description": "JSON-LD structured data for rich search result snippets."
        },
        {
            "@type": "CreativeWork",
            "name": "Instant RSS Feed",
            "description": "Automatically generate RSS feed to keep subscribers updated in real time."
        },
        {
            "@type": "CreativeWork",
            "name": "SEO & Performance Analytics",
            "description": "Built-in performance metrics with Google Analytics, Lighthouse, and more."
        },
    ],
};

const AboutSchema: React.FC = () => (
    <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
    />
);

export default AboutSchema;
