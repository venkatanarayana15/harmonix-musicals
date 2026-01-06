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
    { icon: <FaUsers />, value: "500+", label: "Happy Students", color: "text-gray-400" },
    { icon: <FaCalendarAlt />, value: "20+", label: "Years Experience", color: "text-gray-400" },
    { icon: <FaTrophy />, value: "100+", label: "Competitions Won", color: "text-gray-400" },
    { icon: <FaGraduationCap />, value: "15+", label: "Expert Trainers", color: "text-gray-400" },
  ];

  const values = [
    {
      icon: <FaHeart className="text-gray-400" />,
      title: "Passion First",
      description: "We teach with love for music, inspiring students to find their own musical voice.",
    },
    {
      icon: <FaStar className="text-gray-400" />,
      title: "Excellence",
      description: "Commitment to top standards in curriculum, teaching, and student outcomes.",
    },
    {
      icon: <FaUsers className="text-gray-400" />,
      title: "Community",
      description: "Building a supportive network where musicians grow together and collaborate.",
    },
    {
      icon: <FaMusic className="text-gray-400" />,
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 py-8 md:py-12"
      >
        <span className="inline-block py-2 px-4 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6">
          ✨ Established 2003
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900">
          More Than Just a <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            Music School
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          We are a passionate music academy dedicated to nurturing talent, creativity, and confidence through
          structured learning and transformative performance experiences.
        </p>
      </motion.div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-12">
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
              <Card className={`text-center p-6 md:p-8 transition-all duration-300 ${isMobile ? 'border-purple-200 bg-purple-50 shadow-lg shadow-purple-200/20' : 'hover:bg-purple-50 hover:border-purple-200'} active:scale-[0.98] border border-gray-200`}>
                <div className="text-4xl md:text-5xl mb-4 flex justify-center text-purple-600">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
        <Card className="p-6 md:p-8 border border-gray-200 hover:border-purple-200 transition-colors duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="text-4xl md:text-5xl">🎯</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 md:mb-8 font-medium">
            To provide exceptional music education that blends classical foundations with contemporary techniques,
            empowering students to express their unique musical identity.
          </p>
          <div className="p-4 md:p-5 bg-purple-50 rounded-xl border border-purple-200 text-purple-900 italic text-sm md:text-base font-medium">
            "We do not just teach music, we cultivate artists."
          </div>
        </Card>
        <Card className="p-6 md:p-8 border border-gray-200 hover:border-purple-200 transition-colors duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="text-4xl md:text-5xl">✨</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 md:mb-8 font-medium">
            To create a world where every individual has access to quality music education, fostering a global
            community of confident performers and creators.
          </p>
          <div className="p-4 md:p-5 bg-purple-50 rounded-xl border border-purple-200 text-purple-900 italic text-sm md:text-base font-medium">
            "Building bridges through music, one note at a time."
          </div>
        </Card>
      </div>
      {/* Core Values */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Our <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Core Values</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileInView={isMobile ? { scale: 1.05, y: -5 } : {}}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.4 }}
            >
              <Card className={`p-6 md:p-7 h-full transition-all duration-300 border ${isMobile ? 'border-purple-200 bg-purple-50 shadow-lg shadow-purple-200/20' : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50'}`}>
                <div className="text-4xl md:text-5xl mb-5 md:mb-6">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Our <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-purple-300 md:-translate-x-1/2" />
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex md:justify-center items-center mb-6 md:mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 border-4 border-white z-10 md:-translate-x-1/2 flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <div className="w-full md:w-1/2 pl-14 md:pl-12 md:pr-12">
                <Card className={`p-5 md:p-6 border border-gray-200 hover:border-purple-200 transition-colors duration-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">{item.year}</div>
                  <p className="text-sm md:text-base text-gray-700 font-medium">{item.event}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
