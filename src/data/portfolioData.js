export const personalInfo = {
  name: "Pramod Nayaka H S",
  role: "Software Developer & MCA Graduate",
  roleTag: "SOFTWARE DEVELOPER • FULL-STACK • ML",
  status: "Available for work",
  location: "Bengaluru, India • Open for Roles",
  locationShort: "Bengaluru, India",
  phone: "+91 6360174348",
  email: "pramodnayaka21@gmail.com",
  github: "https://github.com/pramodnayaka",
  linkedin: "https://linkedin.com/in/pramod-nayaka-h-s",
  resumePath: "/assets/pramod_resume_2k26.pdf",
  resumeFileName: "Pramod_Nayaka_Resume.pdf",
  portraitDark: "/assets/profile_studio.png",
  portraitLight: "/assets/profile.png",
  yearsBadge: "2024 → 2026",
  yearsLabel: "MCA Graduate • 9.41 CGPA",
  ethosQuote:
    "“I BELIEVE SCALABLE SOFTWARE IS NOT JUST WRITTEN, BUT THOUGHTFULLY ARCHITECTED — WITH CLEAN LOGIC, INTUITIVE DESIGN, AND REAL-WORLD IMPACT.”",
  subtitle: "MCA Graduate • Software Developer, based in Bengaluru, India",
  aboutLead:
    "I am an MCA Graduate & Software Developer with a solid foundation in software engineering, full-stack web architecture, and applied machine learning.",
  aboutParagraphs: [
    "Graduating with an outstanding 9.41 CGPA from Kishkinda University, I have cultivated both academic depth and rigorous practical experience. My hands-on work spans building responsive modern web applications in React.js, architecting robust backend APIs in Python (Flask/Django), managing relational and NoSQL databases (MySQL, MongoDB), and training predictive machine learning models with Scikit-learn.",
    "Whether it was architecting KU SmartSchedule — an AI-powered timetable generator that eradicated scheduling conflicts for university departments — or developing predictive machine learning pipelines at YBI Foundation, I focus on engineering performant, scalable, and human-centric software."
  ],
  metrics: [
    { num: "9.41", label: "MCA CGPA (Top Tier)" },
    { num: "2+", label: "Key Capstone & QA Projects" },
    { num: "1", label: "Industry Internship" },
    { num: "100%", label: "Clean Code Commitment" }
  ]
};

export const navLinks = [
  { href: "#about", label: "About", numLabel: "01. About" },
  { href: "#experience", label: "Experience", numLabel: "02. Experience" },
  { href: "#skills", label: "Skills", numLabel: "03. Skills" },
  { href: "#education", label: "Education", numLabel: "04. Education" },
  { href: "#projects", label: "Projects", numLabel: "05. Projects" },
  { href: "#resume", label: "Resume", numLabel: "06. Resume" },
  { href: "#contact", label: "Contact", numLabel: "07. Contact" }
];

export const experienceList = [
  {
    role: "Data Science & Machine Learning Intern",
    company: "YBI Foundation",
    period: "Jan 2026 — May 2026",
    points: [
      "Engineered predictive machine learning pipelines using Python, Scikit-learn, and Pandas.",
      "Conducted extensive exploratory data analysis (EDA), data cleaning, feature engineering, and visualization with Matplotlib.",
      "Trained and benchmarked classification & regression algorithms, evaluating precision, recall, and ROC-AUC metrics.",
      "Developed structured documentation and predictive dashboards for end-user interpretation."
    ],
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Data Visualization"]
  }
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ml", label: "AI & Data Science" },
  { id: "database", label: "Databases" },
  { id: "tools", label: "Testing & Tools" }
];

export const skillsList = [
  // Frontend
  { name: "HTML5", category: "frontend", highlight: false },
  { name: "CSS3", category: "frontend", highlight: false },
  { name: "JavaScript (ES6+)", category: "frontend", highlight: false },
  { name: "React.js", category: "frontend", highlight: true },
  { name: "Responsive Web Design", category: "frontend", highlight: false },
  { name: "UI/UX Principles", category: "frontend", highlight: false },

  // Backend
  { name: "Python", category: "backend", highlight: true },
  { name: "Flask", category: "backend", highlight: false },
  { name: "Django", category: "backend", highlight: false },
  { name: "Java (OOP)", category: "backend", highlight: false },
  { name: "RESTful APIs", category: "backend", highlight: false },

  // AI & ML
  { name: "Machine Learning", category: "ml", highlight: true },
  { name: "Scikit-learn", category: "ml", highlight: false },
  { name: "Pandas & NumPy", category: "ml", highlight: false },
  { name: "Data Visualization", category: "ml", highlight: false },
  { name: "Google Gemini AI", category: "ml", highlight: false },

  // Databases
  { name: "MongoDB", category: "database", highlight: true },
  { name: "MySQL", category: "database", highlight: true },
  { name: "Database Modeling", category: "database", highlight: false },

  // Tools & Testing
  { name: "Git & GitHub", category: "tools", highlight: false },
  { name: "VS Code", category: "tools", highlight: false },
  { name: "Software Testing (Manual)", category: "tools", highlight: false },
  { name: "STLC & SDLC", category: "tools", highlight: false },
  { name: "Regression Testing", category: "tools", highlight: false },
  { name: "MySQL Workbench", category: "tools", highlight: false },
  { name: "MongoDB Compass", category: "tools", highlight: false }
];

