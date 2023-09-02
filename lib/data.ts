import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import VDS from "@/public/VDS.png";
import GCETCSE from "@/public/GCET_CSE.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer Intern",
    location: "Hyderabad, India",
    description:
      "Developed a visually appealing website using WordPress and Elementor plugin.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "GCET CSE Department Website",
    description:
      "Developed a website using Wordpress for the Computer Science and Engineering (CSE) department at GCET.",
    tags: ["Wordpress"],
    imageUrl: GCETCSE,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Vaccine Distribution System",
    description:
      "Java project using Swing and JDBC to store the data of the vaccinated persons into a database with age validation and days between two doses validation.",
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    imageUrl: VDS,
  },
] as const;

export const skillsData = [
  "C",
  "Java",
  "Python",
  "DSA",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "Python",
  "Django",
] as const;
