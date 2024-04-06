import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Dynamic Computer Science graduate adept at crafting innovative solutions and driving results in software engineering. Proficient in Python, Javascript, and web development, I thrive in transforming ideas into impactful applications. Eager to contribute my technical skills and passion for problem-solving to your team.`;

export const ABOUT_TEXT =  `Hello! I'm a recent graduate from DePaul University seeking corporate experience in Software Development. Proficient in Python, JavaScript, and C#, I enjoy using frameworks like Flask, NodeJS, and .NET to build great applications. Besides coding, I'm passionate about playing soccer, spending quality time with friends, and traveling.` 
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
        "A fully responsive personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Javascript", "Tailwind CSS", "React", "Vite", "Framer-Motion"],
  },
  {
    title: "KhayaKeys",
    image: project1,
    description:
      "Developed a Python program using PySimpleGUI and Pynput to create a streamlined automated macro system to input whatever you'd like!",
    technologies: ["Python", "Pynput", "PySimpleGUI"],
  },
  {
    title: "Flask Tire App",
    image: project2,
    description:
      "An application for managing inventory and tire sizes, with features such as adding tires, setting size, and quantity tracking.",
    technologies: ["Python", "HTML", "CSS", "Flask", "SQLite", "Bootstrap"],
  },
  {
    title: "Discord Bot",
    image: project4,
    description:
      "Discord bot coded in Python, seamlessly integrating with the Gamdom API to streamline affiliate management. Successfully optimized data retrieval processes, enhancing overall team efficiency",
    technologies: ["Discord.py", "Requests", "Python"],
  },
];

export const CONTACT = {
  email: "raven@ravenkhaya.com",
};
