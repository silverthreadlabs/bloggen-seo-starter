import { Metadata } from 'next';
import { BlogPosts } from '@/components/posts'
import { createPageMetadata } from '@/lib/seo/metadata/createPageMetadata';
import { siteConfig } from '@/lib/config/siteConfig'


export const metadata: Metadata = createPageMetadata({
  path: "blog",
  description:
    "Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.",
});



export default function BlogPage() {
  return (
    <section >

      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            // headline: blog.title,
            // description: blog.description,
            url: `${baseUrl}/blog`,
            // image: `${baseUrl}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: "Silverthread Labs",
              image: {
                "@type": "ImageObject",
                url: `${baseUrl}$`,
              },
            },
          }),
        }}
      /> */}


      <BlogPosts />
    </section>
  )
}
