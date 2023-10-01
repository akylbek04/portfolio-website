import React from "react";
import profileImg from "@/public/profile.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsSend } from "react-icons/bs";

const Data = () => {
  return (
    <motion.div
      className="home__data"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="home__title">
        Akylbek Zamirov
        <Image src={profileImg} alt="profile-img" quality={95} />
      </h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </h1>
      <a href="#contact" className="">
        Say Hello <BsSend/>
      </a>
    </motion.div>
  );
};

export default Data;
