import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://mtgplan.com";

const staticPages: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/quote", priority: 0.9, changeFrequency: "weekly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
];

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogSlugs = getBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
