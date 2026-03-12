import Link from "next/link"
import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { UserGuideSection } from "@/components/user-guide-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallButton from "@/components/call-button"
import WhatsappButton from "@/components/whatsapp-button"
import NewsArticles from "@/components/news-articals"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Residential Plots in Nagpur by Mahalaxmi Infra</h1>
        <p className="mt-4 text-primary/80 leading-7">
          Mahalaxmi Infra develops NMRDA and RL-approved plotted projects in high-potential Nagpur locations including
          MIHAN, Wardha Road, and Hingna. Our developments focus on legal clarity, long-term value, and buyer-friendly
          support for first-time owners and investors.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-secondary">
          <Link href="#projects" className="hover:underline">
            Explore Projects
          </Link>
          <Link href="/blog" className="hover:underline">
            Read Buyer Guides
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact Sales Team
          </Link>
        </div>
      </section>

      <AboutSection />
      <AmenitiesSection />
      <ProjectsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <UserGuideSection />
      <TestimonialsSection />
      <NewsArticles />
      <FAQSection />
      <ContactSection />
      <CallButton />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
