import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMusic, FaUsers, FaHeart, FaStar, FaQuoteLeft, FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import SEO from "../components/SEO";

const MENTORS_API = import.meta.env.VITE_MENTOR_API;

export default function About({ seoDisabled = false }) {
  const [mentors, setMentors] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  // Show 4 mentors initially to create a perfect row on desktop
  const visibleMentors = showAll ? mentors : mentors.slice(0, 4);

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
      <section className="relative pt-12 pb-16 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-8 transition-transform hover:scale-105 duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shadow-[0_0_8px_rgba(147,51,234,0.5)]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Est. 2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Does your sound <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                have a home?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4 font-light">
              Harmonix is a sanctuary for sound, where classical tradition meets the edge of contemporary innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MENTORS SECTION (UPDATED) --- */}
      <section className="py-16 bg-white" id="mentors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* Expanded width for 4 cols */}
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Our Mentors</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Learn from the Masters</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          {mentors.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-purple-200 border-t-purple-600"></div>
              <p className="mt-4 text-slate-500 text-sm">Loading mentors...</p>
            </div>
          ) : (
            <>
              {/* GRID CONFIGURATION: Pro Max Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {visibleMentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card Container */}
                    <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-out border border-slate-100 dark:border-slate-700/50 flex flex-col items-center text-center overflow-hidden hover:-translate-y-2">

                      {/* Decorative Background Gradient (Subtle) */}
                      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-700/20 dark:to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>

                      {/* Image Wrapper with Dynamic Ring */}
                      <div className="relative mb-5 z-10 w-28 h-28 md:w-32 md:h-32">
                        {/* Animated Ring on Hover */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

                        <div className="relative w-full h-full rounded-full p-1 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                          {mentor.img ? (
                            <img
                              src={mentor.img}
                              alt={mentor.name}
                              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-300">
                              <FaUsers size={32} />
                            </div>
                          )}
                        </div>

                        {/* Badge Icon */}
                        <div className="absolute bottom-1 right-1 w-8 h-8 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-md border border-slate-50 dark:border-slate-700 text-purple-600 z-20 group-hover:scale-110 transition-transform duration-300">
                          <FaMusic className="text-xs" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 w-full flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 transition-colors duration-300">
                            {mentor.name}
                          </h4>
                          <div className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-3">
                            <p className="text-[11px] font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">
                              {mentor.instrument || "Instructor"}
                            </p>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                            {mentor.description || "Passionate educator dedicated to nurturing musical talent and creative expression."}
                          </p>
                        </div>

                        {/* Social/Action Placeholder (Could be expanded) */}
                        <div className="pt-4 border-t border-slate-50 dark:border-slate-700/50 w-full flex justify-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Show More Button */}
              {mentors.length > 4 && (
                <div className="mt-10 text-center">
                  <button
                    onClick={toggleShowAll}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-full hover:bg-slate-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    {showAll ? (
                      <>View Less <FaChevronUp className="group-hover:-translate-y-0.5 transition-transform" /></>
                    ) : (
                      <>View All Mentors <FaChevronDown className="group-hover:translate-y-0.5 transition-transform" /></>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* --- MISSION & STORY --- */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-purple-400"></div>
                <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest">Our Philosophy</h2>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                More than notes. <br />
                We teach <span className="italic font-serif text-slate-400">musicality.</span>
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                Founded two decades ago, our mission was simple: bridge the gap between rigorous academic music education and the joy of creative expression. We believe every student has a unique voice waiting to be heard.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Classical Foundation</h4>
                  <p className="text-sm text-slate-500">Built on time-honored techniques.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Modern Application</h4>
                  <p className="text-sm text-slate-500">Applied to today's music landscape.</p>
                </div>
              </div>
            </motion.div>

            {/* Visual/Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden md:block" // Hidden on very small mobile to save space, or keep if preferred
            >
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-xl max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <FaMusic size={150} />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 z-20"
                >
                  <FaQuoteLeft className="text-purple-400 mb-3 text-2xl opacity-50" />
                  <p className="text-slate-100 text-sm font-light italic leading-relaxed mb-4">
                    "Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                    <span className="text-[10px] font-bold text-purple-200 uppercase tracking-widest">Plato</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-md ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-12 bg-slate-500 text-white rounded-3xl overflow-hidden">
        {/* Background Overlay with Gradient & Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-indigo-400/60 backdrop-blur-md" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">
            Ready to start your journey?
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Join a community that celebrates every note. Whether you are a beginner or an advanced player.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all active:scale-95 shadow-lg text-sm cursor-pointer">
              Book a Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg text-sm flex items-center justify-center gap-2 cursor-pointer border border-slate-700">
              View Programs <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}