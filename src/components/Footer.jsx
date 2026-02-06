import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";
import Button from "./ui/Button";
import { CONTACT } from "./constant/contact";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { label: "Home", id: "home", to: "/#home" },
    { label: "Programs", id: "learning", to: "/#learning" },
    { label: "About Us", id: "about", to: "/#about" },
    { label: "Contact", id: "contact", to: "/#contact" }
  ];

  const modalContent = {
    Privacy: {
      title: "Privacy Policy",
      icon: "🔒",
      content: (
        <div className="space-y-4 text-gray-600 text-sm">
          <p><strong>Last Updated:</strong> February 2026</p>
          <p>At Harmonix Musicals, we value your privacy and are committed to protecting your personal information.</p>
          <h4 className="font-semibold text-gray-800">Information We Collect</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details (name, phone, email) when you register for classes</li>
            <li>Payment information for processing course fees</li>
            <li>Photos/videos during performances (with consent)</li>
          </ul>
          <h4 className="font-semibold text-gray-800">How We Use Your Data</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>To manage class schedules and communicate with students</li>
            <li>To send updates about events and new programs</li>
            <li>To improve our services and student experience</li>
          </ul>
          <p>We never sell or share your personal data with third parties for marketing purposes.</p>
        </div>
      )
    },
    Terms: {
      title: "Terms & Conditions",
      icon: "📜",
      content: (
        <div className="space-y-4 text-gray-600 text-sm">
          <p><strong>Effective:</strong> February 2026</p>
          <h4 className="font-semibold text-gray-800">Enrollment & Fees</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fees are payable monthly in advance</li>
            <li>A minimum commitment of 3 months is recommended</li>
            <li>Missed classes can be rescheduled with 24-hour notice</li>
          </ul>
          <h4 className="font-semibold text-gray-800">Class Policies</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Students must arrive on time for scheduled sessions</li>
            <li>Personal instruments are encouraged but not mandatory</li>
            <li>Practice assignments should be completed between classes</li>
          </ul>
          <h4 className="font-semibold text-gray-800">Cancellation</h4>
          <p>One week's notice is required for discontinuing classes. Refunds are processed as per the refund policy.</p>
        </div>
      )
    },
    Support: {
      title: "Get Support",
      icon: "💬",
      content: (
        <div className="space-y-4 text-gray-600 text-sm">
          <p className="leading-relaxed">
            Need help? Our team at <span className="font-semibold text-gray-800">Harmonix Musicals</span> is ready to assist you!
          </p>

          {/* Primary WhatsApp Card */}
          <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100 shadow-sm transition-all hover:shadow-md">
            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2 text-base">
              <FaWhatsapp className="text-xl" /> WhatsApp Support
            </h4>
            <p className="text-gray-500 mb-4 text-xs italic">
              Average response time: <span className="text-green-600 font-medium">5 mins</span>
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-transform active:scale-95 shadow-lg shadow-green-200"
            >
              <FaWhatsapp className="text-lg" /> Start Chat
            </a>
          </div>

          {/* Secondary Contact Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Call Button - Triggers system dialer in the same window */}
            <button
              onClick={() => {
                const phoneNum = CONTACT.phone.startsWith("+") ? CONTACT.phone : `+91${CONTACT.phone}`;
                window.location.href = `tel:${phoneNum}`;
              }}
              className="group flex flex-col items-center justify-center bg-blue-50 p-4 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-blue-300"
            >
              <div className="bg-blue-500 text-white p-2 rounded-full mb-2 group-hover:scale-110 transition-transform shadow-sm">
                <FaPhoneAlt size={14} />
              </div>
              <span className="font-bold text-blue-700 text-xs text-center">Call Us</span>
            </button>

            {/* Email Button - Triggers default mail client in the same window */}
            <button
              onClick={() => {
                window.location.href = `mailto:${CONTACT.email}`;
              }}
              className="group flex flex-col items-center justify-center bg-purple-50 p-4 rounded-2xl border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-purple-300"
            >
              <div className="bg-purple-500 text-white p-2 rounded-full mb-2 group-hover:scale-110 transition-transform shadow-sm">
                <FaEnvelope size={14} />
              </div>
              <span className="font-bold text-purple-700 text-xs text-center">Email</span>
            </button>
          </div>

          {/* Footer Timing */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
              Available Mon-Sat: 09:00 - 20:00 IST
            </p>
          </div>
        </div>
      )
    }
  };

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

        {/* CTA - Simple Design */}
        <div className="mt-8 max-w-5xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
              Start Your Music Journey
            </h3>
            <p className="text-slate-500 text-sm">
              Book a free trial class today
            </p>
          </div>
          <button
            onClick={() => window.open(CONTACT.whatsapp, '_blank')}
            className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap text-sm"
          >
            Book Free Trial
          </button>
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
                  <button
                    key={link.label}
                    onClick={() => setActiveModal(link.label)}
                    className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2 group/link cursor-pointer"
                  >
                    <span className="group-hover/link:-translate-y-0.5 transition-transform duration-200">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Popup */}
      {activeModal && modalContent[activeModal] && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white w-full sm:max-w-md sm:w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden sm:rounded-2xl rounded-t-3xl shadow-2xl animate-[slideUp_0.3s_ease-out] sm:animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{modalContent[activeModal].icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{modalContent[activeModal].title}</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors shadow-sm cursor-pointer"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-5 overflow-y-auto max-h-[50vh] sm:max-h-[55vh]">
              {modalContent[activeModal].content}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-4 border-t border-gray-100 bg-gray-50 pb-6 sm:pb-4">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-3 sm:py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all cursor-pointer text-sm sm:text-base"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
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
