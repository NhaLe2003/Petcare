import { IconStar } from './Icons'

export default function StarRating({ rating, max = 5, size = 'sm' }) {
  const sizeClass = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <IconStar
          key={i}
          className={`${sizeClass} ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  )
}
