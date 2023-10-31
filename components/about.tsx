"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import about from "@/public/about.jpg";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-screen-xl mx-auto text-left flex flex-col md:flex-row items-center justify-center leading-8 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="h-full flex w-full bg-gray-100 rounded-lg dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10">
        <div className="w-full md:w-1/2 p-10 pe-5">
          <h2 className="text-3xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-gray-100">
            About me
          </h2>
          <p className="text-lg mb-6 md:mb-8 text-gray-800 dark:text-gray-300">
            Hello, I'm Akylbek Zamirov, a detail-oriented Frontend Developer
            passionate about creating exceptional digital experiences. With
            expertise in React, JavaScript and HTML&CSS, I enjoy simplifying
            intricate concepts into user-friendly designs. Let's work together
            on something extraordinary.
          </p>
          <p className="text-lg mb-6 md:mb-8 text-gray-800 dark:text-gray-300">
            During my time at Cargo Fleet, I led the development of an advanced
            Fleet Management application, streamlining document handling and
            enhancing real-time tracking. Empowering efficient decision-making
            and seamless operations, the platform optimized efficiency within
            the trucking industry.
          </p>
          <p className="text-lg mb-6 md:mb-8 text-gray-800 dark:text-gray-300">
            Currently, I'm actively seeking new opportunities in
            Fullstack/Frontend positions.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end p-10 ps-5">
          <Image
            src={about}
            alt="about_jpg"
            className="max-w-3/4 md:max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </motion.section>
  );
}
