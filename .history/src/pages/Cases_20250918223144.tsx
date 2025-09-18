import { useI18n } from '@/i18n/I18nProvider';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import vedios from '/vedios/about-bg.mp4';

const CASES = [
  // ... same cases
];

const Cases = () => {
  const { t } = useI18n();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  return (
    <div className="py-10 sm:py-20">
      {/* Page Header */}
      <section className="relative bg-secondary py-12 sm:py-16 overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
            {t('cases.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Carousel */}
      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={scrollToPrevious}
              disabled={!canScrollLeft}
              className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-200 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              aria-label="Previous case"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={scrollToNext}
              disabled={!canScrollRight}
              className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-200 ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
              }`}
              aria-label="Next case"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              onScroll={checkScrollButtons}
            >
              {CASES.map((c) => (
                <article
                  key={c.id}
                  className="snap-center min-w-[85%] sm:min-w-[500px] md:min-w-[420px] lg:min-w-[380px] bg-card border border-border rounded-xl overflow-hidden shrink-0"
                >
                  <div className="h-44 sm:h-56 bg-muted overflow-hidden flex items-center justify-center">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2">
                      {c.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-medium text-card-foreground mb-1 sm:mb-2">
                      {t('cases.caseDescription')}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                      {c.description}
                    </p>
                    <h4 className="text-xs sm:text-sm font-medium text-card-foreground mb-1 sm:mb-2">
                      {t('cases.treatmentUsed')}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                      {c.treatment}
                    </p>
                    <h4 className="text-xs sm:text-sm font-medium text-card-foreground mb-1 sm:mb-2">
                      {t('cases.doctorsNote')}
                    </h4>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-secondary-foreground italic">
                        "{c.note}"
                      </p>
                      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border">
                        <p className="text-[10px] sm:text-xs font-medium text-secondary-foreground">
                          - Dr. M. Bhargavi, MBBS, MD, DVL
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-4 sm:mb-6">
            {t('cases.startJourney')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8">
            {t('cases.schedule')}
          </p>
          <button className="bg-background text-primary hover:bg-background/90 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg text-sm sm:text-base">
            {t('cases.bookYourConsultation')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
