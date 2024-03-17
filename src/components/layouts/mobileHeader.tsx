import React, { useState } from "react";
import ThemeSwitcher from "@/components/layouts/themes";
import Link from "next/link";

export default function MobileHeader({ handleMenuClose }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 w-full h-full">
      <div className="absolute inset-0 bg-gray-600 opacity-25 z-[-10] bg-glass-transparent"></div>
      <nav className="max-w-[350px] w-full h-screen ml-auto bg-black pt-32">
        <h1 onClick={handleMenuClose} className="text-white text-center my-5 cursor-pointer hover:text-gray-400">Close</h1>
        <ul className="flex flex-col gap-5 justify-center items-center text-white">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/skill" className="hover:text-primary">
             Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-primary">
             Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
          <li>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="my-10">
              <ThemeSwitcher handleCloseMenu={handleMenuClose} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
