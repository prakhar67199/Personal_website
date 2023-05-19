import Link from "next/link";
import React from "react";
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
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light"
    >
      {/* nav options */}
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contactMe" title="Contact Me" className="ml-4" />
      </nav>

      {/* circle logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

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
    </header>
  );
};

export default Navbar;
