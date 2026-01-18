"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle, Building2, Calendar, TrendingUp } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: "Ready to move residential layout on Besa-Pipla Road, opposite Zudio & Croma. Prime location with up to 90% bank finance.",
      location: "MOUZA - BESA",
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: "New project on Katol Road, Fetri (Chicholi), touching Outer Ring Road. Fully developed NMRDA & RL sanctioned.",
      location: "MOUZA - FETRI",
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: "Premium layout near Samruddhi Mahamarg with clubhouse & swimming pool. NMRDA + RL approved. Up to 90% finance.",
      location: "MOUZA - GOMGAON",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: "Well-connected plots near Jamtha, Wardha Road. NMRDA & RL sanctioned with excellent amenities.",
      location: "MOUZA - JAMTHA",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/project43.jpg",
      description: "Ready-to-move plots behind Royal Gondwana School, Shankarpur. Fully developed with 90% finance.",
      location: "MOUZA - SHANKARPUR",
      status: "ongoing"
    },
      { id: 7, title: "Mahalaxmi Nagar - 44", image: "/project44.jpg", description: "", location: "", status: "ongoing" },
    {
      id: 8,
      title: "Mahalaxmi Nagar - 45",
      image: "/project45.jpg",
      description: "Premium plotted development near Samruddhi Mahamarg, close to AIIMS, IIM, MIHAN & D-Mart.",
      location: "MOUZA - SUMTHANA",
      status: "ongoing"
    },
    {
      id: 9,
      title: "Mahalaxmi Nagar - 47",
      image: "/project47.jpg",
      description: "New launch behind Haldiram & AM Cinema on Koradi Road. NMRDA & RL approved with 90% finance.",
      location: "KORADI ROAD (Behind Haldiram)",
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 10,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: "NMRDA & RL sanctioned layout in Kotewada. 75-80% bank loan approved.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: "Fully delivered premium layout with all amenities completed.",
      location: "MOUZA - KOTEWADA",
      status: "completed"
    },
    {
      id: 12,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: "Successfully delivered project with high appreciation value.",
      location: "MOUZA - BAHADURA",
      status: "completed"
    },
  ],
  upcoming: [
    { id: 13, title: "Mahalaxmi Nagar - 48", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 14, title: "Mahalaxmi Nagar - 49", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
    { id: 15, title: "Mahalaxmi Nagar - 50", image: "/plotDef.avif", description: "", location: "", status: "upcoming" },
  ]
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const statusConfig = {
    completed: { color: "from-green-500 to-emerald-600", icon: CheckCircle, label: "Completed" },
    ongoing: { color: "from-blue-500 to-cyan-600", icon: TrendingUp, label: "Ongoing" },
    upcoming: { color: "from-orange-500 to-red-600", icon: Calendar, label: "Upcoming" },
  }

  const config = statusConfig[project.status as keyof typeof statusConfig]
  const StatusIcon = config.icon

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in "${project.title}" at ${project.location || 'Nagpur'}. Please share details.`
    window.open(`https://wa.me/917218768295?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div
      className="group relative bg-primary rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-foreground/20 hover:border-secondary/50 transition-all duration-500 shadow-2xl hover:shadow-secondary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Mobile Optimized */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />

        {/* Floating Elements - Mobile Optimized */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-start z-10">
          {/* Project ID - Mobile Optimized */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-foreground flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
            <span className="text-primary font-black text-xl sm:text-2xl lg:text-3xl">{project.id}</span>
          </div>

          {/* Status Badge - Mobile Optimized */}
          <div className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-gradient-to-r ${config.color} text-primary shadow-xl backdrop-blur-sm text-[10px] sm:text-xs font-bold uppercase`}>
            <StatusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            {config.label}
          </div>
        </div>

        {/* Title Overlay - Mobile Optimized */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-1 sm:mb-2 drop-shadow-lg leading-tight">
            {project.title}
          </h3>
          {project.location && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-primary/90">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
              <span className="font-bold text-xs sm:text-sm">{project.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section - Mobile Optimized */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Decorative Line - Mobile Optimized */}
        <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5 lg:mb-6">
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-secondary to-foreground rounded-full" />
          <div className="h-0.5 sm:h-1 w-10 sm:w-12 lg:w-16 bg-gradient-to-r from-foreground to-transparent rounded-full" />
        </div>

        {/* Description - Mobile Optimized */}
        {project.description ? (
          <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6 min-h-[60px] sm:min-h-[72px]">
            {project.description}
          </p>
        ) : (
          <p className="text-foreground/50 italic text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 min-h-[60px] sm:min-h-[72px]">
            Details coming soon...
          </p>
        )}

        {/* Features Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex flex-col gap-1 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 bg-foreground/10 rounded-xl sm:rounded-2xl border border-foreground/20 hover:border-secondary/40 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider">NMRDA</span>
            </div>
            <span className="text-[10px] sm:text-xs text-foreground/70">Approved</span>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 bg-secondary/10 rounded-xl sm:rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 lg:w-2.5 h-1.5 sm:h-2 lg:h-2.5 rounded-full bg-foreground animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-wider">Finance</span>
            </div>
            <span className="text-[10px] sm:text-xs text-foreground/70">Up to 90%</span>
          </div>
        </div>

        {/* CTA Button - Mobile Optimized */}
        <button
          onClick={handleWhatsApp}
          className="w-full group/btn relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-secondary to-foreground p-3 sm:p-3.5 lg:p-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <span className="font-black text-primary text-sm sm:text-base lg:text-lg">WhatsApp Details</span>
            </div>
            <ArrowRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-primary group-hover/btn:translate-x-2 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [...projects.ongoing, ...projects.completed, ...projects.upcoming]
  const filteredProjects = activeTab === "all" ? allProjects : allProjects.filter(p => p.status === activeTab)

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-secondary/20 to-foreground/20 rounded-full border-2 border-secondary/30 mb-4 sm:mb-5 lg:mb-6">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-secondary" />
            <span className="text-primary font-black text-xs sm:text-sm uppercase tracking-widest">Our Projects Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 lg:mb-6 leading-tight px-2">
            <span className="text-primary">Premium Plots in</span><br />
            <span className="text-secondary">Nagpur's Prime Locations</span>
          </h2>
          
          <p className="text-foreground/70 text-sm sm:text-base lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
            NMRDA approved • Up to 90% bank finance • Ready & upcoming projects
          </p>

          {/* Filter Tabs - Mobile Optimized with Scroll */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="inline-flex gap-2 sm:gap-3 p-1.5 sm:p-2 bg-primary/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-secondary/20 shadow-2xl min-w-min">
              {[
                { label: "All Projects", value: "all", count: allProjects.length },
                { label: "Ongoing", value: "ongoing", count: projects.ongoing.length },
                { label: "Completed", value: "completed", count: projects.completed.length },
                { label: "Upcoming", value: "upcoming", count: projects.upcoming.length },
              ].map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.value
                      ? "bg-gradient-to-r from-secondary to-foreground text-primary shadow-xl scale-105"
                      : "text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {tab.label} <span className="ml-1 opacity-70">({tab.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid - Mobile Optimized (2 columns on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 sm:py-16 lg:py-20">
              <p className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🏗️</p>
              <p className="text-xl sm:text-2xl font-black text-foreground mb-2">Under Construction</p>
              <p className="text-base sm:text-lg text-foreground/70 px-4">Exciting new projects launching soon!</p>
            </div>
          )}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="relative bg-gradient-to-r from-secondary to-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4 leading-tight">
              Ready to Own Your Dream Plot?
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-primary/90 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Limited plots available • High appreciation potential • Easy financing options
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center px-4">
              <a 
                href="https://wa.me/917218768295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-primary text-foreground font-black text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                WhatsApp Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-transparent border-2 sm:border-3 border-primary text-primary font-black text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-primary/10 transition-all duration-300"
              >
                Schedule Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}