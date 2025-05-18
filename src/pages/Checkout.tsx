import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, Truck, ShoppingBag, Lock, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

type CheckoutStep = 'information' | 'shipping' | 'payment' | 'review';

interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDelivery: string;
}

export const Checkout: React.FC = () => {
  const { state: cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('information');
  const [isGuest, setIsGuest] = useState(true);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>('standard');
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Check if cart is empty
  if (cart.items.length === 0 && !orderPlaced) {
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
  
  if (orderPlaced) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold">Order Placed Successfully!</h1>
        <p className="mb-8 max-w-md text-center text-gray-600">
          Thank you for your order. We've received your purchase request and will process it shortly.
          You'll receive a confirmation email with the order details.
        </p>
        <div className="mb-8 w-full max-w-md rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
          <div className="mb-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">ORD-{Math.floor(Math.random() * 10000000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-medium">${cart.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">Credit Card</span>
            </div>
          </div>
          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Shipping Information</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Your order will be shipped within 1-2 business days.</p>
                  <p className="mt-1">You'll receive tracking information via email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }
  
  const shippingMethods: ShippingMethod[] = [
    {
      id: 'standard',
      name: 'Standard Shipping',
      description: 'Delivery in 3-5 business days',
      price: cart.subtotal > 100 ? 0 : 8.99,
      estimatedDelivery: '3-5 business days',
    },
    {
      id: 'express',
      name: 'Express Shipping',
      description: 'Delivery in 2-3 business days',
      price: 12.99,
      estimatedDelivery: '2-3 business days',
    },
    {
      id: 'nextday',
      name: 'Next Day Delivery',
      description: 'Order before 2pm for next day delivery',
      price: 24.99,
      estimatedDelivery: '1 business day',
    },
  ];
  
  const handleContinue = () => {
    if (currentStep === 'information') {
      setCurrentStep('shipping');
    } else if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('review');
    } else if (currentStep === 'review') {
      // Place order
      clearCart();
      setOrderPlaced(true);
    }
  };
  
  const handleBack = () => {
    if (currentStep === 'shipping') {
      setCurrentStep('information');
    } else if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'review') {
      setCurrentStep('payment');
    }
  };
  
  const getStepContent = () => {
    switch (currentStep) {
      case 'information':
        return (
          <>
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-medium">Contact Information</h2>
              
              {/* Guest checkout toggle */}
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsGuest(true)}
                    className={`flex-1 rounded-md border p-3 text-center ${
                      isGuest ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
                    }`}
                  >
                    <span className={isGuest ? 'font-medium text-indigo-700' : 'text-gray-700'}>
                      Guest Checkout
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsGuest(false)}
                    className={`flex-1 rounded-md border p-3 text-center ${
                      !isGuest ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
                    }`}
                  >
                    <span className={!isGuest ? 'font-medium text-indigo-700' : 'text-gray-700'}>
                      Sign In
                    </span>
                  </button>
                </div>
              </div>
              
              {isGuest ? (
                <div className="mb-4">
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="login-email"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                      Password*
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <Button variant="primary" fullWidth>
                      Sign In
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {isGuest && (
              <div>
                <h2 className="mb-4 text-lg font-medium">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1 block text-sm font-medium text-gray-700">
                      State/Province*
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="mb-1 block text-sm font-medium text-gray-700">
                      ZIP/Postal Code*
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-700">
                      Country*
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        );
      
      case 'shipping':
        return (
          <div>
            <h2 className="mb-4 text-lg font-medium">Shipping Method</h2>
            <div className="space-y-4">
              {shippingMethods.map((method) => (
                <div key={method.id} className="overflow-hidden rounded-md border border-gray-200">
                  <label className="flex cursor-pointer items-center p-4">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value={method.id}
                      checked={selectedShippingMethod === method.id}
                      onChange={() => setSelectedShippingMethod(method.id)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{method.name}</p>
                        {method.price === 0 ? (
                          <p className="font-medium text-green-600">Free</p>
                        ) : (
                          <p className="font-medium">${method.price.toFixed(2)}</p>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{method.description}</p>
                      <p className="text-sm text-gray-500">Estimated delivery: {method.estimatedDelivery}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'payment':
        return (
          <div>
            <h2 className="mb-4 text-lg font-medium">Payment Information</h2>
            <div className="mb-6 rounded-md bg-gray-50 p-4">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-600" />
                <span className="ml-2 text-sm text-gray-600">
                  Your payment information is encrypted and secure
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="cardholderName" className="mb-1 block text-sm font-medium text-gray-700">
                Cardholder Name*
              </label>
              <input
                type="text"
                id="cardholderName"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Name as it appears on card"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-700">
                Card Number*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full rounded-md border-gray-300 pr-10 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expirationDate" className="mb-1 block text-sm font-medium text-gray-700">
                  Expiration Date*
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="mb-1 block text-sm font-medium text-gray-700">
                  CVV*
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  id="saveCard"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                  Save card for future purchases
                </label>
              </div>
            </div>
          </div>
        );
      
      case 'review':
        const selectedMethod = shippingMethods.find(m => m.id === selectedShippingMethod);
        
        return (
          <div>
            <h2 className="mb-4 text-lg font-medium">Review Your Order</h2>
            
            {/* Order summary */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-white">
              <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="text-base font-medium">Order Summary</h3>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cart.items.map(item => (
                  <li key={item.product.id} className="p-6">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.product.name}</h3>
                            <p className="ml-4">
                              ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Address and shipping method */}
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-base font-medium">Shipping Address</h3>
                <p className="text-gray-700">{firstName} {lastName}</p>
                <p className="text-gray-700">{address}</p>
                <p className="text-gray-700">{city}, {state} {zipCode}</p>
                <p className="text-gray-700">{country}</p>
                <p className="text-gray-700">{phone}</p>
                <p className="mt-2 text-gray-700">{email}</p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-base font-medium">Shipping Method</h3>
                <p className="text-gray-700">{selectedMethod?.name}</p>
                <p className="text-gray-700">
                  {selectedMethod?.price === 0 
                    ? 'Free' 
                    : `$${selectedMethod?.price.toFixed(2)}`
                  }
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Estimated delivery: {selectedMethod?.estimatedDelivery}
                </p>
              </div>
            </div>
            
            {/* Payment method */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">Payment Method</h3>
                <button
                  type="button"
                  onClick={() => setCurrentStep('payment')}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Edit
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <CreditCard className="h-6 w-6 text-gray-500" />
                <span className="ml-3 text-gray-700">
                  Credit Card ending in •••• 3456
                </span>
              </div>
            </div>
            
            {/* Order total */}
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-base font-medium">Order Total</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cart.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {selectedMethod?.price === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span>${selectedMethod?.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${cart.tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${(cart.subtotal + (selectedMethod?.price || 0) + cart.tax).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Place order message */}
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    By placing your order, you agree to our Terms of Service and Privacy Policy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Checkout steps */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <ol className="flex items-center space-x-2 text-sm font-medium text-gray-500">
              <li className={`flex items-center ${
                currentStep === 'information' ? 'text-indigo-600' : 
                (currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'review') ? 'text-green-600' : ''
              }`}>
                <span className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${
                  currentStep === 'information' ? 'border-2 border-indigo-600' :
                  (currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'review') ? 'bg-green-600 text-white' : 'border-2 border-gray-300'
                }`}>
                  {(currentStep === 'shipping' || currentStep === 'payment' || currentStep === 'review') ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    '1'
                  )}
                </span>
                Information
              </li>
              <li className="text-gray-300">/</li>
              <li className={`flex items-center ${
                currentStep === 'shipping' ? 'text-indigo-600' : 
                (currentStep === 'payment' || currentStep === 'review') ? 'text-green-600' : ''
              }`}>
                <span className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${
                  currentStep === 'shipping' ? 'border-2 border-indigo-600' :
                  (currentStep === 'payment' || currentStep === 'review') ? 'bg-green-600 text-white' : 'border-2 border-gray-300'
                }`}>
                  {(currentStep === 'payment' || currentStep === 'review') ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    '2'
                  )}
                </span>
                Shipping
              </li>
              <li className="text-gray-300">/</li>
              <li className={`flex items-center ${
                currentStep === 'payment' ? 'text-indigo-600' : 
                currentStep === 'review' ? 'text-green-600' : ''
              }`}>
                <span className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${
                  currentStep === 'payment' ? 'border-2 border-indigo-600' :
                  currentStep === 'review' ? 'bg-green-600 text-white' : 'border-2 border-gray-300'
                }`}>
                  {currentStep === 'review' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    '3'
                  )}
                </span>
                Payment
              </li>
              <li className="text-gray-300">/</li>
              <li className={`flex items-center ${currentStep === 'review' ? 'text-indigo-600' : ''}`}>
                <span className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${
                  currentStep === 'review' ? 'border-2 border-indigo-600' : 'border-2 border-gray-300'
                }`}>
                  4
                </span>
                Review
              </li>
            </ol>
          </div>
          
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            {getStepContent()}
            
            <div className="mt-8 flex justify-between">
              {currentStep !== 'information' && (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button
                onClick={handleContinue}
                className={currentStep === 'information' ? 'ml-auto' : ''}
              >
                {currentStep === 'review' ? 'Place Order' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:row-start-1">
          <div className="sticky top-20 rounded-lg border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>
            
            <div className="px-6 py-4">
              <div className="mb-4 max-h-80 overflow-y-auto">
                {cart.items.map(item => (
                  <div key={item.product.id} className="mb-4 flex items-start">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                            {item.product.name}
                          </h3>
                          <p className="ml-1 text-sm font-medium text-gray-900">
                            ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
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
                  <p className="text-sm text-gray-600">Tax</p>
                  <p className="text-sm font-medium">${cart.tax.toFixed(2)}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">${cart.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 rounded-md bg-gray-50 p-4">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-600">Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};