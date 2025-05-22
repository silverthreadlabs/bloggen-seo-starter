import React from 'react';
import Link from 'next/link';
import { getProductPosts } from '@/lib/products';
import { FaArrowRight, FaSnowflake } from 'react-icons/fa';

export function ProductPosts() {
  const allProducts = getProductPosts();
  const sortedProducts = allProducts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="h-screen flex flex-col">
      {/* Background Elements */}
      {/* <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--bg-base),var(--primary-bg))]" />
      </div> */}

      <div className="relative z-10 max-w-[90%] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-center py-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="max-w-fit font-normal text-sm md:text-base leading-normal text-primary-text px-1 whitespace-nowrap rounded border border-fg-line border-none bg-transparent font-mono tracking-widest uppercase mb-4 ">
            Products
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <h1 className="font-bold text-4xl md:text-6xl leading-tight tracking-tight text-fg-text-contrast">
              What We{' '}
            </h1>
            <h1 className="text-4xl md:text-6xl leading-tight tracking-tight font-bold border-none bg-transparent bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
              Build
            </h1>
          </div>

          <h4 className="text-xl md:text-2xl leading-relaxed tracking-normal text-fg-text font-normal text-balance">
            Discover the products we&apos;ve crafted at Silverthread Labs to
            save time, boost performance.
          </h4>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sortedProducts.map(post => (
            <Link
              key={post.slug}
              href={`/products/${post.slug}`}
              className="block group"
            >
              <div className="h-full py-5 px-8 rounded-lg bg-bg-bg backdrop-blur-sm border border-bg-bg-active hover:border-fg-line transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-2.5 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover rounded-sm w-fit group-hover:scale-110 transition-transform duration-300">
                    <FaSnowflake className="w-4 h-4 text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300" />
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-xl md:text-2xl leading-relaxed tracking-normal text-fg-text-contrast mb-2 group-hover:text-primary-text transition-colors duration-300">
                      {post.metadata.title}
                    </h4>
                    <p className="font-normal text-base md:text-lg leading-relaxed tracking-normal text-balance text-fg-text group-hover:text-fg-text transition-colors duration-300">
                      {post.metadata.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-primary-text group-hover:text-primary-text-contrast transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
