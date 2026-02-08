"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb, Star, TrendingUp, Shield, Award } from "lucide-react"

const reasons = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "Award-winning solutions trusted by industry leaders",
    stat: "13+",
    statLabel: "Years"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology and forward-thinking approach",
    stat: "100%",
    statLabel: "Quality"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
    stat: "50+",
    statLabel: "Experts"
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority always",
    stat: "17000+",
    statLabel: "Happy Clients"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Tailored approaches for unique challenges",
    stat: "70+",
    statLabel: "Projects"
  },
  {
    icon: Check,
    title: "Quality Assured",
    description: "Rigorous standards and quality control processes",
    stat: "99%",
    statLabel: "Satisfaction"
  },
]

const achievements = [
  { icon: Award, label: "Industry Awards", value: "15+" },
  { icon: Shield, label: "Years Experience", value: "13+" },
  { icon: Star, label: "Client Rating", value: "4.9/5" },
  { icon: TrendingUp, label: "Growth Rate", value: "200%" },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Mobile Optimized Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
          
          {/* Left: Title - Mobile Optimized */}
          <div>
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse delay-100" />
              </div>
              <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 leading-tight">
              <span className="text-primary">What Makes Us</span><br />
              <span className="text-secondary">Stand Out</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
              Experience excellence through innovation, expertise, and unwavering commitment to your success
            </p>

            {/* Quick Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {achievements.slice(0, 2).map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-foreground/20">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-secondary mb-2 sm:mb-3" />
                    <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/70 font-bold">
                      {achievement.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Featured Reason Card - Mobile Optimized */}
          <div className="relative">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl opacity-20 blur-2xl" />
            <div className="relative bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-secondary/30 shadow-2xl">
              <div className="flex items-start justify-between mb-4 sm:mb-5 lg:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground flex items-center justify-center shadow-xl">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-1">17K+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-foreground/70 font-bold uppercase">Happy Clients</div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-3 sm:mb-4">Customer Focused</h3>
              <p className="text-foreground/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                Your satisfaction is our top priority always. We build lasting relationships through exceptional service.
              </p>
              <div className="flex flex-wrap gap-2">
                {["24/7 Support", "Quality Service", "Trusted Partner"].map((tag, i) => (
                  <div key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/10 rounded-full border border-foreground/20">
                    <span className="text-xs sm:text-sm font-bold text-foreground">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - Compact Mobile (2 columns) */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-4 sm:mb-6 lg:mb-8 text-center">Our Strengths</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {reasons.filter((_, i) => i !== 3).map((reason, index) => {
              const Icon = reason.icon
              
              return (
                <div
                  key={index}
                  className="group relative bg-primary rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-5 lg:p-8 border-2 border-foreground/20 hover:border-secondary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-foreground/5 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Top Section - Compact Mobile */}
                    <div className="flex items-start justify-between mb-2 sm:mb-4 lg:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br from-secondary to-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg lg:rounded-xl bg-foreground/10 flex items-center justify-center">
                        <span className="text-foreground text-[10px] sm:text-xs lg:text-sm font-black">0{index + 1}</span>
                      </div>
                    </div>

                    {/* Title - Compact Mobile */}
                    <h3 className="text-sm sm:text-lg lg:text-2xl font-black text-foreground mb-1 sm:mb-2 lg:mb-3 group-hover:text-secondary transition-colors leading-tight">
                      {reason.title}
                    </h3>

                    {/* Description - Compact Mobile */}
                    <p className="text-foreground/70 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-2 sm:mb-4 lg:mb-6">
                      {reason.description}
                    </p>

                    {/* Stat - Compact Mobile */}
                    <div className="flex items-end gap-1 sm:gap-1.5 lg:gap-2">
                      <div className="text-xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-foreground">
                        {reason.stat}
                      </div>
                      <div className="text-[9px] sm:text-xs lg:text-sm text-foreground/60 font-bold uppercase pb-0.5 sm:pb-1">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute bottom-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left: Content - Mobile Optimized */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4 leading-tight">
                Ready to Experience the Difference?
              </h3>
              <p className="text-primary/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Join thousands of satisfied clients who trust us for excellence and innovation
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-foreground rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Get Started Today
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: Benefits List - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4">
              {["13+ years industry experience", "17000+ satisfied clients", "Industry-leading satisfaction rate", "24/7 dedicated support"].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 bg-primary/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-primary/30">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-foreground" />
                  </div>
                  <span className="text-primary font-bold text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}