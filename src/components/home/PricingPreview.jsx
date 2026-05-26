import { homePricingPreview } from '../../data/pricing'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function PricingPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-beige to-cream">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Pricing"
          title="Transparent, Fair Pricing"
          subtitle="Quality care at prices that make sense. See full pricing by pet size on our pricing page."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {homePricingPreview.map((item, i) => (
            <div
              key={item.name}
              className={`rounded-3xl bg-white p-8 text-center shadow-md card-hover ${
                i === 1 ? 'ring-2 ring-primary scale-[1.02]' : ''
              }`}
            >
              {i === 1 && (
                <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
              <p className="mt-2 text-slate-500">{item.desc}</p>
              <p className="mt-4 text-4xl font-extrabold text-primary">
                ${item.price}
                <span className="text-base font-normal text-slate-500">+</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/pricing" variant="primary" size="lg">
            View Full Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
