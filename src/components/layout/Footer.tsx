import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube as YouTube, CreditCard, Lock, Truck, RotateCcw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Trust badges section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Secure Payment</h3>
                <p className="text-sm text-gray-400">All major cards accepted</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Easy Returns</h3>
                <p className="text-sm text-gray-400">30-day return policy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">100% Secure</h3>
                <p className="text-sm text-gray-400">SSL encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About the company */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <ShoppingCart className="h-6 w-6" />
              <span>ShopInnov</span>
            </div>
            <p className="mb-4 text-gray-400">
              Redefining online shopping with innovative solutions to common e-commerce problems.
              We focus on user experience, accessibility, and trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="YouTube">
                <YouTube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/electronics" className="text-gray-400 transition-colors hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/computers" className="text-gray-400 transition-colors hover:text-white">
                  Computers
                </Link>
              </li>
              <li>
                <Link to="/category/wearables" className="text-gray-400 transition-colors hover:text-white">
                  Wearables
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-400 transition-colors hover:text-white">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/smart-home" className="text-gray-400 transition-colors hover:text-white">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-400 transition-colors hover:text-white">
                  Featured Products
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 transition-colors hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 transition-colors hover:text-white">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 transition-colors hover:text-white">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-400 transition-colors hover:text-white">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Stay Updated</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for exclusive offers and the latest product updates.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md bg-gray-800 px-4 py-2 text-gray-100 placeholder-gray-500 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer bottom */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            &copy; {new Date().getFullYear()} ShopInnov. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-400">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link to="/accessibility" className="text-sm text-gray-500 hover:text-gray-400">
              Accessibility
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-500 hover:text-gray-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};