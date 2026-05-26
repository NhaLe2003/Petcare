import Button from '../ui/Button'
import ResponsiveImage from '../ui/ResponsiveImage'
import { IconClock } from '../ui/Icons'

export default function ServiceCard({ service }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md card-hover">
      <div className="relative">
        <ResponsiveImage
          src={service.image}
          alt={service.name}
          aspect="service"
          fallbackType="service"
          className="transition-transform duration-500 group-hover:scale-110"
          width={600}
          height={400}
        />
        {service.popular && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
            Popular
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-primary">
          From ${service.priceFrom}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
        <p className="mt-2 line-clamp-2 text-slate-600">{service.description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <IconClock className="w-4 h-4 text-primary" />
          {service.duration}
        </div>
        <Button
          to={`/booking?service=${service.id}`}
          variant="primary"
          size="sm"
          className="mt-5 w-full"
        >
          Book Now
        </Button>
      </div>
    </article>
  )
}
