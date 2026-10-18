import React from 'react'
import logoDark from '../assets/zexta_logo.png'
import logoLight from '../assets/zexta_logo_light.png'

export default function ZextaLogo({ variant = 'dark', size = 26, height, className = '' }) {
  const isLight = variant === 'light'
  const logoSrc = isLight ? logoLight : logoDark
  const actualHeight = height || size

  return (
    <div
      className={`zexta-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      <img
        src={logoSrc}
        alt="Zexta Logo"
        height={actualHeight}
        style={{
          height: `${actualHeight}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

