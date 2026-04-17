import { useState } from "react";
import { ScrollReveal } from "../../../../components/ScrollReveal";

const galleryImages = [
  "/public/DSC00882.jpg.jpeg",
  "/public/DSC00897.jpg.jpeg", 
  "/public/DSC00919.jpg.jpeg",
  "/public/DSC00933.jpg.jpeg",
  "/public/DSC00937.jpg.jpeg",
  "/public/DSC00941.jpg.jpeg",
  "/public/DSC00951.jpg.jpeg",
  "/public/DSC00967.jpg.jpeg",
  "/public/DSC00988.jpg.jpeg",
  "/public/DSC01034.jpg.jpeg",
  "/public/DSC00919.jpg.jpeg",
  "/public/DSC00897.jpg.jpeg"
];

const categories = ["All", "Events", "Workshops", "Campus", "Students", "Facilities"];

export const GallerySection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages; // In real implementation, filter by category

  return (
    <section className="bg-primary-blue py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
                Gallery
              </h2>
              <div className="w-20 h-1.5 bg-accent-gold rounded-full mx-auto mb-8"></div>
              <p className="font-sans text-gray-300 text-lg max-w-2xl mx-auto">
                Explore the vibrant campus life, creative works, and memorable moments at GCAD
              </p>
            </ScrollReveal>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <ScrollReveal key={category} direction="up" delay={300 + index * 100}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-sans font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-accent-gold text-primary-blue"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={index} direction="up" delay={400 + index * 50}>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-sans font-semibold text-sm">
                        Campus Life {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <ScrollReveal direction="up" delay={600}>
              <button className="px-8 py-3 bg-accent-gold text-primary-blue font-sans font-bold rounded-lg hover:bg-light-gold transition-colors duration-300">
                View More Photos
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
