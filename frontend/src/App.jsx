import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedStreams from './components/FeaturedStreams';
import Categories from './components/Categories';
import Footer from './components/Footer';
import StreamModal from './components/StreamModal';
import UploadModal from './components/UploadModal';

const mockStreams = [
  {
    id: 1,
    title: "African Elephant Migration",
    streamer: "Safari Guide Mike",
  location: "Tsavo East National Park, Kenya",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.857019857956!2d38.77173331475344!3d-2.784478697887857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sTsavo%20East%20National%20Park%2C%20Kenya!5e0!3m2!1sen!2ske!4v1695570000000!5m2!1sen!2ske",
    category: "safari",
    viewers: 1247,
    thumbnail: "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 299,
    description: "Experience the breathtaking annual elephant migration across the Maasai Mara. Our expert guides provide live commentary as we follow herds of elephants on their ancient journey.",
    bookingAvailable: true,
    duration: "3 days",
    youtubeUrl: "https://www.youtube.com/embed/XsOU8JnEpNM"
  },
  {
    id: 2,
    title: "Coral Reef Exploration",
    streamer: "Ocean Explorer Sarah",
    location: "Great Barrier Reef, Australia",
    category: "underwater",
    viewers: 892,
    thumbnail: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 450,
    description: "Dive into the vibrant underwater world of the Great Barrier Reef. Witness colorful coral formations and exotic marine life in their natural habitat.",
    bookingAvailable: true,
     duration: "5 days",
     googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8588588588587!2d147.70000000000002!3d-18.287100000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bdf7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sGreat%20Barrier%20Reef!5e0!3m2!1sen!2sau!4v1695570000001!5m2!1sen!2sau"
  },
  {
    id: 3,
    title: "Mountain Lodge Wildlife",
    streamer: "Lodge Host Emma",
    location: "Swiss Alps, Switzerland",
    category: "lodge",
    viewers: 634,
    thumbnail: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 199,
    description: "Cozy mountain lodge experience with wildlife viewing opportunities. Watch deer, marmots, and birds from our comfortable lodge setting.",
    bookingAvailable: true,
     duration: "2 days",
     googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.8588588588587!2d8.700000000000001!3d46.81820000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sSwiss%20Alps!5e0!3m2!1sen!2sch!4v1695570000002!5m2!1sen!2sch"
  },
  {
    id: 4,
    title: "Lion Pride at Sunset",
    streamer: "Wildlife Pro John",
    location: "Serengeti, Tanzania",
    category: "safari",
    viewers: 2156,
    thumbnail: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 399,
    description: "Join us for an incredible evening safari as we observe a pride of lions during the golden hour. Perfect opportunity for photography enthusiasts.",
    bookingAvailable: true,
     duration: "4 days",
     googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8588588588587!2d34.70000000000001!3d-2.3333000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sSerengeti!5e0!3m2!1sen!2stz!4v1695570000003!5m2!1sen!2stz"
  },
  {
    id: 5,
    title: "Dolphin Pod Swimming",
    streamer: "Marine Biologist Alex",
    location: "Azores, Portugal",
    category: "underwater",
    viewers: 1089,
    thumbnail: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: false,
    price: 350,
    description: "Swimming with wild dolphins in the pristine waters of the Azores. An unforgettable experience with these intelligent marine mammals.",
    bookingAvailable: true,
     duration: "3 days",
     googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.8588588588587!2d-25.700000000000003!3d38.66820000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sAzores!5e0!3m2!1sen!2spt!4v1695570000004!5m2!1sen!2spt"
  },
  {
    id: 6,
    title: "Arctic Fox Winter Watch",
    streamer: "Arctic Explorer Lisa",
    location: "Svalbard, Norway",
    category: "lodge",
    viewers: 543,
    thumbnail: "https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 599,
    description: "Experience the Arctic wilderness from our heated lodge while observing arctic foxes in their winter habitat. A truly unique northern adventure.",
    bookingAvailable: true,
     duration: "6 days",
     googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.8588588588587!2d15.700000000000001!3d78.22320000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sSvalbard!5e0!3m2!1sen!2sno!4v1695570000005!5m2!1sen!2sno"
  }
];

function App() {
  const [selectedStream, setSelectedStream] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showHolidayPopup, setShowHolidayPopup] = useState(false);

  // List of Kenyan national holidays (month, day)
  const kenyanHolidays = [
    { month: 1, day: 1 },    // New Year's Day
    { month: 5, day: 1 },    // Labour Day
    { month: 6, day: 1 },    // Madaraka Day
    { month: 10, day: 20 },  // Mashujaa Day
    { month: 12, day: 12 },  // Jamhuri Day
    { month: 12, day: 25 },  // Christmas Day
    { month: 12, day: 26 },  // Boxing Day
  ];

  // Simulate special occasions announced by the government (for demo, add a date)
  const specialOccasions = [
    { month: 9, day: 24 }, // Example: Today for demo
  ];

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const isHoliday = kenyanHolidays.some(h => h.month === month && h.day === day);
    const isSpecial = specialOccasions.some(s => s.month === month && s.day === day);
    if (isHoliday || isSpecial) {
      setShowHolidayPopup(true);
    }
  }, []);

  const filteredStreams = activeCategory === 'all'
    ? mockStreams
    : mockStreams.filter(stream => stream.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onUploadClick={() => setShowUploadModal(true)} />
      <Hero />
      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <FeaturedStreams
        streams={filteredStreams}
        onStreamClick={setSelectedStream}
      />
      <Footer />

      {selectedStream && (
        <StreamModal
          stream={selectedStream}
          onClose={() => setSelectedStream(null)}
        />
      )}

      {showUploadModal && (
        <UploadModal onClose={() => setShowUploadModal(false)} />
      )}

      {/* National Park Free Entry Popup */}
      {showHolidayPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border-2 border-emerald-600">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Special Announcement</h2>
            <p className="text-lg text-slate-700 mb-4">
              <span className="font-semibold">Entry to all National Parks in Kenya is FREE for Kenyan citizens on Saturday, 27th September 2025!</span><br />
              This offer is valid on national holidays and special occasions announced by the Kenyan government.
            </p>
            <button
              className="mt-2 px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
              onClick={() => setShowHolidayPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;