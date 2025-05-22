import { ProductMetadata } from './types/post-metadata';
import { getMDXData } from './utils/mdx';
import path from 'path';

/**
 * Get all products with metadata and content
 */
export function getProductPosts() {
    return getMDXData<ProductMetadata>(path.join(process.cwd(), 'content', 'products'));
}
