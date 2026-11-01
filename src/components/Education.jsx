import React from 'react';
import { educationList, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="portfolio-section" id="education">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">04. EDUCATION</h2>
        </div>
        <div className="section-body-col">
          <div className="education-list">
            {educationList.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="edu-date-badge">{edu.period}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-score-chip">
                  <span className="chip-label">{edu.scoreChip.label}</span>
                  <span className="chip-value">{edu.scoreChip.value}</span>
                  <span className="chip-status">{edu.scoreChip.status}</span>
                </div>
                <p className="edu-desc">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications Block */}
          <div className="certifications-block">
            <h4 className="cert-title">Certifications & Accreditations</h4>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-desc">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
