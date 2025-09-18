import { siteData } from '@/data/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';

import vedios from '/vedios/about-bg.mp4';


const Services = () => {
  const { t } = useI18n();
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
            {t('services.title')}
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteData.services.map((service, index) => (
              <div key={index} className="col-span-1">
                <ServiceCard
                  category={service.category}
                  icon={service.icon}
                  treatments={service.treatments}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-500 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emergency-foreground mb-4 font-serif">
              {t('services.emergencyTitle')}
            </h2>
            <p className="text-xl text-emergency-foreground/90 mb-6">
              {t('services.emergencyDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              <ul className="space-y-2 text-emergency-foreground">
                <li>• {t('services.severeAllergic')}</li>
                <li>• {t('services.acuteInfections')}</li>
                <li>• {t('services.chemicalBurns')}</li>
                <li>• {t('services.severeEczema')}</li>
              </ul>
              <ul className="space-y-2 text-emergency-foreground">
                <li>• {t('services.suspiciousMoles')}</li>
                <li>• {t('services.severeAcne')}</li>
                <li>• {t('services.postProcedure')}</li>
                <li>• {t('services.severeSunburns')}</li>
              </ul>
            </div>
            <a 
              href={`tel:${siteData.phones.mobile}`}
              className="bg-emergency-foreground text-black font-bold px-8 py-4 rounded-lg hover:bg-emergency-foreground/90 transition-colors inline-flex items-center space-x-2"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>{t('services.callEmergency', { number: siteData.phones.mobile })}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif mb-4">
              {t('services.processTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('services.processDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('services.step1')}</h3>
              <p className="text-muted-foreground">{t('services.step1Desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('services.step2')}</h3>
              <p className="text-muted-foreground">{t('services.step2Desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('services.step3')}</h3>
              <p className="text-muted-foreground">{t('services.step3Desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('services.step4')}</h3>
              <p className="text-muted-foreground">{t('services.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground font-serif mb-6">
            {t('services.readyTitle')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            {t('services.readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary hover:bg-background/90 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center space-x-2">
              <FaCalendarAlt className="w-5 h-5" />
              <span>{t('services.bookConsultation')}</span>
            </button>
            <a 
              href={`tel:${siteData.phones.mobile}`}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>{t('action.callNow')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;