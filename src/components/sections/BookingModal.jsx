import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { FaTimes, FaCheckCircle, FaMusic, FaUser, FaPhone, FaEnvelope, FaChevronDown } from "react-icons/fa"
import Button from "../ui/Button"

const contact_api = import.meta.env.VITE_CONTACT_API

const instruments = [
    "Keyboard",
    "Guitar",
    "Piano",
    "Violin",
    "Vocals",
]

const skillLevels = ["Beginner", "Intermediate", "Advanced"]

const inputBase =
    "w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 hover:border-violet-300"

// --- Custom Select Component ---
const CustomSelect = ({ options, value, onChange, placeholder, icon: Icon, error }) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={containerRef}>
            {Icon && <Icon className="absolute left-3 top-2.5 text-gray-400 text-sm z-10" />}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${inputBase} ${Icon ? 'pl-9' : ''} text-left flex items-center justify-between ${error ? 'border-red-300 ring-2 ring-red-100' : ''}`}
            >
                <span className={value ? "text-gray-900" : "text-gray-400"}>
                    {value || placeholder}
                </span>
                <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl max-h-48 overflow-y-auto custom-scrollbar"
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    onChange(option)
                                    setIsOpen(false)
                                }}
                                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${value === option
                                        ? 'bg-violet-50 text-violet-700 font-medium'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            {error && <p className="text-red-500 text-[10px] mt-1 ml-1">{error}</p>}
        </div>
    )
}

export default function BookingModal({ isOpen, onClose }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [instrument, setInstrument] = useState("")
    const [skillLevel, setSkillLevel] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    // Reset form when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setShowSuccess(false)
        }
    }, [isOpen])

    const validateForm = () => {
        const newErrors = {}

        if (!name.trim()) newErrors.name = "Name is required"

        const phoneRegex = /^\d{10}$/
        if (!phoneRegex.test(phone)) newErrors.phone = "Phone number must be 10 digits"

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (email && !emailRegex.test(email)) newErrors.email = "Invalid email address"

        if (!instrument) newErrors.instrument = "Please select an instrument"
        if (!skillLevel) newErrors.skillLevel = "Please select a skill level"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            const response = await fetch(contact_api, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    instrument,
                    skillLevel,
                    message,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setShowSuccess(true)
                // Clear form after success
                setName("")
                setPhone("")
                setEmail("")
                setInstrument("")
                setSkillLevel("")
                setMessage("")
                setErrors({})

                // Auto close after 3 seconds
                setTimeout(() => {
                    onClose()
                    setShowSuccess(false)
                }, 3000)
            } else {
                if (response.status === 409) {
                    alert(data.message)
                } else {
                    alert(data.message || "Something went wrong. Please try again.")
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Error submitting form. Please check your connection.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Content - Smaller Max Width */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
                            >
                                <FaTimes />
                            </button>

                            {/* Success View */}
                            {showSuccess ? (
                                <div className="flex flex-col items-center justify-center p-10 text-center min-h-[350px]">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                                    >
                                        <FaCheckCircle className="text-3xl text-green-600" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Received!</h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        We'll contact you shortly to confirm your free demo session.
                                    </p>
                                    <Button onClick={onClose} size="sm" className="w-full max-w-xs">
                                        Okay, got it!
                                    </Button>
                                </div>
                            ) : (
                                /* Form View */
                                <div className="flex flex-col h-full">
                                    {/* Header - Compact */}
                                    <div className="px-6 pt-6 pb-4 bg-linear-to-br from-violet-50 to-white border-b border-gray-100">
                                        <h2 className="text-xl font-bold text-gray-900 mb-1">
                                            Book <span className="text-violet-600">Free Demo</span>
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            No commitment required.
                                        </p>
                                    </div>

                                    {/* Form Fields - Compact Spacing */}
                                    <div className="p-6 space-y-3">

                                        {/* Name */}
                                        <div className="space-y-1">
                                            <div className="relative">
                                                <FaUser className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                                                <input
                                                    className={`${inputBase} pl-9 ${errors.name ? 'border-red-300 ring-2 ring-red-100' : ''}`}
                                                    placeholder="Your Name *"
                                                    minLength={3}
                                                    maxLength={15}
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-[10px] ml-1">{errors.name}</p>}
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-1">
                                            <div className="relative">
                                                <FaPhone className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                                                <input
                                                    className={`${inputBase} pl-9 ${errors.phone ? 'border-red-300 ring-2 ring-red-100' : ''}`}
                                                    placeholder="Phone Number *"
                                                    maxLength={10}
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-[10px] ml-1">{errors.phone}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1">
                                            <div className="relative">
                                                <FaEnvelope className="absolute left-3 top-2.5 text-gray-400 text-sm" />
                                                <input
                                                    className={`${inputBase} pl-9 ${errors.email ? 'border-red-300 ring-2 ring-red-100' : ''}`}
                                                    placeholder="Email (Optional)"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-[10px] ml-1">{errors.email}</p>}
                                        </div>

                                        {/* Instrument & Level Row */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <CustomSelect
                                                    placeholder="Instrument *"
                                                    options={instruments}
                                                    value={instrument}
                                                    onChange={setInstrument}
                                                    icon={FaMusic}
                                                    error={errors.instrument}
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <CustomSelect
                                                    placeholder="Level *"
                                                    options={skillLevels}
                                                    value={skillLevel}
                                                    onChange={setSkillLevel}
                                                    error={errors.skillLevel}
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1">
                                            <textarea
                                                className={`${inputBase} min-h-[60px] resize-none`}
                                                placeholder="Any message?"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>

                                    </div>

                                    {/* Footer - Compact */}
                                    <div className="px-6 pb-6 pt-2 bg-white flex flex-col gap-3">
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className={`w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200 text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? "Sending..." : "Book Free Demo"}
                                        </Button>
                                        <p className="text-[10px] text-gray-400 text-center">
                                            We'll keep your info safe.
                                        </p>
                                    </div>

                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
