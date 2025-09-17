import React, { useState } from 'react';
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
    location: "Maasai Mara, Kenya",
    category: "safari",
    viewers: 1247,
    thumbnail: "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=800",
    isLive: true,
    price: 299,
    description: "Experience the breathtaking annual elephant migration across the Maasai Mara. Our expert guides provide live commentary as we follow herds of elephants on their ancient journey.",
    bookingAvailable: true,
    duration: "3 days"
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
    duration: "5 days"
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
    duration: "2 days"
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
    duration: "4 days"
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
    duration: "3 days"
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
    duration: "6 days"
  }
];

function App() {
  const [selectedStream, setSelectedStream] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

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
    </div>
  );
}

export default App;