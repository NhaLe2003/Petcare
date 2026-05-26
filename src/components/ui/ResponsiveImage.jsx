import { useState, useCallback, useMemo, useEffect } from 'react'
import { FALLBACK, buildAvatarUrl } from '../../data/images'

const aspectClasses = {
  auto: '',
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  service: 'aspect-[3/2]',
  wide: 'aspect-[21/9]',
  card: 'aspect-[4/3]',
}

function resolveFallback(fallbackType, alt) {
  switch (fallbackType) {
    case 'avatar':
      return alt ? buildAvatarUrl(alt, 200) : FALLBACK.avatar
    case 'service':
      return FALLBACK.service
    case 'team':
    case 'pet':
    case 'hero':
    default:
      return FALLBACK.pet
  }
}

/**
 * Responsive image with aspect-ratio container, lazy loading, skeleton, and onError fallback.
 */
export default function ResponsiveImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  aspect = 'auto',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fallbackType = 'pet',
  fallbackSrc,
  showSkeleton = true,
  objectFit = 'cover',
  ...props
}) {
  const primaryFallback = useMemo(
    () => fallbackSrc || resolveFallback(fallbackType, alt),
    [fallbackSrc, fallbackType, alt],
  )

  const initialSrc = src || primaryFallback
  const [currentSrc, setCurrentSrc] = useState(initialSrc)
  const [loaded, setLoaded] = useState(false)
  const [errorStage, setErrorStage] = useState(0)

  useEffect(() => {
    setCurrentSrc(src || primaryFallback)
    setLoaded(false)
    setErrorStage(0)
  }, [src, primaryFallback])

  const handleLoad = useCallback(() => setLoaded(true), [])

  const handleError = useCallback(() => {
    setLoaded(true)
    if (errorStage === 0 && fallbackType === 'avatar' && alt) {
      setErrorStage(1)
      setCurrentSrc(buildAvatarUrl(alt, 200))
      return
    }
    if (errorStage <= 1 && currentSrc !== primaryFallback) {
      setErrorStage(2)
      setCurrentSrc(primaryFallback)
    }
  }, [errorStage, fallbackType, alt, currentSrc, primaryFallback])

  const aspectClass = aspectClasses[aspect] || aspectClasses.auto
  const hasFixedAspect = aspect !== 'auto'
  const fitClass =
    objectFit === 'contain' ? 'object-contain' : objectFit === 'fill' ? 'object-fill' : 'object-cover'

  const imgClasses = [
    'transition-opacity duration-300',
    fitClass,
    hasFixedAspect ? 'absolute inset-0 h-full w-full' : 'h-full w-full',
    loaded ? 'opacity-100' : 'opacity-0',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const containerClasses = [
    'relative overflow-hidden bg-beige',
    hasFixedAspect ? aspectClass : '',
    containerClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      {showSkeleton && !loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-beige to-primary/10"
          aria-hidden
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
        onError={handleError}
        className={imgClasses}
        {...props}
      />
    </div>
  )
}
