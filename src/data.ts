export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5 (or percentage)
  category: 'technical' | 'soft' | 'tool';
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  aboutMe: string;
  careerObjective: string;
  education: EducationItem[];
  skills: SkillItem[];
  strengths: string[];
  languages: string[];
  projects: ProjectItem[];
}

export const resumeData: PersonalInfo = {
  name: "Saika Shabir",
  title: "Diploma in Computer Science Engineering (CSE)",
  email: "Saika4772@gmail.com",
  phone: "+91 9906385131",
  address: "Kaskoot, Banihal, Jammu & Kashmir, India",
  aboutMe: "A passionate and dedicated Computer Science Engineering student with a strong willingness to learn and adapt to new technologies. I thrive in team environments, valuing honesty, teamwork, and responsible execution. Equipped with basic programming concepts and strong communication skills, I am eager to contribute fresh perspectives and hard work to dynamic technology projects.",
  careerObjective: "A motivated and hardworking Diploma holder in Computer Science Engineering seeking an opportunity to begin my career in a reputed organization where I can apply my technical knowledge, learn new skills, and contribute to the organization's growth.",
  education: [
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Government Polytechnic College",
      duration: "3 Years (Completed)",
      location: "Jammu & Kashmir, India",
      details: [
        "Gained comprehensive foundational knowledge in Computer Science and Engineering principles.",
        "Hands-on experience in Software Engineering, Computer Networks, Database Systems, and Web Technologies.",
        "Actively participated in seminars, lab practices, and technical workshops."
      ]
    }
  ],
  skills: [
    { name: "Basic Computer Knowledge", level: 90, category: "technical" },
    { name: "Basic Programming Concepts", level: 80, category: "technical" },
    { name: "Microsoft Word", level: 95, category: "tool" },
    { name: "Microsoft Excel", level: 85, category: "tool" },
    { name: "Microsoft PowerPoint", level: 90, category: "tool" },
    { name: "Internet & Email Handling", level: 95, category: "tool" },
    { name: "Communication Skills", level: 90, category: "soft" },
    { name: "Teamwork", level: 95, category: "soft" }
  ],
  strengths: [
    "Quick Learner",
    "Honest & Responsible",
    "Positive Attitude",
    "Good Communication Skills",
    "Team Player"
  ],
  languages: [
    "English",
    "Hindi",
    "Urdu"
  ],
  projects: [
    {
      title: "Student Information Management System",
      description: "Designed a clean, user-friendly desktop application to manage student profiles, courses, and grade databases, using basic programming and database principles.",
      techStack: ["Java", "SQL", "Microsoft Access"]
    },
    {
      title: "Interactive Resume Portfolio Website",
      description: "Created a modern responsive web portfolio using React and Tailwind CSS, featuring dark/light mode, smooth scroll, and an automatic print-quality PDF resume generator.",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"]
    }
  ]
};
