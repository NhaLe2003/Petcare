import { whyChooseUs } from '../../data/team'
import { imagePresets } from '../../data/images'
import { valueIcons } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'
import ResponsiveImage from '../ui/ResponsiveImage'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="Why Choose Us"
              title="Where Pets Feel at Home"
              subtitle="We combine expert care with a stress-free environment so every visit is a tail-wagging success."
              center={false}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {whyChooseUs.map((item) => {
                const Icon = valueIcons[item.icon]
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-beige bg-warm p-5 transition-shadow hover:shadow-lg"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <ResponsiveImage
              src={imagePresets.whyChooseUs.main()}
              alt="Modern pet grooming salon"
              aspect="card"
              fallbackType="pet"
              containerClassName="rounded-3xl shadow-2xl"
              className="rounded-3xl"
              width={800}
              height={600}
            />
            <ResponsiveImage
              src={imagePresets.whyChooseUs.inset()}
              alt="Happy dogs playing"
              aspect="square"
              fallbackType="pet"
              containerClassName="absolute -bottom-6 -left-6 z-10 h-40 w-40 rounded-2xl border-4 border-white shadow-xl sm:h-48 sm:w-48"
              className="rounded-2xl"
              width={192}
              height={192}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
