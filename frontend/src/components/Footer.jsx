import React from 'react';
import { Camera, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold">WildSafari</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Connecting wildlife enthusiasts with incredible live experiences from around the globe. 
              Stream, explore, and book your next adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Explore Streams</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Safari Parks</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Underwater</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mountain Lodges</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Start Streaming</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Booking Help</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Streamer Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Safety</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-4 w-4" />
                <span>support@wildsafari.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>Wildlife Preserve HQ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 WildSafari. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;