import Link from "next/link";
import { getProductPosts } from "@/lib/products"; 
import { ArrowRight, Sparkles } from "lucide-react";

export function ProductPosts() {
  let allProducts = getProductPosts();
  const sortedProducts = allProducts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="h-screen flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--bg-base),var(--primary-bg))]" />
      </div>

      <div className="relative z-10 max-w-[90%] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-center py-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary-text text-sm font-medium tracking-wider uppercase mb-3 block">
            Products
          </span>
          <h1 className="text-5xl lg:text-5xl font-bold text-fg-text-contrast leading-tight mb-4">
            What We
            <span className="bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
              {" "}
              Build{" "}
            </span>
          </h1>
          <h2 className="text-fg-text text-xl text-balance">
            Discover the products we've crafted at Silverthread Labs to save
            time, boost performance.
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sortedProducts.map((post) => (
            <Link
              key={post.slug}
              href={`/products/${post.slug}`}
              className="block group"
            >
              <div className="h-full p-5 rounded bg-bg-bg backdrop-blur-sm border border-fg-border hover:border-fg-border-hover transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-2.5 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover rounded-sm w-fit group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-primary-text group-hover:text-primary-text-contrast transition-colors duration-300" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-medium text-fg-text-contrast mb-2 group-hover:text-primary-text transition-colors duration-300">
                      {post.metadata.title}
                    </h3>
                    <p className="text-base text-balance text-fg-text group-hover:text-fg-text transition-colors duration-300">
                      {post.metadata.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-primary-text group-hover:text-primary-text-contrast transition-colors">
                    <span className="text-xs font-medium">Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
