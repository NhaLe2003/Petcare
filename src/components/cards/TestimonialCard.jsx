import StarRating from '../ui/StarRating'
import ResponsiveImage from '../ui/ResponsiveImage'

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-md card-hover">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-slate-600 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
          <ResponsiveImage
            src={testimonial.avatar}
            alt={testimonial.name}
            aspect="auto"
            fallbackType="avatar"
            containerClassName="h-12 w-12"
            className="h-12 w-12 rounded-full"
            width={48}
            height={48}
            showSkeleton={false}
          />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.pet}</p>
        </div>
      </div>
    </article>
  )
}
