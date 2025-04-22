import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import Image from "next/image";

// import BackgroundGrid from "@/components/layout/BackgroundGrid";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import { defaultMetadata } from "@/lib/seo/metadata/createBaseMetadata";
import { getURL } from "@/lib/utils/helpers";

// Make generateMetadata asynchronous and await params
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   // Await the params before using them
//   const { slug } = await Promise.resolve(params)
//   const post = getBlogPosts().find((post) => post.slug === slug)
//   if (!post) {
//     return
//   }

//   const { title, publishedAt: publishedTime, summary: description, image } =
//     post.metadata
//   const ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [{ url: ogImage }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

// Use the helper in generateMetadata and then override blog-specific fields.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  // Destructure the blog post metadata.
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  // Use the blog post slug as the path for the helper (or prepend "blog/" if desired).
  // const title="fu1k";
  const baseMeta = createPageMetadata({
    path: title, // could also be `blog/${slug}` if you want that prefix in the URL
    description,
    baseMetadata: defaultMetadata,
  });
  
  const ogImage = image
  ? image
  : `${getURL()}/og?title=${encodeURIComponent(title)}`;
  
  // console.log("FUCK2: ", slug);
  return {
    ...baseMeta,
    // Override the title with the blog post's title.
    // title,
    openGraph: {
      ...baseMeta.openGraph,
      // title,
      // description,
      type: "article",
      publishedTime,
      url: `${getURL()}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMeta.twitter,
      
      // title,
      // description,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
  };
}
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params before accessing slug
  const { slug } = await Promise.resolve(params);
  const posts = getBlogPosts(); // Synchronous call
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
<div className="relative min-h-screen bg-[#0A0A0F]">
      <div className="relative mx-auto max-w-[900px] px-6 lg:px-8 py-16 md:py-28">
        {/* Preserve JSON-LD exactly as is */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Silverthread Labs",
              },
            }),
          }}
        />

        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-16 bg-slate-700" />
            <span className="text-slate-400 text-sm uppercase tracking-wider font-medium">
              Blog Post
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              {post.metadata.title}
            </span>
          </h1>
          <time className="text-slate-400 text-lg">
            {formatDate(post.metadata.publishedAt)}
          </time>
        </div>

        {/* Featured Image */}
        {post.metadata.image && (
          <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden rounded-[2px] shadow-2xl border border-slate-800/50">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-blue-400 prose-a:transition-all prose-a:no-underline
          hover:prose-a:text-blue-300
          prose-strong:text-white prose-strong:font-bold
          prose-code:text-slate-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-[2px] prose-code:text-sm
          prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-[2px] prose-pre:p-6
          prose-blockquote:border-l-4 prose-blockquote:border-slate-700 prose-blockquote:text-slate-400 prose-blockquote:pl-6 prose-blockquote:py-1
          prose-li:text-slate-300 prose-li:mb-2
          prose-img:rounded-[2px] prose-img:shadow-xl prose-img:border prose-img:border-slate-800/50
          [&>*:first-child]:mt-0"
        >
          <CustomMDX source={post.content} />
        </article>
      </div>
    </div>
  );
}
