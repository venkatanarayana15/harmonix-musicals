import { motion } from "framer-motion"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa"
import PageContainer from "../components/layout/PageContainer"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call",
    link: "tel:+919876543210",
    color: "text-gray-400",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    link: "https://wa.me/919876543210",
    color: "text-gray-400",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "mailto:hello@harmonix.com",
    color: "text-gray-400",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit",
    link: "https://maps.google.com",
    color: "text-gray-400",
  },
]

export default function Contact() {
  return (
    <PageContainer className="pt-24 pb-10 md:pt-32 md:pb-14">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 left-10 w-40 h-40 bg-gray-700/20 blur-3xl" />
        <div className="absolute bottom-24 right-10 w-48 h-48 bg-gray-700/20 blur-3xl" />
      </div>

      {/* ---------- HEADER ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-gray-300 mb-2">
          HARMONIX MUSICALS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4">
          Start Your{" "}
          <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Music Journey
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Book a free trial, ask about programs or fees — we’ll guide you.
        </p>
      </motion.div>

      {/* ---------- MAIN GRID ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* ---------- LEFT PANEL ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Quick contact icons */}
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
                className="
                  flex flex-col items-center justify-center gap-2
                  aspect-square rounded-2xl
                  bg-gray-800/70 border border-white/10
                  hover:border-gray-600/50 hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className={`text-xl sm:text-2xl ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-xs text-gray-400">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>


          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
            {/* Address */}
            <Card className="p-4 bg-gray-800/60 border border-white/10 rounded-2xl h-full flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-gray-200 mb-1">
                Studio Address
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                123 Music Street, Jubilee Hills, Hyderabad
                <br />
                Near Metro Station
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                Open Now
              </div>
            </Card>

            {/* Map */}
            <Card className="
              p-1 bg-gray-800/50 border border-white/10
              rounded-2xl overflow-hidden
              h-[160px] sm:h-[220px] lg:h-[380px]
            ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d971.7397019853312!2d80.17893426948214!3d13.038293999205205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzE3LjkiTiA4MMKwMTAnNDYuNSJF!5e0!3m2!1sen!2sin!4v1767167390457!5m2!1sen!2sin"
                width="100%"
                height="330px"
                style={{ border: 0 }}
                className="rounded-2xl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </motion.div>

        {/* ---------- FORM PANEL ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6"
        >
          <Card className="
            p-5 sm:p-6 lg:p-8
            bg-gray-800/70 border border-white/10
            backdrop-blur-xl rounded-2xl
          ">
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Request a Call Back
            </h2>

            <form className="space-y-4 sm:space-y-5">
              <Input label="Name" placeholder="Student name" required />
              <Input label="Phone" type="tel" placeholder="+91 98765 43210" required />
              <Input label="Email" type="email" placeholder="john@example.com" />

              <select className="
                w-full bg-gray-800/70
                border border-white/10 rounded-xl
                px-4 py-3 text-sm text-white
                focus:outline-none focus:ring-2 focus:ring-gray-600/40
              ">
                <option>Select Instrument</option>
                <option>Guitar</option>
                <option>Piano</option>
                <option>Violin</option>
                <option>Vocals</option>
                <option>Ukulele</option>
              </select>

              <select className="
                w-full bg-gray-800/70
                border border-white/10 rounded-xl
                px-4 py-3 text-sm text-white
                focus:outline-none focus:ring-2 focus:ring-gray-600/40
              ">
                <option>Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <textarea
                rows={3}
                placeholder="Your goals or message (optional)"
                className="
                  w-full bg-gray-800/70
                  border border-white/10 rounded-xl
                  px-4 py-3 text-sm text-white
                  placeholder:text-gray-500 resize-none
                  focus:outline-none focus:ring-2 focus:ring-gray-600/40
                "
              />

              <div className="flex justify-center">
                <Button className="py-3 sm:py-3.5 cursor-pointer text-base font-semibold rounded-xl">
                  Request Call Back
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </PageContainer>
  )
}
