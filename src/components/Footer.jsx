import { Link, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";
import Button from "./ui/Button";
import { CONTACT } from "./constant/contact";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Home", id: "home", to: "/#home" },
    { label: "Programs", id: "learning", to: "/#learning" },
    { label: "About Us", id: "about", to: "/#about" },
    { label: "Contact", id: "contact", to: "/#contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* BRAND */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" className="flex items-center gap-3 mb-3">
                <img
                  src="/logo.png"
                  alt="Footer logo"
                  className="w-12 h-12 rounded-3xl object-cover border"
                  title="Footer logo"
                />
                <div>
                  <span className="block text-xl font-serif italic font-bold text-gray-900">
                    Harmonix
                  </span>
                  <span className="text-xs font-serif italic font-bold text-gray-500">
                    Musicals
                  </span>
                </div>
              </Link>

              <p className="text-gray-600 text-sm max-w-md mb-4">
                Professional music training since 2003. Guitar, Piano, Violin &
                Vocals for all ages.
              </p>

              <div className="flex gap-2">
                <SocialLink icon={<FaInstagram />} href={CONTACT.instagram} label="Instagram" />
                <SocialLink icon={<FaYoutube />} href={CONTACT.youtube} label="YouTube" />
                <SocialLink icon={<FaWhatsapp />} href={CONTACT.whatsapp} label="WhatsApp" />
                <SocialLink icon={<FaFacebook />} href={CONTACT.facebook} label="Facebook" />
                <SocialLink icon={<FaLinkedin />} href={CONTACT.linkedin} label="LinkedIn" />

              </div>
            </div>
          </div>

          {/* LINKS + CONTACT */}
          <div className="md:col-span-8 lg:col-span-7 mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-4">

              {/* QUICK LINKS */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-base text-gray-900 mb-3 border-b pb-2">
                  Quick Links
                </h4>

                <ul className="space-y-2">
                  {quickLinks.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md
                                   text-sm text-gray-600 hover:text-gray-900"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaChevronRight className="text-[10px] text-blue-600" />
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 overflow-hidden">
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-3 border-b border-blue-700 pb-2 truncate">
                  Contact Us
                </h4>

                <ul className="space-y-2 sm:space-y-3">
                  <ContactItem
                    icon={<FaMapMarkerAlt />}
                    title="Visit"
                    value="Valasaravakkam, Chennai – 600087"
                    href={CONTACT.location}
                    color="blue"
                  />

                  <ContactItem
                    icon={<FaPhoneAlt />}
                    title="Call"
                    value="+91 99447 44989"
                    href={`tel:+91${CONTACT.phone.replace(/\D/g, "")}`}
                    color="green"
                  />

                  <ContactItem
                    icon={<FaEnvelope />}
                    title="Email"
                    value={CONTACT.email}
                    href={`mailto:${CONTACT.email}`}
                    color="purple"
                  />
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* CTA - Pro Max UI (Glassmorphism) */}
        <div className="mt-8 relative overflow-hidden rounded-2xl p-1 md:p-1 bg-slate-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/60 to-indigo-400/60 backdrop-blur-md"></div>
          <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/50 dark:border-gray-700/50 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl md:shadow-purple-500/10">

            <div className="text-center md:text-left z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                Start Your Music Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base">
                Book a free trial class today in <span className="text-purple-600 font-bold">Western Music</span>
              </p>
            </div>

            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
              <Button
                onClick={() => window.open(CONTACT.whatsapp, '_blank')}
                className="relative px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white text-base font-bold rounded-xl shadow-xl shadow-orange-500/20 transform group-hover:scale-[1.02] transition-all duration-200"
              >
                Book Free Trial
              </Button>
            </div>

            {/* Decorative Shine */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 blur-2xl rounded-full pointer-events-none"></div>
          </div>
        </div>

        {/* BOTTOM - Unified Ultra Capsule */}
        <div className="mt-4 pt-0 pb-0 flex justify-center items-center px-4 md:px-0">
          <div className="group relative w-full md:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl md:rounded-full blur-xl opacity-0 group-hover:opacity-70 transition duration-700"></div>

            <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl border border-white/50 dark:border-gray-700/50 rounded-3xl md:rounded-full py-4 px-6 md:py-3 md:pl-4 md:pr-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.01] transition-transform duration-300">

              {/* Brand Section */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border border-white/20">
                  <img src="/logo.png" alt="footer bottom logo" className="w-full h-full object-cover rounded-full p-0.5" />
                </div>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200 tracking-wide">
                  © {currentYear} Harmonix Musicals
                </span>
              </div>

              {/* Divider (Hidden on mobile) */}
              <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>

              {/* Links Section */}
              <div className="flex items-center gap-6">
                {[
                  { label: "Privacy", icon: "🔒" },
                  { label: "Terms", icon: "📜" },
                  { label: "Support", icon: "💬" }
                ].map(link => (
                  <a
                    key={link.label}
                    href="#"
                    className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2 group/link"
                  >
                    <span className="group-hover/link:-translate-y-0.5 transition-transform duration-200">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ---------- Components ---------- */

function SocialLink({ icon, label, href }) {
  const bgMap = {
    Instagram:
      "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    "YouTube": "#FF0000",
    WhatsApp: "#25D366",
    Facebook: "#3b5998",
    LinkedIn: "#0077B5"
  };
  const bg = bgMap[label] || "transparent";

  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition shadow-sm text-white text-sm"
      style={{ background: bg }}
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, title, value, href, color }) {
  const colors = {
    blue: "group-hover:bg-blue-200 group-hover:border-blue-500 text-blue-600",
    green: "group-hover:bg-green-200 group-hover:border-green-500 text-green-600",
    purple: "group-hover:bg-purple-200 group-hover:border-purple-500 text-purple-600"
  };

  return (
    <li>
      <a href={href} className="flex gap-2 sm:gap-3 items-start group">
        <div
          className={`w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white border flex items-center justify-center flex-shrink-0
                      transition shadow-sm ${colors[color]}`}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-xs font-medium text-gray-700 truncate">{title}</p>
          <p className="text-xs sm:text-sm text-gray-600 break-words line-clamp-2">{value}</p>
        </div>
      </a>
    </li>
  );
}
