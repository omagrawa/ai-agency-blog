import { getSortedPostsData, type PostMetadata } from '@/utils/loadPosts';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  // ...existing code...
  
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
            AI & Technology Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Exploring the latest in AI, automation, and technology trends.
          </p>
          <div className="flex justify-center gap-4 " >
            <Link to="/blog" className="btn bg-black">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link to={`/blog/${post.slug}`}  key={index} className="group">
                <div className="card p-6 h-full transition-all duration-300 hover:shadow-lg dark:hover:bg-gray-800">
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
                    <span>{moment(post.date).format("DD-MM-YYYY")}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
