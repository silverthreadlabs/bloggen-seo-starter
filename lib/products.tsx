import path from 'path';
import { getMDXData } from './utils/mdx-utils';
import { ProductMetadata } from './types/PostMetadata';

/**
 * Get all products with metadata and content
 */
export function getProductPosts() {
  return getMDXData<ProductMetadata>(
    path.join(process.cwd(), 'app', 'products', 'content')
  );
}