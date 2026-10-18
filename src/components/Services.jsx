import React, { useState } from 'react'
import SectionBadge from './SectionBadge'
import envelopeImg from '../assets/generated/cold_email_envelope.png'
import { Sparkles, Calendar, TrendingUp, FileText, CheckCircle2 } from 'lucide-react'
import './Services.css'

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-left">
          <SectionBadge text="Our Services" />
          <h2 className="section-title">
            Everything you need to generate
            <br />
            leads, all under one roof.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Cold Email Campaign (Tall Left) */}
          <div className="bento-card card-cold-email card-base">
            <div className="bento-card-content">
              <h3 className="bento-title">Cold Email Campaign</h3>
              <p className="bento-desc">
                We set up your domains, mailboxes, SPF, DKIM, DMARC, and warmup, then write and run campaigns that land in the inbox and get replies.
              </p>
            </div>
            <div className="envelope-visual-container">
              <div className="envelope-relative-wrapper">
                <img
                  src={envelopeImg}
                  alt="Cold Email Outreach Envelope Visual"
                  className="envelope-img"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Lead Generation and List Building (Top Right) */}
          <div className="bento-card card-lead-gen card-base">
            <div className="bento-card-content">
              <h3 className="bento-title">Lead Generation and List Building</h3>
              <p className="bento-desc">
                Targeted, verified B2B lead lists built with Apollo, Clay, and LinkedIn, matched to your ideal customer profile
              </p>
            </div>
            
            {/* Visual: Mini Chart & Integrations */}
            <div className="leadgen-visual-wrap">
              {/* Mini Chart */}
              <div className="mini-chart-card">
                <div className="mini-chart-header">
                  <span className="mini-chart-amount">$69,897</span>
                  <span className="mini-chart-pill">2026 ▾</span>
                </div>
                <div className="mini-chart-bars">
                  <div className="bar-col"><span style={{ height: '70%' }} /><label>Jan</label></div>
                  <div className="bar-col"><span style={{ height: '45%' }} /><label>Feb</label></div>
                  <div className="bar-col"><span style={{ height: '35%' }} /><label>Mar</label></div>
                  <div className="bar-col"><span style={{ height: '55%' }} /><label>Apr</label></div>
                  <div className="bar-col"><span style={{ height: '75%' }} /><label>May</label></div>
                  <div className="bar-col"><span style={{ height: '50%' }} /><label>Jun</label></div>
                </div>
              </div>

              {/* Connecting curve */}
              <svg className="connecting-curve" viewBox="0 0 100 80" fill="none">
                <path d="M 0 40 C 50 40, 50 20, 100 20" stroke="#cbd5e1" strokeWidth="1.5" />
                <path d="M 0 40 C 50 40, 50 65, 100 65" stroke="#cbd5e1" strokeWidth="1.5" />
              </svg>

              {/* Tool Progress Cards */}
              <div className="tools-progress-stack">
                <div className="tool-row">
                  <div className="tool-logo-icon clay-bg">
                    <span className="tool-dot" />
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Clay</span>
                      <span className="tool-growth">↑ 12%</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>

                <div className="tool-row">
                  <div className="tool-logo-icon modash-bg">
                    <span className="modash-m">mº</span>
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Modash</span>
                      <span className="tool-growth">↑ 12%</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>

                <div className="tool-row">
                  <div className="tool-logo-icon apollo-bg">
                    <span className="apollo-sun">✺</span>
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Apollo</span>
                      <span className="tool-growth">↑ 12%</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Meta and Google Ads (Middle Right) */}
          <div className="bento-card card-meta-ads card-base">
            <div className="bento-card-content">
              <h3 className="bento-title">Meta and Google Ads</h3>
              <p className="bento-desc">
                Ad campaigns on Facebook and Instagram built to capture leads at a cost that makes sense for your business
              </p>
            </div>

            {/* Visual: Ad branching diagram */}
            <div className="ads-diagram-visual">
              <div className="ads-top-row">
                <div className="ad-platform-badge meta-brand">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0081fb">
                    <path d="M16.96 4.02c-1.89 0-3.55.94-4.96 2.53-1.41-1.59-3.07-2.53-4.96-2.53-3.69 0-6.04 2.87-6.04 6.98 0 4.27 2.65 7.98 6.55 7.98 2.06 0 3.73-1.04 5.05-2.61 1.32 1.57 2.99 2.61 5.05 2.61 3.9 0 6.55-3.71 6.55-7.98 0-4.11-2.35-6.98-6.04-6.98z" />
                  </svg>
                </div>
                
                <div className="leads-capture-node">
                  <Sparkles size={14} className="sparkle-icon" />
                  <span>Leads Captures</span>
                </div>

                <div className="ad-platform-badge google-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <polygon points="12,2 2,22 8,22 15,7" fill="#4285F4" />
                    <polygon points="12,2 22,22 16,22 9,7" fill="#FBBC05" />
                    <circle cx="5" cy="19" r="3" fill="#34A853" />
                  </svg>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="ads-connect-lines">
                <div className="line-down left" />
                <div className="line-down center" />
                <div className="line-down right" />
              </div>

              {/* Bottom results cards */}
              <div className="ads-bottom-results">
                <div className="result-icon-box">
                  <FileText size={18} color="#153c33" />
                </div>
                <div className="result-icon-box growth-box">
                  <TrendingUp size={18} color="#10b981" />
                </div>
                <div className="result-icon-box calendar-box">
                  <Calendar size={18} color="#8b5cf6" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Marketing Automation (Bottom Left) */}
          <div className="bento-card card-automation card-base">
            <div className="bento-card-content">
              <h3 className="bento-title">Marketing Automation</h3>
              <p className="bento-desc">
                GoHighLevel, CRM workflows, and email automation that follow up with every lead so nothing slips through the cracks.
              </p>
            </div>

            <div className="automation-preview-split">
              {/* Left inner card: GHL */}
              <div className="ghl-box">
                <div className="ghl-header">
                  <div className="ghl-icon">
                    <span className="ghl-bar" />
                    <span className="ghl-bar" />
                  </div>
                  <div>
                    <div className="ghl-name">GoHighLevel</div>
                    <div className="ghl-sub">CRM and Automation</div>
                  </div>
                </div>
                <div className="ghl-items">
                  <div className="ghl-item">
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>Pipelines</span>
                  </div>
                  <div className="ghl-item">
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>Workflows</span>
                  </div>
                </div>
              </div>

              {/* Right inner card: Integrations */}
              <div className="integrations-box">
                <div className="integrations-header">
                  <div className="int-title">Integrations</div>
                  <div className="int-desc">Connect your CRM, inbox, and calendar in clicks</div>
                </div>
                <div className="int-tabs">
                  <button
                    className={`int-tab ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All apps
                  </button>
                  <button
                    className={`int-tab ${activeTab === 'connected' ? 'active' : ''}`}
                    onClick={() => setActiveTab('connected')}
                  >
                    Connected
                  </button>
                  <button
                    className={`int-tab ${activeTab === 'disconnected' ? 'active' : ''}`}
                    onClick={() => setActiveTab('disconnected')}
                  >
                    Disconnected
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Influencer Sourcing and Outreach (Bottom Right) */}
          <div className="bento-card card-influencer card-base">
            <div className="bento-card-content">
              <h3 className="bento-title">Influencer Sourcing and Outreach</h3>
              <p className="bento-desc">
                We find creators who match your brand, collect their contact details, and run outreach that gets them on board.
              </p>
            </div>

            <div className="influencer-visual-wrap">
              {/* Creator badge floating */}
              <div className="creator-profile-float">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces"
                  alt="Verified creator"
                  className="creator-avatar"
                />
              </div>

              {/* Search tag */}
              <div className="float-badge search-badge">
                <span className="badge-circle-icon">🔍</span>
                <span>Creator Search</span>
              </div>

              {/* Collabs tag */}
              <div className="float-badge collabs-badge">
                <span className="badge-circle-icon">🤝</span>
                <span>Collabs</span>
              </div>

              {/* Trending Growth Line SVG */}
              <svg className="influencer-trend-line" viewBox="0 0 300 100" fill="none">
                <defs>
                  <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 90 Q 60 85, 120 70 T 200 35 T 300 15 L 300 100 L 0 100 Z"
                  fill="url(#trendGrad)"
                />
                <path
                  d="M 0 90 Q 60 85, 120 70 T 200 35 T 300 15"
                  stroke="#153c33"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="70" r="4" fill="#ffffff" stroke="#153c33" strokeWidth="2" />
                <circle cx="200" cy="35" r="4" fill="#ffffff" stroke="#153c33" strokeWidth="2" />
                <circle cx="300" cy="15" r="4" fill="#153c33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
