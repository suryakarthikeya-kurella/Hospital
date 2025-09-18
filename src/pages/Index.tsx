import { siteData } from '@/data/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import StatsSection from '@/components/ui/StatsSection';
import DoctorCard from '@/components/ui/DoctorCard';
import { FaCalendarAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';

const Index = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="text-primary">{siteData.name}</span>
                  <br />
                  <span className="text-2xl lg:text-3xl italic text-balance">"{siteData.tagline}"</span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4 text-balance leading-relaxed">
                  {siteData.heroSubtext}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary flex items-center space-x-2 text-lg">
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>{t('action.bookAppointment')}</span>
                </a>
                <a 
                  href={`tel:${siteData.phones.mobile}`}
                  className="btn-secondary flex items-center space-x-2 text-lg"
                >
                  <FaPhoneAlt className="w-5 h-5" />
                  <span>{t('action.callNow')}</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{t('home.patientsTreated', { count: siteData.patientsTreated })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{t('home.yearsExperience', { years: siteData.years })}</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-3"></div>
              <img
                src="/assets/hero.jpg"
                alt={t('home.heroAlt')}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              {t('home.ourSpecializedServices')}
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              {t('home.comprehensiveCare')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.services.map((service, index) => (
              <ServiceCard
                key={index}
                category={service.category}
                icon={service.icon}
                treatments={service.treatments.slice(0, 4)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>{t('action.viewAllServices')}</span>
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Doctor Highlight */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              {t('home.meetOurExpert')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.leadingDerm')}
            </p>
          </div>
          
          <DoctorCard />
        </div>
      </section>

      {/* Managing Directors Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              Managing Directors
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries behind our hospital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Managing Director 1 */}
            <div className="bg-background rounded-lg shadow-lg p-6 text-center">
              <img
                src="/assets/gallery/md1.jpg"
                alt="B. Srinivas"
                className="w-32 h-32 mx-auto rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground">Bobba Srinivas</h3>
              <p className="text-muted-foreground">Managing Director</p>
              <p className="text-muted-foreground">10+ years of experience</p>
              <p className="text-muted-foreground">GST No: 37AQGPB0863Q2ZH</p>
            </div>

            {/* Managing Director 2 */}
            <div className="bg-background rounded-lg shadow-lg p-6 text-center">
              <img
                src="/assets/gallery/md2.jpg"
                alt="B. Sandya"
                className="w-32 h-32 mx-auto rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground">Bobba Sandya</h3>
              <p className="text-muted-foreground">Managing Director</p>
              <p className="text-muted-foreground">6+ years of experience</p>
              <p className="text-muted-foreground">GST No: 37AQGPB0863Q2ZH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            {t('home.readyTransform')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
            {t('home.scheduleToday')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-background text-primary hover:bg-background/90 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              {t('action.bookOnlineConsultation')}
            </a>
            <a 
              href="/contact"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300"
            >
              {t('footer.contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
