import { useState, useEffect } from "react"
import { 
  FaMusic, 
  FaUsers, 
  FaTrophy, 
  FaCalendarAlt,
  FaGraduationCap,
  FaMicrophoneAlt,
  FaHeart,
  FaStar
} from "react-icons/fa"
import { GiGuitar, GiGrandPiano, GiViolin } from "react-icons/gi"
import { motion } from "framer-motion"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Happy Students", color: "from-blue-500 to-cyan-500" },
    { icon: <FaCalendarAlt />, value: "20+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: <FaTrophy />, value: "100+", label: "Competitions Won", color: "from-orange-500 to-yellow-500" },
    { icon: <FaGraduationCap />, value: "15+", label: "Expert Trainers", color: "from-green-500 to-emerald-500" }
  ]

  const values = [
    {
      icon: <FaHeart className="text-red-400" />,
      title: "Passion First",
      description: "We teach with love for music, inspiring students to find their own musical voice."
    },
    {
      icon: <FaStar className="text-yellow-400" />,
      title: "Excellence",
      description: "Commitment to highest standards in curriculum, teaching, and student outcomes."
    },
    {
      icon: <FaUsers className="text-indigo-400" />,
      title: "Community",
      description: "Building a supportive network where musicians grow together and collaborate."
    },
    {
      icon: <FaMusic className="text-green-400" />,
      title: "Creativity",
      description: "Encouraging innovation, improvisation, and personal expression in every lesson."
    }
  ]

  const instructors = [
    { name: "Priya Sharma", instrument: "Piano", experience: "12 years", specialty: "Classical & Jazz", emoji: "🎹" },
    { name: "Raj Mehta", instrument: "Guitar", experience: "15 years", specialty: "Fingerstyle & Blues", emoji: "🎸" },
    { name: "Ananya Patel", instrument: "Violin", experience: "10 years", specialty: "Carnatic & Western", emoji: "🎻" },
    { name: "Arjun Kapoor", instrument: "Vocals", experience: "8 years", specialty: "Hindustani & Pop", emoji: "🎤" }
  ]

  const timeline = [
    { year: "2003", event: "Founded with 3 instructors" },
    { year: "2008", event: "First student performance at NCPA" },
    { year: "2015", event: "Expanded to 4 instruments" },
    { year: "2020", event: "Launched online classes" },
    { year: "2023", event: "500+ students milestone" }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-indigo-900/30 rounded-full border border-indigo-700/50">
            <span className="text-indigo-400">🎵</span>
            <span className="text-sm font-semibold text-indigo-300">Our Story Since 2003</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            More Than Just a <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Music School
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate music academy dedicated to nurturing talent,
            creativity, and confidence through structured learning and
            transformative performance experiences.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center group-hover:border-gray-700 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-900/30 rounded-xl">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide exceptional music education that blends classical foundations
                with contemporary techniques, empowering students to express their
                unique musical identity while mastering their craft.
              </p>
              <div className="mt-8 p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                <p className="text-blue-300 italic">
                  "We don't just teach music, we cultivate artists."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-xl">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To create a world where every individual has access to quality
                music education, fostering a global community of confident performers,
                innovative creators, and lifelong music appreciators.
              </p>
              <div className="mt-8 p-4 bg-purple-900/20 rounded-xl border border-purple-800/30">
                <p className="text-purple-300 italic">
                  "Building bridges through music, one note at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-indigo-400">Core Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every lesson, every performance, and every student's journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-indigo-400">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">Two decades of musical excellence and growth</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'} pl-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-1/2 top-4 w-4 h-4 bg-indigo-500 rounded-full border-4 border-black -translate-x-1/2"></div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-indigo-400 mb-2">{item.year}</div>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet Our Trainers */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-indigo-400">Maestros</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn from accomplished musicians who are passionate about teaching
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{instructor.emoji}</div>
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <div className="text-indigo-400 font-medium">{instructor.instrument}</div>
                  </div>
                  <div className="text-xs bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full">
                    {instructor.experience}
                  </div>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="font-semibold">Specializes in:</span> {instructor.specialty}
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          
          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your <span className="text-indigo-400">Musical Journey</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of passionate learners and discover the musician within you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Book Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-700 hover:bg-white/10 rounded-full font-bold text-lg transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(100%) rotate(12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  )
}