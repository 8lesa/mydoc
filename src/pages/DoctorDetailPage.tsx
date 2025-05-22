import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { reviews as allReviews } from '../data/reviews';
import { Doctor, Review } from '../types';
import StarRating from '../components/ui/StarRating';
import ReviewCard from '../components/ui/ReviewCard';
import ReviewForm from '../components/forms/ReviewForm';
import { ArrowLeft, Calendar, MapPin, Phone, Mail, Award, Clipboard, Users } from 'lucide-react';

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Find doctor by ID
      const foundDoctor = doctors.find(d => d.id === id);
      if (foundDoctor) {
        setDoctor(foundDoctor);
        
        // Find related reviews
        const doctorReviews = allReviews.filter(review => review.doctorId === id);
        setReviews(doctorReviews);
      }
    }
    setLoading(false);
  }, [id]);

  const handleReviewSubmit = (newReview: Review) => {
    // In a real app, this would send the review to a backend
    // For this demo, we'll just add it to the local state
    setReviews(prevReviews => [newReview, ...prevReviews]);

    // Update doctor's average rating and total reviews
    if (doctor) {
      const newTotalReviews = doctor.totalReviews + 1;
      const newAverageRating = (doctor.averageRating * doctor.totalReviews + newReview.overallRating) / newTotalReviews;
      
      setDoctor({
        ...doctor,
        averageRating: newAverageRating,
        totalReviews: newTotalReviews
      });
    }
  };

  if (loading) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <p className="text-gray-600">Duke ngarkuar të dhënat e mjekut...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mjeku nuk u gjet</h2>
        <p className="text-gray-600 mb-6">Mjeku që kërkoni nuk u gjet në sistemin tonë.</p>
        <Link 
          to="/doctors" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Kthehu te lista e mjekëve
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/doctors"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={16} className="mr-1" />
          Kthehu te lista e mjekëve
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 lg:w-1/4">
              <div className="h-64 md:h-full">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 md:p-8 md:w-2/3 lg:w-3/4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                  <p className="text-blue-600 font-medium text-xl mb-4">{doctor.specialty}</p>
                  
                  <div className="flex items-center mb-6">
                    <StarRating rating={doctor.averageRating} size={20} />
                    <span className="ml-2 font-medium">{doctor.averageRating.toFixed(1)}</span>
                    <span className="ml-2 text-gray-500">({doctor.totalReviews} vlerësime)</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 p-4 bg-blue-50 rounded-md">
                  <h3 className="font-medium text-gray-800 mb-2">Informacion i shpejtë</h3>
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.department}, QKUK</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Users size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">{doctor.experience} vite përvojë</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">E Hënë - E Premte</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">+383 38 500 600</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Rreth Mjekut</h2>
                    <p className="text-gray-700 mb-4">
                      Dr. {doctor.name.split(' ')[1]} është një mjek i specializuar në fushën e {doctor.specialty.toLowerCase()}. 
                      Ka {doctor.experience} vite përvojë dhe është një nga mjekët më të respektuar në departamentin e tij/saj.
                    </p>
                    <p className="text-gray-700">
                      Ofron kujdes të personalizuar dhe shërbim të shkëlqyer për pacientët e tij/saj, duke përdorur metodat 
                      më moderne diagnostikuese dhe trajtuese.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Arsimimi dhe Kualifikimet</h2>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Award size={18} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{doctor.education}</span>
                      </div>
                      <div className="flex items-start">
                        <Clipboard size={18} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Certifikim në procedura të avancuara mjekësore</span>
                      </div>
                      <div className="flex items-start">
                        <Award size={18} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Anëtar i Shoqatës së Mjekëve të Kosovës</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Vlerësimet ({reviews.length})
            </h2>
            
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-600 mb-4">Ky mjek ende nuk ka asnjë vlerësim.</p>
                <p className="text-gray-700">Bëhuni i pari që ndani përvojën tuaj!</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ndani Përvojën Tuaj
            </h2>
            <ReviewForm doctorId={doctor.id} onSubmit={handleReviewSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;