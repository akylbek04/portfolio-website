"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { useScroll, motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import LiIcon from "./LiIcon";

type Props = {
  title: string;
  address: string;
  description: string;
  date: string;
  company: string;
  link: string;
};

const Details = ({
  title,
  address,
  description,
  date,
  company,
  link,
}: Props) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitilize font-bold text-2xl">
          {title}
          &nbsp;
          <a
            href={link && link}
            target="_blank"
            className="text-violet capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitilize font-medium text-gray-600/75  dark:text-gray-400/50">
          {date} | {address}
        </span>
        <p className="font-medium w-full ">{description}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const REF = useRef(null);
  const { scrollYProgress } = useScroll({
    target: REF,
    offset: ["start end", "center start"],
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <div ref={REF} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white/20"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col justify-between ml-4 items-start">
          {experiencesData.map((el, index) => {
            return <Details {...el} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
}
