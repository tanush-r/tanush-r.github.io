import {
  frontend,
  backend,
  database,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  angular,
  video,
  userman
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "GenAI Agents and Multi-modal RAG",
    icon: frontend,
  },
  {
    title: "Natural Language Processing & Neural Networks",
    icon: backend,
  },
  {
    title: "Hands-on experience with Cloud",
    icon: database,
  },
  {
    title: "Team Leadership Skills",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
   {
    name: 'TypeScript',
   icon: typescript,
  },
   {
    name: 'React JS',
    icon: reactjs,
  },
   {
     name: 'Redux Toolkit',
   icon: redux,
  },
   {
    name: 'Tailwind CSS',
     icon: tailwind,
   },
   {
    name: 'Node JS',
    icon: nodejs,
   },
   {
    name: 'Mongo Db',
    icon: mongodb,
   },
   {
    name: 'Angular',
    icon: angular
   },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'AI Team Lead',
    company_name: 'Subhanu Technologies & Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'AI Intern',
    company_name: 'Rare Crew',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2024 - Jul 2024',
  },
  {
    title: 'BE Computer Science',
    company_name: 'MVJ College of Engineering',
    icon: dcc,
    iconBg: '#333333',
    date: '2020 - 2024',
  },
];

const certificates = [
  {
    id: "project-1",
    name: "OpenTechX GenAI Talk",
    description: "Led and facilitated Generative AI Workshop for 50+ technology professionals, delivering hands-on training with OpenAI API integration and best practices",
    image: foundation,
    repo: "#",
    demo: "https://www.linkedin.com/posts/tanush-r-843b27216_connections-generativeai-opentechx-activity-7073557868880285696-Tt7F?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: "project-2",
    name: "Medium Blog",
    description:
      "Curated and published content on a Medium Blog, amassing over 200 likes while exploring AI algorithms and Generative AI solutions;",
    image: practitioner,
    repo: "#",
    demo: "https://medium.com/@tanushr.tech",
  },
  {
    id: "project-3",
    name: "Best Programmer Award",
    description: "Received prestigious Best Programmer Award in school-wide Cyber Awards competition, recognized for outstanding technical excellence",
    image: azure,
    repo: "#",
    demo: "/",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Fish Classification",
    description: "Using Convolutional Neural Networks(using MobileNet on Kera), to recognise the species of the given fish and using REST API return an array of probabilites for the 9 supported fish types.",
    image: deloitte,
    repo: "#",
    demo: "https://github.com/tanush-r/fish-species-cnn",
  },
  {
    id: "project-2",
    name: "Smart HR Management",
    description:
      "Smart HR Management is a cloud-based Generative AI powered HR CRM solution designed to streamline the recruitment process by automating the generation of interview questions based on a candidate's resume.",
    image: video,
    repo: "#",
    demo: "https://github.com/tanush-r/SmartHRM",
  },
  {
    id: "project-3",
    name: "Student Hub",
    description: "Student Hub is a website made with React and Flask which helps students connect woth teachers better. Teachers can post notes as raw text or a pdf, and students can view the posts and save them.",
    image: userman,
    repo: "#",
    demo: "https://github.com/tanush-r/studenthub",
  },
];

export { services, technologies, experiences, projects,certificates };
