"use client"

import { useState } from "react"
import { ChevronDown, Home, IndianRupee, ShieldCheck, Handshake, CalendarCheck, Trees, Phone } from "lucide-react"

const faqs = [
  { q: "What types of plots do you offer?", a: "Residential & commercial plots in prime Nagpur locations – Besa, Wardha Road, Jamtha, etc. All NMRDA + RERA approved.", icon: Home },
  { q: "Price range?", a: "Starting from just ₹22 Lakh. Flexible plans & up to 90% bank loan available.", icon: IndianRupee },
  { q: "Are projects legally clear?", a: "100% RERA registered & NMRDA sanctioned. Zero risk, full transparency.", icon: ShieldCheck },
  { q: "Finance options?", a: "Bank loans, EMI plans & in-house financing. We guide you at every step.", icon: Handshake },
  { q: "How to visit site?", a: "Just WhatsApp or call us – we'll arrange free site visit in 24 hrs!", icon: CalendarCheck },
  { q: "What amenities?", a: "Wide roads, street lights, gardens, security, water & electricity – fully developed layouts.", icon: Trees },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Side Decoration */}
        <div className="flex items-center justify-center gap-6 mb-12 md:mb-16">
          <div className="hidden md:block h-px w-16 lg:w-32 bg-gradient-to-r from-transparent via-secondary to-secondary" />
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2">
              Got Questions?
            </h2>
            <p className="text-secondary text-base sm:text-lg font-semibold">We've got quick answers</p>
          </div>
          <div className="hidden md:block h-px w-16 lg:w-32 bg-gradient-to-l from-transparent via-secondary to-secondary" />
        </div>

        {/* Grid Layout for FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {faqs.map((item, i) => {
            const Icon = item.icon
            const isOpen = open === i

            return (
              <div
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full rounded-3xl transition-all duration-300 ${
                  isOpen ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}>
                  {/* Card Background */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 shadow-2xl' 
                      : 'bg-white/5 shadow-lg'
                  }`} />
                  
                  <div className="relative p-6 md:p-7 border-2 border-primary/20 rounded-3xl backdrop-blur-sm">
                    {/* Top Row: Icon + Question */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-secondary to-primary shadow-xl rotate-6' 
                          : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <Icon className={`w-7 h-7 transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-primary'
                        }`} />
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="text-primary font-bold text-lg md:text-xl leading-tight">
                          {item.q}
                        </h3>
                      </div>

                      {/* Expand Indicator */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-secondary rotate-180' : 'bg-primary/10'
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-primary'
                        }`} />
                      </div>
                    </div>

                    {/* Answer with Smooth Expansion */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-[4.5rem] pr-4">
                        <div className="border-l-4 border-secondary/40 pl-4">
                          <p className="text-primary/90 text-sm md:text-base leading-relaxed font-medium">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA - Full Width Card Style */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-primary font-black text-xl sm:text-2xl mb-2">
                  Still confused?
                </p>
                <p className="text-primary/70 text-sm sm:text-base">
                  We're just one message away
                </p>
              </div>
              
              <a
                href="https://wa.me/917218768295"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-secondary  to-secondary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-black rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}