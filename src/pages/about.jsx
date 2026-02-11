import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMusic, FaUsers, FaHeart, FaStar, FaQuoteLeft, FaArrowRight, FaChevronDown, FaChevronUp, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import SEO from "../components/SEO";

const MENTORS_API = import.meta.env.VITE_MENTOR_API;

export default function About({ seoDisabled = false }) {
  const [mentors, setMentors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [currentStudioIndex, setCurrentStudioIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive mentor display
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const studioImages = [
    { src: "/stud1.jpeg", title: "Recording Studio", desc: "Professional recording equipment", alt: "Harmonix Musicals professional recording studio with high-end audio equipment" },
    { src: "/stud2.jpeg", title: "Practice Rooms", desc: "Soundproofed individual spaces", alt: "Soundproofed practice rooms at Harmonix Musicals for individual music sessions" },
    { src: "/stud3.jpeg", title: "Piano Studio", desc: "Grand piano & keyboard lessons", alt: "Piano studio at Harmonix Musicals featuring grand piano for keyboard lessons" },
    { src: "/stud4.jpeg", title: "Guitar Corner", desc: "Acoustic & electric sessions", alt: "Guitar corner at Harmonix Musicals for acoustic and electric guitar lessons" },
    { src: "/stud5.jpeg", title: "Performance Area", desc: "Live performances & recitals", alt: "Performance area at Harmonix Musicals for live recitals and student performances" },
    { src: "/stud6.png", title: "Our Studio", desc: "Where music comes to life", alt: "Harmonix Musicals main studio space where music education comes to life" }
  ];

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(MENTORS_API);
        if (!response.ok) throw new Error('Failed to fetch mentors');
        const data = await response.json();
        const mentorsList = Array.isArray(data) ? data : (data.data || []);
        setMentors(mentorsList);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  // Auto-slide for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentValueIndex]);

  // Auto-slide for studio carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudioIndex(prev => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentStudioIndex]);

  // Show 3 mentors on mobile (1 row) and 4 on desktop initially
  const initialCount = isMobile ? 3 : 4;
  const visibleMentors = showAll ? mentors : mentors.slice(0, initialCount);

  const toggleShowAll = () => {
    if (showAll) {
      const mentorsSection = document.getElementById('mentors');
      if (mentorsSection) {
        mentorsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAll(!showAll);
  };

  const values = [
    {
      icon: <FaHeart />,
      title: "Passion First",
      description: "We teach with love, inspiring students to find their own unique voice.",
      gradient: "from-rose-400 to-red-500",
      shadow: "shadow-rose-100"
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      description: "Uncompromising standards in curriculum, technique, and performance.",
      gradient: "from-amber-400 to-orange-500",
      shadow: "shadow-amber-100"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "A supportive network where musicians grow and collaborate together.",
      gradient: "from-blue-400 to-indigo-500",
      shadow: "shadow-blue-100"
    },
    {
      icon: <FaMusic />,
      title: "Creativity",
      description: "Innovation and improvisation are at the heart of every lesson we teach.",
      gradient: "from-purple-400 to-violet-500",
      shadow: "shadow-purple-100"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <PageContainer>
      {!seoDisabled && (
        <SEO
          title="About Us"
          description="Learn about Harmonix Musicals' philosphy, expert mentors, and our mission to bridge academic music education with creative expression."
        />
      )}
      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 pb-10 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-6 transition-transform hover:scale-105 duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Est. 2025</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Does your sound <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                have a home?
              </span>
            </h3>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 font-light">
              Harmonix is a sanctuary for sound, where classical tradition meets the edge of contemporary innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MENTORS SECTION (MINIMAL AVATAR DESIGN) --- */}
      <section className="py-12 bg-slate-50 relative overflow-hidden" id="mentors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-purple-400" />
              <span className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">Our Team</span>
              <div className="w-8 h-px bg-purple-400" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Meet Our Mentors
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-base max-w-xl mx-auto"
            >
              Passionate educators dedicated to your musical journey
            </motion.p>
          </div>

          {mentors.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-200 border-t-purple-600" />
              <p className="mt-4 text-slate-500 text-sm">Loading mentors...</p>
            </div>
          ) : (
            <>
              {/* Circular Avatars Grid */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
                {visibleMentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    {/* Avatar Container */}
                    <div className="relative mb-3 sm:mb-4">
                      {/* Animated ring on hover */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                      {/* Avatar */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-white p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {mentor.img ? (
                          <img
                            src={mentor.img}
                            alt={mentor.name}
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                            <FaUsers className="text-slate-400" size={24} />
                          </div>
                        )}
                      </div>

                      {/* Music badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <FaMusic className="text-white text-[10px] sm:text-xs" />
                      </div>
                    </div>

                    {/* Name */}
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {mentor.name}
                    </h4>

                    {/* Instrument */}
                    <span className="text-[10px] sm:text-xs font-medium text-purple-500 tracking-wide uppercase">
                      {mentor.instrument || "Instructor"}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Centered Modal Popup */}
              <AnimatePresence>
                {selectedMentor && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                    onClick={() => setSelectedMentor(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 20 }}
                      transition={{ type: "spring", damping: 25, stiffness: 350 }}
                      className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Header Background with Gradient */}
                      <div className="relative h-28 sm:h-32 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                        {/* Close Button */}
                        <button
                          onClick={() => setSelectedMentor(null)}
                          className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all cursor-pointer"
                        >
                          <FaTimes size={14} />
                        </button>
                      </div>

                      {/* Avatar - Overlapping header */}
                      <div className="relative flex justify-center -mt-14 sm:-mt-16">
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-full bg-white" />
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            {selectedMentor.img ? (
                              <img
                                src={selectedMentor.img}
                                alt={selectedMentor.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                <FaUsers className="text-slate-400" size={32} />
                              </div>
                            )}
                          </div>
                          {/* Music badge */}
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                            <FaMusic className="text-white text-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 sm:px-8 pt-4 pb-6 sm:pb-8 text-center">
                        {/* Name & Role */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                          {selectedMentor.name}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 rounded-full text-xs sm:text-sm font-semibold text-purple-600 mb-5">
                          <FaMusic size={10} />
                          {selectedMentor.instrument || "Instructor"}
                        </span>

                        {/* Bio - Scrollable for long content */}
                        <div className="relative mb-5 max-h-40 sm:max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
                          <FaQuoteLeft className="absolute top-0 -left-1 text-purple-100" size={24} />
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-6">
                            {selectedMentor.description || "A passionate educator dedicated to nurturing musical talent and creative expression. With years of experience, they bring expertise and enthusiasm to every lesson."}
                          </p>
                        </div>

                        {/* Stats/Tags */}
                        <div className="flex items-center justify-center gap-3 mb-5">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-full">
                            <FaStar className="text-amber-500" size={12} />
                            <span className="text-xs font-semibold text-amber-700">Expert</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full">
                            <FaHeart className="text-blue-500" size={12} />
                            <span className="text-xs font-semibold text-blue-700">Mentor</span>
                          </div>
                        </div>

                        {/* Close Action */}
                        <button
                          onClick={() => setSelectedMentor(null)}
                          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-200 active:scale-[0.98] transition-all cursor-pointer"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Show More Button */}
              {mentors.length > initialCount && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <button
                    onClick={toggleShowAll}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-full hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    {showAll ? (
                      <>View Less <FaChevronUp className="group-hover:-translate-y-0.5 transition-transform" /></>
                    ) : (
                      <>View All Mentors <FaChevronDown className="group-hover:translate-y-0.5 transition-transform" /></>
                    )}
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- CORE VALUES CAROUSEL --- */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-purple-400" />
              <span className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">What We Stand For</span>
              <div className="w-8 h-px bg-purple-400" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Carousel for all screens */}
          <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden px-4 md:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentValueIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${values[currentValueIndex].gradient} flex items-center justify-center text-white text-3xl md:text-4xl mb-6 shadow-lg ${values[currentValueIndex].shadow}`}>
                    {values[currentValueIndex].icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{values[currentValueIndex].title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                    {values[currentValueIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentValueIndex(prev => prev === 0 ? values.length - 1 : prev - 1)}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all cursor-pointer border border-slate-100"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => setCurrentValueIndex(prev => prev === values.length - 1 ? 0 : prev + 1)}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all cursor-pointer border border-slate-100"
            >
              <FaChevronRight size={14} />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {values.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentValueIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentValueIndex
                    ? 'bg-purple-600 w-8'
                    : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                    }`}
                />
              ))}
            </div>

            {/* Value preview indicators */}
            <div className="hidden md:flex justify-center gap-4 mt-8">
              {values.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentValueIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentValueIndex
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                >
                  <span className={`text-lg ${idx === currentValueIndex ? '' : 'opacity-60'}`}>{item.icon}</span>
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STUDIO GALLERY SECTION --- */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-purple-400" />
              <span className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">Our Space</span>
              <div className="w-8 h-px bg-purple-400" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Inside Our Studio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-base max-w-xl mx-auto"
            >
              Where creativity meets comfort — explore our state-of-the-art music learning spaces
            </motion.p>
          </div>

          {/* Carousel for all screens */}
          <div className="relative max-w-2xl mx-auto">
            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStudioIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative aspect-[4/3] md:aspect-[16/9]"
                >
                  <img
                    src={studioImages[currentStudioIndex].src}
                    alt={studioImages[currentStudioIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="text-white font-bold text-xl md:text-2xl mb-1">{studioImages[currentStudioIndex].title}</h4>
                      <p className="text-slate-300 text-sm md:text-base">{studioImages[currentStudioIndex].desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentStudioIndex(prev => prev === 0 ? studioImages.length - 1 : prev - 1)}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all cursor-pointer"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentStudioIndex(prev => prev === studioImages.length - 1 ? 0 : prev + 1)}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-purple-600 hover:scale-110 transition-all cursor-pointer"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Counter Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-medium">{currentStudioIndex + 1} / {studioImages.length}</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6 px-4 overflow-x-auto pb-2">
              {studioImages.map((studio, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStudioIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 md:w-20 md:h-16 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${idx === currentStudioIndex
                    ? 'ring-2 ring-purple-500 ring-offset-2 scale-105'
                    : 'opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={studio.src}
                    alt={studio.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Dot Indicators (mobile only) */}
            <div className="flex md:hidden justify-center gap-2 mt-4">
              {studioImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStudioIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentStudioIndex
                    ? 'bg-purple-600 w-6'
                    : 'bg-slate-300 hover:bg-slate-400 w-2'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 md:p-10 text-center mx-4 md:mx-8 my-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
          Ready to start your journey?
        </h2>
        <p className="text-slate-500 mb-6 max-w-lg mx-auto">
          Join a community that celebrates every note. Whether you are a beginner or an advanced player.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {/* Primary Button */}
          <button className="group w-full sm:w-auto px-8 py-3 bg-gradient-to-b from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 text-sm cursor-pointer flex items-center justify-center gap-2">
            <span>Book a Free Trial</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl border border-purple-200 hover:border-purple-300 hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 text-sm cursor-pointer">
            View Programs
          </button>
        </div>
      </section>


    </PageContainer >
  );
}