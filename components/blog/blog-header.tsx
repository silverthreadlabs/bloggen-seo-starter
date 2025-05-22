import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/utils/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
interface Props {
  title: string;
  publishedAt?: string;
  image?: string;
}

export default function BlogHeader({ title, publishedAt, image }: Props) {
  return (
    <header className="relative mx-auto max-w-6xl px-8">
      {/* Header Section */}
      <div className="mb-20">
        <div className="flex items-center space-x-3 mb-8">
          {/* <Link 
            href="/blog" 
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover border border-fg-border hover:border-fg-border-hover transition-all duration-300 group"
          > 
            <ArrowLeft className="w-4 h-4 text-primary-text group-hover:-translate-x-1 transition-transform" />
            <span 
              className="max-w-fit font-normal text-sm md:text-base leading-normal tracking-normal text-fg-text bg-bg-bg px-1 inline-flex whitespace-nowrap rounded border border-fg-line border-none bg-transparent text-primary-text font-medium tracking-wider uppercase text-sm group-hover:text-primary-text-contrast transition-colors"
            >
              Back to Blog
            </span>
          </Link> */}
          <Link
            href="/blog"
            className="inline-flex items-center text-fg-text hover:text-primary-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </div>
        <h1
          className="font-bold text-4xl md:text-6xl leading-tight tracking-tight mb-8 bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast bg-clip-text"
        >
          {title}
        </h1>
        {publishedAt && (
          <time className="text-fg-text text-lg">
            {formatDate(publishedAt)}
          </time>
        )}
      </div>

      {/* Featured Image */}
      {image && (
        <div className="relative w-full aspect-[21/9] mb-10 overflow-hidden rounded-sm shadow-2xl border border-fg-border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  );
}