export const educationList = [
  {
    period: "• 2024 — JULY 2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Kishkinda University • Ballari, Karnataka",
    scoreChip: {
      label: "CGPA:",
      value: "9.41 / 10",
      status: "(Outstanding Academic Distinction)"
    },
    description:
      "Focused on Advanced Software Engineering, Cloud-native Computing, Object-Oriented Frameworks, Database Systems, and Applied AI. Led the creation and deployment of the university-wide KU SmartSchedule system."
  },
  {
    period: "• NOV 2021 — SEPT 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shree Medha Degree College • Ballari, Karnataka",
    scoreChip: {
      label: "CGPA:",
      value: "8.71 / 10",
      status: "(First Class with Distinction)"
    },
    description:
      "Developed strong foundations in Data Structures & Algorithms, Java OOP, Relational Databases (SQL), Web Technologies, and Software Development Life Cycles."
  }
];

export const certifications = [
  {
    issuer: "Infosys Springboard",
    name: "Explore Machine Learning using Python",
    description: "Core supervised & unsupervised learning, model fitting, and Python data science packages."
  },
  {
    issuer: "Simplilearn",
    name: "Introduction to Data Visualization",
    description: "Techniques in statistical representation, exploratory visual reporting, and data communication."
  }
];

export const projectCaseStudies = {
  "ku-schedule": {
    badge: "MCA Major Project • Star Feature",
    title: "KU SmartSchedule — AI University Timetable Generator",
    github: "https://github.com/pramodnayaka",
    problem:
      "Manual university timetable creation traditionally requires days of trial-and-error across spreadsheets, resulting in teacher slot clashes, room overbooking, and unbalanced subject distribution across academic semesters.",
    architecture: [
      {
        title: "Automated Constraint Satisfaction Engine",
        text: "Implemented algorithms to guarantee zero teacher overlaps, room capacity compliance, and proper division of theory vs. lab hours."
      },
      {
        title: "Google Gemini AI Integration",
        text: "Integrated natural language query parsing allowing administrators to issue instructions like \"Reschedule Wednesday morning Advanced Python to Friday 2 PM\" without invalidating timetable rules."
      },
      {
        title: "Full-Stack Architecture",
        text: "Built using a performant Python (Flask) REST backend paired with a reactive React.js single-page frontend."
      },
      {
        title: "Persistent Storage",
        text: "Scalable MongoDB document database storing department rosters, subject credits, professor schedules, and room availability matrices."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        text: "Granular permissions separating Dean, HoD, Faculty, and Student read/write capabilities with JWT tokens."
      }
    ],
    impact:
      "Reduced timetable generation and iteration time from 4 days to less than 3 seconds with 100% collision-free guarantee."
  },
  "qa-testing": {
    badge: "Software Quality Assurance",
    title: "House Rental Web App — End-to-End QA Testing",
    github: "https://github.com/pramodnayaka",
    problem:
      "Comprehensive manual and functional quality assurance testing performed for a full-scale House Rental web application following industry SDLC and STLC methodologies.",
    architecture: [
      {
        title: "10 Core Modules Covered",
        text: "User Registration, Login & Session Management, Property Search, Filter Engine, Property Details, Booking Requests, Profile Management, Host Messaging, Admin Dashboard, and Logout."
      },
      {
        title: "Test Case Design",
        text: "Designed and executed positive, negative, and edge-case scenarios with detailed pre-conditions and expected outputs."
      },
      {
        title: "Defect Tracking",
        text: "Logged, categorized, and tracked severity levels in JIRA."
      },
      {
        title: "Regression Testing",
        text: "Re-verified fixes after developer patches to safeguard system stability."
      }
    ],
    impact:
      "Identified and cataloged critical boundary and session edge cases prior to deployment, ensuring zero regressions."
  }
};
