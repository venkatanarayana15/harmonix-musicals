import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import Button from "../ui/Button"

const SECTIONS = ["home", "about", "learning", "contact"]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 20,
        mass: 0.4,
    })

    /* ---------- SCROLL SPY ---------- */
    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (ticking) return
            ticking = true

            requestAnimationFrame(() => {
                const scrollY = window.scrollY
                setScrolled(scrollY > 10)

                // Bottom of page detection
                if (window.innerHeight + scrollY >= document.body.offsetHeight - 20) {
                    setActiveSection(SECTIONS[SECTIONS.length - 1])
                } else {
                    for (const id of SECTIONS) {
                        const el = document.getElementById(id)
                        if (!el) continue
                        const top = el.offsetTop
                        const bottom = top + el.offsetHeight
                        
                        // Mobile detection with larger threshold
                        const isMobile = window.innerWidth < 768
                        const offset = isMobile ? 70 : 80
                        
                        if (scrollY + offset >= top && scrollY + offset < bottom) {
                            setActiveSection(id)
                            break
                        }
                    }
                }

                ticking = false
            })
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    /* ---------- SCROLL TO SECTION ---------- */
    const scrollToSection = useCallback((id) => {
        setIsOpen(false)
        const el = document.getElementById(id)
        if (!el) return

        const isMobile = window.innerWidth < 768
        const offset = isMobile ? 70 : 80
        
        window.scrollTo({
            top: el.offsetTop - offset,
            behavior: "smooth",
        })
    }, [])

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Programs", id: "learning" },
        { name: "Contact", id: "contact" },
    ]

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Scroll progress */}
            <motion.div
                className="h-[3px] origin-left bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-500"
                style={{ scaleX }}
            />

            <nav
                className={`
          transition-all duration-300
          ${scrolled
                        ? "bg-black/98 backdrop-blur-xl border-b border-white/20"
                        : "bg-black/95 backdrop-blur-lg"}
        `}
            >
                <div className="h-16 md:h-20 flex items-center">
                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                        {/* Logo - Larger on Mobile */}
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => scrollToSection("home")}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img
                                src="/logo.jpg"
                                alt="Harmonix Musicals"
                                className="h-12 w-12 md:h-14 md:w-14 rounded-xl border-2 border-white/30 shadow-lg"
                            />
                            <div className="leading-tight">
                                <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                                    Harmonix
                                </p>
                                <p className="text-xs md:text-sm tracking-widest text-slate-300">
                                    MUSICALS
                                </p>
                            </div>
                        </div>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`text-lg sm:text-xl font-semibold transition-colors px-3 py-2 rounded-lg
                    ${activeSection === link.id 
                        ? "text-white bg-gradient-to-r  from-violet-400 via-indigo-400 to-pink-500" 
                        : "text-slate-300 hover:text-white hover:bg-white/5"}`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <Button 
                                onClick={() => scrollToSection("contact")}
                                className="text-lg sm:text-xl px-6 py-3 font-bold"
                            >
                                Join Now
                            </Button>
                        </div>

                        {/* Mobile toggle - Larger */}
                        <button
                            onClick={() => setIsOpen(p => !p)}
                            className="md:hidden p-3 rounded-xl hover:bg-white/10 active:bg-white/20"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu - Full Screen */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 pt-20"
                        >
                            <div className="h-full flex flex-col px-6 pb-6">
                                {/* Menu Header */}
                                <div className="mb-8 border-b border-white/10 pb-6">
                                    <h2 className="text-2xl font-bold text-white">Menu</h2>
                                    <p className="text-gray-400 mt-1">Navigate to section</p>
                                </div>

                                {/* Navigation Links - Full Height */}
                                <div className="flex-1 space-y-3">
                                    {navLinks.map(link => (
                                        <button
                                            key={link.id}
                                            onClick={() => scrollToSection(link.id)}
                                            className={`
                                                w-full text-left
                                                px-6 py-5
                                                rounded-2xl
                                                text-xl font-semibold
                                                flex items-center justify-between
                                                transition-all duration-200
                                                active:scale-98
                                                ${activeSection === link.id
                                                    ? "bg-gradient-to-r from-violet-600/30 to-pink-600/30 text-white border-2 border-white/20"
                                                    : "text-slate-300 bg-white/5 hover:bg-white/10"}
                                            `}
                                        >
                                            <span>{link.name}</span>
                                            {activeSection === link.id && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-violet-300">Active</span>
                                                    <span className="h-4 w-4 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 animate-pulse" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Mobile CTA Button */}
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <Button
                                        className="w-full text-xl py-5 font-bold rounded-2xl shadow-2xl shadow-violet-500/30"
                                        onClick={() => scrollToSection("contact")}
                                    >
                                        🎵 Start Learning
                                    </Button>
                                    
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-full mt-4 py-4 text-lg text-gray-400 hover:text-white"
                                    >
                                        Close Menu
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Navbar