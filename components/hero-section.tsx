"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin, Award, Phone, Building2, Users, CheckCircle, Sparkles, Star } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const swiperCSS = document.createElement('link')
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    swiperCSS.rel = 'stylesheet'
    document.head.appendChild(swiperCSS)

    const swiperScript = document.createElement('script')
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    swiperScript.async = true
    document.body.appendChild(swiperScript)

    swiperScript.onload = () => {
      if (window.Swiper) {
        new window.Swiper('.hero-swiper', {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      }
    }

    const style = document.createElement('style')
    style.textContent = `
      .hero-swiper .swiper-slide img {
        filter: brightness(0.4);
      }
      .hero-swiper .swiper-button-next,
      .hero-swiper .swiper-button-prev {
        color: white !important;
        background: rgba(255, 255, 255, 0.2);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        z-index: 50 !important;
        cursor: pointer !important;
      }
      .hero-swiper .swiper-button-next:hover,
      .hero-swiper .swiper-button-prev:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
      }
      .hero-swiper .swiper-button-next::after,
      .hero-swiper .swiper-button-prev::after {
        font-size: 20px;
        font-weight: bold;
      }
      .hero-swiper .swiper-pagination-bullet {
        background: white;
        opacity: 0.5;
        cursor: pointer !important;
      }
      .hero-swiper .swiper-pagination-bullet-active {
        opacity: 1;
        background: #f97316;
      }
      .hero-swiper .swiper-pagination {
        z-index: 50 !important;
      }
      @media (max-width: 768px) {
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          width: 36px;
          height: 36px;
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 16px;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(swiperCSS)) document.head.removeChild(swiperCSS)
      if (document.body.contains(swiperScript)) document.body.removeChild(swiperScript)
      if (document.head.contains(style)) document.head.removeChild(style)
    }
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const slides = [
    "/slider1.webp",
    "/slider2.webp",
    "/slider3.webp",
    "/slider4.webp",
    "/slider5.webp",
    "/slider6.webp",
  ]

  const locations = ['Besa', 'Beltarodi', 'Shankarpur', 'Wardha Road', 'Jamtha', 'Katol Road', 'Umred Road', 'Koradi Road', 'Samruddhi Circle']

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-swiper swiper w-full h-full">
          <div className="swiper-wrapper">
            {slides.map((slide, idx) => (
              <div key={idx} className="swiper-slide">
                <img
                  src={slide}
                  alt={`Mahalaxmi Developers ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Floating Badges - Mobile Optimized */}
      <div className="absolute top-0 left-0 right-0 z-20 p-3 sm:p-6 md:p-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-12"}`}>
            <div className="bg-primary/95 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-2xl border border-white/30 inline-flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              <span className="text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider">RERA Approved</span>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-12"}`}>
            <div className="bg-secondary/95 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-2xl border border-white/30 inline-flex items-center gap-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">17000+ Happy Families</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full py-16 sm:py-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Centered Title Section - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="inline-block mb-4 sm:mb-6">
                <div className="text-primary text-[10px] sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-3 flex items-center justify-center gap-2 sm:gap-3">
                  <div className="h-px w-4 sm:w-8 bg-primary"></div>
                  Nagpur's Trusted Name
                  <div className="h-px w-4 sm:w-8 bg-primary"></div>
                </div>
              </div>
              
              <h1 className="mb-4 sm:mb-6">
                <span className="block text-primary text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black drop-shadow-2xl mb-1 sm:mb-2">MAHALAXMI</span>
                <span className="block text-secondary text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black drop-shadow-2xl -mt-3 sm:-mt-6">INFRA</span>
              </h1>
              
              <p className="text-base sm:text-xl md:text-2xl lg:text-4xl text-primary font-light italic">
                Where Dreams Take Shape
              </p>
            </div>
          </div>

          {/* Cards Layout - Mobile First Approach */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 pointer-events-auto">
            
            {/* Stats Cards - Mobile Optimized */}
            <div className={`bg-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-0.5 sm:mb-1">67+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary/70">Completed Projects</div>
            </div>

            <div className={`bg-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 delay-75 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-0.5 sm:mb-1">17K+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary/70">Satisfied Families</div>
            </div>

            <div className={`bg-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 delay-150 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-0.5 sm:mb-1">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-primary/70">Legal Compliance</div>
            </div>

            {/* Special Offer - Mobile: Full Width, Tablet+: Tall Card */}
            <div className={`col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:scale-105 transition-all duration-500 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex flex-row sm:flex-row lg:flex-col items-center sm:items-center lg:items-start justify-between lg:justify-between h-full gap-4">
                <div className="flex-1">
                  <div className="bg-primary/30 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl inline-block mb-2 sm:mb-3 md:mb-4">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <div className="text-primary/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">Exclusive Launch</div>
                  <h3 className="text-primary font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-3">₹22L</h3>
                  <p className="text-primary/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">Premium Plots at Samruddhi Circle</p>
                </div>
                <button 
                  onClick={() => handleScrollToSection("contact")}
                  className="group bg-primary hover:bg-primary/90 text-foreground px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-xl whitespace-nowrap"
                >
                  Enquire Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Locations Card - Mobile: Full Width */}
            <div className={`col-span-3 md:col-span-2 lg:col-span-3 bg-black/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 transition-all duration-500 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="bg-secondary/20 p-2 sm:p-3 rounded-lg sm:rounded-xl shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 sm:mb-1">Strategic Locations</h4>
                  <p className="text-primary/70 text-xs sm:text-sm mb-3 sm:mb-4">Across Nagpur Metropolitan</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {locations.map((loc, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs md:text-sm text-primary/90 hover:bg-white/20 transition-colors duration-200 cursor-default border border-white/10">
                        {loc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pointer-events-auto transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <button 
              onClick={() => handleScrollToSection("contact")}
              className="group bg-primary hover:bg-primary/90 text-foreground px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
            >
              <Phone size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Schedule Site Visit
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={() => handleScrollToSection("projects")}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-primary px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105"
            >
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Animated Corner Accents */}
      <div className="absolute top-1/4 right-0 w-1 h-32 sm:h-48 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-1 h-32 sm:h-48 bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse delay-1000"></div>

    </section>
  )
}

declare global {
  interface Window {
    Swiper: any;
  }
}