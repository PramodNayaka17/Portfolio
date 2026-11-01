import React from 'react';
import { ArrowUpRight, Download, ArrowRight, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-meta-grid">
        <div className="hero-experience-badge">
          <span className="badge-year">{personalInfo.yearsBadge}</span>
          <span className="badge-label">{personalInfo.yearsLabel}</span>
        </div>

        <div className="hero-ethos-quote">
          <p>{personalInfo.ethosQuote}</p>
        </div>
      </div>

      <div className="hero-main-title-block">
        <div className="hero-role-tag">{personalInfo.roleTag}</div>
        <h1 className="hero-title">
          <span className="title-word">PRAMOD</span>
          <span className="title-word">NAYAKA H S</span>
        </h1>
        <p className="hero-subtitle">{personalInfo.subtitle}</p>
      </div>

      {/* Hero Actions */}
      <div className="hero-actions-row">
        <a href="#projects" className="btn btn-primary" id="heroViewProjectsBtn">
          <span>View Projects</span>
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </a>
        <a
          href={personalInfo.resumePath}
          download={personalInfo.resumeFileName}
          className="btn btn-outline"
          id="heroDownloadResumeBtn"
        >
          <Download size={16} strokeWidth={2} />
          <span>Download Resume</span>
        </a>
        <a href="#contact" className="btn btn-ghost" id="heroContactBtn">
          <span>Contact Me</span>
          <ArrowRight size={16} className="arrow-right" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint">
        <a href="#about" className="scroll-link">
          <span>Scroll</span>
          <ArrowDown size={14} className="scroll-arrow" />
        </a>
      </div>
    </section>
  );
}
