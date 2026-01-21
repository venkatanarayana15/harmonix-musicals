import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUser,
  FaPhone,
  FaEnvelopeOpen,
  FaMusic,
  FaChartLine,
  FaComment,
} from "react-icons/fa"

import PageContainer from "../components/layout/PageContainer"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import { CONTACT } from "../components/constant/contact"

/* -------------------- Static Data -------------------- */

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call",
    link: CONTACT.phone.startsWith("+") ? `tel:${CONTACT.phone}` : `tel:+91${CONTACT.phone}`,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    link: CONTACT.whatsapp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: CONTACT.email.startsWith("http") ? CONTACT.email : `mailto:${CONTACT.email}`,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit",
    link: CONTACT.location,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

const instruments = [
  "Guitar",
  "Piano",
  "Violin",
  "Vocals",
  "Ukulele",
  "Drums",
  "Flute",
  "Saxophone",
]

const skillLevels = ["Beginner", "Intermediate", "Advanced"]

const inputBase =
  "w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition-all duration-300 hover:border-gray-400"

/* -------------------- Component -------------------- */

export default function Contact() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.targetId) {
      const element = document.getElementById(location.state.targetId)
      if (element) {
        // Wait slightly for layout to stabilize
        setTimeout(() => {
          const offset = 40
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [location])

  return (
    <PageContainer className="pt-2 pb-2 md:pt-2 md:pb-2">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-4 left-10 w-40 h-40 bg-gray-700/10 blur-3xl" />
        <div className="absolute bottom-4 right-10 w-48 h-48 bg-gray-700/10 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="text-xs font-semibold tracking-widest text-gray-300">
          HARMONIX MUSICALS
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-3">
          Start Your{" "}
          <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Music Journey
          </span>
        </h2>



        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
          Book a free trial, ask about programs or fees — we&apos;ll guide you
          every step of the way.
        </p>

      </motion.div>


      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Quick Contact */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col items-center justify-center gap-3 aspect-square rounded-2xl p-4 ${item.bgColor} border border-white/20 hover:border-white hover:-translate-y-1 transition-all`}
              >
                <div className={`text-2xl ${item.color}`}>{item.icon}</div>
                <span className="text-xs font-medium text-gray-800">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Address & Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800/80 border border-white/10 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-100 mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400" />
                Studio Address
              </h4>
              <p className="text-sm text-gray-300">
                <strong>123 Music Avenue, Anna Nagar</strong>
                <br />
                Chennai - 600040
              </p>
              <p className="text-xs text-gray-400 mt-2">
                📍 Near Metro | 🅿️ Free Parking
              </p>
            </Card>

            <Card className="p-6 bg-gray-800/80 border border-white/10 rounded-2xl">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                Working Hours
              </h4>
              {[
                ["Mon - Fri", "9:00 AM - 9:00 PM"],
                ["Saturday", "10:00 AM - 8:00 PM"],
                ["Sunday", "10:00 AM - 6:00 PM"],
              ].map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between text-sm text-gray-300"
                >
                  <span>{day}</span>
                  <span className="text-gray-400">{time}</span>
                </div>
              ))}
            </Card>
          </div>

          {/* Map */}
          <Card className="p-4 bg-gray-800/80 border border-white/10 rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9332304368422!2d80.17726276069877!3d13.040020245660644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611f09c91283%3A0x8deca7c7db2c7c75!2sHarmonix%20Musicals!5e0!3m2!1sen!2sin!4v1767837666331!5m2!1sen!2sin"
              className="w-full h-72 rounded-xl border border-white/10"
              loading="lazy"
              allowFullScreen
              title="Harmonix Musicals Location"
            />

          </Card>
        </motion.div>



        {/* Form Panel */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6"
        >
          <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Request a Call Back
            </h2>

            <form className="space-y-6">
              <input className={inputBase} placeholder="Full Name *" required />
              <input
                className={inputBase}
                placeholder="Phone Number *"
                required
              />
              <input
                className={inputBase}
                placeholder="Email Address"
                type="email"
              />

              <select className={inputBase} required>
                <option value="">Select Instrument</option>
                {instruments.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>

              <select className={inputBase} required>
                <option value="">Skill Level</option>
                {skillLevels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>

              <textarea
                rows={4}
                className={`${inputBase} resize-none`}
                placeholder="Your goals or message"
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-52 justify-items-center text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 cursor-pointer"
                >
                  Request Free Consultation
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </PageContainer>
  )
}
