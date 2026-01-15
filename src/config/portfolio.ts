// ================================
// PORTFOLIO CONFIGURATION
// ================================
// Edit this file to customize your portfolio content.
// All personal information, projects, skills, and other content
// can be modified here without touching the code.

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
    // Hero image - replace with your own image URL or local path
    heroImage: "/placeholder.svg",
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
    },
    {
      degree: "Mechatronics Engineering (Transferred)",
      institution: "Toronto Metropolitan University",
      year: "2024-2025",
      gpa: "3.8 / 4.0",
      courses: ["Mechanics", "Waves & Fields", "Programming Fundamentals", "Materials Science"],
    },
  ],

  // --------------------------------
  // CERTIFICATIONS & AWARDS
  // --------------------------------
  certificationsAndAwards: [
    {
      title: "Sir Isaac Newton Physics Exam",
      description: "66th in Canada, 109th in World",
      type: "award", // "certification" or "award"
      year: "2024",
    },
    {
      title: "Dean's List",
      description: "TMU Fall & Winter Term",
      type: "award",
      year: "2024-2025",
    },
  ],

  // --------------------------------
  // ALL PROJECTS
  // Projects with full details for expandable cards
  // --------------------------------
  projects: [
    {
      id: 1,
      title: "Triboelectric Nanogenerator (TENG)",
      summary: "Designed and fabricated a contact-separation triboelectric structure for energy harvesting.",
      description: "Accomplished functional energy harvesting as measured by 1.13 V peak output, by designing and fabricating a contact–separation triboelectric structure under a 2-hour constraint.",
      category: "Mechanical",
      tech: ["CAD", "Prototyping", "Nanomaterials"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      // Engineering Details
      problem: "Needed to create a sustainable energy harvesting solution that could convert mechanical motion into electrical energy efficiently.",
      decisions: "Chose contact-separation mode for higher output. Selected PTFE and aluminum as triboelectric materials for optimal electron transfer. Designed modular structure for easy assembly.",
      outcome: "Achieved 1.13V peak output within 2-hour build constraint. Demonstrated viability of triboelectric technology for small-scale energy harvesting applications.",
    },
    {
      id: 2,
      title: "Automatic Cat Feeder",
      summary: "Arduino-based automated pet feeding system with precise timing and 3D-printed components.",
      description: "Accomplished scheduled automation as measured by ±2 s timing accuracy and mechanical robustness measured by 30+ successful dispense cycles, by programming Arduino-based motor control and designing 3D-printed components.",
      category: "Robotics",
      tech: ["Arduino", "CAD", "3D Printing", "Electronics"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Pet owners need reliable automated feeding solutions that maintain precise schedules without manual intervention.",
      decisions: "Used Arduino for programmable timing control. Designed custom 3D-printed hopper and dispensing mechanism. Implemented stepper motor for precise portion control.",
      outcome: "Achieved ±2s timing accuracy across 30+ successful dispense cycles. Created reliable, low-cost automated feeding solution.",
    },
    {
      id: 3,
      title: "3D-Printed Robotic Arm",
      summary: "4-DOF articulated robotic arm with servo control and precision positioning.",
      description: "Accomplished articulated motion as measured by 4 degrees of freedom and ±5° repeatability, by assembling and programming servo-controlled 3D-printed joints.",
      category: "Robotics",
      tech: ["Arduino", "Servo Control", "Mechanical Design"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Building an accessible, educational robotic arm that demonstrates fundamental robotics principles.",
      decisions: "Selected servo motors for precise angular control. Designed modular joint system for easy assembly and maintenance. Used PLA for structural components.",
      outcome: "Achieved 4 degrees of freedom with ±5° repeatability. Created functional demonstration platform for robotics education.",
    },
    {
      id: 4,
      title: "Interactive Hungry Robot",
      summary: "Autonomous robot with ultrasonic sensing and real-time object detection.",
      description: "Accomplished autonomous object detection as measured by 2–40 cm sensing range and <0.5 s reaction time, by integrating ultrasonic sensors and motorized actuation.",
      category: "Robotics",
      tech: ["Arduino", "Ultrasonic Sensors", "Embedded Control"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Creating an engaging interactive robot that demonstrates sensor integration and autonomous behavior.",
      decisions: "Used HC-SR04 ultrasonic sensor for reliable distance measurement. Implemented interrupt-driven detection for fast response times. Designed expressive mechanical movements.",
      outcome: "Achieved 2-40cm sensing range with <0.5s reaction time. Created engaging demonstration of embedded systems and sensor integration.",
    },
    {
      id: 5,
      title: "2D Platformer Game",
      summary: "Unity-based platformer with physics, AI, scoring system, and checkpoints.",
      description: "Accomplished game functionality as measured by fully implemented player physics, AI, scoring, and checkpoints, by building a 2D platformer in Unity with C# and OOP design principles.",
      category: "Software",
      tech: ["Unity", "C#", "Game Design", "OOP", "Physics"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Learning game development fundamentals through building a complete, playable platformer game.",
      decisions: "Used Unity for rapid prototyping and built-in physics. Applied OOP principles for modular game architecture. Implemented state machines for enemy AI.",
      outcome: "Created fully functional platformer with player physics, enemy AI, scoring system, and checkpoint mechanics. Demonstrated proficiency in game development principles.",
    },
  ],

  // --------------------------------
  // PROJECT CATEGORIES (for filtering)
  // --------------------------------
  projectCategories: ["All", "Mechanical", "Software", "Robotics"],

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
export type CertificationOrAward = typeof portfolioConfig.certificationsAndAwards[number];
