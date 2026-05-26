export default function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-primary/10 text-primary'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/85' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
