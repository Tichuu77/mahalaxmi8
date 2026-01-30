"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, User, Award } from "lucide-react"

const testimonials = [
    {
      id: 1,
      content:
        "Investing in a by Maha Laxmi Developers transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
      name: "Rajkumar Gharjale",
      location: "Nagpur",
      image: "/testonomials1.webp",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi Developers exceeded my expectations. Highly recommended!",
      name: "Priya Shah",
      location: "Mumbai",
      image: "/testonomials2.jpg",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Investing in residential plots with Mahalaxmi Developers was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
      name: "Karan Akojwar",
      location: "Pune",
      image: "/testonomials3.jpg",
      rating: 5,
    },
  ]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const currentTestimonial = testimonials[current]

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-foreground/5 to-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary animate-pulse" />
            <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 leading-tight px-2">
            <span className="text-primary">What Our</span><br />
            <span className="text-secondary">Clients Say</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed px-4">
            Real experiences from satisfied property owners who trusted us with their investment dreams
          </p>
        </div>

        {/* Carousel Container - Mobile Optimized */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="relative">
            
            {/* Main Cards - Mobile Optimized */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === current 
                      ? "opacity-100 scale-100 relative" 
                      : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {/* Card - Mobile Optimized with Padding for Buttons */}
                  <div className="bg-primary rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-16 border-2 border-foreground/20 shadow-2xl hover:border-secondary/40 transition-all duration-500 mx-12 sm:mx-16 md:mx-20">
                    
                    {/* Top Section - Quote Icon - Mobile Optimized */}
                    <div className="flex justify-between items-start mb-5 sm:mb-6 lg:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground flex items-center justify-center shadow-xl">
                        <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                      </div>
                      
                      {/* Stars - Mobile Optimized */}
                      <div className="flex gap-0.5 sm:gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400" 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content - Mobile Optimized */}
                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground font-bold leading-snug sm:leading-relaxed mb-6 sm:mb-8 lg:mb-10 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Bottom Section - Profile - Mobile Optimized */}
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                      {/* Avatar - Mobile Optimized */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-foreground rounded-full blur-md opacity-50"></div>
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-3 sm:border-4 border-primary overflow-hidden shadow-xl">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Verified Badge - Mobile Optimized */}
                        <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-secondary to-foreground rounded-full flex items-center justify-center border-2 sm:border-3 border-primary shadow-lg">
                          <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary" />
                        </div>
                      </div>

                      {/* Info - Mobile Optimized */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-1 sm:mb-2 truncate">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                          <span className="text-sm sm:text-base lg:text-lg text-foreground/70 font-bold">
                            {testimonial.location}
                          </span>
                        </div>
                      </div>

                      {/* Rating Badge - Hidden on Mobile, Visible on MD+ */}
                      <div className="hidden md:flex flex-col items-center px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-gradient-to-br from-amber-400/20 to-amber-500/20 rounded-xl sm:rounded-2xl border-2 border-amber-400/30">
                        <span className="text-3xl sm:text-4xl font-black text-amber-500">5.0</span>
                        <span className="text-xs sm:text-sm text-foreground/70 font-bold uppercase tracking-wider">Perfect</span>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-28 sm:w-32 lg:w-40 h-28 sm:h-32 lg:h-40 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Mobile Optimized - Fixed Z-Index */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
            </button>
          </div>

          {/* Dots Navigation - Mobile Optimized */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`transition-all duration-300 ${
                  index === current 
                    ? 'w-8 sm:w-10 lg:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-secondary to-primary rounded-full' 
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary/30 rounded-full hover:bg-primary/50 hover:scale-125'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid - Mobile Optimized (2 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`group text-left bg-primary rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === current 
                  ? 'border-secondary/50 shadow-xl shadow-secondary/20 scale-105' 
                  : 'border-foreground/20 hover:border-secondary/30'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-foreground/20 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm md:text-base font-black text-foreground group-hover:text-secondary transition-colors truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-foreground/60">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    <span className="truncate">{testimonial.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-[10px] sm:text-xs md:text-sm text-foreground/70 line-clamp-3 leading-snug sm:leading-relaxed">
                {testimonial.content}
              </p>
            </button>
          ))}
        </div>

        {/* Trust Stats - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-6 md:gap-12">
            {[
              { value: "17000+", label: "Happy Clients" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-primary/90 font-bold uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}