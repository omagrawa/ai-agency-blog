import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">AI Agency</h3>
            <p className="text-gray-300 mb-4">
              Leading AI development and DevOps automation services. We help businesses 
              leverage cutting-edge technology for competitive advantage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/cbankit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/blog" className="hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">DevOps Automation</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <a href="mailto:ankit@crimsonbeans.com" className="hover:text-white transition-colors">
                  ankit@crimsonbeans.com
                </a>
              </div>
              <div>
                <a href="tel:+4407733512058" className="hover:text-white transition-colors">
                  +44 07733512058
                </a>
              </div>
              <div className="text-sm">
                33 Hanworth Road<br />
                Sunbury on Thames<br />
                TW16 5DA, U.K.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AI Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
