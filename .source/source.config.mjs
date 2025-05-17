// source.config.ts
import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema
  },
  meta: {
    schema: metaSchema
  }
});
var games = defineCollections({
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
    full: z.boolean().optional()
  })
});
var source_config_default = defineConfig({
  mdxOptions: {
    // MDX options
  }
});
export {
  source_config_default as default,
  docs,
  games
};
