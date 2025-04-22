import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://www.silverthreadlabs.com'
// export const baseUrl = 'http://192.168.18.130:3000'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['','/contact', '/blog', '/products', '/products/GlanceAI', '/products/DesignRift'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
  // return [...routes]
}
