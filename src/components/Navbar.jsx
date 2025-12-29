import { useState, useEffect, useRef } from "react"


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const ticking = useRef(false)


  useEffect(() => {
    const sections = ["home", "about", "learning", "contact"]


    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsScrolled(scrollY > 20)


          for (const id of sections) {
            const el = document.getElementById(id)
            if (!el) continue


            const offsetTop = el.offsetTop
            const offsetBottom = offsetTop + el.offsetHeight


            if (scrollY + 120 >= offsetTop && scrollY + 120 < offsetBottom) {
              setActiveSection(id)
              break
            }
          }


          ticking.current = false
        })
        ticking.current = true
      }
    }


    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return


    const offset = 80
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth"
    })


    setActiveSection(id)
  }


  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "learning", label: "Programs" },
    { id: "contact", label: "Contact" }
  ]


  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-[9999]
        h-16 md:h-20
        flex items-center
        px-4 md:px-6 lg:px-8
        transition-colors duration-300
        ${isScrolled
          ? "bg-gray-900/95 backdrop-blur-xl shadow-xl"
          : "bg-gray-900/80 backdrop-blur-md"}
        pt-[env(safe-area-inset-top)]
      `}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">


        {/* Logo */}
        {/* <video
          src="/img/Video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover ring-2 ring-white/10"
        /> */}
        <img src="/img/logo.jpeg" alt="logo" className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover ring-2 ring-white/10" />


        {/* Nav Links */}
        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`
                px-3 py-2 text-sm font-medium rounded-lg md:rounded-full
                transition-all
                ${activeSection === item.id
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                  : "text-gray-300 hover:text-blue-500 hover:bg-white/5"}
              `}
            >
              {item.label}
            </a>
          ))}


          {/* CTA (desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden md:inline-flex ml-2 px-5 py-2.5
              bg-gradient-to-r from-indigo-600 to-purple-600
              rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Book Trial →
          </a>
        </div>
      </div>
    </nav>
  )
}