import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({
  theme,
  onToggleTheme,
  activeSection,
  onOpenMobileMenu
}) {
  return (
    <header className="top-nav" id="topNav">
      <div className="nav-container">
        <div className="nav-left">
          <a href="#hero" className="brand-link">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">{personalInfo.status}</span>
            </span>
          </a>
        </div>

        <nav className="nav-links" id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${
                activeSection === link.href.substring(1) ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            href={personalInfo.resumePath}
            download={personalInfo.resumeFileName}
            className="nav-cta-link"
            id="navDownloadCv"
          >
            Download CV
          </a>
          <a href="#contact" className="nav-cta-link cta-contact" id="navContactMe">
            Contact Me
          </a>

          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="sun-icon" size={18} />
            ) : (
              <Moon className="moon-icon" size={18} />
            )}
          </button>

          <button
            className="mobile-toggle"
            id="mobileMenuBtn"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
