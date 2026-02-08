"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Target } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 70, clients: 17000, years: 13, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const stats = [
    { value: counters.projects, suffix: "+", label: "Projects", icon: Building2 },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users },
    { value: counters.years, suffix: "+", label: "Years", icon: Award },
    { value: counters.sqft, suffix: "K+", label: "Sq.Ft", icon: TrendingUp }
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Top-grade materials" },
    { icon: Shield, title: "Fully Legal", desc: "100% documentation" },
    { icon: Target, title: "Prime Locations", desc: "Strategic spots" },
    { icon: Home, title: "Modern Design", desc: "Contemporary style" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Header with Different Style */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border-2 border-primary/40">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-100" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-200" />
              </div>
              <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest">
                About Mahalaxmi Infra
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 sm:mb-6 leading-tight">
            Building Dreams Into <span className="text-secondary">Reality</span>
          </h2>
          <p className="text-base sm:text-lg text-primary/80 leading-relaxed">
            With over 13 years of excellence in real estate, we've established ourselves as Nagpur's most trusted name in premium properties.
          </p>
        </div>

        {/* Stats Cards - Mobile Optimized */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="group relative bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="mt-6 sm:mt-8">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Content Grid - Mobile Optimized */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left: Text Content (3 columns) */}
          <div className={`lg:col-span-3 space-y-6 sm:space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-0.5 sm:w-1 h-16 sm:h-24 bg-gradient-to-b from-primary to-secondary rounded-full shrink-0"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">Our Legacy of Trust</h3>
                  <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                    We specialize in creating premium residential and commercial properties that combine quality, location, and value. Our commitment to transparency has helped over 17,000 families find their dream properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-0.5 sm:w-1 h-16 sm:h-24 bg-gradient-to-b from-secondary to-primary rounded-full shrink-0"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">100% Legal Compliance</h3>
                  <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                    Every project is RERA approved and NMRDA certified, ensuring complete legal transparency and peace of mind for our valued customers across all properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Features - Mobile Optimized Pills */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{feature.title}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA - Mobile Optimized */}
            <div>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                Explore Our Projects
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image - Mobile Optimized */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="/aboutUs.webp" 
                  alt="Mahalaxmi Developers" 
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Floating Badge - Mobile Optimized */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-2xl border border-white/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                    <div className="text-foreground">
                      <div className="text-xs font-bold uppercase tracking-wider">RERA Approved</div>
                      <div className="text-xs sm:text-sm font-black">A50400044753</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges - Mobile Optimized */}
        <div className={`bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl sm:rounded-2xl p-4 sm:p-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-primary/60 uppercase tracking-wider">Certified</div>
                <div className="text-sm font-bold text-primary">NMRDA Sanctioned</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-primary/60 uppercase tracking-wider">Verified</div>
                <div className="text-sm font-bold text-primary">RERA Approved</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-primary/60 uppercase tracking-wider">Quality</div>
                <div className="text-sm font-bold text-primary">ISO Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}