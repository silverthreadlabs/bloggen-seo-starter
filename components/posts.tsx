import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogPosts({ isHomePage = false }) {
  let allBlogs = getBlogPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const displayedBlogs = isHomePage ? sortedBlogs.slice(0, 3) : sortedBlogs;

  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-[90%] xl:max-w-[1280px] py-20">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-slate-400">Browse</span>
            <span className="text-blue-400">Template Blog Posts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.metadata.image || ""}
                    alt={post.metadata.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={225}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <time className="text-sm text-slate-400">
                    {formatDate(post.metadata.publishedAt, false)}
                  </time>
                  
                  <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {post.metadata.title}
                  </h3>

                  <div className="mt-4 flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Link for Homepage */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-50 hover:bg-slate-800"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
