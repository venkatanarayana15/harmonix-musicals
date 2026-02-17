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
    icon: <FaGuitar />,
    title: "Guitar",
    desc: "Acoustic & Electric mastery",
    levels: ["Beginner", "Pro"],
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/30"
  },
  {
    icon: <FaMusic />,
    title: "Piano",
    desc: "Classical to Modern Keys",
    levels: ["All Ages", "Expert"],
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/30"
  },
  {
    icon: <div className="font-serif italic text-2xl">Violin</div>,
    title: "Violin",
    desc: "Traditional & Western",
    levels: ["Suzuki", "Grade"],
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30"
  },
  {
    icon: <FaMicrophoneAlt />,
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-34 h-34 md:w-32 md:h-32 mx-auto rounded-full p-1 bg-linear-to-br from-white to-gray-200 shadow-2xl mt-4 md:mt-3">
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
            <span className="block text-gray-900 mb-2 drop-shadow-sm">Find Your</span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient-x bg-size-[200%_auto]">
              Rhythm & Soul
            </span>
          </motion.h1>


          <p
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium font-serif"
          >
            Chennai's premier destination for professional music education. Join a community of passionate musicians.
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
              className="w-full shadow-xl shadow-purple-500/30 cursor-pointer bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x text-white border-none"
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
                'bg-orange-50 border-orange-200/60 hover:border-orange-300',
                'bg-sky-50 border-sky-200/60 hover:border-sky-300',
                'bg-emerald-50 border-emerald-200/60 hover:border-emerald-300',
                'bg-violet-50 border-violet-200/60 hover:border-violet-300'
              ];
              const iconBgColors = [
                'bg-orange-100 text-orange-500',
                'bg-sky-100 text-sky-500',
                'bg-emerald-100 text-emerald-500',
                'bg-violet-100 text-violet-500'
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div
                    onClick={() => scrollToSection("programs")}
                    className={`
                      group cursor-pointer h-full p-5 md:p-6 rounded-2xl border-2
                      ${lightColors[index]}
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                    `}
                  >
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 md:w-14 md:h-14 rounded-xl ${iconBgColors[index]}
                      flex items-center justify-center text-xl md:text-2xl mb-4
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      {item.icon}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Level Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.levels.map((level, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 
                            rounded-full bg-white/80 text-gray-600 border border-gray-200/80"
                        >
                          {level}
                        </span>
                      ))}
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
            <Link to="/learning">
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-violet-200 text-violet-600 font-semibold rounded-full hover:bg-violet-50 hover:border-violet-300 transition-all duration-300">
                <span>View All Programs</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </Link>
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