"use client"

import { useState } from "react"
import { Calendar, User, ChevronDown, ChevronUp, Newspaper, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt: "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent: "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt: "Learn how Mahalaxmi Infra is pioneering eco-friendly construction practices and green spaces.",
    fullContent: "At Mahalaxmi Infra, sustainability isn't just a trend — it's a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt: "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent: "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="news" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-foreground rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30 mb-4 sm:mb-5 lg:mb-6">
            <Newspaper className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-secondary" />
            <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">
              News & Updates
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 px-2 leading-tight">
            <span className="text-primary">Latest News &</span><br />
            <span className="text-secondary">Insights</span>
          </h2>
          
          <p className="text-foreground/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Updates, launches, and stories that shape the future of living in Nagpur
          </p>
        </div>

        {/* Grid Layout - Mobile Optimized (Single Column) */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {newsArticles.map((article, index) => {
            const isExpanded = expandedId === article.id

            return (
              <article
                key={article.id}
                className={`group bg-primary rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  isExpanded 
                    ? "lg:col-span-2 border-secondary/50 shadow-secondary/20" 
                    : "border-foreground/20 hover:border-secondary/40"
                }`}
              >
                {/* Image Section - Mobile Optimized */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />

                  {/* Floating Badges - Mobile Optimized */}
                  <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 flex justify-between items-start gap-2">
                    <span className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 bg-gradient-to-r from-secondary to-foreground text-primary text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-full shadow-2xl">
                      {article.category}
                    </span>
                    <div className="px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-primary/90 backdrop-blur-sm rounded-full flex items-center gap-1.5 sm:gap-2 shadow-xl">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                      <span className="text-foreground text-[10px] sm:text-xs font-bold">{article.date}</span>
                    </div>
                  </div>

                  {/* Title Overlay - Mobile Optimized */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                    <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-primary mb-2 sm:mb-3 drop-shadow-2xl leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-primary/90">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-bold">{article.author}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section - Mobile Optimized */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  {/* Excerpt - Mobile Optimized */}
                  <p className="text-foreground/80 text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                    {article.excerpt}
                  </p>

                  {/* Expandable Full Content - Mobile Optimized */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100 mb-4 sm:mb-5 lg:mb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 sm:pt-5 lg:pt-6 border-t-2 border-foreground/20">
                      <p className="text-foreground/80 text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed">
                        {article.fullContent}
                      </p>
                    </div>
                  </div>

                  {/* Action Button - Mobile Optimized */}
                  <button
                    onClick={() => toggleExpand(article.id)}
                    className="w-full group/btn bg-gradient-to-r from-secondary to-foreground rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-primary font-black text-sm sm:text-base lg:text-lg">
                      {isExpanded ? "Show Less" : "Read Full Story"}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-primary" />
                      ) : (
                        <ArrowRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-primary" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-3 sm:mb-4 leading-tight">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-primary/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
              More exciting stories and updates coming soon
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-foreground rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Subscribe for Updates
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}