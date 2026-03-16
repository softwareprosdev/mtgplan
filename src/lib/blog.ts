import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  image: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: number;
};

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
  return files
    .map(file => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as BlogFrontmatter, content, readingTime: calculateReadingTime(content) };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as BlogFrontmatter, content, readingTime: calculateReadingTime(content) };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx")).map(f => f.replace(".mdx", ""));
}
