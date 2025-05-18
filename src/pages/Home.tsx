import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';

export const Home: React.FC = () => {
  // Get featured products
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-4 py-24 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                Shopping Reimagined for Better Experience
              </h1>
              <p className="mb-8 text-lg text-indigo-100">
                Discover our innovative approach to e-commerce that puts you first. 
                Transparent pricing, seamless checkout, and unparalleled product information.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-700 hover:bg-gray-100"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  onClick={() => window.scrollTo({
                    top: document.getElementById('featured-products')?.offsetTop - 100,
                    behavior: 'smooth'
                  })}
                >
                  Shop Now
                </Button>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Shopping experience" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-5 -left-5 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-800">
                    "Amazing shopping experience!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Shop With Us</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We've addressed the common pain points in online shopping to create a seamless experience from browsing to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure Shopping</h3>
              <p className="text-gray-600">
                Your security is our priority with advanced encryption and secure payment options.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders over $100 with our fast and reliable delivery.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <RotateCcw className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Returns</h3>
              <p className="text-gray-600">
                Not satisfied? Our hassle-free 30-day return policy has you covered.
              </p>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quality Products</h3>
              <p className="text-gray-600">
                We curate only the best products, thoroughly tested for quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products section */}
      <section id="featured-products" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-lg text-gray-600">Discover our most popular items.</p>
            </div>
            <Link to="/featured">
              <Button 
                variant="outline" 
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Don't just take our word for it. Read what our satisfied customers have to say about their shopping experience with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-1">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
              </div>
              <p className="mb-4 text-gray-700">
                "The checkout process was incredibly smooth, and I received my order earlier than expected. The product quality exceeded my expectations!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-1">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
              </div>
              <p className="mb-4 text-gray-700">
                "I love how detailed the product descriptions are. It helped me make an informed decision without any surprises when my package arrived."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Michael Torres</p>
                  <p className="text-sm text-gray-500">Tech Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center space-x-1">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <Star className="h-5 w-5 fill-current text-yellow-400" />
              </div>
              <p className="mb-4 text-gray-700">
                "Customer service was exceptional when I needed to return an item. The process was simple, and my refund was processed quickly."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Emma Rodriguez</p>
                  <p className="text-sm text-gray-500">First-time Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
            <p className="mb-8 text-lg text-indigo-100">
              Subscribe to our newsletter for exclusive deals, new product announcements, and more.
            </p>
            <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border-0 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:flex-1"
                aria-label="Email address"
                required
              />
              <Button className="whitespace-nowrap bg-gray-900 text-white hover:bg-gray-800">
                Subscribe Now
              </Button>
            </form>
            <p className="mt-4 text-sm text-indigo-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};