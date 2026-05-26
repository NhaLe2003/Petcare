import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ResponsiveImage from '../ui/ResponsiveImage'
import { imagePresets, FALLBACK } from '../../data/images'
import { IconPaw } from '../ui/Icons'

const HERO_IMAGE = imagePresets.hero()

export default function Hero() {
  const [bgSrc, setBgSrc] = useState(HERO_IMAGE)

  const onBgError = useCallback(() => {
    setBgSrc(FALLBACK.pet)
  }, [])

  return (
    <section
      className="relative min-h-screen min-h-[100dvh] overflow-hidden"
      aria-label="PetCare Booking — Premium pet care"
    >
      {/* Layer 1 — Full-bleed cat + dog background */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={bgSrc}
          alt=""
          className="h-full w-full object-cover object-[72%_center] sm:object-[right_center] lg:object-center"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={onBgError}
        />
      </div>

      {/* Layer 2 — Left-heavy gradient for readable text; right stays clearer */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20 lg:from-transparent lg:via-transparent lg:to-transparent"
        aria-hidden
      />

      {/* Layer 3 — Text + CTAs overlaid on image */}
      <div className="relative z-10 flex min-h-screen min-h-[100dvh] flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-xl lg:max-w-2xl">
            <span className="animate-slide-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-black/10 backdrop-blur-md">
              <IconPaw className="h-4 w-4 text-accent" />
              Trusted by 12,000+ pet parents
            </span>

            <h1 className="hero-text-shadow animate-slide-up-delay-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Premium Pet Care,
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-accent to-orange-300 bg-clip-text text-transparent">
                Booked in Minutes
              </span>
            </h1>

            <p className="hero-text-shadow animate-slide-up-delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg md:max-w-xl md:text-xl md:leading-relaxed">
              Professional grooming, spa treatments, wellness checks, and boarding — all in one
              warm, modern space your pets will love.
            </p>

            <div className="animate-slide-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-8 py-4 text-center text-base font-semibold text-white shadow-xl shadow-accent/35 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Appointment Now
                <span
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/15 px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/25 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Mobile / tablet: Next Available card in flow */}
          <div className="animate-fade-in-delay-4 mt-10 max-w-xs lg:hidden">
            <NextAvailableCard />
          </div>
        </div>
      </div>

      {/* Desktop: floating card bottom-right */}
      <div className="animate-fade-in-delay-4 pointer-events-none absolute bottom-20 right-6 z-20 hidden lg:block xl:right-10 xl:bottom-24">
        <div className="pointer-events-auto">
          <NextAvailableCard floating />
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full text-cream" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 40C240 80 480 0 720 40s480 40 720 0V80H0V40z" />
        </svg>
      </div>
    </section>
  )
}

function NextAvailableCard({ floating = false }) {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/90 p-5 shadow-2xl shadow-slate-900/20 backdrop-blur-xl ${
        floating ? 'animate-float' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <ResponsiveImage
          src={imagePresets.heroThumb()}
          alt="Happy groomed dog"
          aspect="square"
          containerClassName="h-14 w-14 shrink-0 rounded-xl shadow-md"
          className="rounded-xl"
          fallbackType="pet"
          width={56}
          height={56}
          showSkeleton={false}
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Next Available
          </p>
          <p className="text-lg font-bold text-primary">Today · 2:30 PM</p>
        </div>
      </div>
    </div>
  )
}
