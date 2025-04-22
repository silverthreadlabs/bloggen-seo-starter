import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { CustomMDX } from "@/components/mdx";
import { formatDate, getProductPosts } from "../utils";
import { createPageMetadata } from "@/lib/seo/metadata/createPageMetadata";
import { defaultMetadata } from "@/lib/seo/metadata/createBaseMetadata";
import { getURL } from "@/lib/utils/helpers";







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
    image: post.metadata.image ? `${getURL()}${post.metadata.image}` : `${getURL()}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${getURL()}/products/${post.slug}`,
    brand: {
      "@type": "Organization",
      name: "Silverthread Labs",
      url: getURL(),
      logo: {
        "@type": "ImageObject",
        url: `${getURL()}/logo.png`
      }
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
    version: post.metadata.version
  };
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0F]">
    {/* Preserve JSON-LD exactly as is */}
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
    <div className="max-w-[90%] xl:max-w-[1280px] mx-auto pt-24 px-4 sm:px-6">
      {/* Header Section */}
      <div className="space-y-6 mb-8 sm:mb-12">
        <div className="flex items-center space-x-3">
          <div className="h-px w-12 bg-slate-700" />
          <span className="text-slate-400 text-sm uppercase tracking-wider font-medium">
            Product Details
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.1]">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {post.metadata.title}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl">
          {post.metadata.summary}
        </p>
      </div>

      {/* Hero Image */}
      {post.metadata.image && (
        <div className="relative w-full aspect-video mb-12 sm:mb-16 rounded-[2px] overflow-hidden border border-slate-800/50">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-20">
        {/* Main Description */}
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-invert max-w-none
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
            prose-img:rounded-[2px] prose-img:shadow-xl prose-img:border prose-img:border-slate-800/50"
          >
            <CustomMDX source={post.content} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 sm:space-y-8">
            {post.metadata.link && (
              <Link
                href={post.metadata.link}
                target="_blank"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-[2px] transition-all duration-200 w-full group border border-blue-500"
              >
                <span className="font-medium">Try {post.metadata.title} Now</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
            
            {/* Additional Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-[2px] p-6 space-y-4 border border-slate-700">
              <h3 className="text-lg font-semibold text-white">Product Information</h3>
              <div className="space-y-3">
                {post.metadata.version && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Version</span>
                    <span className="text-white">{post.metadata.version}</span>
                  </div>
                )}
                {post.metadata.lastUpdated && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Last Updated</span>
                    <span className="text-white">{post.metadata.lastUpdated}</span>
                  </div>
                )}
                {post.metadata.category && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Category</span>
                    <span className="text-white">{post.metadata.category}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
