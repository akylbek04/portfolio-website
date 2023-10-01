import React from "react";
import Social from "./social";
import Data from "./info";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Home = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <></>
    // <motion.section
    //   ref={ref}
    //   className="home_section"
    //   id="home"
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    // >
    //   <div className="home__container container grid">
    //     <div className="home__content grid">
    //       <Social />

    //       <div className="home__img"></div>

    //       <Data />
    //     </div>
    //   </div>
    // </motion.section>
  );
};

export default Home;
