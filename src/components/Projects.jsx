import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Projects({ onOpenModal }) {
  return (
    <section className="portfolio-section" id="projects">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">05. PROJECTS</h2>
        </div>
        <div className="section-body-col">
          {/* MAIN FEATURED PROJECT: KU SMARTSCHEDULE */}
          <div className="featured-project-card" id="featuredMainProject">
            <div className="featured-label-bar">
              <span className="star-badge">★ MAIN FEATURED PROJECT</span>
              <span className="status-pill live-pill">MCA Major Project</span>
            </div>

            <div className="project-header-row">
              <h3 className="featured-project-title">
                KU SmartSchedule — AI-Powered University Timetable Generator
              </h3>
            </div>

            <p className="featured-project-lead">
              An intelligent full-stack university timetable scheduling platform designed for{' '}
              <strong>Kishkinda University</strong> that automates conflict-free timetable generation across
              classrooms, faculty allocations, and student batches using constraint-solving logic and{' '}
              <strong>Google Gemini AI</strong>.
            </p>

            {/* Interactive Mockup Visual Box */}
            <div className="project-mockup-frame">
              <div className="mockup-header-bar">
                <div className="mockup-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="mockup-url">https://kusmartschedule.edu/dashboard</span>
                <span className="mockup-status-tag">AI Conflict Solver: Active</span>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  <div className="mock-nav-item active">Timetable Grid</div>
                  <div className="mock-nav-item">Faculty Allocation</div>
                  <div className="mock-nav-item">Classrooms & Labs</div>
                  <div className="mock-nav-item">Gemini AI Assistant</div>
                </div>
                <div className="mockup-main">
                  <div className="mock-stats-row">
                    <div className="mock-stat">
                      <span className="s-val">0</span>
                      <span className="s-lbl">Clashes Detected</span>
                    </div>
                    <div className="mock-stat">
                      <span className="s-val">100%</span>
                      <span className="s-lbl">Faculty Mapped</span>
                    </div>
                    <div className="mock-stat">
                      <span className="s-val">&lt; 3s</span>
                      <span className="s-lbl">Generation Time</span>
                    </div>
                  </div>
                  <div className="mock-table-preview">
                    <div className="mock-row header-row">
                      <span>Day</span>
                      <span>09:00 - 10:00</span>
                      <span>10:00 - 11:00</span>
                      <span>11:15 - 12:15</span>
                      <span>01:15 - 03:15</span>
                    </div>
                    <div className="mock-row">
                      <span className="day-lbl">MON</span>
                      <span className="slot green">Adv. Python [Lab 2]</span>
                      <span className="slot blue">Cloud Arch [CR 104]</span>
                      <span className="slot purple">ML Lab [Lab 1]</span>
                      <span className="slot amber">Mini-Project Work</span>
                    </div>
                    <div className="mock-row">
                      <span className="day-lbl">TUE</span>
                      <span className="slot blue">Web Tech [CR 102]</span>
                      <span className="slot green">DBMS Theory [CR 104]</span>
                      <span className="slot amber">Soft Skills [CR 201]</span>
                      <span className="slot purple">React.js Practical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="project-highlights-grid">
              <div className="highlight-box">
                <span className="hl-icon">
                  <Check size={14} />
                </span>
                <div>
                  <strong>Intelligent Conflict Eradication:</strong> Resolves overlapping constraints
                  between teacher availability, classroom capacities, and syllabus hours automatically.
                </div>
              </div>
              <div className="highlight-box">
                <span className="hl-icon">
                  <Check size={14} />
                </span>
                <div>
                  <strong>Gemini AI Assistance:</strong> Natural-language schedule modifications and
                  dynamic adjustments based on real-time leave requests.
                </div>
              </div>
              <div className="highlight-box">
                <span className="hl-icon">
                  <Check size={14} />
                </span>
                <div>
                  <strong>Role-Based Access:</strong> Secure authenticated dashboards with separate granular
                  permissions for Deans, HoDs, Faculty, and Students.
                </div>
              </div>
              <div className="highlight-box">
                <span className="hl-icon">
                  <Check size={14} />
                </span>
                <div>
                  <strong>University Adoption:</strong> Contributed directly to Kishkinda University to
                  eliminate tedious manual paper scheduling and spreadsheet human error.
                </div>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="tech-tag-row">
              <span className="tag tag-featured">React.js</span>
              <span className="tag tag-featured">Python (Flask)</span>
              <span className="tag tag-featured">MongoDB</span>
              <span className="tag tag-featured">Google Gemini AI</span>
              <span className="tag">REST APIs</span>
              <span className="tag">JWT Auth</span>
              <span className="tag">VS Code</span>
            </div>

            {/* Action Links */}
            <div className="project-actions-row">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => onOpenModal('ku-schedule')}
              >
                <span>View Case Study & Architecture</span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </button>
              <a
                href="https://github.com/pramodnayaka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Repository (GitHub)</span>
              </a>
            </div>
          </div>

          {/* ADDITIONAL PROJECT SHOWCASE */}
          <div className="projects-editorial-list">
            <div className="editorial-project-item">
              <div className="project-title-row">
                <h3 className="editorial-project-title">
                  House Rental Web App — End-to-End QA Testing
                </h3>
                <span className="project-tag-badge">Software Testing (STLC)</span>
              </div>
              <p className="editorial-project-desc">
                Executed complete lifecycle functional and manual testing across 10 core modules
                (Authentication, Search Filters, Booking Engine, Admin Panels). Designed comprehensive test
                matrices, documented defect logs in JIRA, and verified fixes via regression suites.
              </p>
              <div className="tech-tag-row">
                <span className="tag">Manual Testing</span>
                <span className="tag">STLC & SDLC</span>
                <span className="tag">JIRA</span>
                <span className="tag">Test Case Design</span>
                <span className="tag">Regression Testing</span>
                <span className="tag">MySQL Validation</span>
              </div>
              <div className="editorial-links">
                <button
                  className="text-link-btn"
                  onClick={() => onOpenModal('qa-testing')}
                >
                  View QA Test Plan →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
