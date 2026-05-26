import { stats } from '../../data/team'

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
