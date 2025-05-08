import Link from "next/link";
import { getProductPosts } from "app/products/utils";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10 max-w-[90%] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-center py-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3 block">
            Products
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
            What We
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              {" "}
              Build{" "}
            </span>
          </h1>
          <h2 className="text-slate-200 text-2xl text-balance">
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
              <div className="h-full p-5 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-2.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {post.metadata.title}
                    </h3>
                    <p className="text-base text-balance text-slate-300 group-hover:text-slate-300 transition-colors duration-300">
                      {post.metadata.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-blue-300 group-hover:text-blue-300 transition-colors">
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
