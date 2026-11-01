import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section className="portfolio-section" id="resume">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">06. RESUME</h2>
        </div>
        <div className="section-body-col">
          <div className="resume-card-box">
            <div className="resume-top-banner">
              <div className="resume-info-meta">
                <h3 className="resume-name-title">{personalInfo.name}</h3>
                <p className="resume-sub">MCA Graduate • Software Developer • Bengaluru-560076</p>
              </div>
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                className="btn btn-primary"
                id="resumeDownloadPrimary"
              >
                <Download size={16} strokeWidth={2.5} />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>

            {/* Quick Executive Summary Grid */}
            <div className="resume-summary-grid">
              <div className="summary-col">
                <h4 className="summary-head">Education Summary</h4>
                <div className="summary-entry">
                  <strong>MCA — Kishkinda University</strong>
                  <div className="entry-sub">2024 – 2026 | CGPA: 9.41 / 10</div>
                </div>
                <div className="summary-entry">
                  <strong>BCA — Shree Medha Degree College</strong>
                  <div className="entry-sub">2021 – 2024 | CGPA: 8.71 / 10</div>
                </div>
              </div>

              <div className="summary-col">
                <h4 className="summary-head">Internship Record</h4>
                <div className="summary-entry">
                  <strong>Data Science & ML Intern</strong>
                  <div className="entry-sub">YBI Foundation (2026)</div>
                </div>
              </div>

              <div className="summary-col">
                <h4 className="summary-head">Core Stack</h4>
                <p className="summary-stack-text">
                  Python, Java, React.js, JavaScript, HTML5/CSS3, Flask, Django, MongoDB, MySQL, Machine Learning,
                  Git/GitHub, Manual Testing & QA.
                </p>
              </div>
            </div>

            {/* Embedded Document Actions */}
            <div className="resume-actions-bar">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={14} />
                <span>Open PDF in New Tab</span>
              </a>
              <span className="file-size-tag">Verified PDF Document • 247 KB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
