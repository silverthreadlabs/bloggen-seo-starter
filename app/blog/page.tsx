import { BlogPosts } from '@/components/posts'
// import BackgroundGrid from "@/components/layout/BackgroundGrid";
// 
// import { Header } from '.@/components/layout/header/Header'

// export const metadata = {
//   title: 'Blog',
//   description: 'Read my blog.',
// }

import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/createPageMetadata';

const blog = {
  path: "blog",
  title: "Writing about design and tech...",
  description:  "Blog posts from the Silverthread Labs team and community. Discover the latest in web development.",
  
};

export const metadata: Metadata = createPageMetadata({
  path: "blog",
  description:
    "Blog posts from the Silverthread Labs team and community. Discover the latest in web development.",
});


// export async function generateMetadata() {
//   const title = blog.title;
//   const description = blog.description;
//   const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "website",
//       url: `${baseUrl}/blog`,
//       images: [
//         {
//           url: ogImage,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default function Page() {
  return (
    <section className='bg-black relative'>
      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1> */}
      {/* <Header/> */}

      <script
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
      />
		  {/* <BackgroundGrid /> */}

      <BlogPosts />
    </section>
  )
}
