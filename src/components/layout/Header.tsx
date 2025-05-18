import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Heart, Package, Home, Headphones, Laptop, Watch } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { state: cart } = useCart();
  const { query, search, results, clearSearch } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const cartItemsCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll events for header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle search input
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  // Toggle search panel
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      clearSearch();
    }
  };

  const categories = [
    { name: 'Electronics', icon: <Headphones className="h-4 w-4" /> },
    { name: 'Computers', icon: <Laptop className="h-4 w-4" /> },
    { name: 'Wearables', icon: <Watch className="h-4 w-4" /> },
    { name: 'Fashion', icon: <Package className="h-4 w-4" /> },
    { name: 'Smart Home', icon: <Home className="h-4 w-4" /> }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <ShoppingCart className="h-6 w-6" />
            <span>ShopInnov</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
                Categories
              </button>
              <div className="absolute left-0 top-full hidden min-w-[200px] rounded-md border border-gray-100 bg-white p-2 shadow-lg group-hover:block">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/category/${category.name.toLowerCase()}`}
                    className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/featured" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Featured
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Search"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            {/* Favorites */}
            <Link
              to="/wishlist"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5" />
              </div>
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Panel */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full rounded-md border-gray-300 bg-gray-100 py-2 pl-10 pr-4 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={query}
                onChange={handleSearchInput}
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {query && results.length > 0 && (
              <div className="mt-2 max-h-64 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center border-b border-gray-100 p-3 hover:bg-gray-50"
                    onClick={() => {
                      setIsSearchOpen(false);
                      clearSearch();
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">${product.discountPrice || product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="mt-2 rounded-md border border-gray-200 bg-white p-4 text-center shadow-lg">
                <p className="text-gray-500">No products found matching "{query}"</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
              >
                {category.icon}
                <span>{category.name}</span>
              </Link>
            ))}
            <Link
              to="/featured"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              Featured
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              Contact
            </Link>
            <Link
              to="/account"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              Account
            </Link>
            <Link
              to="/wishlist"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};