import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { FaArrowRight, FaImages } from "react-icons/fa"

export default function GalleryPreview() {
    const [activeIndex, setActiveIndex] = useState(0)

    const galleryImages = [
        { id: 1, title: "Guitar", image: "/gall1.png", desc: "Performance", alt: "Guitar" },
        { id: 2, title: "Piano", image: "/gall2.png", desc: "Recital", alt: "Piano" },
        { id: 3, title: "Violin", image: "/gall3.png", desc: "Training", alt: "Violin" },
        { id: 4, title: "Vocal", image: "/gall4.png", desc: "Practice", alt: "Vocal" },
        { id: 5, title: "Keyboard", image: "/gall5.png", desc: "Coaching", alt: "Keyboard" }
    ]

    // Auto-cycle through cards
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % galleryImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-6 md:py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                            <FaImages className="text-slate-600 text-lg" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Gallery</h2>
                            <p className="text-slate-500 text-sm">Moments from our studio</p>
                        </div>
                    </div>
                    <Link
                        to="/gallery"
                        className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        See all <FaArrowRight className="text-xs" />
                    </Link>
                </motion.div>

                {/* Mobile: Stacked Cards | Desktop: 3D Carousel */}

                {/* Mobile Stacked Cards */}
                <div className="relative h-72 mb-4 md:hidden">
                    {galleryImages.map((img, index) => {
                        const position = (index - activeIndex + galleryImages.length) % galleryImages.length
                        const isActive = position === 0

                        return (
                            <motion.div
                                key={img.id}
                                animate={{
                                    x: position === 0 ? 0 : position === 1 ? 120 : position === 2 ? -120 : 0,
                                    y: position === 0 ? 0 : 20,
                                    scale: position === 0 ? 1 : 0.85,
                                    rotate: position === 0 ? 0 : position === 1 ? 6 : position === 2 ? -6 : 0,
                                    opacity: position === 3 || position === 4 ? 0 : 1,
                                    zIndex: position === 0 ? 30 : position === 1 ? 20 : position === 2 ? 10 : 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={() => setActiveIndex(index)}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-72 rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
                            >
                                <img
                                    src={img.image}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicatorMobile"
                                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-900 rounded-full"
                                    />
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* Desktop 3D Merry-go-round Carousel */}
                <div className="hidden md:block relative h-[280px] mb-4" style={{ perspective: '1000px' }}>
                    <div
                        className="relative w-full h-full"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {galleryImages.map((img, index) => {
                            const angle = ((index - activeIndex) * (360 / galleryImages.length))
                            const radius = 220

                            return (
                                <motion.div
                                    key={img.id}
                                    animate={{
                                        rotateY: angle,
                                        z: Math.cos((angle * Math.PI) / 180) * radius,
                                        x: Math.sin((angle * Math.PI) / 180) * radius,
                                        scale: angle === 0 ? 1.1 : 0.85,
                                        opacity: Math.abs(angle) > 144 ? 0.6 : 1
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                                    onClick={() => setActiveIndex(index)}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-48 rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={img.image}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient for depth effect */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                                        style={{ opacity: angle === 0 ? 0 : 0.3 }}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mb-4">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex ? 'bg-slate-900 w-6' : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>

                {/* View Full Gallery Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <Link to="/gallery">
                        <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full cursor-pointer hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95">
                            View Full Gallery <FaArrowRight className="text-sm" />
                        </button>
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-12 md:gap-20 pt-4 border-t border-slate-100"
                >
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-slate-900">50+</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Photos</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-slate-900">20+</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Events</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-slate-900">4</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Categories</p>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
