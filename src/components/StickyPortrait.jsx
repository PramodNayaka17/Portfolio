import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function StickyPortrait({ theme }) {
  const imageSrc = theme === 'light' ? personalInfo.portraitLight : personalInfo.portraitDark;

  return (
    <aside className="sticky-portrait-column" id="portraitColumn">
      <div className="portrait-wrapper">
        <div className="portrait-glow"></div>
        <img
          src={imageSrc}
          alt={personalInfo.name}
          className="portrait-img"
          id="portraitImg"
          loading="eager"
        />
        <div className="portrait-vignette-overlay"></div>
        <div className="portrait-caption-pill">
          <span className="pulse-dot"></span>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </aside>
  );
}
