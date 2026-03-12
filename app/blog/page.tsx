import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Nagpur Real Estate Blog | Mahalaxmi Infra",
  description:
    "SEO-focused guides on buying residential plots in Nagpur, NMRDA approvals, investment tips, and local property trends.",
  alternates: { canonical: "https://www.mahalaxmiinfra.com/blog" },
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Content Hub</p>
        <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Mahalaxmi Infra Blog</h1>
        <p className="mt-4 max-w-3xl text-primary/80">
          Expert articles to help buyers compare locations, validate approvals, and make confident real estate decisions in
          Nagpur.
        </p>
      </header>

      <section className="grid gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-primary/15 bg-primary p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-foreground/70">
              {post.category} · {post.readTime}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">{post.title}</h2>
            <p className="mt-3 text-foreground/80">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block font-semibold text-secondary hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
