import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import { imagePresets } from '../data/images'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { IconCheck } from '../components/ui/Icons'
import {
  groomingPricing,
  comboPackages,
  membershipPlans,
  sizeLabels,
  petSizes,
} from '../data/pricing'

export default function Pricing() {
  const [selectedSize, setSelectedSize] = useState('medium')

  return (
    <>
      <PageHero
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your pet. Prices vary by size — select yours below."
        image={imagePresets.pageHero.pricing()}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full bg-beige p-1">
              {petSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <p className="mb-8 text-center text-sm text-slate-500">{sizeLabels[selectedSize]}</p>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-center font-semibold capitalize">{selectedSize}</th>
                  </tr>
                </thead>
                <tbody>
                  {groomingPricing.map((row, i) => (
                    <tr
                      key={row.service}
                      className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}
                    >
                      <td className="px-6 py-4 font-medium text-slate-800">{row.service}</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-primary">
                        ${row[selectedSize]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="Packages" title="Combo Packages" subtitle="Save more with bundled services designed for complete care." />
          <div className="grid gap-8 lg:grid-cols-3">
            {comboPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-white p-8 shadow-md card-hover ${
                  pkg.recommended ? 'ring-2 ring-primary lg:scale-105' : ''
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                <p className="mt-2 text-slate-600">{pkg.description}</p>
                <p className="mt-6 text-4xl font-extrabold text-primary">
                  ${pkg.prices[selectedSize]}
                </p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <IconCheck className="w-5 h-5 shrink-0 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to="/booking" variant={pkg.recommended ? 'accent' : 'outline'} className="mt-8 w-full">
                  Book Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeader badge="Membership" title="Membership Plans" subtitle="Regular visitors save more with our flexible membership options." />
          <div className="grid gap-8 md:grid-cols-3">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl border-2 p-8 card-hover ${
                  plan.recommended
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-beige bg-white shadow-md'
                }`}
              >
                {plan.recommended && (
                  <span className="text-xs font-bold uppercase tracking-wide text-primary">
                    Best Value
                  </span>
                )}
                <h3 className="mt-2 text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-primary">
                  ${plan.price}
                  <span className="text-base font-normal text-slate-500">{plan.period}</span>
                </p>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-6 space-y-2">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-slate-600">
                      <IconCheck className="w-4 h-4 text-emerald-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
