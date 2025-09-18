import { siteData } from '@/data/siteData';
import { useI18n } from '@/i18n/I18nProvider';

const StatsSection = () => {
  const { t } = useI18n();
  return (
    <div className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-secondary-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Emergency Contact Strip */}
        <div className="mt-12 bg-emergency rounded-xl p-5 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-emergency-foreground font-medium">
              {siteData.openingHours.emergency}
            </span>
            <a 
              href="tel:9440959692"
              className="text-emergency-foreground font-bold text-lg hover:underline"
            >
              Call No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;