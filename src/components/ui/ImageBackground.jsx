import { useState, useCallback, useEffect } from 'react'
import { FALLBACK } from '../../data/images'

/**
 * Full-bleed background image with gradient overlay and SVG fallback on error.
 */
export default function ImageBackground({
  src,
  alt = '',
  className = '',
  overlayClassName = 'bg-gradient-to-r from-primary/95 to-primary/70',
  imageOpacity = 0.35,
  fallbackSrc = FALLBACK.pet,
  children,
}) {
  const [bgUrl, setBgUrl] = useState(src)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setBgUrl(src)
    setFailed(false)
  }, [src])

  const handleError = useCallback(() => {
    if (!failed) {
      setFailed(true)
      setBgUrl(fallbackSrc)
    }
  }, [failed, fallbackSrc])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent/80" />

      {src && (
        <img
          src={bgUrl}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: imageOpacity }}
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={handleError}
          aria-hidden={!alt}
        />
      )}

      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative">{children}</div>
    </div>
  )
}
