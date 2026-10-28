import React, { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import ZextaLogo from './ZextaLogo'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar-container">
      <div className="navbar-pill">
        {/* Brand */}
        <a href="#" className="nav-brand">
          <ZextaLogo variant="dark" size={26} />
        </a>

        {/* Desktop Links */}
        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#services" className="nav-link services-link">
            Services

          </a>
        </nav>

        {/* CTA Button */}
        <a href="#book-call" className="nav-cta-btn">
          <span>Book a Call</span>
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>
            Services <span className="nav-badge">New</span>
          </a>
          <a href="#book-call" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
            Book a Call <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
