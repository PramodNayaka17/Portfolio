import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import StickyPortrait from './components/StickyPortrait';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';
import { projectCaseStudies } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pramod_portfolio_theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Sync theme attribute on <body>
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pramod_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toast Notification Trigger
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  }, []);

  // Copy to clipboard helper
  const handleCopy = useCallback(
    (text) => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            showToast(`Copied "${text}" to clipboard!`);
          })
          .catch(() => {
            fallbackCopy(text);
          });
      } else {
        fallbackCopy(text);
      }
    },
    [showToast]
  );

  const fallbackCopy = (text) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied "${text}" to clipboard!`);
    } catch {
      showToast('Failed to copy to clipboard');
    }
    document.body.removeChild(tempInput);
  };

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'experience',
      'skills',
      'education',
      'projects',
      'resume',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Glassmorphic Navigation Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Split-Screen Architecture */}
      <div className="main-layout" id="mainLayout">
        <StickyPortrait theme={theme} />

        <main className="content-scroll-column" id="contentColumn">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Projects onOpenModal={(id) => setActiveModal(id)} />
          <Resume />
          <Contact onCopy={handleCopy} />
          <Footer />
        </main>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        activeModal={activeModal}
        projectData={activeModal ? projectCaseStudies[activeModal] : null}
        onClose={() => setActiveModal(null)}
      />

      {/* Toast Notification */}
      <Toast toast={toastMessage} />
    </>
  );
}
