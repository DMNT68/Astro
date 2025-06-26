import { date } from 'astro/zod';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),
        author: z.string(), // relacion
        tags: z.array(z.string()), // relacion
    }),
});

export const collections = {
    blog: blogCollection,
};
