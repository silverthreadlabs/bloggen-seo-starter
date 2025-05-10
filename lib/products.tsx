import path from 'path';
import { getMDXData } from './utils/mdx';
import { ProductMetadata } from './types/post-metadata';

/**
 * Get all products with metadata and content
 */
export function getProductPosts() {
  return getMDXData<ProductMetadata>(
    path.join(process.cwd(), 'app', 'products', 'content')
  );
}