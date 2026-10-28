import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ZextaLogo from './ZextaLogo'
import watermarkImg from '../assets/generated/watermark_zexta.png'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top 4-Column Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <ZextaLogo variant="dark" size={32} />
            </div>
            <p className="footer-tagline">
              Have questions or need assistance? WE're here to help!
            </p>
          </div>

          {/* Column 2: Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Cold Email Outreach</a></li>
              <li><a href="#services">Lead Generation</a></li>
              <li><a href="#services">Meta & Google Ads</a></li>
              <li><a href="#services">Marketing Automation</a></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Social</h4>
            <ul className="footer-links-list">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">Linkedin</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://upwork.com" target="_blank" rel="noreferrer">Upwork</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="newsletter-desc">
              Stay ahead with web development, outreach, and conversion tips that bring real results.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-icon-circle newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={17} />
              </button>
            </form>
            {subscribed && (
              <span className="newsletter-success">Thank you for subscribing!</span>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 Zexta. All rights reserved
          </div>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>

        {/* Large Subtle Watermark */}
        <div className="footer-watermark-wrapper">
          <img
            src={watermarkImg}
            alt="Zexta Watermark"
            className="footer-watermark-img"
          />
        </div>
      </div>
    </footer>
  )
}
