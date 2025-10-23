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
        scrolled ? 'shadow-lg' : 'shadow-none'\n      }`}>\n        <div className=\"container mx-auto px-6\">\n          <div className=\"flex items-center justify-between h-16\">\n            {/* Logo with hover effect */}\n            <div className=\"flex items-center space-x-2 group cursor-pointer\">\n              <div className=\"w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300\">\n                <span className=\"text-white font-bold text-lg\">N</span>\n              </div>\n              <span className=\"text-xl font-bold text-gray-900 transform group-hover:translate-x-1 transition-transform duration-300\">netscribes</span>\n            </div>\n\n            {/* Center Navigation with underline animation */}\n            <div className=\"hidden md:flex items-center space-x-8\">\n              <a href=\"#services\" className=\"relative text-gray-700 hover:text-gray-900 transition-colors font-medium group\">\n                Services\n                <span className=\"absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300\"></span>\n              </a>\n              <a href=\"#solutions\" className=\"relative text-gray-700 hover:text-gray-900 transition-colors font-medium group\">\n                Solutions\n                <span className=\"absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300\"></span>\n              </a>\n              <a href=\"#industries\" className=\"relative text-gray-700 hover:text-gray-900 transition-colors font-medium group\">\n                Industries\n                <span className=\"absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300\"></span>\n              </a>\n              <a href=\"#insights\" className=\"relative text-gray-700 hover:text-gray-900 transition-colors font-medium group\">\n                Insights\n                <span className=\"absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300\"></span>\n              </a>\n            </div>\n\n            {/* Right Side */}\n            <div className=\"flex items-center space-x-4\">\n              <button\n                onClick={() => setIsDark(!isDark)}\n                className=\"p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-12\"\n              >\n                {isDark ? <Sun className=\"w-5 h-5 text-gray-600\" /> : <Moon className=\"w-5 h-5 text-gray-600\" />}\n              </button>\n              \n              <Button className=\"bg-gray-900 hover:bg-gray-800 text-white px-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300\">\n                Talk to Us\n              </Button>\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n  );\n};\n\nexport default Navbar;