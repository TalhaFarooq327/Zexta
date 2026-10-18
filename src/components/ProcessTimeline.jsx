import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionBadge from './SectionBadge'
import './ProcessTimeline.css'

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We learn your offer, your ideal customer, and your goals, then plan the right channels and targeting.'
  },
  {
    step: '02',
    title: 'List Building and Research',
    description: 'We build and verify a targeted lead list so every message reaches a real decision maker.'
  },
  {
    step: '03',
    title: 'Setup and Infrastructure',
    description: 'We configure domains, mailboxes, warmup, ad accounts, and automations so everything runs smoothly.'
  },
  {
    step: '04',
    title: 'Launch and Outreach',
    description: 'We write the copy, launch the campaigns, and start booking conversations with your prospects.'
  },
  {
    step: '05',
    title: 'Report and Optimize',
    description: 'We track opens, replies, and meetings every week and keep improving what works.'
  }
]

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-split-layout">
          {/* Left Column: Heading */}
          <div className="process-left-sticky">
            <SectionBadge text="Our Process" />
            <h2 className="section-title">
              A proven and simple
              <br />
              outreach process.
            </h2>
            <p className="section-desc">
              See how we take you from zero to a working lead generation system.
            </p>
          </div>

          {/* Right Column: Timeline Steps */}
          <div className="process-right-timeline">
            {processSteps.map((item, idx) => (
              <div
                key={item.step}
                className={`timeline-step-row ${activeStep === idx ? 'step-active' : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Numbered node circle and connector line */}
                <div className="timeline-marker-col">
                  <div className="step-circle">{item.step}</div>
                  {idx < processSteps.length - 1 && <div className="step-connector-line" />}
                </div>

                {/* Content Box */}
                <div className="step-content-box">
                  <div className="step-header">
                    <h3 className="step-title">{item.title}</h3>
                    <ArrowUpRight size={18} className="step-arrow" />
                  </div>
                  <p className="step-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
