import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcons from "./LiIcons";

const Details = ({ mainHeading, line1, line2, line3, line4 }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between "
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl mb-2 text-primary dark:text-primaryDark">
          {mainHeading}
        </h3>
        <p className="capitalize text-sm my-1 font-semibold text-dark/75 dark:text-light/75 ">
          {line1}
        </p>
        <p className="capitalize text-sm my-1 font-semibold text-dark/75 dark:text-light/75">
          {line2}
        </p>
        <p className="capitalize text-sm my-1 font-semibold text-dark/75 dark:text-light/75">
          {line3}
        </p>
        <p className="capitalize text-sm my-1 font-semibold text-dark/75 dark:text-light/75">
          {line4}
        </p>
      </motion.div>
    </li>
  );
};
const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Services</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul>
          <Details
            mainHeading="Ui/Ux Designer"
            line1="Designs user interfaces and experiences for websites, apps, and other digital products."
            line2="Works with clients to understand their needs and goals, and then creates designs that meet those needs."
            line3="Uses a variety of tools and techniques to create designs, including wireframes, mockups, and prototypes."
            line4="Tests designs with users to ensure that they are easy to use and understand."
          />
          <Details
            mainHeading="Frontend Development"
            line1="Develops the user interface (UI) and user experience (UX) of websites and web applications."
            line2="Works with HTML, CSS, and JavaScript to create interactive and engaging web pages."
            line3="Uses a variety of tools and frameworks to build web applications,Tests and debugs code to ensure that it is working properly."
            line4="Works with other developers, designers, and stakeholders to ensure that web applications meet the needs of users."
          />
          <Details
            mainHeading="Backend Development"
            line1="Works with other developers, designers, and stakeholders to ensure that web applications meet the needs of users."
            line2="Knowledge of database systems like MySQL, PostgreSQL, MongoDB, or Oracle, as well as query languages such as SQL or NoSQL."
            line3="Familiarity with designing and implementing RESTful or GraphQL APIs, understanding the principles of API architecture and best practices."
            line4="Experience with unit testing frameworks (e.g., JUnit, pytest) and debugging tools to ensure code quality and identify and fix issues."
          />
        </ul>
      </div>
    </div>
  );
};

export default Services;
