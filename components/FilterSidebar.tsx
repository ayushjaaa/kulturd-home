
import React, { useState } from 'react';

interface FilterCategoryProps {
  title: string;
  options?: string[];
  isOpenDefault?: boolean;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ title, options, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <section className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold py-3 border-b border-forest/10 group"
      >
        <span className="text-sm tracking-wide group-hover:text-accentOrange transition-colors">{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && options && (
        <div className="mt-4 space-y-3 pl-1">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                className="rounded border-forest/20 text-forest focus:ring-forest h-4 w-4 transition-all"
              />
              <span className="text-[13px] text-forest/80 group-hover:text-accentOrange transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </section>
  );
};

export const FilterSidebar: React.FC = () => {
  return (
    <aside className="w-64 flex-shrink-0 hidden md:block sticky top-8 h-fit">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/40 mb-10">
        Filters
      </h2>

      <div className="pr-2 overflow-y-auto max-h-[80vh]">
        <FilterCategory
          title="Flavor"
          isOpenDefault={true}
          options={['Original', 'Citrus', 'Berry', 'Tropical']}
        />
        <FilterCategory title="Size" />
        <FilterCategory title="Packaging" />
        <FilterCategory title="Benefit" />
      </div>
    </aside>
  );
};
