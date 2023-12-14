"use client";

import React from "react";
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
      <section className="bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  flex items-center justify-between transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">About me</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            Hello, I'm Akylbek Zamirov, a detail-oriented Frontend Developer
            passionate about creating exceptional digital experiences. With
            expertise in React, JavaScript and HTML&CSS, I enjoy simplifying
            intricate concepts into user-friendly designs. Let's work together
            on something extraordinary.
          </p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            During my time at Cargo Fleet, I led the development of an advanced
            Fleet Management application, streamlining document handling and
            enhancing real-time tracking. Empowering efficient decision-making
            and seamless operations, the platform optimized efficiency within
            the trucking industry.
          </p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            Currently, I'm actively seeking new opportunities in
            Fullstack/Frontend positions.
          </p>
        </div>

        <Image
          src={about}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block w-[25rem] rounded-t-lg shadow-2xl
        "
        />
      </section>
      
    </motion.section>
  );
}
