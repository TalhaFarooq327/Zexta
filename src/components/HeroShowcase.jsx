import React from 'react'
import boltshiftImg from '../assets/generated/showcase_boltshift.png'
import flowlineImg from '../assets/generated/showcase_flowline.png'
import welhuImg from '../assets/generated/showcase_welhu.png'
import case1Img from '../assets/generated/case_study_1.png'
import case2Img from '../assets/generated/case_study_2.png'
import case3Img from '../assets/generated/case_study_3.png'
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
  },
  {
    id: 'apexiq',
    title: 'ApexIQ',
    category: 'Influencer outreach - campaigns',
    metric: '8.4x',
    metricLabel: 'ROAS achieved',
    image: case1Img,
    alt: 'ApexIQ Performance Dashboard Preview'
  },
  {
    id: 'synthetix',
    title: 'Synthetix',
    category: 'Cold email - deliverability',
    metric: '99.2%',
    metricLabel: 'Inbox placement',
    image: case2Img,
    alt: 'Synthetix Email Deliverability Dashboard Preview'
  },
  {
    id: 'nexusdev',
    title: 'NexusWeb',
    category: 'Web development - Next.js & Webflow',
    metric: '+165%',
    metricLabel: 'Conversion rate',
    image: case3Img,
    alt: 'NexusWeb High-Converting Landing Page Preview'
  }
]

function ShowcaseCard({ item }) {
  return (
    <div className="showcase-card">
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
  )
}

export default function HeroShowcase() {
  return (
    <section className="showcase-section" aria-label="Client showcase loop">
      <div className="showcase-marquee-wrapper">
        <div className="showcase-marquee-track">
          <div className="showcase-group">
            {showcaseItems.map((item) => (
              <ShowcaseCard key={`grp1-${item.id}`} item={item} />
            ))}
          </div>
          <div className="showcase-group" aria-hidden="true">
            {showcaseItems.map((item) => (
              <ShowcaseCard key={`grp2-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

