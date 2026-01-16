import { motion } from "framer-motion";
import { FaMusic, FaUsers, FaTrophy, FaCalendarAlt, FaGraduationCap, FaHeart, FaStar, FaLightbulb, FaRocket } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";

export default function About() {
  const stats = [
    { icon: <FaUsers />, value: "500+", label: "Happy Students", color: "text-blue-500" },
    { icon: <FaCalendarAlt />, value: "20+", label: "Years Experience", color: "text-purple-500" },
    { icon: <FaTrophy />, value: "100+", label: "Competitions Won", color: "text-amber-500" },
    { icon: <FaGraduationCap />, value: "15+", label: "Expert Trainers", color: "text-emerald-500" },
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Passion First",
      description: "We teach with love for music, inspiring students to find their own musical voice.",
      color: "bg-rose-50 text-rose-600 border-rose-200"
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      description: "Commitment to top standards in curriculum, teaching, and student outcomes.",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building a supportive network where musicians grow together and collaborate.",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: <FaMusic />,
      title: "Creativity",
      description: "Encouraging innovation, improvisation, and personal expression in every lesson.",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section - Reduced bottom padding to pull Stats closer */}
      <section className="relative py-10 md:py-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-50/50 to-transparent -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1.5 px-5 rounded-full bg-white border border-purple-100 text-purple-600 text-sm font-semibold mb-6 shadow-sm"
          >
            ✨ Established 2003
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight text-gray-900 font-display">
            We Create
            <span className="block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent bg-size-[200%_auto] animate-shimmer pt-2">
              Musicians
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            More than just a school. We are a community dedicated to nurturing talent, creativity, and confidence.
          </p>
        </motion.div>
      </section>

      {/* Stats Section - Tighter padding to fit snugly under Hero */}
      <section className="py-6 md:py-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-5 md:p-6 rounded-2xl text-center border border-white/50 hover:border-purple-200 transition-all duration-300 shadow-sm"
            >
              <div className={`text-3xl md:text-4xl mb-3 flex justify-center ${stat.color} filter drop-shadow-sm`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1 font-display">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision - Significantly reduced vertical padding */}
      <section className="py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-gray-100 shadow-lg shadow-purple-900/5 relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <FaLightbulb size={100} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-purple-600 rounded-full block"></span>
                Our Mission
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                To provide exceptional music education that blends classical foundations with contemporary techniques, empowering students to express their unique musical identity.
              </p>
              <div className="pl-4 border-l-4 border-purple-200 italic text-gray-600 font-medium text-sm">
                "We do not just teach music, we cultivate artists."
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-gray-100 shadow-lg shadow-blue-900/5 relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <FaRocket size={100} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full block"></span>
                Our Vision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                To create a world where every individual has access to quality music education, fostering a global community of confident performers and creators.
              </p>
              <div className="pl-4 border-l-4 border-blue-200 italic text-gray-600 font-medium text-sm">
                "Building bridges through music, one note at a time."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Tighter Header spacing */}
      <section className="py-8 md:py-12 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">
            Our Core Values
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto mt-3 rounded-full opacity-20"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${value.color} bg-opacity-50 hover:bg-opacity-100 hover:shadow-md border-opacity-50`}
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </PageContainer>
  );
}