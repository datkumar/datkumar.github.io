import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { technologies } from "./utils/data";

// Converts object keys of technologies (html,css, ...) into a tuple of string literals
const TechnologyKeys = Object.keys(technologies) as [keyof typeof technologies];
const TechnologyEnum = z.enum(TechnologyKeys);

const markdownContentPattern = [
  // Assuming FLAT folder structure for collection (no subdirectories)
  "**/*.md", // Take all files ending with .md
  "!**/_*", // ignore file/folder starting with _
];
const dataContentPattern = [
  // Assuming FLAT folder structure for collection (no subdirectories)
  "**/*.yml", // Take all files ending with .yml (could also add .json)
  "!**/_*", // ignore file/folder starting with _
];

const projectsCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  code_url: z.url(),
  demo_url: z.url().optional(),
  tech_stack: z.array(TechnologyEnum),
});
export type ProjectData = z.infer<typeof projectsCollectionSchema>;
const projectsCollection = defineCollection({
  // Define Content Loader (since v6) file types to build
  loader: glob({
    pattern: markdownContentPattern,
    base: "./src/content/projects",
  }),
  schema: projectsCollectionSchema,
});

const blogDataSchema = z.object({
  title: z.string(),
  url: z.url(),
  cover: z.string(),
  publishDate: z.date(), // YYYY-MM-DD
  tags: z.array(z.string()),
});
export type BlogData = z.infer<typeof blogDataSchema>;
const blogsCollection = defineCollection({
  loader: glob({
    pattern: dataContentPattern,
    base: "./src/content/blogs",
  }),
  schema: blogDataSchema,
});

export const collections = {
  projects: projectsCollection,
  blogs: blogsCollection,
};
