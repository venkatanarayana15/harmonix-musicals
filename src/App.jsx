import Navbar from "./components/layout/Navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Learning from "./pages/learning"
import Contact from "./pages/contact"
import Footer from "./components/Footer"
import StickyContactBar from "./components/StickyContactBar"

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden flex flex-col">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <main className="grow pt-20">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="learning">
          <Learning />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <StickyContactBar />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
