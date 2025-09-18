import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';
import vedios from '/vedios/about-bg.mp4';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const { t } = useI18n();

  const albums = [
    { id: 'all', name: t('gallery.album.all') },
    { id: 'infrastructure', name: t('gallery.album.infrastructure') },
    { id: 'equipment', name: t('gallery.album.equipment') },
    { id: 'staff', name: t('gallery.album.staff') },
  ];

  const galleryImages = [
    // OPD
   
    // Staff
  
    // Infrastructure images (infrastructure1..10 where available)
    { id: 29, src: '/assets/gallery/infrastructure10.jpg', alt: 'Infrastructure 10', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 20, src: '/assets/gallery/infrastructure1.png', alt: 'Infrastructure 1', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 21, src: '/assets/gallery/infrastructure2.png', alt: 'Infrastructure 2', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 22, src: '/assets/gallery/infrastructure3.png', alt: 'Infrastructure 3', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 23, src: '/assets/gallery/infrastructure4.png', alt: 'Infrastructure 4', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 24, src: '/assets/gallery/infrastructure5.png', alt: 'Infrastructure 5', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 25, src: '/assets/gallery/infrastructure6.png', alt: 'Infrastructure 6', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 26, src: '/assets/gallery/infrastructure7.png', alt: 'Infrastructure 7', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 27, src: '/assets/gallery/infrastructure8.png', alt: 'Infrastructure 8', album: 'infrastructure', caption: 'Infrastructure' },
    { id: 28, src: '/assets/gallery/infrastructure9.png', alt: 'Infrastructure 9', album: 'infrastructure', caption: 'Infrastructure' },
 
    // Equipment common names from your folder list
    { id: 10, src: '/assets/gallery/staff1.png', alt: 'Staff 1', album: 'staff', caption: 'Staff' },
    { id: 11, src: '/assets/gallery/staff2.png', alt: 'Staff 2', album: 'staff', caption: 'Staff' },
    { id: 40, src: '/assets/gallery/Laser machine.png', alt: 'Laser machine', album: 'equipment', caption: 'Laser machine' },
    { id: 41, src: '/assets/gallery/electro skin cautery.png', alt: 'Electro skin cautery', album: 'equipment', caption: 'Electro skin cautery' },
    { id: 42, src: '/assets/gallery/Dermatoscope.png', alt: 'Dermatoscope', album: 'equipment', caption: 'Dermatoscope' },
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
      <section className="relative bg-secondary py-16 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={vedios} type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('gallery.subtitle')}
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
                {album.name}
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