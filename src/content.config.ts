import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客 Content Collection：中英双语，按子目录 zh/ en/ 区分
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['zh', 'en']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
