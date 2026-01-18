"use client"

import { Home, Calendar, Briefcase, CheckCircle, ArrowRight, Lightbulb, Zap } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore Properties",
    description: "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Visit our website and create an account",
      "Filter properties by location, price, and amenities",
      "Save your favorite properties to a wishlist",
    ],
  },
  {
    number: "02",
    title: "Schedule Site Visit",
    description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Select your preferred date and time",
      "Our team will confirm your visit within 24 hours",
      "Receive directions and consultant contact details",
    ],
  },
  {
    number: "03",
    title: "Consultation & Financing",
    description: "Get expert advice on financing options and investment benefits from our experienced team.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Discuss investment strategies with our experts",
      "Explore various financing and payment options",
      "Get personalized financial advice",
    ],
  },
  {
    number: "04",
    title: "Complete Purchase",
    description: "Finalize your investment with our transparent and hassle-free documentation process.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Sign all required legal documents",
      "Complete payment processing",
      "Receive your property documentation",
    ],
  },
]

export function UserGuideSection() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section id="user-guide" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">
              Simple Process
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 px-2 leading-tight">
            <span className="text-primary">Your Journey to</span><br />
            <span className="text-secondary">Dream Ownership</span>
          </h2>
          
          <p className="text-foreground/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Follow our streamlined 4-step process to own your dream property
          </p>
        </div>

        {/* Vertical Timeline - Mobile Optimized */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            const isActive = activeStep === index
            const isCompleted = activeStep > index
            
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                {/* Connecting Line - Mobile Optimized */}
                {index < guides.length - 1 && (
                  <div className="absolute left-6 sm:left-8 md:left-12 top-16 sm:top-20 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-secondary/30 to-foreground/30 -mb-4"></div>
                )}

                <div className={`flex gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 transition-all duration-500 ${
                  isActive ? 'scale-[1.02]' : ''
                }`}>
                  
                  {/* Left: Number Circle - Mobile Optimized */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground flex items-center justify-center shadow-2xl transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-6' : isCompleted ? 'scale-100' : 'scale-95 opacity-70'
                    }`}>
                      <span className="text-primary font-black text-lg sm:text-2xl md:text-4xl">{guide.number}</span>
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-secondary/40 animate-ping"></div>
                    )}
                  </div>

                  {/* Right: Content Card - Mobile Optimized */}
                  <div className={`flex-1 bg-primary rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-8 border-2 transition-all duration-500 ${
                    isActive ? 'border-secondary/50 shadow-2xl shadow-secondary/20' : 'border-foreground/20'
                  }`}>
                    
                    {/* Top Section - Mobile Optimized */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-foreground/20 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                          isActive ? 'scale-110' : ''
                        }`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-foreground" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-0.5 sm:mb-1 leading-tight">
                            {guide.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs md:text-sm text-foreground/60 font-bold uppercase tracking-wider">
                            Step {guide.number}
                          </p>
                        </div>
                      </div>
                      
                      {/* Emoji Badge - Mobile Optimized */}
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-shrink-0">{guide.emoji}</div>
                    </div>

                    {/* Divider - Mobile Optimized */}
                    <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                      <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-secondary to-foreground rounded-full"></div>
                      <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-foreground to-transparent rounded-full"></div>
                    </div>

                    {/* Description - Mobile Optimized */}
                    <p className="text-foreground/80 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed mb-3 sm:mb-4 md:mb-6">
                      {guide.description}
                    </p>

                    {/* Details Grid - Mobile Optimized */}
                    <div className="grid gap-2 sm:gap-3">
                      {guide.details.map((detail, detailIndex) => (
                        <div 
                          key={detailIndex} 
                          className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 bg-foreground/10 rounded-lg sm:rounded-xl border border-foreground/20 hover:border-secondary/40 transition-colors duration-300"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-gradient-to-br from-secondary to-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-[10px] sm:text-xs font-black">{detailIndex + 1}</span>
                          </div>
                          <span className="text-xs sm:text-sm md:text-base text-foreground/90 leading-snug sm:leading-relaxed font-medium">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator - Mobile Optimized */}
                    {isActive && (
                      <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-foreground/20">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-secondary animate-pulse" />
                          <span className="text-xs sm:text-sm font-bold text-secondary">Current Step</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/20 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6">
              <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4 leading-tight">
              Ready to Get Started?
            </h3>
            
            <p className="text-primary/90 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our expert team is here to guide you through every step of your property journey
            </p>

            {/* Quick Tips Cards - Mobile Optimized (2 columns on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              {[
                {
                  icon: "💡",
                  title: "Compare Properties",
                  desc: "Visit multiple properties to make informed decisions"
                },
                {
                  icon: "🎯",
                  title: "Legal Review",
                  desc: "Expert guidance on all documentation"
                },
                {
                  icon: "📚",
                  title: "24/7 Support",
                  desc: "Always here to assist you"
                }
              ].map((tip, index) => (
                <div 
                  key={index} 
                  className={`p-3 sm:p-4 md:p-6 bg-primary/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary/30 hover:bg-primary/30 transition-all duration-300 ${
                    index === 2 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{tip.icon}</div>
                  <h4 className="text-xs sm:text-sm md:text-base font-black text-primary mb-1 sm:mb-2 leading-tight">
                    {tip.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-primary/80 leading-snug">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-primary text-foreground rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}