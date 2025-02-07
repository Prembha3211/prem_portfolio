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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import emailicon from "../assets/email.png";
import messengericon from "../assets/messenger.png";
import whatsappicon from "../assets/whatsapp.png";

import zent from "../assets/zent.mp4";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

export const project1Img = project1;
export const project2Img = project2;
export const project3Img = project3;

import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid4 from "../assets/grid4.png";
import glob from "../assets/glob.mp4";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const grid1Img = grid1;
export const grid2Img = grid2;
export const grid4Img = grid4;
export const globvid = glob;

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    des: "Unlock the potential of cloud computing with Microsoft Azure Fundamentals",
    img: "/src/assets/applepro.png",
    iconLists: [
      "/src/assets/Azure.png",
      "/src/assets/wing.png",
      "/src/assets/Azure.png",
      "/src/assets/Azservices.svg",
      "/src/assets/fm.svg",
    ],
    link: "Visit",
  },
  {
    id: 2,
    title: "Cypress Automation Testing",
    des: "Simplify your testing workflow with Cypress. Seamlessly automate modern web applications easy-to-use testing tools.",
    video: "/src/assets/zent.mp4",
    iconLists: [
      "/src/assets/cypress.svg",
      "/src/assets/pngwing.png",
      "/src/assets/ts.svg",
      "/src/assets/stream.svg",
      "/src/assets/c.svg",
    ],
    link: "Visit",
  },
];

export { emailicon, messengericon, whatsappicon };

import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const contactInfo = [
  {
    name: "Email",
    value: "mradinuba@gmail.com",
    link: "mailto:mradinuba@gmail.com",
    icon: emailicon,
    btnIcon: MdOutlineEmail,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Emmanuel Eze",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: RiMessengerLine,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+2348149121918",
    link: "https://api.whatsapp.com/send?phone=+2348149121918",
    icon: whatsappicon,
    btnIcon: BsWhatsapp,
    color: "rgb(38,234,112)",
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: SiFiverr,
    link: "",
  },
  {
    name: "Github",
    icon: AiFillGithub,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: AiFillLinkedin,
    link: "",
  },
  {
    name: "Youtube",
    icon: AiFillYoutube,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contactInfo,
};
