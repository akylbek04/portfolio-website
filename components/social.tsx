import Link from "next/link";
import React from "react";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { FaEnvelope, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://linkedin.com"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        href="/CV.pdf"
        download
      >
        Download CV{" "}
        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a>
      <Link
        href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        // onClick={() => {
        //   setActiveSection("Contact");
        //   setTimeOfLastClick(Date.now());
        // }}
      >
        Contact me here{" "}
        <BsEnvelope className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>
    </div>
  );
};

export default Social;
