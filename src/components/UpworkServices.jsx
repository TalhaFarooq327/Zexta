import React from 'react'
import { ArrowUpRight, Mail, GitFork, Star, Code2 } from 'lucide-react'
import SectionBadge from './SectionBadge'
import './UpworkServices.css'

const upworkCards = [
  {
    id: 1,
    icon: (
      <div className="upwork-service-icon">
        <Mail size={22} color="#153c33" />
      </div>
    ),
    badge: '★ Top Rated, 100% Job Success',
    title: 'Cold Email Outreach',
    description: 'Infrastructure, deliverability and campaigns that land in the inbox and book meetings.',
    buttonText: 'View Cold Email Profile',
    url: '#upwork-cold-email'
  },
  {
    id: 2,
    icon: (
      <div className="upwork-service-icon">
        <Code2 size={22} color="#153c33" />
      </div>
    ),
    badge: '★ Top Rated, 100% Job Success',
    title: 'Web & App Development',
    description: 'High-converting React, Next.js, Webflow, and Shopify websites engineered for speed, SEO, and lead capture.',
    buttonText: 'View Web Dev Profile',
    url: '#upwork-web-dev'
  },
  {
    id: 3,
    icon: (
      <div className="upwork-service-icon">
        <GitFork size={22} color="#153c33" />
      </div>
    ),
    badge: '★ Top Rated, 100% Job Success',
    title: 'Email Automation',
    description: 'Automated flows and follow-ups that nurture every lead and turn them into customers.',
    buttonText: 'View Automation Profile',
    url: '#upwork-automation'
  },
  {
    id: 4,
    icon: (
      <div className="upwork-service-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#153c33">
          <path d="M16.96 4.02c-1.89 0-3.55.94-4.96 2.53-1.41-1.59-3.07-2.53-4.96-2.53-3.69 0-6.04 2.87-6.04 6.98 0 4.27 2.65 7.98 6.55 7.98 2.06 0 3.73-1.04 5.05-2.61 1.32 1.57 2.99 2.61 5.05 2.61 3.9 0 6.55-3.71 6.55-7.98 0-4.11-2.35-6.98-6.04-6.98z" />
        </svg>
      </div>
    ),
    badge: '★ Top Rated, 100% Job Success',
    title: 'Meta & Google ADs',
    description: 'Lead generation campaigns on Facebook, Instagram, and Google that bring qualified leads.',
    buttonText: 'View Ads Profile',
    url: '#upwork-ads'
  }
]

export default function UpworkServices() {
  return (
    <section className="upwork-section" id="upwork">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <SectionBadge text="Hire Us ON Upwork" />
          <h2 className="section-title">
            Work with us on Upwork
            <br />
            Pick the service you need
          </h2>
          <p className="section-desc">
            Every profile is Top Rated with a 100% Job Success Score.
          </p>
        </div>

        {/* 3 Profile Cards */}
        <div className="upwork-cards-grid">
          {upworkCards.map((card) => (
            <div key={card.id} className="upwork-card card-base">
              {/* Top Icons Row */}
              <div className="upwork-top-row">
                {card.icon}
                <div className="upwork-brand-mark">
                  <span>up</span>
                </div>
              </div>

              {/* Badge */}
              <div className="upwork-badge-pill">
                <span>{card.badge}</span>
              </div>

              {/* Title & Desc */}
              <h3 className="upwork-card-title">{card.title}</h3>
              <p className="upwork-card-desc">{card.description}</p>

              {/* CTA Button */}
              <div className="upwork-card-action">
                <a href={card.url} className="btn btn-primary upwork-btn">
                  <span>{card.buttonText}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
