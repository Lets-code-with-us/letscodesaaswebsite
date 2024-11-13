import React from 'react';
import { Star, ShoppingCart, Code2, Tags } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isExpanded: boolean;
  onExpand: () => void;
}

export default function ProductCard({ product, isExpanded, onExpand }: ProductCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden
        ${isExpanded ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold text-blue-600">
          ${product.price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {isExpanded ? product.description : `${product.description.slice(0, 100)}...`}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.techStack.map(tech => (
            <span 
              key={tech}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={onExpand}
            className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}