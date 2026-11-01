import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-left">
        <p>&copy; 2026 Pramod Nayaka H S. All rights reserved.</p>
        <p className="footer-sub">
          Designed with precision & inspired by modern minimalist developer aesthetics.
        </p>
      </div>
      <div className="footer-right">
        <button
          className="back-to-top-btn"
          id="backToTopBtn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  );
}
