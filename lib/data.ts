import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import leetclone from "@/public/leetclone.png";
import discord from "@/public/discord.png";
import netflix from "@/public/netflix.png";

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
    title: "Student",
    company: "Seytech SWE Bootcamp",
    link: "https://www.seytech.co/",
    address: "Remote",
    description:
      "I completed my studies in 6 months and secured a front-end developer position during the final month of my program.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Apr - 2021 Oct",
  },
  {
    title: "Front-End Developer",
    company: "Cargo Fleet",
    link: "",
    address: "Remote",
    description:
      "I worked as a front-end developer for the past two years, during which I had the opportunity to lead a team and was subsequently promoted to Frontend Lead.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 Sep - 2023 Oct",
  },
] as const;

export const projectsData = [
  {
    title: "LeetClone",
    description:
      "The project provides a dynamic coding challenge environment, enabling users to practice and improve their algorithmic problem-solving skills.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Firebase"],
    imageUrl: leetclone,
    url: "https://leet-clone.netlify.app",
  },
  {
    title: "Netflix clone",
    description:
      "is a cutting-edge streaming platform developed using a lot of frontend tools, providing an immersive entertainment experience.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Typescript",
      "MongoDB",
      "Prisma",
      "NextAuth",
    ],
    imageUrl: netflix,
    url: "https://jovial-strudel-a44c2f.netlify.app",
  },
  {
    title: "Discord clone",
    description:
      "A real-time chat application crafted with Next.js, React.js, and TypeScript, leveraging Socket.io for instant messaging and MySQL with Prisma for seamless data handling.",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Socket.io",
      "Prisma",
      "Tailwind/Shadcn",
      "MySQL",
    ],
    imageUrl: discord,
    url: "https://discord-clone-production-a42f.up.railway.app",
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux toolkit / Redux Thunk",
  "Next.js",
  "Git/GitHub",
  "Framer Motion",
  "Tailwind CSS/Shandcn/ui",
  "Material UI",
  "Bootstrap 5",
  "Styled components",
  "Node.js",
  "Python",
  "C#",
  "AWS",
  "MySQL",
  "NoSQL",
  "Prisma",
  "Socket.io",
  "Firebase/NextAuth",
  "CI/CD",
  "RTL/Jest",
  "Vercel/Heroku/Netlify",
] as const;
