import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
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
  FaCheckCircle,
} from "react-icons/fa"

import PageContainer from "../components/layout/PageContainer"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import SEO from "../components/SEO"
import { CONTACT } from "../components/constant/contact"
const contact_api = import.meta.env.VITE_CONTACT_API

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
  "Keyboard",
  "Guitar",
  "Piano",
  "Violin",
  "Vocals",
]

const skillLevels = ["Beginner", "Intermediate", "Advanced"]

const inputBase =
  "w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition-all duration-300 hover:border-gray-400"

/* -------------------- Component -------------------- */

export default function Contact({ seoDisabled = false }) {
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

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [instrument, setInstrument] = useState("")
  const [skillLevel, setSkillLevel] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation: not empty or whitespace only
    if (!name.trim()) {
      newErrors.name = "Name is required"
    }

    // Phone validation: exactly 10 digits
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(contact_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          instrument,
          skillLevel,
          message,
        }),
      })

      // 1. Parse the JSON response immediately
      const data = await response.json()

      if (response.ok) {
        // Success Case
        setShowSuccessPopup(true)
        // Clear form
        setName("")
        setPhone("")
        setEmail("")
        setInstrument("")
        setSkillLevel("")
        setMessage("")
        setErrors({})
      } else {
        // Error Case - Handle specific status codes
        if (response.status === 409) {
          // This captures your backend message: "you have already sent a message..."
          alert(data.message)
        } else {
          // Fallback for 500 or 400 errors
          alert(data.message || "Something went wrong. Please try again.")
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error submitting form. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageContainer className="pt-2 pb-2 md:pt-2 md:pb-2">
      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-4 left-10 w-40 h-40 bg-gray-700/10 blur-3xl" />
        <div className="absolute bottom-4 right-10 w-48 h-48 bg-gray-700/10 blur-3xl" />
      </div>

      {/* Header */}
      {!seoDisabled && (
        <SEO
          title="Contact Us"
          description="Get in touch with Harmonix Musicals. Book a free music trial in Chennai for Guitar, Piano, Violin, and Vocals."
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="text-xs font-semibold tracking-widest text-gray-300">
          HARMONIX MUSICALS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-3">
          Start Your{" "}
          <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Music Journey
          </span>
        </h1>



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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  className={`${inputBase} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/60' : ''}`}
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors({ ...errors, name: null })
                  }}
                  placeholder="Full Name *"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  className={`${inputBase} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/60' : ''}`}
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                    setPhone(value)
                    if (errors.phone) setErrors({ ...errors, phone: null })
                  }}
                  placeholder="Phone Number *"
                  maxLength={10}
                  inputMode="numeric"
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1 ">{errors.phone}</p>}
              </div>
              <div>
                <input
                  className={`${inputBase} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/60' : ''}`}
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: null })
                  }}
                  placeholder="Email Address"
                  type="email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <select className={inputBase} name="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} required>
                <option value="">Select Instrument</option>
                {instruments.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>

              <select className={inputBase} name="skillLevel" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} required>
                <option value="">Skill Level</option>
                {skillLevels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>

              <textarea
                rows={4}
                className={`${inputBase} resize-none`}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your goals or message"
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-52 justify-items-center text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Sending..." : "Request Free Consultation"}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 md:p-8 max-w-sm w-full text-center shadow-xl border border-gray-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Successfully submitted the form. Our team will get back to you soon.
            </p>
            <Button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl cursor-pointer"
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </PageContainer>
  )
}
