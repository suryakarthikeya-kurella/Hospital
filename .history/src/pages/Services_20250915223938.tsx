import { siteData } from '@/data/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="py-20">
      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
            Our Services
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            Comprehensive dermatology care covering medical, cosmetic, and surgical treatments for all your skin health needs
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
              Emergency Dermatology Care
            </h2>
            <p className="text-xl text-emergency-foreground/90 mb-6">
              Urgent skin conditions require immediate attention. We provide 24/7 emergency care for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              <ul className="space-y-2 text-emergency-foreground">
                <li>• Severe allergic reactions</li>
                <li>• Acute skin infections</li>
                <li>• Chemical burns</li>
                <li>• Severe eczema flare-ups</li>
              </ul>
              <ul className="space-y-2 text-emergency-foreground">
                <li>• Suspicious mole changes</li>
                <li>• Sudden severe acne outbreaks</li>
                <li>• Post-procedure complications</li>
                <li>• Severe sun burns</li>
              </ul>
            </div>
            <a 
              href={`tel:${siteData.phones.mobile}`}
              className="bg-emergency-foregrd text-black font-bold px-8 py-4 rounded-lg hover:bg-emergency-foreground/90 transition-colors inline-flex items-center space-x-2"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>Call Emergency: {siteData.phones.mobile}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive approach to your skin health journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">Detailed examination and medical history review</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Diagnosis</h3>
              <p className="text-muted-foreground">Accurate diagnosis using advanced diagnostic tools</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground">Customized treatment plan tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Follow-up</h3>
              <p className="text-muted-foreground">Regular monitoring and care adjustments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule a consultation with Dr. M. Bhargavi to discuss your skin concerns and treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary hover:bg-background/90 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center space-x-2">
              <FaCalendarAlt className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
            <a 
              href={`tel:${siteData.phones.mobile}`}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;