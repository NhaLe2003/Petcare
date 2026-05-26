/**
 * Centralized pet-care image registry.
 * Unsplash IDs are stable; URLs use auto=format&fit=crop for consistent delivery.
 */

const U = 'https://images.unsplash.com'

/** Curated Unsplash photo IDs (verified pet / grooming / care themes) */
export const PHOTO_IDS = {
  heroDogCat: `${U}/photo-1450778869180-41d0601e046e`,
  heroGroomedDog: `${U}/photo-1583511655857-d04b1edfbe8e`,
  dogBath: `${U}/photo-1516734212186-a967f81ad0d8`,
  dogGrooming: `${U}/photo-1601758228041-3cf79d7f68b5`,
  goldenRetriever: `${U}/photo-1587300003388-59208cc962cb`,
  dogsPlaying: `${U}/photo-1548199973-03cce0bbc87b`,
  vetCare: `${U}/photo-1576201836106-db1758fd1c76`,
  puppies: `${U}/photo-1530281700549-e82e7eb16071`,
  dogPortrait: `${U}/photo-1543466835-00a7907e9de1`,
  catPortrait: `${U}/photo-1517849846227-4feb0b4a0641`,
  petSpa: `${U}/photo-1552053831-71594a27632d`,
  salonInterior: `${U}/photo-1596492784531-6e6eb5ea9993`,
  nutrition: `${U}/photo-1589924691995-400dc9ecc307`,
  kitten: `${U}/photo-1560807707-08176e1fb134`,
  teamVet: `${U}/photo-1559839734-2b71ea197ec2`,
  teamGroomerM: `${U}/photo-1506794778202-cad84cf45f1d`,
  teamGroomerF: `${U}/photo-1573496359142-b8d87734a5a2`,
  teamManager: `${U}/photo-1560250097-0b93528c311a`,
}

export const FALLBACK = {
  pet: '/images/fallback-pet.svg',
  avatar: '/images/fallback-avatar.svg',
  service: '/images/fallback-service.svg',
}

/**
 * Build an optimized Unsplash URL with crop + width (and optional height).
 */
export function buildImageUrl(baseUrl, { width = 800, height, quality = 80 } = {}) {
  if (!baseUrl || typeof baseUrl !== 'string') return FALLBACK.pet

  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    q: String(quality),
    w: String(width),
  })
  if (height) params.set('h', String(height))

  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}${params.toString()}`
}

/** UI Avatars — reliable fallback for human profile photos */
export function buildAvatarUrl(name, size = 150) {
  const encoded = encodeURIComponent(name || 'Guest')
  return `https://ui-avatars.com/api/?name=${encoded}&size=${size}&background=5b9bd5&color=fff&bold=true`
}

/** Named presets used across pages and mock data */
export const imagePresets = {
  hero: () => buildImageUrl(PHOTO_IDS.heroDogCat, { width: 1920, height: 1080 }),
  heroThumb: () => buildImageUrl(PHOTO_IDS.heroGroomedDog, { width: 128, height: 128 }),
  pageHero: {
    about: () => buildImageUrl(PHOTO_IDS.dogBath, { width: 1920, height: 800 }),
    services: () => buildImageUrl(PHOTO_IDS.dogsPlaying, { width: 1920, height: 800 }),
    pricing: () => buildImageUrl(PHOTO_IDS.heroGroomedDog, { width: 1920, height: 800 }),
    testimonials: () => buildImageUrl(PHOTO_IDS.puppies, { width: 1920, height: 800 }),
    blog: () => buildImageUrl(PHOTO_IDS.heroGroomedDog, { width: 1920, height: 800 }),
  },
  about: {
    team: () => buildImageUrl(PHOTO_IDS.salonInterior, { width: 800, height: 600 }),
    facility: () => buildImageUrl(PHOTO_IDS.vetCare, { width: 800, height: 600 }),
  },
  whyChooseUs: {
    main: () => buildImageUrl(PHOTO_IDS.dogBath, { width: 800, height: 600 }),
    inset: () => buildImageUrl(PHOTO_IDS.dogsPlaying, { width: 400, height: 400 }),
  },
  services: {
    bath: () => buildImageUrl(PHOTO_IDS.dogBath, { width: 600, height: 400 }),
    groom: () => buildImageUrl(PHOTO_IDS.dogGrooming, { width: 600, height: 400 }),
    nails: () => buildImageUrl(PHOTO_IDS.goldenRetriever, { width: 600, height: 400 }),
    ears: () => buildImageUrl(PHOTO_IDS.heroDogCat, { width: 600, height: 400 }),
    spa: () => buildImageUrl(PHOTO_IDS.dogsPlaying, { width: 600, height: 400 }),
    health: () => buildImageUrl(PHOTO_IDS.vetCare, { width: 600, height: 400 }),
    hotel: () => buildImageUrl(PHOTO_IDS.dogPortrait, { width: 600, height: 400 }),
    package: () => buildImageUrl(PHOTO_IDS.puppies, { width: 600, height: 400 }),
  },
  blog: {
    grooming: () => buildImageUrl(PHOTO_IDS.heroGroomedDog, { width: 800, height: 500 }),
    hygiene: () => buildImageUrl(PHOTO_IDS.heroDogCat, { width: 800, height: 500 }),
    nutrition: () => buildImageUrl(PHOTO_IDS.nutrition, { width: 800, height: 500 }),
    health: () => buildImageUrl(PHOTO_IDS.vetCare, { width: 800, height: 500 }),
    behavior: () => buildImageUrl(PHOTO_IDS.dogsPlaying, { width: 800, height: 500 }),
    seasonal: () => buildImageUrl(PHOTO_IDS.puppies, { width: 800, height: 500 }),
  },
  team: {
    vet: () => buildImageUrl(PHOTO_IDS.teamVet, { width: 400, height: 500 }),
    groomer1: () => buildImageUrl(PHOTO_IDS.teamGroomerM, { width: 400, height: 500 }),
    groomer2: () => buildImageUrl(PHOTO_IDS.teamGroomerF, { width: 400, height: 500 }),
    manager: () => buildImageUrl(PHOTO_IDS.teamManager, { width: 400, height: 500 }),
  },
}
