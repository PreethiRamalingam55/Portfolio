import React, { useState } from "react";
import ThemeSwitcher from "@/components/layouts/themes";
import { Link } from "react-scroll";
export default function MobileHeader({ isMenuVisible,handleMenuClose }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`fixed inset-0 transition-transform duration-500 ease-in-out ${isMenuVisible ? 'transform translate-x-0 delay-75' : 'transform translate-x-full'}`}>
      <div className="fixed inset-0 bg-gray-600 opacity-25 z-[-10] bg-glass-transparent"></div>
      <nav className="max-w-[350px] w-full h-screen ml-auto bg-black/60 dark:bg-darksecondary p-8 shadow-lg">
        <h1
          onClick={handleMenuClose}
          className="text-white text-center my-5 cursor-pointer hover:text-gray-400 "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={32} height={32} fill="#ffff" className="m-auto text-center">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </h1>
        <ul className="flex flex-col gap-5 justify-center items-center text-white">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-primary cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-primary cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="hover:text-primary cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="educations"
              smooth={true}
              duration={500}
              className="hover:text-primary cursor-pointer"
            >
              Educations
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-primary cursor-pointer"
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
