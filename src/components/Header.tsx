import React from 'react';
import { Link } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';
// import { FiSun, FiMoon } from 'react-icons/fi';

const Header: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Ripple AI
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Blog
          </Link>
        </nav>

  {/* Theme toggle and mobile nav removed for now to fix unused variable/import errors */}
      </div>
    </header>
  );
};

export default Header;
