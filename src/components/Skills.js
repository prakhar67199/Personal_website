import { animate, motion } from "framer-motion";
import React from "react";

const Skill = ({ name, posx, posy }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: posx, y: posy, transition:{duration:1.5}}}
      viewport={{ once: true }}
      className="flex items-center justify-center rounded-full font-semibold
      bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-light py-3 px-6 shadow-dark curser-pointer absolute "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>

      <div
        className="w-full relative flex items-center justify-center h-screen 
        rounded-full bg-circularLight cursor-pointer dark:bg-circularDark"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-light p-8 shadow-dark"
        >
        Web
        </motion.div>
        <Skill name="HTML" posx="-22vw" posy="2vw" />
        <Skill name="CSS" posx="-5vw" posy="-11vw" />
        <Skill name="Javascript" posx="19vw" posy="6vw" />
        <Skill name="ReactJS" posx="0vw" posy="12vw" />
        <Skill name="Next.js" posx="-25vw" posy="-15vw" />
        <Skill name="Typescript" posx="27vw" posy="-20vw" />
        <Skill name="SCSS" posx="34vw" posy="-5vw" />
        <Skill name="Firebase" posx="0vw" posy="-21vw" />
        <Skill name="Tailwind Css" posx="-25vw" posy="18vw" />
        <Skill name="Github" posx="-35vw" posy="2vw" />
        <Skill name="Bootstrap" posx="35vw" posy="6vw" />
        <Skill name="Nodejs" posx="25vw" posy="19vw" />
        <Skill name="NPM" posx="14vw" posy="-2vw" />
        <Skill name="Data Structure" posx="18vw" posy="-13vw" />
      </div>
    </>
  );
};

export default Skills;
