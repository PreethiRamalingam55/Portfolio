import React from "react";
import ThemeSwitcher from "@/components/layouts/themes";
import { Link } from "react-scroll";
export default function MobileHeader({handleMenuClose}) {
  return (
    <div className="fixed left-0 right-0 w-full h-full">
      <div className="absolute inset-0 bg-[#565656] optacity-25 z-[-10]"></div>
      <nav className="max-w-[350px] w-full h-screen ml-auto bg-black pt-32">
        <h1 onClick={handleMenuClose} >close</h1>
        <ul className="flex flex-col gap-5 justify-center items-center">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <div className="my-5">
            <ThemeSwitcher />
          </div>
        </ul>
      </nav>
    </div>
  );
}
