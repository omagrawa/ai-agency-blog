import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              SMS Idea
            </Link>
          </div>
          
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>
          </nav>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} SMS Idea. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
