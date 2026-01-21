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
    { label: "Home", to: "/" },
    { label: "Programs", to: "/learning" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">

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
                <SocialLink icon={<FaYoutube />}  href={CONTACT.youtube} label="YouTube" />
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

        {/* CTA */}
        <div className="mt-8 bg-gray-100 rounded-xl p-5 md:p-6 text-black flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Start Your Music Journey
            </h3>
            <p className="text-gray-700 text-sm">
              Book a free trial class today
            </p>
          </div>

          <Button
            onClick={() => navigate("/contact")}
            className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500
                       text-white text-sm font-semibold rounded-lg"
          >
            Book Free Trial
          </Button>
        </div>

        {/* BOTTOM */}
        <div className="mt-6 pt-4 mb-18 md:mb-0 border-t-amber-50 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Harmonix Musicals</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Refund</a>
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
