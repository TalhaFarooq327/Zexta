import React from 'react'
import { ArrowUpRight, Star, Quote } from 'lucide-react'
import SectionBadge from './SectionBadge'
import './Testimonials.css'

export default function Testimonials() {
  const avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <SectionBadge text="Testimonials" />
          <h2 className="section-title">
            Results that speaks volume
            <br />
            Read success stories
          </h2>
          <p className="section-desc">Read what our clients say about working with us.</p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="testimonials-grid">
          {/* Card 1: 8X Tall Left Card */}
          <div className="test-card card-8x card-base">
            <div className="test-stat-header">
              <span className="big-stat-num">8X</span>
              <span className="stat-sublabel">Increase in conversion rate</span>
            </div>

            <div className="test-quote-icon">
              <Quote size={22} fill="#153c33" color="#153c33" />
            </div>

            <p className="test-quote-text">
              “We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their desgin and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend”
            </p>

            <div className="test-author-row">
              <div className="author-left">
                <img src={avatarUrl} alt="Karin Gabriella" className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">Karin Gabriella</span>
                  <span className="author-role">Marketing Director, Spotify</span>
                </div>
              </div>
              <div className="author-slider-dot" />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="test-right-stack">
            {/* Card 2: 2X Top Right */}
            <div className="test-card card-2x card-base">
              <div className="test-inline-stat">
                <span className="mid-stat-num">2X</span>
                <span className="mid-stat-label">Increase in lead generation</span>
              </div>

              <div className="test-quote-icon">
                <Quote size={20} fill="#153c33" color="#153c33" />
              </div>

              <p className="test-quote-text">
                “We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise ”
              </p>

              <div className="test-author-row">
                <div className="author-left">
                  <img src={avatarUrl} alt="Karin Gabriella" className="author-avatar" />
                  <div className="author-info">
                    <span className="author-name">Karin Gabriella</span>
                    <span className="author-role">Marketing Director, Spotify</span>
                  </div>
                </div>
                <div className="author-slider-dot" />
              </div>
            </div>

            {/* Bottom Row: 2 Split Cards */}
            <div className="test-bottom-split">
              {/* Card 3: Dark Green Card */}
              <div className="test-card card-dark card-base">
                <div className="test-quote-icon">
                  <Quote size={18} fill="#ffffff" color="#ffffff" />
                </div>

                <p className="test-quote-text inverted">
                  “We needed a modern, high-converting website, and the Bravio team delivered beyond expectations.”
                </p>

                <div className="test-author-row">
                  <div className="author-left">
                    <img src={avatarUrl} alt="Karin Gabriella" className="author-avatar" />
                    <div className="author-info">
                      <span className="author-name inverted">Karin Gabriella</span>
                      <span className="author-role inverted">Marketing Director, Spotify</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Light Card */}
              <div className="test-card card-light card-base">
                <div className="test-quote-icon">
                  <Quote size={18} fill="#153c33" color="#153c33" />
                </div>

                <p className="test-quote-text">
                  “We needed a modern, high-converting website, and the Bravio team delivered beyond expectations.”
                </p>

                <div className="test-author-row">
                  <div className="author-left">
                    <img src={avatarUrl} alt="Karin Gabriella" className="author-avatar" />
                    <div className="author-info">
                      <span className="author-name">Karin Gabriella</span>
                      <span className="author-role">Marketing Director, Spotify</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="testimonials-footer-bar">
          <div className="footer-bar-left">
            <span>1500 satisfied clients love our services</span>
            <div className="discord-review-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <div className="stars-mini">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#111827" color="#111827" />
                ))}
              </div>
              <span className="rating-score">4.5</span>
              <span className="rating-source">Based on 1.5k reviews</span>
            </div>
          </div>

          <div className="footer-bar-right">
            <a href="#all-reviews" className="btn btn-secondary reviews-cta-btn">
              <span>View all reviews</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
