import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/siteData';
import { FaCalendarAlt, FaUser, FaArrowLeft, FaShare } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useI18n();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t('blogPost.postNotFound')}</h1>
          <p className="text-muted-foreground mb-8">{t('blogPost.notFoundDesc')}</p>
          <Link to="/blog" className="btn-primary">
            {t('blogPost.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-6">
          {paragraph.split('**').map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="py-20">
      {/* Back Navigation */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>{t('blogPost.backToBlog')}</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            {post.image && (
              <div className="mb-6">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
              </div>
            )}
            
            <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <FaUser className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-secondary rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUser className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-secondary-foreground">Dr. M. Bhargavi</h3>
                  <p className="text-sm text-muted-foreground">MBBS, MD, DVL - Consultant Dermatologist</p>
                  <p className="text-sm text-muted-foreground">12+ years of experience in dermatology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-card border border-border rounded-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{t('blogPost.share')}</p>
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary-hover transition-colors">
                      <FaShare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('blog.moreTips')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-card border border-border rounded-xl p-6 card-hover block"
                >
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{relatedPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUser className="w-3 h-3" />
                      <span>{relatedPost.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {relatedPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {relatedPost.summary}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            {t('blog.haveQuestions')}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            {t('blog.scheduleAdvice')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary hover:bg-background/90 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              {t('services.bookConsultation')}
            </button>
            <Link 
              to="/contact"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium px-8 py-4 rounded-lg transition-all duration-300"
            >
              {t('footer.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;