import { useEffect, useRef, useState, useCallback } from "react"

const SECTIONS = ["home", "about", "learning", "contact"]
const OFFSET = 80

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const ticking = useRef(false)

  const handleScroll = useCallback(() => {
    if (ticking.current) return

    ticking.current = true
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY || window.pageYOffset
      setIsScrolled(scrollY > 20)

      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue

        const top = el.offsetTop - OFFSET
        const bottom = top + el.offsetHeight

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id)
          break
        }
      }

      ticking.current = false
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return

    window.scrollTo({
      top: el.offsetTop - OFFSET,
      behavior: "smooth",
    })
    setActiveSection(id)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "learning", label: "Programs" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`
        fixed inset-x-0 top-0 z-[9999]
        h-16 md:h-20
        flex items-center
        px-3 sm:px-5 md:px-8
        transition-all duration-300
        border-b
        ${isScrolled
          ? "bg-slate-950/98 backdrop-blur-xl shadow-2xl shadow-black/50 border-indigo-500/50"
          : "bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900/70 border-indigo-400/40"}
        pt-[env(safe-area-inset-top)]
      `}
    >
      {/* bottom glow line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 opacity-80" />

      <div className="relative max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
        {/* Logo + name */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src="/logo.jpeg"
            alt="Harmonix Musicals logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl object-cover ring-2 ring-indigo-400/70 shadow-lg shadow-indigo-500/40"
            loading="eager"
          />
          <span className="hidden sm:block text-sm sm:text-base md:text-lg font-black tracking-wide bg-gradient-to-r from-white via-indigo-100 to-purple-100 bg-clip-text text-transparent">
            HARMONIX
          </span>
        </div>

        {/* Nav row – scrollable on mobile */}
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto max-w-full scrollbar-hide">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`
                  whitespace-nowrap
                  px-3 sm:px-4
                  py-1.5 sm:py-2
                  text-xs sm:text-sm md:text-sm
                  font-semibold
                  rounded-full
                  transition-all duration-200
                  border
                  ${activeSection === id
                    ? "bg-white text-slate-900 border-white shadow-lg shadow-white/40"
                    : "text-gray-200 border-transparent hover:text-white hover:border-indigo-400/70 hover:bg-white/10"}
                `}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </a>
            ))}

            {/* CTA – from md up */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="
                hidden md:inline-flex
                ml-1 md:ml-2
                px-4 md:px-5
                py-2
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                rounded-full text-sm font-bold
                text-white
                shadow-lg shadow-indigo-500/50
                transition-transform duration-200 hover:scale-105
                whitespace-nowrap
              "
            >
              Book Trial →
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
