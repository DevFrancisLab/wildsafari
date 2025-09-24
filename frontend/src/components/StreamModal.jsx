import React from 'react';
import { X, Eye, MapPin, DollarSign, Clock, Calendar, Users, Star, Wifi } from 'lucide-react';

const StreamModal = ({ stream, onClose }) => {
  const [showShare, setShowShare] = React.useState(false);
  const shareUrl = stream.youtubeUrl || window.location.href;
  const shareText = `Check out this livestream: ${stream.title}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Livestream link copied to clipboard!');
  };
  const handleBooking = () => {
    alert(`Booking ${stream.title} for $${stream.price} - This would integrate with a booking system!`);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          {stream.youtubeUrl ? (
            <iframe
              src={stream.youtubeUrl}
              title={stream.title}
              width="100%"
              height="320"
              className="w-full h-80 object-cover rounded-t-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={stream.thumbnail}
              alt={stream.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {/* Live Badge */}
          {stream.isLive && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Wifi className="h-4 w-4" />
              LIVE NOW
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Title and Basic Info */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">{stream.title}</h2>
              <p className="text-slate-600 flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                {stream.location}
              </p>
              <p className="text-slate-600">Hosted by {stream.streamer}</p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-600">
              <Eye className="h-5 w-5" />
              {stream.viewers.toLocaleString()} watching
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">About This Experience</h3>
            <p className="text-slate-600 leading-relaxed">{stream.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">4.9/5</div>
              <div className="text-sm text-slate-600">Rating</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">256</div>
              <div className="text-sm text-slate-600">Reviews</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">Daily</div>
              <div className="text-sm text-slate-600">Availability</div>
            </div>
          </div>

          {stream.bookingAvailable && (
            <>
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-orange-50 p-6 rounded-xl border border-emerald-200 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-emerald-600" />
                      ${stream.price}
                    </h3>
                    <p className="text-slate-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {stream.duration} experience
                    </p>
                  </div>
                  <button
                    onClick={handleBooking}
                    className="bg-gradient-to-r from-emerald-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
                
                <div className="text-sm text-slate-600">
                  <p className="mb-2">✓ Professional guide included</p>
                  <p className="mb-2">✓ Equipment provided</p>
                  <p className="mb-2">✓ Transportation arranged</p>
                  <p>✓ Cancel up to 24 hours before</p>
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors"
              onClick={() => setShowShare(!showShare)}
            >
              Share Stream
            </button>
            <button className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors">
              Save for Later
            </button>
            {!stream.bookingAvailable && (
              <button className="flex-1 bg-orange-600 text-white py-3 rounded-full font-medium hover:bg-orange-700 transition-colors">
                Contact Streamer
              </button>
            )}
          </div>

          {/* Share Dialog */}
          {showShare && (
            <div className="mt-6 p-4 bg-slate-50 rounded-xl shadow border border-slate-200 flex flex-col gap-3 items-center">
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
      </div>
    </div>
  );
};

export default StreamModal;