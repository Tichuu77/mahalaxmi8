"use client"

import { useEffect, useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Camera, Maximize2 } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const categories = ["all", "exterior", "interior", "amenities", "landscape"]

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("gallery")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId !== null) {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedId)
        if (e.key === "ArrowRight") {
          const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
          setSelectedId(filteredItems[newIndex].id)
        }
        if (e.key === "ArrowLeft") {
          const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
          setSelectedId(filteredItems[newIndex].id)
        }
        if (e.key === "Escape") setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId, filteredItems])

  // Mobile Slider Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedId)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedId(filteredItems[newIndex].id)
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background via-foreground/5 to-background relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Mobile Optimized */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30">
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">
              Project Gallery
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 px-2 leading-tight">
            <span className="text-primary">Visual </span>
            <span className="text-secondary">Inspiration</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
            Explore our completed projects and ongoing developments
          </p>

          {/* Category Filters - Mobile Optimized with Scroll */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="inline-flex gap-2 sm:gap-3 p-1.5 sm:p-2 bg-primary/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-secondary/20 shadow-2xl min-w-min">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat)
                    setCurrentSlide(0)
                  }}
                  className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 capitalize whitespace-nowrap ${
                    activeFilter === cat
                      ? "bg-gradient-to-r from-secondary to-foreground text-primary shadow-xl scale-105"
                      : "text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Slider (visible on mobile only) */}
        <div className="lg:hidden mb-8 sm:mb-10">
          <div className="relative">
            {/* Slider Container */}
            <div 
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div 
                      className="relative bg-primary border-2 border-foreground/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mx-2"
                      onClick={() => setSelectedId(item.id)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
                        
                        {/* Expand Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl">
                          <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-3 py-1.5 bg-gradient-to-r from-secondary/90 to-foreground/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                              {item.category}
                            </span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                              <span className="text-foreground text-xs font-black">{index + 1}</span>
                            </div>
                          </div>
                          <h3 className="text-primary font-black text-base sm:text-lg">
                            {item.alt}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-foreground rounded-xl shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-foreground rounded-xl shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r from-secondary to-primary rounded-full' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-primary/30 rounded-full hover:bg-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Masonry Grid Layout - Desktop Only */}
        <div className="hidden lg:block">
          <div className="columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group break-inside-avoid cursor-pointer"
                onClick={() => setSelectedId(item.id)}
              >
                <div className="relative rounded-3xl overflow-hidden bg-primary border-2 border-foreground/20 hover:border-secondary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-secondary/20">
                  
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Expand Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-secondary/20 to-foreground/20 border border-secondary/30 rounded-full text-xs font-bold text-foreground uppercase tracking-wider">
                        {item.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                        <span className="text-foreground text-xs font-black">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-foreground font-black text-lg group-hover:text-secondary transition-colors">
                      {item.alt}
                    </h3>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter - Mobile Optimized */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-primary/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-secondary/20 shadow-xl">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              <span className="text-foreground font-black text-sm sm:text-base">
                {filteredItems.length} {filteredItems.length === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">📸</div>
            <p className="text-foreground/60 text-base sm:text-lg lg:text-xl font-bold">No images in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal - Mobile Optimized */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-6xl w-full h-[80vh] sm:h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems.find((item) => item.id === selectedId)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl"
            />
            
            {/* Navigation arrows - Mobile Optimized */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-primary/90 hover:bg-primary rounded-xl sm:rounded-2xl transition-all shadow-2xl hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="sm:w-7 sm:h-7 text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-primary/90 hover:bg-primary rounded-xl sm:rounded-2xl transition-all shadow-2xl hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={20} className="sm:w-7 sm:h-7 text-foreground" />
            </button>

            {/* Close button - Mobile Optimized */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-3 sm:p-4 bg-primary/90 hover:bg-primary rounded-xl sm:rounded-2xl transition-all shadow-2xl hover:scale-110"
              aria-label="Close"
            >
              <X size={20} className="sm:w-6 sm:h-6 text-foreground" />
            </button>

            {/* Image info - Mobile Optimized */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-primary/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-2xl border-2 border-secondary/30">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-black text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 truncate">
                    {filteredItems.find((item) => item.id === selectedId)?.alt}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/20 rounded-full border border-secondary/30">
                    <span className="text-secondary text-xs sm:text-sm uppercase tracking-wider font-bold">
                      {filteredItems.find((item) => item.id === selectedId)?.category}
                    </span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-foreground/90 font-bold bg-foreground/10 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl whitespace-nowrap">
                  {filteredItems.findIndex((item) => item.id === selectedId) + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}