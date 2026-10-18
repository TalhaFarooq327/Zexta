import React, { useState } from 'react'
import boltshiftImg from '../assets/generated/showcase_boltshift.png'
import flowlineImg from '../assets/generated/showcase_flowline.png'
import welhuImg from '../assets/generated/showcase_welhu.png'
import './HeroShowcase.css'

const showcaseItems = [
  {
    id: 'boltshift',
    title: 'Boltshift',
    category: 'Lead generation - pipeline',
    metric: '3x',
    metricLabel: 'Booked meetings',
    image: boltshiftImg,
    alt: 'Boltshift Analytics Dashboard Preview'
  },
  {
    id: 'flowline',
    title: 'Flowline',
    category: 'Email automation - workflows',
    metric: '+40%',
    metricLabel: 'Follow-up replies',
    image: flowlineImg,
    alt: 'Flowline Automation Workflows Preview'
  },
  {
    id: 'welhu',
    title: 'Welhu',
    category: 'List building - enrichment',
    metric: '10k',
    metricLabel: 'Verified leads',
    image: welhuImg,
    alt: 'Welhu Lead Enrichment Board Preview'
  }
]

export default function HeroShowcase() {
  const [activeCard, setActiveCard] = useState('boltshift')

  return (
    <section className="showcase-section">
      <div className="container showcase-container">
        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`showcase-card ${activeCard === item.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(item.id)}
            >
              <div className="showcase-screen-wrapper">
                <img src={item.image} alt={item.alt} className="showcase-screen-img" />
              </div>
              <div className="showcase-card-footer">
                <div className="showcase-card-info">
                  <h3 className="showcase-card-title">{item.title}</h3>
                  <p className="showcase-card-category">{item.category}</p>
                </div>
                <div className="showcase-card-metric">
                  <span className="metric-val">{item.metric}</span>
                  <span className="metric-text">{item.metricLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
