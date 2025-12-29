import { Link } from "react-router-dom"
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa"

export default function Footer() {
  const programs = [
    "Guitar",
    "Piano",
    "Violin",
    "Vocal",
    "Music Theory",
    "Online Classes"
  ]

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Programs", to: "/learning" },
    { label: "About Us", to: "/about" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" }
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Grid */}
        
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                🎵
              </div>
              <h3 className="text-xl font-bold">HARMONIX MUSICALS</h3>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Igniting musical passion since 2003. Professional training in Guitar,
              Piano, Violin & Vocals.
            </p>

            <div className="flex gap-3">
              <Social icon={<FaInstagram />} href="#" hover="hover:bg-pink-600" />
              <Social icon={<FaYoutube />} href="#" hover="hover:bg-red-600" />
              <Social
                icon={<FaWhatsapp />}
                href="https://wa.me/919876543210"
                hover="hover:bg-green-600"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-300">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                <span>123 Music Street, Mumbai</span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="text-indigo-500" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="text-indigo-500" />
                <a
                  href="mailto:hello@musicacademy.com"
                  className="hover:text-white"
                >
                  hello@musicacademy.com
                </a>
              </li>
            </ul>
          </div>

          
          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-300">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map(program => (
                <li key={program}>
                  <Link
                    to="/learning"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                  >
                    <FaArrowRight className="text-xs text-indigo-500" />
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold mb-4">
            Ready to Begin Your Musical Journey?
          </h4>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-semibold
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700 transition"
            >
              Book Free Trial
            </Link>

            <a
              href="https://wa.me/919876543210"
              className="px-8 py-3 rounded-full font-semibold
              border border-gray-700 hover:bg-gray-800 transition
              flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900/50 rounded-xl p-6 text-center mb-10">
          <h4 className="font-semibold mb-2">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe for music tips, event invites & special offers
          </p>

          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-black border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-lg text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Harmonix Musicals. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/refund" className="hover:text-white">Refund</Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full
        bg-gradient-to-br from-indigo-600 to-purple-600
        shadow-lg hover:scale-110 transition z-50"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  )
}

/* ---------- Small reusable component ---------- */
function Social({ icon, href, hover }) {
  return (
    <a
      href={href}
      aria-label="social-link"
      className={`w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center transition ${hover}`}
    >
      {icon}
    </a>
  )
}
