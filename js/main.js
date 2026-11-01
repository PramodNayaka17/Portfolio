/**
 * PRAMOD NAYAKA H S — PORTFOLIO JAVASCRIPT
 * Features: Live IST Clock, ScrollSpy, Skill Filter, Project Modals,
 * Clipboard Copy, Theme Toggle, Mobile Drawer, Interactive Form
 */

// =============================================================================
// 1. THEME TOGGLE (DARK / LIGHT MODE)
// =============================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const portraitImg = document.getElementById('portraitImg');
  if (!toggleBtn) return;

  function updatePortraitForTheme(theme) {
    if (portraitImg) {
      portraitImg.src = theme === 'light' ? 'assets/profile.png' : 'assets/profile_studio.png';
    }
  }

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('pramod_portfolio_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updatePortraitForTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('pramod_portfolio_theme', newTheme);
    updatePortraitForTheme(newTheme);
  });
}

// =============================================================================
// 3. MOBILE MENU DRAWER
// =============================================================================
function initMobileMenu() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const overlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!openBtn || !overlay) return;

  function openMenu() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// =============================================================================
// 4. SCROLL SPY & NAVIGATION HIGHLIGHTING
// =============================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// =============================================================================
// 5. SKILLS FILTERING
// =============================================================================
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillPills = document.querySelectorAll('.skill-pill');

  if (!filterBtns.length || !skillPills.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillPills.forEach(pill => {
        const category = pill.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          pill.style.display = 'inline-flex';
          pill.style.opacity = '1';
          pill.style.transform = 'scale(1)';
        } else {
          pill.style.display = 'none';
        }
      });
    });
  });
}

// =============================================================================
// 6. COPY TO CLIPBOARD & TOAST NOTIFICATION
// =============================================================================
function copyToClipboard(text, triggerBtn) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied "${text}" to clipboard!`);
      indicateBtnSuccess(triggerBtn);
    }).catch(() => fallbackCopy(text, triggerBtn));
  } else {
    fallbackCopy(text, triggerBtn);
  }
}

function fallbackCopy(text, triggerBtn) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(`Copied "${text}" to clipboard!`);
    indicateBtnSuccess(triggerBtn);
  } catch (err) {
    showToast('Failed to copy to clipboard');
  }
  document.body.removeChild(tempInput);
}

function indicateBtnSuccess(btn) {
  if (!btn) return;
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>✓ Copied!</span>';
  btn.style.borderColor = 'var(--accent-primary)';
  btn.style.color = 'var(--accent-primary)';

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 2000);
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// =============================================================================
// 7. PROJECT DETAILS MODAL SYSTEM
// =============================================================================
const projectDetailsData = {
  'ku-schedule': {
    badge: 'MCA Major Project • Star Feature',
    title: 'KU SmartSchedule — AI University Timetable Generator',
    github: 'https://github.com/pramodnayaka',
    content: `
      <p><strong>KU SmartSchedule</strong> is an automated timetable generation and academic resource allocation platform built for <strong>Kishkinda University</strong> as Pramod's MCA Major Capstone Project.</p>
      
      <h4>The Problem Solved</h4>
      <p>Manual university timetable creation traditionally requires days of trial-and-error across spreadsheets, resulting in teacher slot clashes, room overbooking, and unbalanced subject distribution across academic semesters.</p>

      <h4>Technical Architecture & Solution</h4>
      <ul>
        <li><strong>Automated Constraint Satisfaction Engine:</strong> Implemented algorithms to guarantee zero teacher overlaps, room capacity compliance, and proper division of theory vs. lab hours.</li>
        <li><strong>Google Gemini AI Integration:</strong> Integrated natural language query parsing allowing administrators to issue instructions like <em>"Reschedule Wednesday morning Advanced Python to Friday 2 PM"</em> without invalidating timetable rules.</li>
        <li><strong>Full-Stack Architecture:</strong> Built using a performant <strong>Python (Flask)</strong> REST backend paired with a reactive <strong>React.js</strong> single-page frontend.</li>
        <li><strong>Persistent Storage:</strong> Scalable <strong>MongoDB</strong> document database storing department rosters, subject credits, professor schedules, and room availability matrices.</li>
        <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions separating Dean, HoD, Faculty, and Student read/write capabilities with JWT tokens.</li>
      </ul>

      <h4>Impact</h4>
      <p>Reduced timetable generation and iteration time from 4 days to less than 3 seconds with 100% collision-free guarantee.</p>
    `
  },
  'qa-testing': {
    badge: 'Software Quality Assurance',
    title: 'House Rental Web App — End-to-End QA Testing',
    github: 'https://github.com/pramodnayaka',
    content: `
      <p>Comprehensive manual and functional quality assurance testing performed for a full-scale House Rental web application following industry SDLC and STLC methodologies.</p>

      <h4>Testing Scope & Accomplishments</h4>
      <ul>
        <li><strong>10 Core Modules Covered:</strong> User Registration, Login & Session Management, Property Search, Filter Engine, Property Details, Booking Requests, Profile Management, Host Messaging, Admin Dashboard, and Logout.</li>
        <li><strong>Test Case Design:</strong> Designed and executed positive, negative, and edge-case scenarios with detailed pre-conditions and expected outputs.</li>
        <li><strong>Defect Tracking:</strong> Logged, categorized, and tracked severity levels in <strong>JIRA</strong>.</li>
        <li><strong>Regression Testing:</strong> Re-verified fixes after developer patches to safeguard system stability.</li>
      </ul>
    `
  }
};

function openProjectModal(projectId) {
  const data = projectDetailsData[projectId];
  if (!data) return;

  const overlay = document.getElementById('projectModalOverlay');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalActionBtn = document.getElementById('modalActionBtn');

  if (!overlay) return;

  modalBadge.textContent = data.badge;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.content;
  modalActionBtn.href = data.github || 'https://github.com/pramodnayaka';

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('projectModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModalOnBackdrop(event) {
  if (event.target.id === 'projectModalOverlay') {
    closeProjectModal();
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// =============================================================================
// 8. INTERACTIVE CONTACT FORM HANDLER
// =============================================================================
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (!name || !email || !message) {
    if (feedback) {
      feedback.textContent = 'Please fill out all required fields.';
      feedback.style.color = '#ef4444';
    }
    return;
  }

  // Update button state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';
  }

  // Simulate instant client response and construct mailto link
  setTimeout(() => {
    if (feedback) {
      feedback.textContent = 'Thank you! Preparing your email client...';
      feedback.style.color = 'var(--accent-primary)';
    }

    // Direct mailto trigger
    const mailtoUrl = `mailto:pramodnayaka21@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUrl;

    showToast('Opening default email client with your message!');

    setTimeout(() => {
      document.getElementById('contactForm').reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`;
      }
      if (feedback) {
        feedback.textContent = 'Message prepared successfully!';
      }
    }, 1500);

  }, 600);
}

// =============================================================================
// 9. SCROLL TO TOP UTILITY
// =============================================================================
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// =============================================================================
// 10. INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initSkillsFilter();

  console.log('Pramod Nayaka H S — Portfolio Loaded Successfully');
});
