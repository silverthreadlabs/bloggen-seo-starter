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
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd)
    }}
  />
  <div className="max-w-[90%] xl:max-w-[1216px] mx-auto pt-24 px-4 sm:px-6">
    {/* Header Section */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-slate-800/50 border border-slate-700">
        <span className="text-blue-400 text-sm font-medium">
          Product Details
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          {post.metadata.title}
        </span>
      </h1>
      <p className="text-lg text-slate-400">
        {post.metadata.summary}
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Main Content */}
      <div className="lg:col-span-8">
        <div className="prose prose-invert max-w-none
          prose-headings:text-white prose-headings:font-bold 
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
          prose-strong:text-white
          prose-code:text-slate-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
          prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-slate-700
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-800/30
          prose-li:text-slate-300"
        >
          <CustomMDX source={post.content} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-8">
          {/* Action Button */}
          {post.metadata.link && (
            <Link
              href={post.metadata.link}
              target="_blank"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-lg transition-all duration-200 w-full group"
            >
              <span className="font-medium">Try {post.metadata.title}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
          
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Product Info */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Product Information</h3>
                <div className="space-y-4">
                  {post.metadata.version && (
                    <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Version</span>
                      <span className="text-white font-medium">{post.metadata.version}</span>
                    </div>
                  )}
                  {post.metadata.lastUpdated && (
                    <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">Last Updated</span>
                      <span className="text-white font-medium">{post.metadata.lastUpdated}</span>
                    </div>
                  )}
                  {post.metadata.category && (
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400">Category</span>
                      <span className="text-white font-medium">{post.metadata.category}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
