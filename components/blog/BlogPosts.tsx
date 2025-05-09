import Link from "next/link";
import { formatDate} from "@/lib/utils/mdx-utils";
import { getBlogPosts } from "@/lib/blog";
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
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-[1216px] mx-auto py-20">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-4 block">
              Browse Template Blog Posts
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Latest
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                {" "}
                Articles
              </span>
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
                <article className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
                    <Image
                      src={post.metadata.image || ""}
                      alt={post.metadata.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={225}
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <time className="text-sm text-slate-400">
                      {formatDate(post.metadata.publishedAt, false)}
                    </time>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {post.metadata.title}
                  </h3>

                  <div className="flex items-center text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* View All Link for Homepage */}
          {isHomePage && (
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View All Posts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/rss.xml"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2"
              >
                Subscribe to RSS
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.18 15.64a2.18 2.18 0 112.18 2.18 2.18 2.18 0 01-2.18-2.18zM6.18 8.91h4.36v2.18H6.18V8.91zm0-4.36h8.73v2.18H6.18V4.55z" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
