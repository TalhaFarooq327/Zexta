import React from 'react'
import './PartnerLogos.css'

const partnerList = [
  // Web Development & Design Stack
  {
    name: 'React',
    color: '#087ea4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    color: '#000000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" />
        <path d="M149.508 157.08L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.474 146.516 159.871 149.508 157.08Z" fill="url(#next_logo_grad)" />
        <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
        <defs>
          <linearGradient id="next_logo_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Webflow',
    color: '#146EF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#146EF5">
        <path d="M17.8 7.3C16.8 9.2 15.6 11.1 14.5 13.2L12.8 7.3H10.5L8.8 13.2C7.7 11.1 6.5 9.2 5.5 7.3H2C3.8 10.9 5.8 14.5 7.6 18.2H9.8L11.7 11.8L13.6 18.2H15.8C17.6 14.5 19.6 10.9 21.4 7.3H17.8Z" />
      </svg>
    )
  },
  {
    name: 'Shopify',
    color: '#008060',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19.3 5.4C19.2 5.1 18.9 4.9 18.6 4.9L15.9 4.8C15.8 3.5 14.8 1 12.8 1C10.7 1 9.6 3.4 9.5 4.8L6.8 4.9C6.5 4.9 6.2 5.1 6.1 5.4L2.1 20.3C2 20.7 2.3 21.1 2.7 21.1L18.7 21.1C19.1 21.1 19.4 20.7 19.3 20.3L19.3 5.4Z" fill="#95BF47" />
        <path d="M12.8 2.5C13.8 2.5 14.4 3.7 14.5 4.8L10.9 4.8C11 3.7 11.7 2.5 12.8 2.5Z" fill="#5E8E3E" />
        <path d="M13.2 8.5C11.5 8.5 10.7 9.5 10.7 10.5C10.7 12.5 14.5 12.5 14.5 14.2C14.5 15 13.7 15.5 12.7 15.5C11.3 15.5 10.5 14.6 10.5 14.6L9.8 16.2C9.8 16.2 11 17.2 12.7 17.2C14.7 17.2 16.2 16 16.2 14.1C16.2 11.8 12.3 12 12.3 10.3C12.3 9.8 12.8 9.5 13.4 9.5C14.5 9.5 15.2 10.1 15.2 10.1L15.9 8.6C15.9 8.6 14.8 8.5 13.2 8.5Z" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: 'WordPress',
    color: '#21759B',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#21759B">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-8.8 10c0-1.78.53-3.44 1.44-4.83l3.65 10.01C5.35 15.7 3.2 13.97 3.2 12zm8.8 8.8c-1.32 0-2.55-.32-3.64-.89l3.15-9.14 3.23 8.84c-1.35.76-2.74 1.19-2.74 1.19zm1.09-12.7c.45-.02.86-.07.86-.07.41-.05.36-.64-.05-.62 0 0-1.23.1-2.03.1-.75 0-1.98-.1-1.98-.1-.41-.02-.46.59-.05.62 0 0 .39.05.81.07l1.21 3.32-1.7 5.1-2.83-8.42c.45-.02.86-.07.86-.07.41-.05.36-.64-.05-.62 0 0-1.23.1-2.03.1-.21 0-.48-.01-.76-.03C8.42 4.67 10.12 3.6 12 3.6c2.42 0 4.61 1.05 6.13 2.73-.08 0-.15.01-.23.01-.75 0-1.28.65-1.28 1.35 0 .63.37 1.16.76 1.79.31.54.67 1.23.67 2.22 0 .69-.26 1.55-.65 2.59l-1.98 5.92-3.53-10.11z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    color: '#0284c7',
    icon: (
      <svg width="22" height="18" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    color: '#111827',
    icon: (
      <svg width="15" height="21" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    )
  },
  {
    name: 'Stripe',
    color: '#635BFF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.728.877 15.354.34 12.52.34 6.726.34 3.033 3.42 3.033 7.9c0 4.908 3.864 6.136 7.424 7.377 2.11.737 2.969 1.488 2.969 2.457 0 .973-.87 1.515-2.28 1.515-2.074 0-4.846-.97-6.84-2.112l-.934 5.539c2.09.96 4.792 1.684 7.774 1.684 6.064 0 9.824-2.923 9.824-7.618 0-4.664-3.567-6.07-6.994-7.292z" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 11.5H9V19H7.5V11.5H5V10.2H11.5V11.5ZM13.8 17.2C14.3 17.6 15 17.8 15.8 17.8C16.8 17.8 17.4 17.3 17.4 16.5C17.4 15.7 16.9 15.3 15.6 14.8C14 14.1 13 13.5 13 12C13 10.7 14.1 9.8 15.7 9.8C16.7 9.8 17.6 10.1 18.2 10.5L17.7 11.8C17.2 11.5 16.5 11.2 15.7 11.2C14.9 11.2 14.4 11.6 14.4 12.2C14.4 12.9 14.9 13.3 16.2 13.8C17.9 14.4 18.9 15.2 18.9 16.6C18.9 18 17.7 19.2 15.8 19.2C14.6 19.2 13.5 18.7 12.8 18.2L13.8 17.2Z" fill="#ffffff" />
      </svg>
    )
  },

  // Outbound, Growth & Infrastructure
  {
    name: 'Meta',
    color: '#0064E0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="url(#meta_official_grad)">
        <defs>
          <linearGradient id="meta_official_grad" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0064E0" />
            <stop offset="0.5" stopColor="#0081FB" />
            <stop offset="1" stopColor="#0064E0" />
          </linearGradient>
        </defs>
        <path d="M16.96 4.02c-1.89 0-3.55.94-4.96 2.53-1.41-1.59-3.07-2.53-4.96-2.53-3.69 0-6.04 2.87-6.04 6.98 0 4.27 2.65 7.98 6.55 7.98 2.06 0 3.73-1.04 5.05-2.61 1.32 1.57 2.99 2.61 5.05 2.61 3.9 0 6.55-3.71 6.55-7.98 0-4.11-2.35-6.98-6.04-6.98zm-9.3 12.8c-2.45 0-4.25-2.52-4.25-5.82 0-3.07 1.62-5.07 3.86-5.07 1.74 0 3.2 1.13 4.24 3.03-.98 2.05-2.32 7.86-3.85 7.86zm9.88 0c-1.53 0-2.87-5.81-3.85-7.86 1.04-1.9 2.5-3.03 4.24-3.03 2.24 0 3.86 2 3.86 5.07 0 3.3-1.8 5.82-4.25 5.82z" />
      </svg>
    )
  },
  {
    name: 'Clay',
    color: '#6366F1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#6366F1" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18" stroke="#6366F1" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'HighLevel',
    color: '#F05023',
    icon: (
      <div className="highlevel-icon">
        <span className="hl-bar b1" style={{ backgroundColor: '#FF7043' }} />
        <span className="hl-bar b2" style={{ backgroundColor: '#F05023' }} />
        <span className="hl-bar b3" style={{ backgroundColor: '#D84315' }} />
      </div>
    )
  },
  {
    name: 'Instantly',
    color: '#7C3AED',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#7C3AED">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    )
  },
  {
    name: 'HubSpot',
    color: '#FF7A59',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF7A59">
        <path d="M17.8 7.2V5.1c.8-.4 1.4-1.3 1.4-2.3 0-1.5-1.2-2.7-2.7-2.7S13.8 1.3 13.8 2.8c0 1 .6 1.9 1.4 2.3v2.1c-.8.4-1.4 1.1-1.7 2L9.2 6.8c.1-.3.1-.6.1-.9 0-1.8-1.5-3.3-3.3-3.3S2.7 4.1 2.7 5.9s1.5 3.3 3.3 3.3c.6 0 1.1-.2 1.6-.4l4.3 2.4c-.1.4-.2.9-.2 1.4 0 .5.1 1 .2 1.4l-4.3 2.4c-.5-.2-1-.4-1.6-.4-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c0-.3 0-.6-.1-.9l4.3-2.4c.3.9.9 1.6 1.7 2v2.1c-.8.4-1.4 1.3-1.4 2.3 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7c0-1-.6-1.9-1.4-2.3v-2.1c1.5-.7 2.5-2.2 2.5-4 0-1.8-1-3.3-2.5-4zm-1.3-4.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm-10.5 5c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zm1.7 11.4c0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7.8-1.7 1.7-1.7 1.7.8 1.7 1.7zm8.8 3.8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm0-5.8c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z" />
      </svg>
    )
  },
  {
    name: 'Apollo.io',
    color: '#D97706',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 15 5.5 15 11C15 13.5 14 16 14 16L12 15L10 16C10 16 9 13.5 9 11C9 5.5 12 2 12 2Z" fill="#F59E0B" />
        <path d="M8 12C6 13 4 15 4 18L7 17L8 12Z" fill="#D97706" />
        <path d="M16 12C18 13 20 15 20 18L17 17L16 12Z" fill="#D97706" />
        <circle cx="12" cy="9" r="1.5" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: 'Klaviyo',
    color: '#1f2937',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="18" rx="2" fill="#252525" />
        <rect x="14" y="3" width="7" height="10" rx="2" fill="#F06543" />
      </svg>
    )
  }
]

export default function PartnerLogos({ title = 'Powered by the tools and technologies that top teams trust' }) {
  return (
    <section className="partners-section">
      <div className="container">
        {title && <p className="partners-heading">{title}</p>}
      </div>

      {/* Infinite loop marquee of authentic brand colored partner logos */}
      <div className="partners-marquee-wrapper">
        <div className="partners-marquee-track">
          <div className="partners-group">
            {partnerList.map((partner, index) => (
              <div key={`p1-${index}`} className="partner-logo-item">
                <div className="partner-icon-wrap">{partner.icon}</div>
                <span className="logo-text" style={{ color: partner.color === '#000000' ? '#111827' : partner.color }}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="partners-group" aria-hidden="true">
            {partnerList.map((partner, index) => (
              <div key={`p2-${index}`} className="partner-logo-item">
                <div className="partner-icon-wrap">{partner.icon}</div>
                <span className="logo-text" style={{ color: partner.color === '#000000' ? '#111827' : partner.color }}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

