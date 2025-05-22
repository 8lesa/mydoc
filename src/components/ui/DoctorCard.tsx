import React from 'react';
import { Doctor } from '../../types';
import StarRating from './StarRating';
import { User, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Link 
      to={`/doctor/${doctor.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="relative pb-[56.25%] overflow-hidden">
        <img 
          src={doctor.imageUrl} 
          alt={`Dr. ${doctor.name}`} 
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="text-xl font-medium text-gray-800">{doctor.name}</h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
        </div>
        
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <span className="text-gray-600 text-sm">{doctor.department}, QKUK</span>
        </div>
        
        <div className="flex items-center mb-2">
          <User size={16} className="text-gray-500 mr-1" />
          <span className="text-gray-600 text-sm">{doctor.experience} vite përvojë</span>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <StarRating rating={doctor.averageRating} size={16} />
              <span className="ml-2 text-gray-700 font-medium">{doctor.averageRating.toFixed(1)}</span>
            </div>
            <div className="text-gray-500 text-sm">
              <Calendar size={14} className="inline mr-1" />
              {doctor.totalReviews} vlerësime
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;