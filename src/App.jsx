import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroShowcase from './components/HeroShowcase'
import PartnerLogos from './components/PartnerLogos'
import ImpactStats from './components/ImpactStats'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import ProcessTimeline from './components/ProcessTimeline'
import UpworkServices from './components/UpworkServices'
import FaqSection from './components/FaqSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="zexta-app">
      {/* Global Fixed Navbar across entire page scroll */}
      <Navbar />

      {/* Master Hero Wrap containing Hero, Showcase cards & Partners with unified background */}
      <div className="hero-master-wrap">
        <Hero />
        <HeroShowcase />
        <PartnerLogos />
      </div>

      <main>
        {/* 5. Impact Metrics */}
        <ImpactStats />

        {/* 6. Services Bento Grid */}
        <Services />

        {/* 7. Case Studies / Our Work */}
        <CaseStudies />

        {/* 8. Testimonials & Social Proof */}
        <Testimonials />

        {/* 9. Outreach Process Timeline */}
        <ProcessTimeline />

        {/* 10. Upwork Profiles / Services */}
        <UpworkServices />

        {/* 11. FAQ & Support Card */}
        <FaqSection />

        {/* 12. Bottom CTA Banner */}
        <CtaBanner />
      </main>

      {/* 13. Footer & Giant Watermark */}
      <Footer />
    </div>
  )
}
