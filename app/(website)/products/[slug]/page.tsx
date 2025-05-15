import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { CustomMDX } from "@/components/mdx";
// import { formatDate, getProductPosts } from "../utils";
import { getProductPosts } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import { defaultMetadata } from "@/lib/seo/metadata/create-base-metadata";
import { getURL } from "@/lib/utils/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getProductPosts().find((post) => post.slug === slug);
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
  const posts = getProductPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getProductPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: post.metadata.title,
    description: post.metadata.summary,
    image: post.metadata.image
      ? `${getURL()}${post.metadata.image}`
      : `${getURL()}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${getURL()}/products/${post.slug}`,
    brand: {
      "@type": "Organization",
      name: "Silverthread Labs",
      url: getURL(),
      logo: {
        "@type": "ImageObject",
        url: `${getURL()}/logo.png`,
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.lastUpdated || post.metadata.publishedAt,
    category: post.metadata.category,
    version: post.metadata.version,
  };
  return (
    <main role="main" className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen max-w-[1216px] mx-auto">
          {/* Header Section */}
          <div className="py-20">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {post.metadata.category || "Product Details"}
            </span>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  <span className="bg-gradient-to-r from-accent via-primary to-accent-foreground text-transparent bg-clip-text">
                    {post.metadata.title}
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {post.metadata.summary}
                </p>

                {/* Action Button */}
                {post.metadata.link && (
                  <Link
                    href={post.metadata.link}
                    target="_blank"
                    className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/80 text-foreground rounded transition-all duration-300 group"
                  >
                    <span className="font-medium ">
                      Try {post.metadata.title}
                    </span>
                    <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Version", value: post.metadata.version },
                  { label: "Last Updated", value: post.metadata.lastUpdated },
                ].map(
                  (item, index) =>
                    item.value && (
                      <div
                        key={index}
                        className="p-6 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-ring transition-all duration-300"
                      >
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          {item.value}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 pb-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-invert max-w-none
            prose-headings:text-foreground prose-headings:font-bold 
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-foreground
            prose-strong:text-foreground
            prose-code:text-muted-foreground prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm
            prose-pre:bg-card prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-border prose-pre:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-card
            prose-li:text-muted-foreground"
              >
                <CustomMDX source={post.content} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-ring transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quick Links
                  </h3>
                  <nav className="space-y-2">
                    <a
                      href="#features"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      Features
                    </a>
                    <a
                      href="#installation"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      Installation
                    </a>
                    <a
                      href="#usage"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      Usage
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-[1216px] mx-auto pb-12">
        <Link
          href="/products"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>
      </div>
    </main>
  );
}
