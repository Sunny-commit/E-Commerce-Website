import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag, CreditCard, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export const Cart: React.FC = () => {
  const { state: cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  // Check if cart is empty
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
        <h1 className="mb-4 text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mb-6 text-center text-gray-600">
          You don't have any items in your cart yet. <br />
          Start shopping to add products to your cart.
        </p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium">Cart Items ({cart.items.length})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {cart.items.map(item => {
                const { product, quantity } = item;
                const price = product.discountPrice || product.price;
                
                return (
                  <li key={product.id} className="p-6">
                    <div className="flex items-center">
                      {/* Product image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      {/* Product details */}
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-base font-medium text-gray-900">
                              <Link to={`/product/${product.id}`} className="hover:text-indigo-600">
                                {product.name}
                              </Link>
                            </h3>
                            <p className="ml-4 text-base font-medium text-gray-900">
                              ${(price * quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${product.id}`} className="mr-2 text-sm text-gray-700">
                              Qty:
                            </label>
                            <select
                              id={`quantity-${product.id}`}
                              value={quantity}
                              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                              className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="flex items-center text-sm font-medium text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            
            {/* Continue shopping */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
        
        {/* Order summary */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>
            
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Subtotal</p>
                  <p className="text-sm font-medium">${cart.subtotal.toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  {cart.shipping > 0 ? (
                    <p className="text-sm font-medium">${cart.shipping.toFixed(2)}</p>
                  ) : (
                    <p className="text-sm font-medium text-green-600">Free</p>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Tax (7%)</p>
                  <p className="text-sm font-medium">${cart.tax.toFixed(2)}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">${cart.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  onClick={() => navigate('/checkout')}
                  variant="primary"
                  fullWidth
                  size="lg"
                  leftIcon={<CreditCard className="h-5 w-5" />}
                >
                  Proceed to Checkout
                </Button>
              </div>
              
              <div className="mt-6 rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Shipping Information</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Free shipping on orders over $100.</p>
                      <p className="mt-1">Estimated delivery: 3-5 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-gray-900">Accepted Payment Methods</h3>
            <div className="flex items-center space-x-3">
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
              <div className="h-8 w-12 rounded bg-gray-200"></div>
            </div>
          </div>
          
          {/* Secure checkout */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};