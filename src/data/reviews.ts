import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '101',
    productId: '1',
    userId: 'user1',
    userName: 'Michael T.',
    rating: 5,
    title: 'Best headphones I\'ve ever owned',
    comment: 'The sound quality is incredible and the noise cancellation works perfectly even in noisy environments. Battery life is as advertised - I get around 28-30 hours on a single charge. Extremely comfortable for long listening sessions too.',
    date: '2023-08-15',
    verified: true
  },
  {
    id: '102',
    productId: '1',
    userId: 'user2',
    userName: 'Sarah J.',
    rating: 4,
    title: 'Great sound, slightly tight fit',
    comment: 'The sound quality is excellent and I love the noise cancellation feature. My only complaint is that they feel a bit tight on my head after a few hours. Otherwise, they\'re perfect!',
    date: '2023-07-22',
    verified: true
  },
  {
    id: '103',
    productId: '1',
    userId: 'user3',
    userName: 'David L.',
    rating: 5,
    title: 'Worth every penny',
    comment: 'I was hesitant to spend this much on headphones, but after using these for a month, I can confidently say they\'re worth every penny. The sound is crisp, the ANC is effective, and they\'re comfortable for all-day wear.',
    date: '2023-09-05',
    verified: true
  },
  {
    id: '201',
    productId: '2',
    userId: 'user4',
    userName: 'Emma R.',
    rating: 5,
    title: 'Perfect for business travel',
    comment: 'This laptop has been my companion on multiple business trips, and it has exceeded my expectations. Lightweight, powerful, and with a battery that lasts through long workdays. The display is gorgeous too!',
    date: '2023-08-30',
    verified: true
  },
  {
    id: '202',
    productId: '2',
    userId: 'user5',
    userName: 'Jason M.',
    rating: 4,
    title: 'Great performance but runs warm',
    comment: 'Performance is excellent for coding and multitasking. My only issue is that it can get quite warm during intensive tasks. Otherwise, it\'s been a reliable machine for my work.',
    date: '2023-09-10',
    verified: true
  },
  {
    id: '301',
    productId: '3',
    userId: 'user6',
    userName: 'Laura T.',
    rating: 5,
    title: 'Transformed my fitness routine',
    comment: 'This watch has completely transformed how I approach fitness. The tracking is accurate, the battery lasts for days, and the app integration is seamless. Highly recommend for anyone serious about fitness.',
    date: '2023-07-15',
    verified: true
  },
  {
    id: '302',
    productId: '3',
    userId: 'user7',
    userName: 'Carlos P.',
    rating: 4,
    title: 'Great for running, swimming needs improvement',
    comment: 'As a runner, I find this watch perfect for tracking my routes and heart rate. The swimming tracking isn\'t as accurate as I\'d like, but overall, it\'s a great fitness companion.',
    date: '2023-08-22',
    verified: true
  }
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};