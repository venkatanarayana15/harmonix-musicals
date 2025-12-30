import React, { useCallback, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaChevronDown,
  FaGuitar,
  FaMicrophoneAlt,
  FaMusic
} from "react-icons/fa"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

/* -------------------- Optimized Instrument Card -------------------- */
const InstrumentCard = ({ item, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card
        className="
          h-full min-h-[140px] flex flex-col justify-between cursor-pointer 
          border-white/5 bg-white/5 backdrop-blur-md
          active:scale-95 transition-all duration-300
        "
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-row items-center gap-4 p-3 h-full">
          {/* Icon (Left side on mobile for compactness) */}
          <div className="text-3xl md:text-5xl text-violet-400 drop-shadow-[0_0_15px_rgba(167,139,250,0.5)] shrink-0">
            {item.icon}
          </div>

          <div className="flex flex-col justify-center w-full">
            <h3 className="text-lg font-bold text-white tracking-wide">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 leading-snug">
              {item.desc}
            </p>
            {/* Tags - Compact Row */}
            <div className="flex flex-wrap gap-1 mt-2">
              {item.levels.map((level, idx) => (
                <span
                  key={idx}
                  className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-black/40 rounded text-slate-300 border border-white/10"
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

/* -------------------- Optimized Stat Card -------------------- */
const StatCard = ({ stat }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
    <div className="text-xl md:text-4xl mb-1">{stat.icon}</div>
    <div className="text-xl md:text-4xl font-black text-white">
      {stat.number}
    </div>
    <div className="text-slate-400 font-medium text-[10px] md:text-sm uppercase tracking-wider">
      {stat.label}
    </div>
  </div>
)

/* -------------------- Main Home Page -------------------- */
export default function Home() {
  const heroRef = useRef(null)

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  const instruments = [
    {
      icon: <FaGuitar />,
      title: "Guitar",
      desc: "Acoustic & Electric",
      levels: ["Beginner", "Pro"],
    },
    {
      icon: <FaMusic />,
      title: "Piano",
      desc: "Classical & Modern",
      levels: ["All Ages", "Expert"],
    },
    {
      icon: "🎻",
      title: "Violin",
      desc: "Traditional & Western",
      levels: ["Suzuki", "Grade"],
    },
    {
      icon: <FaMicrophoneAlt />,
      title: "Vocal",
      desc: "Classical & Pop",
      levels: ["Voice", "Stage"],
    }
  ]

  const stats = [
    { number: "500+", label: "Students", icon: "👨‍🎓" },
    { number: "20+", label: "Mentors", icon: "👨‍🏫" },
    { number: "50+", label: "Events", icon: "🎭" },
    { number: "100%", label: "Happy", icon: "⭐" }
  ]

  return (
    <div className="text-white overflow-x-hidden bg-slate-950 font-sans">

      {/* ---------------- HERO SECTION ---------------- */}
      {/* Changed: Removed pt-20, using h-screen to fill viewport exactly */}
      <section
        id="hero"
        ref={heroRef}
        className="relative h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Background Gradients (Full Screen) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-slate-950 to-slate-950 z-0" />
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] animate-pulse delay-700" />

        {/* Content Container - Tightened spacing */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-16">
          
          {/* Logo - Smaller on mobile to save space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-8"
          >
            <div className="w-20 h-20 md:w-40 md:h-40 mx-auto rounded-full border-2 border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.4)] overflow-hidden bg-black">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md"
          >
            <span className="text-[10px] md:text-sm font-bold tracking-widest text-violet-300 uppercase">
              Harmonix Musicals
            </span>
          </motion.div>

          {/* Main Heading - Tightened leading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight"
          >
            <span className="text-white block text-3xl md:text-6xl mb-1">Master Your</span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Musical Passion
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm md:text-lg mb-8 max-w-xs md:max-w-2xl mx-auto leading-relaxed"
          >
             Chennai's premier academy for Guitar, Piano, Violin & Vocals.
          </motion.p>

          {/* CTA Buttons - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col w-full max-w-[280px] md:max-w-none md:flex-row gap-3 justify-center"
          >
            <Button 
              size="lg" 
              className="w-full md:w-auto text-sm md:text-base py-3 md:py-4 shadow-xl shadow-violet-500/20" 
              onClick={() => scrollToSection("learning-preview")}
            >
              Explore Courses
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full md:w-auto text-sm md:text-base py-3 md:py-4 bg-white/5 border border-white/10" 
              onClick={() => scrollToSection("contact")}
            >
              Book Free Trial
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---------------- LEARNING PREVIEW ---------------- */}
      <section
        id="learning-preview"
        className="py-12 md:py-24 px-4 bg-slate-950 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">
              Our <span className="text-violet-400">Programs</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-lg">
              Expert training for every skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {instruments.map((item, index) => (
              <InstrumentCard
                key={index}
                item={item}
                onClick={() => scrollToSection("learning")}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/learning">
               <span className="text-xs md:text-sm text-violet-400 font-semibold border-b border-violet-500/50 pb-0.5 hover:text-white transition-colors cursor-pointer">
                 View Full Curriculum →
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- STATS SECTION ---------------- */}
      <section className="py-8 md:py-12 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/20 to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
            Ready to <span className="text-violet-400">Start?</span>
          </h2>
          <p className="text-slate-400 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
            Book a free demo session today. No commitment required.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link to="/contact" className="w-full md:w-auto">
              <Button size="lg" className="w-full text-base py-3 md:py-4">
                Start Now
              </Button>
            </Link>
            <Link to="/learning" className="w-full md:w-auto">
              <Button size="lg" variant="secondary" className="w-full text-base py-3 md:py-4 bg-slate-800">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}