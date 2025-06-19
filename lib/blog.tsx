import { BlogMetadata } from './types/post-metadata';
import { getMDXData } from './utils/mdx';
import path from 'path';

/**
 * Get all blog posts with metadata and content
 */
export function getBlogPosts() {
    return getMDXData<BlogMetadata>(path.join(process.cwd(), 'content', 'blog'));
}
