import { getSortedPostsData, type PostMetadata } from '@/utils/loadPosts';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/components/useSEO';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  
  // SEO optimization for homepage
  useSEO({
    title: "AI & DevOps Services - Expert Development & Automation Solutions",
    description: "Leading AI Agency providing cutting-edge AI development, DevOps automation, and digital transformation services. Expert insights on AI, machine learning, automation, and cloud infrastructure.",
    url: "https://blog.smsidea.in/"
  });
  
  useEffect(() => {
    try {
      const postsData = getSortedPostsData();
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    }
  }, []);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            AI & DevOps Development Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Expert AI development, DevOps automation, and digital transformation services. 
            We help businesses leverage cutting-edge technology for competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/blog" className="btn bg-black">
              Read Our Insights
            </Link>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our AI & DevOps Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 h-full">
              <div className="text-blue-600 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">AI Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom AI solutions, machine learning models, and intelligent automation systems 
                tailored to your business needs.
              </p>
            </div>
            <div className="card p-6 h-full">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">DevOps Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                CI/CD pipelines, infrastructure as code, cloud deployment, and automated 
                testing for faster, reliable software delivery.
              </p>
            </div>
            <div className="card p-6 h-full">
              <div className="text-blue-600 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end digital transformation consulting, helping businesses modernize 
                their technology stack and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Latest AI & DevOps Insights
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and expert insights in AI development and DevOps automation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post, index) => (
              <article key={index} className="group">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="card p-6 h-full transition-all duration-300 hover:shadow-lg dark:hover:bg-gray-700">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
                      <time dateTime={post.date}>{moment(post.date).format("DD-MM-YYYY")}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our AI and DevOps experts help you build scalable, intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@aiagency.com" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </a>
            <Link to="/blog" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
