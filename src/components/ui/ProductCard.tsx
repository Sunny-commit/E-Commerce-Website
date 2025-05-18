import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, discountPrice, rating, reviewCount, images, inStock } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discount = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;
  
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {discount > 0 && (
        <div className="absolute left-0 top-3 z-10 bg-orange-500 px-2 py-1 text-xs font-bold text-white">
          {discount}% OFF
        </div>
      )}
      
      {!inStock && (
        <div className="absolute left-0 top-3 z-10 bg-gray-800 px-2 py-1 text-xs font-bold text-white">
          Out of Stock
        </div>
      )}
      
      <Link to={`/product/${id}`} className="block">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={images[0]}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
        </div>
        
        <div className="p-4">
          <div className="mb-2 flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <span className="mx-1 text-gray-400">•</span>
            <span className="text-xs text-gray-500">{reviewCount} reviews</span>
          </div>
          
          <h3 className="mb-1 text-sm font-medium text-gray-900 line-clamp-2">{name}</h3>
          
          <div className="mb-4 flex items-center">
            {discountPrice ? (
              <>
                <span className="text-lg font-bold text-gray-900">${discountPrice}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">${price}</span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              disabled={!inStock}
              onClick={handleAddToCart}
              leftIcon={<ShoppingCart className="h-4 w-4" />}
            >
              {inStock ? 'Add to Cart' : 'Sold Out'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="flex-shrink-0"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};