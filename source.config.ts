import { defineCollections, defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
    docs: {
        schema: frontmatterSchema
    },
    meta: {
        schema: metaSchema
    }
});

export const blog = defineCollections({
    type: 'doc',
    dir: './content/blog',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishedAt: z.string().optional(),
        author: z
            .union([
                z.string(),
                z.object({
                    name: z.string(),
                    picture: z.string()
                })
            ])
            .optional(),
        image: z.string().optional(),
        ogImage: z
            .object({
                url: z.string()
            })
            .optional(),
        summary: z.string().optional(),
        tags: z.array(z.string()).optional(),
        full: z.boolean().optional()
    })
});

export const products = defineCollections({
    type: 'doc',
    dir: './content/products',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishedAt: z.string().optional(),
        author: z
            .union([
                z.string(),
                z.object({
                    name: z.string(),
                    picture: z.string()
                })
            ])
            .optional(),
        image: z.string().optional(),
        ogImage: z
            .object({
                url: z.string()
            })
            .optional(),
        summary: z.string().optional(),
        tags: z.array(z.string()).optional(),
        lastUpdated: z.string().optional(),
        category: z.string().optional(),
        version: z.string().optional(),
        link: z.string().optional(),
        full: z.boolean().optional()
    })
});

export default defineConfig({
    mdxOptions: {
        // MDX options
    }
});
