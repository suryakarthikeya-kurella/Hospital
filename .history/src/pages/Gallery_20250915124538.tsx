import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');

  const albums = [
    { id: 'all', name: 'All Photos', count: 8 },
    { id: 'infrastructure', name: 'Infrastructure', count: 3 },
    { id: 'equipment', name: 'Equipment', count: 2 },
    { id: 'opd', name: 'OPD Area', count: 2 },
    { id: 'staff', name: 'Staff', count: 1 },
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/assets/gallery/opd.jpg',
      alt: 'OPD area - replace image at /public/assets/gallery/opd.jpg',
      album: 'opd',
      caption: 'Comfortable OPD waiting area with modern amenities'
    },
    {
      id: 2,
      src: '/assets/gallery/procedure-room.jpg',
      alt: 'Procedure room - replace image at /public/assets/gallery/procedure-room.jpg',
      album: 'infrastructure',
      caption: 'Sterile procedure room with advanced equipment'
    },
    {
      id: 3,
      src: '/assets/hero.jpg',
      alt: 'Hospital interior - replace image at /public/assets/hero.jpg',
      album: 'infrastructure',
      caption: 'Modern hospital interior with calming ambiance'
    },
    {
      id: 4,
      src: '/assets/doctor-bhargavi.jpg',
      alt: 'Dr. M. Bhargavi - replace image at /public/assets/doctor-bhargavi.jpg',
      album: 'staff',
      caption: 'Dr. M. Bhargavi, Consultant Dermatologist'
    },
    // Placeholder images for demonstration
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Medical equipment - replace with actual equipment photos',
      album: 'equipment',
      caption: 'Advanced dermatology equipment - Replace with actual photos'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Reception area - replace with actual reception photos',
      album: 'opd',
      caption: 'Reception and registration area - Replace with actual photos'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Consultation room - replace with actual consultation room photos',
      album: 'infrastructure',
      caption: 'Consultation room - Replace with actual photos'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Laboratory equipment - replace with actual lab photos',
      album: 'equipment',
      caption: 'Laboratory equipment - Replace with actual photos'
    },
  ];

  const filteredImages = selectedAlbum === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.album === selectedAlbum);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const getCurrentImageIndex = () => {
    return filteredImages.findIndex(img => img.src === selectedImage);
  };

  const goToPrevious = () => {
    const currentIndex = getCurrentImageIndex();
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].src);
  };

  const goToNext = () => {
    const currentIndex = getCurrentImageIndex();
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].src);
  };

  return (
    <div className="py-20">
      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font">
            Photo Gallery
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            Take a virtual tour of our modern dermatology facility and see our state-of-the-art equipment and comfortable environment
          </p>
        </div>
      </section>

      {/* Album Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {albums.map((album) => (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedAlbum === album.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {album.name} ({album.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer card-hover"
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative overflow-hidden rounded-xl bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white bg-black/50 rounded-lg px-4 py-2 inline-block">
                {filteredImages.find(img => img.src === selectedImage)?.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {/* <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Photo Replacement Instructions
          </h2>
          <p className="text-muted-foreground mb-4">
            To update gallery photos, replace the images in the following locations:
          </p>
          <div className="bg-card border border-border rounded-lg p-6 text-left">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <code>/public/assets/gallery/opd.jpg</code> - OPD waiting area</li>
              <li>• <code>/public/assets/gallery/procedure-room.jpg</code> - Treatment rooms</li>
              <li>• <code>/public/assets/hero.jpg</code> - Main hospital interior</li>
              <li>• <code>/public/assets/doctor-bhargavi.jpg</code> - Doctor photo</li>
              <li>• Add more images to <code>/public/assets/gallery/</code> and update the gallery array in the code</li>
            </ul>
          </div>                                                        #####VIDEO SECTION#####
        </div>
      </section> */}
    </div>
  );
};

export default Gallery;