import { motion } from "framer-motion";
import { FaMusic, FaUsers, FaTrophy, FaCalendarAlt, FaGraduationCap, FaHeart, FaStar, FaLightbulb, FaRocket, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";

export default function About() {
  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Happy Students" },
    { icon: <FaCalendarAlt />, value: "20+", label: "Years Experience" },
    { icon: <FaTrophy />, value: "100+", label: "Awards Won" },
    { icon: <FaGraduationCap />, value: "15+", label: "Expert Faculty" },
  ];

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
      {/* --- HERO SECTION --- */}
      <section className="relative pt-8 pb-12 md:pb-30 overflow-hidden bg-slate-50">
        {/* Professional Abstract Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">Est. 2025</span>
            </div>

            <h3 className="text-4xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Cultivating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Artists of Tomorrow
              </span>
            </h3>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Harmonix isn't just a music school. It's a sanctuary for sound,
              where classical tradition meets contemporary innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING STATS STRIP --- */}
      {/* Creates depth by overlapping the Hero and the next section */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 -mt-16 md:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100"
        >
          {stats.map((stat, index) => (
            <div key={index} className={`text-center ${index % 2 !== 0 ? 'border-l border-slate-100 md:border-none' : ''}`}>
              <div className="text-purple-600 text-3xl mb-3 flex justify-center opacity-80">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- MISSION & STORY (Split Layout) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">Our Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                More than notes on a page. <br />
                We teach <span className="italic font-serif text-slate-500">musicality.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded two decades ago, our mission was simple: bridge the gap between rigorous academic music education and the joy of creative expression.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Today, we are proud to be a leading institution where students don't just learn to play instruments—they learn to speak the language of music fluently, confidently, and passionately.
              </p>

              <div className="flex gap-4">
                <div className="pl-4 border-l-4 border-purple-200">
                  <h4 className="font-bold text-slate-900">Classical Foundation</h4>
                  <p className="text-sm text-slate-500">Technical Mastery</p>
                </div>
                <div className="pl-4 border-l-4 border-blue-200">
                  <h4 className="font-bold text-slate-900">Modern Application</h4>
                  <p className="text-sm text-slate-500">Creative Freedom</p>
                </div>
              </div>
            </motion.div>

            {/* Visual/Image Area with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-2xl">
                {/* Abstract Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-50" />

                {/* You would ideally replace this with a real image: <img src="..." className="object-cover w-full h-full" /> */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <FaMusic size={200} />
                </div>

                {/* Floating Quote Card - Creates Depth */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  // CHANGES: Dark slate background, white text, glowing border effect
                  className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 z-20"
                >
                  <FaQuoteLeft className="text-purple-400 mb-4 text-3xl opacity-50" />

                  <p className="text-slate-100 text-lg font-light italic leading-relaxed mb-6">
                    "Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything."
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Plato</span>
                    </div>
                    {/* Decorative element */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -z-10 top-10 -right-10 text-slate-200">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES (Stacked Mobile UI) --- */}
      <section className="py-6 md:py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto px-2 md:px-3"> {/* Reduced px for mobile */}
          <div className="text-center mb-5 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Our Core Values</h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-3 text-slate-600 text-sm md:text-base">The principles that guide every lesson we teach</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // CHANGE: grid-cols-1 on mobile, grid-cols-2 on tablet (md), grid-cols-4 on desktop (lg)
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                // Removed hover y-offset on mobile (can cause sticking), kept for desktop
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-xl md:text-2xl mb-4 md:mb-6 shadow-md ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-10 bg-slate-500 text-white overflow-hidden relative rounded-3xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500 via-slate-900 to-slate-900"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join a community that celebrates every note. Whether you are a beginner or an advanced player, we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-purple-50 transition-colors shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 duration-200 cursor-pointer">
              Book a Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full transition-colors shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 duration-200 cursor-pointer flex items-center justify-center gap-2">
              View Programs <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}