import React from 'react';
import { Binary as Binoculars, Fish, Home } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Streams', icon: Binoculars },
  { id: 'safari', label: 'Safari Parks', icon: Binoculars },
  { id: 'underwater', label: 'Underwater', icon: Fish },
  { id: 'lodge', label: 'Lodges', icon: Home },
];

const Categories = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="bg-white py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-105'
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;