import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/siteData';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';
import vedios from '/vedios/about-bg.mp4';

const Blog = () => {
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
            {t('blog.title')}
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover"
              >
                {/* Featured Image */}
                <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaUser className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <p className="text-primary font-medium">Dr. M. Bhargavi</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUser className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-card-foreground mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.summary}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-medium text-sm transition-colors"
                  >
                    <span>{t('blog.readFull')}</span>
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUser className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-2xl font-bold text-card-foreground mb-4 font-serif">
              {t('blog.aboutAuthor')}
            </h2>
            
            <h3 className="text-xl font-semibold text-primary mb-3">
              Dr. M. Bhargavi [MBBS, MD, DVL]
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dr. M. Bhargavi is a board-certified dermatologist with over 12 years of experience in medical, 
              surgical, and cosmetic dermatology. She specializes in providing evidence-based treatments 
              and patient education to help individuals achieve optimal skin health.
            </p>
            
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-secondary-foreground text-sm">
                <strong>{t('blog.credentials')}</strong> MBBS, MD (Dermatology), DVL (Diploma in Dermatology & Venereology)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 font-serif">
            {t('blog.newsletterTitle')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            {t('blog.newsletterDesc')}
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={t('blog.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:border-primary-foreground focus:outline-none"
              />
              <button className="bg-background text-primary hover:bg-background/90 font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                {t('blog.subscribe')}
              </button>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-3">
              {t('blog.privacy')}
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Blog;