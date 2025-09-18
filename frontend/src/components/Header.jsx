import React from 'react';
import { Camera, Menu, User, Search } from 'lucide-react';

const Header = ({ onUploadClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-800">WildSafari</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search streams, locations, or wildlife..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-slate-50"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#streams" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
              Explore
            </a>
            <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
              About
            </a>
            <button
              onClick={onUploadClick}
              className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              Go Live
            </button>
            <button className="p-2 text-slate-600 hover:text-emerald-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;