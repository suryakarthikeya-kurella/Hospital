import { siteData } from '@/data/siteData';
import { useI18n } from '@/i18n/I18nProvider';
import { Link } from 'react-router-dom';

const DoctorCard = () => {
  const { t } = useI18n();
  return (
    <div className="bg-card border border-border rounded-xl p-8 card-hover">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={siteData.doctor.image}
            alt={`${siteData.doctor.name} - Consultant Dermatologist`}
            className="w-48 h-48 lg:w-56 lg:h-56 rounded-xl object-cover border-4 border-primary"
            loading="lazy"
          />
        </div>
        
        {/* Doctor Info */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-2">
            {siteData.doctor.name}
          </h3>
          <p className="text-primary font-medium text-lg mb-3">
            {siteData.doctor.title}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-2">Registration No:
            {siteData.doctor.RegistrationNumber.replace('{{PLACEHOLDER_DOCTOR_REGISTRATION_NUMBER: ', '').replace('}}', '')}
          </p>
          <div className="bg-secondary rounded-lg p-4 mb-6">
            <div className="text-sm text-secondary-foreground">
              <span className="font-medium">Experience:</span> {siteData.doctor.experience.replace('{{PLACEHOLDER_DOCTOR_EXPERIENCE: ', '').replace('}}', '')}
            </div>
          </div>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {siteData.doctor.bio}
          </p>
         
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary">
              {t('services.bookConsultation')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;