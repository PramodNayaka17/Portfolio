import React from 'react';
import { X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === 'mobileMenuOverlay') {
      onClose();
    }
  };

  return (
    <div
      className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
      id="mobileMenuOverlay"
      onClick={handleOverlayClick}
    >
      <div className="mobile-menu-drawer">
        <div className="mobile-menu-header">
          <span className="drawer-title">Navigation</span>
          <button
            className="drawer-close"
            id="mobileMenuClose"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-menu-links">
          <a href="#hero" className="mobile-link" onClick={onClose}>
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={onClose}
            >
              {link.numLabel}
            </a>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a
            href={personalInfo.resumePath}
            download={personalInfo.resumeFileName}
            className="btn btn-outline w-full"
            onClick={onClose}
          >
            Download CV (PDF)
          </a>
          <a
            href="#contact"
            className="btn btn-primary w-full"
            onClick={onClose}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
