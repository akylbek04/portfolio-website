"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After transitioning from a <span className="font-medium">Biology</span>{" "}
        major to <span className="font-medium">Computer Science</span>, I
        wholeheartedly embraced my passion for programming. Through a coding
        bootcamp, I cultivated a strong foundation in{" "}
        <span className="font-medium"> web development</span>, where my
        favorite aspect is the thrill of problem-solving and crafting elegant
        solutions.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My expertise
        lies in{" "}
        <span className="font-medium">React, Javascript(Typescript)</span>. I am
        also familiar with Next.js, Node.js and MongoDB. My commitment to
        continuous growth is unwavering. I recently completed a certification
        course in <span className="font-medium">Typescript</span>. I am excited to
        contribute my problem-solving prowess and creativity to a dynamic
        software development team in a full-time role.
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I had diverse interests,
        such as chess, football, and reading, fueling my curiosity for the human
        mind's intricacies. I'm also learning the art of ping pong. I believe
        that these diverse pursuits enhance my adaptability and creativity,
        qualities I'm eager to bring to the table as a developer.
      </p>
    </motion.section>
  );
}
