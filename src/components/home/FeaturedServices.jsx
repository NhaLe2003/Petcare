import { featuredServices } from '../../data/services'
import ServiceCard from '../cards/ServiceCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function FeaturedServices() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Our Services"
          title="Pampering Your Pets, Our Passion"
          subtitle="From refreshing baths to luxury spa days — discover services tailored to every breed and personality."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
