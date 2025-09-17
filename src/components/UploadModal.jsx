import React, { useState } from 'react';
import { X, Upload, MapPin, DollarSign, Camera, Wifi } from 'lucide-react';

const UploadModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: 'safari',
    price: '',
    duration: '',
    bookingAvailable: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Stream setup initiated! In a real app, this would start the live streaming process.');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Camera className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Start Live Stream</h2>
              <p className="text-slate-600">Share your wildlife adventure with the world</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Stream Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
              Stream Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., African Safari Adventure"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your wildlife experience and what viewers can expect to see..."
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          {/* Location and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                <MapPin className="h-4 w-4 inline mr-1" />
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Maasai Mara, Kenya"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                <option value="safari">Safari Parks</option>
                <option value="underwater">Underwater</option>
                <option value="lodge">Lodge</option>
              </select>
            </div>
          </div>

          {/* Booking Options */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Booking Options</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="bookingAvailable"
                  checked={formData.bookingAvailable}
                  onChange={handleChange}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm font-medium text-slate-700">Enable Booking</span>
              </label>
            </div>

            {formData.bookingAvailable && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-2">
                    <DollarSign className="h-4 w-4 inline mr-1" />
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="299"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="3 days"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Camera Setup */}
          <div className="bg-gradient-to-br from-emerald-50 to-orange-50 p-6 rounded-lg border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-800">Stream Setup</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Make sure your camera and internet connection are ready for streaming. 
              We recommend a minimum upload speed of 5 Mbps for HD quality.
            </p>
            <div className="text-sm text-slate-500">
              <p>✓ Check camera permissions</p>
              <p>✓ Ensure stable internet connection</p>
              <p>✓ Test audio levels</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-orange-600 text-white rounded-lg hover:from-emerald-700 hover:to-orange-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <Upload className="h-5 w-5" />
              Start Streaming
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;