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
    <div className="fixed z-[9998] right-4 bottom-30 md:bottom-8">
      <div className="flex flex-col gap-3">
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
              ${color}
              w-10 h-10 md:w-16 md:h-16
              flex items-center justify-center
              rounded-full
              text-white text-3xl md:text-2xl
              shadow-lg
              transition-shadow
              hover:shadow-xl
              active:scale-95
            `}
            aria-label={label}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>
  )
}