import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../consts';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'PR Helper Blog',
    description: 'GitHub-first PR / Release Control Tower: workflows, architecture, and Lane practices.',
    site: context.site ?? SITE_URL,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: post.data.lang === 'en' ? `/en/blog/${post.id.replace(/^en\//, '')}/` : `/blog/${post.id.replace(/^zh\//, '')}/`,
    })),
  });
}
