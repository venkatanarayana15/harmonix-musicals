import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import { CONTACT } from "../components/constant/contact";

const instruments = [
    {
        name: "Guitar",
        desc: "Master acoustic and electric guitar with our comprehensive curriculum covering scales, chords, and improvisation.",
        icon: "🎸",
        level: "Beginner to Advanced",
        color: "text-gray-400"
    },
    {
        name: "Piano",
        desc: "From classical sonatas to modern pop chords, learn the theory and technique to play with confidence.",
        icon: "🎹",
        level: "Beginner to Advanced",
        color: "text-gray-400"
    },
    {
        name: "Violin",
        desc: "Develop perfect pitch and bowing technique with our structured violin method for all ages.",
        icon: "🎻",
        level: "Beginner to Intermediate",
        color: "text-gray-400"
    },
    {
        name: "Vocal",
        desc: "Find your voice with professional training in breath control, range expansion, and performance skills.",
        icon: "🎤",
        level: "All Levels",
        color: "text-gray-400"
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 md:mb-12"
            >
                {!seoDisabled && (
                    <SEO
                        title="Learning Curriculum"
                        description="Explore the music curriculum at Harmonix Musicals. Comprehensive lessons for Guitar, Piano, Violin, and Vocals for all skill levels."
                    />
                )}
                <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
                    Our <span className="bg-linear-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">Curriculum</span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                    Choose your instrument and begin your musical journey with structured lessons, expert guidance, and a supportive community.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
                {instruments.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <motion.div
                            whileInView={isMobile ? { scale: 1.05, y: -5 } : {}}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card className={`h-full flex flex-col items-center text-center p-6 md:p-8 transition-all duration-300 ${isMobile ? 'border-gray-600/30 bg-white/5 shadow-lg shadow-gray-600/10' : 'hover:scale-105 hover:border-gray-600/50 hover:shadow-gray-600/20 hover:bg-white/10'} active:scale-95`}>
                                <div className="text-5xl md:text-6xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h2 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${item.color}`}>{item.name}</h2>
                                <p className="text-gray-400 text-sm md:text-base mb-5 md:mb-6 flex-1 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="w-full pt-4 md:pt-6 border-t border-white/10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs md:text-sm font-medium text-gray-300 border border-white/5">
                                        {item.level}
                                    </span>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

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
                    className="px-8 py-3 bg-gradient-to-b from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-[6px_6px_12px_#c4b5fd,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#c4b5fd,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#7c3aed,inset_-3px_-3px_6px_#a78bfa] transition-all cursor-pointer"
                >
                    Book Free Trial
                </button>
            </motion.div>
        </PageContainer>
    );
}
