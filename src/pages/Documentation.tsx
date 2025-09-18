import { siteData } from '@/data/siteData';
import { FaCode, FaImage, FaDatabase, FaGlobe, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';

const Documentation = () => {
  const placeholders = [
    {
      token: "{{GOOGLE_DOCS_FORM_URL}}",
      description: "Google Form or Apps Script endpoint for contact form submissions",
      location: "src/data/siteData.js",
      usage: "Contact form action URL"
    },
    {
      token: "{{GOOGLE_MAPS_EMBED_URL}}",
      description: "Google Maps embed iframe source URL",
      location: "src/data/siteData.js",
      usage: "Contact page map display"
    },
    {
      token: "{{PLACEHOLDER_EMAIL: info@carecharmalaya.com}}",
      description: "Hospital email address",
      location: "src/data/siteData.js",
      usage: "Contact information display"
    },
    {
      token: "{{PLACEHOLDER_BEDS: 10}}",
      description: "Number of hospital beds",
      location: "src/data/siteData.js",
      usage: "About page statistics"
    },
    {
      token: "{{PLACEHOLDER_DOCTOR_EXPERIENCE: 12+ years}}",
      description: "Doctor's years of experience",
      location: "src/data/siteData.js",
      usage: "Doctor profile information"
    },
    {
      token: "{{PLACEHOLDER_AWARD_1}}, {{PLACEHOLDER_AWARD_2}}, {{PLACEHOLDER_AWARD_3}}",
      description: "Hospital awards and certifications",
      location: "src/data/siteData.js",
      usage: "About page awards section"
    },
    {
      token: "{{PLACEHOLDER_FACEBOOK_URL}}, {{PLACEHOLDER_INSTAGRAM_URL}}, {{PLACEHOLDER_YOUTUBE_URL}}",
      description: "Social media profile URLs",
      location: "src/data/siteData.js",
      usage: "Footer social links"
    }
  ];

  const imageFiles = [
    {
      path: "/public/assets/hero.jpg",
      description: "Main hero image for homepage",
      dimensions: "1920x1080",
      usage: "Homepage hero section background"
    },
    {
      path: "/public/assets/doctor-bhargavi.jpg",
      description: "Dr. M. Bhargavi professional photo",
      dimensions: "800x800",
      usage: "Doctor profile card"
    },
    {
      path: "/public/assets/gallery/opd.jpg",
      description: "OPD waiting area photo",
      dimensions: "1200x800",
      usage: "Gallery and about page"
    },
    {
      path: "/public/assets/gallery/procedure-room.jpg",
      description: "Treatment/procedure room photo",
      dimensions: "1200x800",
      usage: "Gallery page"
    },
    {
      path: "/public/assets/cases/before-*.jpg",
      description: "Before treatment photos for case studies",
      dimensions: "800x600",
      usage: "Cases page before/after comparisons"
    },
    {
      path: "/public/assets/cases/after-*.jpg",
      description: "After treatment photos for case studies",
      dimensions: "800x600",
      usage: "Cases page before/after comparisons"
    }
  ];

  const fileStructure = [
    {
      path: "src/",
      description: "Main source code directory",
      children: [
        "components/ - Reusable UI components",
        "data/ - Site data and content",
        "pages/ - Page components",
        "lib/ - Utility functions"
      ]
    },
    {
      path: "public/",
      description: "Static assets directory",
      children: [
        "assets/ - Images and media files",
        "assets/gallery/ - Photo gallery images",
        "assets/cases/ - Before/after case photos"
      ]
    }
  ];

  const { t } = useI18n();
  return (
    <div className="py-20">
      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('docs.title')}
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('docs.subtitle')}
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('docs.quickStart')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('docs.quickStartDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Update Content</h3>
              <p className="text-sm text-muted-foreground">Edit siteData.js for all text content</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Replace Images</h3>
              <p className="text-sm text-muted-foreground">Upload your photos to /public/assets/</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Connect Forms</h3>
              <p className="text-sm text-muted-foreground">Set up Google Forms for contact submissions</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Deploy</h3>
              <p className="text-sm text-muted-foreground">Publish to Netlify or Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholders */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <FaCode className="inline-block w-8 h-8 mr-3 text-primary" />
              {t('docs.placeholders')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('docs.placeholdersDesc')}
            </p>
          </div>
          
          <div className="space-y-6">
            {placeholders.map((placeholder, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Token</h3>
                    <code className="text-sm bg-muted text-primary p-2 rounded break-all">
                      {placeholder.token}
                    </code>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Description</h3>
                    <p className="text-sm text-muted-foreground">{placeholder.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                    <code className="text-sm bg-muted text-muted-foreground p-2 rounded">
                      {placeholder.location}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <FaImage className="inline-block w-8 h-8 mr-3 text-primary" />
              {t('docs.imagesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('docs.imagesDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imageFiles.map((image, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-card-foreground mb-3">{image.description}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Path: </span>
                    <code className="bg-muted text-primary p-1 rounded">{image.path}</code>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Recommended size: </span>
                    <span className="text-muted-foreground">{image.dimensions}</span>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Used in: </span>
                    <span className="text-muted-foreground">{image.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Management */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <FaDatabase className="inline-block w-8 h-8 mr-3 text-primary" />
              {t('docs.contentMgmt')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('docs.contentMgmtDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{t('docs.siteData')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('docs.editSiteData')}
              </p>
              <code className="block bg-muted text-primary p-3 rounded-lg mb-4 text-sm">
                src/data/siteData.js
              </code>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Hospital information</p>
                <p>• Contact details</p>
                <p>• Services and treatments</p>
                <p>• Doctor information</p>
                <p>• Opening hours</p>
                <p>• Awards and certifications</p>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{t('docs.blogPosts')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('docs.addEditPosts')}
              </p>
              <code className="block bg-muted text-primary p-3 rounded-lg mb-4 text-sm">
                blogPosts array in siteData.js
              </code>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• 3 sample posts included</p>
                <p>• Easy to add more posts</p>
                <p>• Supports basic markdown formatting</p>
                <p>• All posts authored by Dr. M. Bhargavi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Setup */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <FaGlobe className="inline-block w-8 h-8 mr-3 text-primary" />
              {t('docs.techSetup')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('docs.deployDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Google Forms Integration</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Step 1: Create Google Form</h4>
                  <p>Create a Google Form with fields: name, phone, email, preferredDate, preferredTime, message</p>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Step 2: Get Form URL</h4>
                  <p>Get the form's submit URL or create an Apps Script endpoint</p>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Step 3: Update Code</h4>
                  <p>Replace <code>siteData.googleFormUrl</code> with your actual URL</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Deployment Options</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Netlify (Recommended)</h4>
                  <p>• Build command: <code>npm run build</code></p>
                  <p>• Publish directory: <code>dist</code></p>
                  <p>• Automatic deployments from Git</p>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Vercel</h4>
                  <p>• Auto-detects Vite configuration</p>
                  <p>• Zero-configuration deployments</p>
                  <p>• Excellent performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <FaFileAlt className="inline-block w-8 h-8 mr-3 text-primary" />
              {t('docs.projectStructure')}
            </h2>
            <p className="text-xl text-muted-foreground">
              Understanding the codebase organization
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-6">
              {fileStructure.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-card-foreground mb-3">
                    <code className="bg-muted text-primary p-2 rounded">{item.path}</code>
                    <span className="ml-3 font-normal text-muted-foreground">{item.description}</span>
                  </h3>
                  <ul className="ml-8 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex} className="text-sm text-muted-foreground">
                        • {child}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('docs.needHelp')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('docs.needHelpDesc')}
          </p>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-card-foreground mb-3">Quick Checklist</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Replace all placeholder tokens</li>
                  <li>✓ Upload real hospital photos</li>
                  <li>✓ Connect Google Forms</li>
                  <li>✓ Update social media links</li>
                  <li>✓ Test contact form submission</li>
                  <li>✓ Verify all phone numbers work</li>
                  <li>✓ Check mobile responsiveness</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-card-foreground mb-3">SEO & Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Meta descriptions added</li>
                  <li>✓ Alt text for all images</li>
                  <li>✓ Proper heading structure</li>
                  <li>✓ Fast loading times</li>
                  <li>✓ Mobile-friendly design</li>
                  <li>✓ Semantic HTML structure</li>
                  <li>✓ Clean, crawlable URLs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;