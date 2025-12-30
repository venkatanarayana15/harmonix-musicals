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
    color: "text-sky-400",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    link: "https://wa.me/919876543210",
    color: "text-emerald-400",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "mailto:hello@harmonix.com",
    color: "text-pink-400",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit",
    link: "https://maps.google.com",
    color: "text-violet-400",
  },
]

export default function Contact() {
  return (
    <PageContainer className="pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Decorative background (compact) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 left-10 w-40 h-40 bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-24 right-10 w-48 h-48 bg-pink-500/20 blur-3xl" />
      </div>

      {/* ---------- HEADER ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-violet-300 mb-2">
          HARMONIX MUSICALS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-3">
          Start Your{" "}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Music Journey
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Book a free trial, ask about programs or fees — we’ll guide you.
        </p>
      </motion.div>

      {/* ---------- MAIN GRID ---------- */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* ---------- LEFT PANEL ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Quick contact icons */}
          <div className="grid grid-cols-4 gap-3">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="
                  flex flex-col items-center justify-center gap-1
                  aspect-square rounded-xl
                  bg-slate-900/60 border border-white/10
                  hover:border-violet-500/50 hover:-translate-y-1
                  transition-all
                "
              >
                <div className={`text-xl sm:text-2xl ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Address block */}
          <Card className="p-4 bg-slate-950/50 border border-white/10">
            <h4 className="text-sm font-semibold text-slate-200 mb-1">
              Studio Address
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              123 Music Street, Jubilee Hills, Hyderabad<br />
              Near Metro Station
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Open Now
            </div>
          </Card>
        </motion.div>

        {/* ---------- FORM PANEL ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <Card className="p-5 sm:p-6 md:p-8 bg-slate-950/70 border border-white/10 backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Request a Call Back
            </h2>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Name" placeholder="Student name" required />
                <Input label="Phone" type="tel" placeholder="+91 98765 43210" required />
              </div>

              <Input label="Email" type="email" placeholder="john@example.com" />

              <div className="grid sm:grid-cols-2 gap-4">
                <select className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white">
                  <option>Select Instrument</option>
                  <option>Guitar</option>
                  <option>Piano</option>
                  <option>Violin</option>
                  <option>Vocals</option>
                  <option>Ukulele</option>
                </select>

                <select className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white">
                  <option>Skill Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <textarea
                rows={3}
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 resize-none"
                placeholder="Your goals or message (optional)"
              />

              <Button className="w-full py-3 text-base font-semibold">
                Request Call Back
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </PageContainer>
  )
}
