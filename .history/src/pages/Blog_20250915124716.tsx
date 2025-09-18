import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/siteData';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="py-20">
      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
            Health Tips & Blog
          </h1>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto">
            Expert advice and insights from Dr. M. Bhargavi on skin care, treatments, and maintaining healthy skin
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
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaUser className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="text-primary font-medium">Dr. M. Bhargavi</p>
                  </div>
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
                    <span>Read Full Article</span>
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
            
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              About the Author
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
                <strong>Credentials:</strong> MBBS, MD (Dermatology), DVL (Diploma in Dermatology & Venereology)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get the latest skin care tips and treatment updates delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:border-primary-foreground focus:outline-none"
              />
              <button className="bg-background text-primary hover:bg-background/90 font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Instructions */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Content Management Instructions
          </h2>
          <div className="bg-card border border-border rounded-lg p-6 text-left">
            <h3 className="font-semibold text-card-foreground mb-3">To add or edit blog posts:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Edit the <code>blogPosts</code> array in <code>/src/data/siteData.js</code></li>
              <li>• Each post needs: id, title, author, date, summary, and content</li>
              <li>• Use markdown formatting in the content field for rich text</li>
              <li>• Author should be "Dr. M Bhargavi" for consistency</li>
              <li>• Add featured images to <code>/public/assets/blog/</code> if needed</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;