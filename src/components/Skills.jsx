import React, { useState } from 'react';
import { skillCategories, skillsList } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = skillsList.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section className="portfolio-section" id="skills">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">03. SKILLS</h2>
        </div>
        <div className="section-body-col">
          {/* Filter Tabs */}
          <div className="skills-filter-nav">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill Pills Container */}
          <div className="skills-cloud" id="skillsCloud">
            {filteredSkills.map((skill, index) => (
              <span
                key={index}
                className={`skill-pill ${skill.highlight ? 'highlighted-pill' : ''}`}
                data-category={skill.category}
              >
                {skill.name}
              </span>
            ))}
          </div>

          <div className="skills-summary-footer">
            <p className="skills-note">
              <span className="accent-dot"></span>
              <strong>Core Specialty:</strong> End-to-end full-stack engineering with modern React interfaces,
              Python-backed APIs, automated ML workflows, and rigorous QA validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
