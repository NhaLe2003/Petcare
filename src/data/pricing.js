export const petSizes = ['small', 'medium', 'large']

export const sizeLabels = {
  small: 'Small (under 15 lbs)',
  medium: 'Medium (15–50 lbs)',
  large: 'Large (over 50 lbs)',
}

export const groomingPricing = [
  {
    service: 'Bath & Brush',
    small: 35,
    medium: 45,
    large: 60,
  },
  {
    service: 'Full Groom & Cut',
    small: 55,
    medium: 70,
    large: 95,
  },
  {
    service: 'Nail Trim',
    small: 18,
    medium: 20,
    large: 25,
  },
  {
    service: 'Ear Cleaning',
    small: 15,
    medium: 15,
    large: 18,
  },
  {
    service: 'Spa Deluxe',
    small: 85,
    medium: 105,
    large: 130,
  },
]

export const comboPackages = [
  {
    id: 'starter',
    name: 'Starter Pamper',
    description: 'Bath, nail trim, and ear cleaning — perfect for first-time visitors.',
    prices: { small: 58, medium: 72, large: 95 },
    features: ['Premium shampoo', 'Blow-dry & brush', 'Nail trim', 'Ear cleaning'],
    recommended: false,
  },
  {
    id: 'premium',
    name: 'Premium Glow',
    description: 'Our most popular package with full groom and spa extras.',
    prices: { small: 99, medium: 125, large: 155 },
    features: [
      'Full groom & styling',
      'Spa coat treatment',
      'Paw balm application',
      'Aromatherapy finish',
      'Complimentary bandana',
    ],
    recommended: true,
  },
  {
    id: 'vip',
    name: 'VIP Pet Experience',
    description: 'The ultimate luxury day for your beloved companion.',
    prices: { small: 149, medium: 179, large: 219 },
    features: [
      'Everything in Premium Glow',
      'Extended massage session',
      'Teeth brushing',
      'Photo session',
      'Take-home care kit',
    ],
    recommended: false,
  },
]

export const membershipPlans = [
  {
    id: 'monthly',
    name: 'Monthly Member',
    price: 79,
    period: '/month',
    description: 'One full grooming session per month plus 10% off add-ons.',
    perks: ['1 grooming visit/month', '10% off add-ons', 'Priority booking'],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Saver',
    price: 219,
    period: '/3 months',
    description: 'Three sessions over three months — best value for regular care.',
    perks: ['3 grooming visits', '15% off spa treatments', 'Free nail trims'],
    recommended: true,
  },
  {
    id: 'annual',
    name: 'Annual VIP',
    price: 799,
    period: '/year',
    description: 'Twelve visits, maximum savings, and exclusive member perks.',
    perks: [
      '12 grooming visits',
      '20% off all services',
      'Free boarding night yearly',
      'Birthday spa upgrade',
    ],
  },
]

export const homePricingPreview = [
  { name: 'Bath & Go', price: 35, desc: 'Quick refresh' },
  { name: 'Full Groom', price: 55, desc: 'Style & shine' },
  { name: 'Spa Day', price: 85, desc: 'Luxury treatment' },
]
