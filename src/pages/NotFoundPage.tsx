import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Faqja nuk u gjet</h2>
        <p className="text-gray-600 mb-8">
          Na vjen keq, faqja që po kërkoni nuk ekziston ose është zhvendosur.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            <Home size={18} className="mr-2" />
            Kthehu në Ballinë
          </Link>
          <Link 
            to="/doctors" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            <Search size={18} className="mr-2" />
            Kërko Mjekët
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;