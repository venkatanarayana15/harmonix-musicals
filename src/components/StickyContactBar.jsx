import { motion } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa"
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
  return (
    <div className="fixed z-[9998] right-4 bottom-28 md:bottom-8 pointer-events-none"> {/* Adjusted bottom position to avoid nav overlap */}
      <div className="flex flex-col gap-3 p-2 bg-white/80 dark:bg-gray-200/80 backdrop-blur-xl border-1 border-white/30 dark:border-gray-800/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full pointer-events-auto">

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
          >
            {/* Gradient Backgrounds applied directly or via class */}
            <div className={`absolute inset-0 rounded-full opacity-90 group-hover:opacity-100 transition-opacity ${color} shadow-sm border border-white/20`}></div>

            {/* Icon */}
            <span className="relative z-10 filter drop-shadow-sm"><Icon /></span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}