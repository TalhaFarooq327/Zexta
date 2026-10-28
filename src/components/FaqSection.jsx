import React, { useState } from 'react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import SectionBadge from './SectionBadge'
import './FaqSection.css'

const faqItems = [
  {
    id: 1,
    question: 'What services does your agency offer?',
    answer: 'We provide end-to-end digital growth: custom Web Development & high-converting landing pages (React, Next.js, Webflow, Shopify), cold email outreach systems, targeted B2B lead lists, Meta & Google ads, and marketing automation.'
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
    question: 'Do you design and develop custom websites and landing pages?',
    answer: 'Yes! We design and engineer ultra-fast, high-converting websites and landing pages using React, Next.js, Webflow, Shopify, and Tailwind CSS. Every page is built with mobile responsiveness, SEO optimization, and conversion-focused UX architecture.'
  },
  {
    id: 5,
    question: 'Will my emails land in spam?',
    answer: 'Never. We deploy dedicated secondary sending domains, authenticate with SPF, DKIM, DMARC, and custom tracking domains, followed by a thorough 3-week automated warmup.'
  },
  {
    id: 6,
    question: 'Do you provide the leads?',
    answer: 'Yes! We build highly customized, double-verified lead lists matched to your Ideal Customer Profile (ICP) using Clay, Apollo, LinkedIn, and proprietary scraping workflows.'
  },
  {
    id: 7,
    question: 'Do I need to sign a long contract?',
    answer: 'No long lock-ins. We recommend a 90-day launch window to reach peak predictable cadence, after which agreements transition into rolling month-to-month terms.'
  },
  {
    id: 8,
    question: 'Which tools and technologies do you use?',
    answer: 'For development, we build with React, Next.js, Webflow, Shopify, TypeScript, and Tailwind CSS. For growth & outreach, we rely on Clay, GoHighLevel, Meta Ads, Instantly, Smartlead, Apollo, and Klaviyo.'
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
        {/* Centered Section Header */}
        <div className="section-header-center">
          <SectionBadge text="FAQ" />
          <h2 className="section-title">
            Have questions,
            <br />
            We got answers.
          </h2>
          <p className="section-desc">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="faq-container-centered">
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

          {/* Help Card */}
          <div className="faq-support-card card-base">
            <div className="support-card-text-col">
              <h4 className="support-card-title">Can't find your answer?</h4>
              <p className="support-card-text">
                Get in touch with our support team, they are friendly.
              </p>
            </div>
            <a href="#contact" className="btn btn-secondary support-card-btn">
              <span>Contact Us</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
