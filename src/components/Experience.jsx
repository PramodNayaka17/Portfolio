import React from 'react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="portfolio-section" id="experience">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">02. EXPERIENCE</h2>
        </div>
        <div className="section-body-col">
          <div className="experience-timeline">
            {experienceList.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="experience-role-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <span className="experience-company">{exp.company}</span>
                  </div>
                  <span className="experience-badge">{exp.period}</span>
                </div>
                <ul className="experience-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
                <div className="tech-tag-row">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
