import React, { useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MobileHeader({handleMenuClose}:any) {

  const router = useRouter();
  const { pathname } = router;
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(pathname); 
  }, [pathname]);
  return (
    <div className="fixed left-0 top-0 w-full md:w-1/2 transition-transform duration-1000 ease-linear">
      <nav className="w-full h-full bg-black dark:bg-darksecondary p-8 shadow-lg">
        <ul className="flex flex-col h-screen gap-5 justify-center items-center text-white text-3xl m-auto leading-loose">
          <li>
            <Link
              href="/"
              onClick={handleMenuClose}
              className={` hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink === '/' ? 'text-primary dark:text-darkprimary': ''}`}
            >
              Welcome
            </Link>
          </li>
          <li>
            <Link
              href="about"
              onClick={handleMenuClose}
              className={`hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink === '/about' ? 'text-primary dark:text-darkprimary': ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="projects"
              onClick={handleMenuClose}
              className={`hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink === '/projects' ? 'text-primary dark:text-darkprimary': ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="educations"
              onClick={handleMenuClose}
              className={`hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink === '/educations'? 'text-primary dark:text-darkprimary': ''}`}
            >
              Educations
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              onClick={handleMenuClose}
              className={`hover:text-primary dark:hover:text-darkprimary cursor-pointer transition-colors duration-300 ${activeLink === '/contact' ? 'text-primary dark:text-darkprimary': ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
