import { defineCollection, z } from "astro:content";
const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    authorAvatar: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  authors: authors,
  infopages: infopages,
  posts: postsCollection,
};
