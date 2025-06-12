import { getBlogPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/config/site';
import { getProductPosts } from '@/lib/products';

export default async function sitemap() {
    const blogs = getBlogPosts().map((post) => ({
        url: `${siteConfig.baseUrl}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt
    }));
    const products = getProductPosts().map((post) => ({
        url: `${siteConfig.baseUrl}/products/${post.slug}`,
        lastModified: post.metadata.publishedAt
    }));

    const routes = siteConfig.sitemap.staticRoutes.map((route) => ({
        url: `${siteConfig.baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0]
    }));

    const terms = {
        url: `${siteConfig.baseUrl}/terms`,
        lastModified: new Date().toISOString().split('T')[0]
    };

    return [...routes, ...blogs, ...products, terms];
}
