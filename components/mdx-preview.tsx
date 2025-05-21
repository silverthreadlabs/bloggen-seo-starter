"use client";

import React from "react";
import Link from "next/link";
import ReactMarkdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

// 1. A helper function to remove top frontmatter and "Last updated" block
function stripMdxMeta(text: string): string {
  // Remove top frontmatter: ^--- ... ---
  let newText = text.replace(/^---[\s\S]*?---\s*/, "");

  // Remove trailing block: ---\n*Last updated:...
  newText = newText.replace(/---\n\*Last updated:[\s\S]*$/, "");

  return newText;
}

// Optional: slugify for headings
function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

// Custom H1 component
const H1: React.FC<React.PropsWithChildren<{ node?: unknown }>> = ({
  children,
  ...props
}) => {
  const text = React.Children.toArray(children).join("");
  const slug = slugify(text);
  return (
    <h1 id={slug} {...props}>
      <a href={`#${slug}`} className="anchor">
        {children}
      </a>
    </h1>
  );
};

// Custom Link (respects internal vs external)
const CustomLink: React.FC<
  React.ComponentPropsWithoutRef<"a"> & { node?: unknown }
> = ({ href, children, ...props }) => {
  if (typeof href === "string") {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    if (href.startsWith("#")) {
      return <a {...props}>{children}</a>;
    }
    return (
      <a target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return <a {...props}>{children}</a>;
};

// Custom code blocks
const Code: React.FC<{
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: unknown;
}> = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

// Provide custom components to react-markdown
const components: Components = {
  h1: H1,
  a: CustomLink,
  code: Code,
};

export function MDXPreview({ content }: { content: string }) {
  // 2. Strip out any metadata blocks
  const cleanedContent = stripMdxMeta(content);

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <div className="max-w-[800px]">
      <ReactMarkdown components={components}>{cleanedContent}</ReactMarkdown>

      </div>
    </article>
  );
}