import React from "react";
import { productSource, source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { siteConfig } from "@/lib/config/site";
import { createPageMetadata } from "@/lib/seo/metadata/create-page-metadata";
import { defaultMetadata } from "@/lib/seo/metadata/create-base-metadata";
import { ProductPosts } from "@/components/products/ProductPosts";
import { getURL } from "@/lib/utils/url";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // // If this is the root /products path (empty slug)
  if (!params.slug || params.slug.length === 0) {
    return (
      <main
        role="main"
        className="min-h-screen"
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProductCollection",
              url: `${siteConfig.baseUrl}/products`,
              author: {
                "@type": "Organization",
                name: "Silverthread Labs",
              },
            }),
          }}
        />

        <ProductPosts />
      </main>
    );
  }



  const page = productSource.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.data.title,
    description: page.data.summary,
    image: page.data.image
      ? `${getURL()}${page.data.image}`
      : `${getURL()}/og?title=${encodeURIComponent(page.data.title)}`,
    url: `${getURL()}/products/${page.slugs}`,
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
    datePublished: page.data.publishedAt,
    dateModified: page.data.lastUpdated || page.data.publishedAt,
    category: page.data.category,
    version: page.data.version,
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
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="py-20">
            <Text renderAs="span" className="border-none bg-transparent text-primary-text font-medium tracking-wider uppercase mb-4 block">
              {page.data.category || "Product Details"}
            </Text>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Text renderAs="h1" className="mb-6 bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
                    {page.data.title}
                </Text>
                <Text renderAs="p" className="text-fg-text text-lg mb-8 leading-relaxed">
                  {page.data.summary}
                </Text>

                {/* Action Button */}
                {page.data.link && (
                  <Link
                    href={page.data.link}
                    target="_blank"
                    className=""
                  >
                    <Button
                      color="primary"
                      variant="solid"
                      size="lg"
                      aria-label="Try {page.data.title}"
                      trailingIcon={<ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                    >
                      Try {page.data.title}
                    </Button>
                  </Link>
                )}
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Version", value: page.data.version },
                  { label: "Last Updated", value: page.data.lastUpdated },
                ].map(
                  (item, index) =>
                    item.value && (
                      <div
                        key={index}
                        className="p-6 rounded-lg bg-bg-bg backdrop-blur-sm border border-fg-border hover:border-fg-border-hover transition-all duration-300"
                      >
                        <div className="text-sm text-fg-text mb-1">
                          {item.label}
                        </div>
                        <div className="text-lg font-semibold text-fg-text-contrast">
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
              {/* <div
              className="prose prose-invert max-w-none
          prose-headings:text-fg-text-contrast prose-headings:font-bold 
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-fg-text prose-p:leading-relaxed
          prose-a:text-primary-text prose-a:no-underline hover:prose-a:text-primary-text-contrast
          prose-strong:text-fg-text-contrast
          prose-code:text-fg-text-contrast prose-code:bg-bg-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm
          prose-pre:bg-bg-bg prose-pre:backdrop-blur-sm prose-pre:border prose-pre:border-fg-border prose-pre:rounded
          prose-blockquote:border-l-4 prose-blockquote:border-primary-border prose-blockquote:bg-bg-bg
          prose-li:text-fg-text"
            >
              <CustomMDX source={post.content} />
            </div> */}
              <DocsPage
                tableOfContent={{ enabled: false }}
                tableOfContentPopover={{ enabled: false }}
                full={false}
              >
                <DocsBody>
                  <MDXContent
                    components={getMDXComponents({
                      // this allows you to link to other pages with relative file paths
                      a: createRelativeLink(source, page),
                    })}
                  />
                </DocsBody>
              </DocsPage>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg bg-bg-bg backdrop-blur-sm border border-fg-border hover:border-fg-border-hover transition-all duration-300">
                  <Text renderAs="h5" className="text-xl font-semibold text-fg-text-contrast mb-4">
                    Quick Links
                  </Text>
                  <nav className="space-y-2">
                    <a
                      href="#features"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <Text renderAs="p" className="w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></Text>
                      Features
                    </a>
                    <a
                      href="#installation"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <Text renderAs="p" className="w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></Text>
                      Installation
                    </a>
                    <a
                      href="#usage"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <Text renderAs="p" className="w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></Text>
                      Usage
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto py-12">
        <Link
          href="/products"
          className="inline-flex items-center text-fg-text hover:text-primary-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return productSource.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;

  // If this is the root path
  if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
    return createPageMetadata({
      path: "blog",
      description:
        "Learn how to build, customize, and grow your site with Bloggen SEO Starter and Bloggen AI. Setup guides, tips, and SEO content strategies—all in one place.",
      baseMetadata: defaultMetadata,
    });
  }

  const page = productSource.getPage(resolvedParams.slug);
  if (!page) notFound();

  const ogImage = page.data.image
    ? `${siteConfig.baseUrl}${page.data.image}`
    : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(page.data.title)}`;

  const baseMeta = createPageMetadata({
    path: page.data.title,
    description: page.data.description,
    baseMetadata: defaultMetadata,
  });

  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      type: "article",
      publishedTime: page.data.publishedAt,
      url: `${siteConfig.baseUrl}/products/${resolvedParams.slug?.join("/") || ""
        }`,
      images: [
        {
          url: ogImage,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      ...baseMeta.twitter,
      images: [
        {
          url: ogImage,
          alt: page.data.title,
        },
      ],
    },
  };
}
