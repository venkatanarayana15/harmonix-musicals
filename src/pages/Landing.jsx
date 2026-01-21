import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Learning from "./learning"
import Contact from "./contact"
import GalleryPreview from "../components/sections/GalleryPreview"
import StickyContactBar from "../components/StickyContactBar"
import SEO from "../components/SEO"

export default function Landing() {
    const location = useLocation()
    // Initialize with direct check to avoid flash of "false" state
    const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (location.state && location.state.targetId) {
            const { targetId } = location.state
            const el = document.getElementById(targetId)
            if (el) {
                // Determine offset same as Navbar
                const offset = isMobile ? 20 : 90

                // PC: Smooth scroll (Premium feel)
                // Mobile: Auto/Instant (Avoid long scroll)
                const behavior = isMobile ? "auto" : "smooth"

                window.scrollTo({
                    top: el.offsetTop - offset,
                    behavior: behavior,
                    left: 0
                })

                // Clear history state to prevent jumping on reload
                window.history.replaceState({}, document.title)
            }
        }
    }, [location, isMobile])

    return (
        <main className="grow">
            <SEO
                title="Home"
                description="Welcome to Harmonix Musicals - The best music academy in Chennai for Guitar, Piano, Violin, and Vocals."
                keywords="music classes, chennai music school, guitar, piano, violin, vocals"
            />
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="learning">
                <Learning />
            </section>

            <section id="gallery">
                <GalleryPreview />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <StickyContactBar />
        </main>
    )
}
