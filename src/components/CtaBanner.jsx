import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionBadge from './SectionBadge'
import PartnerLogos from './PartnerLogos'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" id="book-call">
      <div className="container">
        <div className="cta-banner-card">
          <SectionBadge text="Book a call" />

          <h2 className="cta-title">
            Join 100+ businesses growing
            <br />
            with predictable leads
          </h2>

          <p className="cta-desc">
            Book a free call and get a clear plan for your next 90 days of lead generation.
          </p>

          {/* Embedded subtle partner logos 
          <div className="cta-tools-wrapper">
            <PartnerLogos title="" />
          </div> */}

          {/* Main Action Button */}
          <div className="cta-button-wrapper">
            <a href="#schedule-call" className="btn btn-primary cta-main-btn">
              <span>Book a 15-Min call</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Rating tag */}
          <div className="cta-micro-badge">
            <span className="cta-green-dot" />
            <span>5.0 rated by 100+ clients worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
