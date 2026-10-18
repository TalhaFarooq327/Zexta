import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionBadge from './SectionBadge'
import case1Img from '../assets/generated/case_study_1.png'
import case2Img from '../assets/generated/case_study_2.png'
import case3Img from '../assets/generated/case_study_3.png'
import case4Img from '../assets/generated/case_study_4.png'
import './CaseStudies.css'

const caseProjects = [
  {
    id: 1,
    title: 'Influencer Outreach',
    tags: ['Ecommerce', 'Instagram'],
    image: case1Img,
    alt: 'Influencer Outreach Analytics & Activities'
  },
  {
    id: 2,
    title: 'Cold Email Infrastructure',
    tags: ['SaaS', 'Deliverability'],
    image: case2Img,
    alt: 'Cold Email Deliverability & LinkedIn Outreach Dashboard'
  },
  {
    id: 3,
    title: 'Lead List Build',
    tags: ['B2B', 'Data Enrichment'],
    image: case3Img,
    alt: 'Lead List Nurturing Workflow Sequence'
  },
  {
    id: 4,
    title: 'Meta Ads',
    tags: ['Local Business', 'Lead Ads'],
    image: case4Img,
    alt: 'Meta Ads Revenue & Deal Pipeline Dashboard'
  }
]

export default function CaseStudies() {
  return (
    <section className="work-section" id="work">
      <div className="container">
        {/* Header with right CTA */}
        <div className="work-header">
          <div className="work-header-left">
            <SectionBadge text="Our Work" />
            <h2 className="section-title">How we've helped other businesses.</h2>
            <p className="section-desc">
              See how we turned outreach challenges into steady streams of qualified leads.
            </p>
          </div>
          <div className="work-header-right">
            <a href="#all-projects" className="btn btn-secondary work-cta-btn">
              <span>View all projects</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* 2x2 Grid of Case Studies */}
        <div className="work-cards-grid">
          {caseProjects.map((project) => (
            <div key={project.id} className="case-card card-base">
              <div className="case-img-container">
                <img src={project.image} alt={project.alt} className="case-img" />
              </div>
              <div className="case-content">
                <div className="case-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="case-tag-pill">{tag}</span>
                  ))}
                </div>
                <h3 className="case-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
