import { defineCollection, z } from "astro:content";
import { technologies } from "../utils/data";

// Converts object keys of technologies (html,css, ...) into a tuple of string literals
const TechnologyKeys = Object.keys(technologies) as [keyof typeof technologies];

const TechnologyEnum = z.enum(TechnologyKeys);

const projectsCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  code_url: z.string().url(),
  demo_url: z.string().url().optional(),
  tech_stack: z.array(TechnologyEnum),
});

export type ProjectData = z.infer<typeof projectsCollectionSchema>;

const projectsCollection = defineCollection({
  type: "content",
  schema: projectsCollectionSchema,
});

const blogDataSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  publishDate: z.date(), // YYYY-MM-DD
  tags: z.array(z.string()),
});

export type BlogData = z.infer<typeof blogDataSchema>;

const blogsCollection = defineCollection({
  type: "data",
  schema: blogDataSchema,
});

export const collections = {
  projects: projectsCollection,
  blogs: blogsCollection,
};
