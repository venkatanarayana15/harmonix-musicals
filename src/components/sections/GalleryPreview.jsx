import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { FaArrowRight, FaImages, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const galleryImages = [
  { id: 1, title: "Guitar",    image: "/gall1.png", desc: "Performance", alt: "Guitar"   },
  { id: 2, title: "Piano",     image: "/gall2.png", desc: "Recital",     alt: "Piano"    },
  { id: 3, title: "Violin",    image: "/gall3.png", desc: "Training",    alt: "Violin"   },
  { id: 4, title: "Vocal",     image: "/gall4.png", desc: "Practice",    alt: "Vocal"    },
  { id: 5, title: "Keyboard",  image: "/gall5.png", desc: "Coaching",    alt: "Keyboard" },
]

const DURATION = 4000 // ms per slide

export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(
      () => setActiveIndex(p => (p + 1) % galleryImages.length),
      DURATION
    )
  }

  useEffect(() => { startTimer(); return () => clearInterval(intervalRef.current) }, [])

  const selectSlide = (i) => { setActiveIndex(i); startTimer() }
  const goPrev = () => selectSlide((activeIndex - 1 + galleryImages.length) % galleryImages.length)
  const goNext = () => selectSlide((activeIndex + 1) % galleryImages.length)

  return (
    <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
              <FaImages className="text-slate-600 text-lg" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Gallery</h2>
              <p className="text-slate-500 text-sm">Moments from our studio</p>
            </div>
          </div>
          <Link
            to="/gallery"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            See all <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>

        {/* ── MOBILE: Stacked fan cards ── */}
        <div className="relative h-72 mb-4 md:hidden">
          {galleryImages.map((img, index) => {
            const pos = (index - activeIndex + galleryImages.length) % galleryImages.length
            return (
              <motion.div
                key={img.id}
                animate={{
                  x:       pos === 0 ? 0 : pos === 1 ? 110 : pos === 2 ? -110 : 0,
                  y:       pos === 0 ? 0 : 18,
                  scale:   pos === 0 ? 1 : 0.86,
                  rotate:  pos === 0 ? 0 : pos === 1 ? 5 : -5,
                  opacity: pos >= 3  ? 0 : 1,
                  zIndex:  pos === 0 ? 30 : pos === 1 ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => selectSlide(index)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
              >
                <img src={img.image} alt={img.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm">{img.title}</p>
                  <p className="text-white/60 text-xs">{img.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── DESKTOP: Featured hero + vertical filmstrip ── */}
        <div className="hidden md:flex gap-4 h-[360px] mb-4">

          {/* Hero panel */}
          <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate-900 group"
            style={{ boxShadow: "0 25px 60px -10px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            {/* Images: crossfade + Ken Burns zoom-OUT */}
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                className="absolute inset-0"
                style={{ zIndex: i === activeIndex ? 2 : 1 }}
                animate={{ opacity: i === activeIndex ? 1 : 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.img
                  src={img.image}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  animate={i === activeIndex ? { scale: [1.08, 1.0] } : { scale: 1.08 }}
                  transition={i === activeIndex
                    ? { duration: DURATION / 1000, ease: "linear" }
                    : { duration: 0 }
                  }
                />
              </motion.div>
            ))}

            {/* Smooth gradient — natural fade, not heavy black */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.20) 40%, transparent 70%)" }} />

            {/* Slide counter — top right */}
            <div className="absolute top-4 right-5 pointer-events-none" style={{ zIndex: 4 }}>
              <span className="text-white text-xs font-black tabular-nums tracking-widest drop-shadow-lg">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="text-white/40"> / {String(galleryImages.length).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Bottom info card — glassmorphism */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-4 left-4 right-4 pointer-events-none"
                style={{ zIndex: 4 }}
              >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 mb-2">
                    {galleryImages[activeIndex].desc}
                  </p>
                  <h3
                    className="text-3xl md:text-4xl font-black text-white leading-none"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
                  >
                    {galleryImages[activeIndex].title}
                  </h3>
              </motion.div>
            </AnimatePresence>

            {/* Hover arrows */}
            <button onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-md border border-white/10
                         opacity-0 group-hover:opacity-100 hover:bg-black/60 hover:border-white/25 transition-all duration-300 cursor-pointer"
              style={{ zIndex: 5 }}>
              <FaChevronLeft size={13} />
            </button>
            <button onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center backdrop-blur-md border border-white/10
                         opacity-0 group-hover:opacity-100 hover:bg-black/60 hover:border-white/25 transition-all duration-300 cursor-pointer"
              style={{ zIndex: 5 }}>
              <FaChevronRight size={13} />
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/8" style={{ zIndex: 5 }}>
              <motion.div
                key={`p-${activeIndex}`}
                className="h-full bg-white/50 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
              />
            </div>
          </div>

          {/* Vertical filmstrip */}
          <div className="flex flex-col gap-2 w-[112px]">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.id}
                onClick={() => selectSlide(i)}
                whileTap={{ scale: 0.95 }}
                className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group/thumb"
                style={{
                  transition: "box-shadow 0.3s, opacity 0.3s",
                  boxShadow: i === activeIndex
                    ? "0 0 0 2.5px #1e293b, 0 0 0 4px rgba(30,41,59,0.15), 0 8px 20px rgba(0,0,0,0.25)"
                    : "none",
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
              >
                <img src={img.image} alt={img.alt}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500" />

                {/* Dark overlay — lighter on active */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  i === activeIndex ? "opacity-0" : "opacity-40 bg-slate-900"
                }`} />

                {/* Active: left accent bar + label */}
                {i === activeIndex && (
                  <motion.div
                    layoutId="strip-active"
                    className="absolute inset-0 flex items-end"
                  >
                    {/* left colour bar */}
                    <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-white rounded-full" />
                    <div className="w-full bg-linear-to-t from-black/80 to-transparent p-2.5">
                      <p className="text-white text-[11px] font-black leading-tight drop-shadow">{img.title}</p>
                      <p className="text-white/65 text-[9px] font-medium">{img.desc}</p>
                    </div>
                  </motion.div>
                )}

                {/* Hover label for inactive */}
                {i !== activeIndex && (
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                    <div className="w-full bg-linear-to-t from-black/80 to-transparent p-2.5">
                      <p className="text-white text-[11px] font-bold drop-shadow">{img.title}</p>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mb-4">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => selectSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "bg-slate-900 w-6" : "bg-slate-300 hover:bg-slate-400 w-1.5"
              }`}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <Link to="/gallery">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full cursor-pointer hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95">
              View Full Gallery <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-12 md:gap-20 pt-4 border-t border-slate-100"
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">50+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Photos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">20+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Events</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900">4</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Categories</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
