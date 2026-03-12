import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | Mahalaxmi Infra",
      description: "The requested article was not found.",
    }
  }

  return {
    title: `${post.title} | Mahalaxmi Infra Blog`,
    description: post.description,
    alternates: { canonical: `https://www.mahalaxmiinfra.com/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-semibold text-secondary hover:underline">
        ← Back to blog
      </Link>
      <p className="mt-6 text-xs uppercase tracking-wide text-secondary">{post.category}</p>
      <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-primary/80">{post.description}</p>

      <article className="mt-8 space-y-5 text-primary/90 leading-7">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  )
}
