import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">netscribes</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</a>
            <a href="#solutions" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Solutions</a>
            <a href="#industries" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Industries</a>
            <a href="#insights" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Insights</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
              <a href="#about" className="hover:text-gray-900 transition-colors">About Us</a>
              <a href="#work" className="hover:text-gray-900 transition-colors">Work with Us</a>
              <a href="#news" className="hover:text-gray-900 transition-colors">Newsroom</a>
            </div>
            
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;