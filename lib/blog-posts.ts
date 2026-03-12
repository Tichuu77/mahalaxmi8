export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedAt: string
  category: string
  readTime: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-areas-to-buy-plots-in-nagpur",
    title: "Best Areas to Buy Residential Plots in Nagpur in 2025",
    description:
      "Explore high-growth micro-markets near MIHAN, Wardha Road, and Hingna for secure long-term real estate investment in Nagpur.",
    publishedAt: "2025-01-15",
    category: "Local Real Estate",
    readTime: "6 min read",
    content: [
      "Nagpur continues to attract homebuyers and investors looking for NMRDA-approved plotted developments with clean titles and infrastructure-ready access.",
      "Top-performing zones include MIHAN influence areas, Wardha Road corridors, and select Hingna extensions where road connectivity, employment hubs, and social infrastructure are improving quickly.",
      "Before buying, verify legal documents, development approvals, drainage, road width, and nearby public transport. Choose developers with transparent customer support and clear payment plans.",
    ],
  },
  {
    slug: "nmrda-approved-plots-buyers-checklist",
    title: "NMRDA-Approved Plot Buying Checklist for First-Time Buyers",
    description:
      "A practical checklist to evaluate legal compliance, title clarity, and site readiness before booking a residential plot in Nagpur.",
    publishedAt: "2025-02-05",
    category: "Buyer Guide",
    readTime: "5 min read",
    content: [
      "Always confirm layout sanction details, RERA registration, and mutation records before committing to a booking amount.",
      "Check if the plot has clear road access, electricity provisions, water planning, and drainage alignment to avoid future development delays.",
      "Compare financing options, registration charges, and possession terms. A transparent agreement is as important as location quality.",
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
