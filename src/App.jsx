import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Gallery from "./pages/gallery"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen overflow-x-hidden flex flex-col font-sans">

      {/* Navigation available across all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Add more routes here if needed in the future */}
      </Routes>

      <Footer />
       <SpeedInsights />
    </div>
  )
}
