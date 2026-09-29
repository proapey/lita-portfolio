export const profile = {
  name: "Solita Thearos",
  role: "Business Information Technology & Business Administration Student",
  tagline: ["Youth Leader", "Educator", "Community Advocate"],
  email: "solitathearos@gmail.com",
  phone: "+855 85 629 599",
  location: "Meanchey, Phnom Penh, Cambodia",
  summary:
    "Business Administration and Business Information Technology student with experience in youth leadership, education, and international engagement. Experienced in teaching, mentoring, and facilitating youth programmes that promote learning, leadership, and community development. Committed to continuous learning and using my skills to create positive social impact.",
};

export const stats = [
  { value: 8, suffix: "+", label: "Leadership Roles" },
  { value: 5, suffix: "+", label: "Languages" },
  { value: 15, suffix: "+", label: "Volunteer Projects" },
  { value: 1, suffix: "", label: "International Youth Delegate", display: "Global" },
];

export const quickFacts = [
  { icon: "📍", text: "Phnom Penh, Cambodia" },
  { icon: "🎓", text: "Limkokwing University" },
  { icon: "🎓", text: "Paragon International University" },
  { icon: "🌏", text: "Youth Delegate" },
  { icon: "👩‍🏫", text: "Chinese Teacher" },
  { icon: "🤝", text: "Peer Mentor" },
];

export const experience = [
  {
    title: "Peer Mentor",
    org: "AusCam Freedom Project",
    period: "2025 – Present",
    sortYear: 2025,
    points: [
      "Facilitate Global University for Lifelong Learning (GULL)",
      "Youth coaching",
      "Digital safety workshops",
      "Online child protection",
      "Digital literacy",
      "Community campaigns",
      "Citizen research",
    ],
  },
  {
    title: "Part-time Chinese Teacher",
    org: "Beijing International Academy",
    period: "2026 – Present",
    sortYear: 2026,
    points: ["Chinese language teaching", "Interactive learning", "Classroom engagement"],
  },
  {
    title: "Chinese Club Tutor",
    org: "Bamnang Housing",
    period: "2026",
    sortYear: 2026,
    points: ["Weekly tutoring", "Communication practice"],
  },
  {
    title: "Youth Delegate",
    org: "Violence Ends With Us Global Youth-led Summit — Philippines",
    period: "2026",
    sortYear: 2026,
    points: [
      "Represented Cambodia",
      "International Hackathon",
      "Cross-cultural collaboration",
      "Violence prevention initiatives",
    ],
  },
  {
    title: "Student Ambassador",
    org: "Limkokwing University",
    period: "2024 – Present",
    sortYear: 2024,
    points: [],
  },
  {
    title: "Secretary",
    org: "UYFC — Paragon International University",
    period: "2024 – 2025",
    sortYear: 2024,
    points: [],
  },
  {
    title: "Student Ambassador",
    org: "Spring Education Centre",
    period: "2024 – Present",
    sortYear: 2024,
    points: [],
  },
  {
    title: "Debate Judge",
    org: "VS-Lead Debate Competition",
    period: "2026",
    sortYear: 2026,
    points: [],
  },
];

export const degrees = [
  {
    degree: "Bachelor of Business Information Technology",
    school: "Limkokwing University",
    cgpa: "4.00",
    level: "Junior",
    period: "2024 – 2027",
  },
  {
    degree: "Bachelor of Business Administration",
    school: "Paragon International University",
    cgpa: "3.70",
    level: "Junior",
    period: "2024 – 2027",
  },
];

export const otherEducation = [
  {
    programme: "Chinese Programme",
    school: "中文和电脑专业学校",
    period: "2023 – 2025",
    sortYear: 2023,
  },
  {
    programme: "English Programme",
    school: "Australian Centre for Education (ACE)",
    period: "2018 – 2023",
    sortYear: 2018,
  },
  {
    programme: "Spring Education Centre",
    school: "Spring Education Centre",
    period: "2019 – 2023",
    sortYear: 2019,
  },
  {
    programme: "General Education",
    school: "Sovannaphumi School",
    period: "2015 – 2023",
    sortYear: 2015,
  },
];

export const certifications = [
  { title: "UX/UI & Web Development", issuer: "Sisters of Code", icon: "Palette" },
  { title: "Turing Hackathon Cycle 8", issuer: "Turing", icon: "Code2" },
  { title: "Public Speaking", issuer: "AmCham Cambodia", icon: "Mic" },
  { title: "Indonesian Language BIPA Basic 1", issuer: "BIPA Programme", icon: "Languages" },
  { title: "IELTS Academic — Band 6.5", issuer: "British Council", icon: "BadgeCheck" },
] as const;

export const achievements = [
  { title: "Grade A — Cambodian National Examination", year: "2023", sortYear: 2023 },
  { title: "2nd Place — Chinese Public Speaking Competition", year: "2024", sortYear: 2024 },
  { title: "Youth Delegate — Global Summit, Philippines", year: "2026", sortYear: 2026 },
  { title: "Debate Judge — Ministry of Education", year: "2026", sortYear: 2026 },
  { title: "Top Student — Indonesian Language Programme", year: "—", sortYear: 2026 },
];

export const skillGroups = [
  {
    name: "Leadership",
    icon: "Users",
    skills: [
      { label: "Leadership & Team Management", level: 92 },
      { label: "Youth Mentoring", level: 95 },
      { label: "Event Coordination", level: 88 },
      { label: "Community Engagement", level: 93 },
    ],
  },
  {
    name: "Technology",
    icon: "MonitorSmartphone",
    skills: [
      { label: "UX/UI Design", level: 85 },
      { label: "Web Development", level: 78 },
      { label: "Digital Marketing", level: 82 },
      { label: "Graphic Design", level: 80 },
    ],
  },
  {
    name: "Professional",
    icon: "Briefcase",
    skills: [
      { label: "Public Speaking", level: 94 },
      { label: "Communication", level: 92 },
      { label: "Marketing", level: 80 },
      { label: "Project Coordination", level: 86 },
    ],
  },
] as const;

export const languages = [
  { name: "Khmer", level: "Native", value: 100 },
  { name: "English", level: "Professional", value: 85 },
  { name: "Chinese (Mandarin)", level: "Advanced", value: 78 },
  { name: "Thai", level: "Intermediate", value: 60 },
  { name: "Korean", level: "Basic", value: 35 },
  { name: "Indonesian", level: "Basic", value: 35 },
];

export const testimonials = [
  {
    quote:
      "Solita brings rare maturity to youth facilitation. She turns a room of hesitant students into a group that speaks up, asks questions, and follows through.",
    name: "Programme Coordinator",
    role: "AusCam Freedom Project",
  },
  {
    quote:
      "Her Chinese classes are structured, warm, and genuinely engaging. Students look forward to every session and their confidence shows it.",
    name: "Academic Supervisor",
    role: "Beijing International Academy",
  },
  {
    quote:
      "As a delegate she represented Cambodia with clarity and empathy, and contributed strongly to our hackathon team under real time pressure.",
    name: "Summit Organiser",
    role: "Violence Ends With Us Global Youth-led Summit",
  },
];
