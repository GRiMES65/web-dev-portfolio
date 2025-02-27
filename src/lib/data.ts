import React from "react";
/* import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png"; */

import ecom from "@/assets/ecom.png"

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
    name: "Contact",
    hash: "#contact",
  },
] as const;




export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Python",
  "Java",
  "Pandas",
  "Framer Motion",
  "Azure Data Studio",
  "Figma",
] as const;

export const projectsData = [
  {
    title: "Ecommerce Website",
    description:
      "I designed this simple ecommerce website to showcase vanilla HTML, CSS, and JavaScript proficiency",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: ecom,
  }
] as const;