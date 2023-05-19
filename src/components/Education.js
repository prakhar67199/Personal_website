import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({type,time,place,info,gpa,board}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl mb-2 text-primary dark:text-primaryDark">
          {type}
        </h3>
       <span className="capitalize font-medium text-xl text-dark/60 dark:text-light/60">
        {time} | {place} | {gpa} | {board}
       </span>
       <p className="font-bold text-dark/80 w-full dark:text-light ">
        {info}
       </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul>
          <Details type="Computer Science & Engineering, B.Tech"
            time="2017-2021"
            place="Raebareli,U.P."
            gpa="7.81"
            board="AKTU"
            info="Feroze Gandhi Institute of Engineering and Technology"
          />

            <Details type="Higher  Secondary School"
            time="2015-2016"
            place="Hardoi,U.P."
            gpa="83.2%"
            board="U.P.Board"
            info="SANATAN DHARAM INTER COLLEGE"
          />

          <Details type="High School"
            time="2013-2014"
            place="Hardoi,U.P."
            gpa="86.7%"
            board="U.P.Board"
            info="SARASWATI VIDHYA MANDIR"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
