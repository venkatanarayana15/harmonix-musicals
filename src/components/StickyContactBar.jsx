import { motion } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa"

const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: FaWhatsapp,
    color: "bg-green-500",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/harmonixmusicals",
    icon: FaInstagram,
    color: "bg-pink-500",
  },
  {
    label: "Call",
    href: "tel:+919876543210",
    icon: FaPhoneAlt,
    color: "bg-blue-500",
  }
]

export default function StickyContactBar() {
  return (
    <div className="fixed z-[9998] right-4 bottom-4">
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
              w-14 h-14 md:w-16 md:h-16
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