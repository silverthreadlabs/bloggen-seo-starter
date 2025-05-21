import path from "path";
import { getMDXData } from "./utils/mdx";
import { BlogMetadata } from "./types/post-metadata";

/**
 * Get all blog posts with metadata and content
 */
export function getBlogPosts() {
  return getMDXData<BlogMetadata>(
    path.join(process.cwd(), "content", "blogs")
  );
}
