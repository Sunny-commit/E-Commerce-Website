import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  images: string[];
  productName: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveThumb(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveThumb(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setActiveThumb(index);
  };

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`${productName} - View ${currentIndex + 1}`}
          className="h-full w-full object-contain"
        />
        
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-colors hover:bg-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition-colors hover:bg-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-xs text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                activeThumb === index ? 'border-indigo-600' : 'border-transparent'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};