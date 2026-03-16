import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABanner } from "@/components/sections/CTABanner";
import { articleSchema } from "@/lib/schema";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    image: post.frontmatter.image,
  });
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function extractH2s(content: string): { id: string; text: string }[] {
  const regex = /^##\s+(.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text });
  }
  return headings;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  const headings = extractH2s(post.content);
  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = articleSchema({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    url: `https://mtgplan.com/blog/${slug}`,
    image: `https://mtgplan.com${post.frontmatter.image}`,
    datePublished: post.frontmatter.date,
    author: post.frontmatter.author,
  });

  return (
    <>
      <JsonLd data={schema} />

      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.frontmatter.title, href: `/blog/${slug}` },
            ]}
          />
        </div>
      </div>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {post.frontmatter.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-neutral-500">
              <span>{post.frontmatter.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 items-start">
            <div>
              <div className="prose prose-lg prose-neutral max-w-none prose-headings:scroll-mt-20 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                {content}
              </div>
            </div>

            {headings.length > 0 && (
              <aside className="hidden lg:block sticky top-8">
                <nav
                  aria-label="Table of contents"
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-6"
                >
                  <p className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                    In This Article
                  </p>
                  <ol className="space-y-2">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-neutral-600 hover:text-primary transition-colors leading-snug block"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>
            )}
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-neutral-50 border border-neutral-200 rounded-xl p-5 hover:border-primary transition-colors"
                  >
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors text-sm leading-snug mb-2">
                      {related.frontmatter.title}
                    </h3>
                    <span className="text-xs text-neutral-500">
                      {related.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <CTABanner />
    </>
  );
}
