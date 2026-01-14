// ================================
// PORTFOLIO CONFIGURATION
// ================================
// Edit this file to customize your portfolio with your own information.
// All personal data, projects, skills, and content are centralized here.

export const portfolioConfig = {
  // --------------------------------
  // PERSONAL INFORMATION
  // --------------------------------
  personal: {
    name: "Bilal Chamseddin",
    title: "Software Engineer",
    tagline: "I design, build, and optimize scalable engineering solutions. Passionate about clean code, system architecture, and creating impactful technology.",
    location: "San Francisco, CA (Remote OK)",
    email: "Chamseddinbilal@gmail.com",
    resumeUrl: "/resume.pdf",
  },

  // --------------------------------
  // QUICK STATS (Hero Section)
  // --------------------------------
  stats: {
    yearsExperience: "5+",
    projectsCompleted: "30+",
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
      username: "Bilalchamseddin",
    },
    email: "Chamseddinbilal@Gmail.com",
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
      skills: ["System Design", "Microservices", "API Design", "Testing", "Agile", "Security"],
    },
  ],

  // --------------------------------
  // EXPERIENCE
  // --------------------------------
  experiences: [
    {
      role: "Robotics Instructor",
      company: "IntelliBots Academy",
      period: "2023 - Present",
      highlights: [
        "Led migration of monolith to microservices, reducing deployment time by 70%",
        "Architected real-time data pipeline processing 1M+ events/day",
        "Mentored team of 5 junior developers",
      ],
    },
   
  // --------------------------------
  // EDUCATION
  // --------------------------------
  education: [
    {
      degree: "Nanotechnology Engineering",
      institution: "University of Waterloo",
      year: "2025-2030",
      
    },
    {
      degree: "Mechatronics Engineering",
      institution: "Toronto Metropolotian University",
      year: "2024-2025 (Transferred)",
     
    },
  ],

  // --------------------------------
  // CERTIFICATIONS
  // --------------------------------
  certifications: [
    "AWS Solutions Architect Professional",
    "Google Cloud Professional Developer",
    "Kubernetes Administrator (CKA)",
    "MongoDB Certified Developer",
  ],

  // --------------------------------
  // FEATURED PROJECTS (Home Page)
  // --------------------------------
  featuredProjects: [
    {
      title: "CloudScale Analytics",
      problem: "Real-time analytics for distributed systems",
      solution: "Built a scalable data pipeline processing millions of events",
      tech: ["Go", "Kafka", "PostgreSQL", "Grafana"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "SecureAuth Platform",
      problem: "Enterprise-grade authentication system",
      solution: "Zero-trust architecture with MFA and SSO integration",
      tech: ["TypeScript", "Node.js", "Redis", "AWS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "DevOps Toolkit",
      problem: "Streamlined deployment workflows",
      solution: "Infrastructure-as-code templates and CI/CD pipelines",
      tech: ["Python", "Terraform", "Docker", "GitHub Actions"],
      github: "https://github.com",
      demo: null,
    },
  ],

  // --------------------------------
  // ALL PROJECTS (Projects Page)
  // --------------------------------
  projects: [
    {
      id: 1,
      title: "CloudScale Analytics",
      description: "Real-time analytics platform for distributed systems monitoring and observability.",
      category: "Systems",
      tech: ["Go", "Kafka", "PostgreSQL", "Grafana", "Prometheus"],
      github: "https://github.com",
      demo: "https://example.com",
      problem: "Organizations struggle to monitor distributed systems effectively, leading to slow incident response times.",
      decisions: "Chose Go for high-performance data processing, Kafka for reliable event streaming, and Prometheus for metrics collection.",
      outcome: "Reduced mean time to detection by 60% and enabled processing of 1M+ events per second.",
    },
    {
      id: 2,
      title: "SecureAuth Platform",
      description: "Enterprise-grade authentication with zero-trust architecture, MFA, and SSO.",
      category: "Software",
      tech: ["TypeScript", "Node.js", "Redis", "AWS", "OAuth 2.0"],
      github: "https://github.com",
      demo: "https://example.com",
      problem: "Legacy authentication systems were vulnerable and didn't support modern security standards.",
      decisions: "Implemented zero-trust architecture with JWT tokens, Redis for session management, and AWS KMS for secrets.",
      outcome: "Secured 100K+ user accounts with 99.99% uptime and zero security breaches.",
    },
    {
      id: 3,
      title: "ML Pipeline Orchestrator",
      description: "Automated machine learning pipeline for training, validation, and deployment.",
      category: "AI / Data",
      tech: ["Python", "TensorFlow", "Airflow", "MLflow", "Docker"],
      github: "https://github.com",
      demo: null,
      problem: "Data scientists spent 70% of time on infrastructure instead of model development.",
      decisions: "Built abstraction layer over Airflow, integrated MLflow for experiment tracking, containerized all stages.",
      outcome: "Reduced model deployment time from weeks to hours, improved experiment reproducibility.",
    },
    {
      id: 4,
      title: "DevOps Toolkit",
      description: "Infrastructure-as-code templates and CI/CD pipeline configurations.",
      category: "Systems",
      tech: ["Python", "Terraform", "Docker", "GitHub Actions", "Kubernetes"],
      github: "https://github.com",
      demo: null,
      problem: "Teams wasted time recreating similar infrastructure and deployment pipelines.",
      decisions: "Created modular Terraform modules, reusable GitHub Actions, and Helm charts.",
      outcome: "Standardized deployments across 10+ teams, reduced setup time by 80%.",
    },
    {
      id: 5,
      title: "Real-time Collaboration API",
      description: "WebSocket-based API for real-time document collaboration and presence.",
      category: "Software",
      tech: ["TypeScript", "WebSocket", "Redis Pub/Sub", "CRDTs", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      problem: "Traditional REST APIs couldn't support real-time collaborative editing requirements.",
      decisions: "Used CRDTs for conflict resolution, WebSockets for real-time sync, Redis for pub/sub.",
      outcome: "Enabled simultaneous editing by 50+ users with sub-100ms sync latency.",
    },
    {
      id: 6,
      title: "Predictive Maintenance System",
      description: "IoT sensor data analysis for predicting equipment failures in manufacturing.",
      category: "AI / Data",
      tech: ["Python", "PyTorch", "TimescaleDB", "Kafka", "React"],
      github: "https://github.com",
      demo: null,
      problem: "Unexpected equipment failures caused costly downtime in manufacturing plants.",
      decisions: "Built time-series models with PyTorch, used TimescaleDB for sensor data, Kafka for streaming.",
      outcome: "Predicted 85% of failures with 24-hour advance notice, saved $2M annually.",
    },
  ],

  // --------------------------------
  // PROJECT CATEGORIES (for filtering)
  // --------------------------------
  projectCategories: ["All", "Software", "Systems", "AI / Data"],

  // --------------------------------
  // OPEN SOURCE CONTRIBUTIONS
  // --------------------------------
  openSourceContributions: [
    { name: "kubernetes/kubernetes", stars: "100K+", description: "Fixed networking issue in pod scheduling" },
    { name: "grafana/grafana", stars: "55K+", description: "Added custom visualization plugin support" },
    { name: "hashicorp/terraform", stars: "38K+", description: "Improved AWS provider documentation" },
  ],

  // --------------------------------
  // FOOTER
  // --------------------------------
  footer: {
    copyright: "Portfolio",
    tagline: "Open to opportunities worldwide. Remote-friendly.",
  },
};

// Type exports for better IDE support
export type PortfolioConfig = typeof portfolioConfig;
export type Project = typeof portfolioConfig.projects[number];
export type Experience = typeof portfolioConfig.experiences[number];
export type Education = typeof portfolioConfig.education[number];
export type FeaturedProject = typeof portfolioConfig.featuredProjects[number];
export type OpenSourceContribution = typeof portfolioConfig.openSourceContributions[number];
