import React from 'react'
import SectionBadge from './SectionBadge'
import './ImpactStats.css'

const statsData = [
  {
    number: '1,200+',
    title: 'Successful Projects Delivered',
    description: 'We build cold outreach systems, targeted lead lists, and paid ad campaigns that fill your calendar'
  },
  {
    number: '5K+',
    title: 'Ad Campaigns Optimized',
    description: 'Every contact is researched, enriched, and verified so your emails land in the inbox and reach the right person.'
  },
  {
    number: '$10M+',
    title: 'Revenue Generated for Clients',
    description: 'Top Rated on Upwork with a record built on consistent results and clear communication'
  }
]

export default function ImpactStats() {
  return (
    <section className="impact-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <SectionBadge text="Our Impact" />
          <h2 className="section-title">
            Simple systems that deliver
            <br />
            real pipeline
          </h2>
        </div>

        {/* 3 Stat Cards */}
        <div className="impact-cards-grid">
          {statsData.map((stat, idx) => (
            <div key={idx} className="impact-card card-base">
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
