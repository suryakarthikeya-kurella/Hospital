import { siteData } from '@/data/siteData';
import { FaAward, FaClock, FaHospital, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
   <div className="py-20">
  {/* Page Header */}
  <section className="bg-secondary py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
  About {siteData.name}
</h1>

      <p className="text-xl text-secondary-foreground max-w-4xl mx-auto">
        {siteData.about.description}
      </p>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
            <FaHospital className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-4 drop-shadow-md">
            Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed italic text-center">
            {siteData.about.vision}
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
            <FaUsers className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-4 drop-shadow-md">
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed italic text-center">
            {siteData.about.mission}
          </p>
        </div>
      </div>
    </div>
  </section>



      {/* Hospital Facts */}
<section className="py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">
        Hospital Overview
      </h2>
      <p className="text-xl text-muted-foreground">
        Key facts about our facility and services
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <FaUsers className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="text-3xl font-bold text-primary mb-2">{siteData.patientsTreated}</div>
        <div className="text-muted-foreground">Patients Treated</div>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <FaClock className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="text-3xl font-bold text-primary mb-2">{siteData.years}</div>
        <div className="text-muted-foreground">Years of Service</div>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <FaAward className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="text-3xl font-bold text-primary mb-2">30+</div>
        <div className="text-muted-foreground">Treatment Types</div>
      </div>
    </div>
  </div>
</section>


      {/* Awards & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">
              Awards & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Recognition for excellence in dermatological care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.awards.map((award, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center card-hover">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {award.replace(/\{\{PLACEHOLDER_AWARD_\d+: /, '').replace('}}', '')}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      {/* Opening Hours */}
<section className="py-20 bg-secondary">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
      Opening Hours
    </h2>
    
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex flex-col items-start py-2 border-b border-border">
            <span className="font-medium text-card-foreground text-lg">Monday - Saturday (OPD)</span>
            <span className="text-muted-foreground text-sm">{siteData.openingHours.weekdays}</span>
          </div>
          
          <div className="flex flex-col items-start py-2 border-b border-border">
            <span className="font-medium text-card-foreground text-lg">Monday - Saturday (Clinic)</span>
            <span className="text-muted-foreground text-sm">{siteData.openingHours.clinic}</span>
          </div>

          <div className="flex flex-col items-start py-2">
            <span className="font-medium text-card-foreground text-lg">Sunday</span>
            <span className="text-muted-foreground text-sm">{siteData.openingHours.sunday}</span>
          </div>
        </div>
        
       <div className="md:border-l md:border-border md:pl-6">
  {/* Outer Box with Blue Background */}
  <div className="bg-blue-500 rounded-lg p-4 text-center">
    {/* Inner Box with White Background */}
    <div className="bg-white rounded-lg p-6">
      <FaClock className="w-8 h-8 text-blue-500 mx-auto mb-2" /> {/* Icon with blue color */}
      <h3 className="font-bold text-blue-500 mb-1">Emergency Care</h3> {/* Heading with blue text */}
      <p className="text-gray-700 text-sm">{siteData.openingHours.emergency}</p> {/* Text with gray color */}
      {/* Contact Button */}
      <a 
        href={`tel:${siteData.phones.mobile}`}
        className="inline-block mt-3 bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {siteData.phones.mobile}
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;