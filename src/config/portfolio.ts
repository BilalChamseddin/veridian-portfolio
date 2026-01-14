// ================================
// PORTFOLIO CONFIGURATION
// ================================

export const portfolioConfig = {
  // --------------------------------
  // PERSONAL INFORMATION
  // --------------------------------
  personal: {
    name: "Bilal Chamseddin",
    title: "Waterloo Engineer",
    tagline:
      "I design, build, and optimize engineering solutions in robotics, electronics, and software. Passionate about creating impactful technology and hands-on projects.",
    location: "Toronto, Canada",
    email: "Chamseddinbilal@gmail.com",
    resumeUrl: "/resume.pdf",
  },

  // --------------------------------
  // QUICK STATS (Hero Section)
  // --------------------------------
  stats: {
    projectsCompleted: "6",
    technologies: "15+",
  },

  // --------------------------------
  // SOCIAL LINKS
  // --------------------------------
  social: {
    github: {
      url: "https://github.com/BilalChamseddin",
      username: "BilalChamseddin",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/bilal-chamseddin-00a896383/",
      username: "BilalChamseddin",
    },
    email: "Chamseddinbilal@gmail.com",
  },

  // --------------------------------
  // NAVBAR
  // --------------------------------
  navbar: {
    logo: "BC",
  },

  // --------------------------------
  // SKILLS
  // --------------------------------
  skills: [
    {
      title: "Programming Languages",
      skills: ["Python", "Arduino", "Java", "C#", "C++"],
    },
    {
      title: "Mechanical & Design",
      skills: ["Solidworks", "Fusion 360", "3D Printing", "Prototyping", "Mechanical Assembly"],
    },
    {
      title: "Software & Tools",
      skills: ["Git", "Unity", "Microsoft Office", "AutoCAD"],
    },
    {
      title: "Engineering Concepts",
      skills: ["Embedded Systems", "Robotics", "Circuit Design", "Sensors", "Actuators"],
    },
  ],

  // --------------------------------
  // EXPERIENCE
  // --------------------------------
  experiences: [
    {
      role: "Robotics Instructor",
      company: "IntelliBots Academy",
      period: "June 2023 - Present",
      highlights: [
        "Accomplished hands-on robotics instruction as measured by mentoring 50+ students, by delivering Arduino, Python, CAD, and mechanical design projects.",
        "Accomplished curriculum execution as measured by 10+ completed builds, by guiding students through wiring, debugging, and iterative prototyping."
      ],
    },
    {
      role: "Front Desk & Facility Maintenance",
      company: "Hub Climbing — Mississauga",
      period: "June 2025 - Present",
      highlights: [
        "Accomplished operational safety as measured by 100% equipment uptime, by performing inspections and mechanical troubleshooting on auto-belay systems."
      ],
    },
  ],

  // --------------------------------
  // EDUCATION
  // --------------------------------
  education: [
    {
      degree: "Nanotechnology Engineering",
      institution: "University of Waterloo",
      year: "2025-2030",
      gpa: "3.7 / 4.0",
      courses: ["Linear Algebra", "Calculus I/II", "Circuits", "Computational Methods"],
      awards: ["Sir Isaac Newton Physics Exam (66th Canada, 109th World)"],
    },
    {
      degree: "Mechatronics Engineering (Transferred)",
      institution: "Toronto Metropolitan University",
      year: "2024-2025",
      gpa: "3.8 / 4.0",
      courses: ["Mechanics", "Waves & Fields", "Programming Fundamentals", "Materials Science"],
      awards: ["Dean’s List (Fall & Winter)"],
    },
  ],

  // --------------------------------
  // CERTIFICATIONS
  // --------------------------------
  certifications: [
    "Dean's List - TMU Fall & Winter Term",
  ],

  // --------------------------------
  // FEATURED PROJECTS (Home Page)
  // --------------------------------
  featuredProjects: [
    {
      title: "Triboelectric Nanogenerator (TENG)",
      description: "Accomplished functional energy harvesting as measured by 1.13 V peak output, by designing and fabricating a contact–separation triboelectric structure under a 2-hour constraint.",
      tech: ["CAD", "Prototyping", "Nanomaterials"],
      github: null,
      demo: null,
    },
    {
      title: "Automatic Cat Feeder",
      description: "Accomplished scheduled automation as measured by ±2 s timing accuracy, by programming Arduino-based motor control and designing 3D-printed components for 30+ successful dispense cycles.",
      tech: ["Arduino", "CAD", "3D Printing", "Electronics"],
      github: null,
      demo: null,
    },
    {
      title: "3D-Printed Robotic Arm",
      description: "Accomplished articulated motion as measured by 4 degrees of freedom and ±5° repeatability, by assembling and programming servo-controlled 3D-printed joints.",
      tech: ["Arduino", "Servo Control", "Mechanical Design"],
      github: null,
      demo: null,
    },
  ],

  // --------------------------------
  // ALL PROJECTS (Projects Page)
  // --------------------------------
  projects: [
    {
      id: 1,
      title: "Triboelectric Nanogenerator (TENG)",
      description: "Accomplished functional energy harvesting as measured by 1.13 V peak output, by designing and fabricating a contact–separation triboelectric structure under a 2-hour constraint.",
      category: "Mechanical",
      tech: ["CAD", "Prototyping", "Nanomaterials"],
      github: null,
      demo: null,
    },
    {
      id: 2,
      title: "Automatic Cat Feeder",
      description: "Accomplished scheduled automation as measured by ±2 s timing accuracy and mechanical robustness measured by 30+ successful dispense cycles, by programming Arduino-based motor control and designing 3D-printed components.",
      category: "Robotics",
      tech: ["Arduino", "CAD", "3D Printing", "Electronics"],
      github: null,
      demo: null,
    },
    {
      id: 3,
      title: "3D-Printed Robotic Arm",
      description: "Accomplished articulated motion as measured by 4 degrees of freedom and ±5° repeatability, by assembling and programming servo-controlled 3D-printed joints.",
      category: "Robotics",
      tech: ["Arduino", "Servo Control", "Mechanical Design"],
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: "Interactive Hungry Robot",
      description: "Accomplished autonomous object detection as measured by 2–40 cm sensing range and <0.5 s reaction time, by integrating ultrasonic sensors and motorized actuation.",
      category: "Robotics",
      tech: ["Arduino", "Ultrasonic Sensors", "Embedded Control"],
      github: null,
      demo: null,
    },
    {
      id: 5,
      title: "2D Platformer Game",
      description: "Accomplished game functionality as measured by fully implemented player physics, AI, scoring, and checkpoints, by building a 2D platformer in Unity with C# and OOP design principles.",
      category: "Software",
      tech: ["Unity", "C#", "Game Design", "OOP", "Physics"],
      github: null,
      demo: null,
    },
  ],

  // --------------------------------
  // PROJECT CATEGORIES (for filtering)
  // --------------------------------
  projectCategories: ["All", "Mechanical", "Software", "Robotics"],

  // --------------------------------
  // OPEN SOURCE CONTRIBUTIONS
  // --------------------------------
  openSourceContributions: [],

  // --------------------------------
  // FOOTER
  // --------------------------------
  footer: {
    copyright: "Portfolio",
    tagline: "Open to opportunities worldwide. Remote-friendly.",
  },
};

// Type exports
export type PortfolioConfig = typeof portfolioConfig;
export type Project = typeof portfolioConfig.projects[number];
export type Experience = typeof portfolioConfig.experiences[number];
export type Education = typeof portfolioConfig.education[number];
export type FeaturedProject = typeof portfolioConfig.featuredProjects[number];
export type OpenSourceContribution = typeof portfolioConfig.openSourceContributions[number];
