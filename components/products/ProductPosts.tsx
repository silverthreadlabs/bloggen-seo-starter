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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-background),oklch(0.129_0.042_264.695)" />
      </div>

      <div className="relative z-10 max-w-[90%] xl:max-w-[1280px] mx-auto flex flex-col flex-1 justify-center py-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
            Products
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            What We
            <span className="bg-gradient-to-r from-accent via-primary to-accent-foreground text-transparent bg-clip-text">
              {" "}
              Build{" "}
            </span>
          </h1>
          <h2 className="text-muted-foreground text-xl text-balance">
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
              <div className="h-full p-5 rounded bg-card backdrop-blur-sm border border-border hover:border-ring transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="p-2.5 bg-gradient-to-br from-muted to-accent rounded-sm w-fit group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {post.metadata.title}
                    </h3>
                    <p className="text-base text-balance text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {post.metadata.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-primary group-hover:text-primary-foreground transition-colors">
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
