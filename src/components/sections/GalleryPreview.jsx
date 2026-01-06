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
        <PageContainer>
            <div className="py-10 md:py-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Moments</span>
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        A glimpse into our vibrant musical community.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card
                                glass={true}
                                className="h-full flex flex-col justify-center items-center p-6 text-center cursor-pointer group hover:border-purple-200"
                            >
                                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                                    {img.image}
                                </div>
                                <h3 className="font-bold text-gray-900">{img.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{img.category}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <Link to="/gallery">
                        <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl">
                            View Full Gallery
                        </Button>
                    </Link>
                </div>
            </div>
        </PageContainer>
    )
}
