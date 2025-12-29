import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Learning from "./pages/learning"
import Contact from "./pages/contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <main className="pt-16 md:pt-20">
        <section id="home" className="w-full overflow-x-hidden">
          <Home />
        </section>

        <section id="about" className="w-full overflow-x-hidden">
          <About />
        </section>

        <section id="learning" className="w-full overflow-x-hidden">
          <Learning />
        </section>

        <section id="contact" className="w-full overflow-x-hidden">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
