import React, { useState } from 'react'
import { ArrowUpRight, ArrowRight, Star, Quote } from 'lucide-react'
import './Hero.css'

const leftReviews = [
  {
    text: "Filled our calendar with 34 qualified demos in month one. The lead list targeting was spot on.",
    author: "• Karin Gabriella",
    role: "VP Growth, Welhu",
    badge: "34 Demos",
  },
  {
    text: "Zexta built our cold outreach infrastructure from scratch. 68% open rates and zero spam issues.",
    author: "• Marcus Vance",
    role: "Head of Sales, BoltShift",
    badge: "68% Opens",
  },
  {
    text: "Closed two enterprise deals within 45 days of launching campaigns. Incredible ROI.",
    author: "• Liam Thorne",
    role: "Founder & CEO, ScaleB2B",
    badge: "$120K Won",
  },
  {
    text: "Best B2B lead generation team we've ever hired. Reliable, communicative, and transparent.",
    author: "• Chloe Davenport",
    role: "Revenue Lead, Flowline",
    badge: "5.0 ★",
  },
]

const rightReviews = [
  {
    text: "Clean setup, clear reporting, and real results. Easy to work with and scaled our meetings fast.",
    author: "• David Chen",
    role: "Dir. Acquisition, Lumina",
    badge: "Verified Client",
  },
  {
    text: "Their personalized copy and domain warmup saved our sales pipeline. 10/10 execution.",
    author: "• Elena Rostova",
    role: "VP Marketing, NovaCorp",
    badge: "10/10 Quality",
  },
  {
    text: "Added $45k in monthly recurring pipeline in 60 days. The deliverability expertise is world class.",
    author: "• Julian Hayes",
    role: "Co-Founder, Synthetix",
    badge: "+$45k MRR",
  },
  {
    text: "Super responsive team. They iterated quickly on our ICP lists and response rates tripled.",
    author: "• Sophia Martin",
    role: "Growth Lead, ApexIQ",
    badge: "3X Replies",
  },
]

export default function Hero() {
  const [leftIndex, setLeftIndex] = useState(0)
  const [leftPrevIndex, setLeftPrevIndex] = useState(null)
  const [leftAnimating, setLeftAnimating] = useState(false)

  const [rightIndex, setRightIndex] = useState(0)
  const [rightPrevIndex, setRightPrevIndex] = useState(null)
  const [rightAnimating, setRightAnimating] = useState(false)

  const handleNextLeft = () => {
    if (leftAnimating) return
    setLeftPrevIndex(leftIndex)
    setLeftIndex((prev) => (prev + 1) % leftReviews.length)
    setLeftAnimating(true)
    setTimeout(() => {
      setLeftAnimating(false)
    }, 440)
  }

  const handleNextRight = () => {
    if (rightAnimating) return
    setRightPrevIndex(rightIndex)
    setRightIndex((prev) => (prev + 1) % rightReviews.length)
    setRightAnimating(true)
    setTimeout(() => {
      setRightAnimating(false)
    }, 440)
  }

  const renderCardContent = (review, activeIdx, allReviews) => (
    <>
      <div className="note-header">
        <div className="note-quote-icon">
          <Quote size={16} fill="#2c7a65" color="#2c7a65" />
        </div>
        <span className="note-badge">{review.badge}</span>
      </div>

      <div className="review-inner-content">
        <p className="note-text">
          "{review.text}"
        </p>
        <div className="note-footer">
          <div className="note-author-info">
            <span className="note-author">{review.author}</span>
            <span className="note-role">{review.role}</span>
          </div>
          <div className="note-dots">
            {allReviews.map((_, i) => (
              <span
                key={i}
                className={`note-dot ${i === activeIdx ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Floating Testimonial Note - Left Stacked Deck (3D Flip on Hover) */}
        <div
          className="floating-note-stack stack-left"
          onMouseEnter={handleNextLeft}
          onClick={handleNextLeft}
          role="button"
          tabIndex={0}
          title="Hover to flip reviews in 3D"
        >
          {/* Underlying stacked cards */}
          <div className="deck-card deck-card-bottom" aria-hidden="true" />
          <div className="deck-card deck-card-middle" aria-hidden="true" />

          {/* Outgoing card flipping away in 3D */}
          {leftAnimating && leftPrevIndex !== null && (
            <div className="deck-card deck-card-top deck-card-flip-out-left" aria-hidden="true">
              {renderCardContent(leftReviews[leftPrevIndex], leftPrevIndex, leftReviews)}
            </div>
          )}

          {/* Top active card flipping into view in 3D */}
          <div className={`deck-card deck-card-top ${leftAnimating ? 'deck-card-flip-in-left' : ''}`}>
            {renderCardContent(leftReviews[leftIndex], leftIndex, leftReviews)}
          </div>
        </div>

        {/* Floating Testimonial Note - Right Stacked Deck (3D Flip on Hover) */}
        <div
          className="floating-note-stack stack-right"
          onMouseEnter={handleNextRight}
          onClick={handleNextRight}
          role="button"
          tabIndex={0}
          title="Hover to flip reviews in 3D"
        >
          {/* Underlying stacked cards */}
          <div className="deck-card deck-card-bottom" aria-hidden="true" />
          <div className="deck-card deck-card-middle" aria-hidden="true" />

          {/* Outgoing card flipping away in 3D */}
          {rightAnimating && rightPrevIndex !== null && (
            <div className="deck-card deck-card-top deck-card-flip-out-right" aria-hidden="true">
              {renderCardContent(rightReviews[rightPrevIndex], rightPrevIndex, rightReviews)}
            </div>
          )}

          {/* Top active card flipping into view in 3D */}
          <div className={`deck-card deck-card-top ${rightAnimating ? 'deck-card-flip-in-right' : ''}`}>
            {renderCardContent(rightReviews[rightIndex], rightIndex, rightReviews)}
          </div>
        </div>

        {/* Main Center Content */}
        <div className="hero-center-content">
          {/* Top Pill Badge */}
          <div className="hero-badge-wrapper">
            <a href="#testimonials" className="badge-status hero-pill">
              <span className="status-dot" />
              <span>5.0 rated by 100+ clients worldwide</span>
              <ArrowRight size={13} className="hero-pill-arrow" />
            </a>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Predictable Leads and Growth
            <br />
            For Ambitious B2B Businesses
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            We build cold outreach systems, targeted lead lists, and paid ad campaigns that fill your calendar with qualified sales calls every month.
          </p>

          {/* CTA Button */}
          <div className="hero-cta-wrapper">
            <a href="#book-call" className="btn btn-primary hero-main-btn">
              <span>Book a Free Strategy Call</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Social Proof Row */}
          <div className="hero-social-proof">
            <div className="avatar-group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                alt="Client avatar 1"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                alt="Client avatar 2"
                className="avatar-img"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                alt="Client avatar 3"
                className="avatar-img"
              />
              <div className="avatar-count">+2K</div>
            </div>

            <div className="rating-info">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#111827" color="#111827" />
                ))}
              </div>
              <span className="reviews-text">From 1.5K reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
