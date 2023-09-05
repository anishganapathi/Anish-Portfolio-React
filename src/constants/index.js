import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  vitopia,
  tesla,
  shopify,
  Vitopia1,
  Stroke1,
  Drum1,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Vitopia Web App",
    icon: vitopia,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Developed Vitopia(2023) web application using React.js,tailwind.css other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI Designer",
    company_name: "Vitopia Mobile App",
    icon: vitopia,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Designed User-Interface for Vitopia(2023) Mobile application.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Vitopia(2023) Website",
    description:
      "Web-based platform that allows students of VIT-AP to search, book tickets for various events and providing a convenient and efficient Web-app for the two-day event.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Vitopia1,
    source_code_link: "https://github.com/anishganapathi/Vitopia-2023-website",
  },
  {
    name: "Prediction Analysis",
    description:
      "Flask Application involves using tabular data and machine learning techniques to predict the risk of an individual experiencing a stroke in the future.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Stroke1,
    source_code_link: "https://github.com/anishganapathi/Stroke-prediction-analysis",
  },
  {
    name: "Drum Simulator",
    description:
      "Web application designed to provide users with an interactive drumming experience. Built using HTML, CSS & JS, allows users to play a drum in their browser.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Drum1,
    source_code_link: "https://github.com/anishganapathi/Drum-simulator-Basic-JS",
  },
];

export { services, technologies, experiences, projects };
