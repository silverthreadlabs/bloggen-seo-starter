import { Metadata } from 'next';
import { BlogPosts } from '@/components/blog/BlogPosts'
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import { siteConfig } from '@/lib/config/site'

export const metadata: Metadata = createPageMetadata({
  path: "blog",
  description:
    "Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.",
});

export default function BlogPage() {
  return (
    <main 
      role="main"
      className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            url: `${siteConfig.baseUrl}/blog`,
            author: {
              "@type": "Person",
              name: "Silverthread Labs",
            },
          }),
        }}
      />

      <BlogPosts />
    </main>
  )
}
