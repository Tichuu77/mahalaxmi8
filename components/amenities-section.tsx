"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

const amenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration",
    category: "facilities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym",
    category: "wellness"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping",
    category: "wellness"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 power supply",
    category: "facilities"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance",
    category: "facilities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Social gathering spaces",
    category: "entertainment"
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool",
    category: "wellness"
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor entertainment",
    category: "entertainment"
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Wellness activities",
    category: "wellness"
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Multi-level parking",
    category: "facilities"
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces",
    category: "entertainment"
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe playground",
    category: "entertainment"
  },
]

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredAmenities = amenities.filter(amenity => {
    if (activeTab === "all") return true
    return amenity.category === activeTab
  })

  return (
    <section id="amenities" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
              <div className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse delay-100" />
            </div>
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest">
              Premium Amenities
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 px-2">
            Lifestyle <span className="text-secondary">Redefined</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-primary/70 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Experience luxury living with world-class facilities designed for your ultimate comfort and convenience
          </p>

          {/* Filter Tabs - Mobile Optimized with Scroll */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="inline-flex gap-2 sm:gap-3 p-1.5 sm:p-2 bg-primary/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-secondary/20 shadow-lg min-w-min">
              {[
                { id: "all", label: "All" },
                { id: "wellness", label: "Wellness" },
                { id: "entertainment", label: "Entertainment" },
                { id: "facilities", label: "Facilities" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-secondary to-foreground text-primary shadow-xl scale-105"
                      : "text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Grid - Mobile Optimized (2 columns on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {filteredAmenities.map((amenity, index) => {
            const Icon = amenity.icon
            
            return (
              <div
                key={index}
                className="group relative bg-primary rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-foreground/20 hover:border-secondary/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Circle - Mobile Optimized */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-secondary to-foreground rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                    {amenity.emoji ? (
                      <span className="text-2xl sm:text-3xl lg:text-4xl">{amenity.emoji}</span>
                    ) : (
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                    )}
                  </div>
                  
                  {/* Title - Mobile Optimized */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-black text-foreground mb-1 sm:mb-2 group-hover:text-secondary transition-colors leading-tight">
                    {amenity.title}
                  </h3>
                  
                  {/* Description - Mobile Optimized */}
                  <p className="text-xs sm:text-sm text-foreground/70 font-medium leading-snug">
                    {amenity.description}
                  </p>

                  {/* Category Badge - Mobile Optimized */}
                  <div className="mt-2 sm:mt-3 lg:mt-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 bg-foreground/10 rounded-full">
                    <span className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider">
                      {amenity.category}
                    </span>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-32 sm:w-48 h-32 sm:h-48 bg-primary rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 sm:w-48 h-32 sm:h-48 bg-primary rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center md:text-left md:flex-row md:justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-2">
                Want to Experience These Amenities?
              </h3>
              <p className="text-primary/90 text-sm sm:text-base">
                Schedule a site visit and explore our premium facilities firsthand
              </p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-foreground rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
            >
              Book a Visit
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Note - Mobile Optimized */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-primary/60 font-medium px-4">
            ✨ Amenities may vary by project location and development phase
          </p>
        </div>
      </div>
    </section>
  )
}