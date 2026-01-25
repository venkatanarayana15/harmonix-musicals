import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaDownload, FaDownload as FaDownloadIcon } from "react-icons/fa";
import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Lightbox from "../components/ui/Lightbox";
import SEO from "../components/SEO";

const VIDEO_API = import.meta.env.VITE_VIDEO_API;
const IMAGE_API = import.meta.env.VITE_IMAGE_API;

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Use a string or null to track the ID of the currently playing video
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  // Separate loading states for better UX
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  /* ---------------- FETCH ON LOAD ---------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImages();
    fetchVideos();
  }, []);

  /* ---------------- IMAGES ---------------- */
  const fetchImages = async () => {
    if (!IMAGE_API) {
      console.warn("IMAGE_API environment variable is not defined");
      setLoadingImages(false);
      return;
    }

    try {
      const res = await fetch(IMAGE_API);
      if (!res.ok) throw new Error(`Status: ${res.status}`);

      const json = await res.json();
      const rawData = Array.isArray(json) ? json : json.data || [];

      const data = rawData.map(item => ({
        ...item,
        url: item.img,
        title: item.imageName,
        category: item.category || "General" // Ensure category exists
      }));

      setImages(data);
    } catch (err) {
      console.error("Failed to fetch images:", err);
    } finally {
      setLoadingImages(false);
    }
  };

  /* ---------------- VIDEOS ---------------- */
  const fetchVideos = async () => {
    if (!VIDEO_API) {
      console.warn("VIDEO_API environment variable is not defined");
      setLoadingVideos(false);
      return;
    }

    try {
      const res = await fetch(VIDEO_API);
      if (!res.ok) throw new Error(`Status: ${res.status}`);

      const result = await res.json();

      let data = [];
      if (Array.isArray(result)) {
        data = result;
      } else if (Array.isArray(result.data)) {
        data = result.data;
      } else if (Array.isArray(result.videos)) {
        data = result.videos;
      }

      const normalizedData = data.map(item => ({
        ...item,
        category: item.category || "General"
      }));

      setVideos(normalizedData);
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    } finally {
      setLoadingVideos(false);
    }
  };

  /* ---------------- DYNAMIC CATEGORIES ---------------- */
  // Calculate categories based on the Active Tab's data
  const categories = useMemo(() => {
    const sourceData = activeTab === "images" ? images : videos;
    if (!sourceData.length) return ["All"];

    // Create unique list of categories, filtering out null/undefined
    const cats = new Set(
      sourceData
        .map(item => item.category)
        .filter(Boolean)
    );
    return ["All", ...Array.from(cats)];
  }, [activeTab, images, videos]);

  // Reset category when switching tabs to avoid getting stuck on a category that doesn't exist in the new tab
  useEffect(() => {
    setSelectedCategory("All");
    setPlayingVideoId(null);
  }, [activeTab]);

  /* ---------------- FILTERS ---------------- */
  const filteredContent = useMemo(() => {
    const sourceData = activeTab === "images" ? images : videos;

    if (selectedCategory === "All") return sourceData;
    return sourceData.filter(item => item.category === selectedCategory);
  }, [activeTab, images, videos, selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <SEO
        title="Gallery"
        description="Explore our gallery of musical performances, student achievements, and events."
        keywords="music gallery, performance photos, student videos, chennai music events"
      />
      <PageContainer className="pt-10 pb-24">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-gray-900 mb-4"
          >
            Gallery
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through performances, training, and milestones.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Main Tab Switcher */}
          <div className="bg-white p-1.5 rounded-full shadow border flex relative">
            {["images", "videos"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2.5 rounded-full text-sm font-medium z-10 transition-colors duration-200 ${activeTab === tab ? "text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Category Filter */}
          {categories.length > 2 && (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPlayingVideoId(null);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                    ? "bg-gray-900 text-white shadow-md transform scale-105"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-900"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          {/* LOADING STATE */}
          {(activeTab === 'images' && loadingImages) || (activeTab === 'videos' && loadingVideos) ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-20"
            >
              <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${activeTab === "images"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                : "sm:grid-cols-2 lg:grid-cols-3 gap-y-10"
                }`}
            >
              {filteredContent.length > 0 ? (
                filteredContent.map((item) => {
                  // Normalize ID
                  const itemId = item.id || item.videoId || item._id;

                  if (activeTab === "images") {
                    return (
                      <div
                        key={itemId}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col cursor-pointer group"
                        onClick={() => {
                          const index = filteredContent.findIndex(i => (i.id || i._id) === itemId);
                          setLightboxIndex(index !== -1 ? index : 0);
                        }}
                      >
                        {/* Image Area */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={item.url}
                            alt={item.title || "Gallery Image"}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            {/* UPDATED CATEGORY TAG TO MATCH VIDEOS */}

                            {/* <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              {item.category || "General"}
                            </span> */}

                            <h3 className="text-lg font-semibold px-2 py-1 rounded text-blue-600 bg-blue-50 leading-tight line-clamp-2" title={item.title}>
                              {item.title}
                            </h3>

                            {/* Download Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const link = document.createElement("a");
                                link.href = item.url;
                                link.download = item.title ? `${item.title.replace(/\s+/g, "_")}.jpg` : `image_${itemId}.jpg`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                              className="text-blue-600 hover:text-blue-800 transition-colors p-1.5 hover:bg-blue-50 rounded-full"
                              title="Download"
                            >
                              <FaDownload size={14} />
                            </button>
                          </div>

                        
                        </div>
                      </div>
                    );
                  } else {
                    // Video Item
                    return (
                      <div
                        key={itemId}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                      >
                        {playingVideoId === itemId ? (
                          <div className="w-full aspect-video bg-black">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={item.title}
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => setPlayingVideoId(itemId)}
                            className="relative aspect-video cursor-pointer group"
                          >
                            <img
                              src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                              srcSet={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg 2x`}
                              alt={item.title}
                              className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <FaPlay className="ml-1 text-gray-900 text-xl" />
                              </div>
                            </div>
                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              Click to Play
                            </span>
                          </div>
                        )}

                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              {item.category || "General"}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 line-clamp-2" title={item.title}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">No content found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="mt-4 text-sm font-medium text-gray-900 underline hover:text-blue-600"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {activeTab === "images" && lightboxIndex !== null && (
          <Lightbox
            images={filteredContent}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            setIndex={setLightboxIndex}
          />
        )}

        <p className="text-center text-gray-400 text-sm mt-20">
          Updates added regularly.
        </p>
      </PageContainer>
    </div>
  );
}