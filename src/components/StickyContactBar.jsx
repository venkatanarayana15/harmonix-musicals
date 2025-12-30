// components/StickyContactBar.jsx
import { motion } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa"

const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
    icon: FaWhatsapp,
    bg: "bg-green-500",
    glow: "hover:shadow-green-500/60"
  },
  {
    label: "Instagram",
    href: "https://instagram.com/your_instagram_id",
    icon: FaInstagram,
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    glow: "hover:shadow-pink-500/60"
  },
  {
    label: "Call",
    href: "tel:+91XXXXXXXXXX",
    icon: FaPhoneAlt,
    bg: "bg-sky-500",
    glow: "hover:shadow-sky-500/60"
  }
]

// Parent animation
const container = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut"
    }
  }
}

// Button animation
const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
}

export default function StickyContactBar() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="
        fixed right-3 sm:right-4 lg:right-6
        top-1/2 -translate-y-1/2
        z-[9998]
        flex flex-col items-center gap-3
      "
    >
      {/* Desktop label */}
      <span className="hidden lg:block text-[10px] tracking-[0.25em] text-gray-400 rotate-90 mb-6">
        
      </span>

      {CONTACTS.map(({ label, href, icon: Icon, bg, glow }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          variants={item}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className={`
            w-11 h-11 sm:w-12 sm:h-12
            rounded-full
            ${bg}
            ${glow}
            flex items-center justify-center
            text-white text-lg sm:text-xl
            shadow-md hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-white/50
          `}
        >
          <Icon />
        </motion.a>
      ))}

      {/* Mobile hint */}
      <span className="lg:hidden text-[10px] text-gray-500 mt-1">
      
      </span>
    </motion.div>
  )
}
