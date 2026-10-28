import React, { useState } from 'react'
import SectionBadge from './SectionBadge'
import envelopeImg from '../assets/generated/cold_email_envelope.png'
import modashLogo from '../assets/logos/modash_logo_transparent.png'
import clayLogo from '../assets/logos/clay_logo_transparent.png'
import apolloLogo from '../assets/logos/apollo_logo.png'
import { Sparkles, Calendar, TrendingUp, FileText, CheckCircle2, Code2, Globe, Laptop, Zap } from 'lucide-react'
import './Services.css'

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
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
              {/* Modern Enriched Leads Chart */}
              <div className="mini-chart-card">
                <div className="mini-chart-header">
                  <div className="mini-chart-title-wrap">
                    <span className="mini-chart-eyebrow">ENRICHED PIPELINE</span>
                    <span className="mini-chart-amount">$84,250</span>
                  </div>

                </div>

                <div className="mini-chart-visual">
                  {/* Subtle SVG Trend Curve Background */}
                  <svg className="mini-chart-trend-svg" viewBox="0 0 160 55" fill="none">
                    <defs>
                      <linearGradient id="chartCurveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Dotted Guide Lines */}
                    <line x1="0" y1="14" x2="160" y2="14" stroke="#e6f0eb" strokeDasharray="3 3" />
                    <line x1="0" y1="32" x2="160" y2="32" stroke="#e6f0eb" strokeDasharray="3 3" />

                    {/* Area under curve */}
                    <path
                      d="M 12 40 Q 38 34, 64 36 T 116 18 T 148 6 L 148 55 L 12 55 Z"
                      fill="url(#chartCurveGrad)"
                    />
                    {/* Trend Line */}
                    <path
                      d="M 12 40 Q 38 34, 64 36 T 116 18 T 148 6"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Peak Point Pulse */}
                    <circle cx="148" cy="6" r="3.5" fill="#10b981" />
                    <circle cx="148" cy="6" r="7" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.5" className="chart-pulse-ring" />
                  </svg>

                  {/* Dynamic Gradient Bars */}
                  <div className="mini-chart-bars">
                    <div className="bar-col">
                      <div className="bar-track">
                        <span style={{ height: '42%' }} />
                      </div>
                      <label>Jan</label>
                    </div>
                    <div className="bar-col">
                      <div className="bar-track">
                        <span style={{ height: '58%' }} />
                      </div>
                      <label>Feb</label>
                    </div>
                    <div className="bar-col">
                      <div className="bar-track">
                        <span style={{ height: '48%' }} />
                      </div>
                      <label>Mar</label>
                    </div>
                    <div className="bar-col">
                      <div className="bar-track">
                        <span style={{ height: '70%' }} />
                      </div>
                      <label>Apr</label>
                    </div>
                    <div className="bar-col">
                      <div className="bar-track">
                        <span style={{ height: '82%' }} />
                      </div>
                      <label>May</label>
                    </div>
                    <div className="bar-col active-month">
                      <div className="bar-peak-tag">$84k</div>
                      <div className="bar-track">
                        <span style={{ height: '98%' }} className="bar-active-fill" />
                      </div>
                      <label>Jun</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Curves to all 3 tools with flowing animated nodes */}
              <div className="connecting-hub-wrapper">
                <svg className="connecting-curve-svg" viewBox="0 0 90 150" fill="none">
                  {/* Branch 1 to Modash (Top - Pink) */}
                  <path
                    d="M 4 75 C 44 75, 46 25, 86 25"
                    stroke="#d4ded8"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 4 75 C 44 75, 46 25, 86 25"
                    stroke="#ec4899"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 14"
                    className="animated-flow-beam beam-modash"
                  />

                  {/* Branch 2 to Clay (Middle - Cyan) */}
                  <path
                    d="M 4 75 C 44 75, 46 75, 86 75"
                    stroke="#d4ded8"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 4 75 C 44 75, 46 75, 86 75"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 14"
                    className="animated-flow-beam beam-clay"
                  />

                  {/* Branch 3 to Apollo (Bottom - Yellow) */}
                  <path
                    d="M 4 75 C 44 75, 46 125, 86 125"
                    stroke="#d4ded8"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 4 75 C 44 75, 46 125, 86 125"
                    stroke="#eab308"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 14"
                    className="animated-flow-beam beam-apollo"
                  />

                  {/* Central Emitter Node / Origin Pulse */}
                  <circle cx="4" cy="75" r="4" fill="#10b981" />
                  <circle cx="4" cy="75" r="8" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.4" className="chart-pulse-ring" />

                  {/* Animated Traveling Data Nodes along the 3 paths matching their respective colors */}
                  {/* Dot 1 to Modash: Pink */}
                  <circle r="4" fill="#ec4899">
                    <animateMotion dur="2.4s" repeatCount="indefinite" path="M 4 75 C 44 75, 46 25, 86 25" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                  </circle>
                  {/* Dot 2 to Clay: Cyan */}
                  <circle r="4" fill="#0284c7">
                    <animateMotion dur="2.4s" begin="0.8s" repeatCount="indefinite" path="M 4 75 C 44 75, 46 75, 86 75" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                  </circle>
                  {/* Dot 3 to Apollo: Yellow */}
                  <circle r="4" fill="#eab308">
                    <animateMotion dur="2.4s" begin="1.6s" repeatCount="indefinite" path="M 4 75 C 44 75, 46 125, 86 125" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                  </circle>

                  {/* Target Terminal Dots matching tool colors */}
                  <circle cx="86" cy="25" r="3.5" fill="#ec4899" />
                  <circle cx="86" cy="75" r="3.5" fill="#0284c7" />
                  <circle cx="86" cy="125" r="3.5" fill="#eab308" />
                </svg>
              </div>

              {/* Tool Progress Cards: 1. Modash, 2. Clay, 3. Apollo */}
              <div className="tools-progress-stack">
                {/* 1st: Modash */}
                <div className="tool-row tool-modash">
                  <div className="tool-logo-icon modash-brand-bg">
                    <img src={modashLogo} alt="Modash logo" className="tool-logo-img" />
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Modash</span>
                      <span className="tool-growth modash-tag">↑ 24% Creators</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar modash-bar" style={{ width: '76%' }} />
                    </div>
                  </div>
                </div>

                {/* 2nd: Clay */}
                <div className="tool-row tool-clay">
                  <div className="tool-logo-icon clay-brand-bg">
                    <img src={clayLogo} alt="Clay logo" className="tool-logo-img" />
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Clay</span>
                      <span className="tool-growth clay-tag">↑ 88% Enriched</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar clay-bar" style={{ width: '88%' }} />
                    </div>
                  </div>
                </div>

                {/* 3rd: Apollo */}
                <div className="tool-row tool-apollo">
                  <div className="tool-logo-icon apollo-brand-bg">
                    <img src={apolloLogo} alt="Apollo logo" className="tool-logo-img apollo-img-crop" />
                  </div>
                  <div className="tool-info">
                    <div className="tool-meta">
                      <span className="tool-name">Apollo.io</span>
                      <span className="tool-growth apollo-tag">↑ 98% Verified</span>
                    </div>
                    <div className="tool-progress-track">
                      <div className="tool-progress-bar apollo-bar" style={{ width: '94%' }} />
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
                High-converting campaigns on Meta and Google Ads built to capture qualified leads and route them directly into your sales pipeline.
              </p>
            </div>

            {/* Visual: Lead Capture Flow Architecture matching uploaded diagram */}
            <div className="ads-diagram-visual">
              <svg
                viewBox="0 0 540 290"
                className="ads-diagram-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft Drop Shadow for diagram cards */}
                  <filter id="adsCardShadow" x="-30%" y="-30%" width="160%" height="170%">
                    <feDropShadow dx="0" dy="7" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.06" />
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.04" />
                  </filter>

                  {/* Deep Green Glow for Lead Capture pill */}
                  <filter id="leadPillShadow" x="-30%" y="-40%" width="160%" height="190%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#153c33" floodOpacity="0.32" />
                  </filter>
                  <filter id="leadPillHoverShadow" x="-30%" y="-40%" width="160%" height="190%">
                    <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#10b981" floodOpacity="0.45" />
                  </filter>

                  {/* Meta Logo Gradient */}
                  <linearGradient id="metaOfficialGradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0064E0" />
                    <stop offset="0.5" stopColor="#0081FB" />
                    <stop offset="1" stopColor="#0064E0" />
                  </linearGradient>

                  {/* Particle Glow Filters */}
                  <filter id="glowMeta" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glowGoogle" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glowGreen" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glowOrange" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glowPurple" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* ================= BACKGROUND CONNECTING LINES ================= */}
                {/* 1. Meta Ads to Lead Capture Base Path */}
                <path
                  d="M 104 48 H 146 A 14 14 0 0 1 160 62 V 112 A 14 14 0 0 0 174 126 H 188"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Meta Flowing Dashed Energy Beam */}
                <path
                  d="M 104 48 H 146 A 14 14 0 0 1 160 62 V 112 A 14 14 0 0 0 174 126 H 188"
                  stroke="#0081fb"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  className="ads-flow-beam"
                  opacity="0.8"
                />

                {/* 2. Google Ads to Lead Capture Base Path */}
                <path
                  d="M 436 48 H 394 A 14 14 0 0 0 380 62 V 112 A 14 14 0 0 1 366 126 H 352"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Google Flowing Dashed Energy Beam */}
                <path
                  d="M 436 48 H 394 A 14 14 0 0 0 380 62 V 112 A 14 14 0 0 1 366 126 H 352"
                  stroke="#fbbc04"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  className="ads-flow-beam beam-reverse"
                  opacity="0.8"
                />

                {/* 3. Lead Capture to Bottom Row 3-way Tree Branches */}
                {/* Center Trunk and Center Branch */}
                <path
                  d="M 270 148 V 208"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 270 148 V 208"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  className="ads-flow-beam"
                  opacity="0.75"
                />

                {/* Left Branch to Form/Landing Page Card */}
                <path
                  d="M 270 176 H 147 A 12 12 0 0 0 135 188 V 208"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 270 176 H 147 A 12 12 0 0 0 135 188 V 208"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  className="ads-flow-beam"
                  opacity="0.75"
                />

                {/* Right Branch to Calendar Booking Card */}
                <path
                  d="M 270 176 H 393 A 12 12 0 0 1 405 188 V 208"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 270 176 H 393 A 12 12 0 0 1 405 188 V 208"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 14"
                  className="ads-flow-beam"
                  opacity="0.75"
                />

                {/* Small Connection Anchor Port Dots */}
                <circle cx="104" cy="48" r="3" fill="#cbd5e1" />
                <circle cx="436" cy="48" r="3" fill="#cbd5e1" />
                <circle cx="188" cy="126" r="3.5" fill="#94a3b8" />
                <circle cx="352" cy="126" r="3.5" fill="#94a3b8" />
                <circle cx="270" cy="148" r="3.5" fill="#94a3b8" />
                <circle cx="135" cy="208" r="3" fill="#cbd5e1" />
                <circle cx="270" cy="208" r="3" fill="#cbd5e1" />
                <circle cx="405" cy="208" r="3" fill="#cbd5e1" />

                {/* ================= ANIMATED TRAVELING PARTICLES ================= */}
                {/* 1. Meta Ads Traffic Particle -> Into Lead Capture */}
                <circle r="4" fill="#0081fb" filter="url(#glowMeta)">
                  <animateMotion
                    dur="2.6s"
                    repeatCount="indefinite"
                    path="M 104 48 H 146 A 14 14 0 0 1 160 62 V 112 A 14 14 0 0 0 174 126 H 188"
                    keyPoints="0; 1; 1; 1"
                    keyTimes="0; 0.5; 0.51; 1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 1; 0; 0; 1"
                    keyTimes="0; 0.48; 0.5; 0.98; 1"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 2. Google Ads Traffic Particle -> Into Lead Capture */}
                <circle r="4" fill="#fbbc04" filter="url(#glowGoogle)">
                  <animateMotion
                    dur="2.6s"
                    begin="0.3s"
                    repeatCount="indefinite"
                    path="M 436 48 H 394 A 14 14 0 0 0 380 62 V 112 A 14 14 0 0 1 366 126 H 352"
                    keyPoints="0; 1; 1; 1"
                    keyTimes="0; 0.5; 0.51; 1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 1; 0; 0; 1"
                    keyTimes="0; 0.48; 0.5; 0.98; 1"
                    dur="2.6s"
                    begin="0.3s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 3. Converted Leads from Lead Capture -> Down to Form / Landing Page (Left) */}
                <circle r="3.5" fill="#10b981" filter="url(#glowGreen)">
                  <animateMotion
                    dur="2.6s"
                    begin="1.2s"
                    repeatCount="indefinite"
                    path="M 270 148 V 176 H 147 A 12 12 0 0 0 135 188 V 208"
                    keyPoints="0; 1; 1; 1"
                    keyTimes="0; 0.5; 0.51; 1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 1; 0; 0; 1"
                    keyTimes="0; 0.48; 0.5; 0.98; 1"
                    dur="2.6s"
                    begin="1.2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 4. Converted Leads from Lead Capture -> Down to CRM / Contacts (Center) */}
                <circle r="3.5" fill="#ea580c" filter="url(#glowOrange)">
                  <animateMotion
                    dur="2.6s"
                    begin="1.45s"
                    repeatCount="indefinite"
                    path="M 270 148 V 208"
                    keyPoints="0; 1; 1; 1"
                    keyTimes="0; 0.5; 0.51; 1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 1; 0; 0; 1"
                    keyTimes="0; 0.48; 0.5; 0.98; 1"
                    dur="2.6s"
                    begin="1.45s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 5. Converted Leads from Lead Capture -> Down to Calendar Booking (Right) */}
                <circle r="3.5" fill="#7c3aed" filter="url(#glowPurple)">
                  <animateMotion
                    dur="2.6s"
                    begin="1.7s"
                    repeatCount="indefinite"
                    path="M 270 148 V 176 H 393 A 12 12 0 0 1 405 188 V 208"
                    keyPoints="0; 1; 1; 1"
                    keyTimes="0; 0.5; 0.51; 1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 1; 0; 0; 1"
                    keyTimes="0; 0.48; 0.5; 0.98; 1"
                    dur="2.6s"
                    begin="1.7s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* ================= NODES / CARDS ================= */}
                {/* Node 1: Top-Left Meta Ads Card */}
                <g className="diagram-card-node">
                  <rect
                    x="36"
                    y="14"
                    width="68"
                    height="68"
                    rx="16"
                    fill="#ffffff"
                    stroke="#f1f5f9"
                    strokeWidth="1.2"
                    filter="url(#adsCardShadow)"
                  />
                  {/* Proper Meta Gradient Loop Logo */}
                  <g transform="translate(54, 32)">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#metaOfficialGradient)">
                      <path d="M16.96 4.02c-1.89 0-3.55.94-4.96 2.53-1.41-1.59-3.07-2.53-4.96-2.53-3.69 0-6.04 2.87-6.04 6.98 0 4.27 2.65 7.98 6.55 7.98 2.06 0 3.73-1.04 5.05-2.61 1.32 1.57 2.99 2.61 5.05 2.61 3.9 0 6.55-3.71 6.55-7.98 0-4.11-2.35-6.98-6.04-6.98zm-9.3 12.8c-2.45 0-4.25-2.52-4.25-5.82 0-3.07 1.62-5.07 3.86-5.07 1.74 0 3.2 1.13 4.24 3.03-.98 2.05-2.32 7.86-3.85 7.86zm9.88 0c-1.53 0-2.87-5.81-3.85-7.86 1.04-1.9 2.5-3.03 4.24-3.03 2.24 0 3.86 2 3.86 5.07 0 3.3-1.8 5.82-4.25 5.82z" />
                    </svg>
                  </g>
                  {/* Label Meta Ads */}
                  <text
                    x="70"
                    y="101"
                    textAnchor="middle"
                    fill="#1e293b"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    Meta Ads
                  </text>
                </g>

                {/* Node 2: Top-Right Google Ads Card */}
                <g className="diagram-card-node">
                  <rect
                    x="436"
                    y="14"
                    width="68"
                    height="68"
                    rx="16"
                    fill="#ffffff"
                    stroke="#f1f5f9"
                    strokeWidth="1.2"
                    filter="url(#adsCardShadow)"
                  />
                  {/* Proper Official Google Ads Logo (Yellow pill, Blue bar, Green dot) */}
                  <g transform="translate(455, 33)">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z" fill="#34A853" />
                      <path d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z" fill="#FBBC04" />
                      <path d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" fill="#4285F4" />
                    </svg>
                  </g>
                  {/* Label Google Ads */}
                  <text
                    x="470"
                    y="101"
                    textAnchor="middle"
                    fill="#1e293b"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    Google Ads
                  </text>
                </g>

                {/* Node 3: Center Lead Capture Pill */}
                <g className="lead-capture-node-pill">
                  <rect
                    x="188"
                    y="104"
                    width="164"
                    height="44"
                    rx="22"
                    fill="#153c33"
                    stroke="#1e5447"
                    strokeWidth="1.5"
                    filter="url(#leadPillShadow)"
                  />
                  {/* Star Sparkle Icon */}
                  <g className="pill-sparkle-icon" transform="translate(210, 118)">
                    <path
                      d="M8 0L9.5 5.8L15.3 7.3L9.5 8.8L8 14.6L6.5 8.8L0.7 7.3L6.5 5.8L8 0Z"
                      fill="#ffffff"
                    />
                    <circle cx="14" cy="2" r="1.5" fill="#a7f3d0" />
                  </g>
                  {/* Text Label */}
                  <text
                    x="280"
                    y="131"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="14.5"
                    fontWeight="700"
                    fontFamily="inherit"
                    letterSpacing="-0.01em"
                  >
                    Lead Capture
                  </text>
                </g>

                {/* Node 4: Bottom-Left Form / Landing Page Card */}
                <g className="diagram-card-node">
                  <rect
                    x="103"
                    y="208"
                    width="64"
                    height="64"
                    rx="16"
                    fill="#ffffff"
                    stroke="#f1f5f9"
                    strokeWidth="1.2"
                    filter="url(#adsCardShadow)"
                  />
                  {/* Dark Teal/Green Form Card Icon */}
                  <g transform="translate(121, 227)" stroke="#153c33" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <rect x="0" y="0" width="28" height="24" rx="4" />
                    <line x1="0" y1="8" x2="28" y2="8" />
                    <line x1="5" y1="14" x2="18" y2="14" />
                    <line x1="5" y1="19" x2="12" y2="19" />
                  </g>
                </g>

                {/* Node 5: Bottom-Center CRM / Contacts Card */}
                <g className="diagram-card-node">
                  <rect
                    x="238"
                    y="208"
                    width="64"
                    height="64"
                    rx="16"
                    fill="#ffffff"
                    stroke="#f1f5f9"
                    strokeWidth="1.2"
                    filter="url(#adsCardShadow)"
                  />
                  {/* Warm Orange Contacts Icon */}
                  <g transform="translate(257, 227)" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <circle cx="10" cy="7" r="4.5" />
                    <path d="M1.5 24c0-4.5 3.8-7.5 8.5-7.5s8.5 3 8.5 7.5" />
                    <path d="M18 3a4 4 0 0 1 0 6.5" />
                    <path d="M22.5 23c0-3.5-2.5-5.8-5.5-6.5" />
                  </g>
                </g>

                {/* Node 6: Bottom-Right Calendar Booking Card */}
                <g className="diagram-card-node">
                  <rect
                    x="373"
                    y="208"
                    width="64"
                    height="64"
                    rx="16"
                    fill="#ffffff"
                    stroke="#f1f5f9"
                    strokeWidth="1.2"
                    filter="url(#adsCardShadow)"
                  />
                  {/* Purple Calendar Booking Checkmark Icon */}
                  <g transform="translate(391, 227)" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <rect x="0" y="3" width="28" height="23" rx="4" />
                    <line x1="7" y1="0" x2="7" y2="5" />
                    <line x1="21" y1="0" x2="21" y2="5" />
                    <line x1="0" y1="9" x2="28" y2="9" />
                    <path d="M8 17l4 4 8-8" />
                  </g>
                </g>
              </svg>
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

          {/* Card 6: Web & Landing Page Development (Flagship Full-Width Card) */}
          <div className="bento-card card-web-dev card-base">
            <div className="webdev-card-split">
              {/* Left Column: Details & Tech Stack */}
              <div className="webdev-info-col">
                <div className="bento-card-content">
                  <div className="webdev-pill-badge">
                    <span className="webdev-dot" />
                    <span>High-Converting Websites & Funnels</span>
                  </div>
                  <h3 className="bento-title">Web & Landing Page Development</h3>
                  <p className="bento-desc">
                    Modern, lightning-fast websites, custom web apps, and conversion-optimized landing pages built with React, Next.js, Webflow, and Shopify that turn traffic into booked meetings.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="webdev-highlights-grid">
                  <div className="webdev-highlight-item">
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>Sub-second load times (&lt;1.1s, 99+ PageSpeed score)</span>
                  </div>
                  <div className="webdev-highlight-item">
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>Pixel-perfect responsive across mobile, tablet & desktop</span>
                  </div>
                  <div className="webdev-highlight-item">
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>CRO funnel architecture & lead capture forms</span>
                  </div>
                  <div className="webdev-highlight-item">
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>Built-in technical SEO, OpenGraph & analytics tracking</span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="webdev-tech-tags">
                  <span className="tech-badge react-badge">React</span>
                  <span className="tech-badge nextjs-badge">Next.js</span>
                  <span className="tech-badge webflow-badge">Webflow</span>
                  <span className="tech-badge shopify-badge">Shopify</span>
                  <span className="tech-badge tailwind-badge">Tailwind CSS</span>
                  <span className="tech-badge ts-badge">TypeScript</span>
                  <span className="tech-badge wp-badge">WordPress</span>
                </div>
              </div>

              {/* Right Column: Interactive Browser Window & Metrics */}
              <div className="webdev-visual-col">
                <div className="webdev-browser-mockup">
                  {/* Browser Bar */}
                  <div className="mockup-browser-header">
                    <div className="mockup-traffic-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="mockup-address-bar">
                      <span className="lock-icon">🔒</span>
                      <span>https://zexta.io/high-converting-funnel</span>
                    </div>
                  </div>

                  {/* Browser Inner Content */}
                  <div className="mockup-browser-body">
                    {/* Top Stats Bar */}
                    <div className="mockup-metrics-row">
                      <div className="mockup-metric-card">
                        <span className="metric-score">99</span>
                        <span className="metric-label">⚡ Performance</span>
                      </div>
                      <div className="mockup-metric-card">
                        <span className="metric-score">100</span>
                        <span className="metric-label">🎯 Best Practices</span>
                      </div>
                      <div className="mockup-metric-card">
                        <span className="metric-score">+165%</span>
                        <span className="metric-label">📈 Conversion</span>
                      </div>
                    </div>

                    {/* Code Snippet Box */}
                    <div className="mockup-code-preview">
                      <div className="code-header">
                        <span className="code-file-name">ConversionLandingPage.tsx</span>
                        <span className="code-lang">TypeScript</span>
                      </div>
                      <pre className="code-lines">
                        <code>
                          <span className="code-keyword">export default</span> <span className="code-func">function</span> <span className="code-comp">HighConvertingPage</span>() &#123;{'\n'}
                          {'  '}<span className="code-keyword">return</span> (<br />
                          {'    '}&lt;<span className="code-tag">ConversionEngine</span> speed=<span className="code-str">"&lt;1.1s"</span> leads=<span className="code-str">"predictable"</span>&gt;<br />
                          {'      '}&lt;<span className="code-tag">HeroLeadCapture</span> cta=<span className="code-str">"Book 15-Min Strategy Call"</span> /&gt;<br />
                          {'    '}&lt;/<span className="code-tag">ConversionEngine</span>&gt;<br />
                          {'  '})<br />
                          &#125;
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
