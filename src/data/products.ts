import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience unparalleled sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions.',
    price: 299.99,
    discountPrice: 249.99,
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['wireless', 'headphones', 'audio', 'premium'],
    inStock: true,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort materials',
      'Voice assistant compatible',
      'Bluetooth 5.2 connectivity'
    ],
    specifications: {
      'Brand': 'SoundMaster',
      'Model': 'WH-1000X',
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g',
      'Charging': 'USB-C',
      'Warranty': '2 years'
    }
  },
  {
    id: '2',
    name: 'Ultra-light Laptop',
    description: 'Our thinnest and lightest laptop yet, perfect for professionals on the go. Featuring a powerful processor, stunning display, and all-day battery life.',
    price: 1299.99,
    rating: 4.6,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['laptop', 'ultrabook', 'professional', 'lightweight'],
    inStock: true,
    features: [
      'Intel Core i7 processor',
      '16GB RAM',
      '512GB SSD storage',
      '14" 4K display',
      'Backlit keyboard',
      'Fingerprint reader'
    ],
    specifications: {
      'Brand': 'TechPro',
      'Model': 'UltraBook Pro',
      'Processor': 'Intel Core i7',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '14" 4K IPS',
      'Battery': 'Up to 12 hours',
      'Weight': '1.2kg',
      'OS': 'Windows 11 Pro',
      'Warranty': '1 year'
    }
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with precision using our advanced smart watch. Monitor heart rate, sleep patterns, and activities with a beautiful display and long battery life.',
    price: 199.99,
    discountPrice: 179.99,
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Wearables',
    tags: ['fitness', 'smartwatch', 'health', 'wearable'],
    inStock: true,
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      'GPS tracking',
      'Water resistant to 50m',
      '7-day battery life',
      '20+ workout modes'
    ],
    specifications: {
      'Brand': 'FitTech',
      'Model': 'Pulse Pro',
      'Display': '1.4" AMOLED',
      'Battery': '7 days typical use',
      'Water Resistance': '50m',
      'Sensors': 'HR, GPS, Accelerometer, Gyroscope',
      'Compatibility': 'iOS 12+, Android 8+',
      'Warranty': '1 year'
    }
  },
  {
    id: '4',
    name: 'Designer Leather Bag',
    description: 'Handcrafted premium leather bag that combines style with functionality. Perfect for work or casual outings with multiple compartments and durable construction.',
    price: 149.99,
    rating: 4.5,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1030946/pexels-photo-1030946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Fashion',
    tags: ['bag', 'leather', 'designer', 'accessory'],
    inStock: true,
    features: [
      'Genuine full-grain leather',
      'Multiple compartments',
      'Adjustable shoulder strap',
      'Premium metal hardware',
      'Soft fabric lining'
    ],
    specifications: {
      'Brand': 'LuxLeather',
      'Model': 'Urban Classic',
      'Material': 'Full-grain leather',
      'Dimensions': '30cm × 25cm × 10cm',
      'Capacity': '15L',
      'Weight': '0.8kg',
      'Color Options': 'Brown, Black, Tan',
      'Care': 'Clean with leather conditioner'
    }
  },
  {
    id: '5',
    name: 'Smart Home Speaker',
    description: 'Transform your home with our intelligent speaker system. Voice control your music, get answers to questions, control smart home devices, and more.',
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.4,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/15873302/pexels-photo-15873302/free-photo-of-amazon-alexa-echo-dot-on-a-small-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8088458/pexels-photo-8088458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Smart Home',
    tags: ['speaker', 'smart home', 'voice assistant', 'audio'],
    inStock: true,
    features: [
      'Voice control',
      'Smart home integration',
      'High-quality audio',
      'Multi-room synchronization',
      'Privacy controls with mic mute'
    ],
    specifications: {
      'Brand': 'SmartLife',
      'Model': 'HomeHub 2',
      'Connectivity': 'WiFi, Bluetooth',
      'Speaker': '360° omnidirectional',
      'Microphones': '6-mic array',
      'Power': 'AC adapter (included)',
      'Dimensions': '15cm × 15cm × 9cm',
      'Warranty': '1 year'
    }
  },
  {
    id: '6',
    name: 'Professional Camera Kit',
    description: 'Capture stunning photos and videos with our professional-grade camera kit. Includes camera body, two lenses, and essential accessories for photographers of all levels.',
    price: 899.99,
    rating: 4.9,
    reviewCount: 42,
    images: [
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Photography',
    tags: ['camera', 'photography', 'professional', 'kit'],
    inStock: false,
    features: [
      '24.2MP sensor',
      '4K video recording',
      'Dual lens kit (18-55mm, 55-200mm)',
      'Built-in WiFi and Bluetooth',
      'Weather-sealed body',
      'Includes carrying case and accessories'
    ],
    specifications: {
      'Brand': 'OptiView',
      'Model': 'ProShot X2',
      'Sensor': '24.2MP APS-C CMOS',
      'ISO Range': '100-51200',
      'Video': '4K/30fps, 1080p/120fps',
      'Viewfinder': 'OLED, 100% coverage',
      'Monitor': '3.2" vari-angle touchscreen',
      'Battery Life': '~1200 shots per charge',
      'Weight': '680g (body only)',
      'Warranty': '2 years'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByTag = (tag: string): Product[] => {
  return products.filter(product => product.tags.includes(tag));
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};