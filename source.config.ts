import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export const games = defineCollections({
  type: "doc",
  dir: "./content/games",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    ogImage: z.object({
      url: z.string()
    }).optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    full: z.boolean().optional(),
  })
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
