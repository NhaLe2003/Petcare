import { useState, useMemo } from 'react'
import PageHero from '../components/layout/PageHero'
import { imagePresets } from '../data/images'
import ServiceCard from '../components/cards/ServiceCard'
import { services, serviceCategories } from '../data/services'

export default function Services() {
  const [category, setCategory] = useState('all')
  const [petType, setPetType] = useState('all')

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchCategory = category === 'all' || s.category === category
      const matchPet = petType === 'all' || s.petTypes.includes(petType)
      return matchCategory && matchPet
    })
  }, [category, petType])

  return (
    <>
      <PageHero
        badge="Services"
        title="Complete Pet Care Services"
        subtitle="From quick nail trims to luxury spa days — find the perfect service for your companion."
        image={imagePresets.pageHero.services()}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    category === cat.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-primary/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Pet type:</span>
              {['all', 'dog', 'cat', 'other'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPetType(type)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium capitalize transition-all ${
                    petType === type
                      ? 'bg-accent text-white'
                      : 'bg-beige text-slate-600 hover:bg-accent/20'
                  }`}
                >
                  {type === 'all' ? 'All' : type}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-500">
              No services match your filters. Try adjusting your selection.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
