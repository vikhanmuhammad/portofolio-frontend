// src/data/projects.js

const projects = [
    {
      _id: "67f5459986bf30120d349d49",
      title: "AIGO",
      position: "AI Developer",
      description:
        "AIGO is a website that can be used by users to monitor their health conditions. Users can find out their body weight category index (BMI). Users who are already indicated as obese can also consult online or offline with doctors who have collaborated with AIGO. Users also get suggestions for exercises or activities that they should do to maintain their weight and health.",
      technologies: ["Python", "Flask"],
      link: [
        "https://aigo.humicprototyping.com",
        "https://tinyurl.com/HKIAIGO",
      ],
      type: "Website",
      motto: "Eat Smart, Move Better",
    },
    {
      _id: "67f545af86bf30120d349d4b",
      title: "BBS Booking System",
      position: "Mobile Application Developer",
      description:
        "BBS Booking System is an application created for consumers and admins of BBS Pool & Cafe Bandung. This application allows consumers to book billiard tables and directly connect to the BBS Pool & Cafe admin.",
      technologies: ["Flutter", "Firebase"],
      link: ["https://tinyurl.com/BBSCafeapk"],
      motto: "Easy Book",
      type: "Mobile App",
    },
    {
      _id: "67f545d286bf30120d349d4e",
      title: "Natour",
      position: "UI/UX Designer",
      description:
        "Natour is a UI/UX prototype for an application for booking tickets for nature tourism and hiking destinations as well as renting outdoor activity equipment.",
      technologies: ["Figma"],
      link: [
        "https://bit.ly/NatourTraveler",
        "https://bit.ly/NatourPenyediaAlat",
        "https://bit.ly/NatourAdmin",
      ],
      motto: "Friends of Nature Lovers",
      type: "Web & Mobile App",
    },
    {
      _id: "67f546671b8b519013edb66c",
      title: "Transport Berkah Armada",
      position: "Full-Stack Mobile & Web Developer",
      description:
        "Transport Berkah Armada is a multiplatform application for monitoring company fleets, managing drivers, helpers, and company finances efficiently. Its website is used by bus companies for fleet management, while the mobile app helps drivers and helpers track routes and upload trip expense proofs.",
      technologies: ["Laravel", "Bootstrap", "Flutter"],
      link: [
        "www.transportberkaharmada.my.id",
        "https://github.com/vikhanmuhammad/TBA_mobile",
      ],
      motto: "Ease of Company Vehicle Monitoring",
      type: "Web & Mobile App",
    },
    {
      _id: "67f546a91b8b519013edb670",
      title: "ArchiGuide",
      position: "VSCode Extension Developer",
      description:
        "ArchiGuide is a VSCode extension that acts as a prompt director for GitHub Copilot Agent. Instead of calling AI APIs directly, it guides users through a structured 5-step flow, from idea and system description to document generation, HTML prototype design, tech stack selection, and final project scaffold, requiring no API keys and working entirely through the VSCode Extension API and local file system.",
      technologies: ["TypeScript", "VSCode Extension API", "GitHub Copilot"],
      link: [
        "https://marketplace.visualstudio.com/items?itemName=vikhandev.archiguide",
      ],
      motto: "From Idea to Architecture, Guided",
      type: "VSCode Extension",
    },
  ];
  
  export default projects;
  