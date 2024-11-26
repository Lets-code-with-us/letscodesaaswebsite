// import React from 'react';
import { Code2 } from 'lucide-react';
import  AuthForms  from './auth/AuthForms';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CodeMarket</span>
          </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/market" className="text-gray-600 hover:text-gray-900">Browse</Link>
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a> */}
            <Link to="/price" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <AuthForms />
          </div>
        </div>
      </div>
    </nav>
  );
}