// Portfolio data for Muhammad Vikhan Muharram

export const personalInfo = {
  name: "Vikhan Muharram",
  title: "Software Engineer",
  tagline: "Designing efficient systems that solve real-world problems",
  email: "muhammadvikhanmuharram@gmail.com",
  phone: "+62 812 2100 3708",
  location: "Bandung, West Java, Indonesia",
  bio: "Software Engineer with hands-on experience in user requirement analysis, software architecture design, and the development of web-based systems and machine learning applications. Skilled in building APIs, integrating ML models into applications, and collaborating across teams using Lean Startup and SCRUM approaches. Capable of bridging communication between technical and non-technical stakeholders. Experienced in leading project teams and coordinating development efforts to deliver high-quality, user-centered solutions.",
  profileImage: "/images/profile.jpg",
  socials: {
    github: "https://github.com/vikhanmuhammad",
    linkedin: "https://www.linkedin.com/in/vikhan-muharram-a1787a148/",
    twitter: "https://www.instagram.com/vikhanmuharram/",
    portfolio: "https://vikhanmuharram.dev"
  }
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Software Engineering",
    university: "Telkom University",
    location: "Bandung, West Java, Indonesia",
    year: "2021 - 2025",
    gpa: "3.86/4.00",
    highlights: ["Focus on Software Development & System Analysis", "Active member of HUMIC Laboratory"]
  }
];

// Engineering Skills by Category
export const skillCategories = {
  expert: {
    label: "Expert",
    description: "Used in real, production-level projects with measurable outcomes",
    color: "#3b82f6", // blue
    skills: [
      "System Analysis & Modeling",
      "Fullstack Web Development",
      "Mobile App Development (Flutter)",
      "Database Design",
      "AI & Data Modeling",
      "Version Control (Git)",
      "Automation & Chatbot",
      "API Integration"
    ]
  },
  advanced: {
    label: "Advanced",
    description: "Built significant projects independently with confidence",
    color: "#8b5cf6", // purple
    skills: [
      "Software Project Management (SCRUM)",
      "Frontend Frameworks (React.js)",
      "DevOps & CI/CD",
      "Hosting & Deployment",
      "UI/UX Design (Figma)",
      "Backend Frameworks (Node.js, Spring Boot)"
    ]
  },
  intermediate: {
    label: "Intermediate",
    description: "Explored through smaller prototypes and practice",
    color: "#06b6d4", // cyan
    skills: [
      "Programming Languages (Golang)",
      "Cloud Hosting (Netlify, Render)",
      "Testing (Postman, Prototype Validation)"
    ]
  },
  basic: {
    label: "Basic",
    description: "Limited hands-on experience, understand fundamental concepts",
    color: "#64748b", // slate
    skills: [
      "Design Tools (Adobe XD)",
      "Containerization (Docker)",
      "State Management (Redux, Provider)"
    ]
  }
};

export const engineeringSkills = [
  { name: "System Analysis", level: 95, category: "expert" },
  { name: "Fullstack Development", level: 95, category: "expert" },
  { name: "Mobile Development", level: 90, category: "expert" },
  { name: "Database Design", level: 92, category: "expert" },
  { name: "AI & ML Integration", level: 88, category: "expert" },
  { name: "Project Management", level: 85, category: "advanced" },
  { name: "DevOps & CI/CD", level: 80, category: "advanced" },
  { name: "UI/UX Design", level: 82, category: "advanced" }
];

