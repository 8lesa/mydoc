import React from 'react';
import { Review } from '../../types';
import StarRating from './StarRating';
import { Calendar, MessageSquare } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('sq-AL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-medium text-gray-800">{review.userName}</h4>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(review.date)}</span>
          </div>
        </div>
        <div className="flex items-center">
          <StarRating rating={review.overallRating} size={16} />
          <span className="ml-2 font-medium">{review.overallRating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Profesionalizmi</span>
          <StarRating rating={review.professionalismRating} size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Njohuritë</span>
          <StarRating rating={review.knowledgeRating} size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Komunikimi</span>
          <StarRating rating={review.communicationRating} size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Koha e pritjes</span>
          <StarRating rating={review.waitTimeRating} size={14} />
        </div>
      </div>
      
      <div className="mt-3 text-gray-700">
        <div className="flex items-start">
          <MessageSquare size={16} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
          <p className="text-sm">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;