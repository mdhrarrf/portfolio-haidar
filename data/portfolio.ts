export const portfolioData = {
  hero: {
    name: "Muhammad Haidar Almer Rafif",
    branding: "Haidar",
    roles: [
      "Software Developer",
      "Frontend Engineer",
      "Mobile Developer",
      "Builder of Practical Digital Products"
    ],
    description: "A 12th-grade Software Engineering (PPLG) student passionate about building clean, scalable, and premium digital experiences. Currently looking for an internship (PKL) to apply my skills in a professional environment.",
    primaryCTA: "View Projects",
    secondaryCTA: "Contact Me"
  },
  about: {
    title: "About Me",
    content: [
      "I am a 12th-grade student at SMKN 1 Cianjur, majoring in Software Engineering (PPLG). My focus is on web and mobile development.",
      "I have a strong interest in clean UI, scalable architecture, and building digital products that are actually useful. I believe that good design is as important as good code.",
      "My goal for my upcoming internship (PKL) is to work with experienced developers, contribute to real-world projects, and continuously improve my problem-solving skills."
    ]
  },
  skills: {
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" }
    ],
    backend: [
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" }
    ],
    mobile: [
      { name: "Flutter", level: "Intermediate" },
      { name: "React Native", level: "Beginner" }
    ],
    database: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Beginner" },
      { name: "Supabase", level: "Beginner" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" }
    ]
  },
  projects: [
    {
      id: "konsentra",
      title: "KONSENTRA",
      description: "A comprehensive school management and concentration tracking system.",
      technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
      features: [
        "Student attendance and grading",
        "Concentration path mapping",
        "Role-based access control (Admin, Teacher, Student)"
      ],
      github: "https://github.com/haidar/konsentra", // Placeholder
      demo: "https://konsentra.demo", // Placeholder
      status: "Completed",
      thumbnail: "/projects/konsentra.jpg" // Placeholder image path
    },
    {
      id: "library-system",
      title: "Sistem Perpustakaan",
      description: "A digital library management system for book borrowing and returning.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      features: [
        "Book catalog with search and filters",
        "Borrowing and return tracking",
        "User dashboard"
      ],
      github: "https://github.com/haidar/library", // Placeholder
      demo: "https://library.demo", // Placeholder
      status: "In Development",
      thumbnail: "/projects/library.jpg"
    },
    {
      id: "muslim-app",
      title: "Muslim App",
      description: "A mobile application providing prayer times, Quran reading, and Qibla direction.",
      technologies: ["Flutter", "Dart", "REST API"],
      features: [
        "Accurate prayer times based on location",
        "Full Quran with translations",
        "Qibla compass"
      ],
      github: "https://github.com/haidar/muslim-app", // Placeholder
      status: "Completed",
      thumbnail: "/projects/muslim-app.jpg"
    }
  ],
  education: [
    {
      school: "SMKN 1 Cianjur",
      major: "Software Engineering (PPLG)",
      year: "2022 - Present",
      status: "12th Grade"
    }
  ],
  contact: {
    email: "haidar@example.com", // Placeholder
    github: "https://github.com/haidar", // Placeholder
    linkedin: "https://linkedin.com/in/haidar", // Placeholder
    instagram: "https://instagram.com/haidar" // Placeholder
  }
};
