import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiHome, HiInformationCircle, HiAcademicCap, HiMail, HiPhotograph, HiMenuAlt3, HiX } from "react-icons/hi"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../ui/Button"

const SECTIONS = ["home", "about", "learning", "gallery", "contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

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
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Update active section based on route first
  useEffect(() => {
    if (!isHomePage && location.pathname === "/gallery") {
      setActiveSection("gallery")
    }
  }, [location.pathname, isHomePage])

  /* ---------- SCROLL SPY ---------- */
  useEffect(() => {
    let observer = null
    if (isHomePage && typeof IntersectionObserver !== "undefined") {
      const options = {
        root: null,
        rootMargin: isMobile ? "-40% 0px -40% 0px" : "-100px 0px -40% 0px",
        threshold: 0,
      }

      observer = new IntersectionObserver((entries) => {
        if (isClickingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id) setActiveSection(id)
          }
        })
      }, options)

      SECTIONS.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }

    // Scroll background effect
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)
        ticking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

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
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false
    }, 1000)

    // Special case: Gallery Link
    if (id === "gallery") {
      navigate("/gallery")
      window.scrollTo(0, 0)
      return
    }

    // For other links (Home, About, etc.)
    if (!isHomePage) {
      // Navigate to home and pass the target ID in state
      // This tells Landing.jsx to scroll immediately on mount
      navigate("/", { state: { targetId: id } })
    } else {
      // Already on home
      const el = document.getElementById(id)
      if (el) {
        // Offset: 
        // Mobile: just a bit of padding (20px)
        // Desktop: clear the fixed header (90px)
        const offset = isMobile ? 20 : 90

        // Scroll Behavior:
        // PC: smooth
        // Mobile: auto (instant)
        const behavior = isMobile ? "auto" : "smooth"

        window.scrollTo({
          top: el.offsetTop - offset,
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
          ? "bg-white/90 backdrop-blur-xl border-b shadow-sm"
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
                <div className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors">HARMONIX</div>
                <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Musicals</div>
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
                      className="absolute inset-0 bg-white shadow-sm border border-gray-300 rounded-full"
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
      <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t">
        <div className="shadow-sm">
          <div className="flex items-center justify-around px-2 py-3">
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
                      ${isActive ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                      {link.icon}
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium transition-opacity duration-300 ease-out ${isActive ? "opacity-100 text-indigo-600" : "opacity-0 hidden text-gray-700"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="mobileIndicator"
                      className="absolute bottom-1 w-2 h-2 bg-indigo-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* SPACER for Mobile ensures content isn't covered */}
      <div className="h-20 md:hidden" />
    </>
  )
}

export default Navbar