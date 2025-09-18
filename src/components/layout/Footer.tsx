import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaClock } from 'react-icons/fa';
import  {siteData}  from '../../data/siteData.js';
import { useI18n } from '@/i18n/I18nProvider';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-muted mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div> */}
              <img src="/assets/gallery/logo.png" alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
              <img src="" alt="" />
              <div>
                <h3 className="font-bold text-lg text-foreground">{siteData.name}</h3>
                <p className="text-sm text-muted-foreground">Skin-Hair-Laser</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footer.specializedCare', { years: siteData.years, patients: siteData.patientsTreated })}
            </p>
          </div>

          {/* Contact Info */
          }
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{siteData.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-primary" />
                <div className="space-y-1">
                  <a href={`tel:${siteData.phones.mobile}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    {siteData.phones.mobile}
                  </a>
                  <a href={`tel:${siteData.phones.landline}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    {siteData.phones.landline}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-primary" />
                <a href={`mailto:${siteData.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {siteData.email.replace('{{PLACEHOLDER_EMAIL: ', '').replace('}}', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.openingHours')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaClock className="w-4 h-4 text-primary mt-1" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {t('footer.mondayFriday', { hours: siteData.openingHours.weekdays })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('footer.saturday', { hours: siteData.openingHours.saturday })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('footer.sunday', { hours: siteData.openingHours.sunday })}
                  </p>
                  <p className="text-sm text-emergency font-medium">
                    {siteData.openingHours.emergency}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                {t('footer.aboutUs')}
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                {t('footer.ourServices')}
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                {t('footer.gallery')}
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                {t('footer.healthTips')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                {t('footer.contactUs')}
              </Link>
              
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h5 className="font-medium text-foreground mb-3">{t('footer.followUs')}</h5>
              <div className="flex space-x-3">
                <a href={siteData.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href={siteData.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href={siteData.social.youtube} className="text-muted-foreground hover:text-primary transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteData.name}. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {t('footer.ledBy', { name: siteData.doctor.name })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;