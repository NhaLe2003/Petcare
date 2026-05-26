import ImageBackground from '../ui/ImageBackground'

export default function PageHero({ title, subtitle, badge, image, imageAlt = '' }) {
  return (
    <ImageBackground
      src={image}
      alt={imageAlt || title}
      className="py-20 text-white"
      overlayClassName="bg-gradient-to-r from-primary/95 to-primary/70"
      imageOpacity={0.3}
    >
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-slide-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </ImageBackground>
  )
}
