import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa"
import { CONTACT } from "./constant/contact"

const CONTACTS = [
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    icon: FaWhatsapp,
    color: "bg-green-600",
  },
  {
    label: "Instagram",
    href: CONTACT.instagram,
    icon: FaInstagram,
    color: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500",
  },
  {
    label: "Call",
    href: CONTACT.phone.startsWith("+") ? `tel:${CONTACT.phone}` : `tel:+91${CONTACT.phone}`,
    icon: FaPhoneAlt,
    color: "bg-blue-500",
  }
]

export default function StickyContactBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed z-[9998] right-4 bottom-28 md:bottom-4 pointer-events-none flex flex-col items-center gap-3">
      {/* Expanding contact icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 p-2 bg-white/80 dark:bg-gray-200/80 backdrop-blur-xl border border-white/30 dark:border-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full pointer-events-auto"
          >
            {CONTACTS.map(({ label, href, icon: Icon, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  relative
                  w-10 h-10 md:w-12 md:h-12
                  flex items-center justify-center
                  rounded-full
                  text-white text-xl md:text-2xl
                  shadow-md
                  transition-all
                  hover:shadow-lg
                  active:scale-95
                  group
                  z-10
                `}
                aria-label={label}
                onClick={() => setIsOpen(false)}
              >
                {/* Gradient Backgrounds applied directly or via class */}
                <div className={`absolute inset-0 rounded-full opacity-90 group-hover:opacity-100 transition-opacity ${color} shadow-sm border border-white/20`}></div>

                {/* Icon */}
                <span className="relative z-10 filter drop-shadow-sm"><Icon /></span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white shadow-lg pointer-events-auto z-10 hover:shadow-xl transition-all"
        aria-label="Toggle Contact Menu"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400"></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="absolute text-xl md:text-2xl drop-shadow-sm flex items-center justify-center z-10"
            >
              <FaTimes />
            </motion.span>
          ) : (
            <motion.span
              key="comment"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="absolute text-xl md:text-2xl drop-shadow-sm flex items-center justify-center z-10"
            >
              <FaCommentDots />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}