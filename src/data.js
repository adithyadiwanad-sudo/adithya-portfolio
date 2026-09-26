// Edit portfolio content and links here. Use a local public/ image for reliable production hosting.
export const profile = {
  name: "ADITHYA DIWANAD",
  headline:
    "Pre-Final Year Information Science & Engineering Student | Full-Stack & AI Developer",
  bio: "Specializing in Java (Data Structures & Algorithms), Node.js backend architectures, REST API orchestration, and GenAI workflows.",
  email: "adithyadiwanad@gmail.com",
  resumeUrl: "/Adithya_Diwanad_FullStack_Developer_Resume.pdf",
  resumeFilename: "Adithya_Diwanad_FullStack_Developer_Resume.pdf",
  imageUrl: "/adithya-portrait-pose.png",
  imageSourceUrl: "/adithya-portrait-pose.png",
};

// Social Links
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/adithyadiwanad-sudo",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aditya-diwanad",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/ADITYA_DIWANAD/",
    icon: "code",
  },
  {
    name: "Email",
    url: "mailto:adithyadiwanad@gmail.com",
    icon: "mail",
  },
];

// Projects

export const projects = [
  {
    name: "WanderLust",
    showcaseOrder: 1,
    featured: true,
    pipeline: ["Client / EJS", "Express API", "MongoDB"],
    subtitle: "Full-Stack Accommodation Listing Platform",
    category: "FULL-STACK DEVELOPMENT",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap"],
    bullets: [
      "Engineered RESTful CRUD routes with Joi validation (improving API throughput by 20%).",
      "Modeled relational schemas with cascade review deletion.",
      "Implemented centralized error handling.",
    ],
    github: "https://github.com/adithyadiwanad-sudo/wanderlust-project",
    demo: null,
    icon: "layers",
    status: "In Development",
  },
  {
    name: "SpeakLog AI",
    showcaseOrder: 3,
    featured: true,
    pipeline: ["Voice input", "Whisper + AI", "Structured JSON"],
    subtitle: "Voice-Driven Field Workflow Automation",
    category: "AI & AUTOMATION",
    status: "In Development",
    stack: ["Python", "Whisper", "REST APIs", "MongoDB"],
    bullets: [
      "Architected an engine converting unstructured audio into structured JSON.",
      "Integrated end-to-end Whisper transcription and field extraction, achieving 88% routing accuracy.",
    ],
    github: "https://github.com/adithyadiwanad-sudo/plan2field-ai",
    demo: null,
    // "demo": "https://plan2field-ai-4yswnzrrobajvssvdvyadk.streamlit.app/",
    icon: "audio",
  },
  {
  name: "NeuroShield AI",
  featured: true,
  showcaseOrder: 2,
  pipeline: ["Multi-Modal Signals", "Agentic AI & XAI", "Automated Mitigation"],
  subtitle: "AI-Powered Cyber SOC & Threat Detection Command Center",
  category: "CYBERSECURITY & AI",
  status: "In Development",
  stack: ["React", "Tailwind CSS", "Three.js", "Web Audio API", "Python"],
  bullets: [
    "Engineered a high-density 65/35 dual-mode SOC command center with real-time 3D threat topology and time-travel forensic playback.",
    "Built a multi-modal detection engine for network anomalies, voice deepfakes (MFCC analysis), and visual QR/receipt phishing with XAI explainability."
  ],
  github: "https://github.com/adithyadiwanad-sudo/NeuroShield-AI-Platform",
  createdAt: "2026-09-05T11:34:56Z",
  demo: null,
  icon: "shield-alert"
},
  {
    name: "Student Performance Predictor",
    subtitle: "ML Prediction API",
    category: "MACHINE LEARNING",
    stack: ["Python", "Scikit-learn", "Pandas", "Flask"],
    bullets: [
      "Trained a Scikit-learn decision tree pipeline to predict academic performance from feature sets.",
      "Deployed model inference endpoints via a Flask REST API to deliver real-time predictions.",
    ],
    github:
      "https://github.com/adithyadiwanad-sudo/STUDENT-PERFORMANCE-PREDICTOR",
    createdAt: "2026-08-10T06:48:11Z",
    demo: null,
    icon: "chart",
  },
];

export const utilities = [
  {
    name: "Passport Tracking Management",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Multi-stage status tracking application",
    url: "https://github.com/adithyadiwanad-sudo/passport_tracking_system",
    createdAt: "2025-11-18T14:18:56Z",
  },
  {
    name: "Spotify Mini Clone",
    stack: ["HTML", "CSS"],
    description: "Responsive UI clone focused on DOM layout and media elements",
    url: "https://github.com/adithyadiwanad-sudo/spotify-mini-project",
    createdAt: "2025-11-07T13:08:00Z",
  },
  {
    name: "Simon Says Game",
    stack: ["JavaScript"],
    description: "Interactive JavaScript state management game",
    url: "https://github.com/adithyadiwanad-sudo/simon-says-game",
    createdAt: "2026-03-20T06:38:26Z",
  },
];

export const skills = [
  {
    name: "Languages",
    items: ["Java", "JavaScript", "Python"],
  },
  {
    name: "Core CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "REST APIs",
      "System Architecture",
      "CRUD Operations",
      "Software Development Life Cycle (SDLC)",
    ],
  },
  {
    name: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "EJS",
    ],
  },
  {
    name: "Backend & Databases",
    items: [
      "REST APIs",
      "Node.js",
      "Express.js",
      "Flask",
      "MongoDB",
      "Mongoose",
      "SQL",
      "Spring Boot",
    ],
  },
  {
    name: "Tools & Frameworks",
    items: ["Git", "GitHub", "VS Code", "Postman", "Kafka"],
  },
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    url: "https://drive.google.com/file/d/1A0Ta6z4WngYGYOLbjlBqHdBzomWl3k7d/view?usp=sharing",
  },
  {
    name: "Data Structures & Algorithms in Java (Apna College)",
    url: "https://drive.google.com/file/d/1Y6-pEOfAZW4t1xxn4qf-xNqBG9uKci0q/view?usp=sharing",
  },
  {
    name: "Software Engineering Job Simulation (J.P. Morgan via Forage)",
    url: "https://drive.google.com/file/d/1royBDu5KaTPM4800TP1g3pMWznpRmD8w/view?usp=sharing",
  },
  {
    name: "Technology Job Simulation (Deloitte Australia via Forage)",
    url: "https://drive.google.com/file/d/1T6-xgjjIlIL-vOdbaP8G5Unmhz95irVr/view?usp=sharing",
  },
  {
    name: "Naukri NCAT Exam (National Code Challenge)",
    detail: "Rank Top ~7K / Participation Certification",
    url: "https://drive.google.com/file/d/1WLBfSEIMDJCIvDwdHRTJYKhUcJ89GZEF/view?usp=sharing",
  },
];
