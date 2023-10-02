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
        After changing my major from{" "}
        <span className="font-medium">Biology</span> to{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium"> web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Javascript, Typescript</span>. I
        am also familiar with Next.js, Node.js and MongoDB. I'm passionate about
        continuous learning. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, playing chess and football. I also enjoy{" "}
        <span className="font-medium">reading books</span>. I am currently
        reading about <span className="font-medium">psychology</span>. I'm also
        learning how to play ping pong.
      </p>
    </motion.section>
  );
}
