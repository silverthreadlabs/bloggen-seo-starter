import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate } from "@/lib/utils/mdx";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config/site";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import { defaultMetadata } from "@/lib/seo/metadata/create-base-metadata";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXPreview } from "@/components/mdx-preview";
// import { getURL } from "@/lib/utils/helpers";

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
    : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(title)}`;

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
      url: `${siteConfig.baseUrl}/blog/${post.slug}`,
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
    <main role="main" className="relative min-h-screen bg-background">
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
                ? `${siteConfig.baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${siteConfig.baseUrl}/blog/${post.slug}`,
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
            <div className="h-px w-16 bg-border" />
            <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Blog Post
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-accent via-primary to-accent-foreground text-transparent bg-clip-text">
              {post.metadata.title}
            </span>
          </h1>
          <time className="text-muted-foreground text-lg">
            {formatDate(post.metadata.publishedAt)}
          </time>
        </div>

        {/* Featured Image */}
        {post.metadata.image && (
          <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden rounded-sm shadow-2xl border border-border">
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
        {/* <article className=""> */}
        {/* <CustomMDX source={post.content} /> */}

        <div className="prose prose-invert prose-sm max-w-none">
          <MDXPreview content={post.content} />
        </div>
        {/* </article> */}

        {/* Back Button */}
        <div className="mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
