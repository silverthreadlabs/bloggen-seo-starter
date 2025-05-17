import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/utils/mdx";

interface Props {
  title: string;
  publishedAt?: string;
  image?: string;
}

export default function BlogHeader({ title, publishedAt, image }: Props) {
  return (
    <header className="relative mx-auto max-w-6xl px-8 py-8 md:py-28">
      {/* Header Section */}
      <div className="mb-20">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px w-16 bg-fg-border" />
          <span className="text-fg-text text-sm uppercase tracking-wider font-medium">
            Blog Post
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-primary-solid via-primary-text to-primary-text-contrast text-transparent bg-clip-text">
            {title}
          </span>
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
