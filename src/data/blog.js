import { imagePresets } from './images'

export const blogPosts = [
  {
    id: 1,
    slug: 'essential-grooming-tips',
    title: '10 Essential Grooming Tips Every Pet Owner Should Know',
    excerpt:
      'Learn how to maintain your pet\'s coat between professional visits and keep them comfortable year-round.',
    image: imagePresets.blog.grooming(),
    category: 'Grooming',
    date: 'May 15, 2026',
    readTime: '5 min read',
    content: `Regular brushing removes loose fur, prevents matting, and distributes natural oils. Choose brushes suited to your pet's coat type. Bathe only when needed — over-bathing strips essential oils. Always check ears, paws, and nails during home sessions.`,
  },
  {
    id: 2,
    slug: 'pet-hygiene-basics',
    title: 'Pet Hygiene Basics: Keeping Your Furry Friend Fresh',
    excerpt:
      'A practical guide to dental care, ear cleaning, and paw maintenance for dogs and cats.',
    image: imagePresets.blog.hygiene(),
    category: 'Hygiene',
    date: 'May 8, 2026',
    readTime: '4 min read',
    content: `Dental health affects overall wellness. Brush teeth with pet-safe toothpaste several times weekly. Clean ears with vet-approved solutions only. Wipe paws after walks to remove allergens and debris.`,
  },
  {
    id: 3,
    slug: 'nutrition-advice-pets',
    title: 'Nutrition Advice: Fueling Your Pet\'s Health & Happiness',
    excerpt:
      'Discover balanced diet principles, portion control, and treats that support long-term wellness.',
    image: imagePresets.blog.nutrition(),
    category: 'Nutrition',
    date: 'April 28, 2026',
    readTime: '6 min read',
    content: `Quality protein, healthy fats, and appropriate fiber matter. Avoid foods toxic to pets like chocolate, grapes, and onions. Consult your vet for breed-specific dietary needs and weight management plans.`,
  },
  {
    id: 4,
    slug: 'common-pet-health-issues',
    title: 'Common Pet Health Issues & When to See a Vet',
    excerpt:
      'Recognize early warning signs of skin problems, allergies, and digestive issues before they escalate.',
    image: imagePresets.blog.health(),
    category: 'Health',
    date: 'April 12, 2026',
    readTime: '7 min read',
    content: `Persistent scratching, lethargy, or appetite changes warrant professional attention. Seasonal allergies often show as red skin or watery eyes. Keep vaccination records current and schedule annual wellness exams.`,
  },
  {
    id: 5,
    slug: 'reduce-pet-stress-grooming',
    title: 'How to Reduce Pet Stress Before Grooming Appointments',
    excerpt:
      'Calming techniques and preparation steps to make salon visits enjoyable for anxious pets.',
    image: imagePresets.blog.behavior(),
    category: 'Behavior',
    date: 'March 22, 2026',
    readTime: '5 min read',
    content: `Take short car rides to build positive associations. Bring familiar toys or blankets. Schedule appointments during quieter hours. Positive reinforcement with treats after visits helps reduce future anxiety.`,
  },
  {
    id: 6,
    slug: 'seasonal-pet-care-guide',
    title: 'Seasonal Pet Care: Summer Heat & Winter Comfort',
    excerpt:
      'Adapt your care routine through the seasons to protect paws, coat, and hydration levels.',
    image: imagePresets.blog.seasonal(),
    category: 'Seasonal',
    date: 'March 5, 2026',
    readTime: '5 min read',
    content: `Summer: provide shade, fresh water, and avoid hot pavement. Winter: dry coats thoroughly after snow play and use pet-safe paw balms. Adjust grooming frequency based on shedding cycles each season.`,
  },
]
