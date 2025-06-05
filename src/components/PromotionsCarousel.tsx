
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Promotion {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  image: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Game Day",
    subtitle: "NASDEC COMPLEX LUSAKA",
    description: "AUGUST 27-28\n14:00, 12:00 & 14:00,16:00\n& 18:00HRS",
    background: "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500",
    image: "/lovable-uploads/bf3fea44-868d-4f2b-a215-da56de06e9df.png"
  },
  {
    id: 2,
    title: "Transact & Win",
    subtitle: "Easter weekend special",
    description: "Locations: Cheers Gold Crest Mall | Chrismar Hotel | Hot Spot Pub & Grill",
    background: "bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500",
    image: "/lovable-uploads/21dc93b2-99ea-47fa-8366-fd5d8c8870d6.png"
  },
  {
    id: 3,
    title: "Winners",
    subtitle: "of K20 airtime",
    description: "Patience Ng'andwe\nPhiri John",
    background: "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600",
    image: "/lovable-uploads/b101096f-d8a9-44c9-8b8d-daec259763e3.png"
  }
];

const PromotionsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {promotions.map((promo) => (
            <div key={promo.id} className="w-full flex-shrink-0">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Smaller size */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all z-10"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black bg-opacity-30 text-white rounded-full flex items-center justify-center hover:bg-opacity-50 transition-all z-10"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots Indicator - Smaller size */}
      <div className="flex justify-center space-x-1.5 mt-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionsCarousel;
