import React, { useState } from "react";
import ThemeSwitcher from "@/components/layouts/themes";
import { Link } from "react-scroll";
export default function MobileHeader({ handleMenuClose }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 w-full h-full">
      <div className="absolute inset-0 bg-gray-600 opacity-25 z-[-10] bg-glass-transparent"></div>
      <nav className="max-w-[350px] w-full h-screen ml-auto bg-black dark:bg-darksecondary pt-32">
        <h1
          onClick={handleMenuClose}
          className="text-white text-center my-5 cursor-pointer hover:text-gray-400"
        >
          Close
        </h1>
        <ul className="flex flex-col gap-5 justify-center items-center text-white">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="hover:text-primary"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="educations"
              smooth={true}
              duration={500}
              className="hover:text-primary"
            >
              Educations
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="my-10"
            >
              <ThemeSwitcher handleCloseMenu={handleMenuClose} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
