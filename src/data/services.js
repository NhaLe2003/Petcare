import { imagePresets } from './images'

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'grooming', label: 'Grooming' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'boarding', label: 'Boarding' },
  { id: 'packages', label: 'Packages' },
]

export const petTypes = ['dog', 'cat', 'other']

export const services = [
  {
    id: 'bath-clean',
    name: 'Pet Bathing & Cleaning',
    category: 'grooming',
    petTypes: ['dog', 'cat', 'other'],
    image: imagePresets.services.bath(),
    description:
      'A refreshing bath with premium hypoallergenic shampoo, blow-dry, and coat conditioning for a clean, soft finish.',
    duration: '45–60 min',
    priceFrom: 35,
    popular: true,
  },
  {
    id: 'groom-haircut',
    name: 'Grooming & Haircut',
    category: 'grooming',
    petTypes: ['dog', 'cat'],
    image: imagePresets.services.groom(),
    description:
      'Full styling session including breed-specific cuts, brushing, dematting, and finishing touches.',
    duration: '60–90 min',
    priceFrom: 55,
    popular: true,
  },
  {
    id: 'nail-trim',
    name: 'Nail Trimming',
    category: 'grooming',
    petTypes: ['dog', 'cat', 'other'],
    image: imagePresets.services.nails(),
    description:
      'Gentle nail clipping and filing to keep paws healthy and prevent scratching or discomfort.',
    duration: '15–20 min',
    priceFrom: 18,
  },
  {
    id: 'ear-clean',
    name: 'Ear Cleaning',
    category: 'wellness',
    petTypes: ['dog', 'cat'],
    image: imagePresets.services.ears(),
    description:
      'Safe ear inspection and cleaning to reduce wax buildup and help prevent infections.',
    duration: '15 min',
    priceFrom: 15,
  },
  {
    id: 'pet-spa',
    name: 'Pet Spa Treatments',
    category: 'grooming',
    petTypes: ['dog', 'cat'],
    image: imagePresets.services.spa(),
    description:
      'Luxury spa experience with aromatherapy bath, paw balm, coat mask, and relaxing massage.',
    duration: '90–120 min',
    priceFrom: 85,
    popular: true,
  },
  {
    id: 'health-check',
    name: 'Basic Health Check',
    category: 'wellness',
    petTypes: ['dog', 'cat', 'other'],
    image: imagePresets.services.health(),
    description:
      'Quick wellness assessment including coat, skin, ears, teeth overview, and general condition notes.',
    duration: '30 min',
    priceFrom: 40,
  },
  {
    id: 'pet-hotel',
    name: 'Pet Hotel / Boarding',
    category: 'boarding',
    petTypes: ['dog', 'cat'],
    image: imagePresets.services.hotel(),
    description:
      'Comfortable overnight stays with supervised playtime, feeding schedules, and daily updates for owners.',
    duration: 'Per night',
    priceFrom: 65,
  },
  {
    id: 'care-package',
    name: 'Regular Care Package',
    category: 'packages',
    petTypes: ['dog', 'cat'],
    image: imagePresets.services.package(),
    description:
      'Monthly bundle including bath, nail trim, ear cleaning, and brush-out — ideal for routine maintenance.',
    duration: '2 hrs',
    priceFrom: 99,
    popular: true,
  },
]

export const featuredServices = services.filter((s) => s.popular)
