import React, { useState } from 'react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import SectionBadge from './SectionBadge'
import './FaqSection.css'

const faqItems = [
  {
    id: 1,
    question: 'What services does your agency offer?',
    answer: 'We offer cold email outreach, lead generation, list building, Meta and Facebook ads, marketing automation, and influencer outreach.'
  },
  {
    id: 2,
    question: 'How long does it take to see results?',
    answer: 'Typically, clients see initial responses and qualified meetings within the first 14 to 21 days once warmups are complete and targeted sequences are launched.'
  },
  {
    id: 3,
    question: 'What is your pricing model?',
    answer: 'We offer straightforward monthly retainers tailored to your pipeline goals, with no hidden setup fees. All infrastructure and lead data remain 100% yours.'
  },
  {
    id: 4,
    question: 'Will my emails land in spam?',
    answer: 'Never. We deploy dedicated secondary sending domains, authenticate with SPF, DKIM, DMARC, and custom tracking domains, followed by a thorough 3-week automated warmup.'
  },
  {
    id: 5,
    question: 'Do you provide the leads?',
    answer: 'Yes! We build highly customized, double-verified lead lists matched to your Ideal Customer Profile (ICP) using Clay, Apollo, LinkedIn, and proprietary scraping workflows.'
  },
  {
    id: 6,
    question: 'Do I need to sign a long contract?',
    answer: 'No long lock-ins. We recommend a 90-day launch window to reach peak predictable cadence, after which agreements transition into rolling month-to-month terms.'
  },
  {
    id: 7,
    question: 'Which tools do you use?',
    answer: 'We rely on industry standard tools including Clay, GoHighLevel, Meta Ads, Instantly, Smartlead, Apollo, Klaviyo, and Zapier/Make for end-to-end automation.'
  }
]

export default function FaqSection() {
  const [openId, setOpenId] = useState(1) // first item open by default matching screenshot

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-split-layout">
          {/* Left Column: Heading & Support Box */}
          <div className="faq-left-column">
            <SectionBadge text="FAQ" />
            <h2 className="section-title">
              Have questions,
              <br />
              We got answers.
            </h2>
            <p className="section-desc">
              Everything you need to know before we start working together.
            </p>

            {/* Help Card */}
            <div className="faq-support-card card-base">
              <h4 className="support-card-title">Can't find your answer?</h4>
              <p className="support-card-text">
                Get in touch with our support team, they are friendly.
              </p>
              <a href="#contact" className="btn btn-secondary support-card-btn">
                <span>Contact Us</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-right-column">
            <div className="accordion-list">
              {faqItems.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div key={item.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="accordion-trigger"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="accordion-question">{item.question}</span>
                      <span className="accordion-icon">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
