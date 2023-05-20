import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { animate, motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

// for desktop 
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative  group`}>
      {title}

      <span
        className={`
            h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
            ease duration-300 ${
              router.asPath === href ? "w-full" : "w-0"
            } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// for tablet
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative  group text-light dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
            h-[1px] inline-block bg-light  
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
            ease duration-300 ${
              router.asPath === href ? "w-full" : "w-0"
            } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};


// for dark/light Mode
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);


// for hamburger button
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      {/* hamburger button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick} >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
          >
        </span>
      </button>

      {/* for desktop */}
      <div className="w-full flex justify-between items-center lg:hidden">

        {/* nav options */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contactMe" title="Contact Me" className="ml-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap ">
          {/* twitter icon */}
          <motion.a
            href="https://twitter.com/Prakhargupta258"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>

          {/* github icon */}
          <motion.a
            href="https://github.com/prakhar67199?tab=repositories"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          {/* linkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/prakhar-chandra-gupta"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          {/* Instagram icon */}
          <motion.a
            href="https://www.instagram.com/_guptaprakhar/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>
          {/* facebook Icon */}
          <motion.a
            href="https://www.facebook.com/prakhar.gupta.37201901"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <FacebookIcon />
          </motion.a>

          {/* dark mode/light mode */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* for Tablet */}
      {isOpen ? (
        <motion.div
        initial= {{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate= {{scale:1, opacity:1}}
        className="min-w-[70vw] flex flex-col flex-wrap justify-between items-center
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90
      dark:bg-light/75 rounded-lg backdrop-blur-md py-32">

          {/* nav links */}
          <nav className="flex flex-col flex-wrap items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contactMe"
              title="Contact Me"
              className=""
              toggle={handleClick}
            />
          </nav>


          {/* social icons */}
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* twitter icon */}
            <motion.a
              href="https://twitter.com/Prakhargupta258"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>

            {/* github icon */}
            <motion.a
              href="https://github.com/prakhar67199?tab=repositories"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>

            {/* linkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/prakhar-chandra-gupta"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            {/* Instagram icon */}
            <motion.a
              href="https://www.instagram.com/_guptaprakhar/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>
            {/* facebook Icon */}
            <motion.a
              href="https://www.facebook.com/prakhar.gupta.37201901"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1 "
            >
              <FacebookIcon />
            </motion.a>

            {/* dark mode/light mode */}
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center flex-wrap rounded-full p-1 sm:mx-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>

        </motion.div>
      ) : null}

      {/* circle logo */}
      <div className="absolute left-[50%] top-2  translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