export const techStack = [
  // Expert Level
  { name: "Flutter", category: "Mobile", proficiency: "Expert", level: "expert" },
  { name: "HTML5", category: "Frontend", proficiency: "Expert", level: "expert" },
  { name: "CSS3", category: "Frontend", proficiency: "Expert", level: "expert" },
  { name: "JavaScript", category: "Frontend", proficiency: "Expert", level: "expert" },
  { name: "Bootstrap", category: "Frontend", proficiency: "Expert", level: "expert" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Expert", level: "expert" },
  { name: "PHP", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "Laravel", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "Flask", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "Next.js", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "MySQL", category: "Database", proficiency: "Expert", level: "expert" },
  { name: "Firebase", category: "Database", proficiency: "Expert", level: "expert" },
  { name: "n8n", category: "Automation", proficiency: "Expert", level: "expert" },
  { name: "Git", category: "Version Control", proficiency: "Expert", level: "expert" },
  { name: "REST API", category: "API", proficiency: "Expert", level: "expert" },
  { name: "UML", category: "Documentation", proficiency: "Expert", level: "expert" },
  { name: "Node.js", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "Express.js", category: "Backend", proficiency: "Expert", level: "expert" },
  { name: "Angular", category: "Frontend", proficiency: "Expert", level: "expert" },

  
  // Advanced Level
  { name: "CodeIgniter 3", category: "Backend", proficiency: "Advanced", level: "advanced" },
  { name: "Java Spring Boot", category: "Backend", proficiency: "Advanced", level: "advanced" },
  { name: "MongoDB", category: "Database", proficiency: "Advanced", level: "advanced" },
  { name: "Oracle", category: "Database", proficiency: "Advanced", level: "advanced" },
  { name: "React.js", category: "Frontend", proficiency: "Advanced", level: "advanced" },
  { name: "GitHub Actions", category: "DevOps", proficiency: "Advanced", level: "advanced" },
  { name: "cPanel", category: "Hosting", proficiency: "Advanced", level: "advanced" },
  { name: "Vercel", category: "Hosting", proficiency: "Advanced", level: "advanced" },
  { name: "Figma", category: "Design", proficiency: "Advanced", level: "advanced" },
  
  // Intermediate Level
  { name: "Golang", category: "Language", proficiency: "Intermediate", level: "intermediate" },
  { name: "Render", category: "Hosting", proficiency: "Intermediate", level: "intermediate" },
  { name: "Netlify", category: "Hosting", proficiency: "Intermediate", level: "intermediate" },
  
  // Basic Level
  { name: "Adobe XD", category: "Design", proficiency: "Basic", level: "basic" },
  { name: "Docker", category: "DevOps", proficiency: "Basic", level: "basic" },
  { name: "Jest", category: "Testing", proficiency: "Basic", level: "basic" },
  { name: "AWS", category: "Cloud", proficiency: "Basic", level: "basic" }
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "PT. Amerta Indah Otsuka",
    location: "Sukabumi, West Java",
    period: "Nov 2025 - May 2026",
    description: "Fullstack Developer Intern with hands-on experience in developing and maintaining internal systems using Angular (Module Federation), Node.js with Prisma ORM and SQL, and Flutter for mobile apps. Delivered complex systems within tight deadlines, resolved critical legacy issues efficiently, and actively collaborated in Agile Scrum teams to foster a productive and collaborative coding environment.",
    achievements: [
      "Developing and maintaining internal systems to support company operations using Angular (including Module Federation) for frontend and Node.js with Prisma ORM and SQL on backend. Also using flutter for mobile application development",
      "Successfully developed and delivered a complex system within a 2-month timeline",
      "Efficiently analyzed and resolved issues in a legacy system, including fixing 29 reported bugs within just 2 days",
      "Collaborating with cross-functional teams and actively participating in Sprint Planning and other Scrum ceremonies to ensure effective delivery of solutions",
      "Contributing to creating an efficient and collaborative coding environment, promoting teamwork, continuous learning, and “vibe coding” culture"
    ],
    technologies: ["Angular", "NodeTS", "Flutter", "PostgreSQL", "My SQL"]
  },
  {
    id: 2,
    title: "System Analyst",
    company: "RSUP dr. Hasan Sadikin (RSHS)",
    location: "Bandung, West Java",
    period: "Feb 2025 - Jul 2025",
    description: "Designed and delivered a fully functional hospital-wide Helpdesk web system replacing social media as the complaint channel. Architected seamless integration with RSHS's legacy infrastructure, enabling efficient complaint routing and synchronization.",
    achievements: [
      "Validated 100% of functional requirements through iterative testing with hospital representatives",
      "Created complete UML documentation (Activity, Use Case, ERD) and maintained requirement traceability",
      "Automated helpdesk message flow using n8n chatbot, improving response time and routing accuracy",
      "Adapted to late requirement changes within 1–2 SCRUM sprints without delaying delivery",
      "Actively contributed to backend debugging and troubleshooting complex system errors"
    ],
    technologies: ["System Analysis", "UML", "n8n", "SCRUM", "Web Development"]
  },
  {
    id: 3,
    title: "Mobile Application Developer",
    company: "BBS Pool & Café",
    location: "Bandung, West Java",
    period: "Jul 2024 - Sep 2024",
    description: "Developed a Flutter mobile app with Firebase for real-time billiard table booking management. Designed admin interfaces for 10+ tables including schedule, price, and transaction control.",
    achievements: [
      "Integrated Midtrans API for secure, cashless payments and managed multiple transaction states",
      "Collaborated with backend team to ensure accurate booking validation, reducing double bookings by >90%",
      "Implemented modular widgets and state management for better scalability and maintainability"
    ],
    technologies: ["Flutter", "Firebase", "Midtrans API", "Mobile Development"]
  },
  {
    id: 4,
    title: "AI & Web Developer",
    company: "HUMIC Laboratory, Telkom University",
    location: "Bandung, West Java",
    period: "Feb 2024 - Jun 2024",
    description: "Built a KNN-based obesity classification model (100% accuracy) and calorie prediction model (R² = 0.42, MAE = 230) using 11,000+ health records. Integrated both models into AIGO, a Flask–Laravel web app for health tracking.",
    achievements: [
      "Collaborated in a 4-member SCRUM team (AI, Backend, Frontend, Scrum Master) ensuring smooth ML–system integration",
      "Contributed to HKI registration (Intellectual Property Rights) of AIGO for its innovation in health-tech personalization",
      "Successfully deployed AI models through Flask API integrated with Laravel system"
    ],
    technologies: ["Python", "Flask", "Laravel", "Machine Learning", "MySQL"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AIGO",
    description: "A web platform that helps users monitor health conditions, calculate BMI, and consult with doctors online. Integrated AI models for obesity classification and calorie prediction, connected through Flask API to a Laravel-based system.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["Laravel", "Flask", "MySQL", "Python", "Bootstrap", "Strava API"],
    skills: ["Artificial Intelligence", "Web Development", "SCRUM"],
    achievement: "Registered under Intellectual Property Rights (HKI)",
    github: "https://github.com/W-zrd/Aigo",
    live: "https://www.aigo.humicprototyping.com/",
    featured: true
  },
  {
    id: 2,
    title: "Transport Berkah Armada",
    description: "A web and mobile application for bus companies to monitor fleets, manage staff, and control financial operations. Mobile app allows drivers and helpers to access routes and upload expense receipts.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["Laravel", "Flutter", "MySQL", "Bootstrap"],
    skills: ["Fullstack Development", "API Integration", "Project Management"],
    achievement: "Complete fleet management solution with mobile and web platforms",
    github: "https://github.com/Fadhil-AS/aljabbar",
    live: null,
    featured: true
  },
  {
    id: 3,
    title: "Transport Berkah — Prototype",
    description: "A Figma prototype app that allows users to find and book public transport routes such as 'Angkot' and city buses. Designed for seamless user experience in public transportation booking.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["Figma"],
    skills: ["UI/UX Design", "Mobile App Prototype"],
    achievement: "Comprehensive prototype for public transport booking system",
    github: null,
    live: " https://bit.ly/TBUser",
    featured: false
  },
  {
    id: 4,
    title: "Natour — Prototype",
    description: "A Figma prototype app for booking nature tourism tickets and renting outdoor activity equipment. Focuses on connecting nature enthusiasts with tourism services.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=srgb&fm=jpg&q=85",
    technologies: ["Figma"],
    skills: ["UI/UX Design", "Project Management"],
    achievement: "Complete tourism booking platform prototype",
    github: null,
    live: "https://bit.ly/NatourPenyediaAlat",
    featured: false
  }
];

// Certifications and Licenses
export const certifications = [
  {
    id: 1,
    name: "Certificate of Creation Registration: AIGO",
    issuer: "Ministry of Law and Human Rights of the Republic of Indonesia",
    date: "September 2024",
    credentialId: null,
    description: "AIGO is an original software work registered under the Certificate of Creation Registration (HKI) by the Ministry of Law and Human Rights of Indonesia, confirming its legal protection as a copyrighted digital creation.",
    icon: "cloud",
    color: "#FF9900",
    link: "https://drive.google.com/file/d/1b0noumC0GGUPrSzlvdztj-YC5xeJQXsl/view?usp=sharing"
  },
  {
    id: 2,
    name: "Meta Front-End Developer",
    issuer: "Meta",
    date: "November 2025",
    credentialId: "9O286GQ4DT57",
    description: "Completed the Meta Front-End Developer Professional Certificate, gaining hands-on experience in HTML, CSS, JavaScript, React, and responsive web design. Developed and deployed interactive, user-centered web applications following industry best practices.",
    icon: "code",
    color: "#00A4E4",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/9O286GQ4DT57"
  },
  {
    id: 3,
    name: "Google IT Support",
    issuer: "Google",
    date: "November 2025",
    credentialId: "R6FBJFBV8II2",
    description: "Completed the Google IT Support Professional Certificate, developing foundational skills in troubleshooting, networking, operating systems, system administration, and security to provide effective IT support.",
    icon: "google",
    color: "#4285F4",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/R6FBJFBV8II2"
  }
];
