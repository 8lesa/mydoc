import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  color = '#FFD700',
  interactive = false,
  onChange
}) => {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoverRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(null);
    }
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const currentRating = hoverRating ?? rating;
        const filled = index < Math.floor(currentRating);
        const halfFilled = index === Math.floor(currentRating) && currentRating % 1 !== 0;
        
        return (
          <div 
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform ${interactive ? 'cursor-pointer hover:scale-110' : ''}`}
          >
            <Star
              size={size}
              fill={filled || halfFilled ? color : 'none'}
              color={color}
              className="transition-all"
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;