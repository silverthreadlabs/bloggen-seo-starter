import { siteConfig } from '@/lib/config/site';

//remember the robots is being controlled in the seo/metadata/createBaseMedata.ts
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*'
            }
        ],
        sitemap: `${siteConfig.baseUrl}/sitemap.xml`
    };
}
