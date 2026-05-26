import { imagePresets } from './images'

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Amanda Foster',
    role: 'Lead Veterinarian',
    image: imagePresets.team.vet(),
    bio: '15+ years in companion animal medicine with a focus on preventive wellness.',
    certifications: ['DVM', 'Fear Free Certified'],
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    role: 'Master Groomer',
    image: imagePresets.team.groomer1(),
    bio: 'Award-winning stylist specializing in breed-standard cuts and creative styling.',
    certifications: ['NDGAA Certified', '10+ years experience'],
  },
  {
    id: 3,
    name: 'Jessica Tran',
    role: 'Senior Pet Stylist',
    image: imagePresets.team.groomer2(),
    bio: 'Known for gentle handling of anxious pets and spa treatment expertise.',
    certifications: ['IPG Certified Groomer'],
  },
  {
    id: 4,
    name: 'Ryan O\'Brien',
    role: 'Boarding Care Manager',
    image: imagePresets.team.manager(),
    bio: 'Ensures every guest receives personalized attention and daily enrichment.',
    certifications: ['Pet First Aid', 'CPR Certified'],
  },
]

export const coreValues = [
  {
    icon: 'heart',
    title: 'Compassion First',
    description: 'Every pet is treated with patience, respect, and genuine affection.',
  },
  {
    icon: 'shield',
    title: 'Safety Always',
    description: 'Strict hygiene protocols and gentle handling for stress-free visits.',
  },
  {
    icon: 'star',
    title: 'Excellence',
    description: 'Continuous training and premium products for outstanding results.',
  },
  {
    icon: 'users',
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and updates you can trust.',
  },
]

export const stats = [
  { value: '12,000+', label: 'Happy Customers' },
  { value: '15,200+', label: 'Pets Groomed' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
]

export const whyChooseUs = [
  {
    icon: 'calendar',
    title: 'Easy Online Booking',
    description: 'Schedule appointments in minutes with real-time availability.',
  },
  {
    icon: 'sparkles',
    title: 'Premium Products',
    description: 'Hypoallergenic, eco-friendly shampoos and spa-grade treatments.',
  },
  {
    icon: 'home',
    title: 'Modern Facility',
    description: 'Spacious, climate-controlled suites with sanitized equipment.',
  },
  {
    icon: 'clock',
    title: 'Flexible Hours',
    description: 'Early morning and evening slots to fit your busy lifestyle.',
  },
]
