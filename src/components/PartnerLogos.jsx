import React from 'react'
import './PartnerLogos.css'

export default function PartnerLogos({ title = 'Powered by the tools that top teams trust' }) {
  return (
    <section className="partners-section">
      <div className="container">
        {title && <p className="partners-heading">{title}</p>}
        <div className="partners-logos-row">
          {/* Clay */}
          <div className="partner-logo-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="logo-text">clay</span>
          </div>

          {/* HighLevel */}
          <div className="partner-logo-item">
            <div className="highlevel-icon">
              <span className="hl-bar b1" />
              <span className="hl-bar b2" />
              <span className="hl-bar b3" />
            </div>
            <span className="logo-text">HighLevel</span>
          </div>

          {/* Meta */}
          <div className="partner-logo-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.96 4.02c-1.89 0-3.55.94-4.96 2.53-1.41-1.59-3.07-2.53-4.96-2.53-3.69 0-6.04 2.87-6.04 6.98 0 4.27 2.65 7.98 6.55 7.98 2.06 0 3.73-1.04 5.05-2.61 1.32 1.57 2.99 2.61 5.05 2.61 3.9 0 6.55-3.71 6.55-7.98 0-4.11-2.35-6.98-6.04-6.98zm-9.3 12.8c-2.45 0-4.25-2.52-4.25-5.82 0-3.07 1.62-5.07 3.86-5.07 1.74 0 3.2 1.13 4.24 3.03-.98 2.05-2.32 7.86-3.85 7.86zm9.88 0c-1.53 0-2.87-5.81-3.85-7.86 1.04-1.9 2.5-3.03 4.24-3.03 2.24 0 3.86 2 3.86 5.07 0 3.3-1.8 5.82-4.25 5.82z" />
            </svg>
            <span className="logo-text">Meta</span>
          </div>

          {/* Instantly */}
          <div className="partner-logo-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            <span className="logo-text">Instantly</span>
          </div>

          {/* Klaviyo */}
          <div className="partner-logo-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="18" rx="2" />
              <rect x="14" y="3" width="7" height="10" rx="2" />
            </svg>
            <span className="logo-text" style={{ fontFamily: 'serif', letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
              klaviyo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
