import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../cards/TestimonialCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function TestimonialsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Testimonials"
          title="Loved by Pets & Parents Alike"
          subtitle="Don't just take our word for it — hear from families who trust us with their furry companions."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/testimonials" variant="outline" size="lg">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}
