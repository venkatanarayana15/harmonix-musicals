import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaMusic } from "react-icons/fa";
import Button from "./ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Programs", to: "/learning" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-10 mb-8 md:mb-12 text-center lg:text-left">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start space-y-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg group-hover:shadow-gray-700/25 transition-all duration-300 border border-white/10 shrink-0">
                <img src="/logo.jpg" alt="Harmonix Musicals" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] sm:text-lg md:text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight hidden sm:block">
                Harmonix
              </span>
            </Link>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0 hidden lg:block">
              Igniting musical passion since 2003. Professional training in Guitar, Piano, Violin & Vocals for students of all ages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-4 pt-1 lg:pt-2">
              <SocialLink icon={<FaInstagram size={14} />} href="#" color="hover:bg-gray-700" />
              <SocialLink icon={<FaYoutube size={14} />} href="#" color="hover:bg-red-600" />
              <SocialLink icon={<FaWhatsapp size={14} />} href="https://wa.me/919876543210" color="hover:bg-green-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-center lg:items-start">
            <h4 className="font-display font-bold text-white text-xs sm:text-lg mb-3 md:mb-6">Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-base text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group justify-center lg:justify-start">
                    <FaArrowRight className="text-xs opacity-0 hidden lg:block -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start lg:pl-8">
            <h4 className="font-display font-bold text-white text-xs sm:text-lg mb-3 md:mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-xs sm:text-base md:text-base">
              <li className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center lg:items-start justify-center lg:justify-start text-center lg:text-left">
                <FaMapMarkerAlt className="text-gray-600 shrink-0 lg:mt-1" />
                <span className="hidden sm:inline">123 Music Street, Bandra West, Mumbai</span>
                <span className="inline sm:hidden">Bandra, Mumbai</span>
              </li>
              <li className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center justify-center lg:justify-start">
                <FaPhoneAlt className="text-gray-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors truncate max-w-[140px] sm:max-w-none">+91 98765...</a>
              </li>
              <li className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center justify-center lg:justify-start">
                <FaEnvelope className="text-gray-600 shrink-0" />
                <a href="mailto:hello@harmonix.com" className="hover:text-white transition-colors truncate max-w-[140px] sm:max-w-none">hello@...</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 mb-10 border border-white/10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">Start Your Musical Journey Today</h4>
              <p className="text-gray-600 text-sm md:text-base">Book a free trial class and get a personalized learning roadmap.</p>
            </div>
            <Link to="/contact">
              <Button className="whitespace-nowrap">Book Free Trial</Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-600 text-center">
          <p>© {currentYear} Harmonix Musicals. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href, color }) {
  return (
    <a
      href={href}
      className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${color}`}
    >
      {icon}
    </a>
  );
}
