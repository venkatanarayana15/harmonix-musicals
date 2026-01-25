import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import PageContainer from "../layout/PageContainer"
import Card from "../ui/Card"
import Button from "../ui/Button"

export default function GalleryPreview() {
    const galleryImages = [
        {
            id: 1,
            title: "Guitar Performance",
            category: "Performance",
            image: "🎸",
            description: "Students performing in concerts"
        },
        {
            id: 2,
            title: "Piano Recital",
            category: "Performance",
            image: "🎹",
            description: "Classical piano performances"
        },
        {
            id: 3,
            title: "Violin Practice",
            category: "Training",
            image: "🎻",
            description: "Intensive violin training sessions"
        },
        {
            id: 4,
            title: "Vocal Training",
            category: "Training",
            image: "🎤",
            description: "Professional vocal coaching"
        }
    ]

    return (
        <section className="relative py-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                    Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Moments</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto font-medium">
                    A glimpse into our vibrant musical community.
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card
                            glass={true}
                            className="h-full group relative overflow-hidden border border-white/20 hover:border-violet-300/50 transition-all duration-300"
                        >
                            {/* Gradient subtle background on hover */}
                            <div className="absolute inset-0 bg-linear-to-br from-violet-500/0 via-fuchsia-500/0 to-purple-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                            <div className="flex flex-col items-center text-center p-6 relative z-10">
                                <div className="mb-4 p-4 rounded-full bg-gray-50/50 group-hover:bg-white/80 transition-colors duration-300 shadow-sm group-hover:shadow-md ring-1 ring-gray-900/5">
                                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300 block">
                                        {img.image}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
                                    {img.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2">
                                    {img.category}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mb-4">
                <Link to="/gallery">
                    <Button
                        variant="secondary"
                        size="lg"
                        // className=" hover:shadow-lg  hover:border-violet-700 hover:bg-white transition-all group cursor-pointer"
                    className="shadow-sm justify-items-center text-white font-semibold border-gray-200 hover:border-violet-700 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 cursor-pointer"
                    >
                        <span className=" transition-colors">View Full Gallery</span>
                    </Button>
                </Link>
            </div>
        </section>
    )
}
