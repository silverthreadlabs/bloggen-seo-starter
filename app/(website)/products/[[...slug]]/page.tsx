import React from 'react';
import { productSource, source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { siteConfig } from '@/lib/config/site';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import { defaultMetadata } from '@/lib/seo/metadata/create-base-metadata';
import { ProductPosts } from '@/components/products/ProductPosts';
import { getURL } from '@/lib/utils/url';
import { ArrowLeft } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // // If this is the root /products path (empty slug)
  if (!params.slug || params.slug.length === 0) {
    return (
      <main role="main" className="min-h-screen">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProductCollection',
              url: `${siteConfig.baseUrl}/products`,
              author: {
                '@type': 'Organization',
                name: 'Silverthread Labs',
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
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: page.data.title,
    description: page.data.summary,
    image: page.data.image
      ? `${getURL()}${page.data.image}`
      : `${getURL()}/og?title=${encodeURIComponent(page.data.title)}`,
    url: `${getURL()}/products/${page.slugs}`,
    brand: {
      '@type': 'Organization',
      name: 'Silverthread Labs',
      url: getURL(),
      logo: {
        '@type': 'ImageObject',
        url: `${getURL()}/logo.png`,
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
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
            <span className="max-w-fit text-sm base leading-normal px-1 whitespace-nowrap rounded border border-fg-line border-none bg-transparent text-primary-text font-normal tracking-wider uppercase mb-4 block">
              {page.data.category || 'Product Details'}
            </span>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="font-bold text-4xl md:text-6xl leading-tight tracking-tight text-fg-text-contrast mb-6 bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast bg-clip-text">
                  {page.data.title}
                </h1>
                <p className="font-normal text-base md:text-lg leading-relaxed tracking-normal text-fg-text mb-8">
                  {page.data.summary}
                </p>

                {/* Action Button */}
                {page.data.link && (
                  <Link href={page.data.link} target="_blank" className="">
                    <Button
                      color="primary"
                      variant="solid"
                      size="lg"
                      aria-label="Try {page.data.title}"
                      trailingIcon={
                        <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      }
                    >
                      Try {page.data.title}
                    </Button>
                  </Link>
                )}
              </div>

              <div className="grid gap-4">
                {[
                  { label: 'Version', value: page.data.version },
                  { label: 'Last Updated', value: page.data.lastUpdated },
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
                  <h5 className=" md:text-xl leading-relaxed tracking-normal text-fg-text-contrast text-lg font-semibold  mb-4">
                    Quick Links
                  </h5>
                  <nav className="space-y-2">
                    <a
                      href="#features"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <p className="font-normal text-base md:text-lg leading-relaxed tracking-normal text-fg-text w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></p>
                      Features
                    </a>
                    <a
                      href="#installation"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <p className="font-normal text-base md:text-lg leading-relaxed tracking-normal text-fg-text w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></p>
                      Installation
                    </a>
                    <a
                      href="#usage"
                      className="flex items-center text-fg-text hover:text-primary-text transition-colors"
                    >
                      <p className="font-normal text-base md:text-lg leading-relaxed tracking-normal text-fg-text w-1.5 h-1.5 rounded-full bg-primary-solid mr-2"></p>
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

  // Get the current directory path from the file structure
  // This dynamically determines we're in the products section
  const currentPath = __filename.split(/[\\/]/).slice(-3)[0];

  // If this is the root path
  if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
    return createPageMetadata({
      path: currentPath,
      description:
        'Explore our AI-powered tools and experimental ideas turned into real-world apps.',
      baseMetadata: defaultMetadata,
    });
  }

  const page = productSource.getPage(resolvedParams.slug);
  if (!page) notFound();

  const ogImage = page.data.image
    ? `${siteConfig.baseUrl}${page.data.image}`
    : `${siteConfig.baseUrl}/og?title=${encodeURIComponent(page.data.title)}`;

  const baseMeta = createPageMetadata({
    path: `${currentPath}/${resolvedParams.slug}`,
    description: page.data.description,
    baseMetadata: defaultMetadata,
  });

  return {
    ...baseMeta,
    openGraph: {
      ...baseMeta.openGraph,
      type: 'article',
      publishedTime: page.data.publishedAt,
      url: `${siteConfig.baseUrl}/${currentPath}/${
        resolvedParams.slug?.join('/') || ''
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
