import React, { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function ProjectModal({ activeModal, projectData, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal || !projectData) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === 'projectModalOverlay') {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay active"
      id="projectModalOverlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="modal-badge" id="modalBadge">
              {projectData.badge}
            </span>
            <h3 className="modal-title" id="modalTitle">
              {projectData.title}
            </h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" id="modalBody">
          <h4>The Problem & Context</h4>
          <p>{projectData.problem}</p>

          <h4>Technical Architecture & Implementation</h4>
          <ul>
            {projectData.architecture.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>

          {projectData.impact && (
            <>
              <h4>Measurable Impact</h4>
              <p>{projectData.impact}</p>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
          <a
            href={projectData.github || 'https://github.com/pramodnayaka'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="modalActionBtn"
          >
            <span>View on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
