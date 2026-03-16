import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { getAllPosts } from "@/lib/blog";

export const metadata = createMetadata({
  title: "Mortgage Protection Insurance Blog",
  description: "Expert guides and articles about mortgage protection insurance.",
  path: "/blog",
});

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Mortgage Protection Insurance Blog
          </h1>
          <p className="text-lg text-neutral-600 mb-12">
            Expert guides and articles to help you understand and choose the right mortgage protection insurance for your family.
          </p>

          {posts.length === 0 ? (
            <p className="text-neutral-600">No articles yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-neutral-900 mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 pt-4 border-t border-neutral-100">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
