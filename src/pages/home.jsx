import React, { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaGuitar,
  FaMusic,
  FaMicrophoneAlt
} from "react-icons/fa"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import { CONTACT } from "../components/constant/contact"
import BookingModal from "../components/sections/BookingModal"

// --- Instruments Data with refined colors ---
const instruments = [
  {
    image: "/gall1.png",
    imageFade: "to-[#ECDEC0]/90",
    icon: <div>🎸</div>,
    title: "Guitar",
    desc: "Acoustic & Electric mastery",
    levels: ["Beginner", "Pro"],
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/30"
  },
  {
    image: "/gall6.jpeg",
    imageFade: "to-[#EDE8DF]/98",
    imagePosition: "object-center",
    icon: <div>🎹</div>,
    title: "Piano",
    desc: "Classical to Modern Keys",
    levels: ["All Ages", "Expert"],
    shadow: "shadow-stone-500/30"
  },
  {
    image: "/gall3.png",
    imageFade: "to-orange-50/95",
    icon: <div className="font-serif italic text-2xl">🎻</div>,
    title: "Violin",
    desc: "Traditional & Western",
    levels: ["Suzuki", "Grade"],
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30"
  },
  {
    image: "/gall4.png",
    imageFade: "to-slate-100/95",
    icon: <div>🎤</div>,
    title: "Vocal",
    desc: "Find Your Unique Voice",
    levels: ["Voice", "Stage"],
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/30"
  }
]

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
        glass={true}
        className="
          h-full min-h-[160px] flex flex-col justify-between cursor-pointer 
          border-white/40 bg-white/60 dark:bg-gray-900/40
          hover:scale-[1.02] transition-transform duration-300
        "
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-row items-center gap-5 p-4 h-full relative overflow-hidden">
          {/* Background Glow */}
          <div className={`absolute -right-4 -top-4 w-24 h-24 bg-linear-to-br ${item.color} opacity-10 blur-2xl rounded-full`} />

          {/* Glowing Icon */}
          <div className={`
                relative z-10 p-4 rounded-2xl bg-linear-to-br ${item.color}
                text-white text-3xl shadow-lg ${item.shadow}
                shrink-0 flex items-center justify-center aspect-square w-16 h-16
            `}>
            {item.icon}
          </div>

          <div className="flex flex-col justify-center w-full z-10">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 font-medium mb-2 leading-tight">
              {item.desc}
            </p>
            {/* Tags - Compact Row */}
            <div className="flex flex-wrap gap-1.5">
              {item.levels.map((level, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md border border-gray-200"
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
  <div className="flex flex-col items-center justify-center p-6 bg-white/50 border border-white/60 rounded-2xl shadow-sm backdrop-blur-sm group hover:bg-white/80 transition-colors">
    <div className={`text-4xl mb-3 ${stat.color} drop-shadow-sm group-hover:scale-110 transition-transform duration-300`}>
      {stat.icon}
    </div>
    <div className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
      {stat.number}
    </div>
    <div className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-widest mt-1">
      {stat.label}
    </div>
  </div>
)



/* -------------------- Main Home Page -------------------- */
export default function Home() {
  const heroRef = useRef(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  return (
    // Removed mt-[80px] as per user request to remove top gap
    <div className="text-gray-900 overflow-x-hidden font-sans min-h-screen rounded-2xl mt-0 md:mt-0">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="hero"
        ref={heroRef}
        className=" flex flex-col items-center justify-center px-0 overflow-hidden pt-0 md:pt-17 -mt-4 "
      >
        {/* Dynamic Background Elements */}
        {/* Decorative background - hidden on small screens to prevent overflow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-float" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-float delay-1000" />
          <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-[80px] mix-blend-multiply animate-float delay-2000" />
        </div>

        {/* --- NEW UNIQUE TEXT FOR MOBILE --- 
           block: Visible by default
           md:hidden: Hidden on medium screens (Desktop/Tablet)
           font-serif italic: Unique font style
        */}
        <p className="mt-8 block md:hidden text-4xl font-serif italic font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-blue-600 drop-shadow-sm relative z-20">

        </p>

        {/* Content Container */}
        <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center p-4">

          {/* Logo with Glow */}
          <motion.div
            fetchPriority="high"

            className="mb-8 relative group"
          >
            <div className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-34 h-34 md:w-32 md:h-32 mx-auto rounded-full p-1 mt-4 md:mt-3">
              <img src="/logo.png" alt="Harmonix home Logo" title="start image" className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-600 uppercase">
              Admissions Open 2026
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className="block text-gray-900 mb-2 drop-shadow-sm font-serif">Classique with</span>
            <span className="bg-clip-text text-gray-900 animate-gradient-x bg-size-[200%_auto] font-serif">
              Harmonix
            </span>
          </motion.h1>


          <p
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium font-serif"
          >
            Place where passion ignites learning and excellence resonates.
          </p>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row w-full max-w-md gap-4 justify-center mx-auto mt-0 md:-mt-5"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-white/50 backdrop-blur-sm border-2 cursor-pointer"
              onClick={() => scrollToSection("learning")}
            >
              Explore Programs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-white/50 backdrop-blur-sm border-2 cursor-pointer"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Free Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---------------- WORLD-CLASS TRAINING SECTION ---------------- */}
      <section
        id="programs"
        className="pt-8 pb-8 md:pt-12 md:pb-12 px-4 relative overflow-hidden bg-linear-to-b from-violet-50/50 via-white to-sky-50/50"
      >
        {/* Floating Music Notes Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-[10%] text-6xl text-violet-200/40 animate-bounce" style={{ animationDuration: '3s' }}>♪</div>
          <div className="absolute top-32 right-[15%] text-4xl text-sky-200/50 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>♫</div>
          <div className="absolute bottom-24 left-[20%] text-5xl text-rose-200/40 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>♬</div>
          <div className="absolute bottom-40 right-[8%] text-3xl text-amber-200/50 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}>♩</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              World-Class{' '}
              <span className="relative">
                <span className="text-violet-600">Programs</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-linear-to-r from-violet-400 to-sky-400 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Learn from expert musicians with personalized curriculum
            </p>
          </motion.div>

          {/* Instrument Cards - Clean Light Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {instruments.map((item, index) => {
              const lightColors = [
                // 🎸 Guitar: Warm Beige (matching image background)
                'bg-[#ECDEC0]/90 border-[#D4C3A3] hover:border-[#BFAF89]',
                // 🎹 Piano: Warm Linen / Walnut
                'bg-[#EDE8DF]/90 border-[#C8B89A] hover:border-[#8B6545]',
                // 🎻 Violin: Varnished Wood (Amber/Orange-Brown)
                'bg-orange-50/90 border-orange-900/30 hover:border-orange-900/60',
                // 🎙️ Vocal (Microphone): Metallic Silver / Steel
                'bg-slate-100/90 border-slate-400/40 hover:border-slate-500/70'
              ];

              const iconBgColors = [
                // 🎸 Dark Sunburst Wood
                'bg-[#4A200B] text-[#DDA54B]',
                // 🎹 Polished Walnut & Ivory
                'bg-[#4A2C0A] text-[#F5ECD7]',
                // 🎻 Varnished Wood
                'bg-orange-900 text-orange-50',
                // 🎙️ Metallic Charcoal / Silver
                'bg-slate-600 text-slate-50'
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div
                    onClick={() => scrollToSection("programs")}
                    className={`
                      relative overflow-hidden
                      group h-full rounded-3xl border
                      ${lightColors[index]}
                      transition-all duration-300
                      hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)]
                      hover:-translate-y-2
                    `}
                  >
                    {/* Image with title overlay */}
                    <div className="relative w-full h-44 md:h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover group-hover:scale-107 transition-transform duration-700 ease-out ${item.imagePosition || 'object-center'}`}
                      />

                      {/* Subtle dark vignette at bottom edge only */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Gradient fade strip */}
                    <div className={`h-2 w-full bg-linear-to-b ${item.imageFade} opacity-80`} />

                    {/* Content body */}
                    <div className="p-4 flex flex-col gap-3">
                      {/* Title & desc */}
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Level pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.levels.map((level, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1
                              rounded-full bg-white/80 text-gray-600 border border-gray-200 shadow-xs backdrop-blur-sm"
                          >
                            {level}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full bg-gray-200/70" />

                      {/* Explore row */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Explore</span>
                        <span className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300 text-base font-bold">→</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >

            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-500 font-semibold rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer"
              onClick={() => scrollToSection("learning")}>
              <span>View All Programs</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>

            </button>
          
          </motion.div>
        </div>
      </section>


      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-2 md:py-4 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-linear-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-slate-900">
              Start Your <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">Journey</span> Today
            </h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto text-base leading-relaxed">
              Experience the joy of music with a free demo session. No commitment required, just passion.
            </p>

            <Button
              size="lg"
              className="w-full sm:w-auto text-base py-4 px-10 cursor-pointer"
              onClick={() => window.open(CONTACT.whatsapp, '_blank')}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  )
}