import React, { useState } from 'react';
import StarRating from '../ui/StarRating';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

interface ReviewFormProps {
  doctorId: string;
  onSubmit: (review: any) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ doctorId, onSubmit }) => {
  const { user } = useAuth();
  const [professionalismRating, setProfessionalismRating] = useState(0);
  const [knowledgeRating, setKnowledgeRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [waitTimeRating, setWaitTimeRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const calculateOverallRating = () => {
    return (professionalismRating + knowledgeRating + communicationRating + waitTimeRating) / 4;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!professionalismRating || !knowledgeRating || !communicationRating || !waitTimeRating) {
      setError('Ju lutemi vlerësoni të gjitha kategoritë');
      return;
    }

    if (!comment.trim()) {
      setError('Ju lutemi shkruani një koment');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the review object
      const review = {
        id: `review-${Date.now()}`,
        doctorId,
        userId: user?.id || 'anonymous',
        userName: user?.name || 'Anonymous User',
        date: new Date().toISOString().split('T')[0],
        professionalismRating,
        knowledgeRating,
        communicationRating,
        waitTimeRating,
        overallRating: calculateOverallRating(),
        comment
      };

      // Submit the review
      onSubmit(review);

      // Reset form
      setProfessionalismRating(0);
      setKnowledgeRating(0);
      setCommunicationRating(0);
      setWaitTimeRating(0);
      setComment('');
    } catch (err) {
      setError('Ndodhi një gabim gjatë dërgimit të vlerësimit');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Kyçuni për të shtuar një vlerësim</h3>
        <p className="text-blue-600 mb-4">Ju duhet të kyçeni ose të regjistroheni për të vlerësuar këtë mjek.</p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/login" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Kyçuni
          </Link>
          <Link 
            to="/register" 
            className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Regjistrohuni
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Ndani përvojën tuaj</h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Profesionalizmi</label>
          <StarRating 
            rating={professionalismRating} 
            interactive 
            onChange={setProfessionalismRating} 
            size={24} 
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Njohuritë</label>
          <StarRating 
            rating={knowledgeRating} 
            interactive 
            onChange={setKnowledgeRating} 
            size={24} 
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Komunikimi</label>
          <StarRating 
            rating={communicationRating} 
            interactive 
            onChange={setCommunicationRating} 
            size={24} 
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Koha e pritjes</label>
          <StarRating 
            rating={waitTimeRating} 
            interactive 
            onChange={setWaitTimeRating} 
            size={24} 
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
          Komenti juaj
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Ndani përvojën tuaj me këtë mjek..."
        ></textarea>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-gray-700 font-medium mr-2">Vlerësimi i përgjithshëm:</span>
          <StarRating rating={calculateOverallRating()} size={20} />
          <span className="ml-2 font-medium">
            {calculateOverallRating() > 0 ? calculateOverallRating().toFixed(1) : '-'}
          </span>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Duke dërguar...' : 'Dërgo Vlerësimin'}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;