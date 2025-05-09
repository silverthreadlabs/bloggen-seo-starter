import path from 'path';
import { getMDXData } from './utils/mdx-utils';
import { BlogMetadata } from './types/PostMetadata';

/**
 * Get all blog posts with metadata and content
 */
export function getBlogPosts() {
  return getMDXData<BlogMetadata>(
    path.join(process.cwd(), 'app', 'blog', 'content')
  );
}