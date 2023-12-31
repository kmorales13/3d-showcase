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
  exportcomm,
  rent,
  freeagent,
  ectotec,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets"

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
]

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile Developement",
    icon: mobile,
  },
  {
    title: "FullStack Developement",
    icon: backend,
  },
]

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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Software Engineer (FrontEnd)",
    company_name: "RentPath",
    icon: rent,
    iconBg: "#383E56",
    date: "May 2021 - July 2023",
    points: [
      "Member of the UI/UX team. Developed performant components for Rent's flagship products using React and TypeScript.",
      "Collaborated with cross-functional teams to deliver new features and\
      enhancements, ensuring high-quality and timely releases.",
      "Implemented automated testing using Jest and Testing-library, reducing the\
      number of bugs and improving overall code quality.",
      "Optimized the performance of Rent's web application, resulting in faster load\
      times and improved user experience.",
    ],
  },
  {
    title: "Sr. Software Engineer (FullStack)",
    company_name: "FreeAgent CRM",
    icon: freeagent,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Mar 2020",
    points: [
      "Developed FreeAgent's core web and mobile applications using ReactJS,\
      ReactNative, and Redux.",
      "Developed and maintained FreeAgent's database using PostgreSQL, ensuring high\
      availability and data consistency.",
      "Worked closely with product managers and designers to deliver new features and\
      enhancements, ensuring high-quality and timely releases while gaining startup\
      experience.",
      "Mentored junior developers, providing guidance and support in their professional\
      development.",
    ],
  },
  {
    title: "Sr. Software Engineer (FullStack)",
    company_name: "EctoTec",
    icon: ectotec,
    iconBg: "#383E56",
    date: "Sep 2018 - Dec 2018",
    points: [
      "Maintained EctoTec's clients' core web applications using C#, ASP.Net, and Oracle\
      DB.",
      "Collaborated with cross-functional teams to deliver new features and\
      enhancements, ensuring high-quality and timely releases.",
      "Developed complex user interfaces using AngularJS and ReactJS, providing an\
      intuitive user experience for EctoTec's clients.",
      "Designed and maintained EctoTec's database using Oracle DB and PL/SQL,\
      ensuring high availability and data consistency.",
    ],
  },
  {
    title: "Sr. Software Engineer (FullStack)",
    company_name: "ExportCommunity",
    icon: exportcomm,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Sep 2018",
    points: [
      "Designed and developed ExportCommunity's web platform using Angular 6 and\
      ReactNative, from the ground up.",
      "Implemented NodeJS and FeathersJS to build a performant and scalable API,\
      reducing server load and improving overall application performance.",
      "Configured OneSignal for real-time notification delivery to ExportCommunity's\
      customers.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kevin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kevin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kevin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Flexibble",
    description:
      "Flexibble | Next.js Showcase App",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "blue-text-gradient",
      },
      {
        name: "grafbase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kmorales13/nextjs-13-showcase",
  },
  {
    name: "CrowdFunding",
    description:
      "CrowdFunding | Web 3.0 Showcase App",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "smart-contracts",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kmorales13/web3-showcase",
  },
  {
    name: "3D Portfolio",
    description:
      "3D Portfolio | Three.js Showcase App",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "fiber",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kmorales13/3d-showcase",
  },
]

export { services, technologies, experiences, testimonials, projects }