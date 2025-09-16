// src/data/experience.js

const experiences = [
  {
    _id: "67f54453463575f79fe6222a",
    position: "System Analyst & Web Programmer",
    status: "Researchship",
    organization: "Rumah Sakit Hasan Sadikin (RSHS)",
    startYear: "February 2025",
    endYear: "July 2025",
    description:
      "Analyzed and translated user needs into system requirements for a hospital-wide Helpdesk platform, aiming to replace social media as the main complaint channel. Designed system architecture and conducted stakeholder analysis using UML diagrams, including Activity Diagrams, Use Case Diagrams, and Entity Relationship Diagrams (ERD). Collaborated with end users, including Humas and internal hospital units, to iteratively validate requirements through user-centered validation and verification, ensuring alignment with real-world workflows. Facilitated communication between the development team and hospital units to maintain technical clarity and prioritize features effectively within a SCRUM framework. Conducted Specification Walkthroughs with developers to evaluate the clarity and feasibility of requirement documents. Documented system design decisions, data flows, and integration points with existing legacy systems used by Humas, ensuring that the new Helpdesk system remained compatible and seamlessly integrated for complaint routing and tracking. Maintained traceability between problem identification, solution design, and iterative MVP testing based on Lean Startup methodology. Supported frontend and backend developers by clarifying system behavior and bridging the gap between technical implementation and non-technical stakeholders.",
    technologies: ["Jira", "MySQL", "n8n", "Laravel"],
  },
  {
    _id: "67f54453463575f79fe6222a",
    position: "Mobile Application Developer",
    status: "Internship",
    organization: "BBS Pool & Cafe",
    startYear: "July 2024",
    endYear: "September 2024",
    description:
      "Developed a Flutter mobile application for managing billiard table bookings, including time slot selection, real-time availability, and role-based user views. Built admin interfaces to manage operational hours, pricing, and customer data. Integrated Firebase Authentication and Cloud Firestore to enable real-time synchronization of data between users and administrators. Implemented backend logic in Flutter to handle role-based access, data validation, and dynamic schedule calculations. Connected the application to the Midtrans API for secure payment processing, managing different transaction statuses such as success, pending, and expired. Applied a modular widget structure and state management to ensure a scalable and maintainable application architecture.",
    technologies: ["Jira", "Firebase", "Flutter", "Midtrans"],
  },
  {
    _id: "67f54080cedfa5a8afc377f7",
    position: "AI Developer",
    status: "Researchship",
    organization: "HUMIC Engineering Research Center",
    startYear: "February 2024",
    endYear: "June 2024",
    description:
      "Developed a machine learning model using Python and the K-Nearest Neighbors (KNN) algorithm to classify users into obesity categories based on personal health and lifestyle data. Designed a recommendation engine to suggest appropriate physical activities and durations tailored to each classification. Built and deployed a RESTful API using Flask to integrate the machine learning model with the Laravel-based AIGO web application. Contributed to the development of AIGO’s web interface using Laravel, focusing on integrating API responses and managing user interaction with ML-based features. Performed data preprocessing and feature selection to improve prediction accuracy and provide meaningful health insights. Collaborated with frontend and backend teams to ensure smooth system integration and alignment with health standards provided by domain experts. Supported the successful submission of the AIGO system for intellectual property rights (HKI) registration as a recognized innovation in health technology.",
    technologies: ["Jira", "MySQL", "Flask", "Python", "Azure"],
  },
];

export default experiences;
