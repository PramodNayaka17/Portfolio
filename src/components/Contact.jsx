import React, { useState } from 'react';
import { Send, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopy }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', isError: false });
  const [copiedField, setCopiedField] = useState(null);

  const handleCopyClick = (text, fieldName) => {
    onCopy(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        message: 'Please fill out all required fields.',
        isError: true
      });
      return;
    }

    setSubmitting(true);
    setFeedback({
      message: 'Preparing your email client...',
      isError: false
    });

    setTimeout(() => {
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        subject.trim() || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${name.trim()} (${email.trim()})\n\nMessage:\n${message.trim()}`
      )}`;

      window.location.href = mailtoUrl;

      onCopy(`Opening email client to contact ${personalInfo.name}`);

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitting(false);
        setFeedback({
          message: 'Message prepared successfully!',
          isError: false
        });
      }, 1000);
    }, 600);
  };

  return (
    <section className="portfolio-section" id="contact">
      <div className="section-grid">
        <div className="section-heading-col">
          <h2 className="section-number-title">07. CONTACT</h2>
        </div>
        <div className="section-body-col">
          {/* Direct Contact Info Banner */}
          <div className="contact-direct-block">
            <div className="direct-phone-row">
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-big-phone" id="contactPhoneLink">
                {personalInfo.phone}
              </a>
              <button
                className="copy-pill-btn"
                onClick={() => handleCopyClick(personalInfo.phone, 'phone')}
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? (
                  <span>
                    <Check size={12} style={{ display: 'inline', marginRight: 4 }} />
                    Copied!
                  </span>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            <div className="contact-email-row">
              <span className="field-label">Email</span>
              <div className="email-with-copy">
                <a href={`mailto:${personalInfo.email}`} className="contact-big-email" id="contactEmailLink">
                  {personalInfo.email}
                </a>
                <button
                  className="copy-pill-btn"
                  onClick={() => handleCopyClick(personalInfo.email, 'email')}
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <span>
                      <Check size={12} style={{ display: 'inline', marginRight: 4 }} />
                      Copied!
                    </span>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </div>

            <div className="contact-socials-row">
              <span className="field-label">Socials & Profiles</span>
              <div className="social-links-list">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-text-link"
                  id="githubProfileLink"
                >
                  Github
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-text-link"
                  id="linkedinProfileLink"
                >
                  LinkedIn
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-text-link">
                  Email
                </a>
                <a
                  href={personalInfo.resumePath}
                  download={personalInfo.resumeFileName}
                  className="social-text-link"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Send Message Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">
              Have an opening, an interesting project, or want to connect? Leave a note below.
            </p>

            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="senderName">Your Name</label>
                  <input
                    type="text"
                    id="senderName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="senderEmail">Your Email</label>
                  <input
                    type="email"
                    id="senderEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Project Collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello Pramod, I came across your portfolio and would love to discuss..."
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="contactSubmitBtn"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} strokeWidth={2.5} />
                </button>
                {feedback.message && (
                  <span
                    className="form-feedback-msg"
                    id="formFeedback"
                    style={{ color: feedback.isError ? '#ef4444' : 'var(--accent-primary)' }}
                  >
                    {feedback.message}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
