import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section className="portfolio-section" id="about">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">01. ABOUT</h2>
        </div>
        <div className="section-body-col">
          <div className="about-text-block">
            <p className="lead-text">{personalInfo.aboutLead}</p>
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Fast Metrics Row */}
          <div className="metrics-grid">
            {personalInfo.metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <span className="metric-num">{metric.num}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
