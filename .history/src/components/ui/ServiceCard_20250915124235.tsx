import { FaStethoscope, FaStar, FaCut, FaShieldAlt } from 'react-icons/fa';

interface ServiceCardProps {
  category: string;
  icon: string;
  treatments: string[];
}

const iconMap = {
  FaStethoscope,
  FaSparkles: FaStar,
  FaScalpel: FaCut,
  FaShieldAlt,
};

const ServiceCard = ({ category, icon, treatments }: ServiceCardProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || FaStethoscope;

  return (
    <div className="bg-card border border-border rounded-xl p-6 card-hover">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{category}</h3>
      </div>
      
      <ul className="space-y-2">
        {treatments.map((treatment, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span>{treatment}</span>
          </li>
        ))}
      </ul>
      
      
    </div>
  );
};

export default ServiceCard;