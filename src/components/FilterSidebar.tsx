import React from 'react';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedTechStacks: string[];
  setSelectedTechStacks: (stacks: string[]) => void;
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedTechStacks,
  setSelectedTechStacks,
}: FilterSidebarProps) {
  const categories = ['all', 'portfolio', 'landing-page', 'templates', 'components', 'full-stack'];
  const techStacks = ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Laravel', 'Next.js', 'Three.js'];

  const handleTechStackToggle = (tech: string) => {
    if (selectedTechStacks.includes(tech)) {
      setSelectedTechStacks(selectedTechStacks.filter(t => t !== tech));
    } else {
      setSelectedTechStacks([...selectedTechStacks, tech]);
    }
  };

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`block w-full text-left px-3 py-2 rounded-lg mb-1 ${
              selectedCategory === category
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="px-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Tech Stack</h3>
        <div className="space-y-2">
          {techStacks.map(tech => (
            <label key={tech} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTechStacks.includes(tech)}
                onChange={() => handleTechStackToggle(tech)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">{tech}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}