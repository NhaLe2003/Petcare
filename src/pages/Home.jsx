import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import FeaturedServices from '../components/home/FeaturedServices'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PricingPreview from '../components/home/PricingPreview'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import CtaBanner from '../components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedServices />
      <WhyChooseUs />
      <PricingPreview />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  )
}
