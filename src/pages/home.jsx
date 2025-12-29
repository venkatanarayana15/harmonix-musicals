import React, { useState, useEffect, useCallback, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FaChevronDown,
  FaGuitar,
  FaMicrophoneAlt,
  FaMusic
} from "react-icons/fa"

/* -------------------- Optimized Cards -------------------- */
const InstrumentCard = React.memo(({ item, onClick }) => (
  <div
    className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8
      hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out
      cursor-pointer min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-between
      shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 active:shadow-lg"
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    aria-label={`Learn more about ${item.title}`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${item.color}
        opacity-0 group-hover:opacity-10 md:group-hover:opacity-20 transition-all duration-500 rounded-2xl`}
    />
    <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
        {item.icon}
      </div>
      <div className="space-y-2 flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-black mb-2 sm:mb-3 text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-2">
          {item.desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6 max-w-full overflow-hidden">
        {item.levels.map((level, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-800/60 hover:bg-indigo-500/40
              rounded-full text-gray-300 backdrop-blur-sm transition-all duration-200 group-hover:bg-indigo-500/50"
          >
            {level}
          </span>
        ))}
      </div>
      <div className="text-indigo-400 font-semibold text-sm sm:text-base group-hover:text-indigo-300 transition-all flex items-center gap-1.5 sm:gap-2">
        <span>View details</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </div>
  </div>
))

const StatCard = React.memo(({ stat }) => (
  <div
    className="text-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gray-900/70 to-black/50
      rounded-2xl backdrop-blur-xl border border-gray-800/50 shadow-xl
      hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-[1.02]
      active:scale-[0.98] transition-all duration-500 cursor-default"
  >
    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r
      from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-4 leading-none">
      {stat.number}
    </div>
    <div className="text-gray-300 font-semibold text-base sm:text-lg leading-tight">
      {stat.label}
    </div>
  </div>
))

/* -------------------- Optimized Home Page -------------------- */
export default function Home() {
  const [, setVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setVisible(true)
  }, [])

  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    })
  }, [])

  const instruments = [
    {
      icon: <FaGuitar />,
      title: "Guitar",
      desc: "Acoustic, Electric & Bass",
      levels: ["Beginner", "Intermediate", "Advanced"],
      color: "from-orange-500/70 to-red-600/70"
    },
    {
      icon: <FaMusic />,
      title: "Piano",
      desc: "Classical & Contemporary",
      levels: ["Beginner", "Intermediate", "Advanced"],
      color: "from-blue-500/70 to-cyan-600/70"
    },
    {
      icon: "🎻",
      title: "Violin",
      desc: "Traditional & Modern",
      levels: ["Beginner", "Intermediate", "Advanced"],
      color: "from-emerald-500/70 to-green-600/70"
    },
    {
      icon: <FaMicrophoneAlt />,
      title: "Vocal",
      desc: "Classical & Pop Training",
      levels: ["Beginner", "Intermediate", "Advanced"],
      color: "from-purple-500/70 to-pink-600/70"
    }
  ]

  const stats = [
    { number: "500+", label: "Students Trained", icon: "👨‍🎓" },
    { number: "20+", label: "Expert Instructors", icon: "👨‍🏫" },
    { number: "50+", label: "Performances Yearly", icon: "🎭" },
    { number: "100%", label: "Satisfaction Rate", icon: "⭐" }
  ]

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-slate-950 text-white overflow-x-hidden">
      
      {/* ---------------- HERO ---------------- */}
      <section
        id="hero"
        className="min-h-[100vh] sm:min-h-screen relative
          bg-gradient-to-br from-black via-indigo-950/40 to-purple-950/30
          px-4 sm:px-6 lg:px-8 overflow-hidden pt-16 sm:pt-20 md:pt-28 snap-start"
        ref={heroRef}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl sm:max-w-6xl mx-auto h-screen flex flex-col justify-center items-center">
          <div className="mb-8 sm:mb-12 flex flex-col items-center space-y-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500
              rounded-2xl shadow-2xl shadow-indigo-500/40 ring-2 ring-indigo-500/30 flex items-center justify-center animate-pulse">
              <FaMusic className="text-3xl sm:text-4xl md:text-5xl" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-black tracking-widest bg-gradient-to-r
              from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              HARMONIX MUSICALS
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-10 leading-tight px-4">
            <span className="block bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent mb-2 sm:mb-4">
              Learn Music
            </span>
            <span className="block text-indigo-300/90 font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
              Master Your Passion
            </span>
          </h1>

          <button
            onClick={() => scrollToSection("learning-preview")}
            className="group relative w-14 h-20 sm:w-16 sm:h-24 border-2 border-white/20 rounded-3xl flex flex-col items-center justify-center pt-4 sm:pt-6
              backdrop-blur-sm hover:border-white/50 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500
              active:scale-95 active:shadow-lg"
            aria-label="Scroll to programs"
          >
            <FaChevronDown className="text-xl sm:text-2xl mb-1 group-hover:translate-y-1 transition-transform duration-500" />
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full animate-bounce" />
          </button>
        </div>
      </section>

      {/* ---------------- LEARNING ---------------- */}
      <section
        id="learning-preview"
        className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-black/80 via-slate-900/60 to-black/80 snap-start"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Discover Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Instrument
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              World-class programs for every skill level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {instruments.map((item, index) => (
              <InstrumentCard
                key={item.title}
                item={item}
                onClick={() => scrollToSection("learning-preview")}
              />
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <Link
              to="/learning"
              className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                px-8 sm:px-12 py-4 sm:py-5 md:px-16 md:py-6 rounded-2xl lg:rounded-3xl font-black text-lg sm:text-xl md:text-2xl
                hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-95 active:shadow-lg
                transition-all duration-500 ring-2 ring-indigo-500/30 backdrop-blur-sm"
              prefetch="true"
            >
              View All Programs
              <span className="text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-r from-slate-900 to-black snap-start">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 sm:py-32 md:py-40 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-black/80 text-center snap-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-12 leading-tight">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4 sm:mt-6">
              Musical Journey?
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center mt-12 sm:mt-16">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-white/95 to-gray-100 text-black px-8 sm:px-12 py-5 sm:py-6 md:px-16 md:py-7
                rounded-3xl lg:rounded-[2rem] font-black text-lg sm:text-xl md:text-2xl shadow-2xl shadow-white/20
                hover:scale-105 hover:shadow-3xl hover:shadow-white/30 active:scale-95 active:shadow-xl
                transition-all duration-500 ring-2 ring-white/30 backdrop-blur-xl flex items-center justify-center"
              prefetch="true"
            >
              Book Free Trial
            </Link>

            <Link
              to="/learning"
              className="w-full sm:w-auto border-2 border-white/30 px-8 sm:px-12 py-5 sm:py-6 md:px-16 md:py-7 rounded-3xl lg:rounded-[2rem]
                text-lg sm:text-xl md:text-2xl font-semibold hover:bg-white/10 hover:border-white/60
                hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 transition-all duration-500
                backdrop-blur-xl flex items-center justify-center"
              prefetch="true"
            >
              Browse Courses →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
