import { useState } from "react"
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaMailBulk
} from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    instrument: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 98765 43210",
      description: "Mon-Sat, 10AM - 8PM"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "hello@musicacademy.com",
      description: "We reply within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "123 Music Street, Mumbai",
      description: "Open for walk-ins"
    }
  ]

  const socialLinks = [
    { icon: <FaWhatsapp />, href: "https://wa.me/919876543210", color: "bg-green-500 hover:bg-green-600", label: "WhatsApp" },
    { icon: <FaInstagram />, href: "#", color: "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600", label: "Instagram" },
    { icon: <FaFacebook />, href: "#", color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
    { icon: <FaYoutube />, href: "#", color: "bg-red-600 hover:bg-red-700", label: "YouTube" },
    { icon: <FaLinkedin />, href: "#", color: "bg-blue-500 hover:bg-blue-600", label: "LinkedIn" }
  ]

  const instruments = ["Guitar", "Piano", "Violin", "Vocals", "Drums", "Bass", "Saxophone", "Other"]

  return (
    <div className="min-h-screen bg-black text-white pt-2 pb-2 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-1 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
             <span className="text-indigo-400">Contact Us</span> 
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out to book a free trial class, inquire about courses, or just say hello!
            Our team is here to guide your musical journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 animate-fade-in-delay">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-900/30 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-300 font-medium">{item.details}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-shimmer"></div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500 rounded-full">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Instant Support</h3>
                    <p className="text-gray-300">Get quick answers on WhatsApp</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-green-500/25"
                >
                  <FaWhatsapp size={24} />
                  Start WhatsApp Chat
                  <span className="ml-2 animate-pulse">→</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 ${social.color} text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 shadow-2xl">
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-xl animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500 rounded-full">
                      <FaPaperPlane />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-400">Message Sent!</h4>
                      <p className="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <h2 className="text-3xl font-bold mb-8">
                Send us a <span className="text-indigo-400">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                      <FaUser size={14} />
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-black/50 border border-gray-700 px-4 py-4 pl-12 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        required
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <FaUser />
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                      <FaMailBulk size={14} />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-black/50 border border-gray-700 px-4 py-4 pl-12 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        required
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <FaEnvelope />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/50 border border-gray-700 px-4 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                  />
                </div>

                {/* Instrument Selection */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium">Instrument of Interest</label>
                  <select
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-700 px-4 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none"
                  >
                    <option value="">Select an instrument</option>
                    {instruments.map((instrument, index) => (
                      <option key={index} value={instrument.toLowerCase()}>
                        {instrument}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your musical goals, questions, or preferred time for trial class..."
                    className="w-full bg-black/50 border border-gray-700 px-4 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>

                <p className="text-gray-500 text-center text-sm mt-4">
                  By submitting, you agree to our terms. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in-delay-2">
          <div className="text-center p-6 bg-gray-900/30 rounded-2xl">
            <div className="text-3xl font-bold text-indigo-400 mb-2">30+</div>
            <div className="text-gray-400">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-2xl">
            <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
            <div className="text-gray-400">Students Trained</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-2xl">
            <div className="text-3xl font-bold text-indigo-400 mb-2">24h</div>
            <div className="text-gray-400">Response Time</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-fade-in-delay { animation: fadeIn 0.6s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fadeIn 0.6s ease-out 0.4s forwards; opacity: 0; }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}