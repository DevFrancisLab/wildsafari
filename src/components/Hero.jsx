import React from 'react';
import { Play, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1197604/pexels-photo-1197604.jpeg?auto=compress&cs=tinysrgb&w=1600')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-slate-800/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Experience Wildlife
            <span className="block text-orange-400">Live & Up Close</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
            Stream live wildlife adventures from game parks, underwater expeditions, and mountain lodges. 
            Book your next adventure directly from the streams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Play className="h-5 w-5" />
              Watch Live Streams
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Explore Destinations
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="h-5 w-5 text-orange-400" />
                <span className="text-2xl font-bold">50K+</span>
              </div>
              <p className="text-slate-300">Active Viewers</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Play className="h-5 w-5 text-orange-400" />
                <span className="text-2xl font-bold">200+</span>
              </div>
              <p className="text-slate-300">Live Streams</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-2xl font-bold">80+</span>
              </div>
              <p className="text-slate-300">Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;