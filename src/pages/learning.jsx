import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const instruments = [
    {
        name: "Guitar",
        desc: "Master acoustic and electric guitar with our comprehensive curriculum covering scales, chords, and improvisation.",
        icon: "🎸",
        level: "Beginner to Advanced",
        color: "text-orange-400"
    },
    {
        name: "Piano",
        desc: "From classical sonatas to modern pop chords, learn the theory and technique to play with confidence.",
        icon: "🎹",
        level: "Beginner to Advanced",
        color: "text-blue-400"
    },
    {
        name: "Violin",
        desc: "Develop perfect pitch and bowing technique with our structured violin method for all ages.",
        icon: "🎻",
        level: "Beginner to Intermediate",
        color: "text-green-400"
    },
    {
        name: "Vocal",
        desc: "Find your voice with professional training in breath control, range expansion, and performance skills.",
        icon: "🎤",
        level: "All Levels",
        color: "text-purple-400"
    },
];

export default function Learning() {
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
                <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
                    Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Curriculum</span>
                </h1>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
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
                            <Card className={`h-full flex flex-col items-center text-center p-6 md:p-8 transition-all duration-300 ${isMobile ? 'border-violet-500/30 bg-white/5 shadow-lg shadow-violet-500/10' : 'hover:scale-105 hover:border-violet-500/50 hover:shadow-violet-500/20 hover:bg-white/10'} active:scale-95`}>
                                <div className="text-5xl md:text-6xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h2 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${item.color}`}>{item.name}</h2>
                                <p className="text-slate-400 text-sm md:text-base mb-5 md:mb-6 flex-1 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="w-full pt-4 md:pt-6 border-t border-white/10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs md:text-sm font-medium text-slate-300 border border-white/5">
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
                className="text-center relative py-10 md:py-14 px-5 md:px-6 rounded-3xl overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-pink-900/50 backdrop-blur-md" />
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                        Not sure which instrument to choose?
                    </h2>
                    <p className="text-slate-300 mb-6 md:mb-8 text-base md:text-lg max-w-xl mx-auto">
                        Book a free consultation session with our experts and let us help you find your perfect match.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" variant="primary">
                            Book Free Trial
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </PageContainer>
    );
}
