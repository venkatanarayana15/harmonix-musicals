import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaArrowRight } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import SEO from "../components/SEO";
import { CONTACT } from "../components/constant/contact";

const instruments = [
    {
        name: "Guitar",
        desc: "Master acoustic and electric guitar with our comprehensive curriculum covering scales, chords, and improvisation.",
        icon: "🪕",
        level: "Beginner to Advanced",
        gradient: "from-amber-400 to-orange-500",
        bgGlow: "bg-amber-400/20"
    },
    {
        name: "Piano",
        desc: "From classical sonatas to modern pop chords, learn the theory and technique to play with confidence.",
        icon: "🎼",
        level: "Beginner to Advanced",
        gradient: "from-purple-400 to-indigo-500",
        bgGlow: "bg-purple-400/20"
    },
    {
        name: "Violin",
        desc: "Develop perfect pitch and bowing technique with our structured violin method for all ages.",
        icon: "🎵",
        level: "Beginner to Intermediate",
        gradient: "from-rose-400 to-pink-500",
        bgGlow: "bg-rose-400/20"
    },
    {
        name: "Vocal",
        desc: "Find your voice with professional training in breath control, range expansion, and performance skills.",
        icon: "🎙️",
        level: "All Levels",
        gradient: "from-blue-400 to-cyan-500",
        bgGlow: "bg-blue-400/20"
    },
];

export default function Learning({ seoDisabled = false }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <PageContainer>
            {!seoDisabled && (
                <SEO
                    title="Learning Curriculum"
                    description="Explore the music curriculum at Harmonix Musicals. Comprehensive lessons for Guitar, Piano, Violin, and Vocals for all skill levels."
                />
            )}

            {/* Hero Section */}
            <section className="relative pt-6 pb-8 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-6">
                            <FaMusic className="text-purple-500 text-sm" />
                            <span className="text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">Our Programs</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                            Discover Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                                Musical Path
                            </span>
                        </h2>

                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Choose your instrument and begin your musical journey with structured lessons, expert guidance, and a supportive community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Instruments Grid */}
            <section className="py-6 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                        {instruments.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className={`relative h-full bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                                    {/* Background glow on hover */}
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                                        {/* Icon */}
                                        <div className="text-5xl md:text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>

                                        {/* Name with gradient underline */}
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 relative">
                                            {item.name}
                                            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-300 rounded-full`} />
                                        </h2>

                                        {/* Description */}
                                        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                                            {item.desc}
                                        </p>

                                        {/* Level badge */}
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold shadow-md`}>
                                            {item.level}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-6 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-8 md:p-10 text-center"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                            Not sure which instrument to choose?
                        </h2>
                        <p className="text-slate-500 mb-6 max-w-lg mx-auto">
                            Book a free consultation session with our experts and find your perfect match.
                        </p>
                        <button
                            onClick={() => window.open(CONTACT.whatsapp, '_blank')}
                            className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-b from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                        >
                            <span>Book Free Trial</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </PageContainer>
    );
}
