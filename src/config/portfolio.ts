// ================================
// PORTFOLIO CONFIGURATION
// ================================
// Edit this file to customize your portfolio content.
// All personal information, projects, skills, and other content
// can be modified here without touching the code.

export const portfolioConfig = {
  personal: {
    name: "Bilal Chamseddin",
    title: "Engineering Student at University of Waterloo",
    tagline: "I design, build, and optimize engineering solutions in robotics, electronics, and software. Passionate about creating impactful technology and hands-on projects.",
    email: "chamseddinbilal@gmail.com",
    phone: "+1 (905) 904-2267",
    location: "Toronto, Canada",
    resumeUrl: "/bilalchamseddinresume.pdf",
    universityEmail: "bchamsed@uwaterloo.ca",
  },
  social: {
    github: { username: "BilalChamseddin", url: "https://github.com/BilalChamseddin" },
    linkedin: { username: "bilal-chamseddin", url: "https://linkedin.com/in/bilal-chamseddin" },
    email: "chamseddinbilal@gmail.com",
  },

  // --------------------------------
  // NAVBAR
  // --------------------------------
  navbar: {
    logo: "BC",
  },

  // --------------------------------
  // SKILLS (Grouped by Category)
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
      title: "Electronics & Robotics",
      skills: ["Circuit Design", "Sensors", "Actuators", "Embedded Systems", "Robotics"],
    },
    {
      title: "Software & Tools",
      skills: ["Git", "Unity", "Microsoft Office", "MATLAB"],
    },
    {
      title: "Engineering Concepts",
      skills: ["Control Systems", "Signal Processing", "Mechanics", "Thermodynamics"],
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
        "Accomplished improved student mechanical design skills as measured by 80% of students completing CAD assemblies in Fusion 360, by delivering structured lessons in part modeling, assemblies, and design principles using industry-standard CAD tools.",
        "Accomplished the successful mechanical integration of actuators and drivetrain systems as measured by student robots completing autonomous challenges, by guiding hands-on builds that combined motors, sensors, and structural components into working robotic mechanisms."
      ],
    },
    {
      role: "Front Desk & Facility Maintenance",
      company: "Hub Climbing — Mississauga",
      period: "June 2025 – Present",
      highlights: [
        "Ensured operational safety with 100% equipment uptime by performing inspections and troubleshooting on auto-belay systems.",
        "Assisted members and visitors at the front desk, providing excellent customer service and guidance.",
        "Maintained facility cleanliness, organization, and adherence to safety protocols."
      ],
    }
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
      description: "Challenging exam for top high school students worldwide (~3,000 participants) - 66th in Canada - 109th in World",
      type: "award", // "certification" or "award"
      year: "2024",
    },
    {
      title: "Dean's List",
      description: "Awarded for maintaining top academic standing in fall and winter terms.",
      type: "award",
      year: "2024-2025",
    },
    {
      title: "MATLAB Onramp",
      description: "Completed introductory MATLAB programming and numerical computing training",
      type: "certification", // "certification" or "award"
      year: "2026",
    },
    {
      title: "Revan Hackathon — First Place",
      year: 2022,
      description: "Secured first place in the Revan Hackathon for developing an innovative tech solution under tight deadlines.",
      type: "award"
    }
  ],

  // --------------------------------
  // ALL PROJECTS
  // Projects with full details for modal view
  // --------------------------------
  projects: [
    {
      id: 1,
      title: "Triboelectric Nanogenerator (TENG)",
      summary: "Designed and fabricated a contact-separation triboelectric structure for energy harvesting.",
      description: "Accomplished functional energy harvesting as measured by 1.13 V peak output, by designing and fabricating a contact–separation triboelectric structure under a 2-hour constraint.",
      category: "Mechanical",
      tech: ["CAD", "Prototyping", "Nanomaterials"],
      image: "/pic/teng.jpg",
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
      summary: "Microcontroller-based automated feeding system with custom 3D-printed enclosure, user interface, and sensor-based safety controls.",
      description: "Accomplished reliable autonomous feeding as measured by consistent scheduled and manual dispensing with portion control, by designing and 3D-printing a custom electronics enclosure, building a servo-driven mechanical release system, wiring all electronics, and programming time-based control logic with integrated safety sensors.",
      category: "Robotics",
      tech: ["Arduino", "Servo Motor", "Electronics", "Mechanical Design", "3D Printing", "Wiring", "Sensors"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Pet owners need a reliable feeding system that allows scheduled and manual control, portion adjustment, and safe operation during power outages.",
      decisions: "Designed and 3D-printed a custom enclosure to securely house all electronics and user controls. Implemented a servo-based dispensing mechanism with adjustable rotation time for portion control. Integrated a real-time display and onboard buttons for setting feed times and manual dispensing. Added a bowl detection sensor to prevent overfilling and a backup dispensing sensor to ensure food release during power outages. Completed all electrical wiring and system integration.",
      outcome: "Delivered a fully integrated automated feeding system with scheduled and manual control, adjustable portions, real-time display, overflow prevention, and fail-safe operation during power outages, all housed in a custom-designed 3D-printed enclosure."
    },
    {
      id: 3,
      title: "3D-Printed Robotic Arm",
      summary: "4-DOF articulated robotic arm built from 3D-printed components with servo-based joint actuation and Arduino control.",
      description: "Accomplished multi-axis articulated motion as measured by 4 independent degrees of freedom and repeatable joint positioning, by assembling a fully 3D-printed mechanical structure and programming servo-controlled joints using Arduino.",
      category: "Robotics",
      tech: ["Arduino", "Servo Motors", "3D Printing", "Mechanical Assembly", "Electronics"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "An affordable and educational robotic arm was needed to demonstrate core robotics concepts such as kinematics, joint actuation, and coordinated motion.",
      decisions: "Used 3D-printed structural components for the base, links, and joints to reduce cost and allow rapid iteration. Selected servo motors for direct joint actuation and simple control. Followed a modular joint design to simplify assembly and maintenance. Completed full mechanical assembly and electrical wiring to integrate all servos with the Arduino controller.",
      outcome: "Successfully built and operated a 4-DOF robotic arm capable of coordinated multi-joint motion, providing a functional platform for learning mechanical design, actuation, and embedded control."
    },
    {
      id: 4,
      title: "Interactive Hungry Robot",
      summary: "Autonomous interactive robot using ultrasonic sensing and motorized actuation to respond to nearby objects.",
      description: "Accomplished autonomous interaction as measured by reliable object detection and immediate mechanical response, by integrating an ultrasonic distance sensor with Arduino-based control and designing motor-driven actuation.",
      category: "Robotics",
      tech: ["Arduino", "Ultrasonic Sensor", "3D Printing", "Mechanical Design", "Embedded Systems"],
      image: "/pic/trash.jpg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "An engaging robot was needed to demonstrate real-time sensor integration and autonomous mechanical response to environmental stimuli.",
      decisions: "Replaced the original sensor design with an ultrasonic distance sensor for more reliable object detection. Designed and assembled a 3D-printed mechanical structure with a motorized 'mouth' mechanism to simulate eating motion. Programmed Arduino control logic to trigger actuation based on distance thresholds. Completed full wiring and system integration.",
      outcome: "Successfully built an interactive robot that detects nearby objects using ultrasonic sensing and responds with mechanical motion, demonstrating effective integration of sensors, actuation, and embedded control in a physical system."
    },
    {
      id: 5,
      title: "2D Platformer Game",
      summary: "Unity-based platformer with physics, AI, scoring system, and checkpoints.",
      description: "Accomplished game functionality as measured by fully implemented player physics, AI, scoring, and checkpoints, by building a 2D platformer in Unity with C# and OOP design principles.",
      category: "Software",
      tech: ["Unity", "C#", "Game Design", "OOP", "Physics"],
      image: "/pic/game.jpg",
      github: null,
      demo: null,
      comingSoon: false,
      problem: "Learning game development fundamentals through building a complete, playable platformer game.",
      decisions: "Used Unity for rapid prototyping and built-in physics. Applied OOP principles for modular game architecture. Implemented state machines for enemy AI.",
      outcome: "Created fully functional platformer with player physics, enemy AI, scoring system, and checkpoint mechanics. Demonstrated proficiency in game development principles.",
    },
    {
      id: 6,
      title: "3D-Printed Conveyor Belt System",
      summary: "Fully 3D-printed conveyor belt mechanism driven by gear transmission and designed for autonomous operation.",
      description: "Accomplished mechanical power transmission as measured by successful belt motion using gear-driven actuation, by designing and 3D-printing interlocking gears, rollers, and structural components for a functional conveyor system.",
      category: "Mechanical",
      tech: ["3D Printing", "Mechanical Design", "Gears", "Power Transmission", "CAD"],
      image: "/placeholder.svg",
      github: null,
      demo: null,
      comingSoon: true,
      problem: "Small-scale automation systems require compact, low-cost conveyor solutions to demonstrate material handling and mechanical power transmission.",
      decisions: "Designed all structural components, rollers, and gear trains to be fully 3D printable for rapid prototyping and low cost. Selected gear-driven transmission to convert motor rotation into controlled belt motion. Planned integration of a battery-powered motor system to enable fully autonomous operation without external power.",
      outcome: "Currently developing a fully 3D-printed conveyor belt system with gear-driven motion, with planned expansion to battery-powered autonomous operation."
    },
    {
      id: 7,
      title: "Distribution Fitting App",
      summary: "Interactive Python app for fitting probability distributions to datasets.",
      description: "Developed an interactive Python application that fits multiple probability distributions to data, providing statistical analysis and visualization of goodness-of-fit metrics.",
      category: "Software",
      tech: ["Python", "Data Analysis", "Probability Distributions", "Matplotlib", "SciPy"],
      image: "/pic/distribution-fitting.jpg", // add an image if you have one
      github: "https://github.com/BilalChamseddin/Distribution-Fitting-App-Bilal",
      demo: null,
      comingSoon: false,
      // Engineering/Project Details
      problem: "Data analysts needed an easy way to identify which probability distributions best model their datasets for statistical analysis and forecasting.",
      decisions: "Built the app in Python using SciPy for distribution fitting and Matplotlib for visualization. Designed the interface to allow easy selection of distributions and display of goodness-of-fit metrics.",
      outcome: "Successfully created an interactive tool that allows users to fit and compare multiple probability distributions, helping with exploratory data analysis and statistical modeling."
    }
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