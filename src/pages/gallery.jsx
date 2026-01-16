import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import PageContainer from "../components/layout/PageContainer"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import { HiArrowLeft } from "react-icons/hi"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const galleryImages = [
    { id: 1, title: "Guitar Performance", category: "Performance", image: "🎸", description: "Students performing in concerts" },
    { id: 2, title: "Piano Recital", category: "Performance", image: "🎹", description: "Classical piano performances" },
    { id: 3, title: "Violin Practice", category: "Training", image: "🎻", description: "Intensive violin training sessions" },
    { id: 4, title: "Vocal Training", category: "Training", image: "🎤", description: "Professional vocal coaching" },
    { id: 5, title: "Orchestra", category: "Performance", image: "🎼", description: "Full orchestra performances" },
    { id: 6, title: "Music Studio", category: "Studio", image: "🎧", description: "State-of-the-art recording studio" },
    { id: 7, title: "Group Classes", category: "Training", image: "👥", description: "Interactive group music sessions" },
    { id: 8, title: "Awards & Recognition", category: "Achievement", image: "🏆", description: "Student achievements and awards" },
  ]

  const categories = ["All", "Performance", "Training", "Studio", "Achievement"]

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <PageContainer className="pb-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 pl-0 hover:bg-transparent hover:text-purple-600">
              <HiArrowLeft /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Full <span className="text-gray-900">Gallery</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our complete collection of moments, achievements, and everyday training.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${selectedCategory === category
                  ? "bg-gray-900 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card glass={false} className="h-full flex flex-col group hover:shadow-xl transition-shadow duration-300 border-none bg-white">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-7xl group-hover:scale-105 transition-transform duration-500">
                  {img.image}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{img.title}</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-purple-50 text-purple-700 px-2 py-1 rounded-md">
                      {img.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{img.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">End of Gallery</p>
        </div>
      </PageContainer>
    </div>
  )
}
