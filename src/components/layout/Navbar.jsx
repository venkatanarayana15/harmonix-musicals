import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { HiHome, HiInformationCircle, HiAcademicCap, HiMail, HiPhotograph } from "react-icons/hi"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../ui/Button"

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
        // Desktop: Trigger ONLY when section is in the MIDDLE of screen (-45% top, -45% bottom). 
        // This prevents rapid state thrashing on Desktop.
        rootMargin: isMobile ? "-30% 0px -65% 0px" : "-45% 0px -45% 0px",
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || !isHomePage
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
                  src="/logo.jpg"
                  alt="Harmonix Musicals"
                  className="relative w-10 h-10 rounded-xl object-cover border border-white/20 shadow-lg"
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
      {/* MOBILE BOTTOM NAV - Unified Sticky Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 opacity-90 bg-gray-300 backdrop-blur-md">
        <div className="shadow-sm">
          <div className="flex items-center justify-around px-8 py-0.5 relative">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ease-out w-full active:scale-90
                                            ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  <div className={`mb-1 transition-transform duration-300 ease-out ${isActive ? "-translate-y-1" : ""}`}>
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-colors duration-300
                      ${isActive ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
                      <span className="text-3xl">{link.icon}</span>
                    </div>
                  </div>
                  <span className={`text-[12px] font-extrabold transition-opacity duration-300 ease-out ${isActive ? "opacity-100 text-indigo-900" : "opacity-0 hidden text-gray-700"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="mobileIndicator"
                      className="absolute bottom-1 w-10 h-2 bg-black rounded-full"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
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