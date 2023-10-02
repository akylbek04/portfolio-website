import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import leetclone from "@/public/leetclone.png";
import whatsapp from "@/public/whatsapp.png";
import blog from "@/public/blog.png";

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
    title: "Graduate",
    company: "Seytech SWE Bootcamp",
    link: "https://www.seytech.co/",
    address: "Remote",
    description:
      "I completed my studies in just 6 months and secured a front-end developer position during the final month of my program.",
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
    date: "2021 Sep - 2023 Aug",
  },
] as const;

export const projectsData = [
  {
    title: "LeetClone",
    description:
      "The project provides a dynamic coding challenge environment, enabling users to practice and improve their algorithmic problem-solving skills.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Firebase"],
    imageUrl: leetclone,
  },
  {
    title: "WhatsApp clone",
    description:
      "The project offers real-time chat, video calls, and voice calls in a responsive and secure interface. Built with advanced technologies, it prioritizes user privacy and seamless communication.",
    tags: [
      "Next.js",
      "Socket.io",
      "Tailwind CSS",
      "Node.js",
      "PostgresSQL",
      "Prisma",
      "Zegocloud",
    ],
    imageUrl: whatsapp,
  },
  {
    title: "LMS Platform",
    description:
      "This platform provides an intuitive interface for managing courses, secure payments with Stripe integration, and high-quality video streaming via Mux. It's powered by efficient data management using Prisma and MySQL, offering a comprehensive online learning experience.",

    tags: ["Next 13", "React", "Stripe", "Mux", "Prisma", "Tailwind", "MySQL"],
    imageUrl: blog,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "Material UI",
  "Styled components",
  "Node.js",
  "Redux",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
