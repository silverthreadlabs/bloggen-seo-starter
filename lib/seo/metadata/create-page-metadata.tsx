import { Metadata } from 'next';

import { siteConfig } from '@/lib/config/site';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';

/**
 * Creates page-specific metadata.
 *
 * @param params - Options for the metadata.
 * @param params.path - The page path (e.g. "contact"). This will be capitalized for the title.
 * @param params.description - (Optional) A unique page description. If omitted, the description from baseMetadata is used.
 * @param params.baseMetadata - (Optional) The base metadata to extend from (e.g. defaultMetadata or noRobotsMetadata). Defaults to defaultMetadata.
 * @returns A Metadata object with updated title, description, and openGraph/twitter settings.
 */

export function createPageMetadata({
    path,
    description,
    baseMetadata = defaultMetadata
}: {
    path: string;
    description?: string;
    baseMetadata?: Metadata;
}): Metadata {
    // Capitalize the first letter of the provided path for the page title.
    const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);
    const pageTitle = capitalizedPath ? `${capitalizedPath} | ${siteConfig.title}` : siteConfig.title;
    const url = `${siteConfig.baseUrl}/${path}`;
    const ogImageUrl = `${siteConfig.baseUrl}/og?title=${encodeURIComponent(pageTitle)}`;

    return {
        ...baseMetadata,
        alternates: {
            canonical: url
        },
        title: pageTitle,
        description: description || baseMetadata.description,
        openGraph: {
            ...baseMetadata.openGraph,
            url,
            title: pageTitle,
            description: description || baseMetadata.openGraph?.description,
            images: [
                {
                    url: ogImageUrl,
                    alt: pageTitle
                }
            ]
        },
        twitter: {
            ...baseMetadata.twitter,
            title: pageTitle,
            description: description || baseMetadata.twitter?.description,
            images: [
                {
                    url: ogImageUrl,
                    alt: pageTitle
                }
            ]
        }
    };
}
