import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getIcon } from "@/lib/get-icon";
import HeaderIcon from "@/components/icons/header_icons";
import MenuHeader from "@/components/layouts/mobileHeader";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const Header = () => {
  const siteHeaderRef = useRef() as DivElementRef;

  const links = [
    {
      label: "Home",
      link: "/",
      icon: "HomeIcon",
    },
    {
      label: "About",
      link: "about",
      icon: "AboutIcon",
    },
    {
      label: "Skills",
      link: "skill",
      icon: "SkillIcon",
    },
    {
      label: "Home",
      link: "contact",
      icon: "ContactIcon",
    },
  ];

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };
  const handleMenuClose = () => {
    setMenuVisible(false);
  };

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full relative z-20"
    >
      <div className={"innerSticky fixed top-0 z-[1000] w-full"}>
        <div
          className="text-black absolute right-6 md:right-32 top-10 border-[1px] border-textcolor rounded-full w-[55px] h-[55px] p-5 flex flex-col gap-3 items-center justify-center group hover:border-primary dark:hover:border-darkprimary"
          onClick={handleMenuToggle}
        >
          <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-darkprimary"></div>
          <div className="w-[20px] h-[2px] block bg-black dark:bg-white group-hover:bg-primary dark:group-hover:bg-darkprimary"></div>
        </div>
        <nav className="absolute right-32 top-44 hidden md:block">
          <ul className="border-[1px] border-textcolor w-14 rounded-full m-auto p-2">
            {links?.map((v, i) => (
              <li key={i} className="p-2">
                <Link
                  href={v.link}
                >
                  {getIcon({ iconList: HeaderIcon, iconName: v.icon })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
          {isMenuVisible && (
            <nav>
              <MenuHeader handleMenuClose={handleMenuClose} />
            </nav>
          )}
      </div>
    </header>
  );
};

export default Header;
