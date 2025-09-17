import React from 'react';
import StreamCard from './StreamCard';

const FeaturedStreams = ({ streams, onStreamClick }) => {
  return (
    <section id="streams" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Live Wildlife Streams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Immerse yourself in nature's most spectacular moments, streaming live from around the world.
            Book your adventure directly from the streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streams.map((stream) => (
            <StreamCard
              key={stream.id}
              stream={stream}
              onClick={() => onStreamClick(stream)}
            />
          ))}
        </div>

        {streams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No streams found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStreams;