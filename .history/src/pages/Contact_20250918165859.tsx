import { useState } from 'react';
import { siteData } from '@/data/siteData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';
import vedios from '/vedios/about-bg.mp4';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',  
    message: '',
    source: 'website',
    page: 'contact'
  });
  const { t } = useI18n();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      alert(t('contact.fillRequired'));
      return;
    }
    try {
      const res = await fetch(siteData.appsScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          message: formData.message,
          source: formData.source,
          page: formData.page,
        }).toString(),
      });
      if (!res.ok) throw new Error('Network error');
      setSubmitted(true);
      setFormData(prev => ({ ...prev, name: '', phone: '', email: '', preferredDate: '', preferredTime: '', message: '' }));
      alert(t('contact.thankYou'));
    } catch (err) {
      alert('Submission failed. Please try again.');
    }
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
            {t('contact.title')}
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

            {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-serif mb-6">
                  {t('contact.getInTouch')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.helpText')}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="bg-emergency rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emergency-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-emergency" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emergency-foreground mb-2">{t('contact.emergencyCare')}</h3>
                      <p className="text-emergency-foreground/90 text-sm mb-3">
                        {t('contact.emergencyDesc')}
                      </p>
                      <a 
                        href="tel:9440959692"
                        className="bg-emergency-foreground text-emergency font-bold px-4 py-2 rounded-lg hover:bg-emergency-foreground/90 transition-colors inline-block"
                      >
                        'callnow
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FaPhone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">{t('contact.phoneNumbers')}</h3>
                      <div className="space-y-2">
                        <a 
                          href={`tel:${siteData.phones.mobile}`}
                          className="text-primary hover:text-primary-hover transition-colors block"
                        >
                          {siteData.phones.mobile} (Mobile)
                        </a>
                        <a 
                          href={`tel:${siteData.phones.landline}`}
                          className="text-primary hover:text-primary-hover transition-colors block"
                        >
                          {siteData.phones.landline} (Landline)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">{t('contact.email')}</h3>
                      <a 
                        href={`mailto:${siteData.email}`}
                        className="text-primary hover:text-primary-hover transition-colors"
                      >
                        {siteData.email.replace('{{PLACEHOLDER_EMAIL: ', '').replace('}}', '')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">{t('contact.address')}</h3>
                      <p className="text-muted-foreground">
                        {siteData.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FaClock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">{t('contact.openingHours')}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>{t('contact.monFri', { hours: siteData.openingHours.weekdays })}</p>
                        
                        <p>{t('contact.sunday', { hours: siteData.openingHours.sunday })}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-card-foreground font-serif mb-6">
                {t('contact.scheduleConsultation')}
              </h2>
              
              {/* Use the styled form (visible) and post to Google Sheets via Apps Script */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields for tracking */}
                {/* Map your fields to Google Form entry IDs */}
                <input type="hidden" name={siteData.googleForm?.entries.name} value={formData.name} />
                <input type="hidden" name={siteData.googleForm?.entries.phone} value={formData.phone} />
                <input type="hidden" name={siteData.googleForm?.entries.email} value={formData.email} />
                <input type="hidden" name={siteData.googleForm?.entries.preferredDate} value={formData.preferredDate} />
                <input type="hidden" name={siteData.googleForm?.entries.preferredTime} value={formData.preferredTime} />
                <input type="hidden" name={siteData.googleForm?.entries.message} value={formData.message} />
                <input type="hidden" name={siteData.googleForm?.entries.source} value={formData.source} />
                <input type="hidden" name={siteData.googleForm?.entries.page} value={formData.page} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      {t('contact.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder={t('contact.fullName')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      {t('contact.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-card-foreground mb-2">
                      {t('contact.preferredDate')}
                    </label>
                  <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-card-foreground  mb-2">
                      {t('contact.preferredTime')}
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    >
                      <option value="">{t('contact.selectTime')}</option>
                      <option value="morning">{t('contact.morning')}</option>
                      
                      <option value="evening">{t('contact.evening')}</option>
                    </select>
                  </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg"
                >
                  {t('contact.sendMessage')}
                </button>

                {submitted ? (
                  <p className="text-sm text-green-600 text-center">
                    {t('contact.thankYou')}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground text-center">
                    {t('contact.responseTime')}
                  </p>
                )}
              </form>
              
              {/* Remove Google Forms embed to avoid duplication */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-serif ">
              {t('contact.findUs')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('contact.located')}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Google Map */}
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.461448432644!2d81.68005697491967!3d16.753702384029413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b7fa8c756625%3A0x33a0a27d01e8b796!2sCare%20Charmalaya!5e0!3m2!1sen!2sin!4v1758108071224!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            
            {/* Directions */}
            <div className="p-6 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">{t('contact.byCar')}</h4>
                  <p className="text-sm text-muted-foreground">{t('contact.parking')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">{t('contact.publicTransport')}</h4>
                  <p className="text-sm text-muted-foreground">{t('contact.busStop')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">{t('contact.landmarks')}</h4>
                  <p className="text-sm text-muted-foreground">{t('contact.landmarkDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-500 rounded-xl p-8">
            <FaWhatsapp className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4 font-serif">
              {t('contact.whatsappTitle')}
            </h2>
            <p className="text-white/90 mb-6">
              {t('contact.whatsappDesc')}
            </p>
            <a 
              href={`https://wa.me/${siteData.phones.mobile.replace(/[^\d]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 hover:bg-white/90 font-medium px-8 py-4 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>{t('contact.chatWhatsApp')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;