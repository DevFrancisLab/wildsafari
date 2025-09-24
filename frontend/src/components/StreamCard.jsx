import React from 'react';
import { Eye, MapPin, DollarSign, Clock, Wifi } from 'lucide-react';

const StreamCard = ({ stream, onClick }) => {
  const [showShare, setShowShare] = React.useState(false);
  const shareUrl = stream.youtubeUrl || window.location.href;
  const shareText = `Check out this livestream: ${stream.title}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Livestream link copied to clipboard!');
  };
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
    >
      {/* Thumbnail or YouTube Embed */}
      <div className="relative overflow-hidden">
        {stream.youtubeUrl ? (
          <iframe
            width="100%"
            height="220"
            src={stream.youtubeUrl}
            title={stream.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-56 object-cover"
          ></iframe>
        ) : (
          <img
            src={stream.thumbnail}
            alt={stream.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
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

      {/* Share Livestream Button for First Card */}
      {stream.id === 1 && (
        <div className="mt-4 text-center">
          <button
            className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition"
            onClick={() => setShowShare(!showShare)}
          >
            Share Livestream
          </button>
          {showShare && (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl shadow border border-slate-200 flex flex-col gap-3 items-center">
              <div className="font-semibold text-slate-700 mb-2">Share this livestream:</div>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-800 transition"
                >
                  Facebook
                </a>
                <button
                  onClick={handleCopy}
                  className="bg-slate-300 text-slate-800 px-4 py-2 rounded-full font-medium hover:bg-slate-400 transition"
                >
                  Copy Link
                </button>
              </div>
              <button
                className="mt-2 px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
                onClick={() => setShowShare(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
          {stream.title}
        </h3>
        <p className="text-slate-600 mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-600" />
          {stream.location}
        </p>
        {stream.googleMapsUrl && (
          <div className="mb-4 flex justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md border border-slate-200">
              <iframe
                src={stream.googleMapsUrl}
                width="100%"
                height="180"
                className="block w-full h-44 rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${stream.location}`}
              ></iframe>
            </div>
          </div>
        )}
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