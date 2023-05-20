import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-light text-dark  flex 
        items-center justify-center  rounded-full text-2xl font-bold
        border border-solid border-black
      dark:border-light dark:bg-dark dark:text-light"
        whileHover={{ 
          backgroundColor: [
            "#F5F5F5",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#F5F5F5",
          ],
          color: "rgb(0,0,0)",
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        PCG
      </MotionLink>
    </div>
  );
};

export default Logo;
