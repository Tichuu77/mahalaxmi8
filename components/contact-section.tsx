"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check, MessageCircle } from "lucide-react"

export default function ContactMobileCompact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
      return
    }
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else throw new Error()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(30deg, transparent 48%, currentColor 49%, currentColor 51%, transparent 52%)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Decorative Elements */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full border-2 border-primary/20">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold text-sm">Let's Connect</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-3">
            Say Hello
          </h2>
          <p className="text-secondary text-base sm:text-lg font-semibold">We're here to help you 24×7</p>
        </div>

        {/* Two Column Layout on Desktop */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact Cards - Stacked */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                href="tel:+917218768295"
                className="group block relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/70 font-semibold text-sm mb-1">Call Us Anytime</p>
                      <p className="text-primary font-black text-xl">+91 7218768295</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+917218768295"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/70 font-semibold text-sm mb-1">Quick Chat</p>
                      <p className="text-green-600 font-black text-xl">WhatsApp Us</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-primary/70 font-semibold text-sm mb-1">Visit Our Office</p>
                    <p className="text-primary font-black text-xl">Nagpur, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="hidden lg:block bg-white/5 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-bold text-base">Why Choose Us?</p>
                </div>
              </div>
              <ul className="space-y-3 text-primary/80 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Response in less than 2 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Free site visit arranged</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>100% secure & confidential</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-lg border-2 border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Check className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-primary mb-3">Thank You!</h3>
                    <p className="text-secondary text-base">We'll contact you within 2 hours</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-primary mb-2">Send a Message</h3>
                      <p className="text-primary/70 text-sm">Fill out the form below and we'll get back to you shortly</p>
                    </div>

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-primary font-semibold text-sm mb-2">Your Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 border-primary/20 text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none text-base transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-primary font-semibold text-sm mb-2">Your Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 border-primary/20 text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none text-base transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-primary font-semibold text-sm mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="What's this about?"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 border-primary/20 text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none text-base transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-primary font-semibold text-sm mb-2">Your Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us what you need..."
                          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border-2 border-primary/20 text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none text-base transition-all resize-none"
                        />
                      </div>

                      {status === "error" && (
                        <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-4">
                          <p className="text-red-400 text-sm font-semibold text-center">
                            Please fill all required fields
                          </p>
                        </div>
                      )}

                      <button
                        onClick={handleSubmit}
                        disabled={status === "sending"}
                        className="w-full py-4 bg-gradient-to-r from-secondary  to-secondary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "sending" ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Line */}
        <div className="lg:hidden mt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 text-primary/70 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              Response in 2 hours
            </span>
            <span className="text-primary/30">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              Free site visit
            </span>
            <span className="text-primary/30">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-secondary" />
              100% secure
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}