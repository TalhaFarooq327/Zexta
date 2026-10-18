import React from 'react'
import './SectionBadge.css'

export default function SectionBadge({ text, className = '' }) {
  return (
    <div className={`section-tag-wrapper ${className}`}>
      <span className="section-tag">
        <span className="corner-bl" />
        {text}
        <span className="corner-tr" />
      </span>
    </div>
  )
}
