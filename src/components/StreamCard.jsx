import React from 'react';
import { Eye, MapPin, DollarSign, Clock, Wifi } from 'lucide-react';

const StreamCard = ({ stream, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Live Badge */}
        {stream.isLive && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Wifi className="h-3 w-3" />
            LIVE
          </div>
        )}

        {/* Viewers */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {stream.viewers.toLocaleString()}
        </div>

        {/* Price Badge */}
        {stream.price && stream.bookingAvailable && (
          <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            {stream.price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {stream.title}
        </h3>
        
        <p className="text-slate-600 mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-600" />
          {stream.location}
        </p>

        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {stream.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-600">
            By {stream.streamer}
          </div>
          
          {stream.bookingAvailable && (
            <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
              <Clock className="h-3 w-3" />
              {stream.duration}
            </div>
          )}
        </div>

        {/* Booking Available Badge */}
        {stream.bookingAvailable && (
          <div className="mt-4 text-center">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
              Booking Available
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamCard;