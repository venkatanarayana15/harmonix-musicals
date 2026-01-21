import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useCallback } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaTimes,
    FaDownload
} from "react-icons/fa";

export default function Lightbox({ images, currentIndex, onClose, setIndex }) {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
    }, [onClose, currentIndex]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const handleNext = (e) => {
        e?.stopPropagation();
        setIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e?.stopPropagation();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleDownload = async (e) => {
        e.stopPropagation();
        const currentImage = images[currentIndex];
        if (!currentImage) return;

        try {
            const response = await fetch(currentImage.url);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            // Use title or fallback for filename
            a.download = currentImage.title
                ? `${currentImage.title.replace(/\s+/g, "_")}.jpg`
                : `gallery_image_${currentIndex}.jpg`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            console.error("Download failed:", err);
            // Fallback for cross-origin issues if simple fetch fails
            window.open(currentImage.url, "_blank");
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* TOP CONTROLS */}
                <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
                    <button
                        onClick={handleDownload}
                        className="p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                        title="Download Image"
                    >
                        <FaDownload size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
                        title="Close Gallery"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* NAVIGATION BUTTONS */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 z-50 p-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 hidden md:block"
                        >
                            <FaChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 z-50 p-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110 hidden md:block"
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* IMAGE */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;

                        if (swipe < -10000) {
                            handleNext();
                        } else if (swipe > 10000) {
                            handlePrev();
                        }
                    }}
                    className="relative max-w-[90vw] max-h-[90vh] p-2 touch-none cursor-grab active:cursor-grabbing"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />

                    {/* CAPTION */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full">
                        <h3 className="text-white text-center text-lg font-medium">
                            {images[currentIndex].title}
                        </h3>
                        {images[currentIndex].count && (
                            <p className="text-white/60 text-center text-sm mt-1">
                                {currentIndex + 1} / {images.length}
                            </p>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
