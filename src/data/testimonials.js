import { buildAvatarUrl } from './images'

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    pet: 'Golden Retriever, Max',
    avatar: buildAvatarUrl('Sarah Mitchell', 150),
    rating: 5,
    text: 'PetCare Booking made scheduling so easy! Max always comes home smelling amazing and looking like a show dog. The team truly loves what they do.',
    date: 'March 2026',
  },
  {
    id: 2,
    name: 'James Chen',
    pet: 'Persian Cat, Luna',
    avatar: buildAvatarUrl('James Chen', 150),
    rating: 5,
    text: 'Luna used to hate grooming, but the gentle handlers here changed everything. Calm environment, spotless facility, and fair pricing.',
    date: 'February 2026',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    pet: 'French Bulldog, Bruno',
    avatar: buildAvatarUrl('Emily Rodriguez', 150),
    rating: 5,
    text: 'The spa package is worth every penny. Bruno\'s coat has never been softer. I appreciate the text updates during his appointment.',
    date: 'January 2026',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    pet: 'Labrador, Daisy',
    avatar: buildAvatarUrl('Michael Thompson', 150),
    rating: 4,
    text: 'We board Daisy here when we travel. Clean rooms, daily photos, and she always comes back happy. Highly recommend the care packages.',
    date: 'December 2025',
  },
  {
    id: 5,
    name: 'Lisa Park',
    pet: 'Shih Tzu, Mochi',
    avatar: buildAvatarUrl('Lisa Park', 150),
    rating: 5,
    text: 'From booking online to pickup, everything is seamless. Mochi\'s breed cut is always perfect. This is our go-to groomer!',
    date: 'November 2025',
  },
  {
    id: 6,
    name: 'David Wilson',
    pet: 'Mixed Breed, Rocky',
    avatar: buildAvatarUrl('David Wilson', 150),
    rating: 5,
    text: 'Rocky is a rescue with anxiety, and the staff are incredibly patient. They took extra time and never rushed us. True professionals.',
    date: 'October 2025',
  },
]

export const reviewStats = {
  totalBookings: 12450,
  happyCustomers: 11800,
  petsCaredFor: 15200,
  satisfactionRate: 98,
}
