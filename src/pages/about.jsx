import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaUsers, FaTrophy, FaCalendarAlt, FaGraduationCap, FaHeart, FaStar } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Happy Students", color: "text-blue-400" },
    { icon: <FaCalendarAlt />, value: "20+", label: "Years Experience", color: "text-pink-400" },
    { icon: <FaTrophy />, value: "100+", label: "Competitions Won", color: "text-yellow-400" },
    { icon: <FaGraduationCap />, value: "15+", label: "Expert Trainers", color: "text-green-400" },
  ];

  const values = [
    {
      icon: <FaHeart className="text-red-400" />,
      title: "Passion First",
      description: "We teach with love for music, inspiring students to find their own musical voice.",
    },
    {
      icon: <FaStar className="text-yellow-400" />,
      title: "Excellence",
      description: "Commitment to top standards in curriculum, teaching, and student outcomes.",
    },
    {
      icon: <FaUsers className="text-indigo-400" />,
      title: "Community",
      description: "Building a supportive network where musicians grow together and collaborate.",
    },
    {
      icon: <FaMusic className="text-green-400" />,
      title: "Creativity",
      description: "Encouraging innovation, improvisation, and personal expression in every lesson.",
    },
  ];

  const timeline = [
    { year: "2003", event: "Founded with 3 instructors" },
    { year: "2008", event: "First student performance at NCPA" },
    { year: "2015", event: "Expanded to 4 instruments" },
    { year: "2020", event: "Launched online classes" },
    { year: "2023", event: "500+ students milestone" },
  ];

  return (
    <PageContainer>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm font-medium mb-4">
          Established 2003
        </span>
        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
          More Than Just a <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Music School
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We are a passionate music academy dedicated to nurturing talent, creativity, and confidence through
          structured learning and transformative performance experiences.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileInView={isMobile ? { scale: 1.05, y: -5 } : {}}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.4 }}
            >
              <Card className={`text-center p-5 md:p-6 transition-all ${isMobile ? 'border-violet-500/30 bg-white/5 shadow-lg shadow-violet-500/10' : 'hover:bg-white/5'} active:scale-[0.98]`}>
                <div className={`text-3xl md:text-4xl mb-3 ${stat.color} flex justify-center`}>{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl">🎯</span>
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
            To provide exceptional music education that blends classical foundations with contemporary techniques,
            empowering students to express their unique musical identity.
          </p>
          <div className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10 text-indigo-300 italic text-sm md:text-base">
            "We do not just teach music, we cultivate artists."
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl">✨</span>
            <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
            To create a world where every individual has access to quality music education, fostering a global
            community of confident performers and creators.
          </p>
          <div className="p-3 md:p-4 bg-white/5 rounded-xl border border-white/10 text-pink-300 italic text-sm md:text-base">
            "Building bridges through music, one note at a time."
          </div>
        </Card>
      </div>

      {/* Core Values */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-10">
          Our <span className="text-violet-400">Core Values</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileInView={isMobile ? { scale: 1.05, y: -5 } : {}}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.4 }}
            >
              <Card className={`p-5 md:p-6 h-full transition-all ${isMobile ? 'border-violet-500/30 bg-white/5 shadow-lg shadow-violet-500/10' : ''}`}>
                <div className="text-3xl md:text-4xl mb-4 md:mb-5">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12">
          Our <span className="text-pink-400">Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex md:justify-center items-center mb-8 md:mb-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-slate-950 border-4 border-violet-500 z-10 md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <div className="w-full md:w-1/2 pl-14 md:pl-12 md:pr-12">
                <Card className={`p-5 md:p-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="text-xl md:text-2xl font-bold text-violet-400 mb-1">{item.year}</div>
                  <p className="text-sm md:text-base text-slate-300">{item.event}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
