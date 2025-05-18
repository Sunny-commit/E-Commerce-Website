import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Truck, RotateCcw, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { ProductCarousel } from '../components/ui/ProductCarousel';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import { getReviewsByProductId } from '../data/reviews';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  
  const product = id ? getProductById(id) : undefined;
  const reviews = id ? getReviewsByProductId(id) : [];
  
  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <AlertCircle className="mb-4 h-16 w-16 text-red-500" />
        <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
        <p className="mb-6 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const displayPrice = product.discountPrice || product.price;
  const hasDiscount = product.discountPrice !== undefined;
  const discount = hasDiscount ? Math.round(((product.price - product.discountPrice) / product.price) * 100) : 0;
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <button onClick={() => navigate('/')} className="text-gray-500 hover:text-indigo-600">
              Home
            </button>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <button 
              onClick={() => navigate(`/category/${product.category.toLowerCase()}`)} 
              className="text-gray-500 hover:text-indigo-600"
            >
              {product.category}
            </button>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-900 font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      {/* Product content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product images */}
        <div>
          <ProductCarousel images={product.images} productName={product.name} />
        </div>
        
        {/* Product info */}
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Rating */}
          <div className="mb-4 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-700">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">${displayPrice.toFixed(2)}</span>
              
              {hasDiscount && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>
            
            {product.inStock ? (
              <p className="mt-2 flex items-center text-sm text-green-600">
                <CheckCircle className="mr-1 h-4 w-4" />
                In Stock
              </p>
            ) : (
              <p className="mt-2 flex items-center text-sm text-red-600">
                <AlertCircle className="mr-1 h-4 w-4" />
                Out of Stock
              </p>
            )}
          </div>
          
          {/* Short description */}
          <p className="mb-6 text-gray-700">{product.description}</p>
          
          {/* Add to cart */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={!product.inStock}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  fullWidth
                  leftIcon={<ShoppingCart className="h-5 w-5" />}
                >
                  {product.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
              </div>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                className="flex-shrink-0"
                aria-label="Share product"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Shipping info */}
          <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start space-x-3">
              <Truck className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders over $100. Otherwise $8.99</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <RotateCcw className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-indigo-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Secure Payments</p>
                <p className="text-sm text-gray-600">SSL encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            
            <button
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === 'specifications'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            
            <button
              className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </nav>
        </div>
        
        <div className="mt-8">
          {activeTab === 'description' && (
            <div>
              <p className="mb-6 text-gray-700">{product.description}</p>
              
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="mb-8 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Technical Specifications</h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {key}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              {reviews.length > 0 ? (
                <div className="space-y-8">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-8">
                      <div className="mb-4 flex justify-between">
                        <div>
                          <p className="font-medium">{review.userName}</p>
                          <div className="mt-1 flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'fill-current text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                          {review.verified && (
                            <div className="mt-1 flex items-center text-green-600">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              <span className="text-xs">Verified Purchase</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <h4 className="mb-2 font-medium">{review.title}</h4>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
                  <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};