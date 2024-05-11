import React from "react";
import Link from "next/link";

export default function MobileHeader({activeLink,handleMenuClose}:any) {
  return (
    <div className="fixed left-0 top-0 w-full md:w-1/2 transition-transform duration-1000 ease-linear">
      <nav className="w-full h-full bg-black dark:bg-darksecondary p-8 shadow-lg">
        <ul className="flex flex-col h-screen gap-5 justify-center items-center text-white text-3xl m-auto leading-loose">
          <li>
            <Link
              href="/"
              onClick={handleMenuClose}
              className={` hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink ? 'text-primary dark:text-darkprimary': ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="about"
              className="hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="skill"
              className="hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="educations"
              className="hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300"
            >
              Educations
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className="hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
