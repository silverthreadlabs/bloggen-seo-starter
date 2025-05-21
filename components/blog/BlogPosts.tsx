import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils/mdx";
import { getBlogPosts } from "@/lib/blog";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Text } from "@/components/ui/text";
interface BlogPostsProps {
  isHomePage?: boolean;
}

export function BlogPosts({ isHomePage = false }: BlogPostsProps) {
  const allBlogs = getBlogPosts();
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
        <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-primary-bg to-bg-base" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto py-20">
          {/* Section Header */}
          <div className="mb-16">
            <Text renderAs="p" className="text-primary-text tracking-wider uppercase mb-4 block">
              Browse Template Blog Posts
            </Text>
            <div className="flex flex-row items-center  gap-2">
              <Text renderAs="h1">
                Latest
              </Text>
              <Text renderAs="h1" className="bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
                {" "}
                Articles
              </Text>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="p-6 rounded bg-bg-bg backdrop-blur-sm border border-fg-border hover:border-fg-border-hover transition-all duration-300">
                  <div className="aspect-video relative rounded-sm overflow-hidden mb-6">
                    <Image
                      src={post.metadata.image || ""}
                      alt={post.metadata.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={225}
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-gradient-to-br from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover rounded-sm">
                      <ArrowRight className="w-4 h-4 text-primary-text" />
                    </div>
                    <time className="text-sm text-fg-text">
                      {formatDate(post.metadata.publishedAt)}
                    </time>
                  </div>

                  <Text renderAs="h5" className="mb-3 group-hover:text-primary-text transition-colors duration-300">
                    {post.metadata.title}
                  </Text>

                  <div className="flex items-center text-sm text-fg-text group-hover:text-primary-text transition-colors">
                    <Text renderAs="span" className="border-none bg-transparent">Read article</Text>
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
                className="px-8 py-3 bg-primary-solid hover:bg-primary-solid-hover text-bg-default rounded transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View All Posts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/rss.xml"
                className="px-8 py-3 bg-secondary-bg hover:bg-secondary-bg-hover text-fg-text rounded transition-all duration-300 border border-fg-border hover:border-fg-border-hover flex items-center justify-center gap-2"
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
