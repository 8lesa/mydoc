import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { reviews } from '../data/reviews';
import { ArrowRight, Search, Star, UserCheck, Heart } from 'lucide-react';
import DoctorCard from '../components/ui/DoctorCard';
import ReviewCard from '../components/ui/ReviewCard';
import SearchBar from '../components/ui/SearchBar';

const HomePage: React.FC = () => {
  const [topDoctors, setTopDoctors] = useState(doctors.slice(0, 3));
  const [recentReviews, setRecentReviews] = useState(reviews.slice(0, 3));

  const handleSearch = (query: string, department: string) => {
    // In a real app, this would navigate to the doctors page with search params
    window.location.href = `/doctors?search=${query}&department=${department}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(30, 64, 175, 0.9)), url('https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Gjeni dhe Vlerësoni Mjekët më të Mirë në QKUK
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Platforma e parë në Kosovë që ju ndihmon të bëni zgjedhjen më të mirë për shëndetin tuaj dhe të ndani përvojën tuaj me të tjerët.
          </p>
          <div className="mt-10 mb-4">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link 
              to="/doctors" 
              className="flex items-center px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              <Search size={20} className="mr-2" />
              Kërko Mjekët
            </Link>
            <Link 
              to="/register" 
              className="flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              <UserCheck size={20} className="mr-2" />
              Regjistrohu Falas
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">100+</p>
              <p className="text-gray-600">Mjekë të Vlerësuar</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">1,500+</p>
              <p className="text-gray-600">Vlerësime</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-gray-600">Departamente</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">10,000+</p>
              <p className="text-gray-600">Përdorues</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Si Funksionon</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Qëllimi ynë është t'ju ndihmojmë të bëni zgjedhjen më të mirë për shëndetin tuaj dhe të ndani përvojën tuaj me të tjerët.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Kërkoni Mjekun</h3>
              <p className="text-gray-600">
                Kërkoni mjekun sipas emrit, specialitetit ose departamentit në QKUK për të gjetur profesionistin e duhur për nevojat tuaja.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Lexoni Vlerësimet</h3>
              <p className="text-gray-600">
                Shikoni vlerësimet dhe komentet e pacientëve të tjerë për të marrë një pamje të qartë të eksperiencave të mëparshme.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Ndani Përvojën Tuaj</h3>
              <p className="text-gray-600">
                Pas vizitës, ndani përvojën tuaj duke vlerësuar mjekun dhe duke lënë një koment për të ndihmuar pacientët e tjerë.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Doctors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Mjekët më të Vlerësuar</h2>
            <Link 
              to="/doctors" 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Shiko të gjithë
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Vlerësimet e Fundit</h2>
            <Link 
              to="/doctors" 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Shiko të gjitha
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recentReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ndani Përvojën Tuaj me Mjekët e QKUK-së</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Ndihmoni pacientët e tjerë duke ndarë përvojën tuaj dhe përmirësoni kujdesin shëndetësor në Kosovë.
          </p>
          <Link 
            to="/register" 
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Filloni Tani
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;