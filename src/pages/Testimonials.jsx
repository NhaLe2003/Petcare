import PageHero from '../components/layout/PageHero'
import { imagePresets } from '../data/images'
import TestimonialCard from '../components/cards/TestimonialCard'
import SectionHeader from '../components/ui/SectionHeader'
import { testimonials, reviewStats } from '../data/testimonials'

export default function Testimonials() {
  const statsDisplay = [
    { value: reviewStats.totalBookings.toLocaleString(), label: 'Total Bookings' },
    { value: reviewStats.happyCustomers.toLocaleString() + '+', label: 'Happy Customers' },
    { value: reviewStats.petsCaredFor.toLocaleString() + '+', label: 'Pets Cared For' },
    { value: `${reviewStats.satisfactionRate}%`, label: 'Satisfaction Rate' },
  ]

  return (
    <>
      <PageHero
        badge="Reviews"
        title="What Pet Parents Say"
        subtitle="Real stories from families who trust PetCare Booking with their beloved companions."
        image={imagePresets.pageHero.testimonials()}
      />

      <section className="bg-gradient-to-r from-primary to-primary-dark py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
          {statsDisplay.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Customer Reviews"
            title="Rated 4.9 Out of 5 Stars"
            subtitle="Every review helps us improve and reminds us why we love what we do."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
