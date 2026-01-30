import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { HiHome, HiInformationCircle, HiAcademicCap, HiMail, HiPhotograph } from "react-icons/hi"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import { CONTACT } from "../constant/contact"

const SECTIONS = ["home", "about", "learning", "gallery", "contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Initialize mobile state safely
  const [isMobile, setIsMobile] = useState(() => {
    try {
      return typeof window !== 'undefined' ? window.innerWidth < 768 : false
    } catch (e) {
      return false
    }
  })

  // Prevent spy from overriding click selection temporarily
  const isClickingRef = useRef(false)
  const clickTimeoutRef = useRef(null)

  // Hooks for routing
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === "/"

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
    checkMobile()

    // Debounce resize slightly if needed, but standard listener is usually fine for simple boolean
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Update active section based on route first
  useEffect(() => {
    if (!isHomePage && location.pathname === "/gallery") {
      setActiveSection("gallery")
    }
  }, [location.pathname, isHomePage])

  /* ---------- OPTIMIZED SCROLL SPY ---------- */
  useEffect(() => {
    let observer = null

    // 1. Setup Intersection Observer
    if (isHomePage && typeof IntersectionObserver !== "undefined") {
      const options = {
        root: null,
        // OPTIMIZATION: 
        // Mobile: Trigger when section hits top third (-30%)
        // Desktop: Broaden detection zone to middle 30% (-35% top/bottom) to catch sections earlier/longer
        // This prevents "dead zones" active state issues during scrolling
        rootMargin: isMobile ? "-30% 0px -65% 0px" : "-40% 0px -55% 0px",
        threshold: 0,
      }

      observer = new IntersectionObserver((entries) => {
        // If user clicked a nav link, ignore scroll spy until scroll finishes
        if (isClickingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id) {
              // OPTIMIZATION: Only update state if it actually changed
              setActiveSection((prev) => (prev !== id ? id : prev))
            }
          }
        })
      }, options)

      SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }

    // 2. Optimized Scroll Background Handler
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 20
        // OPTIMIZATION: Only update state if boolean changed
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (observer) {
        SECTIONS.forEach((id) => {
          const el = document.getElementById(id)
          if (el) observer.unobserve(el)
        })
        observer.disconnect()
      }
    }
  }, [isMobile, isHomePage])


  /* ---------- NAVIGATION HANDLER ---------- */
  const handleNavigation = useCallback((id) => {
    setIsOpen(false)

    // Optimistic update
    setActiveSection(id)

    // Disable spy temporarily so it doesn't revert active state while scrolling
    isClickingRef.current = true
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)

    // Wait longer (1000ms) to ensure smooth scroll finishes before re-enabling spy
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false
    }, 1000)

    // For other links (Home, About, etc.)
    if (!isHomePage) {
      navigate("/", { state: { targetId: id } })
    } else {
      const el = document.getElementById(id)
      if (el) {
        const offset = isMobile ? 20 : 90
        const behavior = isMobile ? "auto" : "smooth"
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: behavior,
          left: 0
        })
      }
    }
  }, [isHomePage, isMobile, navigate])

  const navLinks = [
    { name: "Home", id: "home", icon: <HiHome /> },
    { name: "About", id: "about", icon: <HiInformationCircle /> },
    { name: "Programs", id: "learning", icon: <HiAcademicCap /> },
    { name: "Gallery", id: "gallery", icon: <HiPhotograph /> },
    { name: "Contact", id: "contact", icon: <HiMail /> },
  ]

  // ========== DESKTOP ==========
  if (!isMobile) {
    return (
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md border-b shadow-sm" // Switched to blur-md for better FPS
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* DESKTOP LOGO */}
            <div
              onClick={() => handleNavigation("home")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gray-900 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src="/logo.png"
                  alt="Harmonix Musicals"
                  className="relative w-12 h-12 rounded-3xl object-cover border border-white/20 shadow-lg"
                />
              </div>
              <div>
                <div className="text-lg font-bold font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-600 drop-shadow-sm relative z-20">HARMONIX</div>
                <div className="text-[15px] font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-600 drop-shadow-sm relative z-20">Musicals</div>
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/40 shadow-sm">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ease-out
                                            ${activeSection === link.id
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                    }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/95 shadow-sm border border-gray-300 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 text-lg">{link.icon}</span>
                  <span className="relative z-10 text-sm font-medium">{link.name}</span>
                </button>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <Button
              onClick={() => handleNavigation("contact")}
              variant="primary"
              size="md"
            >
              Join Now
            </Button>
          </div>
        </nav>
      </header>
    )
  }

  // ========== MOBILE ==========
  return (
    <>
      {/* MOBILE TOP BAR - Double Glass Neumorphism */}
      <div className="fixed top-2 inset-x-0 z-50 px-2 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto bg-white/80 dark:bg-gray-200/80 backdrop-blur-xl border-1 border-white/30 dark:border-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full py-1.5 px-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-inner border border-white/20">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold font-serif italic text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-blue-600 pr-1">Harmonix</span>
        </div>

        <div className="pointer-events-auto">
          <Button
            onClick={() => window.open(CONTACT.whatsapp, '_blank')}
            size="sm"
            className="shadow-lg shadow-purple-500/20 text-xs py-1.5 px-3 rounded-full border-2 border-white/20"
          >
            Join
          </Button>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV - Docked Double Glass Neumorphism */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex justify-center pointer-events-none">
        <div className="bg-white/80 dark:bg-gray-200/80 backdrop-blur-xl border-t-2 border-x-2 border-white/30 dark:border-gray-800/30 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] rounded-t-3xl pointer-events-auto w-full transition-all duration-300 pb-0"> {/* Added pb-2 for safe area look */}
          <div className="flex items-center justify-between px-6 py-3 relative"> {/* Increased spacing for docked look */}
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className="relative flex flex-col items-center justify-center p-2 group w-full"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileActivePill"
                      className="absolute inset-0 bg-white dark:bg-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-700 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col items-center gap-0.5">
                    <span
                      className={`text-xl transition-all duration-200 drop-shadow-[1px_2px_2px_rgba(0,0,0,0.15)]
                            ${isActive ? "text-gray-900 scale-110" : "text-gray-700 hover:text-gray-900"}`}
                    >
                      {link.icon}
                    </span>
                    <span className={`text-[10px] font-bold tracking-wide ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                      {link.name}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar