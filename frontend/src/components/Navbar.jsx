import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={`bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
        scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end h-10 text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-gray-900 transition-colors hover:scale-105 transform duration-200">About Us</a>
              <a href="#work" className="hover:text-gray-900 transition-colors hover:scale-105 transform duration-200">Work with Us</a>
              <a href="#news" className="hover:text-gray-900 transition-colors hover:scale-105 transform duration-200">Newsroom</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with glass effect */}
      <nav className={`bg-white/80 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-500 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo with hover effect */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900 transform group-hover:translate-x-1 transition-transform duration-300">netscribes</span>
            </div>

            {/* Center Navigation with underline animation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#solutions" className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium group">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#industries" className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium group">
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#insights" className="relative text-gray-700 hover:text-gray-900 transition-colors font-medium group">
                Insights
                <span className="absolute bottom-0 left-0 w-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                {isDark ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;