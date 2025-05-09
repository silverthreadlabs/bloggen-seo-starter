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
<section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
  <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd)
    }}
  />
  
  <div className="fixed inset-0 z-[-1]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
  </div>

  <div className="relative z-10">
    <div className="min-h-screen max-w-[1216px] mx-auto">
      {/* Header Section */}
      <div className="py-20">
        <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-4 block">
          {post.metadata.category || 'Product Details'}
        </span>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                {post.metadata.title}
              </span>
            </h1>
            <p className="text-slate-100 text-lg mb-8 leading-relaxed">
              {post.metadata.summary}
            </p>
            
            {/* Action Button */}
            {post.metadata.link && (
              <Link
                href={post.metadata.link}
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 group"
              >
                <span className="font-medium">Try {post.metadata.title}</span>
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            )}
          </div>

          <div className="grid gap-4">
            {[
              { label: 'Version', value: post.metadata.version },
              { label: 'Last Updated', value: post.metadata.lastUpdated }
            ].map((item, index) => item.value && (
              <div key={index} className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                <div className="text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 pb-20">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-invert max-w-none
            prose-headings:text-white prose-headings:font-bold 
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-400 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
            prose-strong:text-white
            prose-code:text-slate-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
            prose-pre:bg-slate-900/50 prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-slate-800 prose-pre:rounded-xl
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500/30 prose-blockquote:bg-slate-900/30
            prose-li:text-slate-400"
          >
            <CustomMDX source={post.content} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <a href="#features" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Features
                </a>
                <a href="#installation" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Installation
                </a>
                <a href="#usage" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Usage
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}
